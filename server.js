/**
 * 一体化服务：提供网站静态页面 + 账号/学习数据同步接口
 * 运行: npm start  然后打开 http://localhost:3000
 * 同一账号在手机/平板/电脑登录即可实时同步
 */

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "sync-data.json");

app.use(cors({ origin: true }));
app.use(bodyParser.json({ limit: "2mb" }));

function loadStore() {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(raw);
  } catch (e) {
    return { accounts: {}, userData: {} };
  }
}

function saveStore(store) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(store, null, 2), "utf8");
}

// 同步接口：拉取或保存
app.post("/api/sync", function(req, res) {
  const { username, password, data } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: "缺少 username 或 password" });
  }

  const store = loadStore();
  const { accounts, userData } = store;

  if (data !== undefined) {
    if (accounts[username] && accounts[username] !== password) {
      return res.status(401).json({ error: "密码错误" });
    }
    accounts[username] = password;
    const merged = { ...data };
    const existing = userData[username];
    if (existing) {
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
        (merged.learnedWords || []).forEach(function (w) {
          const k = (w && w.en) || "";
          if (!k) return;
          const ex = set[k];
          const mergedWord = Object.assign({}, ex || {}, w || {});
          if (ex && ex.lastReviewDate && w && w.lastReviewDate) {
            mergedWord.lastReviewDate = (ex.lastReviewDate >= w.lastReviewDate) ? ex.lastReviewDate : w.lastReviewDate;
          }
          set[k] = mergedWord;
        });
        merged.learnedWords = Object.keys(set).filter(Boolean).map(function (k) { return set[k]; });
      }
    }
    userData[username] = merged;
    saveStore(store);
    return res.json({ ok: true, data: userData[username] });
  }

  if (!accounts[username]) {
    return res.status(401).json({ error: "账号不存在" });
  }
  if (accounts[username] !== password) {
    return res.status(401).json({ error: "密码错误" });
  }
  res.json({ data: userData[username] || {} });
});

// ElevenLabs TTS 代理（本地测试用，Vercel 部署时用 api/tts.js）
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const ELEVENLABS_VOICE_ID = process.env.ELEVENLABS_VOICE_ID || "JBFqnCBsd6RMkjVDRZzb";

app.post("/api/tts", function(req, res) {
  if (!ELEVENLABS_API_KEY) {
    return res.status(503).json({ error: "TTS not configured", hint: "请设置环境变量 ELEVENLABS_API_KEY" });
  }
  var text = (req.body && req.body.text) ? String(req.body.text).trim() : "";
  if (!text || text.length > 500) {
    return res.status(400).json({ error: "请提供 text 参数，且不超过 500 字符" });
  }
  var voiceId = (req.body && req.body.voice_id) || ELEVENLABS_VOICE_ID;
  var body = JSON.stringify({
    text: text,
    model_id: "eleven_multilingual_v2",
    voice_settings: { stability: 0.5, similarity_boost: 0.75 },
  });
  var https = require("https");
  var opt = {
    hostname: "api.elevenlabs.io",
    path: "/v1/text-to-speech/" + encodeURIComponent(voiceId),
    method: "POST",
    headers: {
      "xi-api-key": ELEVENLABS_API_KEY,
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body),
    },
  };
  var req2 = https.request(opt, function(r2) {
    var chunks = [];
    r2.on("data", function(c) { chunks.push(c); });
    r2.on("end", function() {
      var buf = Buffer.concat(chunks);
      if (r2.statusCode !== 200) {
        return res.status(r2.statusCode).json({ error: "ElevenLabs 请求失败" });
      }
      res.setHeader("Content-Type", "audio/mpeg");
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.send(buf);
    });
  });
  req2.on("error", function(e) {
    res.status(500).json({ error: "TTS 请求失败: " + (e.message || "未知错误") });
  });
  req2.write(body);
  req2.end();
});

// 静态页面（index、app.js、data.js 等）
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/index.html", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/app.js", function(req, res) {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(path.join(__dirname, "app.js"));
});
app.get("/data.js", function(req, res) {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(path.join(__dirname, "data.js"));
});

app.listen(PORT, function() {
  console.log("机电一体化英文学习 已启动:");
  console.log("  浏览器打开: http://localhost:" + PORT);
  console.log("  同步接口:   POST http://localhost:" + PORT + "/api/sync");
});
