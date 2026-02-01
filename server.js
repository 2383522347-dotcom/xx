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
