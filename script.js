// Simple translation + language toggle

const translations = {
  en: {
    "nav.overview": "Overview",
    "nav.services": "Services",
    "nav.creators": "Creators",
    "nav.contact": "Contact",
    "nav.book": "Book a consultation",

    "hero.eyebrow": "MARKETING · CREATORS · BRAND CREATION",
    "hero.title": "Creator-led marketing built for European growth",
    "hero.lead":
      "ONDA is a marketing and brand studio specialising in digital campaigns, social content, creator partnerships and community-driven retail experiences. We help brands land in Europe with the right creators and channels.",
    "hero.btn_primary": "Talk to ONDA",
    "hero.btn_secondary": "See our services",
    "hero.meta1_title": "What we do",
    "hero.meta1_body": "Strategy, campaigns, content and brand creation.",
    "hero.meta2_title": "How we work",
    "hero.meta2_body": "Lean, senior team – embedded with your brand.",
    "hero.aside_tag": "Built around creators",
    "hero.aside_li1": "Localised strategies for key European markets.",
    "hero.aside_li2": "Creator programmes that feel natural for both sides.",
    "hero.aside_li3":
      "Clear measurement and learning loops for every launch.",

    "services.kicker": "Service overview",
    "services.title": "From strategy to creator programmes and retail.",
    "services.subtitle":
      "We work across marketing, advertising and brand creation – with modular services that can be combined depending on your stage and needs.",

    "services.s1_kicker": "01 · Strategy",
    "services.s1_title": "Positioning & go-to-market",
    "services.s1_body":
      "Clarify what you stand for, who you serve and how you compete in Europe.",
    "services.s1_li1": "Brand positioning and narrative frameworks",
    "services.s1_li2": "Go-to-market and European entry strategy",
    "services.s1_li3": "Channel, audience and category mapping",

    "services.s2_kicker": "02 · Campaigns & content",
    "services.s2_title": "Digital marketing & launch campaigns",
    "services.s2_body":
      "From concept to reporting, we orchestrate campaigns across social, paid and CRM.",
    "services.s2_li1": "Campaign concepts and creative territories",
    "services.s2_li2": "Always-on and launch campaigns for social & paid",
    "services.s2_li3": "Measurement frameworks and reporting",

    "services.s3_kicker": "03 · Creators & brands",
    "services.s3_title": "Creator programmes & brand creation",
    "services.s3_body":
      "Sustainable, long-term relationships with creators plus community-led brands.",
    "services.s3_li1": "Creator mapping and outreach in priority markets",
    "services.s3_li2": "Evergreen programmes and launch sprints",
    "services.s3_li3": "Proprietary and private-label brand development",

    "creators.kicker": "Creators & communities",
    "creators.title": "Beyond reach, towards real relationships.",
    "creators.p1":
      "We map the creator landscape around your brand: who already talks about your category, who your audience trusts, and where culture is moving.",
    "creators.p2":
      "From there, we design partnerships that feel natural for both creator and brand – with clear expectations, fair terms and room for creative input.",
    "creators.p3":
      "We treat creators as strategic partners, not just media inventory. That means listening, co-creating and sharing what we learn.",
    "creators.p4":
      "The result is content that feels genuine, performs better and can support your brand for years rather than weeks.",

    "contact.kicker": "Contact",
    "contact.title": "Planning a launch or expansion in Europe?",
    "contact.body":
      "Share a few lines about your brand, markets and timing. We’ll respond with a focused view on how ONDA can support – or suggest another path if we’re not the right partner.",
    "contact.btn": "Email ONDA",
    
    // nav top
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.channels": "Channels",
    "nav.industries": "Industries",
    "nav.contact": "Contact",
    
    // services submenu
    "nav.services_content": "TikTok content & storytelling",
    "nav.services_ads": "TikTok performance ads",
    "nav.services_tiktok_account": "TikTok account management",
    "nav.services_amazon": "Amazon & marketplace operations",
    
    // channels submenu
    "nav.channel_tiktok": "TikTok",
    "nav.channel_amazon": "Amazon",
    "nav.channel_d2c": "Direct-to-consumer (D2C)",
    "nav.channel_shopapotheke": "ShopApotheke",
    "nav.channel_walmart": "Walmart",
    
    // industries submenu
    "nav.ind_beauty": "Beauty",
    "nav.ind_skincare": "Skincare",
    "nav.ind_fashion": "Fashion & lifestyle",
    "nav.ind_supplements": "Supplements & wellness",

    "footer.copy": "© ONDA Limited. All rights reserved."
  },

  zh: {
    "nav.overview": "概览",
    "nav.services": "服务",
    "nav.creators": "创作者",
    "nav.contact": "联系",
    "nav.book": "预约咨询",

    "hero.eyebrow": "营销 · 创作者 · 品牌打造",
    "hero.title": "以创作者为核心的营销，专为进入欧洲市场的品牌",
    "hero.lead":
      "ONDA 是一家专注于数字营销与品牌打造的工作室，提供数字广告活动、社交内容制作、创作者合作以及以社区为核心的零售体验，帮助品牌通过合适的创作者和渠道进入欧洲。",
    "hero.btn_primary": "与 ONDA 沟通",
    "hero.btn_secondary": "查看服务",
    "hero.meta1_title": "我们做什么",
    "hero.meta1_body": "品牌战略、整合营销、内容与品牌打造。",
    "hero.meta2_title": "我们的方式",
    "hero.meta2_body": "精干资深团队，可嵌入您的品牌团队。",
    "hero.aside_tag": "围绕创作者展开",
    "hero.aside_li1": "针对重点欧洲市场制定本地化策略。",
    "hero.aside_li2": "让品牌与创作者双方都自然舒适的合作形式。",
    "hero.aside_li3": "每一次上线都配套清晰的衡量与复盘机制。",

    "services.kicker": "服务概览",
    "services.title": "从战略到创作者项目与零售体验。",
    "services.subtitle":
      "我们覆盖营销、广告与品牌打造，不同模块可以独立使用，也可以根据发展阶段组合成一套体系。",

    "services.s1_kicker": "01 · 战略",
    "services.s1_title": "定位与进入欧洲市场策略",
    "services.s1_body":
      "帮助你明确品牌价值、目标受众以及在欧洲的竞争方式。",
    "services.s1_li1": "品牌定位与叙事框架",
    "services.s1_li2": "欧洲市场进入与优先级策略",
    "services.s1_li3": "渠道、受众与品类分析",

    "services.s2_kicker": "02 · 活动与内容",
    "services.s2_title": "数字营销与上线活动",
    "services.s2_body":
      "从创意到复盘，统筹社交媒体、付费流量与 CRM。",
    "services.s2_li1": "活动创意方向与核心概念",
    "services.s2_li2": "社交与付费渠道的整合活动",
    "services.s2_li3": "衡量指标设计与报告机制",

    "services.s3_kicker": "03 · 创作者与品牌",
    "services.s3_title": "创作者项目与品牌孵化",
    "services.s3_body":
      "搭建可持续的创作者合作关系，并孵化社区驱动的品牌。",
    "services.s3_li1": "按品类与市场筛选与联络创作者",
    "services.s3_li2": "短期冲刺与长期创作者项目设计",
    "services.s3_li3": "自有及联名品牌的概念与落地",

    "creators.kicker": "创作者与社区",
    "creators.title": "不止曝光，更重真实关系。",
    "creators.p1":
      "我们分析与你品牌相关的创作者生态：谁在讨论你的品类，谁真正赢得了目标人群的信任，以及文化趋势的走向。",
    "creators.p2":
      "在此基础上，设计对品牌和创作者都自然合理的合作形式，制定清晰预期、合理报酬，并留出创作空间。",
    "creators.p3":
      "我们把创作者视作策略伙伴，而不仅是投放渠道，这意味着共同思考、共同创作与共享经验。",
    "creators.p4":
      "由此产生的内容更真实、更有效，也能在更长时间里持续支撑品牌。",

    "contact.kicker": "联系 ONDA",
    "contact.title": "正在规划进入或扩展欧洲市场？",
    "contact.body":
      "简单介绍一下你的品牌、目前市场与时间规划，我们会给出 ONDA 可以提供支持的清晰思路。如果并不匹配，也会提出其他建议。",
    "contact.btn": "发送邮件给 ONDA",

    "nav.home": "首页",
    "nav.services": "服务",
    "nav.channels": "渠道",
    "nav.industries": "行业",
    "nav.contact": "联系",
    
    "nav.services_content": "TikTok 内容与故事",
    "nav.services_ads": "TikTok 效果广告",
    "nav.services_tiktok_account": "TikTok 账号运营",
    "nav.services_amazon": "亚马逊与电商运营",
    
    "nav.channel_tiktok": "TikTok",
    "nav.channel_amazon": "亚马逊",
    "nav.channel_d2c": "D2C 自营官网",
    "nav.channel_shopapotheke": "ShopApotheke",
    "nav.channel_walmart": "Walmart",
    
    "nav.ind_beauty": "美妆",
    "nav.ind_skincare": "护肤",
    "nav.ind_fashion": "时尚与生活方式",
    "nav.ind_supplements": "营养与健康",

    "footer.copy": "© ONDA Limited. 保留所有权利。"
  }
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value =
      (dict && Object.prototype.hasOwnProperty.call(dict, key) && dict[key]) ||
      translations.en[key] ||
      "";
    el.textContent = value;
  });

  document.querySelectorAll(".nav-lang").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  localStorage.setItem("onda_lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("onda_lang") || "en";
  applyLanguage(saved);

  document.querySelectorAll(".nav-lang").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.lang);
    });
  });
});

// Reveal hero copy after user starts scrolling a little
(function () {
  const heroCopy = document.querySelector(".hero-copy");
  if (!heroCopy) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      heroCopy.classList.add("hero-copy-visible");
      window.removeEventListener("scroll", onScroll);
    }
  };

  // If user reloads mid-page, show immediately
  if (window.scrollY > 30) {
    heroCopy.classList.add("hero-copy-visible");
  } else {
    window.addEventListener("scroll", onScroll);
  }
})();
