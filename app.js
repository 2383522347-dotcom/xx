(function() {
  "use strict";

  const KEY = {
    signInDays: "mech_signInDays",
    lastSignIn: "mech_lastSignIn",
    studyMsToday: "mech_studyMsToday",
    studyDate: "mech_studyDate",
    coins: "mech_coins",
    learnedWords: "mech_learnedWords",
    forgetReviewDays: "mech_forgetReviewDays",
    lastForgetReview: "mech_lastForgetReview",
    vocabLevel: "mech_vocabLevel",
    vocabLevelIndex: "mech_vocabLevelIndex",
    account: "mech_account",
    accounts: "mech_accounts",
    blacklist: "mech_blacklist",
    learnedCount: "mech_learnedCount",
    wordLearnCount: "mech_wordLearnCount"
  };

  function getNum(k, def) {
    const v = localStorage.getItem(k);
    return v !== null ? parseInt(v, 10) : (def || 0);
  }
  function setNum(k, n) { localStorage.setItem(k, String(n)); }
  function getStr(k, def) { return localStorage.getItem(k) || def || ""; }
  function setStr(k, s) { localStorage.setItem(k, s || ""); }
  function getJSON(k, def) {
    try {
      const v = localStorage.getItem(k);
      return v ? JSON.parse(v) : (def || []);
    } catch (e) { return def || []; }
  }
  function setJSON(k, o) { localStorage.setItem(k, JSON.stringify(o)); }

  function todayStr() { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0"); }

  // 签到：一天一次，连续签到
  function getSignInDays() {
    const last = getStr(KEY.lastSignIn);
    const today = todayStr();
    if (last === today) return getNum(KEY.signInDays);
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.getFullYear() + "-" + String(yesterday.getMonth()+1).padStart(2,"0") + "-" + String(yesterday.getDate()).padStart(2,"0");
    if (last === yStr) return getNum(KEY.signInDays) + 1;
    return 1;
  }
  function doSignIn() {
    const today = todayStr();
    if (getStr(KEY.lastSignIn) === today) { alert("今日已签到"); return; }
    const days = getSignInDays();
    setNum(KEY.signInDays, days);
    setStr(KEY.lastSignIn, today);
    setNum(KEY.coins, getNum(KEY.coins) + 10);
    refreshHeader();
    syncToAccount();
    alert("签到成功！连续签到 " + days + " 天，+10 金币");
  }

  // 今日学习时长：进入模块开始计时，每30分钟金币 2*连续签到*(时长/30)
  let studyTimerId = null;
  let studyStartMs = 0;
  let lastCoin30 = 0;

  function startStudyTimer() {
    if (studyTimerId) return;
    studyStartMs = Date.now();
    studyTimerId = setInterval(function() {
      const now = Date.now();
      const elapsed = now - studyStartMs;
      studyStartMs = now;
      const today = getStr(KEY.studyDate);
      const nowStr = todayStr();
      if (today !== nowStr) { setStr(KEY.studyDate, nowStr); setNum(KEY.studyMsToday, 0); lastCoin30 = 0; }
      const totalMs = getNum(KEY.studyMsToday) + elapsed;
      setNum(KEY.studyMsToday, totalMs);
      const thirtyMin = 30 * 60 * 1000;
      const n30 = Math.floor(totalMs / thirtyMin);
      if (n30 > lastCoin30) {
        const signDays = getNum(KEY.signInDays) || 1;
        setNum(KEY.coins, getNum(KEY.coins) + 2 * signDays * (n30 - lastCoin30));
        lastCoin30 = n30;
      }
      refreshHeader();
    }, 1000);
  }
  function stopStudyTimer() {
    if (studyTimerId) { clearInterval(studyTimerId); studyTimerId = null; }
    const now = todayStr();
    if (getStr(KEY.studyDate) !== now) { setStr(KEY.studyDate, now); setNum(KEY.studyMsToday, 0); lastCoin30 = 0; }
    else {
      const totalMs = getNum(KEY.studyMsToday) + (studyStartMs ? (Date.now() - studyStartMs) : 0);
      setNum(KEY.studyMsToday, totalMs);
      const thirtyMin = 30 * 60 * 1000;
      const n30 = Math.floor(totalMs / thirtyMin);
      if (n30 > lastCoin30) {
        const signDays = getNum(KEY.signInDays) || 1;
        setNum(KEY.coins, getNum(KEY.coins) + 2 * signDays * (n30 - lastCoin30));
        lastCoin30 = n30;
      }
    }
    studyStartMs = 0;
    refreshHeader();
  }
  function tickStudyTime() {
    const today = getStr(KEY.studyDate);
    const nowStr = todayStr();
    let ms = getNum(KEY.studyMsToday);
    if (today !== nowStr) { ms = 0; setStr(KEY.studyDate, nowStr); setNum(KEY.studyMsToday, 0); lastCoin30 = 0; }
    if (studyStartMs) ms += Date.now() - studyStartMs;
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const ms0 = Math.floor((ms % 1000) / 100);
    return m + "分" + s + "秒" + ms0;
  }

  function refreshHeader() {
    var days = getNum(KEY.signInDays);
    if (getStr(KEY.lastSignIn) === todayStr() && days === 0) { setNum(KEY.signInDays, 1); days = 1; }
    const el = document.getElementById("signInDays"); if (el) el.textContent = days;
    const el2 = document.getElementById("studyTimeDisplay"); if (el2) el2.textContent = tickStudyTime();
    const el3 = document.getElementById("learnedCount"); if (el3) el3.textContent = getJSON(KEY.learnedWords).length;
    const el4 = document.getElementById("vocabLevelDisplay"); if (el4) el4.textContent = getStr(KEY.vocabLevel) || "未检测";
  }

  // 页面切换（未登录只能看登录门；黑名单用户强制退出）
  function showPage(pageId) {
    var acc = getAccount();
    var blacklist = getBlacklist();
    if (acc && acc.username && blacklist.indexOf(acc.username) >= 0) {
      setAccount({});
      if (document.getElementById("appHeader")) document.getElementById("appHeader").style.display = "none";
      pageId = "pageLoginGate";
    }
    if (!acc || !acc.username) {
      if (pageId !== "pageLoginGate") {
        if (document.getElementById("appHeader")) document.getElementById("appHeader").style.display = "none";
        pageId = "pageLoginGate";
      }
    }
    document.querySelectorAll(".page").forEach(function(p) { p.classList.remove("active"); });
    const p = document.getElementById(pageId);
    if (p) p.classList.add("active");
    if (pageId === "pageLoginGate") updateGateSyncHint();
    const isHome = pageId === "pageHome";
    if (isHome) stopStudyTimer();
    else if (pageId !== "pageLoginGate") startStudyTimer();
    refreshHeader();
  }

  // 登录门：未登录时只显示登录/注册页，登录或注册成功后进入主页
  function enterApp() {
    document.getElementById("appHeader").style.display = "";
    showPage("pageHome");
  }
  function initAuthGate() {
    const acc = getAccount();
    const blacklist = getBlacklist();
    if (acc && acc.username && blacklist.indexOf(acc.username) >= 0) {
      setAccount({});
      acc.username = "";
    }
    if (!acc || !acc.username) {
      if (document.getElementById("appHeader")) document.getElementById("appHeader").style.display = "none";
      showPage("pageLoginGate");
      updateGateSyncHint();
    } else {
      if (document.getElementById("appHeader")) document.getElementById("appHeader").style.display = "";
      showPage("pageHome");
    }
  }
  function updateGateSyncHint() {
    var el = document.getElementById("gateSyncHint");
    if (!el) return;
    if (SYNC_API_URL) {
      var origin = typeof window !== "undefined" && window.location && window.location.origin ? window.location.origin : "";
      el.innerHTML = "当前同步地址：<strong>" + origin + "</strong><br>在电脑注册的账号，手机必须打开「同一链接」才能登录。<br><span style=\"color:var(--text-muted);\">若每次更新/重新部署后账户全没了：请在 Vercel 项目设置中配置 Upstash Redis 并重新部署，账户才会持久保存。</span>";
      el.style.display = "";
    } else {
      el.style.display = "none";
    }
  }

  // 单词本列表
  const WORD_BOOKS = {
    "25年国集训1轮单词": WORD_BOOK_25
  };

  // 基础单词分级词库（小学/初中/高中/大学/出国/雅思/托福/哈佛）
  const BASIC_LEVEL_BOOKS = {
    "小学": WORD_BOOK_PRIMARY,
    "初中": WORD_BOOK_JUNIOR,
    "高中": WORD_BOOK_SENIOR,
    "大学": WORD_BOOK_COLLEGE,
    "出国": WORD_BOOK_ABROAD,
    "雅思": WORD_BOOK_IELTS,
    "托福": WORD_BOOK_TOEFL,
    "哈佛": WORD_BOOK_HARVARD
  };

  // 商城商品：id, name, price, desc, maturityMax, img(展示用), func(功能)
  const MALL_PRODUCTS = [
    { id: "wheat_seed", name: "小麦种子", price: 10, desc: "还没想好", maturityMax: 5, img: "🌾", func: "种植" },
    { id: "watermelon_seed", name: "西瓜种子", price: 15, desc: "还没想好", maturityMax: 6, img: "🍉", func: "种植" }
  ];
  var mallQuantities = {};
  var mallJustBought = false;

  function fillWordBookSelect(selectId) {
    const sel = document.getElementById(selectId);
    if (!sel) return;
    sel.innerHTML = "";
    Object.keys(WORD_BOOKS).forEach(function(name) {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name + " (" + WORD_BOOKS[name].length + " 词)";
      sel.appendChild(opt);
    });
  }
  window.fillWordBookSelect = fillWordBookSelect;

  // 单词卡：当前列表与索引
  let currentWordList = [];
  let currentWordIndex = 0;
  let currentBookName = "";

  function showWordCard() {
    const w = currentWordList[currentWordIndex];
    if (!w) return;
    document.getElementById("cardWordEn").textContent = w.en;
    document.getElementById("cardWordPhonetic").textContent = w.phonetic || "";
    document.getElementById("cardWordCn").textContent = w.cn;
    var tipEl = document.getElementById("cardWordMemoryTip");
    if (tipEl) tipEl.textContent = getWordMemoryTip(w);
    document.getElementById("wordCardProgress").textContent = (currentWordIndex + 1) + " / " + currentWordList.length;
  }

  var cachedVoice = null;
  function loadBestVoice() {
    if (cachedVoice) return cachedVoice;
    if (typeof speechSynthesis === "undefined") return null;
    var voices = speechSynthesis.getVoices();
    if (!voices.length) return null;
    var preferred = ["Samantha", "Microsoft Zira", "Google US English", "en-US-Neural", "Karen", "Daniel", "Alex", "en-us"];
    for (var i = 0; i < preferred.length; i++) {
      for (var j = 0; j < voices.length; j++) {
        if (voices[j].name.indexOf(preferred[i]) >= 0 || voices[j].lang.indexOf("en-US") >= 0) {
          cachedVoice = voices[j];
          return cachedVoice;
        }
      }
    }
    for (var k = 0; k < voices.length; k++) {
      if (voices[k].lang.indexOf("en") >= 0) { cachedVoice = voices[k]; return cachedVoice; }
    }
    return voices[0] || null;
  }

  var lastSpeakTime = 0;
  function isAndroid() {
    return /Android/i.test(navigator.userAgent || "");
  }
  function getTtsApiUrl() {
    try {
      var o = window.location && window.location.origin;
      if (o && o !== "null" && (o.indexOf("http://") === 0 || o.indexOf("https://") === 0)) return o + "/api/tts";
    } catch (e) {}
    return "";
  }
  var ttsApiQuotaExceeded = false;
  function speakWord(text) {
    if (!text || !String(text).trim()) return;
    var now = Date.now();
    if (now - lastSpeakTime < 300) return;
    lastSpeakTime = now;
    var ttsUrl = getTtsApiUrl();
    if (ttsUrl && !ttsApiQuotaExceeded) {
      fetch(ttsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: String(text).trim().substring(0, 500) })
      }).then(function(r) {
        if (r.status === 402) ttsApiQuotaExceeded = true;
        if (r.ok && r.headers.get("content-type") && r.headers.get("content-type").indexOf("audio") >= 0) {
          return r.blob();
        }
        throw new Error("TTS not available");
      }).then(function(blob) {
        var url = URL.createObjectURL(blob);
        var a = new Audio(url);
        a.volume = 1;
        a.onended = function() { URL.revokeObjectURL(url); };
        a.onerror = function() { URL.revokeObjectURL(url); speakWordFallback(text); };
        a.play().catch(function() { URL.revokeObjectURL(url); speakWordFallback(text); });
      }).catch(function() {
        speakWordFallback(text);
      });
      return;
    }
    if (isAndroid()) {
      initSpeechVoices();
      speakWordFallback(text);
      return;
    }
    initSpeechVoices();
    if (!window.speechSynthesis) {
      speakWordFallback(text);
      return;
    }
    speechSynthesis.cancel();
    if (typeof speechSynthesis.resume === "function") speechSynthesis.resume();
    speechSynthesis.getVoices();
    var u = new SpeechSynthesisUtterance(String(text).trim());
    u.lang = "en-US";
    u.rate = 0.92;
    u.pitch = 1;
    u.volume = 1;
    if (!isAndroid()) {
      var v = loadBestVoice();
      if (v) u.voice = v;
    }
    u.onerror = function() { speakWordFallback(text); };
    speechSynthesis.speak(u);
  }

  function bindSpeakWithTouch(el, getTextFn) {
    if (!el) return;
    function doSpeak() { var t = typeof getTextFn === "function" ? getTextFn() : (el.textContent || ""); speakWord(t); }
    el.onclick = doSpeak;
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", "点击朗读");
  }

  function initSpeechVoices() {
    if (typeof speechSynthesis === "undefined") return;
    if (speechSynthesis.getVoices().length) loadBestVoice();
    else if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = function() { loadBestVoice(); };
    }
  }

  var TTS_API_URLS = [
    "https://tts-api.netlify.app/?text={t}&lang=en&speed=0.95",
    "https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q={t}"
  ];
  function speakWordFallback(text) {
    if (!text || !String(text).trim()) return;
    var t = String(text).trim().substring(0, 200).replace(/[<>"']/g, "");
    if (!t) return;
    var encoded = encodeURIComponent(t);
    function tryPlay(idx) {
      if (idx >= TTS_API_URLS.length) {
        if (window.speechSynthesis) {
          initSpeechVoices();
          speechSynthesis.cancel();
          if (typeof speechSynthesis.resume === "function") speechSynthesis.resume();
          var u = new SpeechSynthesisUtterance(t);
          u.lang = "en-US";
          u.rate = 0.92;
          if (!isAndroid()) { var v = loadBestVoice(); if (v) u.voice = v; }
          speechSynthesis.speak(u);
        }
        return;
      }
      try {
        var url = TTS_API_URLS[idx].replace("{t}", encoded);
        var a = new Audio();
        a.volume = 1;
        a.onerror = function() { tryPlay(idx + 1); };
        a.src = url;
        var p = a.play();
        if (p && p.catch) p.catch(function() { tryPlay(idx + 1); });
      } catch (e) { tryPlay(idx + 1); }
    }
    tryPlay(0);
  }
  window.speakWordFallback = speakWordFallback;

  function addToLearned(w) {
    const list = getJSON(KEY.learnedWords);
    if (list.some(function(x) { return x.en === w.en; })) return;
    list.push({ en: w.en, cn: w.cn, phonetic: w.phonetic || "", learnedAt: Date.now(), nextReview: Date.now() + 24*60*60*1000 });
    setJSON(KEY.learnedWords, list);
    setNum(KEY.learnedCount, getNum(KEY.learnedCount) + 1);
    refreshHeader();
  }

  // 遗忘曲线：1天、2天、4天、7天、15天后复习，今日已复习的不再出现
  function getTodayReviewWords() {
    const list = getJSON(KEY.learnedWords);
    const today = todayStr();
    const todayDate = new Date(); todayDate.setHours(0,0,0,0);
    return list.filter(function(item) {
      if (item.lastReviewDate === today) return false;
      const learned = new Date(item.learnedAt); learned.setHours(0,0,0,0);
      const diffDays = Math.floor((todayDate - learned) / (24 * 60 * 60 * 1000));
      return [1, 2, 4, 7, 15].indexOf(diffDays) >= 0;
    });
  }

  function normalizeForAnswer(s) {
    if (!s || !String(s).trim()) return "";
    var t = String(s)
      .replace(/\s+/g, " ")           // 先合并空白
      .replace(/[\uFF08\uFF09]/g, function(m) { return m === "\uFF08" ? "(" : ")"; })  // 全角括号→半角
      .replace(/\s*\(\s*/g, "(")      // 括号内侧空格去掉
      .replace(/\s*\)\s*/g, ")")
      .trim();
    return /[a-zA-Z]/.test(t) ? t.toLowerCase() : t;
  }

  function matchRecallAnswer(userInput, correctAnswer) {
    var a = normalizeForAnswer(userInput);
    if (!a) return false;
    var full = normalizeForAnswer(correctAnswer);
    if (a === full) return true;
    var parts = (correctAnswer || "").split(/[\/、，,]/).map(function(p) { return normalizeForAnswer(p.trim()); }).filter(Boolean);
    for (var i = 0; i < parts.length; i++) {
      if (a === parts[i]) return true;
    }
    return false;
  }

  function markWordReviewedToday(wordEn) {
    var list = getJSON(KEY.learnedWords, []);
    for (var i = 0; i < list.length; i++) {
      if ((list[i].en || "").toLowerCase() === (wordEn || "").toLowerCase()) {
        list[i].lastReviewDate = todayStr();
        setJSON(KEY.learnedWords, list);
        return;
      }
    }
  }

  // 获取该单词的记忆方法：优先查 WORD_MEMORY_TIPS，否则生成联想提示
  function getWordMemoryTip(word) {
    if (!word) return "";
    var en = (word.en || "").trim().toLowerCase();
    var tips = typeof WORD_MEMORY_TIPS !== "undefined" ? WORD_MEMORY_TIPS : {};
    if (tips[en]) return tips[en];
    var firstPart = en.split(/\s+|\/|\(/)[0] || "";
    if (tips[firstPart]) return tips[firstPart];
    var cn = (word.cn || "").trim();
    return "联想：将「" + (word.en || "") + "」与「" + cn + "」对应，多读几遍并结合例句记忆";
  }

  // 情景：模糊匹配
  function normalize(s) { return (s || "").toLowerCase().replace(/\s+/g, " ").trim(); }
  function normalizeForDisplay(s) {
    if (!s || !String(s).trim()) return s || "";
    const t = String(s).replace(/\s+/g, " ").trim();
    return t.split(" ").map(function(w) { return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(); }).join(" ");
  }
  function matchAnswer(input, answers) {
    const n = normalize(input);
    for (let i = 0; i < answers.length; i++) {
      if (normalize(answers[i]) === n) return true;
      if (n.length > 5 && normalize(answers[i]).indexOf(n) !== -1) return true;
      if (normalize(answers[i]).length > 5 && n.indexOf(normalize(answers[i])) !== -1) return true;
    }
    return false;
  }

  // 账户（本地 + 服务端实时同步，手机/平板同账号数据一致）
  // 用 npm start 启动 server.js 后打开同源地址即自动走 /api 同步；直接打开 index.html 则仅本地
  var SYNC_API_URL = (function() {
    try {
      var o = typeof window !== "undefined" && window.location && window.location.origin;
      if (o && (o.indexOf("http://") === 0 || o.indexOf("https://") === 0))
        return o + "/api";
    } catch (e) {}
    return "";
  })();
  var syncToServerTimer = null;

  function getAccount() {
    try { var v = sessionStorage.getItem(KEY.account); return v ? JSON.parse(v) : {}; } catch (e) { return {}; }
  }
  function setAccount(o) {
    try { sessionStorage.setItem(KEY.account, JSON.stringify(o || {})); } catch (e) {}
  }
  function getAccounts() { return getJSON(KEY.accounts, {}); }
  function setAccounts(o) { setJSON(KEY.accounts, o); }
  function getBlacklist() { return getJSON(KEY.blacklist, []); }
  function setBlacklist(arr) { setJSON(KEY.blacklist, Array.isArray(arr) ? arr : []); }

  // 登出时清空全局用户状态，避免切账号后商城金币等仍显示上一账号数据
  function clearUserState() {
    setNum(KEY.signInDays, 0);
    setStr(KEY.lastSignIn, "");
    setNum(KEY.studyMsToday, 0);
    setStr(KEY.studyDate, todayStr());
    setNum(KEY.coins, 0);
    setJSON(KEY.learnedWords, []);
    setStr(KEY.vocabLevel, "");
    setNum(KEY.vocabLevelIndex, 0);
    setNum(KEY.forgetReviewDays, 0);
    setNum(KEY.learnedCount, 0);
    setNum(KEY.wordLearnCount, 0);
    currentWordList = [];
    currentWordIndex = 0;
    currentBookName = "";
    testQuestions = [];
    testQi = 0;
    testResults = [];
    wordTestBookName = "";
    vocabTestQi = 0;
    vocabTestAnswers = [];
    scenarioCategory = "";
    scenarioItem = null;
    currentReadingArticle = null;
    currentReadingLevel = "";
    currentReadingQuizQuestions = [];
    forgetReviewWords = [];
    forgetReviewIndex = 0;
  }

  function buildUserData() {
    var mp = {};
    if (currentBookName && currentWordList && currentWordList.length > 0 && currentWordIndex < currentWordList.length) {
      mp.wordCard = {
        bookName: currentBookName,
        index: currentWordIndex,
        wordList: currentBookName === "推荐学习" ? currentWordList : null
      };
    }
    if (testQuestions && testQuestions.length > 0 && testQi < testQuestions.length) {
      mp.wordTest = { bookName: wordTestBookName, questions: testQuestions, qi: testQi, results: testResults };
    }
    if (vocabTestAnswers && vocabTestAnswers.length > 0 && vocabTestQi < vocabTestAnswers.length) {
      mp.vocabTest = { qi: vocabTestQi, answers: vocabTestAnswers };
    }
    if (scenarioCategory && scenarioItem) mp.scenario = { category: scenarioCategory, item: scenarioItem };
    if (currentReadingArticle) {
      mp.reading = { level: currentReadingLevel, article: currentReadingArticle, quizQuestions: currentReadingQuizQuestions || [] };
    }
    return {
      signInDays: getNum(KEY.signInDays),
      lastSignIn: getStr(KEY.lastSignIn),
      studyMsToday: getNum(KEY.studyMsToday),
      studyDate: getStr(KEY.studyDate),
      coins: getNum(KEY.coins),
      learnedWords: getJSON(KEY.learnedWords),
      vocabLevel: getStr(KEY.vocabLevel),
      vocabLevelIndex: getNum(KEY.vocabLevelIndex),
      forgetReviewDays: getNum(KEY.forgetReviewDays),
      learnedCount: getNum(KEY.learnedCount),
      wordLearnCount: getNum(KEY.wordLearnCount),
      moduleProgress: Object.keys(mp).length ? mp : null
    };
  }
  function applyUserData(d) {
    if (!d) return;
    var today = todayStr();
    if (d.lastSignIn === today) {
      setStr(KEY.lastSignIn, d.lastSignIn);
      var localDays = getNum(KEY.signInDays);
      var serverDays = Math.max(0, parseInt(d.signInDays, 10) || 0);
      setNum(KEY.signInDays, Math.max(localDays, serverDays));
    } else if (getStr(KEY.lastSignIn) === today) {
      // 本地今天已签到、服务器还是旧数据：不覆盖，避免拉取把连续天数盖回 0
    } else {
      if (d.signInDays !== undefined) setNum(KEY.signInDays, d.signInDays);
      if (d.lastSignIn) setStr(KEY.lastSignIn, d.lastSignIn);
    }
    if (d.studyMsToday !== undefined) {
      var today = todayStr();
      if (d.studyDate === today) {
        var localMs = getNum(KEY.studyMsToday);
        var serverMs = Math.max(0, parseInt(d.studyMsToday, 10) || 0);
        setNum(KEY.studyMsToday, Math.max(localMs, serverMs));
      } else {
        setNum(KEY.studyMsToday, Math.max(0, parseInt(d.studyMsToday, 10) || 0));
      }
    }
    if (d.studyDate) setStr(KEY.studyDate, d.studyDate);
    if (d.coins !== undefined) {
      var localCoins = getNum(KEY.coins);
      var serverCoins = Math.max(0, parseInt(d.coins, 10) || 0);
      setNum(KEY.coins, Math.max(localCoins, serverCoins));
    }
    if (d.learnedWords && Array.isArray(d.learnedWords)) {
      var localWords = getJSON(KEY.learnedWords, []);
      var byEn = {};
      localWords.forEach(function (w) { byEn[(w && w.en) || ""] = w; });
      d.learnedWords.forEach(function (w) {
        var k = (w && w.en) || "";
        if (!k) return;
        var ex = byEn[k];
        var merged = Object.assign({}, ex || {}, w || {});
        if (ex && ex.lastReviewDate && w && w.lastReviewDate) {
          merged.lastReviewDate = (ex.lastReviewDate >= w.lastReviewDate) ? ex.lastReviewDate : w.lastReviewDate;
        }
        byEn[k] = merged;
      });
      setJSON(KEY.learnedWords, Object.keys(byEn).filter(Boolean).map(function (k) { return byEn[k]; }));
    }
    if (d.vocabLevel) setStr(KEY.vocabLevel, d.vocabLevel);
    if (d.vocabLevelIndex !== undefined) {
      var localIdx = getNum(KEY.vocabLevelIndex);
      var serverIdx = Math.max(0, parseInt(d.vocabLevelIndex, 10) || 0);
      setNum(KEY.vocabLevelIndex, Math.max(localIdx, serverIdx));
      if (d.vocabLevel && serverIdx >= localIdx) setStr(KEY.vocabLevel, d.vocabLevel);
    }
    if (d.forgetReviewDays !== undefined) setNum(KEY.forgetReviewDays, d.forgetReviewDays);
    if (d.learnedCount !== undefined) setNum(KEY.learnedCount, d.learnedCount);
    if (d.wordLearnCount !== undefined) setNum(KEY.wordLearnCount, d.wordLearnCount);
    var mp = d.moduleProgress;
    if (mp) {
      if (mp.wordCard) {
        currentBookName = mp.wordCard.bookName || "";
        currentWordIndex = Math.max(0, Math.min(mp.wordCard.index || 0, 99999));
        if (mp.wordCard.wordList && Array.isArray(mp.wordCard.wordList) && mp.wordCard.wordList.length > 0) {
          currentWordList = mp.wordCard.wordList;
        } else if (currentBookName && WORD_BOOKS[currentBookName]) {
          currentWordList = WORD_BOOKS[currentBookName].slice();
        } else if (currentBookName && currentBookName.indexOf("基础单词-") === 0) {
          var level = currentBookName.replace("基础单词-", "");
          currentWordList = (BASIC_LEVEL_BOOKS[level] || []).slice();
        } else {
          currentWordList = [];
        }
      }
      if (mp.wordTest && mp.wordTest.questions && mp.wordTest.questions.length > 0) {
        wordTestBookName = mp.wordTest.bookName || "";
        testQuestions = mp.wordTest.questions;
        testQi = Math.max(0, Math.min(mp.wordTest.qi || 0, testQuestions.length));
        testResults = Array.isArray(mp.wordTest.results) ? mp.wordTest.results : [];
      }
      if (mp.vocabTest && mp.vocabTest.answers && mp.vocabTest.answers.length > 0) {
        vocabTestAnswers = mp.vocabTest.answers;
        vocabTestQi = Math.max(0, Math.min(mp.vocabTest.qi || 0, vocabTestAnswers.length));
      }
      if (mp.scenario) { scenarioCategory = mp.scenario.category || ""; scenarioItem = mp.scenario.item || null; }
      if (mp.reading && mp.reading.article) {
        currentReadingLevel = mp.reading.level || "";
        currentReadingArticle = mp.reading.article;
        var quizModal = document.getElementById("modalReadingQuiz");
        if (!(quizModal && !quizModal.classList.contains("hide"))) {
          currentReadingQuizQuestions = Array.isArray(mp.reading.quizQuestions) ? mp.reading.quizQuestions : [];
        }
      }
    }
  }

  function syncFromAccount() {
    const acc = getAccount();
    if (!acc.username) return;
    const key = "mech_user_" + acc.username;
    const data = localStorage.getItem(key);
    if (data) {
      try {
        applyUserData(JSON.parse(data));
      } catch (e) {}
    }
    refreshHeader();
  }
  function syncToAccount() {
    const acc = getAccount();
    if (!acc.username) return;
    const key = "mech_user_" + acc.username;
    const d = buildUserData();
    localStorage.setItem(key, JSON.stringify(d));
    if (SYNC_API_URL) {
      clearTimeout(syncToServerTimer);
      syncToServerTimer = setTimeout(syncToServer, 800);
    }
  }

  function syncFromServer(cb) {
    const acc = getAccount();
    if (!SYNC_API_URL || !acc.username || !acc.password) {
      if (cb) cb(false, false);
      return;
    }
    fetch(SYNC_API_URL + "/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: acc.username, password: acc.password })
    })
      .then(function(r) {
        if (!r.ok) { SYNC_API_URL = ""; return null; }
        return r.json();
      })
      .then(function(res) {
        var hadServerData = false;
        if (res && res.data) {
          applyUserData(res.data);
          hadServerData = Object.keys(res.data).length > 0;
          if (!hadServerData) syncFromAccount();
          refreshHeader();
        }
        if (cb) cb(!!res, hadServerData);
      })
      .catch(function() { SYNC_API_URL = ""; if (cb) cb(false, false); });
  }
  function syncToServer() {
    const acc = getAccount();
    if (!SYNC_API_URL || !acc.username || !acc.password) return;
    fetch(SYNC_API_URL + "/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: acc.username, password: acc.password, data: buildUserData() })
    })
      .then(function(r) {
        if (!r.ok) { SYNC_API_URL = ""; return null; }
        return r.json();
      })
      .then(function(res) {
        if (res && res.data) {
          if (mallJustBought && res.data.coins !== undefined) {
            var curCoins = getNum(KEY.coins);
            if (parseInt(res.data.coins, 10) > curCoins) {
              res.data = Object.assign({}, res.data, { coins: curCoins });
            }
            mallJustBought = false;
          }
          applyUserData(res.data);
        }
      })
      .catch(function() { SYNC_API_URL = ""; });
  }

  // 云端优先：用表单账号密码直接请求服务器登录（不依赖本地账号表）
  function loginViaServer(user, pwd, cb) {
    if (!SYNC_API_URL) { if (cb) cb(false, null, "未连接云端"); return; }
    fetch(SYNC_API_URL + "/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: pwd })
    })
      .then(function(r) {
        return r.json().then(function(j) {
          if (r.ok) { if (cb) cb(true, j.data || {}, null); }
          else { if (cb) cb(false, null, (j && j.error) || "账号不存在或密码错误"); }
        });
      })
      .catch(function() { if (cb) cb(false, null, "网络错误，请检查网址与网络"); });
  }

  // 云端优先：注册 = 在服务器创建账号（任意设备可登录）
  function registerViaServer(user, pwd, cb) {
    if (!SYNC_API_URL) { if (cb) cb(false, "未连接云端"); return; }
    fetch(SYNC_API_URL + "/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: pwd, data: {} })
    })
      .then(function(r) {
        return r.json().then(function(j) {
          if (r.ok) { if (cb) cb(true); }
          else { if (cb) cb(false, (j && j.error) || "账号已存在，请直接登录"); }
        });
      })
      .catch(function() { if (cb) cb(false, "网络错误，请检查网址与网络"); });
  }

  // 初始化：今日学习日期
  if (!getStr(KEY.studyDate)) setStr(KEY.studyDate, todayStr());

  // 主页模块点击（有未完成进度时直接进入继续，否则正常选书/选级）
  document.getElementById("mainGrid").addEventListener("click", function(e) {
    const card = e.target.closest(".module-card");
    if (!card) return;
    const mod = card.getAttribute("data-module");
    if (mod === "wordLearn") {
      if (currentBookName && currentWordList.length > 0 && currentWordIndex < currentWordList.length) {
        document.getElementById("wordCardTitle").textContent = currentBookName;
        showWordCard();
        showPage("pageWordCard");
      } else { fillWordBookSelect("selectWordBook"); showPage("pageWordBookSelect"); }
    } else if (mod === "scenario") {
      initScenario();
      if (scenarioCategory) {
        var sel = document.getElementById("scenarioSelect");
        if (sel) sel.value = scenarioCategory;
      }
      if (scenarioItem) {
        document.getElementById("scenarioPrompt").textContent = "请翻译/表达：\n" + scenarioItem.prompt;
        document.getElementById("scenarioInput").value = "";
        document.getElementById("scenarioResult").classList.add("hide");
      }
      showPage("pageScenario");
    } else if (mod === "wordTest") {
      if (testQuestions.length > 0 && testQi < testQuestions.length) {
        document.getElementById("wordTestDoCard").classList.remove("hide");
        document.getElementById("wordTestDoResult").classList.add("hide");
        showOneWordTestCard();
        showPage("pageWordTestDo");
      } else { fillWordBookSelect("wordTestBookSelect"); showPage("pageWordTest"); }
    } else if (mod === "basicWord") {
      if (currentBookName && currentBookName.indexOf("基础单词-") === 0 && currentWordList.length > 0 && currentWordIndex < currentWordList.length) {
        document.getElementById("wordCardTitle").textContent = "基础单词 · " + currentBookName.replace("基础单词-", "");
        showWordCard();
        showPage("pageWordCard");
      } else showPage("pageBasicSelect");
    } else if (mod === "vocabTest") {
      if (vocabTestAnswers.length > 0 && vocabTestQi < vocabTestAnswers.length) {
        document.getElementById("vocabTestDoCard").classList.remove("hide");
        document.getElementById("vocabTestDoResult").classList.add("hide");
        showOneVocabTestCard();
        showPage("pageVocabTestDo");
      } else showPage("pageVocabTest");
    } else if (mod === "recommend") {
      if (currentBookName === "推荐学习" && currentWordList.length > 0 && currentWordIndex < currentWordList.length) {
        document.getElementById("wordCardTitle").textContent = "推荐学习";
        showWordCard();
        showPage("pageWordCard");
      } else { initRecommend(); showPage("pageRecommend"); }
    } else if (mod === "reading") {
      if (currentReadingArticle && currentReadingArticle.title) {
        document.getElementById("readingArticleTitle").textContent = currentReadingArticle.title;
        var bodyEl = document.getElementById("readingArticleBody");
        var html = "";
        var sentences = (currentReadingArticle.sentences || []);
        for (var s = 0; s < sentences.length; s++) {
          var sent = sentences[s];
          var en = (sent.en || "").trim();
          var parts = en.split(/([a-zA-Z']+)/);
          var inner = "";
          for (var p = 0; p < parts.length; p++) {
            if (/^[a-zA-Z']+$/.test(parts[p])) {
              inner += "<span class=\"word-clickable\" data-word=\"" + escapeHtml(parts[p]) + "\">" + escapeHtml(parts[p]) + "</span>";
            } else inner += escapeHtml(parts[p]);
          }
          html += "<div class=\"sentence-block\"><span class=\"sentence-clickable\" data-sentence-index=\"" + s + "\">" + inner + "</span></div>";
        }
        bodyEl.innerHTML = html;
        showPage("pageReadingArticle");
      } else { loadReadingDataIfNeeded(); showPage("pageReadingSelect"); }
    }
  });

  // 单词学习：选择单词本 -> 确认
  document.getElementById("btnBackFromBookSelect").onclick = function() { showPage("pageHome"); };
  document.getElementById("btnConfirmWordBook").onclick = function() {
    const sel = document.getElementById("selectWordBook");
    const name = sel && sel.value;
    if (!name || !WORD_BOOKS[name]) { alert("请选择单词本"); return; }
    currentBookName = name;
    currentWordList = WORD_BOOKS[name].slice();
    currentWordIndex = 0;
    document.getElementById("wordCardTitle").textContent = name;
    showWordCard();
    showPage("pageWordCard");
  };

  // 单词卡：上一个、下一个、已学会、点击发音
  document.getElementById("btnCardPrev").onclick = function() {
    if (currentWordIndex > 0) { currentWordIndex--; showWordCard(); }
  };
  document.getElementById("btnCardNext").onclick = function() {
    if (currentWordIndex < currentWordList.length - 1) { currentWordIndex++; showWordCard(); }
    else {
      setNum(KEY.coins, getNum(KEY.coins) + 50 * (getNum(KEY.wordLearnCount) + 1)); setNum(KEY.wordLearnCount, getNum(KEY.wordLearnCount) + 1);
      currentWordList = []; currentWordIndex = 0; currentBookName = "";
      alert("已学完本词表！"); showPage("pageHome");
    }
  };
  document.getElementById("btnCardKnown").onclick = function() {
    const w = currentWordList[currentWordIndex];
    if (w) { addToLearned(w); }
    if (currentWordIndex < currentWordList.length - 1) { currentWordIndex++; showWordCard(); }
    else {
      setNum(KEY.coins, getNum(KEY.coins) + 50 * (getNum(KEY.wordLearnCount) + 1)); setNum(KEY.wordLearnCount, getNum(KEY.wordLearnCount) + 1);
      currentWordList = []; currentWordIndex = 0; currentBookName = "";
      alert("已学完！"); showPage("pageHome");
    }
  };
  bindSpeakWithTouch(document.getElementById("cardWordEn"), function() { return document.getElementById("cardWordEn").textContent; });

  // 返回单词卡 -> 选书
  document.getElementById("btnBackFromWordCard").onclick = function() { showPage("pageHome"); };

  // 已学习单词页
  document.getElementById("btnLearned").onclick = function() {
    const list = getJSON(KEY.learnedWords);
    const ul = document.getElementById("learnedWordList");
    ul.innerHTML = "";
    list.forEach(function(item) {
      const div = document.createElement("div");
      div.className = "learn-item";
      div.innerHTML = "<span>" + item.en + "</span><span style='color:var(--text-muted)'>" + item.cn + "</span>";
      ul.appendChild(div);
    });
    showPage("pageLearned");
  };
  document.getElementById("btnBackFromLearned").onclick = function() { showPage("pageHome"); };

  // 遗忘复习：翻卡界面（随机显示中文或英文，点击翻转）
  var forgetReviewWords = [];
  var forgetReviewIndex = 0;

  function shuffleArrayForReview(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function showForgetReviewCard() {
    var card = document.getElementById("forgetReviewFlashcard");
    var frontText = document.getElementById("forgetReviewFrontText");
    var backEn = document.getElementById("forgetReviewBackEn");
    var backPhonetic = document.getElementById("forgetReviewBackPhonetic");
    var backCn = document.getElementById("forgetReviewBackCn");
    var frontTip = document.getElementById("forgetReviewFrontTip");
    var backTip = document.getElementById("forgetReviewBackTip");
    var progressCur = document.getElementById("forgetReviewProgressCurrent");
    var progressTotal = document.getElementById("forgetReviewProgressTotal");
    var cardArea = document.getElementById("forgetReviewCardArea");
    var finishWrap = document.getElementById("forgetReviewFinishWrap");

    var actionsEl = document.getElementById("forgetReviewActions");
    if (forgetReviewWords.length === 0) {
      cardArea.classList.add("hide");
      if (actionsEl) actionsEl.classList.add("hide");
      finishWrap.classList.remove("hide");
      return;
    }
    cardArea.classList.remove("hide");
    if (actionsEl) actionsEl.classList.remove("hide");
    finishWrap.classList.add("hide");

    var w = forgetReviewWords[forgetReviewIndex];
    if (!w) return;

    var showCn = Math.random() > 0.5;
    frontText.textContent = showCn ? (w.cn || "—") : (w.en || "—");
    frontText.setAttribute("data-show-cn", showCn ? "1" : "0");

    backEn.textContent = w.en || "—";
    var hasPhonetic = w.phonetic && String(w.phonetic).trim();
    backPhonetic.textContent = hasPhonetic ? (w.phonetic.indexOf("/") === 0 ? w.phonetic : "/" + w.phonetic + "/") : "加载中…";
    backCn.textContent = w.cn || "—";
    if (!hasPhonetic && w.en) fetchPhoneticForWord(w.en, backPhonetic);

    if (frontTip) frontTip.textContent = getWordMemoryTip(w);
    if (backTip) backTip.textContent = getWordMemoryTip(w);

    card.classList.remove("flipped");
    progressCur.textContent = forgetReviewIndex + 1;
    progressTotal.textContent = forgetReviewWords.length;
  }

  function removeCurrentWordAndNext() {
    var w = forgetReviewWords[forgetReviewIndex];
    if (w && w.en) {
      markWordReviewedToday(w.en);
      forgetReviewWords.splice(forgetReviewIndex, 1);
      syncToAccount();
      if (forgetReviewIndex >= forgetReviewWords.length && forgetReviewIndex > 0) forgetReviewIndex--;
    }
    if (forgetReviewWords.length === 0) {
      document.getElementById("forgetReviewCardArea").classList.add("hide");
      var actionsEl = document.getElementById("forgetReviewActions");
      if (actionsEl) actionsEl.classList.add("hide");
      document.getElementById("forgetReviewFinishWrap").classList.remove("hide");
    } else {
      showForgetReviewCard();
    }
  }

  document.getElementById("btnForgetReview").onclick = function() {
    var words = getTodayReviewWords();
    if (words.length === 0) { alert("今日无需复习或已复习完毕"); return; }
    forgetReviewWords = shuffleArrayForReview(words);
    forgetReviewIndex = 0;
    showForgetReviewCard();
    showPage("pageForgetReviewDo");
  };

  document.getElementById("btnForgetReviewIRemember").onclick = function(e) {
    e.stopPropagation();
    var w = forgetReviewWords[forgetReviewIndex];
    if (!w) return;
    var showCn = document.getElementById("forgetReviewFrontText").getAttribute("data-show-cn") === "1";
    var title = document.getElementById("modalForgetRecallTitle");
    var prompt = document.getElementById("modalForgetRecallPrompt");
    var input = document.getElementById("modalForgetRecallInput");
    var errEl = document.getElementById("modalForgetRecallError");
    if (showCn) {
      title.textContent = "请输入对应的英文";
      prompt.textContent = "中文：" + (w.cn || "—");
      input.placeholder = "请输入英文";
    } else {
      title.textContent = "请输入对应的中文";
      prompt.textContent = "英文：" + (w.en || "—");
      input.placeholder = "请输入中文";
    }
    input.value = "";
    errEl.style.display = "none";
    errEl.textContent = "";
    document.getElementById("modalForgetRecall").classList.remove("hide");
    input.focus();
  };

  document.getElementById("modalForgetRecallClose").onclick = function() {
    document.getElementById("modalForgetRecall").classList.add("hide");
  };
  document.getElementById("btnForgetRecallCancel").onclick = function() {
    document.getElementById("modalForgetRecall").classList.add("hide");
  };

  document.getElementById("btnForgetRecallSubmit").onclick = function() {
    var w = forgetReviewWords[forgetReviewIndex];
    if (!w) return;
    var showCn = document.getElementById("forgetReviewFrontText").getAttribute("data-show-cn") === "1";
    var userInput = (document.getElementById("modalForgetRecallInput").value || "").trim();
    var correctAnswer = showCn ? (w.en || "") : (w.cn || "");
    var errEl = document.getElementById("modalForgetRecallError");
    if (!userInput) {
      errEl.textContent = "请填写答案";
      errEl.style.display = "block";
      return;
    }
    if (matchRecallAnswer(userInput, correctAnswer)) {
      document.getElementById("modalForgetRecall").classList.add("hide");
      removeCurrentWordAndNext();
    } else {
      errEl.textContent = "答错了，可点击卡片翻转查看答案";
      errEl.style.display = "block";
    }
  };
  document.getElementById("modalForgetRecallInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") document.getElementById("btnForgetRecallSubmit").click();
  });

  document.getElementById("forgetReviewFlashcard").onclick = function(e) {
    if (e.target.closest(".word-en") || e.target.closest("#btnForgetReviewIRemember")) return;
    var card = document.getElementById("forgetReviewFlashcard");
    if (card.classList.contains("flipped")) return;
    card.classList.add("flipped");
    var w = forgetReviewWords[forgetReviewIndex];
    if (w && w.en) {
      markWordReviewedToday(w.en);
      syncToAccount();
    }
  };

  (function() {
    var el = document.getElementById("forgetReviewBackEn");
    if (!el) return;
    function doSpeak(e) { if (e) e.stopPropagation(); speakWord(el.textContent); }
    el.onclick = doSpeak;
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", "点击朗读");
  })();

  document.getElementById("btnForgetReviewPrev").onclick = function(e) {
    e.stopPropagation();
    if (forgetReviewIndex > 0) {
      forgetReviewIndex--;
      showForgetReviewCard();
    }
  };

  document.getElementById("btnForgetReviewNext").onclick = function(e) {
    e.stopPropagation();
    var card = document.getElementById("forgetReviewFlashcard");
    if (card.classList.contains("flipped")) {
      if (forgetReviewWords[forgetReviewIndex]) forgetReviewWords.splice(forgetReviewIndex, 1);
      if (forgetReviewIndex >= forgetReviewWords.length) forgetReviewIndex = Math.max(0, forgetReviewWords.length - 1);
    } else {
      forgetReviewIndex = (forgetReviewIndex + 1) % forgetReviewWords.length;
    }
    if (forgetReviewWords.length === 0) {
      document.getElementById("forgetReviewCardArea").classList.add("hide");
      var actionsEl = document.getElementById("forgetReviewActions");
      if (actionsEl) actionsEl.classList.add("hide");
      document.getElementById("forgetReviewFinishWrap").classList.remove("hide");
    } else {
      showForgetReviewCard();
    }
  };

  var forgetReviewDoneTimer = null;
  document.getElementById("btnFinishForgetReview").onclick = function() {
    var days = getNum(KEY.forgetReviewDays) + 1;
    var coinsEarned = 50 * days;
    setNum(KEY.forgetReviewDays, days);
    setNum(KEY.coins, getNum(KEY.coins) + coinsEarned);
    setStr(KEY.lastForgetReview, todayStr());
    refreshHeader();
    syncToAccount();
    document.getElementById("forgetReviewDoneCoins").textContent = coinsEarned;
    showPage("pageForgetReviewDone");
    if (forgetReviewDoneTimer) clearTimeout(forgetReviewDoneTimer);
    forgetReviewDoneTimer = setTimeout(function() {
      forgetReviewDoneTimer = null;
      showPage("pageLearned");
    }, 2000);
  };
  document.getElementById("pageForgetReviewDone").onclick = function() {
    if (forgetReviewDoneTimer) { clearTimeout(forgetReviewDoneTimer); forgetReviewDoneTimer = null; }
    showPage("pageLearned");
  };

  document.getElementById("btnBackFromForgetReviewDo").onclick = function() {
    showPage("pageLearned");
  };

  // 情景对话
  let scenarioCategory = "";
  let scenarioItem = null;

  function initScenario() {
    const sel = document.getElementById("scenarioSelect");
    sel.innerHTML = "<option value=''>-- 选择情景 --</option>";
    Object.keys(SCENARIO_DIALOGUES).forEach(function(k) {
      const opt = document.createElement("option");
      opt.value = k;
      opt.textContent = SCENARIO_DIALOGUES[k].name;
      sel.appendChild(opt);
    });
    sel.onchange = function() {
      const k = sel.value;
      if (!k) { document.getElementById("scenarioPrompt").textContent = ""; document.getElementById("scenarioResult").classList.add("hide"); return; }
      scenarioCategory = k;
      const cat = SCENARIO_DIALOGUES[k];
      const items = cat.items;
      scenarioItem = items[Math.floor(Math.random() * items.length)];
      document.getElementById("scenarioPrompt").textContent = "请翻译/表达：\n" + scenarioItem.prompt;
      document.getElementById("scenarioInput").value = "";
      document.getElementById("scenarioResult").classList.add("hide");
    };
  }
  document.getElementById("btnBackFromScenario").onclick = function() { showPage("pageHome"); };
  document.getElementById("btnScenarioCheck").onclick = function() {
    if (!scenarioItem) { alert("请先选择情景"); return; }
    const input = (document.getElementById("scenarioInput").value || "").trim();
    const ok = matchAnswer(input, scenarioItem.answers);
    const res = document.getElementById("scenarioResult");
    res.classList.remove("hide");
    res.classList.remove("correct", "wrong");
    res.classList.add(ok ? "correct" : "wrong");
    const displayInput = normalizeForDisplay(input);
    res.innerHTML = "<p><strong>你的表达：</strong>" + (displayInput || "—") + "</p>" + (ok ? "<p>意思正确！</p>" : "<p>意思接近或需改进。</p>") + "<p><strong>更好表达：</strong> " + scenarioItem.suggest + "</p>";
  };

  // 单词测试：开始后进入答题界面，单词卡 + 提交 / 我不会 + 实时进度（支持中途退出后继续）
  let testQuestions = [];
  let testQi = 0;
  let testResults = [];
  var wordTestBookName = "";

  document.getElementById("btnBackFromWordTest").onclick = function() { showPage("pageHome"); };
  document.getElementById("btnWordTestStart").onclick = function() {
    const sel = document.getElementById("wordTestBookSelect");
    const name = sel && sel.value;
    if (!name || !WORD_BOOKS[name]) { alert("请选择单词本"); return; }
    const words = WORD_BOOKS[name].slice();
    if (words.length < 50) { alert("词本不足50词"); return; }
    wordTestBookName = name;
    const shuffled = words.sort(function() { return Math.random() - 0.5; });
    testQuestions = shuffled.slice(0, 50).map(function(w) {
      const showCn = Math.random() > 0.5;
      return { word: w, showCn: showCn, answer: showCn ? w.en : w.cn };
    });
    testQi = 0;
    testResults = [];
    showPage("pageWordTestDo");
    document.getElementById("wordTestDoCard").classList.remove("hide");
    document.getElementById("wordTestDoResult").classList.add("hide");
    showOneWordTestCard();
  };

  function updateWordTestProgress() {
    const total = testQuestions.length;
    const done = testResults.length;
    document.getElementById("wordTestProgressCurrent").textContent = done;
    document.getElementById("wordTestProgressTotal").textContent = total;
    document.getElementById("wordTestProgressBar").style.width = total ? (done / total * 100) + "%" : "0%";
  }

  function showOneWordTestCard() {
    updateWordTestProgress();
    if (testQi >= testQuestions.length) {
      const correct = testResults.filter(function(r) { return r.correct; }).length;
      const rate = correct / testQuestions.length;
      let html = "<h3>测试结果</h3><p>正确 " + correct + " / " + testQuestions.length + "，正确率 " + (rate * 100).toFixed(0) + "%</p>";
      testResults.forEach(function(r, i) {
        html += "<div class='test-result-item " + (r.correct ? "correct" : "wrong") + "'>" + (i+1) + ". " + (r.showCn ? r.word.cn : r.word.en) + " → " + (r.userAnswer === "" ? "（未作答）" : "你的答案：" + r.userAnswer) + (r.correct ? "" : " （正确：" + normalizeForDisplay(r.answer) + "）") + "</div>";
      });
      document.getElementById("wordTestDoResult").innerHTML = html;
      document.getElementById("wordTestDoResult").classList.remove("hide");
      document.getElementById("wordTestDoCard").classList.add("hide");
      if (rate >= 0.9) { setNum(KEY.coins, getNum(KEY.coins) + 100); alert("正确率≥90%！"); }
      testQuestions = []; testQi = 0; testResults = []; wordTestBookName = "";
      return;
    }
    const q = testQuestions[testQi];
    document.getElementById("wordTestDoPrompt").textContent = q.showCn ? q.word.cn : q.word.en;
    document.getElementById("wordTestDoAnswer").value = "";
    document.getElementById("wordTestDoAnswer").focus();
  }

  document.getElementById("btnBackFromWordTestDo").onclick = function() { showPage("pageWordTest"); };
  document.getElementById("btnWordTestDoSubmit").onclick = function() {
    if (testQi >= testQuestions.length) return;
    const q = testQuestions[testQi];
    const rawAnswer = (document.getElementById("wordTestDoAnswer").value || "").trim();
    const userAnswer = normalizeForDisplay(rawAnswer);
    const correct = normalize(rawAnswer) === normalize(q.answer);
    testResults.push({ word: q.word, showCn: q.showCn, answer: q.answer, userAnswer: userAnswer, correct: correct });
    testQi++;
    showOneWordTestCard();
  };
  document.getElementById("btnWordTestDoSkip").onclick = function() {
    if (testQi >= testQuestions.length) return;
    const q = testQuestions[testQi];
    testResults.push({ word: q.word, showCn: q.showCn, answer: q.answer, userAnswer: "", correct: false });
    testQi++;
    showOneWordTestCard();
  };

  // 基础单词：选等级 -> 用对应等级词表进单词卡（每等级建议至少 1 万词，可经外部数据加载）
  var BASIC_LEVEL_MIN_WORDS = 10000;
  document.getElementById("btnBackFromBasic").onclick = function() { showPage("pageHome"); };
  document.getElementById("btnBasicConfirm").onclick = function() {
    const sel = document.getElementById("basicLevelSelect");
    const level = sel ? sel.options[sel.selectedIndex].text.trim() : "初中";
    const levelList = BASIC_LEVEL_BOOKS[level] || WORD_BOOK_25;
    currentBookName = "基础单词-" + level;
    currentWordList = levelList.slice();
    currentWordIndex = 0;
    document.getElementById("wordCardTitle").textContent = "基础单词 · " + level;
    showWordCard();
    showPage("pageWordCard");
  };

  // 词汇量检测：开始后进入答题界面，单词卡 + 提交 / 我不会 + 实时进度
  const VOCAB_POOL = WORD_BOOK_25;
  let vocabTestQi = 0;
  let vocabTestAnswers = [];

  document.getElementById("btnBackFromVocabTest").onclick = function() { showPage("pageHome"); };
  document.getElementById("btnVocabTestStart").onclick = function() {
    var learned = getJSON(KEY.learnedWords, []);
    var learnedSet = {};
    learned.forEach(function(x) { learnedSet[(x && x.en) || ""] = true; });
    var learnedPool = VOCAB_POOL.filter(function(w) { return learnedSet[(w && w.en) || ""]; });
    var notLearnedPool = VOCAB_POOL.filter(function(w) { return !learnedSet[(w && w.en) || ""]; });
    var takeLearned = Math.min(25, learnedPool.length);
    var takeNotLearned = 50 - takeLearned;
    var fromLearned = learnedPool.slice().sort(function() { return Math.random() - 0.5; }).slice(0, takeLearned);
    var fromNotLearned = notLearnedPool.slice().sort(function() { return Math.random() - 0.5; }).slice(0, takeNotLearned);
    vocabTestAnswers = fromLearned.concat(fromNotLearned).sort(function() { return Math.random() - 0.5; }).map(function(w) {
      var showCn = Math.random() > 0.5;
      return { word: w, showCn: showCn, answer: showCn ? w.en : w.cn };
    });
    vocabTestQi = 0;
    showPage("pageVocabTestDo");
    document.getElementById("vocabTestDoCard").classList.remove("hide");
    document.getElementById("vocabTestDoResult").classList.add("hide");
    showOneVocabTestCard();
  };

  function updateVocabTestProgress() {
    const total = 50;
    const done = vocabTestQi;
    document.getElementById("vocabTestProgressCurrent").textContent = done;
    document.getElementById("vocabTestProgressTotal").textContent = total;
    document.getElementById("vocabTestProgressBar").style.width = (done / total * 100) + "%";
  }

  function showOneVocabTestCard() {
    updateVocabTestProgress();
    if (vocabTestQi >= vocabTestAnswers.length) {
      const correct = vocabTestAnswers.filter(function(a) { return a.correct; }).length;
      const rate = correct / 50;
      let levelIndex = Math.min(7, Math.floor(rate * 8));
      const levelName = VOCAB_LEVELS[levelIndex];
      const oldIndex = getNum(KEY.vocabLevelIndex);
      const oldLevel = getStr(KEY.vocabLevel);
      let html = "<h3>检测结果</h3><p>正确 " + correct + " / 50，正确率 " + (rate * 100).toFixed(0) + "%</p><p>词汇量等级：<strong>" + levelName + "</strong></p>";
      if (oldLevel) {
        if (levelIndex > oldIndex) { setNum(KEY.coins, getNum(KEY.coins) + 500); html += "<p style='color:#238636'>晋级！</p>"; }
        else if (levelIndex < oldIndex) html += "<p style='color:var(--text-muted)'>等级下降，请多复习</p>";
      }
      setStr(KEY.vocabLevel, levelName);
      setNum(KEY.vocabLevelIndex, levelIndex);
      document.getElementById("vocabTestDoResult").innerHTML = html;
      document.getElementById("vocabTestDoResult").classList.remove("hide");
      document.getElementById("vocabTestDoCard").classList.add("hide");
      vocabTestQi = 0; vocabTestAnswers = [];
      refreshHeader();
      return;
    }
    const q = vocabTestAnswers[vocabTestQi];
    document.getElementById("vocabTestDoPrompt").textContent = q.showCn ? q.word.cn : q.word.en;
    document.getElementById("vocabTestDoAnswer").value = "";
    document.getElementById("vocabTestDoAnswer").focus();
  }

  document.getElementById("btnBackFromVocabTestDo").onclick = function() { showPage("pageVocabTest"); };
  document.getElementById("btnVocabTestDoSubmit").onclick = function() {
    if (vocabTestQi >= vocabTestAnswers.length) return;
    const q = vocabTestAnswers[vocabTestQi];
    const rawAnswer = (document.getElementById("vocabTestDoAnswer").value || "").trim();
    q.correct = normalize(rawAnswer) === normalize(q.answer);
    vocabTestQi++;
    showOneVocabTestCard();
  };
  document.getElementById("btnVocabTestDoSkip").onclick = function() {
    if (vocabTestQi >= vocabTestAnswers.length) return;
    const q = vocabTestAnswers[vocabTestQi];
    q.correct = false;
    vocabTestQi++;
    showOneVocabTestCard();
  };

  // 推荐学习：有等级后推荐未学词，点开始用单词卡
  function initRecommend() {
    const level = getStr(KEY.vocabLevel);
    const hint = document.getElementById("recommendHint");
    if (!level) { hint.textContent = "请先完成「单词词汇量检测」获得等级后再使用推荐学习。"; return; }
    const learned = getJSON(KEY.learnedWords);
    const learnedSet = {}; learned.forEach(function(x) { learnedSet[x.en] = true; });
    const pool = WORD_BOOK_25.filter(function(w) { return !learnedSet[w.en]; });
    if (pool.length === 0) { hint.textContent = "当前等级下推荐词已学完，请继续学习或复习。"; return; }
    hint.textContent = "根据你的等级（" + level + "），推荐学习以下未掌握词汇。共 " + Math.min(20, pool.length) + " 个。";
    currentWordList = pool.slice().sort(function() { return Math.random() - 0.5; }).slice(0, 20);
    currentWordIndex = 0;
    currentBookName = "推荐学习";
  }
  document.getElementById("btnBackFromRecommend").onclick = function() { showPage("pageHome"); };
  document.getElementById("btnRecommendStart").onclick = function() {
    if (currentWordList.length === 0) { alert("暂无推荐或请先完成词汇量检测"); return; }
    document.getElementById("wordCardTitle").textContent = "推荐学习";
    showWordCard();
    showPage("pageWordCard");
  };

  // 英语阅读：分级、随机文章、可点单词/句子、读后测验、达标 90% 得 600 金币
  // 生产规模：设置 READING_DATA_URL 加载外部 JSON，每等级文章总数不低于 1 万篇、每等级题目池不低于 8000 题；高中及以上为长文、学术论文，可从 PLOS/arXiv/学术论坛等整理。格式同 READING_ARTICLES。
  var READING_DATA_URL = ""; // 例如 "reading-data.json" 或 "https://xxx.com/reading.json"
  var READING_QUESTIONS_PER_QUIZ = 5; // 每次测验仅抽 5 道题；从该文章题目池中随机抽取
  var readingDataCache = null;
  var readingDataLoading = false;

  function loadReadingDataIfNeeded() {
    if (!READING_DATA_URL || readingDataCache !== null || readingDataLoading) return;
    readingDataLoading = true;
    fetch(READING_DATA_URL)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        readingDataCache = data;
        readingDataLoading = false;
      })
      .catch(function() { readingDataLoading = false; });
  }

  function getReadingArticlesByLevel(level) {
    var list = (readingDataCache && readingDataCache[level]) || (typeof READING_ARTICLES !== "undefined" && READING_ARTICLES[level]) || [];
    return Array.isArray(list) ? list : [];
  }

  function shuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  var currentReadingArticle = null;
  var currentReadingLevel = "";
  var currentReadingQuizQuestions = []; // 本次测验随机抽出的题目，每次阅读不同

  document.getElementById("btnBackFromReadingSelect").onclick = function() { showPage("pageHome"); };
  document.getElementById("btnReadingStart").onclick = function() {
    var sel = document.getElementById("readingLevelSelect");
    var level = sel ? sel.options[sel.selectedIndex].text.trim() : "小学";
    var list = getReadingArticlesByLevel(level);
    if (list.length === 0) { alert("该等级暂无文章"); return; }
    currentReadingLevel = level;
    currentReadingArticle = list[Math.floor(Math.random() * list.length)];
    document.getElementById("readingArticleTitle").textContent = currentReadingArticle.title;
    var bodyEl = document.getElementById("readingArticleBody");
    var html = "";
    var sentences = currentReadingArticle.sentences || [];
    for (var s = 0; s < sentences.length; s++) {
      var sent = sentences[s];
      var en = (sent.en || "").trim();
      var parts = en.split(/([a-zA-Z']+)/);
      var inner = "";
      for (var p = 0; p < parts.length; p++) {
        if (/^[a-zA-Z']+$/.test(parts[p])) {
          inner += "<span class=\"word-clickable\" data-word=\"" + escapeHtml(parts[p]) + "\">" + escapeHtml(parts[p]) + "</span>";
        } else {
          inner += escapeHtml(parts[p]);
        }
      }
      html += "<div class=\"sentence-block\"><span class=\"sentence-clickable\" data-sentence-index=\"" + s + "\">" + inner + "</span></div>";
    }
    bodyEl.innerHTML = html;
    showPage("pageReadingArticle");
  };

  document.getElementById("btnBackFromReadingArticle").onclick = function() { showPage("pageReadingSelect"); };
  document.getElementById("readingArticleBody").addEventListener("click", function(e) {
    var wordSpan = e.target.closest(".word-clickable");
    var sentenceSpan = e.target.closest(".sentence-clickable");
    if (wordSpan) {
      var word = wordSpan.getAttribute("data-word");
      if (!word) return;
      var found = findWordInAllBooks(word);
      var phoneticEl = document.getElementById("letterCardPhonetic");
      var cnEl = document.getElementById("letterCardCn");
      document.getElementById("letterCardEn").textContent = word;
      var hasPhonetic = found && found.phonetic && String(found.phonetic).trim();
      phoneticEl.textContent = hasPhonetic ? (found.phonetic.indexOf("/") === 0 ? found.phonetic : "/" + found.phonetic + "/") : "加载中…";
      cnEl.textContent = found ? (found.cn || "") : "加载中…";
      document.getElementById("modalLetterCard").classList.remove("hide");
      if (!hasPhonetic) fetchPhoneticForWord(word, phoneticEl);
      if (!found) {
        var url = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(word) + "&langpair=en|zh-CN";
        fetch(url).then(function(r) { return r.json(); }).then(function(data) {
          var cn = (data.responseData && data.responseData.translatedText) ? data.responseData.translatedText.trim() : "";
          cnEl.textContent = cn || "—";
        }).catch(function() { cnEl.textContent = "—"; });
      }
      return;
    }
    if (sentenceSpan) {
      var idx = parseInt(sentenceSpan.getAttribute("data-sentence-index"), 10);
      if (isNaN(idx) || !currentReadingArticle || !currentReadingArticle.sentences || !currentReadingArticle.sentences[idx]) return;
      var sent = currentReadingArticle.sentences[idx];
      document.getElementById("sentenceEn").textContent = sent.en || "";
      document.getElementById("sentenceCn").textContent = sent.cn || "";
      document.getElementById("modalSentence").classList.remove("hide");
    }
  });

  document.getElementById("btnReadingFinish").onclick = function() {
    var pool = (currentReadingArticle && currentReadingArticle.questions) ? currentReadingArticle.questions.slice() : [];
    if (pool.length === 0) { alert("该文章暂无测验题"); return; }
    var n = Math.min(READING_QUESTIONS_PER_QUIZ, pool.length);
    currentReadingQuizQuestions = shuffleArray(pool).slice(0, n);
    var qHtml = "";
    for (var i = 0; i < currentReadingQuizQuestions.length; i++) {
      var q = currentReadingQuizQuestions[i];
      var opts = q.options || [];
      var correct = Math.max(0, Math.min(3, parseInt(q.correct, 10) || 0));
      qHtml += "<div class=\"reading-quiz-q\" data-correct=\"" + correct + "\"><p>" + (i + 1) + ". " + escapeHtml(q.q) + "</p>";
      for (var j = 0; j < opts.length; j++) {
        qHtml += "<label class=\"reading-quiz-opt\"><input type=\"radio\" name=\"reading_q_" + i + "\" value=\"" + j + "\"> " + escapeHtml(opts[j]) + "</label>";
      }
      qHtml += "</div>";
    }
    document.getElementById("readingQuizQuestions").innerHTML = qHtml;
    document.getElementById("modalReadingQuiz").classList.remove("hide");
  };

  document.getElementById("modalReadingQuizClose").onclick = function() { document.getElementById("modalReadingQuiz").classList.add("hide"); };
  document.getElementById("btnReadingQuizSubmit").onclick = function() {
    try {
      var qDoms = document.querySelectorAll("#readingQuizQuestions .reading-quiz-q");
      if (!qDoms || qDoms.length === 0) {
        var questions = currentReadingQuizQuestions;
        if (!questions || questions.length === 0) { alert("暂无测验题"); return; }
      }
      var total = qDoms.length;
      var correctCount = 0;
      var details = [];
      for (var i = 0; i < total; i++) {
        var rightIdx = Math.max(0, Math.min(3, parseInt(qDoms[i].getAttribute("data-correct"), 10) || 0));
        var chosen = document.querySelector("input[name=\"reading_q_" + i + "\"]:checked");
        var val = chosen ? parseInt(chosen.value, 10) : -1;
        var isCorrect = val === rightIdx;
        if (isCorrect) correctCount++;
        var qText = "";
        var pEl = qDoms[i].querySelector("p");
        if (pEl) qText = (pEl.textContent || "").trim().replace(/^\d+\.\s*/, "");
        var opts = [];
        qDoms[i].querySelectorAll(".reading-quiz-opt").forEach(function(label) {
          var t = (label.textContent || "").trim();
          if (t) opts.push(t);
        });
        var userChoice = val >= 0 && opts[val] ? opts[val] : "未选";
        var rightAnswer = opts[rightIdx] || "";
        details.push({ qText: qText, userChoice: userChoice, rightAnswer: rightAnswer, isCorrect: isCorrect, index: i + 1 });
      }
      var rate = total > 0 ? correctCount / total : 0;
      var quizModal = document.getElementById("modalReadingQuiz");
      var resultModal = document.getElementById("modalReadingResult");
      var resultTitle = document.getElementById("readingResultTitle");
      var resultText = document.getElementById("readingResultText");
      var coinsEl = document.getElementById("readingResultCoins");
      if (quizModal) quizModal.classList.add("hide");
      if (resultTitle) resultTitle.textContent = "测验结果";
      var summary = "正确 " + correctCount + " / " + total + "，正确率 " + (rate * 100).toFixed(0) + "%。";
      if (rate >= 1) summary += " 全部正确，恭喜！";
      else if (rate >= 0.9) summary += " 未达全部正确，继续加油。";
      else summary += " 请根据下方讲解复习。";
      var detailHtml = "";
      details.forEach(function(d) {
        detailHtml += "<div class=\"reading-result-item " + (d.isCorrect ? "correct" : "wrong") + "\" style=\"margin:10px 0;padding:8px;border-radius:8px;border-left:4px solid " + (d.isCorrect ? "#238636" : "#c45c4a") + ";background:var(--bg-soft);\">";
        detailHtml += "<strong>第 " + d.index + " 题：" + (d.isCorrect ? "正确" : "错误") + "</strong><br>";
        detailHtml += "题目：" + escapeHtml(d.qText) + "<br>";
        detailHtml += "你的选择：" + escapeHtml(d.userChoice) + "<br>";
        detailHtml += "正确答案：" + escapeHtml(d.rightAnswer) + "<br>";
        detailHtml += "依据：根据文章内容，\"" + escapeHtml(d.rightAnswer) + "\" 为正确答案。";
        detailHtml += "</div>";
      });
      if (resultText) resultText.innerHTML = "<p style=\"margin-bottom:12px;\">" + summary + "</p>" + detailHtml;
      if (rate >= 1) {
        setNum(KEY.coins, getNum(KEY.coins) + 600);
        if (coinsEl) { coinsEl.textContent = "+ 600 金币（全部正确）"; coinsEl.classList.remove("hide"); }
      } else {
        if (coinsEl) coinsEl.classList.add("hide");
      }
      refreshHeader();
      syncToAccount();
      if (resultModal) resultModal.classList.remove("hide");
    } catch (e) {
      alert("提交出错，请重试");
    }
  };

  document.getElementById("modalReadingResultClose").onclick = function() {
    document.getElementById("modalReadingResult").classList.add("hide");
    showPage("pageReadingSelect");
  };
  document.getElementById("btnReadingResultOK").onclick = function() {
    document.getElementById("modalReadingResult").classList.add("hide");
    showPage("pageReadingSelect");
  };

  document.getElementById("modalSentenceClose").onclick = function() { document.getElementById("modalSentence").classList.add("hide"); };

  // 签到、商城、账户
  document.getElementById("btnSignIn").onclick = doSignIn;
  function updateMallTotal() {
    var total = 0;
    MALL_PRODUCTS.forEach(function(p) {
      total += p.price * (parseInt(mallQuantities[p.id], 10) || 0);
    });
    var el = document.getElementById("mallTotalPriceVal");
    if (el) el.textContent = total;
  }
  function renderMallProducts() {
    var list = document.getElementById("mallProductList");
    if (!list) return;
    list.innerHTML = "";
    MALL_PRODUCTS.forEach(function(p) {
      if (mallQuantities[p.id] == null) mallQuantities[p.id] = 0;
      var wrap = document.createElement("div");
      wrap.className = "mall-product";
      wrap.innerHTML =
        "<div class=\"mall-product-img\" data-product-id=\"" + p.id + "\" title=\"点击查看资料卡\">" + (p.img || "📦") + "</div>" +
        "<div class=\"mall-product-name\">" + p.name + "</div>" +
        "<div class=\"mall-product-price\">" + p.price + " 金币/个</div>" +
        "<div class=\"mall-product-qty\">" +
        "<button type=\"button\" class=\"btn\" data-mall-minus=\"" + p.id + "\">－</button>" +
        "<span data-mall-qty=\"" + p.id + "\">" + mallQuantities[p.id] + "</span>" +
        "<button type=\"button\" class=\"btn\" data-mall-plus=\"" + p.id + "\">＋</button>" +
        "</div>";
      list.appendChild(wrap);
    });
    list.querySelectorAll(".mall-product-img").forEach(function(el) {
      el.onclick = function() {
        var pid = el.getAttribute("data-product-id");
        var prod = MALL_PRODUCTS.filter(function(x) { return x.id === pid; })[0];
        if (!prod) return;
        document.getElementById("productCardName").textContent = prod.name || "—";
        document.getElementById("productCardImg").textContent = prod.img || "📦";
        document.getElementById("productCardCoins").textContent = prod.price;
        document.getElementById("productCardMaturity").textContent = "0/" + prod.maturityMax;
        document.getElementById("productCardFunc").textContent = prod.func || "—";
        document.getElementById("productCardDesc").textContent = prod.desc || "—";
        document.getElementById("modalProductCard").classList.remove("hide");
      };
    });
    list.querySelectorAll("[data-mall-plus]").forEach(function(btn) {
      btn.onclick = function() {
        var pid = btn.getAttribute("data-mall-plus");
        mallQuantities[pid] = (mallQuantities[pid] || 0) + 1;
        var qEl = list.querySelector("[data-mall-qty=\"" + pid + "\"]");
        if (qEl) qEl.textContent = mallQuantities[pid];
        updateMallTotal();
      };
    });
    list.querySelectorAll("[data-mall-minus]").forEach(function(btn) {
      btn.onclick = function() {
        var pid = btn.getAttribute("data-mall-minus");
        var n = (mallQuantities[pid] || 0) - 1;
        mallQuantities[pid] = n < 0 ? 0 : n;
        var qEl = list.querySelector("[data-mall-qty=\"" + pid + "\"]");
        if (qEl) qEl.textContent = mallQuantities[pid];
        updateMallTotal();
      };
    });
    updateMallTotal();
  }
  var btnMallBuyEl = document.getElementById("btnMallBuy");
  if (btnMallBuyEl) {
    btnMallBuyEl.onclick = function() {
      // 按当前勾选数量计算总价：每个商品 (单价 × 数量) 相加
      var totalPrice = 0;
      MALL_PRODUCTS.forEach(function(p) {
        var qty = parseInt(mallQuantities[p.id], 10) || 0;
        totalPrice += p.price * qty;
      });
      if (totalPrice <= 0) return;
      var currentCoins = parseInt(getNum(KEY.coins), 10) || 0;
      if (currentCoins < totalPrice) {
        var toast = document.getElementById("toastMallNotEnough");
        if (toast) {
          toast.classList.add("show");
          setTimeout(function() { toast.classList.remove("show"); }, 500);
        }
        return;
      }
      setNum(KEY.coins, currentCoins - totalPrice);
      mallJustBought = true;
      MALL_PRODUCTS.forEach(function(p) {
        mallQuantities[p.id] = 0;
      });
      renderMallProducts();
      var mallCoinsEl = document.getElementById("mallCoins");
      if (mallCoinsEl) mallCoinsEl.textContent = getNum(KEY.coins);
      refreshHeader();
      syncToAccount();
    };
  }
  document.getElementById("btnMall").onclick = function() {
    document.getElementById("mallCoins").textContent = getNum(KEY.coins);
    renderMallProducts();
    updateMallTotal();
    document.getElementById("modalMall").classList.remove("hide");
  };
  document.getElementById("modalMallClose").onclick = function() { document.getElementById("modalMall").classList.add("hide"); };
  document.getElementById("modalProductCardClose").onclick = function() { document.getElementById("modalProductCard").classList.add("hide"); };

  document.getElementById("btnAccount").onclick = function() {
    const acc = getAccount();
    const userEl = document.getElementById("accountModalUser");
    const manageEl = document.getElementById("accountModalManage");
    if (userEl) userEl.textContent = acc.username ? acc.username : "未登录";
    if (manageEl) manageEl.style.display = (acc.username === "Entelch") ? "" : "none";
    document.getElementById("modalAccount").classList.remove("hide");
  };
  document.getElementById("modalAccountClose").onclick = function() { document.getElementById("modalAccount").classList.add("hide"); };
  document.getElementById("accountModalLogout").onclick = function() {
    syncToAccount();
    clearUserState();
    setAccount({});
    if (document.getElementById("appHeader")) document.getElementById("appHeader").style.display = "none";
    document.querySelectorAll(".page").forEach(function(p) { p.classList.remove("active"); });
    document.getElementById("pageLoginGate").classList.add("active");
    document.getElementById("modalAccount").classList.add("hide");
    var u = document.getElementById("gateUsername"); if (u) u.value = "";
    var p = document.getElementById("gatePassword"); if (p) p.value = "";
    var ru = document.getElementById("gateRegUsername"); if (ru) ru.value = "";
    var rp = document.getElementById("gateRegPassword"); if (rp) rp.value = "";
    var rpc = document.getElementById("gateRegPasswordConfirm"); if (rpc) rpc.value = "";
    var loginForm = document.getElementById("gateLoginForm"); var regForm = document.getElementById("gateRegisterForm");
    if (loginForm) loginForm.classList.remove("hide"); if (regForm) regForm.classList.add("hide");
  };
  document.getElementById("accountModalManage").onclick = function() {
    document.getElementById("modalAccount").classList.add("hide");
    showPage("pageAdmin");
    fillAdminList();
  };
  document.getElementById("btnBackFromAdmin").onclick = function() { showPage("pageHome"); };
  function formatStudyTime(ms) {
    if (ms == null || isNaN(ms)) return "0分0秒";
    var m = Math.floor(ms / 60000);
    var s = Math.floor((ms % 60000) / 1000);
    return m + "分" + s + "秒";
  }
  function fillAdminList() {
    var listEl = document.getElementById("adminAccountList");
    if (!listEl) return;
    var accounts = getAccounts();
    var blacklist = getBlacklist();
    var html = "";
    Object.keys(accounts).forEach(function(username) {
      var pwd = accounts[username];
      var userKey = "mech_user_" + username;
      var raw = localStorage.getItem(userKey);
      var data = {};
      try { if (raw) data = JSON.parse(raw); } catch (e) {}
      var signInDays = data.signInDays != null ? data.signInDays : 0;
      var studyMsToday = data.studyMsToday != null ? data.studyMsToday : 0;
      var vocabLevel = data.vocabLevel || "未检测";
      var coins = data.coins != null ? data.coins : 0;
      var frozen = blacklist.indexOf(username) >= 0;
      html += '<div class="admin-account-item' + (frozen ? ' frozen' : '') + '" data-username="' + username.replace(/"/g, "&quot;") + '">';
      html += '<h4>账户：' + username + (frozen ? ' <span style="color:#c45c4a;">(已冻结)</span>' : '') + '</h4>';
      html += '<p class="admin-stats">密码：' + pwd + ' | 连续签到：' + signInDays + ' 天 | 今日学习：' + formatStudyTime(studyMsToday) + ' | 词汇量：' + vocabLevel + ' | 金币：' + coins + '</p>';
      html += '<div class="admin-actions">';
      html += '<button type="button" class="btn admin-btn-edit">修改密码</button>';
      html += '<button type="button" class="btn admin-btn-delete">删除账户</button>';
      if (frozen) {
        html += '<button type="button" class="btn admin-btn-unblacklist">取消黑名单</button>';
      } else {
        html += '<button type="button" class="btn admin-btn-blacklist">拉入黑名单</button>';
      }
      html += '</div></div>';
    });
    listEl.innerHTML = html || "<p class=\"login-gate-tip\">暂无账户</p>";
    listEl.querySelectorAll(".admin-account-item").forEach(function(item) {
      var username = item.getAttribute("data-username");
      var editBtn = item.querySelector(".admin-btn-edit");
      if (editBtn) editBtn.onclick = function() {
        var newPwd = prompt("输入新密码（仅英文、数字）", "");
        if (newPwd == null) return;
        if (!/^[a-zA-Z0-9]+$/.test(newPwd)) { alert("密码只能使用英文字母和数字"); return; }
        var ac = getAccounts();
        ac[username] = newPwd;
        setAccounts(ac);
        fillAdminList();
        alert("已修改");
      };
      var delBtn = item.querySelector(".admin-btn-delete");
      if (delBtn) delBtn.onclick = function() {
        if (!confirm("确定删除账户 " + username + "？删除后该账号将无法再登录。")) return;
        var ac = getAccounts();
        var pwd = ac[username];
        function doLocalDelete() {
          delete ac[username];
          setAccounts(ac);
          try { localStorage.removeItem("mech_user_" + username); } catch (e) {}
          fillAdminList();
          alert("已删除");
        }
        if (!SYNC_API_URL || !pwd) {
          doLocalDelete();
          return;
        }
        fetch(SYNC_API_URL + "/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: username, password: pwd, deleteAccount: true })
        }).then(function(r) { return r.json().then(function(j) { return { ok: r.ok, json: j }; }); })
          .then(function(result) {
            if (result.ok && result.json.deleted) {
              doLocalDelete();
            } else {
              alert("云端删除失败：" + (result.json && result.json.error ? result.json.error : "请稍后重试"));
            }
          })
          .catch(function() { alert("云端删除失败，请检查网络后重试"); });
      };
      var blacklistBtn = item.querySelector(".admin-btn-blacklist");
      if (blacklistBtn) blacklistBtn.onclick = function() {
        if (!confirm("确定将 " + username + " 拉入黑名单？该用户将被踢出并无法登录直至取消黑名单。")) return;
        var bl = getBlacklist();
        if (bl.indexOf(username) < 0) bl.push(username);
        setBlacklist(bl);
        var acc = getAccount();
        if (acc && acc.username === username) {
          setAccount({});
          if (document.getElementById("appHeader")) document.getElementById("appHeader").style.display = "none";
          document.querySelectorAll(".page").forEach(function(p) { p.classList.remove("active"); });
          document.getElementById("pageLoginGate").classList.add("active");
        }
        fillAdminList();
        alert("已拉入黑名单");
      };
      var unblacklistBtn = item.querySelector(".admin-btn-unblacklist");
      if (unblacklistBtn) unblacklistBtn.onclick = function() {
        var bl = getBlacklist().filter(function(u) { return u !== username; });
        setBlacklist(bl);
        fillAdminList();
        alert("已取消黑名单");
      };
    });
  }
  window.fillAdminList = fillAdminList;

  // 登录门页：登录（有云端时完全走服务器，任意设备/浏览器同账号实时同步）
  document.getElementById("gateBtnLogin").onclick = function() {
    const user = (document.getElementById("gateUsername").value || "").trim();
    const pwd = document.getElementById("gatePassword").value || "";
    if (!user) { alert("请输入账号"); return; }
    if (getBlacklist().indexOf(user) >= 0) { alert("已经冻结"); return; }
    if (SYNC_API_URL) {
      loginViaServer(user, pwd, function(ok, data, errMsg) {
        if (!ok) {
          var msg = errMsg || "登录失败";
          if (msg === "账号不存在") {
            msg = "账号不存在。若您在电脑/其他设备已注册，请确认：1) 手机打开的是同一链接（见下方「当前同步地址」）；2) 若使用 Vercel 部署，需在项目设置中配置 Upstash Redis 并重新部署。";
          }
          alert(msg);
          return;
        }
        clearUserState();
        setAccount({ username: user, password: pwd });
        var ac = getAccounts();
        if (!ac[user]) { ac[user] = pwd; setAccounts(ac); }
        applyUserData(data || {});
        if (Object.keys(data || {}).length === 0) syncFromAccount();
        syncToAccount();
        refreshHeader();
        enterApp();
      });
    } else {
      const accounts = getAccounts();
      if (!accounts[user]) { alert("登录失败"); return; }
      if (accounts[user] !== pwd) { alert("密码错误"); return; }
      clearUserState();
      setAccount({ username: user, password: pwd });
      syncFromAccount();
      refreshHeader();
      enterApp();
      alert("登录成功，数据已从本机恢复。多设备同步请通过「同一网址」访问（如 npm start 或已部署链接）。");
    }
  };
  document.getElementById("gateBtnShowRegister").onclick = function() {
    document.getElementById("gateLoginForm").classList.add("hide");
    document.getElementById("gateRegisterForm").classList.remove("hide");
    document.getElementById("gateRegUsername").value = "";
    document.getElementById("gateRegPassword").value = "";
    document.getElementById("gateRegPasswordConfirm").value = "";
  };
  function doGateRegister() {
    var user = (document.getElementById("gateRegUsername").value || "").trim();
    var pwd = document.getElementById("gateRegPassword").value || "";
    var confirmPwd = document.getElementById("gateRegPasswordConfirm").value || "";
    if (!user) { alert("注册失败"); return; }
    if (!/^[a-zA-Z0-9]+$/.test(user)) { alert("账号只能使用英文字母和数字"); return; }
    if (!pwd) { alert("注册失败"); return; }
    if (!/^[a-zA-Z0-9]+$/.test(pwd)) { alert("密码只能使用英文字母和数字"); return; }
    if (pwd !== confirmPwd) { alert("注册失败"); return; }
    if (SYNC_API_URL) {
      registerViaServer(user, pwd, function(ok, errMsg) {
        if (!ok) { alert(errMsg || "注册失败"); return; }
        clearUserState();
        setAccount({ username: user, password: pwd });
        var ac = getAccounts();
        if (!ac[user]) { ac[user] = pwd; setAccounts(ac); }
        applyUserData({});
        document.getElementById("gateRegUsername").value = "";
        document.getElementById("gateRegPassword").value = "";
        document.getElementById("gateRegPasswordConfirm").value = "";
        document.getElementById("gateRegisterForm").classList.add("hide");
        document.getElementById("gateLoginForm").classList.remove("hide");
        refreshHeader();
        enterApp();
        alert("注册成功。在手机登录时，请用浏览器打开与当前页面「同一链接」（见下方当前同步地址），再输入本账号密码。若使用 Vercel，需在项目设置中配置 Upstash Redis 才能跨设备保存账号。");
      });
      return;
    }
    var accounts = getAccounts();
    if (accounts[user]) { alert("注册失败"); return; }
    accounts[user] = pwd;
    setAccounts(accounts);
    document.getElementById("gateRegUsername").value = "";
    document.getElementById("gateRegPassword").value = "";
    document.getElementById("gateRegPasswordConfirm").value = "";
    document.getElementById("gateRegisterForm").classList.add("hide");
    document.getElementById("gateLoginForm").classList.remove("hide");
    alert("注册成功");
  }
  window.doGateRegister = doGateRegister;
  document.getElementById("gateBtnRegister").onclick = doGateRegister;
  document.getElementById("gateBtnShowLogin").onclick = function() {
    document.getElementById("gateRegisterForm").classList.add("hide");
    document.getElementById("gateLoginForm").classList.remove("hide");
    document.getElementById("gateRegUsername").value = "";
    document.getElementById("gateRegPassword").value = "";
    document.getElementById("gateRegPasswordConfirm").value = "";
  };

  // 页面加载时：未登录则显示登录门
  initAuthGate();

  // 搜索/翻译：内部调用免费翻译接口，结果若为英文则字母可点开单词卡
  function hasChinese(text) {
    if (!text || !text.trim()) return false;
    return /[\u4e00-\u9fa5]/.test(text);
  }

  function isMostlyEnglish(text) {
    if (!text || !text.trim()) return false;
    var letters = 0, latin = 0;
    for (var i = 0; i < text.length; i++) {
      var c = text.charAt(i);
      if (/[a-zA-Z]/.test(c)) { letters++; latin++; }
      else if (/[\u4e00-\u9fa5]/.test(c)) letters++;
    }
    return latin > 0 && (latin / text.replace(/\s/g, "").length) > 0.3;
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function normalizeTranslationText(text) {
    if (!text || !text.trim()) return text;
    text = text.trim().replace(/\s+/g, " ");
    var first = text.charAt(0);
    if (first >= "a" && first <= "z") text = first.toUpperCase() + text.slice(1);
    text = text.replace(/([.!?]\s+)([a-z])/g, function(m, p1, p2) { return p1 + p2.toUpperCase(); });
    return text;
  }
  function renderResultWithClickableWords(text) {
    var parts = text.split(/([a-zA-Z']+)/);
    var html = "";
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      if (/^[a-zA-Z']+$/.test(p)) {
        var found = findWordInBooks(p);
        var ph = found && found.phonetic ? String(found.phonetic).trim() : "";
        var display = p + (ph ? (ph.indexOf("/") === 0 ? " " + ph : " /" + ph + "/") : "");
        html += "<span class=\"word-clickable\" data-word=\"" + escapeHtml(p) + "\">" + escapeHtml(display) + "</span>";
      } else {
        html += escapeHtml(p);
      }
    }
    return html;
  }
  function findWordInBooks(word) {
    var lower = (word || "").toLowerCase().trim();
    var books = [WORD_BOOK_25];
    for (var b = 0; b < books.length; b++) {
      for (var i = 0; i < books[b].length; i++) {
        var w = books[b][i];
        if ((w.en || "").toLowerCase() === lower) return w;
      }
    }
    return null;
  }
  function findWordInAllBooks(word) {
    var lower = (word || "").toLowerCase().trim();
    var books = [WORD_BOOK_25];
    var levelNames = ["小学", "初中", "高中", "大学", "出国", "雅思", "托福", "哈佛"];
    for (var b = 0; b < books.length; b++) {
      for (var i = 0; i < books[b].length; i++) {
        var w = books[b][i];
        if ((w.en || "").toLowerCase() === lower) return w;
      }
    }
    for (var l = 0; l < levelNames.length; l++) {
      var list = BASIC_LEVEL_BOOKS[levelNames[l]];
      if (!list) continue;
      for (var i = 0; i < list.length; i++) {
        var w = list[i];
        if ((w.en || "").toLowerCase() === lower) return w;
      }
    }
    return null;
  }

  function isMobileOrTablet() {
    return ("ontouchstart" in window) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) || (window.innerWidth <= 768);
  }
  document.getElementById("btnSearch").onclick = function() {
    document.getElementById("searchResult").innerHTML = "";
    document.getElementById("searchInput").value = "";
    document.getElementById("modalSearch").classList.remove("hide");
    if (isMobileOrTablet()) {
      setTimeout(function() {
        var el = document.getElementById("searchInput");
        if (el) { el.focus(); }
      }, 150);
    }
  };
  document.getElementById("modalSearchClose").onclick = function() { document.getElementById("modalSearch").classList.add("hide"); };

  var lastTranslationText = "";
  function doTranslate() {
    var input = (document.getElementById("searchInput").value || "").trim();
    var resultEl = document.getElementById("searchResult");
    if (!input) { resultEl.textContent = ""; lastTranslationText = ""; return; }
    resultEl.innerHTML = "<span style='color:var(--text-muted)'>翻译中…</span>";
    var langpair = hasChinese(input) ? "zh-CN|en" : "en|zh-CN";
    var url = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(input) + "&langpair=" + langpair;
    fetch(url)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var text = (data.responseData && data.responseData.translatedText) ? data.responseData.translatedText.trim() : "";
        if (!text) { resultEl.textContent = "未获取到翻译结果，请重试。"; lastTranslationText = ""; return; }
        if (isMostlyEnglish(text)) {
          text = normalizeTranslationText(text);
          lastTranslationText = text;
          resultEl.innerHTML = renderResultWithClickableWords(text);
        } else {
          text = text.trim().replace(/\s+/g, " ");
          lastTranslationText = text;
          resultEl.innerHTML = text.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;");
        }
      })
      .catch(function(err) {
        resultEl.textContent = "请求失败，请检查网络后重试。";
        lastTranslationText = "";
      });
  }
  document.getElementById("btnReadTranslation").onclick = function() {
    if (!lastTranslationText) return;
    if (hasChinese(lastTranslationText)) {
      if (!window.speechSynthesis) return;
      initSpeechVoices();
      speechSynthesis.cancel();
      if (typeof speechSynthesis.resume === "function") speechSynthesis.resume();
      var u = new SpeechSynthesisUtterance(lastTranslationText);
      u.lang = "zh-CN";
      u.rate = 0.92;
      var voices = speechSynthesis.getVoices();
      for (var i = 0; i < voices.length; i++) { if (voices[i].lang.indexOf("zh-CN") >= 0) { u.voice = voices[i]; break; } }
      speechSynthesis.speak(u);
    } else {
      speakWord(lastTranslationText);
    }
  };

  var translateDebounceTimer = null;
  document.getElementById("searchInput").addEventListener("input", function() {
    if (translateDebounceTimer) clearTimeout(translateDebounceTimer);
    var inputEl = document.getElementById("searchInput");
    var input = (inputEl.value || "").trim();
    if (!input) { document.getElementById("searchResult").textContent = ""; return; }
    translateDebounceTimer = setTimeout(function() {
      translateDebounceTimer = null;
      var val = (inputEl.value || "").trim();
      if (val === "080712") {
        setNum(KEY.coins, getNum(KEY.coins) + 999999);
        inputEl.value = "";
        document.getElementById("searchResult").innerHTML = "";
        refreshHeader();
        return;
      }
      doTranslate();
    }, 400);
  });
  document.getElementById("searchInput").addEventListener("keyup", function() {
    if ((document.getElementById("searchInput").value || "").trim() === "") document.getElementById("searchResult").textContent = "";
  });

  function fetchPhoneticForWord(word, phoneticEl) {
    if (!word || !phoneticEl) return;
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(word.toLowerCase());
    fetch(url).then(function(r) { return r.json(); }).then(function(data) {
      var text = "";
      if (Array.isArray(data) && data[0] && data[0].phonetics && data[0].phonetics.length) {
        for (var i = 0; i < data[0].phonetics.length; i++) {
          if (data[0].phonetics[i].text) { text = data[0].phonetics[i].text; break; }
        }
      }
      phoneticEl.textContent = text ? (text.indexOf("/") === 0 ? text : "/" + text + "/") : "—";
    }).catch(function() { phoneticEl.textContent = "—"; });
  }

  document.getElementById("searchResult").addEventListener("click", function(e) {
    var t = e.target;
    if (!t.classList || !t.classList.contains("word-clickable")) return;
    var word = t.getAttribute("data-word");
    if (!word) return;
    var found = findWordInBooks(word);
    var phoneticEl = document.getElementById("letterCardPhonetic");
    var cnEl = document.getElementById("letterCardCn");
    document.getElementById("letterCardEn").textContent = word;
    var hasPhonetic = found && found.phonetic && String(found.phonetic).trim();
    phoneticEl.textContent = hasPhonetic ? (found.phonetic.indexOf("/") === 0 ? found.phonetic : "/" + found.phonetic + "/") : "加载中…";
    cnEl.textContent = found ? (found.cn || "") : "加载中…";
    document.getElementById("modalLetterCard").classList.remove("hide");
    if (!hasPhonetic) fetchPhoneticForWord(word, phoneticEl);
    if (!found) {
      var url = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(word) + "&langpair=en|zh-CN";
      fetch(url).then(function(r) { return r.json(); }).then(function(data) {
        var cn = (data.responseData && data.responseData.translatedText) ? data.responseData.translatedText.trim() : "";
        cnEl.textContent = cn || "—";
      }).catch(function() { cnEl.textContent = "—"; });
    }
  });

  document.getElementById("modalLetterCardClose").onclick = function() { document.getElementById("modalLetterCard").classList.add("hide"); };
  bindSpeakWithTouch(document.getElementById("letterCardEn"), function() { return document.getElementById("letterCardEn").textContent; });
  document.getElementById("btnLetterCardKnown").onclick = function() {
    var en = (document.getElementById("letterCardEn").textContent || "").trim();
    var cn = (document.getElementById("letterCardCn").textContent || "").trim();
    var phonetic = (document.getElementById("letterCardPhonetic").textContent || "").trim();
    if (en && en !== "—") {
      addToLearned({ en: en, cn: cn === "—" || cn === "加载中…" ? "" : cn, phonetic: phonetic === "—" ? "" : phonetic });
      document.getElementById("modalLetterCard").classList.add("hide");
    }
  };

  // 离开页面前保存学习时间并同步到服务器（多设备实时一致）
  window.addEventListener("beforeunload", function() {
    stopStudyTimer();
    syncToAccount();
    if (SYNC_API_URL) {
      syncToServer();
      var acc = getAccount();
      if (acc.username && acc.password) {
        var body = JSON.stringify({ username: acc.username, password: acc.password, data: buildUserData() });
        navigator.sendBeacon(SYNC_API_URL + "/sync", new Blob([body], { type: "application/json" }));
      }
    }
  });

  refreshHeader();
  setInterval(refreshHeader, 1000);
  initSpeechVoices();
  setTimeout(initSpeechVoices, 500);

  // 每秒推送：今日学习时间、连续签到、签到状态、已学单词、词汇等级等主页数据实时同步到云端
  setInterval(function() {
    var acc = getAccount();
    if (!acc || !acc.username || !SYNC_API_URL) return;
    syncToAccount();
    syncToServer();
  }, 1000);

  // 每 3 秒从云端拉取一次，以便多设备/多标签页看到对方的最新数据
  setInterval(function() {
    var acc = getAccount();
    if (!acc || !acc.username || !SYNC_API_URL) return;
    syncFromServer(function() {});
  }, 3000);
})();
