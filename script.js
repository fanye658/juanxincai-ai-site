/* ============================================================
   卷心菜 · AI 工坊
   ============================================================ */

const SITE = {
  name: "卷心菜",
  email: "1493575306@qq.com",
  heroTags: ["AI文案", "Prompt工程", "自动化流程", "中文内容工作流"],

  rotator: ["你的内容工作流", "你的提案模板", "你的客户运营", "你的日常生产力"],

  stats: [
    { num: 60, suffix: "+", label: "个 Prompt 模板沉淀" },
    { num: 20, suffix: "+", label: "个内容工作流落地" },
    { num: 48, suffix: "h", label: "平均交付周期" },
    { num: 92, suffix: "%", label: "客户复用率" },
  ],

  // Hero demo cycle examples
  heroDemos: [
    {
      prompt: "帮我写一篇手冲咖啡入门的小红书笔记",
      thinking: ["识别需求", "选定结构", "生成草稿"],
      output: "✨ 一篇就让你看懂手冲咖啡\n关键三点：豆子新鲜 / 水温 88-92℃ / 注水节奏稳。\n新手避坑：别上来就买全套装备，先用 V60 试 2 周再说。",
    },
    {
      prompt: "把这周用户访谈反馈整理成可执行的事项",
      thinking: ["归类反馈", "去重合并", "标优先级"],
      output: "✅ 高优先级 (P0)\n· 注册流程在第 3 步流失\n· 移动端字体过小\n\n📝 待评估 (P1)\n· 添加暗色模式\n· 导出 CSV 功能",
    },
    {
      prompt: "我想做一个内容定期产出的自动化流程",
      thinking: ["拆解节点", "选工具", "画流程图"],
      output: "选题输入 → AI 筛选 → 结构起草 → 人工润色 → 排期发布\n关键节点用 Prompt 模板 + Notion + 飞书机器人串起来。",
    },
  ],

  process: [
    {
      step: "01",
      title: "理解",
      time: "30min - 1h",
      desc: "先聊清楚你的业务目标和当前卡点。我会问很多看似不直接相关的问题，目的是确认 AI 真能解决问题，而不是被硬塞进流程里。",
      deliverables: ["问题清单", "目标对齐", "可行性判断"],
    },
    {
      step: "02",
      title: "拆解",
      time: "1-2 天",
      desc: "把模糊需求整理成可执行任务、明确输入条件和交付物。这是项目最关键的一步——做得好，后面 AI 就能稳定输出。",
      deliverables: ["任务结构", "Prompt 草案", "输出规范"],
    },
    {
      step: "03",
      title: "落地",
      time: "3-7 天",
      desc: "用 AI 跑出第一版，按真实场景调试 Prompt 和流程。该人工介入的地方不偷懒——质量优先于"全自动"。",
      deliverables: ["可用产出", "调试日志", "使用手册"],
    },
    {
      step: "04",
      title: "复用",
      time: "持续",
      desc: "把成功流程整理成可复用的模板/SOP，方便你后续自己延展，也方便团队成员接手。",
      deliverables: ["Prompt 模板库", "SOP 文档", "复盘建议"],
    },
  ],

  works: [
    {
      title: "知识博主 AI 选题与脚本工作流",
      tag: "内容效率",
      problem: "选题、脚本和发布准备分散在多个文档里，导致内容产出节奏不稳定，月产出从 12 条掉到 4 条。",
      solution: "整理选题 Prompt 模板、脚本结构模板与版本迭代步骤，形成统一的内容工作流，所有素材汇总到一个 Notion 数据库。",
      result: "把原本零散的准备过程变成可复用流程，月产出回到 10 条以上，且单条准备时间从 4h 降到 1.5h。",
      metrics: ["产出 +150%", "单条节省 2.5h", "可复用模板 8 套"],
    },
    {
      title: "咨询业务 Prompt 模板库草案",
      tag: "交付标准化",
      problem: "不同项目都在重复写相似的分析、提案和总结，输出质量容易波动，新人交付质量更不稳定。",
      solution: "将常见任务拆成标准 Prompt 模板，包括信息采集、提案结构与输出格式要求，并配套使用说明与示例。",
      result: "让常见交付更容易标准化，新人上手时间缩短，团队内部协作更顺畅，客户反馈一致性更高。",
      metrics: ["模板 12 套", "新人上手 -60%", "交付一致性 +"],
    },
    {
      title: "小团队重复流程整理与自动化思路",
      tag: "流程优化",
      problem: "信息汇总、任务跟进和状态同步依赖手工处理，每周固定要花 6-8 小时在重复操作上，容易遗漏。",
      solution: "先梳理现有流程图，挑出 3 个最高频的节点，用 Zapier + AI 总结自动化掉，剩下的保留人工判断环节。",
      result: "把重复动作从"每次重做"改为"按步骤复用"，每周节省约 5 小时，遗漏率明显下降。",
      metrics: ["每周节省 5h", "遗漏率 -80%", "保留关键人工节点"],
    },
  ],

  qa: [
    {
      q: "你接什么类型的活？",
      a: "主要三类：AI 文案（小红书、视频脚本、产品文案等中文内容）、Prompt 工程（搭模板库、调优现有 Prompt）、轻量自动化（用 AI + 现成工具串起重复流程）。不接需要专门工程团队的大项目。",
    },
    {
      q: "一般多久能交付？",
      a: "看项目复杂度。小项目（一套 Prompt 模板、一份脚本结构）大概 2-3 天；中等项目（一个完整内容工作流）一周左右；自动化流程要看节点多少，通常 1-2 周。我会在沟通时给你明确的时间表。",
    },
    {
      q: "一个项目大概多少钱？",
      a: "按项目报价，不按小时算。轻量项目 1500-3000，中等 3000-8000，复杂的会拆成几个阶段报价。第一次合作可以从小项目开始试试。",
    },
    {
      q: "怎么保证 AI 输出质量？",
      a: "三层保障：第一层是结构化的 Prompt（角色、任务、格式、约束都写清楚）；第二层是人工抽检和迭代；第三层是把成功输出沉淀成示例，反过来强化 Prompt。我不追求"全自动"，关键节点该人工介入就介入。",
    },
    {
      q: "可以只买 Prompt 模板吗？",
      a: "可以。我有一些通用模板（小红书选题、视频脚本结构、用户访谈整理等），可以按单套售卖，附带使用说明和示例。不过更推荐定制版——因为你的业务语境我了解清楚后，模板会好用很多。",
    },
    {
      q: "需要先签合同吗？",
      a: "小项目我们用邮件 + 一份简单的报价确认书就可以开始；中等以上项目会签一份简单的服务协议，明确交付范围、时间和付款节点。我希望流程轻一点，但关键点都白纸黑字。",
    },
  ],

  playground: [
    {
      id: "copy",
      num: "01",
      name: "AI 文案生成器",
      desc: "从需求到成稿",
    },
    {
      id: "prompt",
      num: "02",
      name: "Prompt 优化器",
      desc: "把模糊提问变结构化指令",
    },
    {
      id: "flow",
      num: "03",
      name: "流程设计器",
      desc: "自动化工作流可视化",
    },
  ],

  commands: [
    { name: "跳转 · 工坊", hint: "playground", action: () => goSection("#playground") },
    { name: "跳转 · 流程", hint: "process", action: () => goSection("#process") },
    { name: "跳转 · 案例", hint: "works", action: () => goSection("#works") },
    { name: "跳转 · 关于", hint: "about", action: () => goSection("#about") },
    { name: "跳转 · 联系我", hint: "contact", action: () => goSection("#contact") },
    { name: "运行 Demo · 文案生成", hint: "demo copy", action: () => quickDemo("copy") },
    { name: "运行 Demo · Prompt 优化", hint: "demo prompt", action: () => quickDemo("prompt") },
    { name: "运行 Demo · 流程设计", hint: "demo flow", action: () => quickDemo("flow") },
    { name: "复制邮箱", hint: "copy email", action: () => copyEmail() },
    { name: "顶部", hint: "top", action: () => goSection("#top") },
  ],
};

