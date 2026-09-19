import { motion } from 'motion/react';
import { TrendingUp, Target, ShieldCheck, ArrowUpRight, Zap, ExternalLink } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { onlineMarketingStrategies } from '../data';
import { Link } from 'react-router-dom';

export default function OnlineMarketingSection() {
  const { locale, t } = useLanguage();

  return (
    <section id="online-marketing" className="scroll-mt-24 pt-20 pb-28 border-b border-stone-200">
      {/* Category Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold tracking-wider uppercase">
            <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
            04 / ONLINE MARKETING & REAL ADS PERFORMANCE
          </span>
          <span className="h-px bg-stone-300 flex-1 max-w-[80px]"></span>
          <span className="text-xs font-mono text-stone-400">Verified Ad Case Studies & 5-Step Process</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 italic">
              {t('category.marketing.title')}
            </h3>
            <p className="text-stone-600 text-lg max-w-2xl font-sans leading-relaxed">
              {t('category.marketing.desc')}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-stone-500 uppercase tracking-wider">
            <span className="px-3 py-1 bg-stone-100 rounded-md">Business Analysis</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md">Audience Persona</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md">High-Intent Keywords</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md">Copywriting Hooks</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md">Facebook Ads (Micro-Budget)</span>
          </div>
        </div>
      </div>

      {/* 5-Step Process Summary Ribbon */}
      <div className="mb-12 p-6 rounded-sm bg-amber-50/70 border border-amber-200/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-1">
              End-to-End Execution Methodology
            </span>
            <p className="text-stone-700 text-sm font-sans">
              1. Business Analysis → 2. Target Audience → 3. High-Intent Keywords → 4. Copywriting & Hooks → 5. Micro-Budget Facebook Ads
            </p>
          </div>
          <Link
            to="/online-marketing"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-stone-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-stone-800 transition-colors"
          >
            <span>View Full 5-Step Deep Dive</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Strategies Showcase Cards */}
      <div className="space-y-12 mb-16">
        {onlineMarketingStrategies.map((strategy, index) => {
          const adImage = index === 0 ? '/ad-1.png' : '/ad-2.png';
          return (
            <motion.div
              key={strategy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#FFFCF9] border border-stone-900/15 rounded-sm p-8 md:p-10 hover:border-stone-900 transition-all hover:shadow-[5px_5px_0px_#1c1917]"
            >
              {/* Strategy Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-stone-200 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest">
                      Case 0{index + 1}
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                      {strategy.category[locale]}
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-serif text-stone-900 mb-2">
                    {strategy.title[locale]}
                  </h4>
                  <p className="text-sm font-mono text-stone-500">
                    {strategy.subtitle[locale]}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 md:max-w-xs justify-start md:justify-end">
                  {strategy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-sans border border-stone-200 rounded-full text-stone-600 bg-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description & Ad Proof Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-center">
                {/* Ad Screenshot Thumbnail */}
                <div className="lg:col-span-4">
                  <div className="relative rounded-sm overflow-hidden border border-stone-300 bg-stone-900 shadow-sm group">
                    <img
                      src={adImage}
                      alt={strategy.title[locale]}
                      className="w-full h-auto object-cover max-h-56"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-2 bg-stone-950 text-center text-[10px] font-mono text-stone-400">
                      Verified Back-Office Facebook Ad Stat
                    </div>
                  </div>
                </div>

                {/* Description & Metrics Grid */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <p className="text-stone-700 font-sans text-base leading-relaxed mb-6">
                    {strategy.description[locale]}
                  </p>

                  {/* Key Quantitative Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {strategy.metrics.map((metric, mIdx) => (
                      <div 
                        key={mIdx} 
                        className="p-4 rounded-sm bg-stone-50 border border-stone-200/80 flex flex-col justify-center text-center"
                      >
                        <span className="text-2xl md:text-3xl font-mono font-bold text-stone-900 mb-1">
                          {metric.value}
                        </span>
                        <span className="text-[11px] font-sans font-medium text-stone-700 mb-0.5">
                          {metric.label[locale]}
                        </span>
                        {metric.subtext && (
                          <span className="text-[10px] font-mono text-stone-400">
                            {metric.subtext[locale]}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {strategy.caseStudyContext && (
                    <div className="p-3.5 rounded-sm bg-stone-100/80 border-l-2 border-amber-500 text-xs text-stone-700 font-sans flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-stone-900 block mb-0.5">
                          {locale === 'en' ? 'Verified Ad Manager Source:' : 'Source Vérifiée Ad Manager :'}
                        </span>
                        {strategy.caseStudyContext[locale]}
                      </div>
                      <Link
                        to="/online-marketing"
                        className="shrink-0 text-amber-700 font-mono text-xs hover:underline flex items-center gap-1"
                      >
                        Inspect Breakdown <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Tactics Breakdown */}
              <div className="pt-6 border-t border-stone-100">
                <h5 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-4 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  Key Strategic Levers Applied
                </h5>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {strategy.tactics.map((tactic, tIdx) => (
                    <div key={tIdx} className="p-4 rounded-sm bg-white border border-stone-200 text-xs">
                      <h6 className="font-semibold text-stone-900 mb-1.5 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-amber-600" />
                        {tactic.name[locale]}
                      </h6>
                      <p className="text-stone-600 leading-relaxed mb-3">
                        {tactic.description[locale]}
                      </p>
                      <div className="pt-2 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{tactic.impact[locale]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Cross-Discipline Integration Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 rounded-sm bg-stone-900 text-stone-100 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            The Full-Loop Studio Advantage
          </span>
          <h4 className="text-2xl font-serif text-white mb-2">
            Design Built for Discoverability & Conversion
          </h4>
          <p className="text-stone-400 text-sm max-w-2xl">
            {locale === 'en'
              ? 'Every WordPress build and app prototype is engineered from day one with search crawlers, user psychology, and lead generation at the core.'
              : 'Chaque site WordPress et prototype applicatif est pensé dès le premier jour pour les moteurs de recherche, la psychologie utilisateur et la conversion.'}
          </p>
        </div>
        <a
          href="https://wa.me/33652655676"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-semibold uppercase tracking-wider transition-colors shadow-[2px_2px_0px_#fff]"
        >
          {locale === 'en' ? 'Discuss Your Growth Goals' : 'Discuter de Vos Objectifs'}
        </a>
      </motion.div>
    </section>
  );
}
