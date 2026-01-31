# Vercel 如何配置 Upstash

配置后，账号和学习数据会持久保存在 Redis 里，**更新代码、重新部署后账户也不会丢**，手机/平板/电脑同账号可同步。

---

## 一、在 Upstash 创建 Redis 数据库

1. 打开 **https://upstash.com**，注册或登录（可用 Google/GitHub 登录）。
2. 进入控制台后，点 **Create Database**（或 **+ Create**）。
3. **Database type** 选 **Redis**，**Region** 任选（如 `eu-central-1`），**Name** 可填 `mech-sync` 或任意。
4. 点 **Create** 创建。
5. 进入该数据库页面，找到 **REST API** 区域（或 **Details** 标签）：
   - 复制 **UPSTASH_REDIS_REST_URL**（形如 `https://xxx.upstash.io`）；
   - 复制 **UPSTASH_REDIS_REST_TOKEN**（一长串字符）。

---

## 二、在 Vercel 里添加环境变量

### 情况 A：项目还没部署，正在导入

1. 在 Vercel 的 **Add New… → Project** 里导入你的 GitHub 仓库。
2. 在导入页面的 **Environment Variables** 区域：
   - **Name** 填：`UPSTASH_REDIS_REST_URL`  
     **Value** 填：刚才复制的 REST URL。
   - 再点 **Add** 一条：  
     **Name** 填：`UPSTASH_REDIS_REST_TOKEN`  
     **Value** 填：刚才复制的 Token。
3. 点 **Deploy** 部署。

### 情况 B：项目已经部署好了，要补配 Upstash

1. 打开 **https://vercel.com**，登录后进入你的项目。
2. 顶部点 **Settings**。
3. 左侧点 **Environment Variables**。
4. 添加两条变量：
   - **Key**：`UPSTASH_REDIS_REST_URL`  
     **Value**：在 Upstash 复制的 REST URL  
     **Environment**：勾选 Production、Preview、Development（或至少勾选 Production）。
   - **Key**：`UPSTASH_REDIS_REST_TOKEN`  
     **Value**：在 Upstash 复制的 Token  
     **Environment**：同上。
5. 点 **Save** 保存。
6. 到 **Deployments** 标签，找到最新一次部署，点右侧 **⋯** → **Redeploy**，再点 **Redeploy** 确认。

---

## 三、确认生效

1. 用 Vercel 给的链接打开你的网站（如 `https://xxx.vercel.app`）。
2. 注册一个新账号并登录。
3. 到 Vercel 再 **Redeploy** 一次（或改一行代码推送触发部署）。
4. 再次打开同一链接，用刚才的账号登录；若能登录，说明 Upstash 已生效，账户已持久保存。

以后更新代码、重新部署，账户都不会再丢失。