/* ============================================================
   Demo templates
   ============================================================ */

const COPY_TYPES = [
  { value: "xhs", label: "小红书笔记" },
  { value: "video", label: "短视频脚本" },
  { value: "ad", label: "产品文案" },
  { value: "moments", label: "朋友圈" },
];

const COPY_TEMPLATES = {
  xhs: (topic) => ({
    promptTitle: "📝 生成中的 Prompt",
    prompt: `角色：小红书爆款内容创作者，擅长用真实经验打动同好。
主题：${topic}
结构：开头痛点 → 具体方法（3 点） → 引导互动
字数：180 字以内
语气：亲切、真诚，避免硬广和夸张话术`,
    output: `谁还没踩过${topic}的坑！😭

之前花了大半年我才搞清楚正确思路，现在分享给你们少走点弯路：

1️⃣ 先理清核心问题，不是越多技巧越好
2️⃣ 用真实场景替代抽象的描述
3️⃣ 留一个能让别人评论的点

试过这套思路之后，我对 ${topic} 的理解直接翻倍。

你们还有什么想问的，评论区告诉我～

#${topic} #实用分享 #干货笔记`,
  }),
  video: (topic) => ({
    promptTitle: "📝 生成中的 Prompt",
    prompt: `角色：短视频脚本撰稿人，擅长 60s 内的强钩子结构。
主题：${topic}
结构：3s 钩子 → 痛点共鸣 → 核心方法 → 行动号召
表达：口语化，每句不超过 15 字`,
    output: `[0-3s] 视觉：盯着镜头\n台词："关于 ${topic}，90% 的人第一步就错了。"\n\n[3-15s] 视觉：手写白板\n台词："我也走过这条弯路，浪费了大半年时间。"\n\n[15-40s] 视觉：分点字幕\n台词："其实只要做对这三件事——\n第一，把目标写下来；\n第二，每周复盘一次；\n第三，工具用最简单的。"\n\n[40-55s] 视觉：成果展示\n台词："这样下来，${topic} 真的会简单很多。"\n\n[55-60s] 行动号召\n台词："点关注，下期讲具体怎么做。"`,
  }),
  ad: (topic) => ({
    promptTitle: "📝 生成中的 Prompt",
    prompt: `角色：转化型产品文案策划。
产品/主题：${topic}
结构：场景痛点 → 产品解法 → 信任背书 → 行动号召
要求：不堆砌形容词，多用具体数字与对比`,
    output: `【你是不是也这样】\n买了 ${topic}，结果一周就闲置了？\n\n【为什么】\n大多数产品只解决"功能"，没解决"使用习惯"。\n\n【${topic} 不一样】\n· 上手 5 分钟，不用翻教程\n· 每天只需 10 分钟，效果可量化\n· 已被 2000+ 用户复购验证\n\n【现在开始】\n👇 点击下方链接，前 100 名享首月体验价`,
  }),
  moments: (topic) => ({
    promptTitle: "📝 生成中的 Prompt",
    prompt: `角色：真实生活分享者。
主题：${topic}
长度：80 字以内
要求：不像广告，像朋友随手发的，但能让人想问"在哪买"`,
    output: `最近迷上 ${topic}，有种"原来我之前都白忙活"的感觉。\n\n不是说它有多神奇，就是真的省事，腾出来的时间能干别的。\n\n推荐给同样不想在小事上耗的朋友。\n（具体怎么用，问我）`,
  }),
};

