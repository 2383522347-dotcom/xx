// 26国集训一轮单词 (100词)
const WORD_BOOK_26 = [
  { en: "Station", phonetic: "/ˈsteɪʃ(ə)n/", cn: "操作站" },
  { en: "Handling station", phonetic: "/ˈhændlɪŋ/", cn: "操作手站/搬运站" },
  { en: "Sensor", phonetic: "/ˈsensə(r)/", cn: "传感器" },
  { en: "Transducer", phonetic: "/trænsˈdjuːsə(r)/", cn: "传感器 (能量转换)" },
  { en: "Actuator", phonetic: "/ˈæktʃʊeɪtə(r)/", cn: "执行器 (驱动制动器)" },
  { en: "Cylinder", phonetic: "/ˈsɪlɪndə(r)/", cn: "气缸" },
  { en: "Valve", phonetic: "/vælv/", cn: "阀门" },
  { en: "Motor", phonetic: "/ˈməʊtə(r)/", cn: "马达/电机" },
  { en: "Conveyor", phonetic: "/kənˈveɪə(r)/", cn: "传送带" },
  { en: "Gripper", phonetic: "/ˈɡrɪpə(r)/", cn: "夹爪" },
  { en: "System", phonetic: "/ˈsɪstəm/", cn: "系统" },
  { en: "Control system", phonetic: "/kənˈtrəʊl/", cn: "控制系统" },
  { en: "PLC (Programmable Logic Controller)", phonetic: "", cn: "可编程逻辑控制器" },
  { en: "HMI (Human Machine Interface)", phonetic: "", cn: "人机界面" },
  { en: "Module", phonetic: "", cn: "模块" },
  { en: "Component", phonetic: "/kəmˈpəʊnənt/", cn: "元器件" },
  { en: "Cable", phonetic: "/ˈkeɪb(ə)l/", cn: "线缆" },
  { en: "Wire", phonetic: "/ˈwaɪə(r)/", cn: "电线/布线" },
  { en: "Terminal", phonetic: "/ˈtɜːmɪn(ə)l/", cn: "终端" },
  { en: "I/O (Input / Output)", phonetic: "", cn: "输入/输出" },
  { en: "Signal", phonetic: "/ˈsɪɡnəl/", cn: "信号" },
  { en: "Input signal", phonetic: "", cn: "输入信号" },
  { en: "Output signal", phonetic: "", cn: "输出信号" },
  { en: "Digital", phonetic: "/ˈdɪdʒɪt(ə)l/", cn: "数字的" },
  { en: "Analog", phonetic: "/ˈænəlɒɡ/", cn: "模拟的" },
  { en: "Program", phonetic: "", cn: "编程" },
  { en: "Assemble", phonetic: "/əˈsemb(ə)l/", cn: "组装" },
  { en: "Commission / Debug", phonetic: "/kəˈmɪʃ(ə)n/ /ˌdiːˈbʌɡ/", cn: "调试" },
  { en: "Calibrate", phonetic: "/ˈkælɪbreɪt/", cn: "校准" },
  { en: "Adjust", phonetic: "/əˈdʒʌst/", cn: "调节/调校" },
  { en: "Optimize", phonetic: "/ˈɒptɪmaɪz/", cn: "优化" },
  { en: "Maintain", phonetic: "/meɪnˈteɪn/", cn: "维护" },
  { en: "Start", phonetic: "", cn: "开始" },
  { en: "Stop", phonetic: "", cn: "停止" },
  { en: "Reset", phonetic: "", cn: "复位" },
  { en: "Position", phonetic: "", cn: "位置" },
  { en: "Speed", phonetic: "", cn: "速度" },
  { en: "Current", phonetic: "/ˈkʌrənt/", cn: "电流" },
  { en: "Voltage", phonetic: "/ˈvəʊltɪdʒ/", cn: "电压" },
  { en: "Power", phonetic: "/ˈpaʊə(r)/", cn: "电源" },
  { en: "Circuit", phonetic: "/ˈsɜːkɪt/", cn: "电路" },
  { en: "Layout", phonetic: "/ˈleɪaʊt/", cn: "布局" },
  { en: "Field", phonetic: "/fiːld/", cn: "领域/区域" },
  { en: "Function", phonetic: "/ˈfʌŋkʃ(ə)n/", cn: "功能" },
  { en: "Production", phonetic: "/prəˈdʌkʃ(ə)n/", cn: "产品/生产" },
  { en: "Production line", phonetic: "", cn: "生产线" },
  { en: "Microcontroller", phonetic: "/ˌmaɪkrəʊkənˈtrəʊlə(r)/", cn: "微控制器" },
  { en: "Microprocessor", phonetic: "/ˌmaɪkrəʊˈprəʊsesə(r)/", cn: "微处理器" },
  { en: "Drive", phonetic: "/draɪv/", cn: "驱动" },
  { en: "Electrical drive", phonetic: "/ɪˈlektrɪk(ə)l/", cn: "电机驱动" },
  { en: "Pneumatic", phonetic: "/njuːˈmætɪk/", cn: "气动的" },
  { en: "Hydraulic", phonetic: "/haɪˈdrɒlɪk/", cn: "液压的" },
  { en: "Vacuum", phonetic: "/ˈvækjuːm/", cn: "真空" },
  { en: "Air flow", phonetic: "", cn: "气流" },
  { en: "Pressure", phonetic: "/ˈpreʃə(r)/", cn: "压力" },
  { en: "Lamp", phonetic: "", cn: "灯" },
  { en: "Signal lamp / column", phonetic: "/ˈsɪɡnəl/ /ˈkɒləm/", cn: "信号灯/信号灯柱" },
  { en: "Button", phonetic: "", cn: "按钮" },
  { en: "Switch", phonetic: "", cn: "开关" },
  { en: "Touch panel", phonetic: "/ˈpæn(ə)l/", cn: "触摸屏" },
  { en: "Screw", phonetic: "/skruː/", cn: "螺丝" },
  { en: "Axis", phonetic: "/ˈæksɪs/", cn: "轴" },
  { en: "Linear axis", phonetic: "", cn: "横轴/线性轴" },
  { en: "Vertical axis", phonetic: "", cn: "竖轴" },
  { en: "Encoder", phonetic: "", cn: "编码器" },
  { en: "Amplifier", phonetic: "", cn: "放大器" },
  { en: "Connector", phonetic: "", cn: "连接器" },
  { en: "Magazine", phonetic: "", cn: "料仓" },
  { en: "Storage", phonetic: "", cn: "存储/仓储站" },
  { en: "Workpiece", phonetic: "", cn: "工件" },
  { en: "Measuring / Measure", phonetic: "", cn: "测量/检测" },
  { en: "Balance cell", phonetic: "", cn: "检测器" },
  { en: "Simulation (SimuBox)", phonetic: "", cn: "仿真 (仿真盒)" },
  { en: "Design", phonetic: "", cn: "设计" },
  { en: "Troubleshoot", phonetic: "", cn: "故障排除" },
  { en: "Retract", phonetic: "", cn: "缩回" },
  { en: "Extend", phonetic: "", cn: "伸出" },
  { en: "Eject", phonetic: "", cn: "喷射/推出" },
  { en: "Pick & Place", phonetic: "", cn: "提取放置" },
  { en: "Sorting / Separating", phonetic: "", cn: "分拣/分离" },
  { en: "Drilling", phonetic: "", cn: "钻孔/加工" },
  { en: "Polishing", phonetic: "", cn: "抛光" },
  { en: "Bottling / Filling", phonetic: "", cn: "填充/灌装" },
  { en: "Packaging", phonetic: "", cn: "包装（工作站功能）" },
  { en: "Joining", phonetic: "", cn: "接合（工作站功能：压盖）" },
  { en: "Robot / Robotic arm", phonetic: "", cn: "机器人/机械臂" },
  { en: "Stepper motor", phonetic: "", cn: "步进电机" },
  { en: "Servo motor", phonetic: "", cn: "伺服电机" },
  { en: "Inductive (sensor)", phonetic: "", cn: "电感式 (传感器)" },
  { en: "Optical (sensor) / Fiber", phonetic: "", cn: "光学 (传感器) / 光纤" },
  { en: "Capacitive (sensor)", phonetic: "", cn: "电容式 (传感器)" },
  { en: "Proximity (sensor)", phonetic: "", cn: "接近 (传感器)" },
  { en: "Timer", phonetic: "", cn: "定时器" },
  { en: "Counter", phonetic: "", cn: "计数器" },
  { en: "Interrupt", phonetic: "", cn: "中断" },
  { en: "Communication", phonetic: "", cn: "通信/通讯" },
  { en: "Network", phonetic: "", cn: "网络" },
  { en: "Interface / interfacing", phonetic: "", cn: "接口/系统互连" },
  { en: "Datasheet", phonetic: "", cn: "数据表" },
  { en: "Mechatronics", phonetic: "", cn: "机电一体化" }
];

// 基础操作词汇 (50词)
const WORD_BOOK_BASIC = [
  { en: "Yes", phonetic: "", cn: "是" },
  { en: "No", phonetic: "", cn: "否" },
  { en: "Start", phonetic: "", cn: "开始" },
  { en: "Stop", phonetic: "", cn: "停止" },
  { en: "Reset", phonetic: "", cn: "复位" },
  { en: "Ready", phonetic: "", cn: "准备好" },
  { en: "Go", phonetic: "", cn: "进行/走" },
  { en: "Wait", phonetic: "", cn: "等待" },
  { en: "Open", phonetic: "", cn: "打开 (机械)" },
  { en: "Close", phonetic: "", cn: "关闭 (机械)" },
  { en: "Turn on", phonetic: "", cn: "打开 (电器)" },
  { en: "Turn off", phonetic: "", cn: "关闭 (电器)" },
  { en: "Put in", phonetic: "", cn: "放入" },
  { en: "Take out", phonetic: "", cn: "取出" },
  { en: "Up / Upwards", phonetic: "", cn: "向上" },
  { en: "Down / Downwards", phonetic: "", cn: "向下" },
  { en: "Left", phonetic: "", cn: "左" },
  { en: "Right", phonetic: "", cn: "右" },
  { en: "Forward", phonetic: "", cn: "前/前进" },
  { en: "Back / Backward", phonetic: "", cn: "后/后退" },
  { en: "Fast", phonetic: "", cn: "快" },
  { en: "Slow", phonetic: "", cn: "慢" },
  { en: "High", phonetic: "", cn: "高" },
  { en: "Low", phonetic: "", cn: "低" },
  { en: "On", phonetic: "", cn: "开/在上" },
  { en: "Off", phonetic: "", cn: "关/脱离" },
  { en: "Good", phonetic: "", cn: "好" },
  { en: "Bad / Error", phonetic: "", cn: "坏/错误" },
  { en: "Alarm", phonetic: "", cn: "报警" },
  { en: "Clear", phonetic: "", cn: "清除" },
  { en: "Check", phonetic: "", cn: "检查" },
  { en: "Test", phonetic: "", cn: "测试" },
  { en: "OK", phonetic: "", cn: "正常/完成" },
  { en: "Finish / Complete", phonetic: "", cn: "完成" },
  { en: "Pause", phonetic: "", cn: "暂停" },
  { en: "Continue", phonetic: "", cn: "继续" },
  { en: "Auto / Automatic", phonetic: "", cn: "自动" },
  { en: "Manual", phonetic: "", cn: "手动" },
  { en: "Mode", phonetic: "", cn: "模式" },
  { en: "Step", phonetic: "", cn: "步/步骤" },
  { en: "Time", phonetic: "", cn: "时间" },
  { en: "Second (s)", phonetic: "", cn: "秒" },
  { en: "Delay", phonetic: "", cn: "延时" },
  { en: "Press (the button)", phonetic: "", cn: "按 (按钮)" },
  { en: "Push", phonetic: "", cn: "推" },
  { en: "Pull", phonetic: "", cn: "拉" },
  { en: "Move", phonetic: "", cn: "移动" },
  { en: "Hold", phonetic: "", cn: "保持/夹持" },
  { en: "Release", phonetic: "", cn: "松开/释放" },
  { en: "Display", phonetic: "", cn: "显示" }
];

// 情景对话：每组 { prompt: 中文/场景, answers: [可接受的英文], suggest: 更好表达 }
const SCENARIO_DIALOGUES = {
  multimeter: {
    name: "21、中国队万用表说明文件 (CN multimeter)",
    items: [
      { prompt: "福禄克万用表如果在1分钟内没有操作，会自动关机。请用英文说明。", answers: ["Our Fluke multimeter will shut down automatically if no operation in 1 min.", "The Fluke multimeter will turn off automatically if there is no operation within one minute.", "If there is no operation in 1 minute, the Fluke multimeter will shut down automatically."], suggest: "Our Fluke multimeter will shut down automatically if there is no operation within one minute." },
      { prompt: "中国选手将选择万用表到需要测量数据的挡位。", answers: ["CN competitor would like to shift the multimeter to position which need to measure.", "The Chinese competitor will select the multimeter to the range needed for measurement.", "CN competitor will shift the multimeter to the position that needs to be measured."], suggest: "The CN competitor will shift the multimeter to the range required for the measurement." },
      { prompt: "请旋转挡位到OFF，再旋转回原来位置（直流电压）。", answers: ["Please switch the key to OFF and shift back to same position (DC).", "Please turn the dial to OFF, then turn it back to the original position (DC voltage).", "Please switch to OFF and then back to the same position (DC)."], suggest: "Please switch the dial to OFF and then turn it back to the original position (DC voltage)." }
    ]
  },
  competition: {
    name: "22、竞赛句型",
    items: [
      { prompt: "我需要帮助！（I need help）", answers: ["I need help!", "I need help."], suggest: "I need help!" },
      { prompt: "时间裁判！我遇到了问题。", answers: ["Timekeeper! I get some problem.", "Timekeeper! I have a problem.", "Timekeeper! I've got a problem."], suggest: "Timekeeper! I have a problem." },
      { prompt: "技术支撑！我需要耗材。", answers: ["Technical support! I need consumables.", "Technical support! I need some consumables."], suggest: "Technical support! I need consumables." },
      { prompt: "我想要这个。", answers: ["I want this.", "I would like this."], suggest: "I would like this." },
      { prompt: "我需要中文翻译。", answers: ["I need Chinese interpreter.", "I need a Chinese interpreter."], suggest: "I need a Chinese interpreter." },
      { prompt: "我们需要整套的M3固定块，包括螺丝和T型螺母。", answers: ["We need whole set of M3 cable holder, including screw and T-nut.", "We need a whole set of M3 cable holders, including screws and T-nuts."], suggest: "We need a whole set of M3 cable holders, including screws and T-nuts." },
      { prompt: "这个设备（部件）损坏了，我们需要一个技术暂停。", answers: ["This device (component) is broken, we want a technical time-out.", "This device is broken; we need a technical time-out."], suggest: "This device (component) is broken; we need a technical time-out." },
      { prompt: "关闭电源和气源。", answers: ["Turn off power supply and air source.", "Turn off the power supply and air source."], suggest: "Turn off the power supply and air source." },
      { prompt: "准备好你的工件。", answers: ["Prepare your WP.", "Prepare your workpiece.", "Get your workpiece ready."], suggest: "Prepare your workpiece." }
    ]
  },
  greeting: {
    name: "23、问候与告别",
    items: [
      { prompt: "早上好！", answers: ["Good morning!", "Good morning."], suggest: "Good morning!" },
      { prompt: "下午好！", answers: ["Good afternoon!", "Good afternoon."], suggest: "Good afternoon!" },
      { prompt: "晚上好！", answers: ["Good evening!", "Good evening."], suggest: "Good evening!" },
      { prompt: "你好，你好吗？", answers: ["Hello, how are you?", "Hi, how are you?"], suggest: "Hello, how are you?" },
      { prompt: "再见！", answers: ["Goodbye!", "Bye-bye!", "Bye!"], suggest: "Goodbye!" }
    ]
  },
  thanks: {
    name: "23、感谢与表扬",
    items: [
      { prompt: "非常感谢你！", answers: ["Thank you very much!", "Thanks a lot!", "Thank you so much."], suggest: "Thank you very much!" },
      { prompt: "不客气。", answers: ["You are welcome!", "You're welcome.", "Welcome."], suggest: "You're welcome!" },
      { prompt: "太棒了！", answers: ["It's awesome!", "It's awsome!", "That's awesome!"], suggest: "It's awesome!" },
      { prompt: "你真聪明！", answers: ["You are clever!", "You're clever!", "You are smart!"], suggest: "You're very clever!" }
    ]
  },
  apology: {
    name: "23、道歉与请求",
    items: [
      { prompt: "对不起。", answers: ["I'm sorry.", "I am sorry.", "Sorry."], suggest: "I'm sorry." },
      { prompt: "打扰一下。", answers: ["Excuse me.", "Pardon me."], suggest: "Excuse me." },
      { prompt: "请问你能帮我吗？", answers: ["Can you help me, please?", "Could you help me, please?", "Can you help me?"], suggest: "Could you help me, please?" },
      { prompt: "请你再说一遍好吗？", answers: ["Could you please repeat that?", "Can you repeat that, please?"], suggest: "Could you please repeat that?" }
    ]
  },
  question: {
    name: "23、询问与回答",
    items: [
      { prompt: "你叫什么名字？", answers: ["What's your name?", "What is your name?"], suggest: "What's your name?" },
      { prompt: "你来自哪里？", answers: ["Where are you from?", "Where do you come from?"], suggest: "Where are you from?" },
      { prompt: "你多大了？", answers: ["How old are you?", "What is your age?"], suggest: "How old are you?" },
      { prompt: "你任务A做得怎么样？", answers: ["How is your Task A?", "How did your Task A go?"], suggest: "How is your Task A going?" }
    ]
  },
  suggestion: {
    name: "23、建议与邀请",
    items: [
      { prompt: "明天打电话给我。", answers: ["Call me tomorrow.", "Give me a call tomorrow."], suggest: "Call me tomorrow." },
      { prompt: "我们去吃饭吧。", answers: ["Let's go for meal.", "Let's go for a meal.", "Let's get something to eat."], suggest: "Let's go for a meal." },
      { prompt: "你想和我一起吗？", answers: ["Would you like to join me?", "Do you want to join me?"], suggest: "Would you like to join me?" }
    ]
  },
  feeling: {
    name: "23、表达情感与状态",
    items: [
      { prompt: "我很好，谢谢。", answers: ["I'm fine, thank you.", "I am fine, thanks."], suggest: "I'm fine, thank you." },
      { prompt: "对不起，我迟到了。", answers: ["I'm sorry for being late.", "I am sorry I'm late."], suggest: "I'm sorry for being late." },
      { prompt: "今天我真的很累。", answers: ["I'm really tired today.", "I am really tired today."], suggest: "I'm really tired today." },
      { prompt: "我感觉好多了。", answers: ["I feel much better.", "I feel better now."], suggest: "I feel much better." }
    ]
  },
  daily: {
    name: "23、日常交流",
    items: [
      { prompt: "明天见。", answers: ["See you tomorrow.", "See you tomorrow!"], suggest: "See you tomorrow!" },
      { prompt: "恭喜你的成功！", answers: ["Congratulations on your success!", "Congratulations!"], suggest: "Congratulations on your success!" },
      { prompt: "你最喜欢的食物是什么？", answers: ["What's your favorite food?", "What is your favorite food?"], suggest: "What's your favorite food?" },
      { prompt: "没关系。", answers: ["It doesn't matter.", "Never mind.", "That's OK."], suggest: "It doesn't matter." }
    ]
  },
  need: {
    name: "23、基本需求",
    items: [
      { prompt: "最近的卫生间在哪里？", answers: ["Where is the nearest restroom?", "Where is the toilet?", "Where can I find the restroom?"], suggest: "Where is the nearest restroom?" },
      { prompt: "请你借我一支笔好吗？", answers: ["Could you lend me a pen, please?", "Can you lend me a pen?"], suggest: "Could you lend me a pen, please?" }
    ]
  },
  opinion: {
    name: "23、观点与态度",
    items: [
      { prompt: "我认为不是。", answers: ["I don't think so.", "I do not think so."], suggest: "I don't think so." },
      { prompt: "我简直不能相信。", answers: ["I can't believe it.", "I cannot believe it."], suggest: "I can't believe it." },
      { prompt: "很容易。", answers: ["It's easy.", "It is easy."], suggest: "It's easy." }
    ]
  },
  workshop: {
    name: "车间/赛场常用",
    items: [
      { prompt: "请把传感器校准一下。", answers: ["Please calibrate the sensor.", "Could you calibrate the sensor?"], suggest: "Please calibrate the sensor." },
      { prompt: "电机过载了。", answers: ["The motor is overloaded.", "Motor overload."], suggest: "The motor is overloaded." },
      { prompt: "检查一下接线。", answers: ["Check the wiring.", "Please check the cables.", "Check the connection."], suggest: "Please check the wiring." },
      { prompt: "切换到手动模式。", answers: ["Switch to manual mode.", "Change to manual mode."], suggest: "Switch to manual mode." },
      { prompt: "气压不足。", answers: ["Air pressure is low.", "Insufficient air pressure."], suggest: "The air pressure is insufficient." }
    ]
  }
};

