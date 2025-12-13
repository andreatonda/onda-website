import { useState } from "react";
import { Header } from "@/components/Header";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/ConsultationModal";

const Services = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  const pillars = ['creators', 'tiktok', 'marketplaces', 'affiliate', 'strategy'];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-glossy-hero">
          <div className="shell">
            <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-start">
              <div className="reveal space-y-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                  {t("servicesPage.label")}
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                  {t("servicesPage.title")}
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {t("servicesPage.subtitle")}
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
                </div>
              </div>

              {/* Side card */}
              <div className="reveal lg:sticky lg:top-32">
                <div className="card-glass rounded-2xl p-8">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    {t("servicesPage.howWeWork.label")}
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    {t("servicesPage.howWeWork.title")}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t("servicesPage.howWeWork.intro")}
                  </p>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((step) => (
                      <div key={step} className="flex items-start gap-3">
                        <span className="text-accent font-bold text-sm mt-0.5">
                          {step.toString().padStart(2, '0')}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {t(`servicesPage.howWeWork.step${step}.title`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work - Expanded Steps */}
        <section className="py-20">
          <div className="shell">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              {t("servicesPage.howWeWork.label")}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="reveal">
                  <div className="bg-card border border-border/50 rounded-2xl p-8 h-full hover:border-accent/30 transition-colors">
                    <div className="text-4xl font-bold text-accent/40 mb-4">
                      {step.toString().padStart(2, '0')}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t(`servicesPage.howWeWork.step${step}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`servicesPage.howWeWork.step${step}.body`)}
                    </p>
                  </div>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("servicesPage.pillars.title")}
              </h2>
            </div>

            <div className="space-y-8">
              {pillars.map((pillar, index) => (
                <div key={pillar} className="reveal">
                  <div className="card-glass rounded-2xl p-8 md:p-10">
                    <div className="grid md:grid-cols-[1fr,1.2fr] gap-8 md:gap-12 items-start">
                      <div>
                        <div className="text-accent/50 text-sm font-medium mb-3">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                          {t(`servicesPage.pillar.${pillar}.title`)}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t(`servicesPage.pillar.${pillar}.body`)}
                        </p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((point) => (
                          <div 
                            key={point} 
                            className="bg-background/50 border border-border/30 rounded-xl p-4"
                          >
                            <span className="text-sm text-muted-foreground">
                              {t(`servicesPage.pillar.${pillar}.point${point}`)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Geographic & Partnership Section */}
        <section className="py-20 border-t border-border/30">
          <div className="shell">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Geographic Reach */}
              <div className="reveal">
                <div className="bg-card border border-border/50 rounded-2xl p-8 h-full">
                  <div className="text-xs uppercase tracking-wider text-accent mb-4">
                    {t("servicesPage.geo.label")}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {t("servicesPage.geo.title")}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t("servicesPage.geo.body")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['DE', 'FR', 'IT', 'ES', 'NL'].map((country) => (
                      <span 
                        key={country}
                        className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Partnership */}
              <div className="reveal">
                <div className="card-glass rounded-2xl p-8 h-full">
                  <div className="text-xs uppercase tracking-wider text-accent mb-4">
                    {t("servicesPage.partnership.label")}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {t("servicesPage.partnership.title")}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t("servicesPage.partnership.body")}
                  </p>
                  <ul className="space-y-3">
                    {[1, 2, 3, 4].map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-sm text-muted-foreground">
                          {t(`servicesPage.partnership.point${point}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Closing CTA */}
            <div className="mt-16 reveal">
              <div className="bg-card border border-border/50 rounded-2xl p-10 text-center">
                <p className="text-xl md:text-2xl font-medium mb-6 max-w-2xl mx-auto">
                  {t("servicesPage.partnership.closing")}
                </p>
                <Button
                  onClick={() => setModalOpen(true)}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 btn-liquid"
                >
                  {t("hero.schedule")}
                  <span className="ml-2">↗</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Services;