const PROMPT_PRESETS = ["帮我写个产品介绍", "整理一下用户反馈", "做一个方案"];

function optimizePrompt(input) {
  const text = (input || "").trim() || "帮我写点东西";
  return [
    {
      kind: "block",
      title: "📥 原始需求",
      body: text,
      variant: "muted",
    },
    {
      kind: "step",
      label: "识别需求类型",
    },
    {
      kind: "step",
      label: "补充上下文与约束",
    },
    {
      kind: "step",
      label: "结构化输出格式",
    },
    {
      kind: "block",
      title: "🎭 角色定位",
      body: `你是一位资深内容策划，擅长用结构化方法处理"${truncate(text, 18)}"这类需求。在动手前，会先确认目标受众、使用场景、可接受的输出长度。`,
    },
    {
      kind: "block",
      title: "🎯 任务拆解",
      body: `第一步：确认背景与目标受众；
第二步：列出 3-5 个关键信息点；
第三步：按目标场景选择合适的表达风格；
第四步：检查可执行性，确认能直接被使用。`,
    },
    {
      kind: "block",
      title: "📋 输出格式",
      body: `· 使用 Markdown 分段
· 每段不超过 3 句话
· 关键点用列表展示
· 末尾给出"还需要补充什么信息"的提示`,
    },
    {
      kind: "block",
      title: "⚠️ 约束条件",
      body: `· 不使用过度营销话术
· 不编造数据和案例
· 信息不足时，主动列出需要补充的内容
· 字数控制在 200-400 字`,
    },
    {
      kind: "block",
      title: "✅ 优化后的完整 Prompt",
      variant: "final",
      body: `你是一位资深内容策划，擅长用结构化方法处理"${truncate(text, 18)}"这类需求。

请按以下步骤思考并输出：
1. 先列出你对这个需求的理解（背景、目标受众、使用场景）
2. 列出 3-5 个关键信息点
3. 按合适的表达风格输出正文（Markdown 分段，每段不超过 3 句话，关键点用列表）
4. 最后说明：还需要哪些信息可以让输出更精准？

约束：不使用过度营销话术；不编造数据；字数 200-400。`,
    },
  ];
}

const FLOW_SCENARIOS = [
  { value: "content", icon: "📝", name: "内容定期产出", desc: "从选题到成稿，标准化产出流程" },
  { value: "leads", icon: "💬", name: "客户咨询整理", desc: "把零散咨询变成清晰服务记录" },
  { value: "report", icon: "📊", name: "数据汇总报告", desc: "定期生成简洁的业务复盘" },
];