// 词汇量等级 (用于检测与推荐)
const VOCAB_LEVELS = ["小学", "初中", "高中", "大学", "出国", "雅思", "托福", "哈佛"];

// 基础单词分级词库：小学/初中/高中/大学/出国/雅思/托福/哈佛
const WORD_BOOK_PRIMARY = [
  { en: "apple", phonetic: "/ˈæpl/", cn: "苹果" }, { en: "book", phonetic: "/bʊk/", cn: "书" },
  { en: "cat", phonetic: "/kæt/", cn: "猫" }, { en: "dog", phonetic: "/dɒɡ/", cn: "狗" },
  { en: "hello", phonetic: "/həˈləʊ/", cn: "你好" }, { en: "teacher", phonetic: "/ˈtiːtʃə(r)/", cn: "老师" },
  { en: "school", phonetic: "/skuːl/", cn: "学校" }, { en: "friend", phonetic: "/frend/", cn: "朋友" },
  { en: "family", phonetic: "/ˈfæməli/", cn: "家庭" }, { en: "mother", phonetic: "/ˈmʌðə(r)/", cn: "妈妈" },
  { en: "father", phonetic: "/ˈfɑːðə(r)/", cn: "爸爸" }, { en: "water", phonetic: "/ˈwɔːtə(r)/", cn: "水" },
  { en: "colour", phonetic: "/ˈkʌlə(r)/", cn: "颜色" }, { en: "number", phonetic: "/ˈnʌmbə(r)/", cn: "数字" },
  { en: "happy", phonetic: "/ˈhæpi/", cn: "高兴的" }, { en: "big", phonetic: "/bɪɡ/", cn: "大的" },
  { en: "small", phonetic: "/smɔːl/", cn: "小的" }, { en: "red", phonetic: "/red/", cn: "红色的" },
  { en: "blue", phonetic: "/bluː/", cn: "蓝色的" }, { en: "yellow", phonetic: "/ˈjeləʊ/", cn: "黄色的" },
  { en: "one", phonetic: "/wʌn/", cn: "一" }, { en: "two", phonetic: "/tuː/", cn: "二" },
  { en: "three", phonetic: "/θriː/", cn: "三" }, { en: "ball", phonetic: "/bɔːl/", cn: "球" },
  { en: "desk", phonetic: "/desk/", cn: "课桌" }, { en: "chair", phonetic: "/tʃeə(r)/", cn: "椅子" },
  { en: "pen", phonetic: "/pen/", cn: "钢笔" }, { en: "bag", phonetic: "/bæɡ/", cn: "包" },
  { en: "run", phonetic: "/rʌn/", cn: "跑" }, { en: "jump", phonetic: "/dʒʌmp/", cn: "跳" },
  { en: "eat", phonetic: "/iːt/", cn: "吃" }, { en: "drink", phonetic: "/drɪŋk/", cn: "喝" }
];

const WORD_BOOK_JUNIOR = [
  { en: "accept", phonetic: "/əkˈsept/", cn: "接受" }, { en: "achieve", phonetic: "/əˈtʃiːv/", cn: "达到；完成" },
  { en: "address", phonetic: "/əˈdres/", cn: "地址；演说" }, { en: "allow", phonetic: "/əˈlaʊ/", cn: "允许" },
  { en: "alone", phonetic: "/əˈləʊn/", cn: "独自" }, { en: "already", phonetic: "/ɔːlˈredi/", cn: "已经" },
  { en: "although", phonetic: "/ɔːlˈðəʊ/", cn: "虽然" }, { en: "among", phonetic: "/əˈmʌŋ/", cn: "在…之中" },
  { en: "amount", phonetic: "/əˈmaʊnt/", cn: "数量" }, { en: "ancient", phonetic: "/ˈeɪnʃənt/", cn: "古代的" },
  { en: "answer", phonetic: "/ˈɑːnsə(r)/", cn: "回答" }, { en: "anyone", phonetic: "/ˈeniwʌn/", cn: "任何人" },
  { en: "apartment", phonetic: "/əˈpɑːtmənt/", cn: "公寓" }, { en: "appear", phonetic: "/əˈpɪə(r)/", cn: "出现" },
  { en: "area", phonetic: "/ˈeəriə/", cn: "地区；面积" }, { en: "argue", phonetic: "/ˈɑːɡjuː/", cn: "争论" },
  { en: "arrive", phonetic: "/əˈraɪv/", cn: "到达" }, { en: "article", phonetic: "/ˈɑːtɪkl/", cn: "文章" },
  { en: "audience", phonetic: "/ˈɔːdiəns/", cn: "观众" }, { en: "avoid", phonetic: "/əˈvɔɪd/", cn: "避免" },
  { en: "basic", phonetic: "/ˈbeɪsɪk/", cn: "基本的" }, { en: "beat", phonetic: "/biːt/", cn: "打败；敲打" },
  { en: "behaviour", phonetic: "/bɪˈheɪvjə(r)/", cn: "行为" }, { en: "believe", phonetic: "/bɪˈliːv/", cn: "相信" },
  { en: "beyond", phonetic: "/bɪˈjɒnd/", cn: "超过" }, { en: "boring", phonetic: "/ˈbɔːrɪŋ/", cn: "无聊的" },
  { en: "borrow", phonetic: "/ˈbɒrəʊ/", cn: "借" }, { en: "brain", phonetic: "/breɪn/", cn: "大脑" },
  { en: "branch", phonetic: "/brɑːntʃ/", cn: "分支；树枝" }, { en: "break", phonetic: "/breɪk/", cn: "打破" },
  { en: "bridge", phonetic: "/brɪdʒ/", cn: "桥" }, { en: "bright", phonetic: "/braɪt/", cn: "明亮的" },
  { en: "broadcast", phonetic: "/ˈbrɔːdkɑːst/", cn: "广播" }, { en: "building", phonetic: "/ˈbɪldɪŋ/", cn: "建筑物" },
  { en: "business", phonetic: "/ˈbɪznəs/", cn: "生意；商业" }, { en: "calendar", phonetic: "/ˈkælɪndə(r)/", cn: "日历" },
  { en: "camera", phonetic: "/ˈkæmərə/", cn: "相机" }, { en: "cancel", phonetic: "/ˈkænsl/", cn: "取消" },
  { en: "capital", phonetic: "/ˈkæpɪtl/", cn: "首都；资本" }, { en: "career", phonetic: "/kəˈrɪə(r)/", cn: "职业" },
  { en: "cause", phonetic: "/kɔːz/", cn: "原因；导致" }, { en: "celebrate", phonetic: "/ˈselɪbreɪt/", cn: "庆祝" }
];

const WORD_BOOK_SENIOR = [
  { en: "abandon", phonetic: "/əˈbændən/", cn: "放弃" }, { en: "ability", phonetic: "/əˈbɪləti/", cn: "能力" },
  { en: "abroad", phonetic: "/əˈbrɔːd/", cn: "在国外" }, { en: "absorb", phonetic: "/əbˈzɔːb/", cn: "吸收" },
  { en: "abstract", phonetic: "/ˈæbstrækt/", cn: "抽象的" }, { en: "academic", phonetic: "/ˌækəˈdemɪk/", cn: "学术的" },
  { en: "access", phonetic: "/ˈækses/", cn: "接近；通道" }, { en: "accident", phonetic: "/ˈæksɪdənt/", cn: "事故" },
  { en: "accompany", phonetic: "/əˈkʌmpəni/", cn: "陪伴" }, { en: "account", phonetic: "/əˈkaʊnt/", cn: "账户；叙述" },
  { en: "accurate", phonetic: "/ˈækjərət/", cn: "准确的" }, { en: "accuse", phonetic: "/əˈkjuːz/", cn: "指责" },
  { en: "achieve", phonetic: "/əˈtʃiːv/", cn: "实现" }, { en: "acknowledge", phonetic: "/əkˈnɒlɪdʒ/", cn: "承认" },
  { en: "acquire", phonetic: "/əˈkwaɪə(r)/", cn: "获得" }, { en: "adapt", phonetic: "/əˈdæpt/", cn: "适应" },
  { en: "adequate", phonetic: "/ˈædɪkwət/", cn: "足够的" }, { en: "adjust", phonetic: "/əˈdʒʌst/", cn: "调整" },
  { en: "administration", phonetic: "/ədˌmɪnɪˈstreɪʃn/", cn: "管理；行政" }, { en: "admire", phonetic: "/ədˈmaɪə(r)/", cn: "钦佩" },
  { en: "admit", phonetic: "/ədˈmɪt/", cn: "承认" }, { en: "adopt", phonetic: "/əˈdɒpt/", cn: "采纳；收养" },
  { en: "advance", phonetic: "/ədˈvɑːns/", cn: "前进；提前" }, { en: "advantage", phonetic: "/ədˈvɑːntɪdʒ/", cn: "优势" },
  { en: "adventure", phonetic: "/ədˈventʃə(r)/", cn: "冒险" }, { en: "advertise", phonetic: "/ˈædvətaɪz/", cn: "做广告" },
  { en: "affect", phonetic: "/əˈfekt/", cn: "影响" }, { en: "afford", phonetic: "/əˈfɔːd/", cn: "负担得起" },
  { en: "agency", phonetic: "/ˈeɪdʒənsi/", cn: "机构" }, { en: "agenda", phonetic: "/əˈdʒendə/", cn: "议程" },
  { en: "agreement", phonetic: "/əˈɡriːmənt/", cn: "协议" }, { en: "agriculture", phonetic: "/ˈæɡrɪkʌltʃə(r)/", cn: "农业" },
  { en: "alarm", phonetic: "/əˈlɑːm/", cn: "警报" }, { en: "alcohol", phonetic: "/ˈælkəhɒl/", cn: "酒精" },
  { en: "alternative", phonetic: "/ɔːlˈtɜːnətɪv/", cn: "替代的" }, { en: "ambition", phonetic: "/æmˈbɪʃn/", cn: "雄心" },
  { en: "amount", phonetic: "/əˈmaʊnt/", cn: "数量" }, { en: "analyse", phonetic: "/ˈænəlaɪz/", cn: "分析" },
  { en: "ancient", phonetic: "/ˈeɪnʃənt/", cn: "古代的" }, { en: "announce", phonetic: "/əˈnaʊns/", cn: "宣布" },
  { en: "annual", phonetic: "/ˈænjuəl/", cn: "每年的" }, { en: "anxious", phonetic: "/ˈæŋkʃəs/", cn: "焦虑的" },
  { en: "apologize", phonetic: "/əˈpɒlədʒaɪz/", cn: "道歉" }, { en: "apparent", phonetic: "/əˈpærənt/", cn: "明显的" },
  { en: "appeal", phonetic: "/əˈpiːl/", cn: "呼吁；上诉" }, { en: "appointment", phonetic: "/əˈpɔɪntmənt/", cn: "约会；任命" },
  { en: "approach", phonetic: "/əˈprəʊtʃ/", cn: "方法；接近" }, { en: "appropriate", phonetic: "/əˈprəʊpriət/", cn: "适当的" },
  { en: "approve", phonetic: "/əˈpruːv/", cn: "批准" }, { en: "approximately", phonetic: "/əˈprɒksɪmətli/", cn: "大约" }
];

const WORD_BOOK_COLLEGE = [
  { en: "abstract", phonetic: "/ˈæbstrækt/", cn: "摘要；抽象的" }, { en: "academic", phonetic: "/ˌækəˈdemɪk/", cn: "学术的" },
  { en: "accommodation", phonetic: "/əˌkɒməˈdeɪʃn/", cn: "住宿" }, { en: "acknowledge", phonetic: "/əkˈnɒlɪdʒ/", cn: "承认" },
  { en: "acquire", phonetic: "/əˈkwaɪə(r)/", cn: "获得" }, { en: "adapt", phonetic: "/əˈdæpt/", cn: "适应" },
  { en: "adequate", phonetic: "/ˈædɪkwət/", cn: "足够的" }, { en: "adjust", phonetic: "/əˈdʒʌst/", cn: "调整" },
  { en: "administration", phonetic: "/ədˌmɪnɪˈstreɪʃn/", cn: "管理" }, { en: "advocate", phonetic: "/ˈædvəkeɪt/", cn: "提倡；拥护" },
  { en: "aesthetic", phonetic: "/iːsˈθetɪk/", cn: "审美的" }, { en: "affection", phonetic: "/əˈfekʃn/", cn: "喜爱" },
  { en: "aggregate", phonetic: "/ˈæɡrɪɡət/", cn: "总计；集合" }, { en: "allocate", phonetic: "/ˈæləkeɪt/", cn: "分配" },
  { en: "allowance", phonetic: "/əˈlaʊəns/", cn: "津贴" }, { en: "alter", phonetic: "/ˈɔːltə(r)/", cn: "改变" },
  { en: "alternative", phonetic: "/ɔːlˈtɜːnətɪv/", cn: "替代的" }, { en: "ambiguity", phonetic: "/ˌæmbɪˈɡjuːəti/", cn: "歧义" },
  { en: "amend", phonetic: "/əˈmend/", cn: "修正" }, { en: "analogy", phonetic: "/əˈnælədʒi/", cn: "类比" },
  { en: "analyse", phonetic: "/ˈænəlaɪz/", cn: "分析" }, { en: "anticipate", phonetic: "/ænˈtɪsɪpeɪt/", cn: "预期" },
  { en: "anxiety", phonetic: "/æŋˈzaɪəti/", cn: "焦虑" }, { en: "apology", phonetic: "/əˈpɒlədʒi/", cn: "道歉" },
  { en: "apparatus", phonetic: "/ˌæpəˈreɪtəs/", cn: "器械" }, { en: "apparent", phonetic: "/əˈpærənt/", cn: "明显的" },
  { en: "appeal", phonetic: "/əˈpiːl/", cn: "呼吁" }, { en: "appendix", phonetic: "/əˈpendɪks/", cn: "附录" },
  { en: "appreciate", phonetic: "/əˈpriːʃieɪt/", cn: "欣赏；感激" }, { en: "approach", phonetic: "/əˈprəʊtʃ/", cn: "方法" },
  { en: "appropriate", phonetic: "/əˈprəʊpriət/", cn: "适当的" }, { en: "approximate", phonetic: "/əˈprɒksɪmət/", cn: "近似的" },
  { en: "arbitrary", phonetic: "/ˈɑːbɪtrəri/", cn: "任意的" }, { en: "architecture", phonetic: "/ˈɑːkɪtektʃə(r)/", cn: "建筑" },
  { en: "argument", phonetic: "/ˈɑːɡjumənt/", cn: "论点" }, { en: "arise", phonetic: "/əˈraɪz/", cn: "出现" },
  { en: "aspect", phonetic: "/ˈæspekt/", cn: "方面" }, { en: "assess", phonetic: "/əˈses/", cn: "评估" },
  { en: "assign", phonetic: "/əˈsaɪn/", cn: "分配" }, { en: "assume", phonetic: "/əˈsjuːm/", cn: "假定" },
  { en: "assure", phonetic: "/əˈʃɔː(r)/", cn: "保证" }, { en: "atmosphere", phonetic: "/ˈætməsfɪə(r)/", cn: "大气" },
  { en: "attach", phonetic: "/əˈtætʃ/", cn: "附上" }, { en: "attain", phonetic: "/əˈteɪn/", cn: "达到" },
  { en: "attitude", phonetic: "/ˈætɪtjuːd/", cn: "态度" }, { en: "attribute", phonetic: "/əˈtrɪbjuːt/", cn: "归因于" },
  { en: "audience", phonetic: "/ˈɔːdiəns/", cn: "观众" }, { en: "authority", phonetic: "/ɔːˈθɒrəti/", cn: "权威" },
  { en: "automatic", phonetic: "/ˌɔːtəˈmætɪk/", cn: "自动的" }, { en: "available", phonetic: "/əˈveɪləbl/", cn: "可用的" }
];

