export type Lang = "en" | "zh";

type Messages = Record<string, string>;

export const translations: Record<Lang, Messages> = {
  en: {
    // NAV
    "nav.services": "Services",
    "nav.about": "About",
    "nav.creators": "Creators",
    "nav.bookConsultation": "Book a consultation",
    "nav.brandCreatorsNewMarkets": "Brands · Creators · New Markets",

    // HERO
    "hero.title":
      "Where brands meet the right creators to grow in Europe.",
    "hero.body":
      "ONDA is a marketing and brand studio specialising in digital campaigns, content production, influencer partnerships and community-driven retail experiences. We connect global brands with local creators and audiences.",
    "hero.schedule": "Schedule a consultation",
    "hero.exploreServices": "Explore our services",
    "hero.whatWeDo": "WHAT WE DO",
    "hero.whatWeDoBody":
      "Strategy, content, campaigns & brand build.",
    "hero.howWeWork": "HOW WE WORK",
    "hero.howWeWorkBody":
      "Lean, senior team · creator-first.",

    // SIDE CARD
    "side.matchmaking": "Creator & brand matchmaking",
    "side.localFirstTitle": "Local-first strategy.",
    "side.localFirstBody":
      "We map the creator, culture and retail landscape for your category, then design campaigns that feel native to each European market.",
    "side.pill.influencers": "Influencers & ambassadors",
    "side.pill.communities": "Creators with real communities",
    "side.pill.retail": "Retail & pop-up partners",
    "side.pill.experts": "Category experts & tastemakers",

    // CREATORS SECTION (homepage)
    "creators.sectionLabel": "Creators & Communities",
    "creators.title": "Beyond impressions, into relationships",
    "creators.p1":
      "We treat creators as long-term partners, not just media placements. Our work focuses on relevance, fit and credibility – on both sides.",
    "creators.p2":
      "We help brands find creators whose audience, values and aesthetic truly align with what they stand for. That might be a niche specialist with deep trust, or a wider-reach profile who can anchor a launch.",
    "creators.p3":
      "Once the match is right, we support briefing, content direction, workflow and long-term relationship building – so collaborations feel smooth and sustainable for everyone involved.",
    "creators.programsLabel": "Creator programs",
    "creators.programsTitle":
      "From one-off posts to owned communities",
    "creators.programsBody":
      "We design creator programs that can start lean and scale over time:",
    "creators.bullet.mapping":
      "Creator & influencer mapping for priority markets",
    "creators.bullet.story":
      "Campaign concepts & storytelling frameworks",
    "creators.bullet.hybrid":
      "Hybrid campaigns: digital + retail + product",

    // SERVICES SECTION (homepage)
    "services.sectionLabel": "What we offer",
    "services.sectionTitle": "Services designed for modern brands",
    "services.sectionBody":
      "From first market entry to ongoing growth, we blend strategy, creative and execution – with a strong focus on creator-led initiatives.",
    "services.viewAll": "View all services",

    "services.card.strategy": "Strategy & Positioning",
    "services.card.strategyBody":
      "Market analysis, brand positioning, go-to-market frameworks and competitive landscape mapping.",
    "services.card.content": "Content & Campaigns",
    "services.card.contentBody":
      "End-to-end campaign development from concept through production, launch and performance tracking.",
    "services.card.partnerships": "Creator Partnerships",
    "services.card.partnershipsBody":
      "Matchmaking, contract negotiation, briefing, content direction and long-term relationship management.",
    "services.card.community": "Community Building",
    "services.card.communityBody":
      "Building engaged communities around your brand through events, ambassador programs and digital spaces.",
    "services.card.retail": "Retail Activations",
    "services.card.retailBody":
      "Pop-up stores, retail partnerships, in-store experiences and community-driven commerce.",
    "services.card.expansion": "European Expansion",
    "services.card.expansionBody":
      "Local market entry strategy, partnerships, operations and growth across European markets.",

    // SERVICES PAGE
    "servicesPage.label": "Our Services",
    "servicesPage.title": "Everything you need to grow in Europe.",
    "servicesPage.subtitle": "We blend strategy, creative and execution with a focus on creator-led marketing and community-driven growth.",

    // ABOUT PAGE
    "about.label": "About ONDA",
    "about.title": "Marketing, brand creation & creator strategy under one roof.",
    "about.subtitle": "ONDA specialises in helping brands enter, grow and stay relevant in the European market – with a strong focus on creator-led marketing and community-driven retail.",

    // CONTACT PAGE
    "contact.label": "Get in touch",
    "contact.title": "Let's talk about your project.",
    "contact.subtitle": "Ready to grow your brand in Europe? Book a consultation to discuss your goals and how we can help.",

    // PRIVACY PAGE
    "privacy.label": "Legal",
    "privacy.title": "Privacy Policy",
    "privacy.intro": "This page explains how ONDA uses and protects the personal data you share with us, in particular through the consultation form.",
    "privacy.whoWeAre": "Who we are",
    "privacy.whoWeAreBody": "ONDA is a marketing and brand studio helping global brands work with creators and communities in Europe. You can contact us at",
    "privacy.whatWeCollect": "What data we collect",
    "privacy.whatWeCollectIntro": "When you submit the consultation form, we collect:",
    "privacy.collect.role": "Your role (brand or creator)",
    "privacy.collect.name": "Your name and email address",
    "privacy.collect.company": "Your company / brand / channel name (if provided)",
    "privacy.collect.message": "The message you send us about your needs, category and markets",
    "privacy.howWeUse": "How we use your data",
    "privacy.howWeUseIntro": "We use this information only to:",
    "privacy.use.review": "Review your enquiry",
    "privacy.use.contact": "Contact you about potential collaboration or services",
    "privacy.noSell": "We do not sell your data or share it with third parties for their own marketing purposes.",
    "privacy.legalBasis": "Legal basis",
    "privacy.legalBasisBody": "Our legal basis for processing your personal data is",
    "privacy.legitimateInterest": "legitimate interest",
    "privacy.legalBasisEnd": "in responding to business enquiries and, where applicable, steps taken at your request prior to entering into a contract.",
    "privacy.retention": "How long we keep your data",
    "privacy.retentionBody": "We keep your data for as long as it is needed to handle your enquiry and any follow-up conversation. If you ask us to delete your data, we will do so unless we need to keep it for legal or compliance reasons.",
    "privacy.rights": "Your rights",
    "privacy.rightsBody": "Subject to applicable data protection law, you may have the right to access, correct or delete your personal data, and to object to or restrict certain forms of processing.",
    "privacy.rightsContact": "To exercise these rights, please email us at",
    "privacy.updates": "Updates",
    "privacy.updatesBody": "We may update this Privacy Policy from time to time. The latest version will always be available on this page.",
    "privacy.backHome": "← Back to home",
    "privacy.disclaimer": "This Privacy Policy is for general information only and does not constitute legal advice. Please consult a qualified lawyer to review it for your specific situation and jurisdiction.",

    // CONSULTATION MODAL
    "modal.title": "Book a consultation",
    "modal.subtitle":
      "Tell us a bit about yourself and we'll get back to you shortly.",
    "modal.roleLabel": "I am a",
    "modal.role.brand": "Brand",
    "modal.role.creator": "Creator",
    "modal.nameLabel": "Name",
    "modal.namePlaceholder": "Your full name",
    "modal.emailLabel": "Email",
    "modal.emailPlaceholder": "your@email.com",
    "modal.companyLabel": "Company / Brand / Channel name",
    "modal.companyPlaceholder": "Optional",
    "modal.messageLabel": "Message",
    "modal.messagePlaceholder":
      "Tell us about your brand or channel, your category, and what you're looking for in Europe.",
    "modal.consentLabel":
      "I agree to the processing of my personal data according to the Privacy Policy.",
    "modal.consentHelper":
      "We use your information only to respond to your enquiry. You can request deletion of your data at any time.",
    "modal.submit": "Send request",
    "modal.sending": "Sending...",
    "modal.successTitle": "Thank you!",
    "modal.successBody":
      "We've received your request and will get back to you as soon as possible.",
    "modal.close": "Close",
    "modal.privacyPolicy": "Privacy Policy",

    // VALIDATION MESSAGES
    "error.role": "Please select whether you are a Brand or Creator.",
    "error.name": "Name is required.",
    "error.emailRequired": "Email is required.",
    "error.emailInvalid": "Please enter a valid email address.",
    "error.messageRequired": "Message is required.",
    "error.messageShort": "Message must be at least 5 characters.",
    "error.consent":
      "You must agree to the privacy policy to continue.",
    "error.submit":
      "Something went wrong while sending your request. Please try again or email us directly at andre@meetonda.com."
  },

  zh: {
    // NAV
    "nav.services": "服务",
    "nav.about": "关于我们",
    "nav.creators": "创作者",
    "nav.bookConsultation": "预约咨询",
    "nav.brandCreatorsNewMarkets": "品牌 · 创作者 · 新市场",

    // HERO
    "hero.title": "在这里，品牌遇见合适的创作者，在欧洲实现增长。",
    "hero.body":
      "ONDA 是一家营销与品牌工作室，专注于数字营销、内容制作、创作者合作以及以社区为驱动的零售体验。我们把全球品牌与本地创作者和受众连接在一起。",
    "hero.schedule": "预约咨询",
    "hero.exploreServices": "了解我们的服务",
    "hero.whatWeDo": "我们的工作",
    "hero.whatWeDoBody": "战略、内容、整合营销与品牌打造。",
    "hero.howWeWork": "我们的方式",
    "hero.howWeWorkBody": "精干资深团队 · 创作者优先。",

    // SIDE CARD
    "side.matchmaking": "创作者与品牌匹配",
    "side.localFirstTitle": "本地优先的策略。",
    "side.localFirstBody":
      "我们为你的品类梳理创作者、文化与零售格局，打造真正适配各个欧洲市场的本地化活动方案。",
    "side.pill.influencers": "意见领袖与品牌大使",
    "side.pill.communities": "拥有真实社群的创作者",
    "side.pill.retail": "零售与快闪合作伙伴",
    "side.pill.experts": "品类专家与品味领袖",

    // CREATORS SECTION (homepage)
    "creators.sectionLabel": "创作者与社群",
    "creators.title": "超越曝光，更重关系与信任",
    "creators.p1":
      "我们把创作者视为长期合作伙伴，而不是一次性的媒体投放。我们的重点在于相关性、契合度和可信度——对双方都是如此。",
    "creators.p2":
      "我们帮助品牌找到在受众、价值观和审美上真正匹配的创作者。可能是一位深受信任的小众专家，也可能是一位能够承载全国级发布的头部账号。",
    "creators.p3":
      "当匹配完成后，我们协助完成简报、内容方向、合作流程以及长期关系的经营，让合作对品牌和创作者来说都自然顺畅、可持续。",
    "creators.programsLabel": "创作者项目",
    "creators.programsTitle": "从单次合作到自有社群",
    "creators.programsBody":
      "我们设计的创作者项目可以从轻量启动，并随着品牌成长逐步放大：",
    "creators.bullet.mapping": "优先市场的创作者与 KOL 地图梳理",
    "creators.bullet.story": "活动创意与叙事框架设计",
    "creators.bullet.hybrid":
      "整合数字、零售与产品的混合项目",

    // SERVICES SECTION (homepage)
    "services.sectionLabel": "我们的服务",
    "services.sectionTitle": "为新一代品牌设计的服务组合",
    "services.sectionBody":
      "从首次进入欧洲市场，到后续持续增长，我们将战略、创意和执行整合在一起，并以创作者为核心。",
    "services.viewAll": "查看全部服务",

    "services.card.strategy": "战略与定位",
    "services.card.strategyBody":
      "市场分析、品牌定位、进入策略框架以及竞品格局洞察。",
    "services.card.content": "内容与整合营销",
    "services.card.contentBody":
      "从创意到制作、上线与效果追踪的一站式整合营销项目。",
    "services.card.partnerships": "创作者合作管理",
    "services.card.partnershipsBody":
      "筛选与匹配、合同谈判、简报撰写、内容方向与长期关系维护。",
    "services.card.community": "品牌社群建设",
    "services.card.communityBody":
      "通过线下活动、品牌大使项目与数字空间，打造有温度的品牌社群。",
    "services.card.retail": "零售与线下体验",
    "services.card.retailBody":
      "快闪店、零售合作、门店体验以及以社区为驱动的线下零售。",
    "services.card.expansion": "欧洲市场拓展",
    "services.card.expansionBody":
      "本地化进入策略、合作伙伴与运营支持，助力多个欧洲市场的持续增长。",

    // SERVICES PAGE
    "servicesPage.label": "我们的服务",
    "servicesPage.title": "欧洲市场增长所需的一切支持。",
    "servicesPage.subtitle": "我们将战略、创意与执行整合在一起，专注于创作者驱动的营销和社群驱动的增长。",

    // ABOUT PAGE
    "about.label": "关于 ONDA",
    "about.title": "营销、品牌打造与创作者策略，一站式服务。",
    "about.subtitle": "ONDA 专注于帮助品牌进入、发展并在欧洲市场保持竞争力，尤其擅长创作者营销与社群驱动的零售。",

    // CONTACT PAGE
    "contact.label": "联系我们",
    "contact.title": "让我们聊聊你的项目。",
    "contact.subtitle": "准备好在欧洲发展你的品牌了吗？预约咨询，讨论你的目标以及我们如何帮助你。",

    // PRIVACY PAGE
    "privacy.label": "法律信息",
    "privacy.title": "隐私政策",
    "privacy.intro": "本页说明 ONDA 如何使用和保护你通过咨询表单向我们提供的个人数据。",
    "privacy.whoWeAre": "我们是谁",
    "privacy.whoWeAreBody": "ONDA 是一家营销与品牌工作室，帮助全球品牌与欧洲的创作者和社群合作。你可以通过以下邮箱联系我们：",
    "privacy.whatWeCollect": "我们收集哪些数据",
    "privacy.whatWeCollectIntro": "当你提交咨询表单时，我们会收集：",
    "privacy.collect.role": "你的身份（品牌方或创作者）",
    "privacy.collect.name": "你的姓名和邮箱地址",
    "privacy.collect.company": "你的公司 / 品牌 / 频道名称（如提供）",
    "privacy.collect.message": "你发送给我们的关于需求、品类和市场的留言",
    "privacy.howWeUse": "我们如何使用你的数据",
    "privacy.howWeUseIntro": "我们仅将这些信息用于：",
    "privacy.use.review": "审阅你的咨询",
    "privacy.use.contact": "就潜在的合作或服务与你联系",
    "privacy.noSell": "我们不会出售你的数据，也不会将其分享给第三方用于其自身的营销目的。",
    "privacy.legalBasis": "法律依据",
    "privacy.legalBasisBody": "我们处理你个人数据的法律依据是",
    "privacy.legitimateInterest": "合法利益",
    "privacy.legalBasisEnd": "，即回应业务咨询，以及在适用情况下，应你的要求在签订合同前采取的步骤。",
    "privacy.retention": "我们保留数据多长时间",
    "privacy.retentionBody": "我们会在处理你的咨询及后续沟通所需的时间内保留你的数据。如果你要求删除数据，我们会照办，除非出于法律或合规原因需要保留。",
    "privacy.rights": "你的权利",
    "privacy.rightsBody": "根据适用的数据保护法，你可能有权访问、更正或删除你的个人数据，以及反对或限制某些形式的处理。",
    "privacy.rightsContact": "如需行使这些权利，请发送邮件至：",
    "privacy.updates": "更新",
    "privacy.updatesBody": "我们可能会不时更新本隐私政策。最新版本将始终在本页面提供。",
    "privacy.backHome": "← 返回首页",
    "privacy.disclaimer": "本隐私政策仅供一般参考，不构成法律建议。请咨询合格律师，根据你的具体情况和管辖区域进行审核。",

    // CONSULTATION MODAL
    "modal.title": "预约咨询",
    "modal.subtitle": "请简单介绍一下你自己，我们会尽快与你联系。",
    "modal.roleLabel": "我是",
    "modal.role.brand": "品牌方",
    "modal.role.creator": "创作者",
    "modal.nameLabel": "姓名",
    "modal.namePlaceholder": "你的姓名",
    "modal.emailLabel": "邮箱",
    "modal.emailPlaceholder": "your@email.com",
    "modal.companyLabel": "公司 / 品牌 / 频道名称",
    "modal.companyPlaceholder": "选填",
    "modal.messageLabel": "需求说明",
    "modal.messagePlaceholder":
      "请介绍你的品牌或账号、所在品类，以及你希望在欧洲达成的目标。",
    "modal.consentLabel":
      "我同意按照隐私政策处理我的个人数据。",
    "modal.consentHelper":
      "我们仅会使用这些信息来回应你的咨询，你可以随时要求删除你的数据。",
    "modal.submit": "发送请求",
    "modal.sending": "发送中...",
    "modal.successTitle": "谢谢！",
    "modal.successBody":
      "我们已经收到你的信息，会尽快与你联系。",
    "modal.close": "关闭",
    "modal.privacyPolicy": "隐私政策",

    // VALIDATION
    "error.role": "请选择你是品牌方还是创作者。",
    "error.name": "姓名为必填项。",
    "error.emailRequired": "邮箱为必填项。",
    "error.emailInvalid": "请输入有效的邮箱地址。",
    "error.messageRequired": "请填写需求说明。",
    "error.messageShort": "需求说明至少需要 5 个字符。",
    "error.consent": "请先同意隐私政策再继续。",
    "error.submit":
      "提交时出现问题，请重试或直接发送邮件至 andre@meetonda.com。"
  }
};