const FLOW_DATA = {
  content: [
    { title: "选题输入", desc: "把行业关键词、热点话题、用户问题汇总到 Notion 数据库", tool: "Notion" },
    { title: "AI 选题筛选", desc: "用 Prompt 模板按标签和角度自动筛选高潜力选题", tool: "Prompt 模板 v2" },
    { title: "结构起草", desc: "AI 按既定结构生成 3 个版本草稿，标注差异点", tool: "Claude / GPT" },
    { title: "人工润色", desc: "保留个人语气，删除生硬表达，校对事实", tool: "人工 30min" },
    { title: "排期发布", desc: "同步到飞书日历，按发布节奏统一管理", tool: "飞书机器人" },
  ],
  leads: [
    { title: "咨询接入", desc: "邮件 / 微信咨询统一转发到一个邮箱", tool: "邮件转发" },
    { title: "AI 分类标签", desc: "按"项目类型 / 预算 / 紧急度"三维度自动打标签", tool: "Prompt 分类器" },
    { title: "结构化摘要", desc: "AI 生成 3 句话摘要 + 待回复要点", tool: "AI 摘要" },
    { title: "存入 CRM", desc: "自动新增到 Notion CRM，关联历史记录", tool: "Zapier" },
    { title: "提醒回复", desc: "未在 24h 内回复的，自动提醒", tool: "定时任务" },
  ],
  report: [
    { title: "数据收集", desc: "从飞书表格、Google Analytics 等源抓取关键数据", tool: "API / 脚本" },
    { title: "异常识别", desc: "AI 对比上周数据，标出显著变化的指标", tool: "Prompt 对比器" },
    { title: "归因分析", desc: "结合内容发布记录，AI 给出可能的归因猜想", tool: "AI 分析" },
    { title: "生成报告", desc: "按模板输出"指标 / 变化 / 可能原因 / 建议"四段式", tool: "周报模板" },
    { title: "推送复盘", desc: "周一早上 9 点自动推送到指定群", tool: "群机器人" },
  ],
};

/* ============================================================
   Utilities
   ============================================================ */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function truncate(text, n) {
  return text.length > n ? text.slice(0, n) + "…" : text;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeInto(node, text, speed = 18) {
  node.textContent = "";
  for (let i = 0; i < text.length; i++) {
    node.textContent += text[i];
    if (text[i] === "\n") await sleep(speed * 2);
    else await sleep(speed);
  }
}

function showToast(text) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = text;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add("is-show"));
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    toast.classList.remove("is-show");
    setTimeout(() => (toast.hidden = true), 280);
  }, 2200);
}

function goSection(hash) {
  const target = document.querySelector(hash);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(SITE.email);
    showToast(`已复制：${SITE.email}`);
    const feedback = $("#copy-feedback");
    if (feedback) feedback.textContent = `邮箱已复制：${SITE.email}`;
  } catch {
    showToast(`复制失败，请手动复制：${SITE.email}`);
  }
}

/* ============================================================
   Hero rotator
   ============================================================ */

function initHeroRotator() {
  const node = $("#hero-rotator");
  if (!node) return;
  let i = 0;
  setInterval(() => {
    i = (i + 1) % SITE.rotator.length;
    node.classList.add("is-swap");
    setTimeout(() => {
      node.textContent = SITE.rotator[i];
      node.classList.remove("is-swap");
    }, 250);
  }, 2800);
}

/* ============================================================
   Hero live demo cycling
   ============================================================ */

let heroDemoIdx = 0;
let heroDemoRunning = false;
let heroDemoTimer = null;

async function runHeroDemo() {
  if (heroDemoRunning) return;
  heroDemoRunning = true;

  const demo = SITE.heroDemos[heroDemoIdx];
  const promptEl = $("#hero-demo-prompt");
  const thinkingWrap = $("#hero-demo-thinking");
  const thinkingText = $("#hero-demo-thinking-text");
  const outputWrap = $("#hero-demo-output-line");
  const outputEl = $("#hero-demo-output");
  const counter = $("#hero-demo-counter");

  if (counter) counter.textContent = `${heroDemoIdx + 1} / ${SITE.heroDemos.length}`;

  outputWrap.hidden = true;
  thinkingWrap.hidden = true;
  outputEl.textContent = "";
  promptEl.textContent = "";

  await typeInto(promptEl, demo.prompt, 32);
  await sleep(280);

  thinkingWrap.hidden = false;
  for (const step of demo.thinking) {
    thinkingText.textContent = step;
    await sleep(700);
  }
  thinkingWrap.hidden = true;

  outputWrap.hidden = false;
  await typeInto(outputEl, demo.output, 14);

  heroDemoRunning = false;

  heroDemoTimer = setTimeout(() => {
    heroDemoIdx = (heroDemoIdx + 1) % SITE.heroDemos.length;
    runHeroDemo();
  }, 4500);
}

function initHeroDemo() {
  const nextBtn = $("#hero-demo-next");
  nextBtn?.addEventListener("click", () => {
    clearTimeout(heroDemoTimer);
    heroDemoRunning = false;
    heroDemoIdx = (heroDemoIdx + 1) % SITE.heroDemos.length;
    runHeroDemo();
  });
  runHeroDemo();
}

/* ============================================================
   Stats counter
   ============================================================ */

function renderStats() {
  const root = $("#stats-grid");
  if (!root) return;
  root.innerHTML = SITE.stats
    .map(
      (s) => `
      <div class="stat reveal">
        <div class="stat-num"><span data-count="${s.num}">0</span>${s.suffix}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `,
    )
    .join("");
}

