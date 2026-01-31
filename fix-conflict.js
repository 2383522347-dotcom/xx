/**
 * 删除 index.html 和 app.js 里未解决的 Git 合并冲突标记（======= ... >>>>>>>）
 * 在项目文件夹里打开 cmd，执行：node fix-conflict.js
 */
const fs = require("fs");
const path = require("path");

const dir = __dirname;
const appPath = path.join(dir, "app.js");
const indexPath = path.join(dir, "index.html");

// 修复 app.js：删除 ")(); 后面的重复代码直到 >>>>>>>"
let app = fs.readFileSync(appPath, "utf8");
app = app.replace(/\n\n  function getNum\(k, def\) \{[\s\S]*?\n>>>>>>> c72ceaebbce3423a735af5d34a5d50d5e97fd192\r?\n?/, "");
fs.writeFileSync(appPath, app, "utf8");
console.log("app.js 已清理冲突");

// 修复 index.html：删除 "=======" 到 ">>>>>>>" 的整段
let idx = fs.readFileSync(indexPath, "utf8");
idx = idx.replace(/\n=======[\s\S]*?\n>>>>>>> c72ceaebbce3423a735af5d34a5d50d5e97fd192\r?\n?/, "");
fs.writeFileSync(indexPath, idx, "utf8");
console.log("index.html 已清理冲突");

console.log("完成。请重新打开页面测试。");
