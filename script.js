const SITE_CONTENT = {
  name: "卷心菜",
  email: "1493575306@qq.com",
  about:
    "卷心菜，专注用 AI 帮个人品牌、小团队和内容业务提升效率，提供从内容生成、Prompt 设计到流程自动化的轻量解决方案。当前站点中的简介与案例为简易草案版本，后续可替换成你的真实经历、服务边界和项目成果。",
  heroTags: ["AI文案", "Prompt工程", "自动化流程", "中文内容工作流"],
  services: [
    {
      topline: "Service 01",
      title: "AI 文案支持",
      copy:
        "围绕你的产品、个人品牌或内容业务，整理更高效的选题、结构、脚本和转化文案方案。",
      bullets: [
        "适合内容产出节奏慢、方向不稳定的项目",
        "可以输出选题框架、脚本模板、文案结构",
        "重点是提升稳定产出，而不是一次性爆款",
      ],
    },
    {
      topline: "Service 02",
      title: "Prompt 工程",
      copy:
        "把零散提问方式整理成可复用 Prompt 模板，让 AI 的输出更稳定、更接近你的实际交付需求。",
      bullets: [
        "适合经常重复提需求、但结果不稳定的场景",
        "可整理角色设定、任务拆解、输出格式模板",
        "方便后续交给团队成员直接复用",
      ],
    },
    {
      topline: "Service 03",
      title: "自动化解决方案",
      copy:
        "把重复的信息收集、内容整理、任务流转做成更轻量的自动化路径，减少手工消耗。",
      bullets: [
        "适合重复性高、手工整理成本大的团队",
        "先从最常见的流程开始，而不是一上来就做复杂系统",
        "强调省时、省心和后续维护成本可控",
      ],
    },
  ],
  skills: [
    {
      title: "需求拆解与任务结构化",
      items: [
        "把模糊需求整理成清晰目标、输入条件和可交付结果",
        "帮助客户先理清“为什么做”和“做到什么程度算完成”",
      ],
    },
    {
      title: "Prompt 体系设计",
      items: [
        "将角色、步骤、格式、约束整合成稳定可复用的 Prompt 模板",
        "适合内容工作流、提案输出、服务交付等场景",
      ],
    },
    {
      title: "AI 文案与内容工作流",
      items: [
        "支持选题生成、结构起草、脚本拓展、文案润色与版本迭代",
        "强调中文表达质量与业务语境，而不是单纯堆砌关键词",
      ],
    },
    {
      title: "轻量自动化思路",
      items: [
        "梳理重复动作和信息流转方式，找出适合自动化的节点",
        "优先选择低门槛、可维护、能快速见效的方式推进",
      ],
    },
  ],
  works: [
    {
      title: "知识博主 AI 选题与脚本工作流",
      tag: "内容效率",
      flow: [
        {
          label: "问题",
          text: "选题、脚本和发布准备分散在多个文档里，导致内容产出节奏不稳定。",
        },
        {
          label: "方案",
          text: "整理选题 Prompt、脚本结构模板与版本迭代步骤，形成统一的内容工作流。",
        },
        {
          label: "结果",
          text: "把原本零散的准备过程变成可复用流程，后续更容易持续产出内容。",
        },
      ],
    },
    {
      title: "咨询业务 Prompt 模板库草案",
      tag: "交付标准化",
      flow: [
        {
          label: "问题",
          text: "不同项目都在重复写相似的分析、提案和总结，输出质量容易波动。",
        },
        {
          label: "方案",
          text: "将常见任务拆成标准 Prompt 模板，包括信息采集、提案结构与输出格式要求。",
        },
        {
          label: "结果",
          text: "让常见交付更容易标准化，也方便后续团队内部协作和复用。",
        },
      ],
    },
    {
      title: "小团队重复流程整理与自动化思路",
      tag: "流程优化",
      flow: [
        {
          label: "问题",
          text: "信息汇总、任务跟进和状态同步依赖手工处理，容易遗漏与重复。",
        },
        {
          label: "方案",
          text: "先梳理现有流程，再挑出适合自动化的几个高频节点，降低人工负担。",
        },
        {
          label: "结果",
          text: "把重复动作从“每次重做”改为“按步骤复用”，便于后续继续扩展。",
        },
      ],
    },
  ],
};

