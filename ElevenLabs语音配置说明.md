# ElevenLabs AI 语音配置说明

配置后，点击单词朗读将使用 ElevenLabs 的 AI 语音（更自然、接近人声）。所有设备（手机、平板、电脑）打开同一链接即可使用。

---

## 一、注册 ElevenLabs 并获取 API Key

1. 打开 **https://elevenlabs.io**，点击 **Sign Up** 注册（可用邮箱或 Google 登录）。
2. 登录后，点击右上角头像 → **Profile + API Key**。
3. 在 **API Key** 区域，复制你的 API Key（形如 `sk_xxxx...`，务必保管好，不要泄露）。

---

## 二、可选：创建自定义音色（从音频学习）

1. 在 ElevenLabs 控制台，点击左侧 **Voices**。
2. 点击 **Add Voice** → **Instant Voice Clone**。
3. 上传 1–5 分钟清晰人声音频（可从视频提取，如用剪映导出纯人声）。
4. 按提示完成克隆，创建后会得到一个 **Voice ID**（形如 `abc123xyz`）。
5. 记下这个 Voice ID，后面配置环境变量时会用到。

> 若不创建自定义音色，将使用默认英文女声（Rachel）。

---

## 三、在 Vercel 中配置环境变量

1. 打开 **https://vercel.com**，进入你的项目。
2. 点击 **Settings** → **Environment Variables**。
3. 新增两条环境变量：

| Name | Value |
|------|-------|
| `ELEVENLABS_API_KEY` | 你的 API Key（第二步复制的） |
| `ELEVENLABS_VOICE_ID` | （可选）你的自定义音色 ID，不填则用默认 |

4. 点击 **Save**。
5. 在项目页点击 **Deployments** → 最新部署右侧 **⋯** → **Redeploy**，重新部署一次。

---

## 四、本地测试（可选）

若用 `npm start` 或 `run.bat` 本地运行：

1. 在项目文件夹新建 `.env` 文件（若已有则追加）：
   ```
   ELEVENLABS_API_KEY=你的API_Key
   ELEVENLABS_VOICE_ID=你的Voice_ID（可选）
   ```
2. 或直接在命令行设置后启动：
   - Windows: `set ELEVENLABS_API_KEY=你的Key&& npm start`
   - Mac/Linux: `ELEVENLABS_API_KEY=你的Key npm start`

---

## 五、免费额度说明

- **免费账户**：每月约 10,000 字符（约 5–10 分钟语音）。
- 超出后需付费，或等下月额度重置。
- 可在 ElevenLabs 控制台 **Usage** 查看用量。

---

## 六、未配置时的表现

若未配置 `ELEVENLABS_API_KEY`，朗读会自动回退到浏览器内置语音或在线 TTS，不影响正常使用。
