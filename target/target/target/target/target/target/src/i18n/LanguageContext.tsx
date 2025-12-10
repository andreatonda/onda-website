import { createContext, useContext, useEffect, useState } from "react";
import { Lang, translations } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "onda-lang";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && (stored === "en" || stored === "zh")) {
      setLangState(stored);
      document.documentElement.lang = stored === "zh" ? "zh-CN" : "en";
    } else {
      document.documentElement.lang = "en";
    }
  }, []);

  const setLang = (value: Lang) => {
    setLangState(value);
    window.localStorage.setItem(STORAGE_KEY, value);
    document.documentElement.lang = value === "zh" ? "zh-CN" : "en";
  };

  const t = (key: string) => {
    const dict = translations[lang] || translations.en;
    return dict[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};
