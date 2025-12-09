import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/ConsultationModal";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useLanguage();

  const services = [
    {
      titleKey: "services.card.strategy",
      descKey: "services.card.strategyBody",
    },
    {
      titleKey: "services.card.content",
      descKey: "services.card.contentBody",
    },
    {
      titleKey: "services.card.partnerships",
      descKey: "services.card.partnershipsBody",
    },
    {
      titleKey: "services.card.community",
      descKey: "services.card.communityBody",
    },
    {
      titleKey: "services.card.retail",
      descKey: "services.card.retailBody",
    },
    {
      titleKey: "services.card.expansion",
      descKey: "services.card.expansionBody",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="py-20 md:py-[50px] bg-glossy-hero">
          <div className="shell">
            <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-start">
              <div className="reveal space-y-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                  {t("nav.brandCreatorsNewMarkets")}
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                  {t("hero.title").split("right creators").map((part, i) => 
                    i === 0 ? (
                      <span key={i}>{part}<span className="text-gradient-cyan">right creators</span></span>
                    ) : part
                  )}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {t("hero.body")}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => setModalOpen(true)}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 btn-liquid"
                  >
                    {t("hero.schedule")}
                    <span className="ml-2">↗</span>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-border/50 hover:border-accent/50">
                    <Link to="/services">
                      {t("hero.exploreServices")}
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div>
                    <div className="text-sm font-semibold mb-2">{t("hero.whatWeDo")}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {t("hero.whatWeDoBody")}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-2">{t("hero.howWeWork")}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {t("hero.howWeWorkBody")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Side card */}
              <div className="reveal lg:sticky lg:top-32">
                <div className="card-glass rounded-2xl p-8">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    {t("side.matchmaking")}
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    {t("side.localFirstTitle")}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t("side.localFirstBody")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm">
                      {t("side.pill.influencers")}
                    </span>
                    <span className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm">
                      {t("side.pill.communities")}
                    </span>
                    <span className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm">
                      {t("side.pill.retail")}
                    </span>
                    <span className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm">
                      {t("side.pill.experts")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CREATORS & COMMUNITIES SECTION */}
        <section className="py-20">
          <div className="shell">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              {t("creators.sectionLabel")}
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="reveal">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {t("creators.title")}
                </h2>
              </div>
              <div className="reveal space-y-6 text-muted-foreground">
                <p>{t("creators.p1")}</p>
                <p>{t("creators.p2")}</p>
                <p>{t("creators.p3")}</p>
              </div>
            </div>

            <div className="mt-16 reveal">
              <div className="bg-card border border-border/50 rounded-2xl p-10">
                <div className="text-xs uppercase tracking-wider text-accent mb-4">
                  {t("creators.programsLabel")}
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  {t("creators.programsTitle")}
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl">
                  {t("creators.programsBody")}
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>{t("creators.bullet.mapping")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>{t("creators.bullet.story")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>{t("creators.bullet.hybrid")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20">
          <div className="shell">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              {t("services.sectionLabel")}
            </div>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
                {t("services.sectionTitle")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {t("services.sectionBody")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="reveal bg-card border border-border/50 rounded-2xl p-8 hover:border-accent/30 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-3">{t(service.titleKey)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(service.descKey)}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-border/50 hover:border-accent/50">
                <Link to="/services">
                  {t("services.viewAll")}
                  <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;
