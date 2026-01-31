// 运行方式：在项目目录下执行  node fix-app-truncate.js
// 作用：把 app.js 截断到第 1231 行，删除后面导致「开始学习/开始测试」无效的重复代码
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "app.js");
const content = fs.readFileSync(filePath, "utf8");
const lines = content.split("\n");
if (lines.length <= 1231) {
  console.log("app.js 已是正确长度，无需截断。");
  process.exit(0);
}
const keep = lines.slice(0, 1231).join("\n");
fs.writeFileSync(filePath, keep, "utf8");
console.log("已截断 app.js 到 1231 行，请刷新页面重试「开始学习」「开始测试」。");
