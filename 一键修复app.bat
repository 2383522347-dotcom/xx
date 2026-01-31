@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 正在修复 app.js ...
node fix-app-truncate.js
if %errorlevel% neq 0 (
  echo 请确保已安装 Node.js，或用记事本打开 app.js，删除第 1232 行到文件末尾，保存后刷新页面。
  pause
  exit /b 1
)
echo 修复完成。请刷新浏览器页面后重试「开始学习」「开始测试」。
pause