const WORD_BOOK_ABROAD = [
  { en: "accommodation", phonetic: "/əˌkɒməˈdeɪʃn/", cn: "住宿" }, { en: "application", phonetic: "/ˌæplɪˈkeɪʃn/", cn: "申请" },
  { en: "arrival", phonetic: "/əˈraɪvl/", cn: "到达" }, { en: "boarding", phonetic: "/ˈbɔːdɪŋ/", cn: "登机" },
  { en: "brochure", phonetic: "/ˈbrəʊʃə(r)/", cn: "小册子" }, { en: "budget", phonetic: "/ˈbʌdʒɪt/", cn: "预算" },
  { en: "currency", phonetic: "/ˈkʌrənsi/", cn: "货币" }, { en: "customs", phonetic: "/ˈkʌstəmz/", cn: "海关" },
  { en: "departure", phonetic: "/dɪˈpɑːtʃə(r)/", cn: "出发" }, { en: "destination", phonetic: "/ˌdestɪˈneɪʃn/", cn: "目的地" },
  { en: "embassy", phonetic: "/ˈembəsi/", cn: "大使馆" }, { en: "exchange", phonetic: "/ɪksˈtʃeɪndʒ/", cn: "兑换" },
  { en: "expense", phonetic: "/ɪkˈspens/", cn: "费用" }, { en: "foreign", phonetic: "/ˈfɒrən/", cn: "外国的" },
  { en: "immigration", phonetic: "/ˌɪmɪˈɡreɪʃn/", cn: "入境" }, { en: "insurance", phonetic: "/ɪnˈʃɔːrəns/", cn: "保险" },
  { en: "itinerary", phonetic: "/aɪˈtɪnərəri/", cn: "行程" }, { en: "luggage", phonetic: "/ˈlʌɡɪdʒ/", cn: "行李" },
  { en: "passport", phonetic: "/ˈpɑːspɔːt/", cn: "护照" }, { en: "reservation", phonetic: "/ˌrezəˈveɪʃn/", cn: "预订" },
  { en: "schedule", phonetic: "/ˈʃedjuːl/", cn: "日程" }, { en: "souvenir", phonetic: "/ˌsuːvəˈnɪə(r)/", cn: "纪念品" },
  { en: "terminal", phonetic: "/ˈtɜːmɪnl/", cn: "航站楼" }, { en: "tourist", phonetic: "/ˈtʊərɪst/", cn: "游客" },
  { en: "transit", phonetic: "/ˈtrænzɪt/", cn: "过境" }, { en: "visa", phonetic: "/ˈviːzə/", cn: "签证" },
  { en: "withdraw", phonetic: "/wɪðˈdrɔː/", cn: "取款" }, { en: "abroad", phonetic: "/əˈbrɔːd/", cn: "在国外" },
  { en: "adventure", phonetic: "/ədˈventʃə(r)/", cn: "冒险" }, { en: "culture", phonetic: "/ˈkʌltʃə(r)/", cn: "文化" },
  { en: "experience", phonetic: "/ɪkˈspɪəriəns/", cn: "经历" }, { en: "explore", phonetic: "/ɪkˈsplɔː(r)/", cn: "探索" },
  { en: "international", phonetic: "/ˌɪntəˈnæʃnəl/", cn: "国际的" }, { en: "language", phonetic: "/ˈlæŋɡwɪdʒ/", cn: "语言" },
  { en: "local", phonetic: "/ˈləʊkl/", cn: "当地的" }, { en: "overseas", phonetic: "/ˌəʊvəˈsiːz/", cn: "海外的" },
  { en: "travel", phonetic: "/ˈtrævl/", cn: "旅行" }, { en: "trip", phonetic: "/trɪp/", cn: "旅行" }
];

const WORD_BOOK_IELTS = [
  { en: "analyse", phonetic: "/ˈænəlaɪz/", cn: "分析" }, { en: "argument", phonetic: "/ˈɑːɡjumənt/", cn: "论点" },
  { en: "assess", phonetic: "/əˈses/", cn: "评估" }, { en: "assumption", phonetic: "/əˈsʌmpʃn/", cn: "假设" },
  { en: "attitude", phonetic: "/ˈætɪtjuːd/", cn: "态度" }, { en: "audience", phonetic: "/ˈɔːdiəns/", cn: "观众" },
  { en: "authority", phonetic: "/ɔːˈθɒrəti/", cn: "权威" }, { en: "benefit", phonetic: "/ˈbenɪfɪt/", cn: "利益" },
  { en: "concept", phonetic: "/ˈkɒnsept/", cn: "概念" }, { en: "conclusion", phonetic: "/kənˈkluːʒn/", cn: "结论" },
  { en: "conduct", phonetic: "/kənˈdʌkt/", cn: "进行；行为" }, { en: "consensus", phonetic: "/kənˈsensəs/", cn: "共识" },
  { en: "context", phonetic: "/ˈkɒntekst/", cn: "语境" }, { en: "contribute", phonetic: "/kənˈtrɪbjuːt/", cn: "贡献" },
  { en: "convince", phonetic: "/kənˈvɪns/", cn: "说服" }, { en: "criteria", phonetic: "/kraɪˈtɪəriə/", cn: "标准" },
  { en: "demonstrate", phonetic: "/ˈdemənstreɪt/", cn: "证明" }, { en: "distinguish", phonetic: "/dɪˈstɪŋɡwɪʃ/", cn: "区分" },
  { en: "evidence", phonetic: "/ˈevɪdəns/", cn: "证据" }, { en: "factor", phonetic: "/ˈfæktə(r)/", cn: "因素" },
  { en: "framework", phonetic: "/ˈfreɪmwɜːk/", cn: "框架" }, { en: "hypothesis", phonetic: "/haɪˈpɒθəsɪs/", cn: "假设" },
  { en: "illustrate", phonetic: "/ˈɪləstreɪt/", cn: "说明" }, { en: "imply", phonetic: "/ɪmˈplaɪ/", cn: "暗示" },
  { en: "interpret", phonetic: "/ɪnˈtɜːprɪt/", cn: "解释" }, { en: "justify", phonetic: "/ˈdʒʌstɪfaɪ/", cn: "证明…正当" },
  { en: "methodology", phonetic: "/ˌmeθəˈdɒlədʒi/", cn: "方法论" }, { en: "perspective", phonetic: "/pəˈspektɪv/", cn: "视角" },
  { en: "phenomenon", phonetic: "/fɪˈnɒmɪnən/", cn: "现象" }, { en: "principle", phonetic: "/ˈprɪnsəpl/", cn: "原则" },
  { en: "procedure", phonetic: "/prəˈsiːdʒə(r)/", cn: "程序" }, { en: "significant", phonetic: "/sɪɡˈnɪfɪkənt/", cn: "显著的" },
  { en: "strategy", phonetic: "/ˈstrætədʒi/", cn: "策略" }, { en: "structure", phonetic: "/ˈstrʌktʃə(r)/", cn: "结构" },
  { en: "substantial", phonetic: "/səbˈstænʃl/", cn: "大量的" }, { en: "theory", phonetic: "/ˈθɪəri/", cn: "理论" },
  { en: "valid", phonetic: "/ˈvælɪd/", cn: "有效的" }, { en: "variable", phonetic: "/ˈveəriəbl/", cn: "变量" },
  { en: "whereas", phonetic: "/ˌweərˈæz/", cn: "然而" }, { en: "whereby", phonetic: "/weəˈbaɪ/", cn: "借以" }
];

const WORD_BOOK_TOEFL = [
  { en: "hypothesis", phonetic: "/haɪˈpɒθəsɪs/", cn: "假设" }, { en: "laboratory", phonetic: "/ləˈbɒrətri/", cn: "实验室" },
  { en: "phenomenon", phonetic: "/fɪˈnɒmɪnən/", cn: "现象" }, { en: "photosynthesis", phonetic: "/ˌfəʊtəʊˈsɪnθəsɪs/", cn: "光合作用" },
  { en: "ecosystem", phonetic: "/ˈiːkəʊsɪstəm/", cn: "生态系统" }, { en: "evolution", phonetic: "/ˌiːvəˈluːʃn/", cn: "进化" },
  { en: "geology", phonetic: "/dʒiˈɒlədʒi/", cn: "地质学" }, { en: "meteorology", phonetic: "/ˌmiːtiəˈrɒlədʒi/", cn: "气象学" },
  { en: "archaeology", phonetic: "/ˌɑːkiˈɒlədʒi/", cn: "考古学" }, { en: "anthropology", phonetic: "/ˌænθrəˈpɒlədʒi/", cn: "人类学" },
  { en: "psychology", phonetic: "/saɪˈkɒlədʒi/", cn: "心理学" }, { en: "sociology", phonetic: "/ˌsəʊsiˈɒlədʒi/", cn: "社会学" },
  { en: "philosophy", phonetic: "/fɪˈlɒsəfi/", cn: "哲学" }, { en: "methodology", phonetic: "/ˌmeθəˈdɒlədʒi/", cn: "方法论" },
  { en: "analysis", phonetic: "/əˈnæləsɪs/", cn: "分析" }, { en: "synthesis", phonetic: "/ˈsɪnθəsɪs/", cn: "综合" },
  { en: "criterion", phonetic: "/kraɪˈtɪəriən/", cn: "标准" }, { en: "paradigm", phonetic: "/ˈpærədaɪm/", cn: "范式" },
  { en: "chronology", phonetic: "/krəˈnɒlədʒi/", cn: "年代学" }, { en: "stratigraphy", phonetic: "/strəˈtɪɡrəfi/", cn: "地层学" },
  { en: "biodiversity", phonetic: "/ˌbaɪəʊdaɪˈvɜːsəti/", cn: "生物多样性" }, { en: "sustainability", phonetic: "/səˌsteɪnəˈbɪləti/", cn: "可持续性" },
  { en: "infrastructure", phonetic: "/ˈɪnfrəstrʌktʃə(r)/", cn: "基础设施" }, { en: "democracy", phonetic: "/dɪˈmɒkrəsi/", cn: "民主" },
  { en: "bureaucracy", phonetic: "/bjʊəˈrɒkrəsi/", cn: "官僚" }, { en: "hierarchy", phonetic: "/ˈhaɪərɑːki/", cn: "等级" },
  { en: "controversy", phonetic: "/ˈkɒntrəvɜːsi/", cn: "争议" }, { en: "consensus", phonetic: "/kənˈsensəs/", cn: "共识" },
  { en: "hypothesis", phonetic: "/haɪˈpɒθəsɪs/", cn: "假设" }, { en: "thesis", phonetic: "/ˈθiːsɪs/", cn: "论文" },
  { en: "antithesis", phonetic: "/ænˈtɪθəsɪs/", cn: "对立" }, { en: "synthesis", phonetic: "/ˈsɪnθəsɪs/", cn: "综合" },
  { en: "paradox", phonetic: "/ˈpærədɒks/", cn: "悖论" }, { en: "analogy", phonetic: "/əˈnælədʒi/", cn: "类比" },
  { en: "metaphor", phonetic: "/ˈmetəfɔː(r)/", cn: "隐喻" }, { en: "rhetoric", phonetic: "/ˈretərɪk/", cn: "修辞" },
  { en: "argumentation", phonetic: "/ˌɑːɡjumənˈteɪʃn/", cn: "论证" }, { en: "citation", phonetic: "/saɪˈteɪʃn/", cn: "引用" },
  { en: "bibliography", phonetic: "/ˌbɪbliˈɒɡrəfi/", cn: "参考文献" }, { en: "appendix", phonetic: "/əˈpendɪks/", cn: "附录" },
  { en: "abstract", phonetic: "/ˈæbstrækt/", cn: "摘要" }, { en: "quantitative", phonetic: "/ˈkwɒntɪtətɪv/", cn: "定量的" },
  { en: "qualitative", phonetic: "/ˈkwɒlɪtətɪv/", cn: "定性的" }, { en: "empirical", phonetic: "/ɪmˈpɪrɪkl/", cn: "经验的" }
];

const WORD_BOOK_HARVARD = [
  { en: "sophisticated", phonetic: "/səˈfɪstɪkeɪtɪd/", cn: "复杂的；精密的" }, { en: "methodology", phonetic: "/ˌmeθəˈdɒlədʒi/", cn: "方法论" },
  { en: "epistemology", phonetic: "/ɪˌpɪstəˈmɒlədʒi/", cn: "认识论" }, { en: "ontology", phonetic: "/ɒnˈtɒlədʒi/", cn: "本体论" },
  { en: "paradigm", phonetic: "/ˈpærədaɪm/", cn: "范式" }, { en: "heuristic", phonetic: "/hjʊˈrɪstɪk/", cn: "启发式的" },
  { en: "axiom", phonetic: "/ˈæksiəm/", cn: "公理" }, { en: "theorem", phonetic: "/ˈθiːərəm/", cn: "定理" },
  { en: "corollary", phonetic: "/kəˈrɒləri/", cn: "推论" }, { en: "hypothesis", phonetic: "/haɪˈpɒθəsɪs/", cn: "假设" },
  { en: "falsifiable", phonetic: "/ˈfɔːlsɪfaɪəbl/", cn: "可证伪的" }, { en: "empiricism", phonetic: "/ɪmˈpɪrɪsɪzəm/", cn: "经验主义" },
  { en: "rationalism", phonetic: "/ˈræʃnəlɪzəm/", cn: "理性主义" }, { en: "synthesis", phonetic: "/ˈsɪnθəsɪs/", cn: "综合" },
  { en: "dichotomy", phonetic: "/daɪˈkɒtəmi/", cn: "二分法" }, { en: "paradox", phonetic: "/ˈpærədɒks/", cn: "悖论" },
  { en: "dialectic", phonetic: "/ˌdaɪəˈlektɪk/", cn: "辩证法" }, { en: "hermeneutics", phonetic: "/ˌhɜːməˈnjuːtɪks/", cn: "阐释学" },
  { en: "phenomenology", phonetic: "/fɪˌnɒmɪˈnɒlədʒi/", cn: "现象学" }, { en: "epistemological", phonetic: "/ɪˌpɪstəməˈlɒdʒɪkl/", cn: "认识论的" },
  { en: "ontological", phonetic: "/ɒnˈtɒlədʒɪkl/", cn: "本体论的" }, { en: "methodological", phonetic: "/ˌmeθədəˈlɒdʒɪkl/", cn: "方法论的" },
  { en: "theoretical", phonetic: "/ˌθɪəˈretɪkl/", cn: "理论的" }, { en: "empirical", phonetic: "/ɪmˈpɪrɪkl/", cn: "经验的" },
  { en: "quantitative", phonetic: "/ˈkwɒntɪtətɪv/", cn: "定量的" }, { en: "qualitative", phonetic: "/ˈkwɒlɪtətɪv/", cn: "定性的" },
  { en: "interdisciplinary", phonetic: "/ˌɪntəˈdɪsɪplɪnəri/", cn: "跨学科的" }, { en: "multidisciplinary", phonetic: "/ˌmʌltiˈdɪsɪplɪnəri/", cn: "多学科的" },
  { en: "rigorous", phonetic: "/ˈrɪɡərəs/", cn: "严谨的" }, { en: "systematic", phonetic: "/ˌsɪstəˈmætɪk/", cn: "系统的" },
  { en: "comprehensive", phonetic: "/ˌkɒmprɪˈhensɪv/", cn: "全面的" }, { en: "substantive", phonetic: "/səbˈstæntɪv/", cn: "实质的" },
  { en: "conceptual", phonetic: "/kənˈseptʃuəl/", cn: "概念的" }, { en: "analytical", phonetic: "/ˌænəˈlɪtɪkl/", cn: "分析的" },
  { en: "critical", phonetic: "/ˈkrɪtɪkl/", cn: "批判的" }, { en: "scholarly", phonetic: "/ˈskɒləli/", cn: "学术的" },
  { en: "peer-reviewed", phonetic: "", cn: "同行评审的" }, { en: "citation", phonetic: "/saɪˈteɪʃn/", cn: "引用" },
  { en: "bibliography", phonetic: "/ˌbɪbliˈɒɡrəfi/", cn: "参考文献" }, { en: "dissertation", phonetic: "/ˌdɪsəˈteɪʃn/", cn: "学位论文" },
  { en: "thesis", phonetic: "/ˈθiːsɪs/", cn: "论文" }, { en: "argumentation", phonetic: "/ˌɑːɡjumənˈteɪʃn/", cn: "论证" },
  { en: "rhetoric", phonetic: "/ˈretərɪk/", cn: "修辞" }, { en: "discourse", phonetic: "/ˈdɪskɔːs/", cn: "话语" },
  { en: "narrative", phonetic: "/ˈnærətɪv/", cn: "叙述" }, { en: "contextualize", phonetic: "/kənˈtekstʃuaɪz/", cn: "将…置于语境" }
];

