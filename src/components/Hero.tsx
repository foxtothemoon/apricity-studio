import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden px-6 md:px-12 max-w-7xl mx-auto">
      <div className="w-full max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-900 bg-transparent text-stone-900 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          {t('hero.available')}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-6 tracking-tight"
        >
          {t('hero.title.part1')} <span className="text-amber-600 italic">{t('hero.title.part2')}</span> <br className="hidden md:block" />{t('hero.title.part3')}{t('hero.title.part4')}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed mb-10 font-sans"
        >
          {t('hero.desc')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center gap-6"
        >
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-stone-900 bg-stone-900 text-[#FFFCF9] text-base font-medium hover:bg-[#FFFCF9] hover:text-stone-900 transition-all shadow-[4px_4px_0px_#d97706] hover:shadow-[0px_0px_0px_#d97706] hover:translate-x-[4px] hover:translate-y-[4px] group"
          >
            {t('hero.btn.projects')}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#profile" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-stone-900 text-stone-900 text-base font-medium hover:bg-stone-100 transition-all"
          >
            {t('hero.btn.profile')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
