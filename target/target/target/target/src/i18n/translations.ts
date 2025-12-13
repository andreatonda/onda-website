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
    "hero.title.part1": "A long-term partner for",
    "hero.title.highlight": "creator-led growth",
    "hero.title.part2": "in Europe.",
    "hero.body":
      "ONDA is based in Germany. We help Chinese brands enter Europe and scale across key markets — starting with TikTok and creators, then building durable growth through marketplaces and local execution.",
    "hero.schedule": "Schedule a consultation",
    "hero.exploreServices": "Explore our services",
    "hero.whatWeDo": "WHAT WE DO",
    "hero.whatWeDoBody": "Market entry, creator strategy, and local execution.",
    "hero.howWeWork": "HOW WE WORK",
    "hero.howWeWorkBody": "Senior team · Practical support · Built for scale.",

    // SIDE CARD
    "side.matchmaking": "Creator & brand matchmaking",
    "side.localFirstTitle": "Local execution, built to scale.",
    "side.localFirstBody":
      "We work inside European markets. We map creators, culture, and the retail landscape for your category — then turn that into campaigns and channel plans that feel local and can expand country by country.",
    "side.pill.influencers": "Local creators & ambassadors",
    "side.pill.communities": "Creators with real communities",
    "side.pill.retail": "Marketplaces & retail partners",
    "side.pill.experts": "Category and market specialists",

    // CREATORS SECTION (homepage)
    "creators.sectionLabel": "Creators & Communities",
    "creators.title": "Beyond impressions — building trust over time",
    "creators.p1":
      "We work with creators as partners, not as one-off placements. The goal is fit and credibility — for the brand and the creator.",
    "creators.p2":
      "We find creators whose audience and style actually match your brand. Sometimes that’s a niche specialist with strong trust. Sometimes it’s a larger profile that can carry a launch.",
    "creators.p3":
      "Once the match is right, we run the process end to end: briefing, content direction, coordination, and the ongoing relationship. We want collaborations that look natural and remain useful month after month.",
    "creators.programsLabel": "Creator programs",
    "creators.programsTitle": "From first campaigns to long-term programs",
    "creators.programsBody":
      "We build creator programs that can start small and scale with results:",
    "creators.bullet.mapping":
      "Creator mapping and vetting for priority European markets",
    "creators.bullet.story": "Campaign concepts and story frameworks",
    "creators.bullet.hybrid":
      "Integrated campaigns: TikTok + marketplaces + retail",

    // SERVICES SECTION (homepage)
    "services.sectionLabel": "What we offer",
    "services.sectionTitle": "Services built for entering and scaling in Europe",
    "services.sectionBody":
      "We help you choose the right first market, launch with creators, and build repeatable sales through marketplaces. TikTok is often the entry point — the operating system is what comes next.",
    "services.viewAll": "View all services",

    "services.card.strategy": "Market Entry & Expansion",
    "services.card.strategyBody":
      "Europe isn’t one market. We help you decide where to start, what to prioritise, and how to expand in the right order — usually starting with Germany, then scaling across countries.",
    "services.card.content": "Creator & Influencer Marketing",
    "services.card.contentBody":
      "European-first creator marketing with clear briefs, compliance, and strong execution. Built for long-term partnerships, not one-off posts.",
    "services.card.partnerships": "Marketplace & Channel Management",
    "services.card.partnershipsBody":
      "We manage TikTok Shop, Amazon EU, bol.com, eBay and other relevant channels — including localisation and day-to-day operations.",
    "services.card.community": "Affiliate & Performance Marketing",
    "services.card.communityBody":
      "Affiliate programs, creator-driven performance loops, and paid support when needed. Measured against business outcomes — not vanity metrics.",
    "services.card.retail": "Content & Localisation",
    "services.card.retailBody":
      "Language and cultural adaptation that fits local markets — including content direction that works in Germany, France, Italy, Spain, and the Netherlands.",
    "services.card.expansion": "Strategic Partnership",
    "services.card.expansionBody":
      "We work alongside your team as an ongoing partner — flexible, fast, and focused on building something that lasts.",

    // SERVICES PAGE
    "servicesPage.label": "Our Services",
    "servicesPage.title": "Growth infrastructure for Europe.",
    "servicesPage.subtitle":
      "Creators open the door. Marketplaces build the revenue. Local execution keeps you competitive country by country.",

    // HOW WE WORK SECTION
    "servicesPage.howWeWork.label": "How we work",
    "servicesPage.howWeWork.title": "Four phases. One system.",
    "servicesPage.howWeWork.intro":
      "Each phase builds on the last. Growth stays stable as you expand.",
    "servicesPage.howWeWork.step1.title": "Market assessment",
    "servicesPage.howWeWork.step1.body":
      "Category fit, country priorities, competition, pricing, logistics. We figure out where to start and which channels to use first.",
    "servicesPage.howWeWork.step2.title": "Creator-led entry",
    "servicesPage.howWeWork.step2.body":
      "TikTok and creators build awareness and test local resonance. We handle sourcing, briefing, content direction, and compliance.",
    "servicesPage.howWeWork.step3.title": "Marketplace execution",
    "servicesPage.howWeWork.step3.body":
      "Once traction is real, we build sales infrastructure: TikTok Shop, Amazon EU, bol.com. Listings, localisation, daily operations.",
    "servicesPage.howWeWork.step4.title": "Multi-country expansion",
    "servicesPage.howWeWork.step4.body":
      "Germany first, then France, Italy, Spain, Netherlands. The playbook adapts to each market.",

    // SERVICE PILLARS
    "servicesPage.pillars.label": "What we do",
    "servicesPage.pillars.title": "Five service areas. One operating system.",

    "servicesPage.pillar.creators.title": "Creator & influencer marketing",
    "servicesPage.pillar.creators.body":
      "We find, vet, and manage creators across Europe. Clear briefs, clean execution, proper compliance. Long-term relationships over one-off posts.",
    "servicesPage.pillar.creators.point1": "Creator sourcing in DE, FR, IT, ES, NL",
    "servicesPage.pillar.creators.point2": "Full campaign management",
    "servicesPage.pillar.creators.point3": "Ambassador programs",
    "servicesPage.pillar.creators.point4": "Disclosure and compliance",

    "servicesPage.pillar.tiktok.title": "TikTok Shop & social commerce",
    "servicesPage.pillar.tiktok.body":
      "We run TikTok Shop and build creator-driven content loops. Awareness turns into measurable sales.",
    "servicesPage.pillar.tiktok.point1": "TikTok Shop setup",
    "servicesPage.pillar.tiktok.point2": "Creator affiliate programs",
    "servicesPage.pillar.tiktok.point3": "Content that converts",
    "servicesPage.pillar.tiktok.point4": "Performance tracking",

    "servicesPage.pillar.marketplaces.title": "Marketplace management",
    "servicesPage.pillar.marketplaces.body":
      "One partner for multiple platforms. Account setup, listing localisation, daily ops. Your team stays focused on product and supply chain.",
    "servicesPage.pillar.marketplaces.point1": "Amazon EU (5 countries)",
    "servicesPage.pillar.marketplaces.point2": "TikTok Shop",
    "servicesPage.pillar.marketplaces.point3": "bol.com, eBay, category platforms",
    "servicesPage.pillar.marketplaces.point4": "Localised listings and ops",

    "servicesPage.pillar.affiliate.title": "Affiliate & performance marketing",
    "servicesPage.pillar.affiliate.body":
      "Performance systems that stay efficient at scale. Affiliates, creators, paid support when it makes sense.",
    "servicesPage.pillar.affiliate.point1": "TikTok affiliate setup",
    "servicesPage.pillar.affiliate.point2": "Creator performance loops",
    "servicesPage.pillar.affiliate.point3": "Paid + organic coordination",
    "servicesPage.pillar.affiliate.point4": "Outcome-based decisions",

    "servicesPage.pillar.strategy.title": "Market entry & expansion",
    "servicesPage.pillar.strategy.body":
      "Each European country is different. We help you pick the right sequence, channels, and local approach.",
    "servicesPage.pillar.strategy.point1": "Germany as entry point",
    "servicesPage.pillar.strategy.point2": "Multi-country rollout",
    "servicesPage.pillar.strategy.point3": "Channel prioritisation",
    "servicesPage.pillar.strategy.point4": "Local adaptation",

    // GEOGRAPHIC REACH
    "servicesPage.geo.label": "Where we operate",
    "servicesPage.geo.title": "Germany HQ. Active across Europe.",
    "servicesPage.geo.body":
      "We are headquartered in Germany, Europe's largest e-commerce market. From here, we support brands across priority countries.",
    "servicesPage.geo.markets":
      "Germany, France, Italy, Spain, Netherlands, plus others depending on category.",

    // PARTNERSHIP
    "servicesPage.partnership.label": "How we partner",
    "servicesPage.partnership.title": "A partner, not a vendor.",
    "servicesPage.partnership.body":
      "We work alongside your team and stay involved as you grow. Clear communication, fast execution, focus on what moves the business.",
    "servicesPage.partnership.point1": "Long-term over one-off",
    "servicesPage.partnership.point2": "Direct access to senior operators",
    "servicesPage.partnership.point3": "Bilingual (English + Chinese)",
    "servicesPage.partnership.point4": "Scope that scales with you",
    "servicesPage.partnership.closing":
      "We understand both sides: how Chinese brands operate, and how Europe works in practice.",

    // ABOUT PAGE
    "about.label": "About ONDA",
    "about.title": "Built in Germany. Focused on China-to-Europe growth.",
    "about.subtitle":
      "ONDA helps Chinese brands enter Europe and scale sustainably — through creators, marketplaces, and local execution that works country by country.",

    // CONTACT PAGE
    "contact.label": "Get in touch",
    "contact.title": "Let’s talk about your European expansion.",
    "contact.subtitle":
      "Tell us where you are today and what you’re aiming for. We’ll come back with a clear view of how we can help.",

    // PRIVACY PAGE
    "privacy.label": "Legal",
    "privacy.title": "Privacy Policy",
    "privacy.intro":
      "This page explains how ONDA uses and protects the personal data you share with us, in particular through the consultation form.",
    "privacy.whoWeAre": "Who we are",
    "privacy.whoWeAreBody":
      "ONDA is a Germany-based growth partner helping Chinese brands work with creators and communities in Europe. You can contact us at",
    "privacy.whatWeCollect": "What data we collect",
    "privacy.whatWeCollectIntro":
      "When you submit the consultation form, we collect:",
    "privacy.collect.role": "Your role (brand or creator)",
    "privacy.collect.name": "Your name and email address",
    "privacy.collect.company": "Your company / brand / channel name (if provided)",
    "privacy.collect.message":
      "The message you send us about your needs, category and markets",
    "privacy.howWeUse": "How we use your data",
    "privacy.howWeUseIntro": "We use this information only to:",
    "privacy.use.review": "Review your enquiry",
    "privacy.use.contact": "Contact you about potential collaboration or services",
    "privacy.noSell":
      "We do not sell your data or share it with third parties for their own marketing purposes.",
    "privacy.legalBasis": "Legal basis",
    "privacy.legalBasisBody": "Our legal basis for processing your personal data is",
    "privacy.legitimateInterest": "legitimate interest",
    "privacy.legalBasisEnd":
      "in responding to business enquiries and, where applicable, steps taken at your request prior to entering into a contract.",
    "privacy.retention": "How long we keep your data",
    "privacy.retentionBody":
      "We keep your data for as long as it is needed to handle your enquiry and any follow-up conversation. If you ask us to delete your data, we will do so unless we need to keep it for legal or compliance reasons.",
    "privacy.rights": "Your rights",
    "privacy.rightsBody":
      "Subject to applicable data protection law, you may have the right to access, correct or delete your personal data, and to object to or restrict certain forms of processing.",
    "privacy.rightsContact": "To exercise these rights, please email us at",
    "privacy.updates": "Updates",
    "privacy.updatesBody":
      "We may update this Privacy Policy from time to time. The latest version will always be available on this page.",
    "privacy.backHome": "← Back to home",
    "privacy.disclaimer":
      "This Privacy Policy is for general information only and does not constitute legal advice. Please consult a qualified lawyer to review it for your specific situation and jurisdiction.",

    // CONSULTATION MODAL
    "modal.title": "Book a consultation",
    "modal.subtitle": "Tell us what you’re building — we’ll reply shortly.",
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
      "Share your category, where you sell today, and what you want to achieve in Europe.",
    "modal.consentLabel":
      "I agree to the processing of my personal data according to the Privacy Policy.",
    "modal.consentHelper":
      "We use your information only to respond to your enquiry. You can request deletion of your data at any time.",
    "modal.submit": "Send request",
    "modal.sending": "Sending...",
    "modal.successTitle": "Thank you!",
    "modal.successBody": "We’ve received your message and will get back to you soon.",
    "modal.close": "Close",
    "modal.privacyPolicy": "Privacy Policy",

    // VALIDATION MESSAGES
    "error.role": "Please select whether you are a Brand or Creator.",
    "error.name": "Name is required.",
    "error.emailRequired": "Email is required.",
    "error.emailInvalid": "Please enter a valid email address.",
    "error.messageRequired": "Message is required.",
    "error.messageShort": "Message must be at least 5 characters.",
    "error.consent": "You must agree to the privacy policy to continue.",
    "error.submit":
      "Something went wrong while sending your request. Please try again or email us directly at andre@meetonda.com."
  },

  zh: {
    // NAV
    "nav.services": "服务",
    "nav.about": "关于我们",
    "nav.creators": "创作者",
    "nav.bookConsultation": "预约咨询",
    "nav.brandCreatorsNewMarkets": "品牌 · 创作者 · 欧洲市场",

    // HERO
    "hero.title.part1": "我们是品牌在欧洲的长期伙伴：",
    "hero.title.highlight": "创作者驱动增长",
    "hero.title.part2": "。",
    "hero.body":
      "ONDA 总部位于德国。我们帮助中国品牌进入欧洲并实现多国规模化：先用 TikTok 与创作者打开市场，再通过主流电商平台与本地化运营把销量做稳、把增长做长。",
    "hero.schedule": "预约咨询",
    "hero.exploreServices": "了解我们的服务",
    "hero.whatWeDo": "我们做什么",
    "hero.whatWeDoBody": "欧洲进入策略、创作者项目、以及落地执行。",
    "hero.howWeWork": "我们怎么做",
    "hero.howWeWorkBody": "资深团队 · 结果导向 · 可持续扩张。",

    // SIDE CARD
    "side.matchmaking": "创作者与品牌匹配",
    "side.localFirstTitle": "本地化落地，按国家复制扩张。",
    "side.localFirstBody":
      "我们深耕欧洲本地市场，熟悉各国家的内容偏好、平台规则与零售生态。我们会先把品类的“人、内容、渠道”梳理清楚，再把策略落到可执行的项目里，逐国扩张。",
    "side.pill.influencers": "本地创作者与品牌大使",
    "side.pill.communities": "有真实社群的创作者",
    "side.pill.retail": "电商平台与零售合作",
    "side.pill.experts": "品类专家与市场运营",

    // CREATORS SECTION (homepage)
    "creators.sectionLabel": "创作者与社群",
    "creators.title": "不只追曝光，更重信任与长期合作",
    "creators.p1":
      "我们把创作者当作长期合作伙伴，而不是一次性投放资源。重点是契合度与可信度：对品牌有效，对创作者也可持续。",
    "creators.p2":
      "我们会根据你的品类与定位，寻找真正匹配的创作者：可能是细分领域里有深度影响力的专家型账号，也可能是能为新品上市“定调”的头部创作者。",
    "creators.p3":
      "确定合作后，我们负责整个流程：需求梳理、内容方向、沟通推进与长期关系维护。目标是让合作看起来自然、跑得顺、并且能持续带来结果。",
    "creators.programsLabel": "创作者项目",
    "creators.programsTitle": "从首轮合作到长期项目化运营",
    "creators.programsBody":
      "创作者项目可以先轻量启动，再根据效果逐步放大：",
    "creators.bullet.mapping": "重点国家的创作者筛选与评估",
    "creators.bullet.story": "活动概念与叙事框架",
    "creators.bullet.hybrid": "组合打法：TikTok + 平台 + 线下触点",

    // SERVICES SECTION (homepage)
    "services.sectionLabel": "我们的服务",
    "services.sectionTitle": "面向欧洲进入与扩张的服务体系",
    "services.sectionBody":
      "我们帮助你选对第一站、用创作者打开市场，并通过平台与本地运营把增长做稳。TikTok 往往是入口，但真正决定规模的是后续的渠道与运营系统。",
    "services.viewAll": "查看全部服务",

    "services.card.strategy": "欧洲进入与扩张策略",
    "services.card.strategyBody":
      "欧洲不是一个市场。我们帮助你确定先做哪个国家、优先什么渠道、以及扩张顺序。通常从德国起步，再逐国复制。",
    "services.card.content": "创作者与达人营销",
    "services.card.contentBody":
      "以欧洲市场规则为前提的创作者营销：清晰的 Brief、合规披露、以及能持续迭代的合作机制。",
    "services.card.partnerships": "平台与渠道管理",
    "services.card.partnershipsBody":
      "统一管理 TikTok Shop、Amazon EU、bol.com、eBay 等平台：开店、内容与商品本地化、以及日常运营支持。",
    "services.card.community": "联盟与效果营销",
    "services.card.communityBody":
      "搭建可规模化的效果体系：达人联盟、内容带货闭环、必要时配合投放。以实际业务结果为标准，而不是“好看数据”。",
    "services.card.retail": "内容与本地化",
    "services.card.retailBody":
      "语言与文化适配、内容方向与素材把控，让你的表达更像“本地品牌”，而不是“翻译过来的品牌”。",
    "services.card.expansion": "长期合作伙伴",
    "services.card.expansionBody":
      "我们不是一次性交付的外包团队，而是陪你一起把欧洲做起来的长期伙伴：节奏快、沟通清楚、可随规模调整。",

    // SERVICES PAGE
    "servicesPage.label": "我们的服务",
    "servicesPage.title": "一套可落地的欧洲增长方法。",
    "servicesPage.subtitle":
      "我们的服务不是零散的“菜单”。TikTok 与创作者帮助你进入市场，平台帮助你做规模，本地化执行帮助你在每个国家稳住增长。",

    // HOW WE WORK SECTION
    "servicesPage.howWeWork.label": "我们的流程",
    "servicesPage.howWeWork.title": "从进入第一个国家，到多国规模化的清晰路径。",
    "servicesPage.howWeWork.intro":
      "我们按阶段推进。每一步为下一步打基础，让增长在扩张过程中依然稳定。",
    "servicesPage.howWeWork.step1.title": "市场与渠道判断",
    "servicesPage.howWeWork.step1.body":
      "我们会结合你的品类与供应链能力，评估欧洲各国机会与难点：竞争、价格带、物流与合规、渠道优先级等，帮你选对第一站。",
    "servicesPage.howWeWork.step2.title": "创作者驱动进入",
    "servicesPage.howWeWork.step2.body":
      "用 TikTok 与创作者快速建立认知并验证打法。我们负责创作者筛选、合作推进、内容方向把控与合规披露。",
    "servicesPage.howWeWork.step3.title": "平台执行与运营",
    "servicesPage.howWeWork.step3.body":
      "当内容与需求跑通，我们把销量基础搭起来：TikTok Shop、Amazon EU、bol.com 等平台的开店、商品与页面本地化、以及日常运营支持。",
    "servicesPage.howWeWork.step4.title": "多国复制扩张",
    "servicesPage.howWeWork.step4.body":
      "通常从德国起步，然后扩张到法国、意大利、西班牙、荷兰等国家。每个国家的内容表达与平台策略都需要调整，我们会逐国落地。",

    // SERVICE PILLARS
    "servicesPage.pillars.label": "我们能做什么",
    "servicesPage.pillars.title": "五个核心服务方向。",

    "servicesPage.pillar.creators.title": "创作者与达人营销",
    "servicesPage.pillar.creators.body":
      "我们在欧洲本地筛选、评估并管理创作者合作。强调长期合作、合规披露与可执行的内容方向，让合作更稳定、更可复制。",
    "servicesPage.pillar.creators.point1":
      "德国、法国、意大利、西班牙、荷兰等国家的创作者资源",
    "servicesPage.pillar.creators.point2": "从 Brief 到交付的全流程管理",
    "servicesPage.pillar.creators.point3": "品牌大使与长期项目",
    "servicesPage.pillar.creators.point4": "欧洲披露与合规支持",

    "servicesPage.pillar.tiktok.title": "TikTok Shop 与社交电商",
    "servicesPage.pillar.tiktok.body":
      "我们搭建并运营 TikTok Shop，通过创作者内容与联盟带货形成转化闭环，把“种草”变成可衡量的销量。",
    "servicesPage.pillar.tiktok.point1": "TikTok Shop 搭建与运营",
    "servicesPage.pillar.tiktok.point2": "创作者内容与联盟项目",
    "servicesPage.pillar.tiktok.point3": "内容导向的转化策略",
    "servicesPage.pillar.tiktok.point4": "数据追踪与持续优化",

    "servicesPage.pillar.marketplaces.title": "平台运营管理",
    "servicesPage.pillar.marketplaces.body":
      "一个团队管理多个平台。我们支持开店、商品与页面本地化、以及日常运营，减少你在欧洲多平台同时推进的沟通成本。",
    "servicesPage.pillar.marketplaces.point1":
      "Amazon EU（德国/法国/意大利/西班牙/荷兰）",
    "servicesPage.pillar.marketplaces.point2": "TikTok Shop",
    "servicesPage.pillar.marketplaces.point3": "bol.com、eBay 及垂直平台",
    "servicesPage.pillar.marketplaces.point4": "Listing 本地化与运营支持",

    "servicesPage.pillar.affiliate.title": "联盟与效果营销",
    "servicesPage.pillar.affiliate.body":
      "我们搭建可规模化的效果体系：达人联盟、内容带货闭环、必要时配合投放。以业务结果为标准，持续迭代。",
    "servicesPage.pillar.affiliate.point1": "TikTok 联盟项目搭建与管理",
    "servicesPage.pillar.affiliate.point2": "创作者驱动的效果闭环",
    "servicesPage.pillar.affiliate.point3": "投放与自然流量协同",
    "servicesPage.pillar.affiliate.point4": "以实际结果为导向的决策",

    "servicesPage.pillar.strategy.title": "欧洲进入与扩张策略",
    "servicesPage.pillar.strategy.body":
      "欧洲各国的规则、平台与消费习惯差异很大。我们帮助你选对顺序、明确重点渠道，并为每个国家做本地化调整。",
    "servicesPage.pillar.strategy.point1": "德国常作为第一站",
    "servicesPage.pillar.strategy.point2": "多国扩张节奏与规划",
    "servicesPage.pillar.strategy.point3": "渠道与平台优先级",
    "servicesPage.pillar.strategy.point4": "本地化与文化适配",

    // GEOGRAPHIC REACH
    "servicesPage.geo.label": "覆盖市场",
    "servicesPage.geo.title": "总部德国，服务覆盖欧洲。",
    "servicesPage.geo.body":
      "ONDA 总部位于德国（欧洲最大的电商市场）。我们从德国出发，支持品牌进入并扩张到多个欧洲国家。",
    "servicesPage.geo.markets":
      "德国、法国、意大利、西班牙、荷兰等核心国家；也可根据品类选择其他重点市场。",

    // PARTNERSHIP
    "servicesPage.partnership.label": "合作方式",
    "servicesPage.partnership.title": "可扩张的长期伙伴，而不是一次性外包。",
    "servicesPage.partnership.body":
      "我们会与品牌团队并肩推进：沟通清楚、响应快、执行强。随着你的节奏与预算变化，合作范围也能灵活调整。",
    "servicesPage.partnership.point1": "更偏长期合作，而不是一次性交付",
    "servicesPage.partnership.point2": "直接对接资深团队成员",
    "servicesPage.partnership.point3": "支持中文与英文沟通",
    "servicesPage.partnership.point4": "合作结构可随规模调整",
    "servicesPage.partnership.closing":
      "我们理解中国品牌的节奏，也熟悉欧洲市场的规则与打法，所以合作会更顺、更可控。",

    // ABOUT PAGE
    "about.label": "关于 ONDA",
    "about.title": "立足德国，专注中国品牌欧洲增长。",
    "about.subtitle":
      "ONDA 帮助中国品牌进入欧洲并实现可持续扩张：以创作者和内容打开市场，以平台与本地运营建立规模。",

    // CONTACT PAGE
    "contact.label": "联系我们",
    "contact.title": "聊聊你的欧洲计划。",
    "contact.subtitle":
      "告诉我们你的品类、当前渠道以及目标市场。我们会给你一个清晰的建议：从哪里开始、怎么做、怎么扩张。",

    // PRIVACY PAGE
    "privacy.label": "法律信息",
    "privacy.title": "隐私政策",
    "privacy.intro":
      "本页说明 ONDA 如何使用并保护你在咨询表单中提交的个人信息。",
    "privacy.whoWeAre": "我们是谁",
    "privacy.whoWeAreBody":
      "ONDA 总部位于德国，帮助中国品牌在欧洲与创作者及社群开展合作。如需联系，请发送邮件至：",
    "privacy.whatWeCollect": "我们收集哪些信息",
    "privacy.whatWeCollectIntro": "当你提交咨询表单时，我们会收集：",
    "privacy.collect.role": "你的身份（品牌方或创作者）",
    "privacy.collect.name": "你的姓名与邮箱地址",
    "privacy.collect.company": "你的公司 / 品牌 / 账号名称（如有）",
    "privacy.collect.message": "你提交的需求信息（品类、市场、目标等）",
    "privacy.howWeUse": "我们如何使用这些信息",
    "privacy.howWeUseIntro": "我们仅用于：",
    "privacy.use.review": "评估你的咨询内容",
    "privacy.use.contact": "与您联系并讨论可能的合作或服务",
    "privacy.noSell":
      "我们不会出售你的信息，也不会将其提供给第三方用于其营销目的。",
    "privacy.legalBasis": "法律依据",
    "privacy.legalBasisBody": "我们处理个人信息的法律依据是",
    "privacy.legitimateInterest": "合法利益",
    "privacy.legalBasisEnd":
      "，即回应业务咨询，以及在适用情况下，应你的请求在签订合同前采取的必要步骤。",
    "privacy.retention": "我们保存多久",
    "privacy.retentionBody":
      "我们仅在处理咨询与后续沟通所需的时间范围内保存信息。如你要求删除，我们会删除，除非法律或合规要求我们保留。",
    "privacy.rights": "你的权利",
    "privacy.rightsBody":
      "根据适用的数据保护法律，你可能有权访问、更正或删除个人信息，并对某些处理方式提出反对或限制。",
    "privacy.rightsContact": "如需行使上述权利，请发送邮件至：",
    "privacy.updates": "更新",
    "privacy.updatesBody":
      "我们可能会不定期更新本隐私政策，最新版本将始终在本页面展示。",
    "privacy.backHome": "← 返回首页",
    "privacy.disclaimer":
      "本隐私政策仅供一般信息参考，不构成法律意见。请根据你的具体情况与所在地法律咨询专业律师。",

    // CONSULTATION MODAL
    "modal.title": "预约咨询",
    "modal.subtitle": "简单介绍你的情况，我们会尽快回复。",
    "modal.roleLabel": "我是",
    "modal.role.brand": "品牌方",
    "modal.role.creator": "创作者",
    "modal.nameLabel": "姓名",
    "modal.namePlaceholder": "你的姓名",
    "modal.emailLabel": "邮箱",
    "modal.emailPlaceholder": "your@email.com",
    "modal.companyLabel": "公司 / 品牌 / 账号名称",
    "modal.companyPlaceholder": "选填",
    "modal.messageLabel": "需求说明",
    "modal.messagePlaceholder":
      "请说明你的品类、目前销售渠道，以及希望在欧洲达成的目标。",
    "modal.consentLabel": "我同意按隐私政策处理我的个人信息。",
    "modal.consentHelper":
      "我们仅用于回复你的咨询，你也可以随时要求删除信息。",
    "modal.submit": "发送",
    "modal.sending": "发送中...",
    "modal.successTitle": "已收到",
    "modal.successBody": "谢谢，我们会尽快与你联系。",
    "modal.close": "关闭",
    "modal.privacyPolicy": "隐私政策",

    // VALIDATION
    "error.role": "请选择你是品牌方还是创作者。",
    "error.name": "请填写姓名。",
    "error.emailRequired": "请填写邮箱。",
    "error.emailInvalid": "请输入有效的邮箱地址。",
    "error.messageRequired": "请填写需求说明。",
    "error.messageShort": "需求说明至少 5 个字符。",
    "error.consent": "请先同意隐私政策再继续。",
    "error.submit":
      "提交失败，请稍后重试，或直接发送邮件至 andre@meetonda.com。"
  }
};