// 字母单词卡 A-Z（音标为字母读音）
const LETTER_CARDS = {
  A: { phonetic: "/eɪ/", cn: "字母 A" }, B: { phonetic: "/biː/", cn: "字母 B" }, C: { phonetic: "/siː/", cn: "字母 C" },
  D: { phonetic: "/diː/", cn: "字母 D" }, E: { phonetic: "/iː/", cn: "字母 E" }, F: { phonetic: "/ef/", cn: "字母 F" },
  G: { phonetic: "/dʒiː/", cn: "字母 G" }, H: { phonetic: "/eɪtʃ/", cn: "字母 H" }, I: { phonetic: "/aɪ/", cn: "字母 I" },
  J: { phonetic: "/dʒeɪ/", cn: "字母 J" }, K: { phonetic: "/keɪ/", cn: "字母 K" }, L: { phonetic: "/el/", cn: "字母 L" },
  M: { phonetic: "/em/", cn: "字母 M" }, N: { phonetic: "/en/", cn: "字母 N" }, O: { phonetic: "/əʊ/", cn: "字母 O" },
  P: { phonetic: "/piː/", cn: "字母 P" }, Q: { phonetic: "/kjuː/", cn: "字母 Q" }, R: { phonetic: "/ɑː(r)/", cn: "字母 R" },
  S: { phonetic: "/es/", cn: "字母 S" }, T: { phonetic: "/tiː/", cn: "字母 T" }, U: { phonetic: "/juː/", cn: "字母 U" },
  V: { phonetic: "/viː/", cn: "字母 V" }, W: { phonetic: "/ˈdʌbljuː/", cn: "字母 W" }, X: { phonetic: "/eks/", cn: "字母 X" },
  Y: { phonetic: "/waɪ/", cn: "字母 Y" }, Z: { phonetic: "/zed/", cn: "字母 Z" }
};

