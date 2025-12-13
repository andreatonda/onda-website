import { Header } from "@/components/Header";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section className="py-20 md:py-32">
          <div className="shell">
            <div className="reveal max-w-3xl">
              <div className="text-xs uppercase tracking-wider text-accent mb-4">
                {t("about.label")}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                {t("about.title")}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t("about.subtitle")}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