function animateCounter(node) {
  const target = Number(node.dataset.count);
  if (!target) {
    node.textContent = "0";
    return;
  }
  const start = performance.now();
  const dur = 1200;
  function tick(now) {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    node.textContent = Math.round(target * eased).toString();
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ============================================================
   Playground
   ============================================================ */

let activeDemo = "copy";
let copyType = "xhs";
let flowScenario = "content";

function renderPlaygroundTabs() {
  const tabs = $("#playground-tabs");
  if (!tabs) return;
  tabs.innerHTML = SITE.playground
    .map(
      (p, i) => `
      <button class="playground-tab ${i === 0 ? "is-active" : ""}" data-demo="${p.id}" role="tab" aria-selected="${i === 0}">
        <span class="tab-num">${p.num}</span>
        <span class="tab-name">${p.name}</span>
        <span class="tab-desc">${p.desc}</span>
      </button>
    `,
    )
    .join("");

  tabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".playground-tab");
    if (!tab) return;
    activeDemo = tab.dataset.demo;
    $$(".playground-tab", tabs).forEach((t) => {
      const on = t === tab;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", String(on));
    });
    renderPlaygroundPanel();
  });
}

function renderPlaygroundPanel() {
  const stage = $("#playground-stage");
  if (!stage) return;
  if (activeDemo === "copy") stage.innerHTML = templateCopyDemo();
  else if (activeDemo === "prompt") stage.innerHTML = templatePromptDemo();
  else if (activeDemo === "flow") stage.innerHTML = templateFlowDemo();
  bindPlaygroundEvents();
}

function templateCopyDemo() {
  const chips = COPY_TYPES.map(
    (t) =>
      `<button class="demo-chip ${t.value === copyType ? "is-active" : ""}" data-copy-type="${t.value}">${t.label}</button>`,
  ).join("");
  return `
    <div class="demo-input">
      <div class="demo-field">
        <label class="demo-label">选择内容类型</label>
        <div class="demo-chips">${chips}</div>
      </div>
      <div class="demo-field">
        <label class="demo-label" for="copy-topic">主题或产品</label>
        <input class="demo-input-text" id="copy-topic" placeholder="比如：手冲咖啡入门、AI 写作课程..." />
      </div>
      <button class="btn btn-primary demo-run" id="copy-run">
        <span>▶ 生成示例</span>
      </button>
    </div>
    <div class="demo-output" id="copy-output">
      <div class="demo-output-placeholder">输入主题后，点击「生成示例」即可看到完整 Prompt 与输出。</div>
    </div>
  `;
}

function templatePromptDemo() {
  const presets = PROMPT_PRESETS.map(
    (p) => `<button class="demo-preset" data-preset="${p}">${p}</button>`,
  ).join("");
  return `
    <div class="demo-input">
      <div class="demo-field">
        <label class="demo-label" for="prompt-input">输入你的原始需求</label>
        <textarea class="demo-input-area" id="prompt-input" rows="4" placeholder="比如：帮我写个关于咖啡的东西..."></textarea>
      </div>
      <div class="demo-presets">
        <span class="preset-label">试试：</span>
        ${presets}
      </div>
      <button class="btn btn-primary demo-run" id="prompt-run">
        <span>▶ 优化 Prompt</span>
      </button>
    </div>
    <div class="demo-output" id="prompt-output">
      <div class="demo-output-placeholder">输入原始想法，看看它被结构化成可执行 Prompt 的过程。</div>
    </div>
  `;
}

function templateFlowDemo() {
  const cards = FLOW_SCENARIOS.map(
    (s) => `
      <button class="demo-card ${s.value === flowScenario ? "is-active" : ""}" data-flow="${s.value}">
        <span class="demo-card-icon" aria-hidden="true">${s.icon}</span>
        <span>
          <span class="demo-card-name">${s.name}</span>
          <span class="demo-card-desc">${s.desc}</span>
        </span>
      </button>
    `,
  ).join("");
  return `
    <div class="demo-input">
      <div class="demo-field">
        <label class="demo-label">选择业务场景</label>
        <div class="demo-cards">${cards}</div>
      </div>
      <button class="btn btn-primary demo-run" id="flow-run">
        <span>▶ 生成流程图</span>
      </button>
    </div>
    <div class="demo-output" id="flow-output">
      <div class="demo-output-placeholder">选定场景后，点击「生成流程图」看完整自动化路径。</div>
    </div>
  `;
}

function bindPlaygroundEvents() {
  if (activeDemo === "copy") {
    $$(".demo-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        copyType = chip.dataset.copyType;
        $$(".demo-chip").forEach((c) => c.classList.toggle("is-active", c === chip));
      });
    });
    $("#copy-run")?.addEventListener("click", runCopyDemo);
    $("#copy-topic")?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") runCopyDemo();
    });
  }
  if (activeDemo === "prompt") {
    $$(".demo-preset").forEach((p) => {
      p.addEventListener("click", () => {
        $("#prompt-input").value = p.dataset.preset;
      });
    });
    $("#prompt-run")?.addEventListener("click", runPromptDemo);
  }
  if (activeDemo === "flow") {
    $$(".demo-card").forEach((card) => {
      card.addEventListener("click", () => {
        flowScenario = card.dataset.flow;
        $$(".demo-card").forEach((c) => c.classList.toggle("is-active", c === card));
      });
    });
    $("#flow-run")?.addEventListener("click", runFlowDemo);
  }
}

