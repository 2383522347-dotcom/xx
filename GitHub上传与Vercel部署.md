# 把「机电一体化英文学习」推到 GitHub 并在 Vercel 部署

> **没有安装 Git 或不想用命令行？** 请直接打开同目录下的 **《无Git上传说明.txt》**，按里面的步骤用 **GitHub 网页上传** 即可，无需安装 Git。

按下面顺序做，就能把本地项目加到 GitHub，并用 Vercel 部署（三端同步）。

---

## 第一步：在 GitHub 建一个仓库

1. 打开 **https://github.com** 并登录。
2. 右上角点 **+** → **New repository**。
3. **Repository name** 填：`mechatronics-english`（或任意英文名）。
4. 选 **Public**，**不要**勾选 “Add a README file”。
5. 点 **Create repository**。
6. 记下页面上的仓库地址，例如：`https://github.com/你的用户名/mechatronics-english.git`。

---

## 第二步：把本地「机电一体化英文学习」传到 GitHub

### 若提示 “git 不是内部或外部命令”（没装 Git）

**方式 A：先装 Git 再用命令行（推荐，以后更新也方便）**

1. 打开 **https://git-scm.com/download/win** 下载 Windows 版 Git。
2. 安装时一路点 **Next**，最后点 **Install**。
3. **关掉当前的命令行窗口**，重新打开「机电一体化英文学习」文件夹，在地址栏输入 `cmd` 回车，再执行下面的命令。

**方式 B：不装 Git，用网页上传**

1. 在 GitHub 建好仓库后，打开该仓库页面，点击 **“uploading an existing file”**（或 **“Add file” → “Upload files”**）。
2. 把「机电一体化英文学习」文件夹里的**所有文件和子文件夹**拖进网页（或点 “choose your files” 多选）：
   - 根目录：`index.html`、`app.js`、`data.js`、`package.json`、`vercel.json`、`run.bat`、`run.command`、`server.js`、`server-sync-example.js`、所有 `.md` 和 `.txt`。
   - **一定要包含 `api` 文件夹**：点进 `api`，把里面的 `sync.js` 也一起选上（或把整个 `api` 文件夹拖进去）。
3. 在页面底部 **Commit message** 随便填（如“初版”），点 **Commit changes**。
4. 传完后跳过下面「命令行方式」，直接做 **第三步** 在 Vercel 导入。

---

### 已安装 Git：用命令行上传

在**本机**打开「机电一体化英文学习」所在文件夹，在**地址栏输入 `cmd` 回车**，依次执行：

```bash
git init
git add .
git commit -m "机电一体化英文学习 初版"
git branch -M main
git remote add origin https://github.com/你的用户名/mechatronics-english.git
git push -u origin main
```

- 把 `https://github.com/你的用户名/mechatronics-english.git` 换成你在第一步记下的**你自己的仓库地址**。
- 如果提示要登录 GitHub，按提示用浏览器或令牌登录即可。
- 若从未配置过 git 用户名/邮箱，先执行（只需一次）：
  ```bash
  git config --global user.email "你的邮箱"
  git config --global user.name "你的名字"
  ```

执行成功后，GitHub 网页上就能看到「机电一体化英文学习」的代码。

---

## 第三步：在 Vercel 里导入这个 GitHub 仓库

1. 打开 **https://vercel.com** 并登录（可用 GitHub 账号登录）。
2. 点 **Add New…** → **Project**。
3. 在列表里找到你刚建的仓库（如 `mechatronics-english`），点 **Import**。
4. **Project Name** 可保持默认，**Root Directory** 保持默认（不要改）。
5. 先不要点 Deploy，先做第四步加环境变量。

---

## 第四步：配置 Upstash 环境变量（用于三端同步）

1. 打开 **https://upstash.com** 注册/登录。
2. 在 Upstash 里 **Create Database**，选 **Redis**，区域任选，点创建。
3. 进入该数据库，在 **REST API** 区域：
   - 复制 **UPSTASH_REDIS_REST_URL**（HTTPS 开头的地址）；
   - 复制 **UPSTASH_REDIS_REST_TOKEN**（一长串字符）。
4. 回到 Vercel 的导入页面，在 **Environment Variables** 里添加两条：
   - **Name**: `UPSTASH_REDIS_REST_URL`，**Value**: 粘贴刚才的 URL；
   - **Name**: `UPSTASH_REDIS_REST_TOKEN`，**Value**: 粘贴刚才的 Token。
5. 然后点 **Deploy**。

---

## 第五步：用 Vercel 给的链接在三端使用

1. 部署完成后，Vercel 会给你一个链接，例如：`https://mechatronics-english-xxx.vercel.app`。
2. **手机、电脑、平板**都打开**这个同一个链接**。
3. 在每台设备上**登录同一账号**，签到、学词、金币等会自动同步。

以后你只需要：**打开这个链接 → 登入账号**，无需再做其他操作。

---

## 以后改了代码想更新网站

在「机电一体化英文学习」文件夹里执行：

```bash
git add .
git commit -m "更新说明"
git push
```

Vercel 会自动用 GitHub 上的新代码重新部署，几分钟后刷新链接就能看到更新。
