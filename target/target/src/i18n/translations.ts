export type Lang = "en" | "zh";

type Messages = Record<string, string>;

export const translations: Record<Lang, Messages> = {
  en: {
    // NAV
    "nav.services": "Services",
    "nav.about": "About",
    "nav.creators": "Creators",
    "nav.bookConsultation": "Book a consultation",
    "nav.brandCreatorsNewMarkets": "Brands · Creators · European Markets",

    // HERO
    "hero.title.part1": "Your long-term partner for",
    "hero.title.highlight": "creator-led growth",
    "hero.title.part2": "in Europe.",
    "hero.body":
      "ONDA is a Germany-based growth partner helping Chinese brands enter and scale across European markets. We combine local market expertise with deep cultural understanding to build sustainable, creator-led strategies that work.",
    "hero.schedule": "Schedule a consultation",
    "hero.exploreServices": "Explore our services",
    "hero.whatWeDo": "WHAT WE DO",
    "hero.whatWeDoBody":
      "Market entry, creator strategy & local execution.",
    "hero.howWeWork": "HOW WE WORK",
    "hero.howWeWorkBody":
      "Senior team · China-Europe bridge · Long-term focus.",

    // SIDE CARD
    "side.matchmaking": "Creator & brand matchmaking",
    "side.localFirstTitle": "Local execution, global ambition.",
    "side.localFirstBody":
      "We understand European markets from the inside. Our team maps the creator landscape, cultural nuances and retail ecosystem for your category — then designs strategies that resonate locally while scaling across borders.",
    "side.pill.influencers": "Local creators & ambassadors",
    "side.pill.communities": "Creators with engaged communities",
    "side.pill.retail": "Retail & marketplace partners",
    "side.pill.experts": "Category experts & market specialists",

    // CREATORS SECTION (homepage)
    "creators.sectionLabel": "Creators & Communities",
    "creators.title": "Beyond impressions — building lasting relationships",
    "creators.p1":
      "We treat creators as long-term partners, not transactional placements. Our approach prioritises relevance, authenticity and mutual value — for both brands and creators.",
    "creators.p2":
      "We help brands identify creators whose audience, values and content style genuinely align with their positioning. This might be a niche specialist with deep community trust, or a broader-reach creator who can anchor a market launch.",
    "creators.p3":
      "Once the right match is made, we manage the entire relationship — from briefing and content direction to workflow coordination and ongoing partnership development. Our goal is collaborations that feel natural and sustainable.",
    "creators.programsLabel": "Creator programs",
    "creators.programsTitle":
      "From initial campaigns to owned communities",
    "creators.programsBody":
      "We design creator programs that start lean and scale with your growth:",
    "creators.bullet.mapping":
      "Creator mapping and vetting for priority European markets",
    "creators.bullet.story":
      "Campaign concepts and storytelling frameworks",
    "creators.bullet.hybrid":
      "Integrated campaigns: TikTok + marketplaces + retail",

    // SERVICES SECTION (homepage)
    "services.sectionLabel": "What we offer",
    "services.sectionTitle": "Four pillars for European expansion",
    "services.sectionBody":
      "From first market entry to multi-country scale, we provide the strategy, execution and local expertise you need — with creators and TikTok as your entry point, and EU marketplaces as your foundation for growth.",
    "services.viewAll": "View all services",

    "services.card.strategy": "Market Entry & Expansion",
    "services.card.strategyBody":
      "Europe is fragmented — different rules, consumers and platforms per country. We help you decide where to start, which channels to use, and in what order to expand. Germany as entry point, multi-country rollout as the goal.",
    "services.card.content": "Creator & Influencer Marketing",
    "services.card.contentBody":
      "Structured, compliant, European-first creator marketing. We source creators across key EU markets, manage campaigns end-to-end, and build long-term relationships — not one-off posts.",
    "services.card.partnerships": "Marketplace & Channel Management",
    "services.card.partnershipsBody":
      "One partner managing TikTok Shop, Amazon EU, bol.com, eBay and other relevant marketplaces. Account setup, listing localisation, and ongoing operational support.",
    "services.card.community": "Affiliate & Performance Marketing",
    "services.card.communityBody":
      "Performance with structure. TikTok affiliate program setup, creator-led performance loops, paid and organic coordination — all focused on sustainable ROAS.",
    "services.card.retail": "Content & Localisation",
    "services.card.retailBody":
      "Local language adaptation, cultural translation and content direction that resonates in Germany, France, Italy, Spain, Netherlands and beyond.",
    "services.card.expansion": "Strategic Partnership",
    "services.card.expansionBody":
      "We work alongside you as a long-term partner — not as an agency for hire. From initial market entry to scaling across multiple European countries.",

    // SERVICES PAGE
    "servicesPage.label": "Our Services",
    "servicesPage.title": "A coherent system for European growth.",
    "servicesPage.subtitle": "We structure our services as interconnected pillars — not a menu of disconnected offerings. TikTok and creators open the door, marketplaces build the foundation, and local execution sustains your growth.",

    // HOW WE WORK SECTION
    "servicesPage.howWeWork.label": "How we work",
    "servicesPage.howWeWork.title": "A clear path from first market to European scale.",
    "servicesPage.howWeWork.intro": "We work in phases. Each step builds on the last. The goal is sustainable growth — not short-term wins.",
    "servicesPage.howWeWork.step1.title": "Market & channel assessment",
    "servicesPage.howWeWork.step1.body": "We analyse where your brand fits in Europe. Which countries, which platforms, which channels make sense first. We consider competition, pricing, logistics and consumer behaviour.",
    "servicesPage.howWeWork.step2.title": "Creator-led entry",
    "servicesPage.howWeWork.step2.body": "We start with TikTok and creators. This is the fastest way to build visibility and test product-market fit in a new region. We handle creator sourcing, briefing, content and compliance.",
    "servicesPage.howWeWork.step3.title": "Marketplace execution",
    "servicesPage.howWeWork.step3.body": "Once there is traction, we activate marketplaces — TikTok Shop, Amazon EU, bol.com and others. We manage listings, localisation and day-to-day operations.",
    "servicesPage.howWeWork.step4.title": "Multi-country expansion",
    "servicesPage.howWeWork.step4.body": "Germany is usually the starting point. From there, we roll out to France, Italy, Spain, Netherlands and other markets — adapting strategy to each country.",

    // SERVICE PILLARS
    "servicesPage.pillars.label": "What we do",
    "servicesPage.pillars.title": "Five pillars for European expansion.",

    "servicesPage.pillar.creators.title": "Creator & influencer marketing",
    "servicesPage.pillar.creators.body": "We source, vet and manage creators across European markets. Our focus is on long-term partnerships, not one-off posts. We handle briefings, content direction, compliance and reporting. All campaigns are structured to meet European advertising standards.",
    "servicesPage.pillar.creators.point1": "Creator sourcing and vetting across Germany, France, Italy, Spain, Netherlands",
    "servicesPage.pillar.creators.point2": "Campaign management from brief to delivery",
    "servicesPage.pillar.creators.point3": "Long-term ambassador and partnership programs",
    "servicesPage.pillar.creators.point4": "European compliance and disclosure requirements",

    "servicesPage.pillar.tiktok.title": "TikTok Shop & social commerce",
    "servicesPage.pillar.tiktok.body": "TikTok is the entry point for most brands we work with. We set up and manage TikTok Shop, build creator-driven content loops and run affiliate programs that convert. This is where brand awareness turns into sales.",
    "servicesPage.pillar.tiktok.point1": "TikTok Shop setup and ongoing management",
    "servicesPage.pillar.tiktok.point2": "Creator-driven content and affiliate programs",
    "servicesPage.pillar.tiktok.point3": "Content-led conversion strategies",
    "servicesPage.pillar.tiktok.point4": "Performance tracking and optimisation",

    "servicesPage.pillar.marketplaces.title": "Marketplace management",
    "servicesPage.pillar.marketplaces.body": "We manage your presence across EU marketplaces. One partner, multiple platforms. We handle account setup, listing localisation and daily operations — so you can focus on product and brand.",
    "servicesPage.pillar.marketplaces.point1": "Amazon EU (Germany, France, Italy, Spain, Netherlands)",
    "servicesPage.pillar.marketplaces.point2": "TikTok Shop",
    "servicesPage.pillar.marketplaces.point3": "bol.com, eBay and category-specific platforms",
    "servicesPage.pillar.marketplaces.point4": "Listing localisation and operational support",

    "servicesPage.pillar.affiliate.title": "Affiliate & performance marketing",
    "servicesPage.pillar.affiliate.body": "We build performance systems that scale without burning through budget. Creator affiliates, paid amplification and organic content work together. Everything is measured against ROAS, not vanity metrics.",
    "servicesPage.pillar.affiliate.point1": "TikTok affiliate program setup and management",
    "servicesPage.pillar.affiliate.point2": "Creator-led performance loops",
    "servicesPage.pillar.affiliate.point3": "Paid and organic coordination",
    "servicesPage.pillar.affiliate.point4": "ROAS-focused decision making",

    "servicesPage.pillar.strategy.title": "Market entry & expansion strategy",
    "servicesPage.pillar.strategy.body": "Europe is not one market. Each country has different rules, platforms, consumer habits and competitive dynamics. We help you decide where to start, which channels to prioritise, and how to sequence your expansion.",
    "servicesPage.pillar.strategy.point1": "Germany as the typical entry point",
    "servicesPage.pillar.strategy.point2": "Multi-country rollout planning",
    "servicesPage.pillar.strategy.point3": "Channel and platform prioritisation",
    "servicesPage.pillar.strategy.point4": "Localisation and cultural adaptation",

    // GEOGRAPHIC REACH
    "servicesPage.geo.label": "Where we operate",
    "servicesPage.geo.title": "Germany-based. Active across Europe.",
    "servicesPage.geo.body": "ONDA is headquartered in Germany — the largest e-commerce market in Europe. From here, we support brands entering and scaling across key European countries.",
    "servicesPage.geo.markets": "Germany, France, Italy, Spain, Netherlands — and other priority markets depending on your category.",

    // PARTNERSHIP
    "servicesPage.partnership.label": "How we partner",
    "servicesPage.partnership.title": "A scalable partner, not a vendor.",
    "servicesPage.partnership.body": "We work alongside your team — not as an external agency, but as an extension of your operations. We understand the pace and priorities of Chinese brands. We communicate clearly and move quickly.",
    "servicesPage.partnership.point1": "Long-term partnerships, not project-based engagements",
    "servicesPage.partnership.point2": "Direct access to senior team members",
    "servicesPage.partnership.point3": "Bilingual communication (English and Chinese)",
    "servicesPage.partnership.point4": "Flexible structures that scale with your growth",
    "servicesPage.partnership.closing": "We are the bridge between Chinese brands and European markets. We understand both sides. That is why brands stay with us.",

    // ABOUT PAGE
    "about.label": "About ONDA",
    "about.title": "The bridge between Chinese brands and European markets.",
    "about.subtitle": "ONDA is a Germany-based growth partner specialising in helping Chinese brands enter, grow and build lasting presence across Europe — through creator-led marketing and local market expertise.",

    // CONTACT PAGE
    "contact.label": "Get in touch",
    "contact.title": "Let's discuss your European expansion.",
    "contact.subtitle": "Ready to enter or scale in Europe? Book a consultation to discuss your goals and how we can support your growth.",

    // PRIVACY PAGE
    "privacy.label": "Legal",
    "privacy.title": "Privacy Policy",
    "privacy.intro": "This page explains how ONDA uses and protects the personal data you share with us, in particular through the consultation form.",
    "privacy.whoWeAre": "Who we are",
    "privacy.whoWeAreBody": "ONDA is a Germany-based growth partner helping Chinese brands work with creators and communities in Europe. You can contact us at",
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
      "Tell us about your brand and goals — we'll get back to you shortly.",
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
      "Tell us about your brand, your category, and what you're looking to achieve in Europe.",
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
    "nav.creators": "创作者达人",
    "nav.bookConsultation": "预约咨询",
    "nav.brandCreatorsNewMarkets": "品牌 · 创作者 · 新市场",

    // HERO
    "hero.title.part1": "在这里，助力品牌牵手契合的",
    "hero.title.highlight": "创作者达人",
    "hero.title.part2": "，让品牌在欧洲实现增长。",
    "hero.body":
      "ONDA 是一家营销与品牌工作室，专注于数字营销、内容制作、创作者达人合作以及以社区为驱动的零售体验。我们把全球品牌与本地创作者达人和受众连接在一起。",
    "hero.schedule": "预约咨询",
    "hero.exploreServices": "了解我们的服务",
    "hero.whatWeDo": "我们专注于",
    "hero.whatWeDoBody": "战略、内容、整合营销与品牌打造。",
    "hero.howWeWork": "我们拥有",
    "hero.howWeWorkBody": "精干资深团队 · 大量本地创作者达人。",

    // SIDE CARD
    "side.matchmaking": "创作者达人与品牌匹配",
    "side.localFirstTitle": "本地优先的策略。",
    "side.localFirstBody":
      "我们为您的品类梳理本地创作者达人，适应本地文化与零售格局，打造真正适配各个欧洲市场的本地化品牌进驻及实施方案。",
    "side.pill.influencers": "网红达人与品牌大使",
    "side.pill.communities": "拥有真实社群的创作者",
    "side.pill.retail": "零售与快闪合作伙伴",
    "side.pill.experts": "品类专家与风向引领者",

    // CREATORS SECTION (homepage)
    "creators.sectionLabel": "创作者达人与社群",
    "creators.title": "超越曝光，更注重关系与信任",
    "creators.p1":
      "我们将创作者达人视为长期合作伙伴，而不只是一次性的媒体投放。我们的工作重点在于相关性、匹配度与可信度——对品牌和创作者达人双方皆然。",
    "creators.p2":
      "我们帮助品牌找到在受众、价值观与审美风格上真正契合其品牌主张的创作者达人。这个人选可能是一个在细分领域拥有深度信任的专家型达人，也可能是一位覆盖面更广、能够为新品发布或活动“定调”的核心创作者。",
    "creators.p3":
      "当匹配到位后，我们会协助完成需求简报、内容方向把控、流程协作以及长期关系建设，让每一次合作对所有参与方而言都顺畅且可持续。",
    "creators.programsLabel": "创作者达人项目",
    "creators.programsTitle": "从一次性内容发布到自有社群运营",
    "creators.programsBody":
      "我们设计的创作者达人项目可以先从轻量启动，并随着需求逐步扩展：",
    "creators.bullet.mapping":
      "针对重点市场的创作者与影响者梳理及匹配",
    "creators.bullet.story":
      "活动概念与故事叙事框架",
    "creators.bullet.hybrid":
      "混合型整合营销：数字渠道 + 零售 + 产品体验",

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
    "servicesPage.subtitle":
      "我们将战略、创意与执行整合在一起，专注于创作者驱动的营销和社群驱动的增长。",

    // ABOUT PAGE
    "about.label": "关于 ONDA",
    "about.title": "营销、品牌打造与创作者策略，一站式服务。",
    "about.subtitle":
      "ONDA 专注于帮助品牌进入、发展并在欧洲市场保持竞争力，尤其擅长创作者营销与社群驱动的零售。",

    // CONTACT PAGE
    "contact.label": "联系我们",
    "contact.title": "让我们聊聊你的项目。",
    "contact.subtitle":
      "准备好在欧洲发展你的品牌了吗？预约咨询，讨论你的目标以及我们如何帮助你。",

    // PRIVACY PAGE
    "privacy.label": "法律信息",
    "privacy.title": "隐私政策",
    "privacy.intro":
      "本页说明 ONDA 如何使用和保护你通过咨询表单向我们提供的个人数据。",
    "privacy.whoWeAre": "我们是谁",
    "privacy.whoWeAreBody":
      "ONDA 是一家营销与品牌工作室，帮助全球品牌与欧洲的创作者和社群合作。你可以通过以下邮箱联系我们：",
    "privacy.whatWeCollect": "我们收集哪些数据",
    "privacy.whatWeCollectIntro": "当你提交咨询表单时，我们会收集：",
    "privacy.collect.role": "你的身份（品牌方或创作者）",
    "privacy.collect.name": "你的姓名和邮箱地址",
    "privacy.collect.company":
      "你的公司 / 品牌 / 频道名称（如提供）",
    "privacy.collect.message":
      "你发送给我们的关于需求、品类和市场的留言",
    "privacy.howWeUse": "我们如何使用你的数据",
    "privacy.howWeUseIntro": "我们仅将这些信息用于：",
    "privacy.use.review": "审阅你的咨询",
    "privacy.use.contact": "就潜在的合作或服务与你联系",
    "privacy.noSell":
      "我们不会出售你的数据，也不会将其分享给第三方用于其自身的营销目的。",
    "privacy.legalBasis": "法律依据",
    "privacy.legalBasisBody": "我们处理你个人数据的法律依据是",
    "privacy.legitimateInterest": "合法利益",
    "privacy.legalBasisEnd":
      "，即回应业务咨询，以及在适用情况下，应你的要求在签订合同前采取的步骤。",
    "privacy.retention": "我们保留数据多长时间",
    "privacy.retentionBody":
      "我们会在处理你的咨询及后续沟通所需的时间内保留你的数据。如果你要求删除数据，我们会照办，除非出于法律或合规原因需要保留。",
    "privacy.rights": "你的权利",
    "privacy.rightsBody":
      "根据适用的数据保护法，你可能有权访问、更正或删除你的个人数据，以及反对或限制某些形式的处理。",
    "privacy.rightsContact": "如需行使这些权利，请发送邮件至：",
    "privacy.updates": "更新",
    "privacy.updatesBody":
      "我们可能会不时更新本隐私政策。最新版本将始终在本页面提供。",
    "privacy.backHome": "← 返回首页",
    "privacy.disclaimer":
      "本隐私政策仅供一般参考，不构成法律建议。请咨询合格律师，根据你的具体情况和管辖区域进行审核。",

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
