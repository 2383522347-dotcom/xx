/**
 * ElevenLabs TTS 代理：将文字转成 AI 语音
 * 需在 Vercel 环境变量中配置：ELEVENLABS_API_KEY、ELEVENLABS_VOICE_ID（可选）
 */

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const ELEVENLABS_VOICE_ID = process.env.ELEVENLABS_VOICE_ID || "JBFqnCBsd6RMkjVDRZzb"; // 默认英文女声 Rachel

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!ELEVENLABS_API_KEY) {
    return res.status(503).json({ error: "TTS not configured", hint: "请在 Vercel 环境变量中添加 ELEVENLABS_API_KEY" });
  }

  let text = "";
  if (req.method === "POST" && req.body && typeof req.body === "object") {
    text = String(req.body.text || "").trim();
  } else if (req.method === "GET" && req.query && req.query.text) {
    text = String(req.query.text || "").trim();
  }

  if (!text || text.length > 500) {
    return res.status(400).json({ error: "请提供 text 参数，且不超过 500 字符" });
  }

  const voiceId = req.body?.voice_id || req.query?.voice_id || ELEVENLABS_VOICE_ID;

  try {
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}`;
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "xi-api-key": ELEVENLABS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        model_id: "eleven_multilingual_v2",
        voice_settings: { stability: 0.5, similarity_boost: 0.75 },
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      let errMsg = "ElevenLabs 请求失败";
      try {
        const errJson = JSON.parse(errText);
        if (errJson.detail?.message) errMsg = errJson.detail.message;
        else if (errJson.message) errMsg = errJson.message;
      } catch (e) {}
      return res.status(resp.status).json({ error: errMsg });
    }

    const audioBuffer = await resp.arrayBuffer();
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=3600");
    return res.status(200).send(Buffer.from(audioBuffer));
  } catch (e) {
    console.error("TTS error:", e);
    return res.status(500).json({ error: "TTS 服务异常：" + (e.message || "未知错误") });
  }
}
