import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/ConsultationModal";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const languages: { code: "en" | "zh"; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "zh", label: "中文" }
  ];

  const handleOpenModal = () => {
    setMobileOpen(false);
    setModalOpen(true);
  };

  return (
    <>
      <header className="nav-liquid">
        <div className="shell py-0">
          <nav className="flex items-center justify-between py-0">
            {/* Logo - always visible */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="ONDA logo"
                className="h-20 w-32 object-cover object-center drop-shadow-[0_0_12px_rgba(0,180,216,0.55)] border-0"
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/services" className="text-foreground hover:text-accent transition-colors">
                {t("nav.services")}
              </Link>
              <Link to="/about" className="text-foreground hover:text-accent transition-colors">
                {t("nav.about")}
              </Link>
              <Link to="/services#creators" className="text-foreground hover:text-accent transition-colors">
                {t("nav.creators")}
              </Link>

              {/* Language switcher */}
              <div className="inline-flex items-center rounded-full bg-black/40 border border-white/10 px-2 py-0.5 text-xs gap-1">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setLang(l.code)}
                    className={`px-2.5 py-0.5 rounded-full transition-all ${
                      lang === l.code
                        ? "bg-accent text-accent-foreground font-semibold shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <Button
                onClick={handleOpenModal}
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full btn-liquid px-5 sm:px-6"
              >
                {t("nav.bookConsultation")}
                <span className="ml-1">↗</span>
              </Button>
            </div>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileOpen(prev => !prev)}
              className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-border/60 bg-background/98 backdrop-blur-xl">
            <div className="px-6 py-6 space-y-4">
              <Link
                to="/services"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-foreground hover:text-accent transition-colors"
              >
                {t("nav.services")}
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-foreground hover:text-accent transition-colors"
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/services#creators"
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-foreground hover:text-accent transition-colors"
              >
                {t("nav.creators")}
              </Link>

              {/* Mobile language switcher */}
              <div className="flex items-center gap-2 pt-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setLang(l.code)}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      lang === l.code
                        ? "bg-accent text-accent-foreground font-semibold"
                        : "bg-black/40 border border-white/10 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <Button
                onClick={handleOpenModal}
                className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full btn-liquid"
              >
                {t("nav.bookConsultation")}
                <span className="ml-1">↗</span>
              </Button>
            </div>
          </nav>
        )}
      </header>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};
