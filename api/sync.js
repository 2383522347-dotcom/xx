/**
 * Vercel Serverless: /api/sync
 * 有 Upstash 环境变量时用 Redis 持久化；没有则用内存（同实例内有效，消除 404）
 */

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

async function redisGet(key) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return null;
  const res = await fetch(`${UPSTASH_URL}/get/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
  });
  const json = await res.json();
  return json.result != null ? json.result : null;
}

async function redisSet(key, value) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return false;
  const res = await fetch(`${UPSTASH_URL}/set/${encodeURIComponent(key)}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    body: value,
  });
  const json = await res.json();
  return json.result === "OK";
}

// 无 Redis 时用内存（仅当前实例，重启/多实例不共享）
const memoryStore = typeof global !== "undefined" ? (global.__mechSyncStore = global.__mechSyncStore || {}) : {};

async function getStored(key) {
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    return await redisGet(key);
  }
  return memoryStore[key] || null;
}

async function setStored(key, value) {
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    return await redisSet(key, value);
  }
  memoryStore[key] = value;
  return true;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { username, password, data } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: "缺少 username 或 password" });
  }

  const key = "mech:" + String(username).trim();
  const stored = await getStored(key);
  let obj = null;
  if (stored) {
    try {
      obj = typeof stored === "string" ? JSON.parse(stored) : stored;
    } catch (e) {}
  }

  if (data !== undefined) {
    if (obj && obj.password !== password) {
      return res.status(401).json({ error: "密码错误" });
    }
    const merged = { ...data };
    if (obj && obj.data && typeof obj.data === "object") {
      const existing = obj.data;
      if (existing.studyDate && merged.studyDate === existing.studyDate) {
        const a = Number(existing.studyMsToday) || 0;
        const b = Number(merged.studyMsToday) || 0;
        merged.studyMsToday = Math.max(a, b);
      }
      merged.coins = Math.max(Number(existing.coins) || 0, Number(merged.coins) || 0);
      if (existing.vocabLevelIndex !== undefined && existing.vocabLevelIndex !== null && merged.vocabLevelIndex !== undefined && merged.vocabLevelIndex !== null) {
        var ei = Number(existing.vocabLevelIndex) || 0;
        var mi = Number(merged.vocabLevelIndex) || 0;
        merged.vocabLevelIndex = Math.max(ei, mi);
        merged.vocabLevel = mi >= ei ? (merged.vocabLevel || existing.vocabLevel) : (existing.vocabLevel || merged.vocabLevel);
      }
      if (Array.isArray(existing.learnedWords) || Array.isArray(merged.learnedWords)) {
        const set = {};
        (existing.learnedWords || []).forEach(function (w) { set[(w && w.en) || ""] = w; });
        (merged.learnedWords || []).forEach(function (w) { set[(w && w.en) || ""] = w; });
        merged.learnedWords = Object.keys(set).filter(Boolean).map(function (k) { return set[k]; });
      }
    }
    const toSave = { password: obj ? obj.password : password, data: merged };
    const ok = await setStored(key, JSON.stringify(toSave));
    if (!ok) return res.status(500).json({ error: "保存失败" });
    return res.status(200).json({ ok: true, data: merged });
  }

  // 拉取：无账号返回 401，任意设备可凭账号密码登录
  if (!obj) return res.status(401).json({ error: "账号不存在" });
  if (obj.password !== password) {
    return res.status(401).json({ error: "密码错误" });
  }
  return res.status(200).json({ data: obj.data || {} });
}
