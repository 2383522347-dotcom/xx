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
    const toSave = { password, data };
    const ok = await setStored(key, JSON.stringify(toSave));
    if (!ok) return res.status(500).json({ error: "保存失败" });
    return res.status(200).json({ ok: true, data: data });
  }

  // 拉取：无账号返回 401，任意设备可凭账号密码登录
  if (!obj) return res.status(401).json({ error: "账号不存在" });
  if (obj.password !== password) {
    return res.status(401).json({ error: "密码错误" });
  }
  return res.status(200).json({ data: obj.data || {} });
}