/* ============================================================
   Demo runners
   ============================================================ */

async function runCopyDemo() {
  const topic = ($("#copy-topic")?.value || "").trim() || "手冲咖啡入门";
  const output = $("#copy-output");
  if (!output) return;
  output.innerHTML = "";

  const steps = ["识别内容类型", "构建 Prompt 模板", "生成示例"];
  for (const label of steps) {
    const step = makeStep(label);
    output.appendChild(step);
    await sleep(420);
    step.classList.add("is-done");
    step.querySelector(".output-step-icon").textContent = "✓";
  }

  const data = COPY_TEMPLATES[copyType](topic);

  const promptBlock = makeBlock("📝 自动构建的 Prompt", "", "is-prompt");
  output.appendChild(promptBlock);
  await typeInto(promptBlock.querySelector(".output-block-body"), data.prompt, 6);

  await sleep(280);

  const outBlock = makeBlock("✨ 生成的内容", "", "is-final");
  output.appendChild(outBlock);
  outBlock.querySelector(".output-block-title").appendChild(makeCopyButton(data.output));
  await typeInto(outBlock.querySelector(".output-block-body"), data.output, 10);
}

async function runPromptDemo() {
  const input = $("#prompt-input")?.value || "";
  const output = $("#prompt-output");
  if (!output) return;
  output.innerHTML = "";

  const items = optimizePrompt(input);

  for (const item of items) {
    if (item.kind === "step") {
      const step = makeStep(item.label);
      output.appendChild(step);
      await sleep(480);
      step.classList.add("is-done");
      step.querySelector(".output-step-icon").textContent = "✓";
    } else if (item.kind === "block") {
      let variant = "";
      if (item.variant === "muted") variant = "";
      if (item.variant === "final") variant = "is-final";
      const block = makeBlock(item.title, "", variant);
      output.appendChild(block);
      if (item.variant === "final") {
        block.querySelector(".output-block-title").appendChild(makeCopyButton(item.body));
      }
      await typeInto(block.querySelector(".output-block-body"), item.body, 8);
      await sleep(200);
    }
  }
}

async function runFlowDemo() {
  const output = $("#flow-output");
  if (!output) return;
  output.innerHTML = "";

  const scenario = FLOW_SCENARIOS.find((s) => s.value === flowScenario);
  const nodes = FLOW_DATA[flowScenario];

  const header = document.createElement("div");
  header.className = "output-step is-done";
  header.innerHTML = `<span class="output-step-icon">${scenario.icon}</span><span>已为「${scenario.name}」生成自动化流程</span>`;
  output.appendChild(header);

  const canvas = document.createElement("div");
  canvas.className = "flow-canvas";
  output.appendChild(canvas);

  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    const el = document.createElement("div");
    el.className = "flow-node";
    el.style.animationDelay = `${i * 0.15}s`;
    el.innerHTML = `
      <span class="flow-node-num">${i + 1}</span>
      <div class="flow-node-content">
        <div class="flow-node-title">${n.title}</div>
        <div class="flow-node-desc">${n.desc}</div>
        <span class="flow-node-tool">⚙ ${n.tool}</span>
      </div>
    `;
    canvas.appendChild(el);
    await sleep(180);
  }
}

function makeStep(label) {
  const div = document.createElement("div");
  div.className = "output-step";
  div.innerHTML = `<span class="output-step-icon">⋯</span><span>${label}</span>`;
  return div;
}

function makeBlock(title, body, variant = "") {
  const div = document.createElement("div");
  div.className = `output-block ${variant}`;
  div.innerHTML = `
    <div class="output-block-title">${title}</div>
    <div class="output-block-body">${body}</div>
  `;
  return div;
}

function makeCopyButton(text) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "output-copy";
  btn.textContent = "复制";
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = "✓ 已复制";
      showToast("已复制到剪贴板");
      setTimeout(() => (btn.textContent = "复制"), 1600);
    } catch {
      showToast("复制失败，请手动选中");
    }
  });
  return btn;
}

function quickDemo(id) {
  goSection("#playground");
  setTimeout(() => {
    const tab = document.querySelector(`.playground-tab[data-demo="${id}"]`);
    tab?.click();
    setTimeout(() => {
      if (id === "copy") runCopyDemo();
      else if (id === "prompt") runPromptDemo();
      else if (id === "flow") runFlowDemo();
    }, 380);
  }, 480);
}

/* ============================================================
   Process timeline
   ============================================================ */

