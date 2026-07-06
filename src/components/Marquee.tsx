import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export default function Marquee() {
  const { t } = useLanguage();

  return (
    <div className="flex overflow-hidden bg-stone-900 text-[#FFFCF9] py-4 border-y border-stone-900">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap items-center font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-medium"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-6">{t('marquee.strategy')}</span>
            <span className="mx-6 text-amber-500 text-lg">✦</span>
            <span className="mx-6">{t('marquee.gemini')}</span>
            <span className="mx-6 text-amber-500 text-lg">✦</span>
            <span className="mx-6">{t('marquee.uxui')}</span>
            <span className="mx-6 text-amber-500 text-lg">✦</span>
            <span className="mx-6">{t('marquee.wordpress')}</span>
            <span className="mx-6 text-amber-500 text-lg">✦</span>
            <span className="mx-6">{t('marquee.proto')}</span>
            <span className="mx-6 text-amber-500 text-lg">✦</span>
            <span className="mx-6">{t('marquee.claude')}</span>
            <span className="mx-6 text-amber-500 text-lg">✦</span>
            <span className="mx-6">{t('marquee.webdev')}</span>
            <span className="mx-6 text-amber-500 text-lg">✦</span>
            <span className="mx-6">{t('marquee.ui')}</span>
            <span className="mx-6 text-amber-500 text-lg">✦</span>
            <span className="mx-6">{t('marquee.aiworkflow')}</span>
            <span className="mx-6 text-amber-500 text-lg">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
