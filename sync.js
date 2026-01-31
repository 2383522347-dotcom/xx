/**
 * 三端同步接口：拉取/保存账号与学习数据
 * 部署到 Vercel 后，手机/电脑/平板打开同一链接并登录即可实时同步
 * 需在 Vercel 项目设置中添加环境变量：UPSTASH_REDIS_REST_URL、UPSTASH_REDIS_REST_TOKEN（Upstash 免费创建）
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

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return res.status(500).json({
      error: "未配置同步服务。请在 Vercel 项目设置中添加环境变量：UPSTASH_REDIS_REST_URL、UPSTASH_REDIS_REST_TOKEN（在 upstash.com 免费创建 Redis 后复制）",
    });
  }

  const { username, password, data } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: "缺少 username 或 password" });
  }

  const key = "mech:" + String(username).trim();
  const stored = await redisGet(key);
  let obj = null;
  if (stored) {
    try {
      obj = JSON.parse(stored);
    } catch (e) {}
  }

  if (data !== undefined) {
    if (obj && obj.password !== password) {
      return res.status(401).json({ error: "密码错误" });
    }
    const toSave = { password, data };
    const ok = await redisSet(key, JSON.stringify(toSave));
    if (!ok) return res.status(500).json({ error: "保存失败" });
    return res.status(200).json({ ok: true, data: data });
  }

  if (!obj || obj.password !== password) {
    return res.status(401).json({ error: "密码错误" });
  }
  return res.status(200).json({ data: obj.data || {} });
}
