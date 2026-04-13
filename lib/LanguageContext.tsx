"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Lang, translations } from "./i18n";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations[Lang];
}

const LanguageContext = createContext<LangCtx>({
  lang: "uk",
  setLang: () => {},
  t: translations["uk"] as typeof translations[Lang],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("uk");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
