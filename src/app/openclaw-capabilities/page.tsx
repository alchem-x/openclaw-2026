"use client";

import { useState, useEffect } from "react";
import { useI18n } from "../i18n";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function OpenclawCapabilities() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <Link 
            href="/openclaw-puzzle"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md text-[#636e72] hover:shadow-lg transition-all"
          >
            <ArrowLeft width="20" height="20" />
            <span>{t('common.prev')}</span>
          </Link>
          <Link 
            href="/openclaw-principle"
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#ffa502] to-[#20bf6b] text-white font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <span>{t('common.next')}</span>
            <ArrowRight width="20" height="20" />
          </Link>
        </div>
      </div>

      <LanguageSwitcher />

      <div className="min-h-screen bg-[#fff9f5] wave-bg">
        <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-20">
          <div className={`text-center mb-12 ${mounted ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
              <span className="text-5xl animate-float">🦞</span>
            </div>
            <span className="inline-block px-4 py-1 rounded-full bg-[#ffa502]/10 text-[#ffa502] text-sm font-medium mb-4">
              02
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">
              {t('capabilities.title')}
            </h1>
            <p className="text-xl text-[#636e72] max-w-xl mx-auto">
              {t('capabilities.subtitle')}
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
