import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Globe, Smartphone, Palette, TrendingUp, LayoutGrid } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { CategoryFilter } from '../types';
import WebDesignSection from './WebDesignSection';
import AppDesignSection from './AppDesignSection';
import GraphicDesignSection from './GraphicDesignSection';
import OnlineMarketingSection from './OnlineMarketingSection';

export default function Work() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  // Handle URL hash changes (e.g. #wordpress-web, #ux-ui-app, #graphic-design, #online-marketing)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#wordpress-web' || hash === '#web-design') {
        setActiveFilter('wordpress_web');
      } else if (hash === '#ux-ui-app' || hash === '#app-design') {
        setActiveFilter('ux_ui_app');
      } else if (hash === '#graphic-design') {
        setActiveFilter('graphic_design');
      } else if (hash === '#online-marketing') {
        setActiveFilter('online_marketing');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const filterTabs: { id: CategoryFilter; labelKey: string; icon: typeof Globe; count: number }[] = [
    { id: 'all', labelKey: 'filter.all', icon: LayoutGrid, count: 13 },
    { id: 'wordpress_web', labelKey: 'filter.wordpress', icon: Globe, count: 4 },
    { id: 'ux_ui_app', labelKey: 'filter.uxui', icon: Smartphone, count: 2 },
    { id: 'graphic_design', labelKey: 'filter.graphic', icon: Palette, count: 4 },
    { id: 'online_marketing', labelKey: 'filter.marketing', icon: TrendingUp, count: 3 },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Decorative solar accent */}
      <div className="absolute top-12 right-6 md:right-12 opacity-10 pointer-events-none">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
          <Sun className="w-36 h-36 text-amber-500" />
        </motion.div>
      </div>
      
      {/* Main Section Heading */}
      <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10 border-b border-stone-200 pb-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span className="text-xs font-mono tracking-widest text-stone-500 uppercase">
              Portfolio Disciplines & Case Studies
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-stone-900 italic">
            {t('works.title')}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl font-sans mt-3">
            {t('works.desc')}
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-stone-100/90 border border-stone-200 rounded-full max-w-full">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  isActive 
                    ? 'bg-stone-900 text-[#FFFCF9] shadow-[2px_2px_0px_#d97706]' 
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                <span>{t(tab.labelKey)}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive ? 'bg-stone-800 text-amber-300' : 'bg-stone-200 text-stone-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Categorized Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
        >
          {/* 1. WordPress Web Design & SEO/SEM */}
          {(activeFilter === 'all' || activeFilter === 'wordpress_web') && (
            <WebDesignSection />
          )}

          {/* 2. UX/UI Designer & App Design */}
          {(activeFilter === 'all' || activeFilter === 'ux_ui_app') && (
            <AppDesignSection />
          )}

          {/* 3. Graphic Design */}
          {(activeFilter === 'all' || activeFilter === 'graphic_design') && (
            <GraphicDesignSection />
          )}

          {/* 4. Online Marketing */}
          {(activeFilter === 'all' || activeFilter === 'online_marketing') && (
            <OnlineMarketingSection />
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
