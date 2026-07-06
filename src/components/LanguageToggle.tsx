import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center p-1 bg-[#FFFCF9] border border-stone-900 rounded-full shadow-[2px_2px_0px_#1c1917]">
      {['en', 'fr'].map((lang) => {
        const isActive = locale === lang;
        return (
          <button
            key={lang}
            onClick={() => setLocale(lang as 'en' | 'fr')}
            className={`relative flex items-center justify-center w-14 py-1.5 text-xs font-mono font-bold tracking-widest uppercase transition-colors z-10 ${
              isActive ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="lang-pill"
                className="absolute inset-0 bg-amber-400 border border-stone-900 rounded-full shadow-[1px_1px_0px_#1c1917] -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            )}
            {lang}
          </button>
        );
      })}
    </div>
  );
}