// 英语阅读：分级文章（小学/初中/高中/大学/出国/雅思/托福/哈佛）
// 格式：每篇 { title, sentences: [{ en, cn }], questions: [{ q, options: [A,B,C,D], correct: 0 }] }
// 规模要求（生产环境）：每等级文章总数不低于 1 万篇、每等级题目池不低于 8000 题，需通过 app.js 中 READING_DATA_URL 加载外部 JSON/API；每次测验仅抽 5 道题。
// 高中及以上：长文章、学术论文风格，专业方向任意；可从国外权威学术论坛、开放获取期刊（PLOS、arXiv、Nature Communications 等）整理合规文本为 sentences + questions。
// 扩展：在 app.js 设置 READING_DATA_URL 指向外部 JSON，应用优先加载外部数据；本地本文件为示例，供演示与开发用。
const READING_ARTICLES = {
  "小学": [
    {
      title: "My Family and the Little Garden",
      sentences: [
        { en: "I have a big family.", cn: "我有一个大家庭。" },
        { en: "My mother likes red flowers.", cn: "我妈妈喜欢红色的花。" },
        { en: "My father has a small dog.", cn: "我爸爸有一只小狗。" },
        { en: "We water the plants every day.", cn: "我们每天给植物浇水。" },
        { en: "The garden is very beautiful.", cn: "花园非常漂亮。" }
      ],
      questions: [
        { q: "Who likes red flowers?", options: ["Mother.", "Father.", "The dog.", "The garden."], correct: 0 },
        { q: "What does the father have?", options: ["Red flowers.", "A small dog.", "Water.", "A big family."], correct: 1 },
        { q: "What do they do every day?", options: ["Play with the dog.", "Water the plants.", "Go to school.", "Eat flowers."], correct: 1 },
        { q: "How is the garden?", options: ["Small.", "Very beautiful.", "Red.", "Every day."], correct: 1 },
        { q: "How many people are in the family?", options: ["Small.", "A dog.", "Big.", "Red."], correct: 2 },
        { q: "What colour does mother like?", options: ["Blue.", "Green.", "Red.", "Yellow."], correct: 2 },
        { q: "Who has a dog?", options: ["Mother.", "The garden.", "Father.", "The plants."], correct: 2 },
        { q: "When do they water the plants?", options: ["At night.", "Every day.", "Only on Monday.", "In the red garden."], correct: 1 },
        { q: "What is in the garden?", options: ["A dog.", "Plants.", "Mother.", "School."], correct: 1 },
        { q: "Is the garden beautiful?", options: ["No.", "Yes, very.", "Small.", "Red."], correct: 1 },
        { q: "What is the main idea of the passage?", options: ["A dog in the family.", "A family with a garden and plants.", "Only red flowers.", "Water every day."], correct: 1 },
        { q: "We can infer that the family ____.", options: ["has no pets.", "takes care of the garden.", "does not like flowers.", "has no water."], correct: 1 },
        { q: "The word \"water\" in the passage means ____.", options: ["a drink.", "to give plants water.", "a place.", "a colour."], correct: 1 },
        { q: "Who likes red?", options: ["Father.", "Mother.", "The dog.", "The garden."], correct: 1 },
        { q: "What do they do with the plants?", options: ["Eat them.", "Water them every day.", "Sell them.", "Nothing."], correct: 1 }
      ]
    },
    {
      title: "Tom at School",
      sentences: [
        { en: "Tom goes to school every day.", cn: "汤姆每天去上学。" },
        { en: "He has a blue bag and a yellow pen.", cn: "他有一个蓝色的包和一支黄色的钢笔。" },
        { en: "In the classroom he has many friends.", cn: "在教室里他有很多朋友。" },
        { en: "They read books and draw pictures.", cn: "他们读书、画画。" },
        { en: "Tom is happy at school.", cn: "汤姆在学校很开心。" }
      ],
      questions: [
        { q: "When does Tom go to school?", options: ["On Monday only.", "Every day.", "At night.", "In the bag."], correct: 1 },
        { q: "What colour is Tom's bag?", options: ["Yellow.", "Blue.", "Red.", "Green."], correct: 1 },
        { q: "Where does Tom have many friends?", options: ["At home.", "In the classroom.", "In the bag.", "In the pen."], correct: 1 },
        { q: "What do they do in class?", options: ["Eat.", "Read books and draw pictures.", "Run.", "Sleep."], correct: 1 },
        { q: "How does Tom feel at school?", options: ["Sad.", "Happy.", "Blue.", "Yellow."], correct: 1 },
        { q: "What colour is the pen?", options: ["Blue.", "Yellow.", "Red.", "Green."], correct: 1 },
        { q: "Who has many friends?", options: ["The bag.", "Tom.", "The pen.", "The book."], correct: 1 },
        { q: "Do they read books?", options: ["No.", "Yes.", "Only pictures.", "Only Tom."], correct: 1 },
        { q: "Where is Tom happy?", options: ["At home.", "At school.", "In the bag.", "In the pen."], correct: 1 },
        { q: "What does Tom have?", options: ["Only a pen.", "A blue bag and a yellow pen.", "No friends.", "No books."], correct: 1 },
        { q: "The main idea of the passage is ____.", options: ["Tom's bag.", "Tom's school life and friends.", "Only a pen.", "Only colours."], correct: 1 },
        { q: "We can infer that Tom ____.", options: ["does not like school.", "enjoys school and has friends.", "has no bag.", "does not draw."], correct: 1 },
        { q: "The word \"draw\" here means ____.", options: ["pull.", "make pictures.", "run.", "read."], correct: 1 },
        { q: "Where are Tom's friends?", options: ["At home.", "In the classroom.", "In the bag.", "Nowhere."], correct: 1 },
        { q: "What does Tom do every day?", options: ["Stay at home.", "Go to school.", "Play with the bag only.", "Sleep."], correct: 1 }
      ]
    }
  ],
  "初中": [
    {
      title: "A Trip to the Park",
      sentences: [
        { en: "Last Sunday, my classmates and I went to the city park.", cn: "上周日，我和同学去了城市公园。" },
        { en: "The weather was sunny and warm.", cn: "天气晴朗温暖。" },
        { en: "We took some food and water with us.", cn: "我们带了一些食物和水。" },
        { en: "In the park we saw many flowers and tall trees.", cn: "在公园里我们看到了很多花和高大的树。" },
        { en: "We played games and took photos together.", cn: "我们一起玩游戏、拍照。" },
        { en: "Everyone had a good time.", cn: "大家玩得很开心。" }
      ],
      questions: [
        { q: "When did they go to the park?", options: ["Last Monday.", "Last Sunday.", "Next Sunday.", "Every day."], correct: 1 },
        { q: "Who went to the park?", options: ["Only the writer.", "The writer and classmates.", "Nobody.", "The trees."], correct: 1 },
        { q: "What was the weather like?", options: ["Cold.", "Rainy.", "Sunny and warm.", "Windy."], correct: 2 },
        { q: "What did they take with them?", options: ["Only water.", "Food and water.", "Flowers.", "Photos."], correct: 1 },
        { q: "What did they see in the park?", options: ["Only trees.", "Flowers and tall trees.", "Only food.", "Games."], correct: 1 },
        { q: "What did they do in the park?", options: ["Only took photos.", "Played games and took photos.", "Ate flowers.", "Slept."], correct: 1 },
        { q: "Did everyone have a good time?", options: ["No.", "Yes.", "Only some.", "Not mentioned."], correct: 1 },
        { q: "Where is the park?", options: ["In the school.", "In the city.", "At home.", "In the water."], correct: 1 },
        { q: "What did they play?", options: ["Music.", "Games.", "Flowers.", "Trees."], correct: 1 },
        { q: "What did they take together?", options: ["Food.", "Photos.", "Water.", "Flowers."], correct: 1 },
        { q: "The main idea of the passage is ____.", options: ["Weather.", "A trip to the park with classmates.", "Only photos.", "Only trees."], correct: 1 },
        { q: "We can infer that they ____.", options: ["did not enjoy.", "had a good time together.", "saw no flowers.", "took nothing."], correct: 1 },
        { q: "The word \"lounge\" is not in the text; \"had a good time\" means ____.", options: ["were sad.", "enjoyed themselves.", "left early.", "ate nothing."], correct: 1 },
        { q: "Where did they see flowers and trees?", options: ["At school.", "In the park.", "At home.", "Nowhere."], correct: 1 },
        { q: "When was the weather sunny?", options: ["Last Monday.", "Last Sunday.", "Next Sunday.", "Every day."], correct: 1 }
      ]
    },
    {
      title: "Managing Your Time",
      sentences: [
        { en: "Good students often plan their time carefully.", cn: "好学生常常认真规划时间。" },
        { en: "They make a list of things to do every day.", cn: "他们每天列一份待办清单。" },
        { en: "It is important to finish homework first.", cn: "先完成作业很重要。" },
        { en: "Then they have time for sports and hobbies.", cn: "然后他们才有时间运动和爱好。" },
        { en: "Sleeping early helps you feel fresh the next day.", cn: "早睡有助于第二天精神饱满。" }
      ],
      questions: [
        { q: "Who plans their time carefully?", options: ["All students.", "Good students.", "Teachers.", "Nobody."], correct: 1 },
        { q: "What do they make every day?", options: ["A list of things to do.", "A list of friends.", "Only homework.", "Sports."], correct: 0 },
        { q: "What is important to do first?", options: ["Sports.", "Finish homework.", "Sleep.", "Hobbies."], correct: 1 },
        { q: "When do they have time for sports?", options: ["Before homework.", "After finishing homework.", "Never.", "Only at night."], correct: 1 },
        { q: "What helps you feel fresh the next day?", options: ["More homework.", "Sleeping early.", "Long list.", "Sports only."], correct: 1 },
        { q: "What does \"plan their time\" mean?", options: ["Waste time.", "Plan when to do things.", "Forget things.", "Sleep late."], correct: 1 },
        { q: "What can be on the list?", options: ["Only school work.", "Things to do.", "Friends.", "Sleep."], correct: 1 },
        { q: "Why is homework first?", options: ["Teacher says so.", "So they have time for sports and hobbies later.", "They don't like sports.", "Not said."], correct: 1 },
        { q: "What does \"fresh\" mean here?", options: ["Cold.", "Tired.", "Awake and energetic.", "Old."], correct: 2 },
        { q: "What is the main idea?", options: ["Sleep a lot.", "Plan your time and do important things first.", "Play only.", "No homework."], correct: 1 },
        { q: "The passage is mainly about ____.", options: ["Homework only.", "Time management for students.", "Sports only.", "Sleep only."], correct: 1 },
        { q: "We can infer that good students ____.", options: ["never rest.", "plan and finish important things first.", "only play.", "never sleep."], correct: 1 },
        { q: "The word \"career\" is not in the text; \"fresh\" here means ____.", options: ["cold.", "tired.", "awake and energetic.", "old."], correct: 2 },
        { q: "What do they make every day?", options: ["Only sports.", "A list of things to do.", "Only homework.", "Nothing."], correct: 1 },
        { q: "Why is sleeping early helpful?", options: ["Not mentioned.", "You feel fresh the next day.", "Only for children.", "Never."], correct: 1 }
      ]
    }
  ],
  "高中": [
    {
      title: "Ecosystem Services and Human Well-Being: A Review of the Literature",
      sentences: [
        { en: "The concept of ecosystem services has gained considerable attention in both academic and policy circles over the past two decades.", cn: "生态系统服务这一概念在过去二十年里在学术界和政策界都受到了相当多的关注。" },
        { en: "Ecosystem services refer to the benefits that humans obtain from ecosystems, including provisioning services such as food and water, regulating services such as climate regulation and flood control, supporting services such as nutrient cycling, and cultural services such as recreation and aesthetic enjoyment.", cn: "生态系统服务指人类从生态系统中获得的惠益，包括供给服务（如食物与水）、调节服务（如气候调节与防洪）、支持服务（如养分循环）以及文化服务（如休闲与审美）。" },
        { en: "A growing body of literature suggests that the loss or degradation of these services poses significant risks to human well-being, particularly in regions where communities depend heavily on natural resources.", cn: "越来越多的文献表明，这些服务的丧失或退化对人类福祉构成重大风险，尤其在社区高度依赖自然资源的地区。" },
        { en: "Researchers have attempted to quantify ecosystem services using a variety of methods, including biophysical modelling, economic valuation, and participatory mapping.", cn: "研究者尝试用多种方法对生态系统服务进行量化，包括生物物理建模、经济估值和参与式制图。" },
        { en: "Despite these advances, substantial uncertainties remain regarding the measurement of certain services, the spatial and temporal scales at which they operate, and the trade-offs between different types of services.", cn: "尽管取得了这些进展，在部分服务的度量、其作用的时空尺度以及不同类型服务之间的权衡方面仍存在很大不确定性。" },
        { en: "Furthermore, the integration of ecosystem services into decision-making has been uneven across sectors and governance levels.", cn: "此外，将生态系统服务纳入决策在不同部门和治理层级中的进展并不均衡。" },
        { en: "Some scholars argue that a narrow focus on economic valuation may obscure important non-monetary values and reinforce existing inequalities in access to natural resources.", cn: "有学者认为，过分侧重经济估值可能掩盖重要的非货币价值，并加剧在获取自然资源方面已有的不平等。" },
        { en: "Others emphasise the need for interdisciplinary approaches that combine ecological, social, and economic perspectives to support more equitable and sustainable outcomes.", cn: "另一些人则强调需要跨学科方法，将生态、社会与经济视角结合起来，以支持更公平和可持续的结果。" },
        { en: "In conclusion, while the ecosystem services framework has proven useful for raising awareness and informing policy, its application requires careful consideration of context, scale, and the diverse values that people attach to nature.", cn: "总之，尽管生态系统服务框架在提高认识和为政策提供信息方面已被证明有用，其应用仍须认真考虑背景、尺度以及人们对自然所持的多元价值。" }
      ],
      questions: [
        { q: "What is the main idea of the passage?", options: ["Ecosystems only provide food.", "Ecosystem services and their importance, measurement, and challenges in policy.", "Economic valuation is the only method.", "No uncertainties exist."], correct: 1 },
        { q: "According to the passage, ecosystem services include ____.", options: ["only food.", "provisioning, regulating, supporting, and cultural services.", "only recreation.", "only water."], correct: 1 },
        { q: "The word \"provisioning\" in the passage is closest in meaning to ____.", options: ["destroying.", "supplying or providing.", "ignoring.", "reducing."], correct: 1 },
        { q: "What do researchers use to quantify ecosystem services?", options: ["Only surveys.", "Biophysical modelling, economic valuation, and participatory mapping.", "Only maps.", "Nothing."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["rejects the concept.", "acknowledges both the usefulness and the limitations of the framework.", "only likes economic valuation.", "ignores policy."], correct: 1 },
        { q: "What \"substantial uncertainties\" are mentioned?", options: ["None.", "Measurement of certain services, scales, and trade-offs.", "Only economic.", "Only spatial."], correct: 1 },
        { q: "Some scholars argue that a narrow focus on economic valuation may ____.", options: ["help everyone.", "obscure non-monetary values and reinforce inequalities.", "solve all problems.", "reduce services."], correct: 1 },
        { q: "The word \"trade-offs\" here means ____.", options: ["agreements.", "exchanges or compromises between different options.", "conflicts only.", "nothing."], correct: 1 },
        { q: "What does the passage say about integrating ecosystem services into decision-making?", options: ["It is complete everywhere.", "It has been uneven across sectors and governance levels.", "It is not important.", "Only at local level."], correct: 1 },
        { q: "The passage is typical of ____.", options: ["a short story.", "an academic or policy-oriented review.", "an advertisement.", "a letter."], correct: 1 }
      ]
    },
    {
      title: "Climate Change and Young People",
      sentences: [
        { en: "Climate change is one of the biggest challenges we face today.", cn: "气候变化是我们当今面临的最大挑战之一。" },
        { en: "Scientists say that human activities have made the Earth warmer.", cn: "科学家认为人类活动使地球变暖。" },
        { en: "Many young people around the world are taking action.", cn: "世界上许多年轻人正在采取行动。" },
        { en: "They reduce waste, save energy, and spread the message.", cn: "他们减少浪费、节约能源、传播理念。" },
        { en: "Every small step can make a difference.", cn: "每一小步都能带来改变。" }
      ],
      questions: [
        { q: "What is one of the biggest challenges we face?", options: ["War.", "Climate change.", "Food.", "Sports."], correct: 1 },
        { q: "What do scientists say about human activities?", options: ["They have no effect.", "They have made the Earth warmer.", "They cool the Earth.", "They are not important."], correct: 1 },
        { q: "Who are taking action?", options: ["Only adults.", "Many young people.", "Only scientists.", "Nobody."], correct: 1 },
        { q: "What do young people do?", options: ["Only talk.", "Reduce waste, save energy, and spread the message.", "Ignore the problem.", "Wait for others."], correct: 1 },
        { q: "What can every small step do?", options: ["Nothing.", "Make a difference.", "Make it worse.", "Be ignored."], correct: 1 },
        { q: "What does \"take action\" mean?", options: ["Do something about it.", "Just think.", "Wait.", "Talk only."], correct: 0 },
        { q: "What does \"spread the message\" mean?", options: ["Hide the idea.", "Tell more people about it.", "Forget it.", "Write a letter."], correct: 1 },
        { q: "Who says human activities warm the Earth?", options: ["Young people.", "Scientists.", "Nobody.", "The article doesn't say."], correct: 1 },
        { q: "What should we do according to the text?", options: ["Do nothing.", "Take small steps to help.", "Only scientists can help.", "Ignore climate."], correct: 1 },
        { q: "What is the tone of the article?", options: ["Hopeless.", "Encouraging and practical.", "Angry.", "Boring."], correct: 1 },
        { q: "The main idea of the passage is ____.", options: ["Scientists only.", "Climate change and young people taking action.", "Only social media.", "Only the Earth."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["does not care.", "supports young people's actions.", "only talks about problems.", "blames scientists."], correct: 1 },
        { q: "The word \"spread\" in the passage means ____.", options: ["hide.", "share or pass on (the message).", "reduce.", "stop."], correct: 1 },
        { q: "What do scientists say about human activities?", options: ["No effect.", "They have made the Earth warmer.", "They cool the Earth.", "Not important."], correct: 1 },
        { q: "What kind of text is this? (高考题型：体裁)", options: ["A story.", "An argumentative/informative text about a global issue.", "A letter.", "An ad."], correct: 1 }
      ]
    },
    {
      title: "The Value of Reading",
      sentences: [
        { en: "Reading opens the door to different worlds and ideas.", cn: "阅读打开了通往不同世界和思想的大门。" },
        { en: "Through books we can understand other cultures and times.", cn: "通过书籍我们可以了解其他文化和时代。" },
        { en: "It also improves our vocabulary and writing skills.", cn: "阅读还能提高我们的词汇和写作能力。" },
        { en: "Many successful people share the habit of reading every day.", cn: "许多成功人士都有每天阅读的习惯。" },
        { en: "You do not need to read for hours; even twenty minutes a day helps.", cn: "不必读很久，每天哪怕二十分钟也有帮助。" }
      ],
      questions: [
        { q: "What does reading open the door to?", options: ["Only one world.", "Different worlds and ideas.", "Schools.", "Doors."], correct: 1 },
        { q: "How can we understand other cultures?", options: ["By watching TV only.", "Through books.", "By not reading.", "By sleeping."], correct: 1 },
        { q: "What does reading improve?", options: ["Only memory.", "Vocabulary and writing skills.", "Nothing.", "Only speed."], correct: 1 },
        { q: "What habit do many successful people share?", options: ["Watching TV.", "Reading every day.", "Sleeping late.", "Not reading."], correct: 1 },
        { q: "How long does the writer say you need to read each day?", options: ["Hours only.", "Even twenty minutes helps.", "You must read all day.", "No need to read."], correct: 1 },
        { q: "What does \"opens the door\" mean here?", options: ["A real door.", "Allows you to reach or experience.", "Closes ideas.", "Nothing."], correct: 1 },
        { q: "What can we understand through books?", options: ["Only today.", "Other cultures and times.", "Only our country.", "Nothing."], correct: 1 },
        { q: "Is reading for a long time necessary?", options: ["Yes, hours every day.", "No, even twenty minutes a day helps.", "No, never read.", "Only at school."], correct: 1 },
        { q: "What is the main idea?", options: ["Reading is boring.", "Reading is valuable and even a little each day helps.", "Only successful people read.", "Books are expensive."], correct: 1 },
        { q: "Who has the habit of reading every day?", options: ["Nobody.", "Many successful people.", "Only children.", "Only teachers."], correct: 1 },
        { q: "The main idea of the passage is ____.", options: ["Only books.", "The value of reading and that even a little each day helps.", "Only successful people.", "Only schools."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["does not read.", "encourages daily reading.", "only likes long books.", "dislikes technology."], correct: 1 },
        { q: "The phrase \"opens the door to\" means ____.", options: ["closes.", "allows access to or leads to.", "locks.", "ignores."], correct: 1 },
        { q: "What does reading improve according to the text?", options: ["Only memory.", "Vocabulary and writing skills.", "Nothing.", "Only speed."], correct: 1 },
        { q: "How long does the writer say you need to read each day?", options: ["Hours only.", "Even twenty minutes helps.", "You must read all day.", "No need."], correct: 1 }
      ]
    },
    {
      title: "Biodiversity Loss and Ecosystem Stability: Evidence from Long-Term Ecological Research",
      sentences: [
        { en: "The accelerating loss of biodiversity worldwide has prompted extensive research into the relationship between species diversity and the stability of ecosystems.", cn: "全球生物多样性加速丧失促使人们广泛研究物种多样性与生态系统稳定性之间的关系。" },
        { en: "Theoretical models and early empirical work suggested that more diverse communities might be more resistant to environmental perturbations and more stable in their productivity over time.", cn: "理论模型与早期实证工作表明，更多样化的群落可能对环境扰动更具抵抗力，其生产力随时间更稳定。" },
        { en: "Long-term field experiments, such as those conducted at grassland and forest sites across Europe and North America, have provided robust evidence that species richness can enhance ecosystem functioning, including primary production, nutrient cycling, and resistance to invasion by exotic species.", cn: "在欧洲和北美草原与森林站点开展的长期野外实验提供了有力证据，表明物种丰富度可以增强生态系统功能，包括初级生产、养分循环以及对外来物种入侵的抵抗力。" },
        { en: "Nevertheless, the mechanisms underlying these effects remain debated: complementarity among species in resource use, sampling effects whereby diverse communities are more likely to include highly productive species, and insurance effects whereby diversity buffers against fluctuations in individual species abundances have all been proposed.", cn: "然而，这些效应背后的机制仍有争议：物种在资源利用上的互补性、多样群落更可能包含高生产力物种的取样效应，以及多样性缓冲单个物种丰度波动的保险效应均被提出。" },
        { en: "Recent meta-analyses have shown that the strength of the diversity–stability relationship varies across ecosystem types, spatial scales, and the aspect of stability considered, such as temporal stability of biomass versus resistance to extreme events.", cn: "近期的元分析表明，多样性–稳定性关系的强度因生态系统类型、空间尺度以及所考虑的稳定性方面（如生物量的时间稳定性与对极端事件的抵抗力）而异。" },
        { en: "Furthermore, anthropogenic drivers such as habitat fragmentation, pollution, and climate change can interact with biodiversity loss in ways that are not yet fully predictable, complicating conservation and restoration efforts.", cn: "此外，栖息地破碎化、污染和气候变化等人为驱动因素可能与生物多样性丧失以尚无法完全预测的方式相互作用，使保护和恢复工作复杂化。" },
        { en: "Policy-oriented summaries, including those from the Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services, have emphasised that preserving and restoring biodiversity is not only an ethical imperative but also essential for sustaining ecosystem services on which human societies depend.", cn: "包括政府间生物多样性和生态系统服务科学政策平台在内的政策导向总结强调，保护和恢复生物多样性不仅是伦理上的当务之急，而且对维持人类社会所依赖的生态系统服务至关重要。" },
        { en: "This passage has outlined the evidence linking biodiversity to ecosystem stability and the challenges in applying this knowledge to conservation; a full treatment would require detailed discussion of specific taxa, biomes, and management strategies.", cn: "本文概述了将生物多样性与生态系统稳定性联系起来的证据以及将这一知识应用于保护所面临的挑战；完整论述需要详细讨论特定类群、生物群系和管理策略。" }
      ],
      questions: [
        { q: "The main idea of the passage is ____.", options: ["Only grassland.", "Biodiversity loss, its link to ecosystem stability, and implications for conservation.", "Only experiments.", "Only policy."], correct: 1 },
        { q: "What have long-term field experiments shown?", options: ["Nothing.", "Species richness can enhance ecosystem functioning.", "Only forests.", "Only North America."], correct: 1 },
        { q: "The word \"complementarity\" is closest in meaning to ____.", options: ["conflict.", "species using different resources or roles that fit together.", "sampling.", "insurance."], correct: 1 },
        { q: "What mechanisms are debated?", options: ["Only one.", "Complementarity, sampling effects, insurance effects.", "Only productivity.", "No debate."], correct: 1 },
        { q: "What do recent meta-analyses show?", options: ["One result everywhere.", "The strength of the diversity–stability relationship varies.", "No variation.", "Only biomass."], correct: 1 },
        { q: "What can interact with biodiversity loss?", options: ["Nothing.", "Habitat fragmentation, pollution, climate change.", "Only conservation.", "Only restoration."], correct: 1 },
        { q: "What does the IPBES emphasise?", options: ["Only ethics.", "Preserving biodiversity is ethical and essential for ecosystem services.", "Only policy.", "No emphasis."], correct: 1 },
        { q: "The passage is typical of ____.", options: ["a story.", "academic/scientific review.", "an ad.", "a letter."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["rejects biodiversity.", "presents evidence and policy relevance of biodiversity–stability link.", "only likes experiments.", "ignores conservation."], correct: 1 },
        { q: "What is \"temporal stability\"?", options: ["Space.", "Stability over time.", "Only biomass.", "Only events."], correct: 1 },
        { q: "What complicates conservation efforts?", options: ["Nothing.", "Interactions between anthropogenic drivers and biodiversity loss.", "Only diversity.", "Only policy."], correct: 1 },
        { q: "What does \"robust evidence\" mean?", options: ["Weak.", "Strong, reliable evidence.", "Only models.", "Only field."], correct: 1 }
      ]
    }
  ],
  "大学": [
    {
      title: "Methodological Challenges in Cross-Cultural Research: A Critical Overview",
      sentences: [
        { en: "Cross-cultural research in the social and behavioural sciences has expanded rapidly in recent decades, driven by increasing globalisation and the need to understand human behaviour across diverse contexts.", cn: "在社会与行为科学中，跨文化研究在近几十年来迅速扩展，其动力来自日益增长的全球化以及在不同情境下理解人类行为的需要。" },
        { en: "Nevertheless, researchers face a number of methodological challenges that can threaten the validity and comparability of findings.", cn: "然而，研究者面临诸多方法学上的挑战，可能危及研究结果的有效性和可比性。" },
        { en: "One central issue is the problem of equivalence: ensuring that constructs, measures, and procedures mean the same thing across cultures and languages.", cn: "一个核心问题是等价性问题：要确保构念、测量和程序在不同文化与语言中具有相同含义。" },
        { en: "Without careful adaptation and validation, instruments developed in one cultural context may not tap the same underlying construct when administered in another.", cn: "若未经过审慎的改编与验证，在某一文化情境下开发的工具在另一情境下施测时，可能无法测到同一潜在构念。" },
        { en: "A second challenge concerns sampling: many studies rely on convenience samples of university students or online panels, which may not represent the broader populations of interest and can limit the generalisability of results.", cn: "第二个挑战涉及抽样：许多研究依赖大学生或在线面板的便利样本，这些样本可能无法代表更广泛的目标群体，并会限制结果的推广性。" },
        { en: "A third area of concern is the risk of imposing etic (culture-general) frameworks where emic (culture-specific) perspectives might be more appropriate, potentially leading to misinterpretation or the neglect of locally meaningful phenomena.", cn: "第三个值得关注的方面是，不当采用主位（文化普适）框架而忽视更适用的客位（文化特定）视角的风险，可能导致误解或忽视具有地方意义的现象。" },
        { en: "In response, scholars have called for greater use of mixed methods, collaborative research designs involving local researchers, and transparency in reporting the limitations of cross-cultural comparisons.", cn: "针对这些问题，学者呼吁更多采用混合方法、由当地研究者参与的协作研究设计，以及在报告中透明地说明跨文化比较的局限性。" },
        { en: "This passage has outlined several methodological challenges in cross-cultural research; addressing them is essential for producing robust and ethically sound knowledge.", cn: "本文概述了跨文化研究中的若干方法学挑战；应对这些挑战对于产生稳健且符合伦理的知识至关重要。" }
      ],
      questions: [
        { q: "The main purpose of the passage is to ____.", options: ["promote one method.", "outline methodological challenges in cross-cultural research and possible responses.", "reject cross-cultural research.", "only discuss sampling."], correct: 1 },
        { q: "The word \"equivalence\" in the passage is closest in meaning to ____.", options: ["difference.", "comparability or same meaning across contexts.", "conflict.", "bias."], correct: 1 },
        { q: "Why may instruments developed in one culture fail in another?", options: ["They are always wrong.", "Without adaptation and validation, they may not measure the same construct.", "Only language matters.", "Sampling is the only issue."], correct: 1 },
        { q: "What is said about sampling in cross-cultural research?", options: ["It is always representative.", "Many studies use convenience samples, which may limit generalisability.", "Only students are used.", "No limitations exist."], correct: 1 },
        { q: "The terms \"etic\" and \"emic\" refer to ____.", options: ["only language.", "culture-general vs culture-specific perspectives.", "only sampling.", "only methods."], correct: 1 },
        { q: "What have scholars called for in response to these challenges?", options: ["Only quantitative methods.", "Mixed methods, collaborative designs, and transparency about limitations.", "Only local researchers.", "No reporting."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["rejects cross-cultural research.", "takes the challenges seriously and supports better methods.", "only likes etic frameworks.", "ignores ethics."], correct: 1 },
        { q: "The word \"generalisability\" means ____.", options: ["bias.", "the extent to which results can be applied to other populations or contexts.", "only samples.", "only culture."], correct: 1 },
        { q: "What is \"imposing etic frameworks\" a risk for?", options: ["Nothing.", "Misinterpretation or neglect of locally meaningful phenomena.", "Only validity.", "Only sampling."], correct: 1 },
        { q: "This passage is best described as ____.", options: ["a narrative.", "an academic critical overview.", "an advertisement.", "a letter."], correct: 1 }
      ]
    },
    {
      title: "Critical Thinking in Education",
      sentences: [
        { en: "Critical thinking is the ability to analyse information and form a reasoned judgment.", cn: "批判性思维是分析信息并形成理性判断的能力。" },
        { en: "In university, students are encouraged to question ideas rather than only accept them.", cn: "在大学里，鼓励学生质疑观点而不仅仅是接受。" },
        { en: "This skill helps in solving problems and making better decisions.", cn: "这一能力有助于解决问题和做出更好的决定。" },
        { en: "Teachers often use discussions and debates to develop this ability.", cn: "教师常通过讨论和辩论来培养这种能力。" },
        { en: "It is considered one of the most important skills for the 21st century.", cn: "它被视为21世纪最重要的技能之一。" }
      ],
      questions: [
        { q: "What is critical thinking?", options: ["Accepting everything.", "The ability to analyse information and form a reasoned judgment.", "Only in science.", "Memorising facts."], correct: 1 },
        { q: "What are university students encouraged to do?", options: ["Only accept ideas.", "Question ideas rather than only accept them.", "Never ask questions.", "Skip classes."], correct: 1 },
        { q: "What does this skill help with?", options: ["Only exams.", "Solving problems and making better decisions.", "Nothing.", "Only teachers."], correct: 1 },
        { q: "How do teachers develop this ability?", options: ["By giving more homework.", "Through discussions and debates.", "By not talking.", "Only by reading."], correct: 1 },
        { q: "Why is it important for the 21st century?", options: ["It is not.", "It is considered one of the most important skills.", "Only in the past.", "Only in one country."], correct: 1 },
        { q: "What does \"reasoned judgment\" mean?", options: ["Quick guess.", "A judgment based on thinking and evidence.", "Emotion only.", "Random choice."], correct: 1 },
        { q: "What do discussions and debates do?", options: ["Stop thinking.", "Develop the ability to think critically.", "Only for fun.", "Replace reading."], correct: 1 },
        { q: "Where are students encouraged to question ideas?", options: ["Only at home.", "In university.", "Nowhere.", "Only in science."], correct: 1 },
        { q: "What is the text mainly about?", options: ["University life.", "Critical thinking and its importance in education.", "Teachers only.", "The 21st century."], correct: 1 },
        { q: "What does \"form a judgment\" mean?", options: ["Forget.", "Come to a conclusion after thinking.", "Copy others.", "Never decide."], correct: 1 },
        { q: "The main idea of the passage is ____.", options: ["University life only.", "Critical thinking and its importance in education.", "Only teachers.", "Only the 21st century."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["rejects critical thinking.", "values critical thinking in education.", "only likes debates.", "dislikes discussions."], correct: 1 },
        { q: "The word \"reasoned\" in \"reasoned judgment\" means ____.", options: ["quick.", "based on thinking and evidence.", "emotional.", "random."], correct: 1 },
        { q: "How do teachers develop critical thinking?", options: ["By giving more homework.", "Through discussions and debates.", "By not talking.", "Only by reading."], correct: 1 }
      ]
    },
    {
      title: "Globalisation and Culture",
      sentences: [
        { en: "Globalisation has made it easier for people to share culture across borders.", cn: "全球化使人们更容易跨越国界分享文化。" },
        { en: "Music, film, and food from one country can now be enjoyed worldwide.", cn: "一个国家的音乐、电影和食物如今可以在全球享用。" },
        { en: "Some people worry that local cultures might become weaker.", cn: "有些人担心本土文化可能会变弱。" },
        { en: "Others believe that exchange can enrich both sides.", cn: "另一些人认为交流可以使双方都更丰富。" },
        { en: "Understanding different cultures can reduce misunderstanding and conflict.", cn: "理解不同文化可以减少误解和冲突。" }
      ],
      questions: [
        { q: "What has globalisation made easier?", options: ["Staying at home.", "Sharing culture across borders.", "Ignoring others.", "Conflict."], correct: 1 },
        { q: "What can be enjoyed worldwide now?", options: ["Only local food.", "Music, film, and food from one country.", "Nothing.", "Only one culture."], correct: 1 },
        { q: "What do some people worry about?", options: ["Too much exchange.", "Local cultures might become weaker.", "Nothing.", "More music."], correct: 1 },
        { q: "What do others believe about exchange?", options: ["It is bad.", "It can enrich both sides.", "It has no effect.", "It causes conflict."], correct: 1 },
        { q: "What can understanding different cultures reduce?", options: ["Exchange.", "Misunderstanding and conflict.", "Music.", "Food."], correct: 1 },
        { q: "What does \"enrich both sides\" mean?", options: ["Make both poorer.", "Make both richer in culture or experience.", "Only one side.", "Nothing."], correct: 1 },
        { q: "What is \"globalisation\" in this text?", options: ["Staying local.", "Connecting the world; things spread across countries.", "Only economy.", "Only food."], correct: 1 },
        { q: "Who worries about local culture?", options: ["Nobody.", "Some people.", "Everyone.", "Only one country."], correct: 1 },
        { q: "What is a benefit of understanding different cultures?", options: ["More conflict.", "Reduce misunderstanding and conflict.", "Weaker culture.", "Less exchange."], correct: 1 },
        { q: "What is the main idea?", options: ["Globalisation is bad.", "Globalisation brings cultural exchange, with both worries and benefits.", "Only local culture matters.", "No one shares culture."], correct: 1 },
        { q: "The passage is mainly about ____.", options: ["Music only.", "Globalisation and culture: exchange, worries, and benefits.", "Only food.", "Only one country."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["rejects exchange.", "presents a balanced view of globalisation and culture.", "only likes local culture.", "ignores benefits."], correct: 1 },
        { q: "The word \"enrich\" in \"enrich both sides\" means ____.", options: ["make poorer.", "make richer (in culture or experience).", "ignore.", "reduce."], correct: 1 },
        { q: "What do some people worry about?", options: ["Too much exchange.", "Local cultures might become weaker.", "Nothing.", "More music."], correct: 1 }
      ]
    },
    {
      title: "Neural Mechanisms of Decision-Making Under Uncertainty: A Synthesis of Neuroeconomic Findings",
      sentences: [
        { en: "Decision-making under uncertainty has been a central topic in both economics and neuroscience, leading to the emergence of the interdisciplinary field of neuroeconomics.", cn: "不确定性下的决策一直是经济学和神经科学的核心议题，促成了神经经济学这一跨学科领域的出现。" },
        { en: "Neuroeconomic studies typically combine behavioural experiments with neuroimaging techniques such as functional magnetic resonance imaging (fMRI) or electrophysiological recordings in animals and humans.", cn: "神经经济学研究通常将行为实验与神经影像技术（如功能磁共振成像）或动物与人类的电生理记录相结合。" },
        { en: "A consistent finding across many studies is that regions including the prefrontal cortex, the striatum, and the insula are differentially activated when individuals evaluate risky or ambiguous options, compared with sure outcomes.", cn: "许多研究的一致发现是，当个体评估风险或模糊选项时，与前额叶皮层、纹状体和岛叶等区域相关的脑区相比确定结果时会被不同程度地激活。" },
        { en: "The dopamine system, and in particular midbrain dopaminergic projections to the striatum, has been implicated in the encoding of reward prediction errors—the difference between expected and actual outcomes—which in turn is thought to guide learning and choice.", cn: "多巴胺系统，尤其是中脑多巴胺能向纹状体的投射，被认为参与编码奖赏预测误差（预期与实际结果之差），进而指导学习和选择。" },
        { en: "Nevertheless, the precise mapping between neural activity and economic constructs such as utility, risk aversion, or ambiguity aversion remains incomplete, and causal interpretations of correlational neuroimaging data require caution.", cn: "然而，神经活动与经济构念（如效用、风险厌恶或模糊厌恶）之间的精确对应仍不完整，对相关神经影像数据的因果解释需谨慎。" },
        { en: "Recent work has begun to integrate computational models of decision-making with neural data, allowing researchers to test whether specific brain regions represent quantities such as expected value, variance, or subjective probability.", cn: "近期研究开始将决策的计算模型与神经数据相结合，使研究者能够检验特定脑区是否表征期望值、方差或主观概率等量。" },
        { en: "This passage has outlined key neuroeconomic findings on decision-making under uncertainty; a full treatment would require discussion of individual differences, developmental and clinical applications, and the limits of current methods.", cn: "本文概述了不确定性下决策的主要神经经济学发现；完整论述需要讨论个体差异、发展与临床应用以及当前方法的局限。" }
      ],
      questions: [
        { q: "The main purpose of the passage is to ____.", options: ["promote one method.", "synthesise neuroeconomic findings on decision-making under uncertainty.", "reject neuroscience.", "only discuss dopamine."], correct: 1 },
        { q: "What do neuroeconomic studies combine?", options: ["Only imaging.", "Behavioural experiments with neuroimaging or electrophysiology.", "Only animals.", "Nothing."], correct: 1 },
        { q: "Which regions are mentioned as activated in risky decisions?", options: ["Only one.", "Prefrontal cortex, striatum, insula.", "Only dopamine.", "Only reward."], correct: 1 },
        { q: "What is \"reward prediction error\"?", options: ["Only reward.", "The difference between expected and actual outcomes.", "Only dopamine.", "Only striatum."], correct: 1 },
        { q: "What remains incomplete?", options: ["Nothing.", "Precise mapping between neural activity and economic constructs.", "Only imaging.", "Only utility."], correct: 1 },
        { q: "What does recent work integrate?", options: ["Only behaviour.", "Computational models with neural data.", "Only risk.", "Nothing."], correct: 1 },
        { q: "The word \"implicated\" means ____.", options: ["ignored.", "involved or suggested to play a role.", "rejected.", "only measured."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["rejects neuroeconomics.", "presents findings and acknowledges limits.", "only likes fMRI.", "ignores behaviour."], correct: 1 },
        { q: "What does \"causal interpretations\" require?", options: ["Nothing.", "Caution.", "Only correlation.", "Only imaging."], correct: 1 },
        { q: "This passage is best described as ____.", options: ["a narrative.", "an academic synthesis.", "an ad.", "a letter."], correct: 1 }
      ]
    }
  ],
  "出国": [
    {
      title: "Preparing for Your First Trip Abroad",
      sentences: [
        { en: "Travelling abroad for the first time can be both exciting and a little stressful.", cn: "第一次出国旅行可能既令人兴奋又有点紧张。" },
        { en: "Before you go, check your passport and apply for a visa if the country requires it.", cn: "出发前请检查护照，若该国要求则申请签证。" },
        { en: "It is also wise to book your accommodation and first night in advance.", cn: "提前预订住宿和第一晚也是明智的。" },
        { en: "Learn a few basic phrases in the local language; people appreciate the effort.", cn: "学几句当地语言的基本用语，人们会欣赏你的努力。" },
        { en: "Keep copies of important documents and emergency numbers in a safe place.", cn: "将重要证件和紧急电话的复印件放在安全处。" }
      ],
      questions: [
        { q: "How might first-time travel abroad feel?", options: ["Only exciting.", "Both exciting and a little stressful.", "Only stressful.", "Easy."], correct: 1 },
        { q: "What should you check before you go?", options: ["Only money.", "Passport (and visa if required).", "Only accommodation.", "Nothing."], correct: 1 },
        { q: "What is wise to book in advance?", options: ["Only visa.", "Accommodation and first night.", "Nothing.", "Only copies."], correct: 1 },
        { q: "Why learn a few local phrases?", options: ["Not necessary.", "People appreciate the effort.", "Only for fun.", "Nobody cares."], correct: 1 },
        { q: "What should you keep in a safe place?", options: ["Only passport.", "Copies of important documents and emergency numbers.", "Nothing.", "Only money."], correct: 1 },
        { q: "What does \"accommodation\" mean?", options: ["Visa.", "Place to stay.", "Passport.", "Plane."], correct: 1 },
        { q: "When should you apply for a visa?", options: ["Never.", "If the country requires it.", "Only after travel.", "Only at the airport."], correct: 1 },
        { q: "What do people appreciate?", options: ["Nothing.", "Your effort to speak their language.", "Only money.", "Only documents."], correct: 1 },
        { q: "What is the main purpose of the text?", options: ["To discourage travel.", "To help you prepare for your first trip abroad.", "Only visas.", "Only language."], correct: 1 },
        { q: "What are \"important documents\"?", options: ["Only tickets.", "Things like passport copies, IDs.", "Only phrases.", "Nothing."], correct: 1 },
        { q: "The main idea of the passage is ____.", options: ["Visa only.", "How to prepare for your first trip abroad.", "Only accommodation.", "Only language."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["discourages travel.", "gives practical advice for first-time travellers.", "only talks about visas.", "ignores safety."], correct: 1 },
        { q: "The word \"accommodation\" means ____.", options: ["visa.", "place to stay.", "passport.", "plane."], correct: 1 },
        { q: "Why learn a few local phrases?", options: ["Not necessary.", "People appreciate the effort.", "Only for fun.", "Nobody cares."], correct: 1 }
      ]
    },
    {
      title: "At the Airport",
      sentences: [
        { en: "When you arrive at the airport, first find the check-in desk for your flight.", cn: "到达机场后，先找到你所乘航班的办理登机手续的柜台。" },
        { en: "You will need your passport and ticket to get your boarding pass.", cn: "你需要用护照和机票换取登机牌。" },
        { en: "After security, look at the screens for your gate number and boarding time.", cn: "安检后，看屏幕找到你的登机口和登机时间。" },
        { en: "If you have a long wait, you can rest in the departure lounge.", cn: "若等候时间较长，可以在候机厅休息。" },
        { en: "Listen for announcements in case your gate or time changes.", cn: "注意听广播，以防登机口或时间有变。" }
      ],
      questions: [
        { q: "What should you find first at the airport?", options: ["The exit.", "The check-in desk for your flight.", "A lounge only.", "Announcements."], correct: 1 },
        { q: "What do you need to get a boarding pass?", options: ["Only ID.", "Passport and ticket.", "Only money.", "Nothing."], correct: 1 },
        { q: "Where do you find your gate number?", options: ["Only at check-in.", "On the screens after security.", "Never.", "Only in the lounge."], correct: 1 },
        { q: "Where can you rest if you have a long wait?", options: ["On the plane.", "In the departure lounge.", "At security.", "Nowhere."], correct: 1 },
        { q: "Why listen for announcements?", options: ["For fun.", "In case gate or time changes.", "Not necessary.", "Only for boarding pass."], correct: 1 },
        { q: "What is a \"boarding pass\"?", options: ["A visa.", "A document that lets you get on the plane.", "A passport.", "A screen."], correct: 1 },
        { q: "What is \"security\" at the airport?", options: ["The lounge.", "The check where they scan you and bags.", "The gate.", "The ticket."], correct: 1 },
        { q: "When do you go to the gate?", options: ["Before check-in.", "After security, at your boarding time.", "Never.", "Only at night."], correct: 1 },
        { q: "What might change?", options: ["Your passport.", "Gate or boarding time.", "Your ticket.", "The lounge."], correct: 1 },
        { q: "What is the text about?", options: ["Flying only.", "What to do at the airport step by step.", "Only visas.", "Only lounges."], correct: 1 },
        { q: "The main idea of the passage is ____.", options: ["Boarding pass only.", "What to do at the airport step by step.", "Only security.", "Only lounge."], correct: 1 },
        { q: "We can infer that ____.", options: ["you do not need a passport.", "you need your passport and ticket to get a boarding pass.", "security is optional.", "there is no lounge."], correct: 1 },
        { q: "The word \"boarding pass\" means ____.", options: ["visa.", "document that lets you get on the plane.", "passport.", "screen."], correct: 1 },
        { q: "Why listen for announcements?", options: ["For fun.", "Gate or time might change.", "Not necessary.", "Only for boarding pass."], correct: 1 }
      ]
    },
    {
      title: "Academic Writing Conventions in English-Medium Universities: A Guide for International Graduate Students",
      sentences: [
        { en: "International graduate students entering English-medium universities often encounter distinct conventions in academic writing that differ from those in their home educational systems.", cn: "进入英语授课大学的国际研究生常常会遇到与其本国教育体系中不同的学术写作规范。" },
        { en: "These conventions include expectations regarding argument structure—such as stating a thesis early and supporting it with evidence—citation styles (e.g. APA, MLA, or discipline-specific formats), and the use of hedging and cautious language when presenting claims or interpreting data.", cn: "这些规范包括对论证结构的期望（如尽早提出论点并用证据支持）、引用风格（如 APA、MLA 或学科特定格式）以及在提出主张或解释数据时使用模糊和谨慎语言。" },
        { en: "Plagiarism, defined as the use of another's work without proper attribution, is treated with particular seriousness in most Western institutions and can result in severe academic penalties; therefore understanding how to paraphrase, quote, and cite sources is essential.", cn: "抄袭（即未适当注明出处而使用他人作品）在大多数西方院校受到特别严肃对待，可能导致严厉的学术处分；因此理解如何改述、引用和标注来源至关重要。" },
        { en: "Furthermore, academic tone typically avoids informal language, contractions, and direct address to the reader in formal papers, while still allowing clarity and directness in expression.", cn: "此外，学术语气在正式论文中通常避免非正式用语、缩略形式和直接称呼读者，同时仍允许表达清晰直接。" },
        { en: "Many universities offer writing centres or workshops specifically designed to support international students in developing these skills; early engagement with such resources is often recommended.", cn: "许多大学设有专门为支持国际学生培养这些技能而设计的写作中心或工作坊；通常建议尽早利用这些资源。" },
        { en: "This passage has outlined key academic writing conventions for international graduate students; discipline-specific and genre-specific guidance should be sought from departmental advisors and sample texts in the field.", cn: "本文概述了国际研究生应掌握的主要学术写作规范；学科和体裁方面的具体指导应向系内导师及领域内的范文寻求。" }
      ],
      questions: [
        { q: "The main idea of the passage is ____.", options: ["Only citations.", "Academic writing conventions in English-medium universities for international students.", "Only plagiarism.", "Only workshops."], correct: 1 },
        { q: "What conventions are mentioned?", options: ["Only one.", "Argument structure, citation styles, hedging.", "Only APA.", "Nothing."], correct: 1 },
        { q: "What is plagiarism?", options: ["Quoting with citation.", "Use of another's work without proper attribution.", "Only paraphrasing.", "Only formal tone."], correct: 1 },
        { q: "What does academic tone typically avoid?", options: ["Nothing.", "Informal language, contractions, direct address in formal papers.", "Only clarity.", "Only directness."], correct: 1 },
        { q: "What do many universities offer?", options: ["Only courses.", "Writing centres or workshops for international students.", "Nothing.", "Only advisors."], correct: 1 },
        { q: "The word \"hedging\" here means ____.", options: ["avoiding.", "using cautious or qualified language.", "quoting only.", "informal language."], correct: 1 },
        { q: "Why is understanding citation essential?", options: ["Not important.", "To avoid plagiarism and academic penalties.", "Only for style.", "Only for international students."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["discourages international students.", "recommends learning conventions and using writing support.", "only likes APA.", "ignores plagiarism."], correct: 1 },
        { q: "What should students seek for discipline-specific guidance?", options: ["Only this passage.", "Departmental advisors and sample texts.", "Only workshops.", "Nothing."], correct: 1 }
      ]
    }
  ],
  "雅思": [
    {
      title: "Urban Green Space and Public Health: Evidence from Longitudinal Studies",
      sentences: [
        { en: "A substantial body of research has examined the relationship between urban green space and various indicators of public health, including mental well-being, physical activity, and cardiovascular outcomes.", cn: "大量研究考察了城市绿地与多种公共健康指标之间的关系，包括心理健康、身体活动和心血管结局。" },
        { en: "Longitudinal studies, which follow the same individuals or populations over time, have been particularly valuable in establishing plausible causal links, as they can help to control for selection effects and reverse causality.", cn: "纵向研究对同一批个体或人群进行长期追踪，在建立可信的因果联系方面尤其有价值，因为它们有助于控制选择效应和反向因果。" },
        { en: "Several large-scale cohort studies have reported that greater exposure to green space is associated with lower rates of depression and anxiety, even after adjusting for socioeconomic and demographic confounders.", cn: "若干大规模队列研究报告，在调整社会经济和人口学混杂因素后，更多接触绿地与较低的抑郁和焦虑发生率相关。" },
        { en: "Similarly, evidence suggests that access to parks and recreational facilities is positively associated with levels of physical activity among adults and children.", cn: "类似地，证据表明公园和休闲设施的可及性与成人和儿童的身体活动水平呈正相关。" },
        { en: "Nevertheless, critics have pointed out that many studies rely on cross-sectional designs or crude measures of green space, such as satellite-derived vegetation indices, which may not capture the quality or usability of local environments.", cn: "然而，批评者指出，许多研究依赖横断面设计或粗糙的绿地度量（如卫星植被指数），可能无法反映当地环境的质量或可用性。" },
        { en: "Future research should aim to integrate more nuanced measures of green space, consider equity in access across different social groups, and assess the cost-effectiveness of green space interventions for policymakers.", cn: "未来研究应致力于采用更细致的绿地度量、考虑不同社会群体在可及性上的公平性，并评估绿地干预对政策制定者的成本效益。" }
      ],
      questions: [
        { q: "The passage is mainly about ____.", options: ["parks only.", "urban green space and public health evidence from longitudinal studies.", "only mental health.", "only children."], correct: 1 },
        { q: "Why are longitudinal studies said to be valuable?", options: ["They are short.", "They can help establish causal links and control for selection effects.", "They only use satellites.", "They ignore confounders."], correct: 1 },
        { q: "The word \"confounders\" is closest in meaning to ____.", options: ["causes.", "confounding or混杂 factors.", "results.", "green space."], correct: 1 },
        { q: "What have critics pointed out?", options: ["All studies are perfect.", "Many studies use cross-sectional designs or crude measures.", "Only longitudinal studies exist.", "No evidence exists."], correct: 1 },
        { q: "What does the passage suggest for future research?", options: ["Only satellites.", "More nuanced measures, equity, and cost-effectiveness.", "Only adults.", "No policy."], correct: 1 }
      ]
    },
    {
      title: "The Impact of Social Media on Reading",
      sentences: [
        { en: "Studies show that the time young people spend on social media has increased over the past decade.", cn: "研究表明，年轻人花在社交媒体上的时间在过去十年中有所增加。" },
        { en: "Some researchers argue that this has led to a decline in the habit of reading long texts.", cn: "一些研究者认为这导致了阅读长文本习惯的下降。" },
        { en: "However, others point out that social media can also promote reading when users share book reviews and recommendations.", cn: "然而，另一些人指出，当用户分享书评和推荐时，社交媒体也能促进阅读。" },
        { en: "The relationship between screen time and reading is therefore complex and not simply negative.", cn: "因此，屏幕时间与阅读之间的关系是复杂的，并非单纯的消极。" },
        { en: "Educators suggest balancing both: using technology for learning while still setting aside time for books.", cn: "教育工作者建议两者兼顾：用技术学习，同时仍留出时间读书。" }
      ],
      questions: [
        { q: "What has increased over the past decade?", options: ["Reading long texts.", "Time young people spend on social media.", "Book reviews only.", "Nothing."], correct: 1 },
        { q: "What do some researchers argue?", options: ["Social media has no effect.", "It has led to a decline in reading long texts.", "Everyone reads more.", "Only adults use social media."], correct: 1 },
        { q: "How can social media promote reading?", options: ["It cannot.", "When users share book reviews and recommendations.", "Only by reducing time.", "Only for children."], correct: 1 },
        { q: "What is the relationship between screen time and reading?", options: ["Simply negative.", "Complex and not simply negative.", "No relationship.", "Only positive."], correct: 1 },
        { q: "What do educators suggest?", options: ["Only books.", "Balancing both: technology for learning and time for books.", "Only social media.", "No balance."], correct: 1 },
        { q: "What does \"decline\" mean?", options: ["Increase.", "Decrease or reduction.", "No change.", "Improvement."], correct: 1 },
        { q: "Who points out that social media can promote reading?", options: ["Nobody.", "Others (some researchers).", "Only educators.", "Only users."], correct: 1 },
        { q: "What is \"screen time\" here?", options: ["Time reading books.", "Time spent on devices like phones and computers.", "Time in school.", "Time sleeping."], correct: 1 },
        { q: "What is the main idea?", options: ["Social media is bad.", "The link between social media and reading is complex; balance is suggested.", "Only books are good.", "No research."], correct: 1 },
        { q: "What does \"setting aside time\" mean?", options: ["Forgetting.", "Reserving or keeping some time for.", "Reducing.", "Ignoring."], correct: 1 },
        { q: "The main idea of the passage is ____.", options: ["Social media is bad.", "The link between social media and reading is complex; balance is suggested.", "Only books are good.", "No research."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["rejects social media.", "suggests balancing screen time and reading.", "only likes books.", "ignores research."], correct: 1 },
        { q: "The word \"decline\" in the passage means ____.", options: ["increase.", "decrease or reduction.", "no change.", "improvement."], correct: 1 },
        { q: "What do educators suggest?", options: ["Only books.", "Balancing technology for learning and time for books.", "Only social media.", "No balance."], correct: 1 }
      ]
    },
    {
      title: "Urbanisation and the Environment",
      sentences: [
        { en: "Urbanisation has brought many people from the countryside into cities.", cn: "城市化使许多人从农村进入城市。" },
        { en: "This has created benefits such as more jobs and better services, but also challenges.", cn: "这带来了更多就业和更好服务等好处，但也带来了挑战。" },
        { en: "One major concern is pollution: air and water quality in some big cities has worsened.", cn: "一大担忧是污染：一些大城市的空气和水质恶化了。" },
        { en: "Governments and citizens are trying to address this through green policies and lifestyle changes.", cn: "政府和公民正试图通过绿色政策和生活方式改变来应对。" },
        { en: "Sustainable urban development is now a key goal in many countries.", cn: "可持续的城市发展现已成为许多国家的关键目标。" }
      ],
      questions: [
        { q: "What has urbanisation done?", options: ["Moved people from cities to countryside.", "Brought many people from countryside into cities.", "Stopped jobs.", "Nothing."], correct: 1 },
        { q: "What benefits are mentioned?", options: ["Only pollution.", "More jobs and better services.", "Only challenges.", "Nothing."], correct: 1 },
        { q: "What is one major concern?", options: ["More jobs.", "Pollution; air and water quality has worsened in some cities.", "No services.", "No cities."], correct: 1 },
        { q: "How are governments and citizens trying to address pollution?", options: ["By doing nothing.", "Through green policies and lifestyle changes.", "Only by moving.", "Only governments."], correct: 1 },
        { q: "What is a key goal in many countries?", options: ["More pollution.", "Sustainable urban development.", "Less jobs.", "No cities."], correct: 1 },
        { q: "What does \"sustainable\" mean here?", options: ["Quick.", "Able to be maintained long-term without harming the environment.", "Stopping growth.", "Only economic."], correct: 1 },
        { q: "What has worsened in some big cities?", options: ["Only jobs.", "Air and water quality.", "Nothing.", "Only services."], correct: 1 },
        { q: "Who is trying to address the problem?", options: ["Nobody.", "Governments and citizens.", "Only countryside.", "Only one country."], correct: 1 },
        { q: "What does \"address\" mean here?", options: ["Ignore.", "Deal with or tackle.", "Move away.", "Forget."], correct: 1 },
        { q: "What is the text mainly about?", options: ["Only benefits.", "Urbanisation, its benefits, and environmental challenges and responses.", "Only pollution.", "Only government."], correct: 1 },
        { q: "The main idea of the passage is ____.", options: ["Pollution only.", "Urbanisation: benefits and environmental challenges and responses.", "Only government.", "Only cities."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["rejects urbanisation.", "presents benefits and challenges and how people respond.", "only likes countryside.", "ignores pollution."], correct: 1 },
        { q: "The word \"sustainable\" here means ____.", options: ["quick.", "able to be maintained long-term without harming the environment.", "stopping growth.", "only economic."], correct: 1 }
      ]
    },
    {
      title: "Renewable Energy Integration and Grid Stability: Challenges and Policy Responses",
      sentences: [
        { en: "The integration of variable renewable energy sources—primarily wind and solar photovoltaic—into existing electricity grids has become a priority for many governments seeking to decarbonise the power sector.", cn: "将可变可再生能源（主要是风能和太阳能光伏）纳入现有电网已成为许多寻求电力部门脱碳的政府的优先事项。" },
        { en: "Unlike conventional dispatchable generation, wind and solar output depends on weather conditions and is therefore intermittent and partly unpredictable at fine temporal and spatial scales.", cn: "与传统的可调度发电不同，风能和太阳能输出取决于天气条件，因此具有间歇性，在精细的时间和空间尺度上部分不可预测。" },
        { en: "This variability poses challenges for grid operators, who must maintain a continuous balance between supply and demand to ensure frequency stability and avoid blackouts.", cn: "这种可变性给电网运营商带来挑战，他们必须在供需之间保持持续平衡以确保频率稳定并避免停电。" },
        { en: "A range of technical and institutional solutions have been proposed and implemented: improved forecasting of renewable output, demand-side response, energy storage such as batteries and pumped hydro, and stronger interconnections between regional grids.", cn: "一系列技术和制度解决方案已被提出和实施：改进可再生能源输出预测、需求侧响应、电池和抽水蓄能等储能以及区域电网之间更强的互联。" },
        { en: "Economic and regulatory frameworks, including carbon pricing, renewable subsidies, and capacity markets, also influence the pace and pattern of renewable integration.", cn: "包括碳定价、可再生能源补贴和容量市场在内的经济和监管框架也影响着可再生能源并网的节奏和模式。" },
        { en: "Scholars have noted that the costs of integration tend to rise as the share of variable renewables increases, though technology learning and better system design can mitigate these costs.", cn: "学者指出，随着可变可再生能源份额的增加，并网成本往往上升，尽管技术学习和更好的系统设计可以降低这些成本。" },
        { en: "This passage has outlined key challenges and policy responses in renewable energy integration; a full treatment would require detailed discussion of specific technologies, market designs, and national contexts.", cn: "本文概述了可再生能源并网的主要挑战和政策应对；完整论述需要详细讨论具体技术、市场设计和各国国情。" }
      ],
      questions: [
        { q: "The main idea of the passage is ____.", options: ["Only wind.", "Renewable energy integration, grid challenges, and policy responses.", "Only solar.", "Only storage."], correct: 1 },
        { q: "Why is wind and solar output intermittent?", options: ["Not mentioned.", "It depends on weather conditions.", "Only wind.", "Only solar."], correct: 1 },
        { q: "What must grid operators maintain?", options: ["Only supply.", "Balance between supply and demand.", "Only demand.", "Nothing."], correct: 1 },
        { q: "What solutions are mentioned?", options: ["Only one.", "Forecasting, demand response, storage, interconnections.", "Only batteries.", "Nothing."], correct: 1 },
        { q: "What influences the pace of renewable integration?", options: ["Nothing.", "Carbon pricing, subsidies, capacity markets.", "Only technology.", "Only grids."], correct: 1 },
        { q: "The word \"dispatchable\" means ____.", options: ["variable.", "can be turned on/off or adjusted when needed.", "only renewable.", "only wind."], correct: 1 },
        { q: "What do scholars note about integration costs?", options: ["They always fall.", "They tend to rise as renewable share increases.", "No relation.", "Only technology."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["rejects renewables.", "presents challenges and solutions for grid integration.", "only likes storage.", "ignores policy."], correct: 1 }
      ]
    }
  ],
  "托福": [
    {
      title: "How Plants Respond to Light",
      sentences: [
        { en: "Plants depend on light not only for photosynthesis but also for sensing direction and time of day.", cn: "植物依赖光不仅用于光合作用，还用于感知方向和一天中的时间。" },
        { en: "Photoreceptors in leaves and stems send signals that control growth and flowering.", cn: "叶和茎中的光受体发出控制生长和开花的信号。" },
        { en: "When light comes mainly from one side, stems bend toward it, a phenomenon known as phototropism.", cn: "当光主要从一侧照来时，茎会向光弯曲，这一现象称为向光性。" },
        { en: "Scientists have identified several genes that regulate these responses.", cn: "科学家已鉴定出多种调控这些反应的基因。" },
        { en: "This knowledge is used in agriculture to improve crop yields and in greenhouses to control plant shape.", cn: "这些知识被用于农业以提高作物产量，并在温室中用于控制植株形态。" }
      ],
      questions: [
        { q: "What do plants use light for besides photosynthesis?", options: ["Only growth.", "Sensing direction and time of day.", "Nothing else.", "Only flowering."], correct: 1 },
        { q: "Where are photoreceptors found?", options: ["Only in roots.", "In leaves and stems.", "Only in flowers.", "Nowhere."], correct: 1 },
        { q: "What do photoreceptors control?", options: ["Only light.", "Growth and flowering.", "Only direction.", "Only time."], correct: 1 },
        { q: "What is phototropism?", options: ["Roots growing down.", "Stems bending toward light.", "Flowers opening.", "Leaves falling."], correct: 1 },
        { q: "What have scientists identified?", options: ["Only photoreceptors.", "Genes that regulate these responses.", "Only stems.", "Only agriculture."], correct: 1 },
        { q: "Where is this knowledge used?", options: ["Only in labs.", "In agriculture and greenhouses.", "Nowhere.", "Only for flowers."], correct: 1 },
        { q: "What does \"regulate\" mean?", options: ["Ignore.", "Control or direct.", "Stop.", "Create."], correct: 1 },
        { q: "Why might stems bend toward one side?", options: ["Wind.", "Light comes mainly from that side.", "Gravity only.", "Water."], correct: 1 },
        { q: "What is the main idea?", options: ["Plants don't need light.", "Plants use light in multiple ways; science has found genes and applications.", "Only photosynthesis.", "Only agriculture."], correct: 1 },
        { q: "What is \"photoreceptor\"?", options: ["A plant.", "Something that senses light.", "A gene only.", "A greenhouse."], correct: 1 },
        { q: "The passage is typical of ____ (托福学术阅读体裁).", options: ["A story.", "Scientific/explanatory text.", "A letter.", "An ad."], correct: 1 },
        { q: "We can infer that ____.", options: ["light has no effect.", "light affects plant growth and shape.", "genes are not important.", "agriculture does not use this."], correct: 1 },
        { q: "The word \"regulate\" means ____.", options: ["ignore.", "control or direct.", "stop.", "create."], correct: 1 }
      ]
    },
    {
      title: "Campus Life and Academic Pressure",
      sentences: [
        { en: "University life offers many opportunities but also brings academic pressure.", cn: "大学生活带来很多机会，也带来学业压力。" },
        { en: "Students often have to manage several assignments and exams at the same time.", cn: "学生常常不得不同时应对多门作业和考试。" },
        { en: "Research shows that good time management and regular exercise can reduce stress.", cn: "研究表明，良好的时间管理和规律运动可以减轻压力。" },
        { en: "Many universities now provide counselling services for students who feel overwhelmed.", cn: "许多大学现在为感到不堪重负的学生提供咨询服务。" },
        { en: "Balancing study with rest and social activities is important for both grades and well-being.", cn: "在学习和休息、社交活动之间取得平衡对成绩和身心健康都很重要。" }
      ],
      questions: [
        { q: "What does university life bring?", options: ["Only opportunities.", "Opportunities and academic pressure.", "Only pressure.", "Nothing."], correct: 1 },
        { q: "What do students often have to manage?", options: ["Only one exam.", "Several assignments and exams at the same time.", "Only exercise.", "Only counselling."], correct: 1 },
        { q: "What can reduce stress according to research?", options: ["Only more work.", "Good time management and regular exercise.", "Only counselling.", "Nothing."], correct: 1 },
        { q: "What do many universities provide?", options: ["Only grades.", "Counselling services for overwhelmed students.", "Only sports.", "Nothing."], correct: 1 },
        { q: "What is important for both grades and well-being?", options: ["Only study.", "Balancing study with rest and social activities.", "Only rest.", "Only social activities."], correct: 1 },
        { q: "What does \"overwhelmed\" mean?", options: ["Happy.", "Feeling too much pressure or burden.", "Bored.", "Healthy."], correct: 1 },
        { q: "What does \"well-being\" mean?", options: ["Only grades.", "General health and happiness.", "Only study.", "Only exercise."], correct: 1 },
        { q: "Who gets counselling?", options: ["Everyone.", "Students who feel overwhelmed.", "Only teachers.", "Nobody."], correct: 1 },
        { q: "What is the text mainly about?", options: ["Only exams.", "University life, pressure, and how to cope (time management, exercise, counselling, balance).", "Only counselling.", "Only exercise."], correct: 1 },
        { q: "What helps with stress?", options: ["Only medicine.", "Time management and regular exercise.", "Only more assignments.", "Nothing."], correct: 1 },
        { q: "The main idea of the passage is ____.", options: ["Only exams.", "University life, pressure, and how to cope.", "Only counselling.", "Only exercise."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["ignores pressure.", "suggests balance and using support (counselling, time management, exercise).", "only likes exams.", "rejects counselling."], correct: 1 },
        { q: "The word \"overwhelmed\" means ____.", options: ["happy.", "feeling too much pressure or burden.", "bored.", "healthy."], correct: 1 },
        { q: "What do many universities provide?", options: ["Only grades.", "Counselling services for overwhelmed students.", "Only sports.", "Nothing."], correct: 1 }
      ]
    },
    {
      title: "Cognitive Load Theory and Instructional Design: Implications for Multimedia Learning",
      sentences: [
        { en: "Cognitive load theory, developed over several decades by John Sweller and colleagues, posits that human working memory has limited capacity and that instructional design should aim to manage the load placed on learners so that resources are available for schema acquisition and automation.", cn: "由 John Sweller 及其同事在数十年间发展的认知负荷理论认为，人类工作记忆容量有限，教学设计应旨在管理施加于学习者的负荷，以便有资源用于图式获得和自动化。" },
        { en: "The theory distinguishes between intrinsic load (the complexity inherent in the material), extraneous load (imposed by poor design, e.g. redundant or confusing elements), and germane load (the effort devoted to learning and schema construction).", cn: "该理论区分了内在负荷（材料固有的复杂性）、外在负荷（由不良设计施加，如冗余或令人困惑的元素）和相关负荷（用于学习和图式建构的努力）。" },
        { en: "A key prescription is to reduce extraneous load—for example by eliminating redundancy, aligning text and graphics spatially and temporally, and avoiding split attention—so that working memory can be devoted to intrinsic and germane processing.", cn: "一项关键建议是减少外在负荷，例如消除冗余、在空间和时间上对齐文字与图形、避免分散注意，从而使工作记忆能够用于内在和相关加工。" },
        { en: "In the context of multimedia learning, Richard Mayer and others have derived principles such as the multimedia principle (people learn better from words and pictures than from words alone), the modality principle (narration with animation is often better than on-screen text with animation), and the coherence principle (excluding irrelevant material improves learning).", cn: "在多媒体学习情境中，Richard Mayer 等人推导出多媒体原则（文字与图画比仅文字学习效果更好）、模态原则（旁白与动画往往优于屏幕文字与动画）和一致性原则（排除无关材料可改善学习）等。" },
        { en: "Meta-analyses have generally supported many of these principles, though effect sizes vary and boundary conditions—such as learner prior knowledge and the nature of the content—moderate their applicability.", cn: "元分析总体上支持其中许多原则，尽管效应量各异，且边界条件（如学习者先备知识和内容性质）会调节其适用性。" },
        { en: "This passage has outlined cognitive load theory and its implications for multimedia instructional design; a full treatment would require discussion of measurement of cognitive load, individual differences, and emerging technologies.", cn: "本文概述了认知负荷理论及其对多媒体教学设计的意义；完整论述需要讨论认知负荷的测量、个体差异和新兴技术。" }
      ],
      questions: [
        { q: "The main idea of the passage is ____.", options: ["Only memory.", "Cognitive load theory and implications for instructional design.", "Only multimedia.", "Only Mayer."], correct: 1 },
        { q: "What does cognitive load theory posit?", options: ["Unlimited memory.", "Working memory is limited; design should manage load.", "Only schema.", "Only automation."], correct: 1 },
        { q: "What are the three types of load?", options: ["Only one.", "Intrinsic, extraneous, germane.", "Only intrinsic.", "Only extraneous."], correct: 1 },
        { q: "What is extraneous load?", options: ["Inherent complexity.", "Load imposed by poor design.", "Effort for learning.", "Only redundancy."], correct: 1 },
        { q: "What does the multimedia principle state?", options: ["Words only.", "People learn better from words and pictures than words alone.", "Only pictures.", "Nothing."], correct: 1 },
        { q: "The word \"germane\" means ____.", options: ["extraneous.", "relevant to learning.", "only intrinsic.", "redundant."], correct: 1 },
        { q: "What do meta-analyses show?", options: ["No support.", "General support with varying effect sizes and boundary conditions.", "Only one principle.", "No variation."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["rejects the theory.", "presents the theory and evidence-based design principles.", "only likes Mayer.", "ignores load."], correct: 1 }
      ]
    }
  ],
  "哈佛": [
    {
      title: "Epistemological Foundations of Qualitative Inquiry: A Critical Appraisal",
      sentences: [
        { en: "Qualitative research in the social sciences and humanities is underpinned by distinct epistemological assumptions that differentiate it from positivist and post-positivist approaches dominant in much quantitative work.", cn: "社会科学与人文学科中的质性研究建立在独特的认识论假设之上，这些假设将其与许多量化研究中所主导的实证主义与后实证主义取向区分开来。" },
        { en: "Central to many qualitative traditions is the view that knowledge is socially constructed, context-dependent, and co-produced through the interaction between researcher and participants, rather than discovered as an objective reality.", cn: "许多质性传统的核心观点是：知识是社会建构的、依赖情境的，并通过研究者与参与者之间的互动共同生产，而非作为客观现实被发现。" },
        { en: "This stance has implications for how research questions are formulated, how data are collected and analysed, and how findings are presented and generalised.", cn: "这一立场影响着研究问题如何提出、数据如何收集与分析以及结果如何呈现与推广。" },
        { en: "Critics have argued that strong constructivist positions may lead to relativism and make it difficult to evaluate the quality or credibility of research.", cn: "批评者认为，强建构主义立场可能导致相对主义，并难以评估研究的质量或可信度。" },
        { en: "In response, qualitative methodologies have developed a range of criteria and practices—including reflexivity, triangulation, thick description, and member checking—intended to enhance rigour and transparency without abandoning the epistemological commitments of the approach.", cn: "作为回应，质性方法学者发展了一系列标准与实践——包括反思性、三角互证、厚描与成员校验——旨在在不放弃该取向认识论承诺的前提下提高严谨性与透明度。" },
        { en: "This passage has outlined key epistemological foundations of qualitative inquiry and some responses to criticism; a full treatment would require engagement with specific traditions such as phenomenology, grounded theory, and critical theory.", cn: "本文概述了质性探究的主要认识论基础以及对批评的一些回应；更完整的论述需要涉及现象学、扎根理论和批判理论等具体传统。" }
      ],
      questions: [
        { q: "The main idea of the passage is ____.", options: ["quantitative research only.", "epistemological foundations of qualitative inquiry and responses to criticism.", "only positivism.", "only objectivity."], correct: 1 },
        { q: "According to the passage, qualitative traditions often hold that knowledge is ____.", options: ["purely objective.", "socially constructed and context-dependent.", "only measurable.", "only discovered."], correct: 1 },
        { q: "The word \"epistemological\" is closest in meaning to ____.", options: ["ethical.", "relating to the nature of knowledge.", "only methods.", "only data."], correct: 1 },
        { q: "What have critics argued about strong constructivist positions?", options: ["They are always right.", "They may lead to relativism and make evaluation difficult.", "They are not important.", "Only reflexivity matters."], correct: 1 },
        { q: "What practices do qualitative methodologies use to enhance rigour?", options: ["Only statistics.", "Reflexivity, triangulation, thick description, member checking.", "Only surveys.", "No criteria."], correct: 1 }
      ]
    },
    {
      title: "Research Methodology in the Social Sciences",
      sentences: [
        { en: "In the social sciences, researchers must choose an appropriate methodology for their questions.", cn: "在社会科学中，研究者必须为其问题选择合适的方法论。" },
        { en: "Quantitative methods use numerical data and statistical analysis to test hypotheses.", cn: "定量方法使用数值数据和统计分析来检验假设。" },
        { en: "Qualitative methods, by contrast, focus on understanding meaning and context through interviews or observation.", cn: "相比之下，定性方法侧重于通过访谈或观察理解意义和语境。" },
        { en: "Many studies now combine both approaches in mixed-methods research.", cn: "许多研究现在在混合方法研究中结合这两种 approach。" },
        { en: "The choice of methodology affects the kinds of conclusions that can be drawn from the study.", cn: "方法论的选择会影响从研究中得出的结论类型。" }
      ],
      questions: [
        { q: "What must researchers in social sciences choose?", options: ["Only data.", "An appropriate methodology for their questions.", "Only interviews.", "Nothing."], correct: 1 },
        { q: "What do quantitative methods use?", options: ["Only interviews.", "Numerical data and statistical analysis.", "Only observation.", "Only meaning."], correct: 1 },
        { q: "What do quantitative methods test?", options: ["Only context.", "Hypotheses.", "Only interviews.", "Only observation."], correct: 1 },
        { q: "What do qualitative methods focus on?", options: ["Only numbers.", "Understanding meaning and context through interviews or observation.", "Only statistics.", "Only hypotheses."], correct: 1 },
        { q: "What is mixed-methods research?", options: ["Only quantitative.", "Combining both quantitative and qualitative approaches.", "Only qualitative.", "No methodology."], correct: 1 },
        { q: "What does the choice of methodology affect?", options: ["Only the researcher.", "The kinds of conclusions that can be drawn.", "Nothing.", "Only data."], correct: 1 },
        { q: "What does \"hypotheses\" mean?", options: ["Facts.", "Proposed explanations to be tested.", "Conclusions.", "Only numbers."], correct: 1 },
        { q: "What is \"qualitative\" data?", options: ["Only numbers.", "Non-numerical data (e.g. words, meanings, context).", "Only statistics.", "Only tests."], correct: 1 },
        { q: "What is the main idea?", options: ["Only one method is good.", "Methodology choice is important; quantitative and qualitative differ; mixed methods exist.", "Only interviews.", "No choice."], correct: 1 },
        { q: "Who chooses the methodology?", options: ["Nobody.", "Researchers.", "Only subjects.", "Only statistics."], correct: 1 },
        { q: "The main idea of the passage is ____.", options: ["Only one method.", "Research methodology in social sciences: quantitative, qualitative, mixed.", "Only interviews.", "No choice."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["rejects qualitative methods.", "presents different methodologies and their uses.", "only likes numbers.", "ignores mixed methods."], correct: 1 },
        { q: "The word \"hypotheses\" means ____.", options: ["facts.", "proposed explanations to be tested.", "conclusions.", "only numbers."], correct: 1 },
        { q: "What does the choice of methodology affect?", options: ["Only the researcher.", "The kinds of conclusions that can be drawn.", "Nothing.", "Only data."], correct: 1 }
      ]
    },
    {
      title: "The Role of Theory in Academic Writing",
      sentences: [
        { en: "Academic writing typically situates an argument within a broader theoretical framework.", cn: "学术写作通常将论点置于更广泛的理论框架中。" },
        { en: "This framework helps to define key concepts and to connect the writer's work to existing scholarship.", cn: "这一框架有助于界定关键概念，并将作者的工作与现有学术成果联系起来。" },
        { en: "Critics may challenge a theory by pointing to evidence that it cannot explain.", cn: "批评者可以通过指出理论无法解释的证据来挑战该理论。" },
        { en: "Strong academic work often acknowledges both the strengths and the limitations of the theories it uses.", cn: "扎实的学术工作往往既承认所用理论的优点，也承认其局限。" },
        { en: "Thus theory is not merely decorative; it shapes how research questions are posed and interpreted.", cn: "因此理论不仅仅是装饰性的；它影响着研究问题如何被提出和解释。" }
      ],
      questions: [
        { q: "Where does academic writing typically situate an argument?", options: ["Only in data.", "Within a broader theoretical framework.", "Only in one sentence.", "Nowhere."], correct: 1 },
        { q: "What does the framework help to do?", options: ["Only decorate.", "Define key concepts and connect to existing scholarship.", "Only challenge.", "Nothing."], correct: 1 },
        { q: "How may critics challenge a theory?", options: ["By ignoring it.", "By pointing to evidence the theory cannot explain.", "Only by agreeing.", "Only by writing."], correct: 1 },
        { q: "What does strong academic work acknowledge?", options: ["Only strengths.", "Both strengths and limitations of the theories it uses.", "Only limitations.", "Nothing."], correct: 1 },
        { q: "What does the text say about theory?", options: ["It is only decorative.", "It shapes how research questions are posed and interpreted.", "It is not important.", "Only critics use it."], correct: 1 },
        { q: "What does \"theoretical framework\" mean?", options: ["Only one idea.", "A set of theories or ideas that structure the argument.", "Only data.", "Only writing."], correct: 1 },
        { q: "What does \"acknowledge\" mean?", options: ["Ignore.", "Recognise or admit.", "Challenge.", "Decorate."], correct: 1 },
        { q: "Who might challenge a theory?", options: ["Nobody.", "Critics.", "Only the writer.", "Only one person."], correct: 1 },
        { q: "What is the main idea?", options: ["Theory is useless.", "Theory is central: it frames arguments, connects scholarship, and shapes questions and interpretation.", "Only framework.", "Only limitations."], correct: 1 },
        { q: "What does \"shapes\" mean here?", options: ["Destroys.", "Influences or determines.", "Ignores.", "Decorates."], correct: 1 },
        { q: "The main idea of the passage is ____.", options: ["Theory is useless.", "Theory is central: it frames arguments and shapes questions.", "Only framework.", "Only limitations."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["rejects theory.", "values theory in academic writing.", "only likes decoration.", "ignores evidence."], correct: 1 },
        { q: "The word \"theoretical framework\" means ____.", options: ["only one idea.", "a set of theories that structure the argument.", "only data.", "only writing."], correct: 1 },
        { q: "What does strong academic work acknowledge?", options: ["Only strengths.", "Both strengths and limitations of the theories.", "Only limitations.", "Nothing."], correct: 1 }
      ]
    },
    {
      title: "Replication Crisis and Open Science: A Critical Overview of Reforms in Psychological and Social Research",
      sentences: [
        { en: "The so-called replication crisis in psychology and related disciplines has drawn attention to the frequency with which published findings fail to replicate when independent researchers attempt to repeat the original studies.", cn: "心理学及相关学科中所谓的重复性危机使人们注意到，当独立研究者试图重复原始研究时，已发表结果无法被重复的频率之高。" },
        { en: "Contributing factors identified in the literature include publication bias (the tendency to publish only positive or significant results), small sample sizes leading to low statistical power, flexible data analysis practices that allow researchers to try many analyses and report only those that \"work\", and insufficient transparency in reporting methods and data.", cn: "文献中确定的因素包括发表偏倚（只发表阳性或显著结果的倾向）、导致统计功效低的小样本、允许研究者尝试多种分析并只报告“有效”结果的灵活数据分析做法，以及方法和数据报告透明度不足。" },
        { en: "In response, the open science movement has advocated for practices such as preregistration of hypotheses and analysis plans, sharing of data and code, and the use of replication studies and meta-analyses to assess the robustness of findings.", cn: "作为回应，开放科学运动倡导诸如假设和分析计划的预注册、数据和代码共享以及使用重复研究和元分析来评估结果的稳健性等做法。" },
        { en: "Some journals and funders have adopted policies requiring or encouraging these practices, though implementation remains uneven across fields and regions.", cn: "一些期刊和资助方已采取要求或鼓励这些做法的政策，尽管在不同领域和地区的实施仍不均衡。" },
        { en: "Critics have noted that not all research is amenable to direct replication, that preregistration may be less suitable for exploratory or qualitative work, and that an overemphasis on replication could discourage novel or high-risk research.", cn: "批评者指出，并非所有研究都适合直接重复、预注册可能不太适合探索性或质性工作，以及过分强调重复可能阻碍新颖或高风险研究。" },
        { en: "This passage has outlined the replication crisis and open science reforms; a full treatment would require detailed discussion of specific disciplines, methodological alternatives, and the role of incentives and institutions.", cn: "本文概述了重复性危机与开放科学改革；完整论述需要详细讨论具体学科、方法替代方案以及激励与制度的作用。" }
      ],
      questions: [
        { q: "The main idea of the passage is ____.", options: ["Only psychology.", "Replication crisis, contributing factors, and open science reforms.", "Only publication.", "Only preregistration."], correct: 1 },
        { q: "What is the replication crisis?", options: ["No problem.", "Published findings often fail to replicate.", "Only small samples.", "Only bias."], correct: 1 },
        { q: "What contributing factors are mentioned?", options: ["Only one.", "Publication bias, small samples, flexible analysis, lack of transparency.", "Only data.", "Nothing."], correct: 1 },
        { q: "What does preregistration involve?", options: ["Nothing.", "Registering hypotheses and analysis plans in advance.", "Only data sharing.", "Only replication."], correct: 1 },
        { q: "What have some journals and funders adopted?", options: ["Nothing.", "Policies requiring or encouraging open science practices.", "Only replication.", "Only meta-analysis."], correct: 1 },
        { q: "The word \"publication bias\" means ____.", options: ["no bias.", "tendency to publish only positive or significant results.", "only replication.", "only transparency."], correct: 1 },
        { q: "What do critics note?", options: ["All research can replicate.", "Not all research is amenable to direct replication; preregistration may not suit all work.", "No criticism.", "Only exploration."], correct: 1 },
        { q: "We can infer that the author ____.", options: ["rejects open science.", "presents the crisis and reforms, with awareness of limits.", "only likes preregistration.", "ignores critics."], correct: 1 }
      ]
    }
  ]
};
