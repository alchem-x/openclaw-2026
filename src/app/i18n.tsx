"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations } from "../i18n/index";

type Locale = "en" | "zh" | "ko";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getNestedValue(obj: any, path: string): string {
  const keys = path.split('.');
  let value = obj;
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return path;
    }
  }
  return typeof value === 'string' ? value : path;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && translations[saved]) {
      setLocale(saved);
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: string) => {
    return getNestedValue(translations[locale], key);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