function renderProcess() {
  const root = $("#process-timeline");
  if (!root) return;
  root.innerHTML = SITE.process
    .map(
      (p) => `
      <li class="process-step">
        <div class="process-step-marker">${p.step}</div>
        <div class="process-step-body">
          <h3 class="process-step-title">
            ${p.title}
            <span class="process-step-time">${p.time}</span>
          </h3>
          <p class="process-step-desc">${p.desc}</p>
          <div class="process-step-deliverables">
            ${p.deliverables.map((d) => `<span class="process-deliverable">${d}</span>`).join("")}
          </div>
        </div>
      </li>
    `,
    )
    .join("");
}

/* ============================================================
   Works
   ============================================================ */

function renderWorks() {
  const root = $("#works-list");
  if (!root) return;
  root.innerHTML = SITE.works
    .map(
      (w, i) => `
      <div class="work-item reveal" data-work="${i}">
        <button class="work-summary" type="button" aria-expanded="false">
          <span class="work-index">${String(i + 1).padStart(2, "0")}</span>
          <h3 class="work-title">${w.title}</h3>
          <span class="work-tag">${w.tag}</span>
          <span class="work-toggle" aria-hidden="true">+</span>
        </button>
        <div class="work-detail">
          <div class="work-detail-inner">
            <ol class="work-flow">
              <li class="work-step">
                <span class="work-step-label">问题</span>
                <span class="work-step-text">${w.problem}</span>
              </li>
              <li class="work-step">
                <span class="work-step-label">方案</span>
                <span class="work-step-text">${w.solution}</span>
              </li>
              <li class="work-step">
                <span class="work-step-label">结果</span>
                <span class="work-step-text">${w.result}</span>
              </li>
            </ol>
            <div class="work-metrics">
              ${w.metrics.map((m) => `<span class="work-metric">${m}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `,
    )
    .join("");

  $$(".work-summary").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".work-item");
      const open = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });
}

/* ============================================================
   About chat Q&A
   ============================================================ */

function renderChat() {
  const win = $("#chat-window");
  const sug = $("#chat-suggestions");
  if (!win || !sug) return;

  addBotMessage(
    "你好👋 我是卷心菜。下面是几个常见问题，点一下我会直接回答你。你也可以直接发邮件给我：" +
      SITE.email,
  );

  sug.innerHTML = SITE.qa
    .map(
      (item, i) => `<button class="chat-suggestion" data-qa="${i}">${item.q}</button>`,
    )
    .join("");

  sug.addEventListener("click", async (e) => {
    const btn = e.target.closest(".chat-suggestion");
    if (!btn || btn.classList.contains("is-used")) return;
    const idx = Number(btn.dataset.qa);
    const item = SITE.qa[idx];
    btn.classList.add("is-used");
    addUserMessage(item.q);

    const typing = addTypingMessage();
    await sleep(700);
    typing.remove();
    addBotMessage(item.a);
  });
}

function addUserMessage(text) {
  const win = $("#chat-window");
  const b = document.createElement("div");
  b.className = "chat-bubble is-user";
  b.textContent = text;
  win.appendChild(b);
  win.scrollTop = win.scrollHeight;
}

function addBotMessage(text) {
  const win = $("#chat-window");
  const b = document.createElement("div");
  b.className = "chat-bubble is-bot";
  b.textContent = text;
  win.appendChild(b);
  win.scrollTop = win.scrollHeight;
}

function addTypingMessage() {
  const win = $("#chat-window");
  const b = document.createElement("div");
  b.className = "chat-bubble is-bot is-typing";
  b.innerHTML = `<span></span><span></span><span></span>`;
  win.appendChild(b);
  win.scrollTop = win.scrollHeight;
  return b;
}

/* ============================================================
   Hero tags + brand fill
   ============================================================ */

function fillBaseContent() {
  $("#brand-name").textContent = SITE.name;
  const tags = $("#hero-tags");
  if (tags) {
    tags.innerHTML = SITE.heroTags
      .map((t) => `<li class="badge">${t}</li>`)
      .join("");
  }
  $("#contact-email-link").href = `mailto:${SITE.email}`;
  $("#contact-email-text").href = `mailto:${SITE.email}`;
  $("#contact-email-text").textContent = SITE.email;
}

/* ============================================================
   Cursor glow + scroll progress
   ============================================================ */

function initCursorGlow() {
  if (window.matchMedia("(max-width: 1199px)").matches) return;
  document.body.classList.add("cursor-ready");
  window.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--mx", `${e.clientX}px`);
    document.body.style.setProperty("--my", `${e.clientY}px`);
  });
}

function initScrollProgress() {
  const bar = $("#scroll-progress");
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const scroll = h.scrollTop;
    const total = h.scrollHeight - h.clientHeight;
    const pct = total > 0 ? (scroll / total) * 100 : 0;
    document.documentElement.style.setProperty("--progress", `${pct}%`);
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ============================================================
   Magnetic buttons
   ============================================================ */

function initMagnetic() {
  if (window.matchMedia("(max-width: 1199px)").matches) return;
  $$(".magnetic").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

/* ============================================================
   Reveal on scroll + section nav
   ============================================================ */

function initReveal() {
  const els = $$(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");

        const counter = entry.target.querySelector("[data-count]");
        if (counter && !counter.dataset.done) {
          counter.dataset.done = "1";
          animateCounter(counter);
        }

        if (entry.target.id === "process-timeline") {
          entry.target.classList.add("in-view");
        }

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );
  els.forEach((el) => observer.observe(el));

  // animate process timeline
  const timeline = $("#process-timeline");
  if (timeline) {
    const obs2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            timeline.classList.add("in-view");
            obs2.unobserve(timeline);
          }
        });
      },
      { threshold: 0.1 },
    );
    obs2.observe(timeline);
  }

  // animate stats counters when stat blocks appear
  const statObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const c = e.target.querySelector("[data-count]");
        if (c && !c.dataset.done) {
          c.dataset.done = "1";
          animateCounter(c);
        }
        statObs.unobserve(e.target);
      });
    },
    { threshold: 0.3 },
  );
  $$(".stat").forEach((s) => statObs.observe(s));
}

function initActiveSection() {
  const links = $$(".nav-links a[data-section]");
  const sections = links
    .map((a) => document.getElementById(a.dataset.section))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.id;
          links.forEach((l) =>
            l.classList.toggle("is-active", l.dataset.section === id),
          );
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );
  sections.forEach((s) => observer.observe(s));
}

/* ============================================================
   Nav state
   ============================================================ */

function initNavState() {
  const nav = $(".site-nav");
  const toggle = $(".nav-toggle");
  const menu = $(".nav-links");
  const menuLinks = menu ? $$("a", menu) : [];

  window.addEventListener(
    "scroll",
    () => {
      nav?.classList.toggle("is-scrolled", window.scrollY > 12);
    },
    { passive: true },
  );

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    });
  });
}

/* ============================================================
   Copy email buttons
   ============================================================ */

function initCopyEmail() {
  $("#contact-copy-btn")?.addEventListener("click", copyEmail);
}

/* ============================================================
   Command palette
   ============================================================ */

let cmdActive = 0;
let cmdFiltered = [];

function initCommandPalette() {
  const palette = $("#command-palette");
  const input = $("#command-input");
  const list = $("#command-list");
  const openBtn = $("#cmd-open");

  function open() {
    palette.classList.add("is-open");
    palette.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-cmd-open");
    input.value = "";
    renderCommands("");
    setTimeout(() => input.focus(), 50);
  }

  function close() {
    palette.classList.remove("is-open");
    palette.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-cmd-open");
  }

  function renderCommands(q) {
    const query = q.toLowerCase().trim();
    cmdFiltered = SITE.commands.filter((c) => {
      if (!query) return true;
      return (
        c.name.toLowerCase().includes(query) ||
        c.hint.toLowerCase().includes(query)
      );
    });
    cmdActive = 0;
    if (cmdFiltered.length === 0) {
      list.innerHTML = `<li class="command-empty">没有匹配的指令</li>`;
      return;
    }
    list.innerHTML = cmdFiltered
      .map(
        (c, i) => `
        <li class="command-item ${i === 0 ? "is-active" : ""}" data-idx="${i}">
          <span class="command-item-icon" aria-hidden="true">›</span>
          <span class="command-item-name">${c.name}</span>
          <span class="command-item-hint">${c.hint}</span>
        </li>
      `,
      )
      .join("");
    $$(".command-item", list).forEach((item) => {
      item.addEventListener("click", () => {
        execCmd(Number(item.dataset.idx));
      });
      item.addEventListener("mouseenter", () => {
        setActive(Number(item.dataset.idx));
      });
    });
  }

  function setActive(i) {
    cmdActive = i;
    $$(".command-item", list).forEach((it, idx) =>
      it.classList.toggle("is-active", idx === i),
    );
  }

  function execCmd(i) {
    const c = cmdFiltered[i];
    if (!c) return;
    close();
    setTimeout(() => c.action(), 80);
  }

  input?.addEventListener("input", (e) => renderCommands(e.target.value));

  input?.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(Math.min(cmdActive + 1, cmdFiltered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(Math.max(cmdActive - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      execCmd(cmdActive);
    } else if (e.key === "Escape") {
      close();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "/" &&
      !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)
    ) {
      e.preventDefault();
      open();
    } else if (e.key === "Escape" && palette.classList.contains("is-open")) {
      close();
    }
  });

  palette
    .querySelector("[data-cmd-close]")
    ?.addEventListener("click", close);
  openBtn?.addEventListener("click", open);
}

/* ============================================================
   Boot
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  fillBaseContent();
  renderStats();
  renderPlaygroundTabs();
  renderPlaygroundPanel();
  renderProcess();
  renderWorks();
  renderChat();

  initHeroRotator();
  initHeroDemo();
  initReveal();
  initActiveSection();
  initNavState();
  initCopyEmail();
  initCursorGlow();
  initScrollProgress();
  initMagnetic();
  initCommandPalette();
});
