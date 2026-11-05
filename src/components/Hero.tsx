import { motion } from 'motion/react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Compass, 
  Globe 
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

import DancingLetters from '@/components/ui/dancing-letters';

export default function Hero() {
  const { locale } = useLanguage();

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Main Hero Stage */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Title with Dancing Letters in Vibrant Signature Orange */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-1">

            <DancingLetters
              text="DESIGN"
              className="font-heading"
              letterClassName="font-heading text-4xl sm:text-6xl md:text-7xl font-bold !text-orange-600 dark:!text-orange-500 hover:!text-orange-500 transition-colors"
            />
            <DancingLetters
              text="WITH"
              className="font-heading"
              letterClassName="font-heading text-4xl sm:text-6xl md:text-7xl font-bold !text-orange-600 dark:!text-orange-500 hover:!text-orange-500 transition-colors"
            />
            <DancingLetters
              text="CREATIVE,"
              className="font-heading"
              letterClassName="font-heading text-4xl sm:text-6xl md:text-7xl font-bold !text-orange-600 dark:!text-orange-500 hover:!text-orange-500 transition-colors"
            />
            <DancingLetters
              text="CLARITY"
              className="font-heading"
              letterClassName="font-heading text-4xl sm:text-6xl md:text-7xl font-bold !text-orange-600 dark:!text-orange-500 hover:!text-orange-500 transition-colors"
            />
            <DancingLetters
              text="&"
              className="font-heading"
              letterClassName="font-heading text-4xl sm:text-6xl md:text-7xl font-bold !text-orange-500 dark:!text-orange-400 hover:!text-orange-400 transition-colors"
            />
            <DancingLetters
              text="CARE"
              className="font-heading"
              letterClassName="font-heading text-4xl sm:text-6xl md:text-7xl font-bold !text-orange-600 dark:!text-orange-500 hover:!text-orange-500 transition-colors"
            />
          </div>
          <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
            {locale === 'fr'
              ? 'Designer UX/UI, Designer Graphique & Créatrice Web concevant des produits mobiles accessibles, des design systems Figma modulaires et des plateformes web réactives.'
              : 'UX/UI Designer, Graphic Designer & Web Creator crafting accessible digital products, scalable Figma design systems, and responsive web platforms.'}
          </p>
        </motion.div>

        {/* Core Discipline Tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2.5 text-xs text-stone-700 font-sans"
        >
          <span className="px-3.5 py-1.5 rounded-full bg-stone-100/90 border border-stone-200/80 font-medium">
            {locale === 'fr' ? '📱 Design Produit UX/UI' : '📱 UX/UI Product Design'}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-stone-100/90 border border-stone-200/80 font-medium">
            {locale === 'fr' ? '🌐 Web Design' : '🌐 Web Design'}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-stone-100/90 border border-stone-200/80 font-medium">
            {locale === 'fr' ? '✨ Vibe Coding IA' : '✨ AI Vibe Coding'}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-stone-100/90 border border-stone-200/80 font-medium">
            {locale === 'fr' ? '🎨 Design Graphique' : '🎨 Graphic Design'}
          </span>
        </motion.div>

        {/* Direct Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 pt-2 font-sans"
        >
          {/* Scroll down to Projects */}
          <a
            href="#carepill-flagship"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-900 hover:bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95 group font-sans"
          >
            <span>{locale === 'fr' ? 'EXPLORER LES PROJETS' : 'EXPLORE PROJECTS'}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Jump to Contact */}
          <a
            href="#about-intro"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-stone-900 bg-white hover:bg-stone-900 hover:text-white text-stone-900 text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95 font-sans"
          >
            <span>{locale === 'fr' ? 'Contact' : 'Contact'}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
