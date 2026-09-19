import { motion } from 'motion/react';
import { 
  Globe, 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles, 
  ShoppingBag, 
  Rocket, 
  Code2, 
  Layers
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { webClientSites } from '../data';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function WebDesignPage() {
  const { locale } = useLanguage();

  const workflowSteps = [
    {
      num: '01',
      title: { en: 'Discovery & Search Intent', fr: 'Objectifs & Intention' },
      desc: {
        en: 'Analyzing search intent, target audience, and content architecture.',
        fr: 'Analyse des intentions de recherche et de l’arborescence.'
      }
    },
    {
      num: '02',
      title: { en: 'Figma UI Design', fr: 'Design UI Figma' },
      desc: {
        en: 'Crafting responsive layouts, clear visual hierarchy, and accessible branding.',
        fr: 'Conception de maquettes responsive avec hiérarchie claire et branding accessible.'
      }
    },
    {
      num: '03',
      title: { en: 'WordPress Build & Live Launch', fr: 'Développement & Déploiement' },
      desc: {
        en: 'Developing fast WordPress sites deployed live with easy client management.',
        fr: 'Développement de sites WordPress rapides, déployés directement en production.'
      }
    },
    {
      num: '04',
      title: { en: 'SEO & Speed Optimization', fr: 'SEO & Vitesse' },
      desc: {
        en: 'Mobile performance tuning, Google schema markup, and conversion tracking.',
        fr: 'Optimisation de la vitesse mobile, balisage Schema et suivi des conversions.'
      }
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FFFCF9]">
      {/* Page Header */}
      <section className="py-20 px-6 md:px-12 border-b border-stone-200/70 bg-stone-100/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            <span className="text-xs font-semibold tracking-wider text-orange-600 uppercase">
              Discipline 01 • Web Design
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-stone-900 tracking-tight mb-4">
            Web Design & WordPress
          </h1>
          <p className="text-stone-700 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            {locale === 'en'
              ? 'Custom WordPress websites and e-commerce platforms built with clean code, fast loading speeds, and immediate live deployment.'
              : 'Sites WordPress sur mesure et boutiques e-commerce conçus avec un code propre, des temps de chargement rapides et un déploiement direct.'}
          </p>
          
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-stone-700 mb-10">
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Custom WordPress & E-Commerce
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Fast Performance & SEO
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Live Production Ready
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              HTML & CSS Customization
            </span>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-2.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-stone-900 text-sm mb-1">
                Accelerated Workflow
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Streamlining boilerplate, wireframes, and design exploration to launch faster.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2.5">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-stone-900 text-sm mb-1">
                Showcases & E-Commerce
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                From service catalogs and company portals to full online stores.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5">
                <Rocket className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-stone-900 text-sm mb-1">
                Immediate Live Launch
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Deployed live on hosting, domain-connected, and operational immediately.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-stone-900 text-sm mb-1">
                HTML, CSS & Dev Control
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Clean code foundation for flexible WordPress back-office management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Client Sites Showcase */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70">
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Live Production Platforms
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">
            {locale === 'en' ? 'Client Deployments' : 'Déploiements en Production'}
          </h2>
          <p className="text-stone-600 text-base mt-2 max-w-2xl leading-relaxed">
            {locale === 'en'
              ? 'Every site is conceived from initial discovery to custom WordPress development, speed optimization, and live deployment.'
              : 'Chaque site est conçu de la découverte au design Figma, l\'implémentation WordPress sur mesure et la mise en production.'}
          </p>
        </div>

        <div className="space-y-12">
          {webClientSites.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-stone-200/90 hover:border-stone-300 rounded-2xl p-7 md:p-10 transition-all duration-300 hover:shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Preview */}
                <div className="lg:col-span-6 relative group">
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-stone-100 border border-stone-200/80 relative shadow-2xs">
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors flex items-center justify-center">
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity px-5 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold flex items-center gap-2 shadow-lg"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Metadata & Description */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                        Case 0{index + 1}
                      </span>
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-orange-600 transition-colors"
                      >
                        <span className="truncate max-w-[200px]">{site.url.replace('https://', '')}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight mb-2">
                      {site.name}
                    </h3>
                    <p className="text-xs font-medium text-orange-800 bg-orange-50 px-2.5 py-1 rounded-md inline-block mb-4 border border-orange-200/60">
                      {site.role[locale]}
                    </p>
                    <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6">
                      {site.description[locale]}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {site.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium rounded-md border border-stone-200 text-stone-700 bg-stone-50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 transition-all shadow-md active:scale-95"
                    >
                      <span>Launch Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4-Step Engineering Workflow */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-2">
            Workflow & Process
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight mb-2">
            {locale === 'en' ? 'How I Build Web Platforms' : 'Méthodologie de Conception'}
          </h2>
          <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
            {locale === 'en'
              ? 'A disciplined 4-stage process from discovery and Figma designs to live WordPress launch.'
              : 'Un processus rigoureux en 4 étapes, de l’analyse à la mise en production.'}
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {workflowSteps.map((step) => (
            <div 
              key={step.num}
              className="p-5 bg-white border border-stone-200/80 rounded-2xl shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-orange-600">
                  {step.num}
                </span>
                <span className="text-[10px] font-semibold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                  Step {step.num}
                </span>
              </div>
              
              <h3 className="font-semibold text-sm text-stone-900 mb-1.5">
                {step.title[locale]}
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                {step.desc[locale]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="p-10 md:p-14 bg-stone-100/70 border border-stone-200/80 rounded-3xl max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight mb-3">
            Ready to Build a High-Performance Site?
          </h3>
          <p className="text-stone-600 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Let's discuss your project goals, technical requirements, and timeline.
          </p>
          <Link
            to="/about#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 transition-all shadow-md active:scale-95"
          >
            <span>Start a Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
