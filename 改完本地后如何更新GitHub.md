# 改完本地文件夹后，怎么更新 GitHub 网页上的内容

你改的是：**D:\机电一体化英文学习服务器\xx**（和 GitHub 映射的那个文件夹）。  
要让 **GitHub 网页** 和 **Vercel 网站** 也变成最新版，按下面做即可。

---

## 第一步：改文件并保存

在 **D:\机电一体化英文学习服务器\xx** 里改你要改的文件（如 `index.html`、`app.js`、`data.js` 等），改完后 **Ctrl + S** 保存。

---

## 第二步：打开 GitHub Desktop

打开 **GitHub Desktop**，左上角 **Current repository** 选 **xx**（确保选的是你这个项目）。

---

## 第三步：看「Changes」

- 左边点 **Changes**。
- 改过的文件会出现在列表里（前面有勾选框）。
- 如果显示 **No local changes**，说明要么没保存，要么改的不是这个文件夹，要么已经提交过了。

---

## 第四步：写说明并提交（Commit）

1. 左下角 **Summary (required)** 里写一句说明，例如：
   - `更新首页`
   - `修复翻译`
   - `新增阅读模块`
2. **Description** 可写可不写。
3. 点蓝色按钮 **Commit to main**。

这样就把「当前改动」记在本地了，但 **GitHub 网页上还没更新**。

---

## 第五步：推送到 GitHub（Push）

1. 右上角点 **Push origin**（或 **Repository** 菜单里选 **Push**）。
2. 等几秒，推送完成。

这时 **GitHub 网页** 上的仓库就更新了；**Vercel** 检测到更新后会自动重新部署，过几分钟网站就是最新版。

---

## 小结（每次更新流程）

| 步骤 | 你做啥 |
|------|--------|
| 1 | 在 **xx** 文件夹里改文件，保存 |
| 2 | 打开 **GitHub Desktop**，选仓库 **xx** |
| 3 | 看 **Changes** 里有没有改动的文件 |
| 4 | 写 **Summary**，点 **Commit to main** |
| 5 | 点 **Push origin** |

做完第 5 步，GitHub 网页上的文件夹/文件就和你本地一致了，网站也会自动更新。