function createBadge(text) {
  const item = document.createElement("li");
  item.className = "badge";
  item.textContent = text;
  return item;
}

function createServiceCard(service) {
  const card = document.createElement("article");
  card.className = "card reveal";

  const listItems = service.bullets
    .map((bullet) => `<li>${bullet}</li>`)
    .join("");

  card.innerHTML = `
    <span class="card-topline">${service.topline}</span>
    <h3 class="card-title">${service.title}</h3>
    <p class="card-copy">${service.copy}</p>
    <ul class="card-list">${listItems}</ul>
  `;

  return card;
}

function createSkillCard(skill) {
  const card = document.createElement("article");
  card.className = "card reveal";

  const items = skill.items
    .map((item) => `<p class="skill-item">${item}</p>`)
    .join("");

  card.innerHTML = `
    <h3 class="skills-card-title">${skill.title}</h3>
    ${items}
  `;

  return card;
}

function createWorkCard(work) {
  const card = document.createElement("article");
  card.className = "card reveal";

  const steps = work.flow
    .map(
      (step) => `
        <li class="work-step">
          <span class="work-step-label">${step.label}</span>
          <span>${step.text}</span>
        </li>
      `
    )
    .join("");

  card.innerHTML = `
    <div class="work-card-head">
      <h3 class="card-title">${work.title}</h3>
      <span class="work-tag">${work.tag}</span>
    </div>
    <ol class="work-flow">${steps}</ol>
  `;

  return card;
}

function fillContent() {
  const brandName = document.querySelector("#brand-name");
  const aboutText = document.querySelector("#about-text");
  const heroTags = document.querySelector("#hero-tags");
  const servicesGrid = document.querySelector("#services-grid");
  const skillsGrid = document.querySelector("#skills-grid");
  const worksGrid = document.querySelector("#works-grid");
  const heroEmail = document.querySelector("#hero-email");
  const contactEmailLink = document.querySelector("#contact-email-link");
  const contactEmailText = document.querySelector("#contact-email-text");

  if (brandName) brandName.textContent = SITE_CONTENT.name;
  if (aboutText) aboutText.textContent = SITE_CONTENT.about;
  if (heroEmail) heroEmail.textContent = SITE_CONTENT.email;

  if (contactEmailLink) {
    contactEmailLink.href = `mailto:${SITE_CONTENT.email}`;
  }

  if (contactEmailText) {
    contactEmailText.href = `mailto:${SITE_CONTENT.email}`;
    contactEmailText.textContent = SITE_CONTENT.email;
  }

  SITE_CONTENT.heroTags.forEach((tag) => {
    heroTags?.appendChild(createBadge(tag));
  });

  SITE_CONTENT.services.forEach((service) => {
    servicesGrid?.appendChild(createServiceCard(service));
  });

  SITE_CONTENT.skills.forEach((skill) => {
    skillsGrid?.appendChild(createSkillCard(skill));
  });

  SITE_CONTENT.works.forEach((work) => {
    worksGrid?.appendChild(createWorkCard(work));
  });
}

function initScrollReveal(selector = ".reveal", activeClass = "in-view") {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(activeClass);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  elements.forEach((element) => observer.observe(element));
}

function initNavState() {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");
  const menuLinks = menu?.querySelectorAll("a") ?? [];

  window.addEventListener(
    "scroll",
    () => {
      nav?.classList.toggle("is-scrolled", window.scrollY > 12);
    },
    { passive: true }
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

function initCopyEmail() {
  const feedback = document.querySelector("#copy-feedback");
  const buttons = [
    document.querySelector("#copy-email-btn"),
    document.querySelector("#contact-copy-btn"),
  ].filter(Boolean);

  const setFeedback = (text) => {
    if (feedback) feedback.textContent = text;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(SITE_CONTENT.email);
        setFeedback(`邮箱已复制：${SITE_CONTENT.email}`);
      } catch (error) {
        setFeedback(`复制失败，请手动复制：${SITE_CONTENT.email}`);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fillContent();
  initScrollReveal();
  initNavState();
  initCopyEmail();
});
