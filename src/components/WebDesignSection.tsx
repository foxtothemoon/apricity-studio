import { motion } from 'motion/react';
import { ArrowUpRight, Globe, Sparkles, ExternalLink, BookOpen } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { webClientSites, projects } from '../data';
import { Link } from 'react-router-dom';

export default function WebDesignSection() {
  const { locale, t } = useLanguage();

  // Find Survive 'til Five as the interactive web application project
  const surviveProject = projects.find(p => p.slug === 'survive-til-five');

  return (
    <section id="wordpress-web" className="scroll-mt-24 pt-20 pb-28 border-b border-stone-200">
      {/* Category Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold tracking-wider uppercase">
            <Globe className="w-3.5 h-3.5 text-amber-600" />
            02 / WEB DESIGN & WORDPRESS
          </span>
          <span className="h-px bg-stone-300 flex-1 max-w-[80px]"></span>
          <span className="text-xs font-mono text-stone-400">4 Live Deployments</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 italic">
              {t('category.wordpress.title')}
            </h3>
            <p className="text-stone-600 text-lg max-w-2xl font-sans leading-relaxed">
              {t('category.wordpress.desc')}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-stone-600">
            <span className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 rounded-md font-semibold">
              AI Workflow Integration
            </span>
            <span className="px-3 py-1 bg-stone-100 border border-stone-200 rounded-md">
              General to E-Commerce
            </span>
            <span className="px-3 py-1 bg-stone-100 border border-stone-200 rounded-md">
              Immediate Live Launch
            </span>
            <span className="px-3 py-1 bg-stone-100 border border-stone-200 rounded-md">
              HTML, CSS & Backend Control
            </span>
          </div>
        </div>

        {/* 4 Core Value Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#FFFDF9] border border-amber-200/60 shadow-2xs">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100/70 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                AI Co-Pilot & Efficiency
              </h5>
              <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                Eliminating redundant tasks, co-piloting visual branding, and running deep SEO analyses.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 mt-0.5">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                Showcase to E-Commerce
              </h5>
              <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                Capable of building clean corporate websites, product catalogs, and high-converting online stores.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
              <ExternalLink className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                Immediate Live Deploy
              </h5>
              <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                Deployed live to production servers with real domains, operational immediately for users.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                HTML, CSS & Backend Control
              </h5>
              <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                Easy back-office updates and precision customization with foundational coding knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part A: Client Websites (WordPress & Corporate) */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h4 className="font-serif text-2xl text-stone-800 italic">
              {t('wordpress.title')}
            </h4>
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
            Live Client Deployments
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {webClientSites.map((site, index) => (
            <motion.div 
              key={site.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col bg-[#FFFCF9] border border-stone-900/15 hover:border-stone-900 transition-all rounded-sm p-5 hover:shadow-[4px_4px_0px_#1c1917]"
            >
              {/* Browser mockup top bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200 text-[11px] font-mono text-stone-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-300"></span>
                </div>
                <span className="truncate max-w-[160px] text-stone-500">{site.url.replace('https://', '')}</span>
              </div>

              <a 
                href={site.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block relative aspect-[4/3] w-full overflow-hidden border border-stone-900/20 mb-5 bg-stone-100 group/img"
              >
                <img 
                  src={site.image} 
                  alt={site.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-stone-900 text-xs font-medium shadow-md">
                    Visit Live Website <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
              
              <div className="flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h5 className="text-2xl font-serif text-stone-900 group-hover:text-amber-600 transition-colors">
                    {site.name}
                  </h5>
                  <a 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 text-stone-400 hover:text-amber-600 transition-colors"
                    aria-label={`Visit ${site.name}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                <div className="mb-3">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-amber-700 bg-amber-50/80 px-2.5 py-0.5 rounded border border-amber-200">
                    {site.role[locale]}
                  </span>
                </div>

                <p className="text-stone-600 font-sans text-sm leading-relaxed mb-6 flex-grow">
                  {site.description[locale]}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-100 mt-auto">
                  {site.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 border border-stone-200 rounded-full text-[11px] font-sans tracking-wider text-stone-500 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
