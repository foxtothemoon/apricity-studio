import { useLanguage } from '../LanguageContext';
import { Locale } from '../types';

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const languages: { code: Locale; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <div className="inline-flex items-center p-1 bg-white border-2 border-stone-900 rounded-full shadow-sm gap-1">
      {languages.map((lang) => {
        const isActive = locale === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLocale(lang.code)}
            className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider transition-all duration-150 select-none cursor-pointer ${
              isActive
                ? 'bg-orange-600 text-white shadow-sm ring-1 ring-orange-700'
                : 'text-stone-900 hover:text-orange-600 hover:bg-stone-100'
            }`}
            aria-label={`Switch language to ${lang.label}`}
            title={`Switch to ${lang.label}`}
          >
            <span className="font-sans font-bold">{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
}

