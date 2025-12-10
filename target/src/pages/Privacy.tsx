import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { useLanguage } from "@/i18n/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="shell max-w-3xl space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t("privacy.label")}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold">
              {t("privacy.title")}
            </h1>
            <p className="text-muted-foreground">
              {t("privacy.intro")}
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">{t("privacy.whoWeAre")}</h2>
            <p className="text-muted-foreground">
              {t("privacy.whoWeAreBody")}{" "}
              <a
                href="mailto:andre@meetonda.com"
                className="text-accent underline-offset-2 hover:underline"
              >
                andre@meetonda.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">{t("privacy.whatWeCollect")}</h2>
            <p className="text-muted-foreground">
              {t("privacy.whatWeCollectIntro")}
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>{t("privacy.collect.role")}</li>
              <li>{t("privacy.collect.name")}</li>
              <li>{t("privacy.collect.company")}</li>
              <li>{t("privacy.collect.message")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">{t("privacy.howWeUse")}</h2>
            <p className="text-muted-foreground">
              {t("privacy.howWeUseIntro")}
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>{t("privacy.use.review")}</li>
              <li>{t("privacy.use.contact")}</li>
            </ul>
            <p className="text-muted-foreground">
              {t("privacy.noSell")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">{t("privacy.legalBasis")}</h2>
            <p className="text-muted-foreground">
              {t("privacy.legalBasisBody")}{" "}
              <strong className="text-foreground">{t("privacy.legitimateInterest")}</strong>
              {t("privacy.legalBasisEnd")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">{t("privacy.retention")}</h2>
            <p className="text-muted-foreground">
              {t("privacy.retentionBody")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">{t("privacy.rights")}</h2>
            <p className="text-muted-foreground">
              {t("privacy.rightsBody")}
            </p>
            <p className="text-muted-foreground">
              {t("privacy.rightsContact")}{" "}
              <a
                href="mailto:andre@meetonda.com"
                className="text-accent underline-offset-2 hover:underline"
              >
                andre@meetonda.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">{t("privacy.updates")}</h2>
            <p className="text-muted-foreground">
              {t("privacy.updatesBody")}
            </p>
          </section>

          <div>
            <Link
              to="/"
              className="inline-flex items-center text-sm text-accent underline-offset-2 hover:underline"
            >
              {t("privacy.backHome")}
            </Link>
          </div>

          <p className="text-xs text-muted-foreground/70">
            {t("privacy.disclaimer")}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
