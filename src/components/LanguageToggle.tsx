import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="inline-flex items-center p-1 bg-stone-100/90 border border-stone-300/80 rounded-full shadow-inner gap-1">
      {(['en', 'fr'] as const).map((lang) => {
        const isActive = locale === lang;
        return (
          <button
            key={lang}
            onClick={() => setLocale(lang)}
            className={`relative w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold uppercase transition-all duration-200 ${
              isActive
                ? 'bg-orange-600 text-white shadow-[0_2px_6px_rgba(234,88,12,0.35)] scale-105'
                : 'text-stone-500 hover:text-stone-900 hover:bg-stone-200/50'
            }`}
            aria-label={`Switch language to ${lang.toUpperCase()}`}
            title={`Switch to ${lang.toUpperCase()}`}
          >
            {isActive && (
              <motion.div
                layoutId="active-lang-circle"
                className="absolute inset-0 rounded-full bg-orange-600 -z-10"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{lang}</span>
          </button>
        );
      })}
    </div>
  );
}

