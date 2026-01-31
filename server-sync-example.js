/**
 * 账号与学习数据同步 API 示例（Node.js + Express）
 * 部署后可在 app.js 中设置 SYNC_API_URL = "https://你的域名/api" 实现手机/平板/电脑 实时同步
 *
 * 安装依赖: npm install express cors body-parser
 * 运行: node server-sync-example.js
 * 默认端口: 3000，接口: POST /api/sync
 */

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: true }));
app.use(bodyParser.json({ limit: "2mb" }));

// 内存存储（生产环境请改用数据库）
const accounts = {};  // username -> password
const userData = {};  // username -> { signInDays, lastSignIn, coins, learnedWords, ... }

app.post("/api/sync", function(req, res) {
  const { username, password, data } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: "缺少 username 或 password" });
  }

  if (data !== undefined) {
    // 保存：验证密码后写入
    if (accounts[username] && accounts[username] !== password) {
      return res.status(401).json({ error: "密码错误" });
    }
    accounts[username] = password;
    userData[username] = data;
    return res.json({ ok: true, data: userData[username] });
  }

  // 拉取：验证密码后返回
  if (accounts[username] !== password) {
    return res.status(401).json({ error: "密码错误" });
  }
  const saved = userData[username] || {};
  res.json({ data: saved });
});

app.listen(PORT, function() {
  console.log("同步 API 已启动: http://localhost:" + PORT + "/api/sync");
});
