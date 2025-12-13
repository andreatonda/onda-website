import { Header } from "@/components/Header";
import { useLanguage } from "@/i18n/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="shell">
            <div className="reveal max-w-3xl">
              <div className="text-xs uppercase tracking-wider text-accent mb-4">
                {t("servicesPage.label")}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                {t("servicesPage.title")}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t("servicesPage.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-20 border-t border-border/30">
          <div className="shell">
            <div className="reveal max-w-3xl mb-16">
              <div className="text-xs uppercase tracking-wider text-accent mb-4">
                {t("servicesPage.howWeWork.label")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("servicesPage.howWeWork.title")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("servicesPage.howWeWork.intro")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="reveal">
                  <div className="text-5xl font-bold text-accent/30 mb-4">
                    {step.toString().padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {t(`servicesPage.howWeWork.step${step}.title`)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(`servicesPage.howWeWork.step${step}.body`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Pillars Section */}
        <section className="py-20 border-t border-border/30">
          <div className="shell">
            <div className="reveal max-w-3xl mb-16">
              <div className="text-xs uppercase tracking-wider text-accent mb-4">
                {t("servicesPage.pillars.label")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("servicesPage.pillars.title")}
              </h2>
            </div>

            <div className="space-y-16">
              {['creators', 'tiktok', 'marketplaces', 'affiliate', 'strategy'].map((pillar) => (
                <div key={pillar} className="reveal grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                      {t(`servicesPage.pillar.${pillar}.title`)}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {t(`servicesPage.pillar.${pillar}.body`)}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {[1, 2, 3, 4].map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="text-accent mt-1.5">—</span>
                        <span className="text-muted-foreground">
                          {t(`servicesPage.pillar.${pillar}.point${point}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Geographic Reach Section */}
        <section className="py-20 border-t border-border/30">
          <div className="shell">
            <div className="reveal max-w-3xl">
              <div className="text-xs uppercase tracking-wider text-accent mb-4">
                {t("servicesPage.geo.label")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("servicesPage.geo.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("servicesPage.geo.body")}
              </p>
              <p className="text-lg font-medium">
                {t("servicesPage.geo.markets")}
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-20 border-t border-border/30">
          <div className="shell">
            <div className="reveal grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-xs uppercase tracking-wider text-accent mb-4">
                  {t("servicesPage.partnership.label")}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t("servicesPage.partnership.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t("servicesPage.partnership.body")}
                </p>
                <p className="text-lg font-medium italic">
                  {t("servicesPage.partnership.closing")}
                </p>
              </div>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="text-accent mt-1.5">—</span>
                    <span className="text-muted-foreground text-lg">
                      {t(`servicesPage.partnership.point${point}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
