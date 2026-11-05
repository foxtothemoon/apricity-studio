import { motion } from 'motion/react';
import { Globe, Smartphone, Sparkles, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

export default function DisciplinesOverview() {
  const { t, locale } = useLanguage();

  const disciplines = [
    {
      num: '01',
      id: 'ux-ui',
      path: '/ux-ui',
      icon: Smartphone,
      title: {
        en: 'UX UI & App Design',
        fr: 'UX UI & Design d\'Applications'
      },
      summary: {
        en: 'Human-centered mobile & web applications designed in Figma, governed by strict design systems, and tested for accessibility.',
        fr: 'Applications mobiles et web centrées sur l\'humain conçues dans Figma, régies par des design systems stricts et testées pour l\'accessibilité.'
      },
      tags: [
        { en: 'Figma Systems', fr: 'Systèmes Figma' },
        { en: 'Mobile & Web UX', fr: 'UX Mobile & Web' },
        { en: 'WCAG AA Accessibility', fr: 'Accessibilité WCAG AA' },
        { en: 'Interactive Prototypes', fr: 'Prototypes interactifs' }
      ],
      badge: 'Figma & Systems',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/70'
    },
    {
      num: '02',
      id: 'web-design',
      path: '/web-design',
      icon: Globe,
      title: {
        en: 'Web Design & WordPress',
        fr: 'Web Design & WordPress'
      },
      summary: {
        en: 'Custom WordPress & e-commerce platforms — fast loading speeds, responsive layouts, clean code, and SEO readiness from day one.',
        fr: 'Sites WordPress et e-commerce sur mesure — vitesses de chargement rapides, responsive design, code propre et SEO prêt dès le premier jour.'
      },
      tags: [
        { en: 'WordPress Expert', fr: 'Expert WordPress' },
        { en: 'Responsive Design', fr: 'Design Responsive' },
        { en: 'SEO & Performance', fr: 'SEO & Performance' },
        { en: 'HTML5 & CSS3', fr: 'HTML5 & CSS3' }
      ],
      badge: 'Live Websites',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/70'
    },
    {
      num: '03',
      id: 'vibe-coding',
      path: '/vibe-coding',
      icon: Sparkles,
      title: {
        en: 'Vibe Coding & AI Apps',
        fr: 'Vibe Coding & Applications IA'
      },
      summary: {
        en: 'High-velocity fullstack micro-apps & zero-dependency games — pairing architectural intent with Claude 3.7 & Google AI Studio.',
        fr: 'Micro-apps fullstack haute vélocité et jeux sans dépendances — alliant vision d\'architecture et pilotage avec Claude 3.7 & Google AI Studio.'
      },
      tags: [
        { en: 'Prompt Architecture', fr: 'Architecture de Prompts' },
        { en: 'Zero-Dependency Canvas', fr: 'Canvas sans dépendances' },
        { en: 'Web Audio Synthesis', fr: 'Synthèse Web Audio' },
        { en: 'Netlify Continuous Deploy', fr: 'Déploiement Continu Netlify' }
      ],
      badge: 'AI Full-Stack',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200/70'
    }
  ];

  return (
    <section id="overview" className="py-24 px-6 md:px-12 bg-stone-100/50 border-b border-stone-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="text-xs font-semibold tracking-wider text-orange-600 uppercase">
                {t('overview.badge')}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-stone-900 tracking-tight">
              {t('overview.title')}
            </h2>
            <p className="text-stone-600 text-base md:text-lg max-w-2xl mt-3 leading-relaxed">
              {t('overview.desc')}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-stone-500">
            <span className="px-3 py-1 bg-white border border-stone-200 rounded-full shadow-2xs">
              3 Disciplines
            </span>
            <span className="px-3 py-1 bg-white border border-stone-200 rounded-full shadow-2xs">
              EN / FR
            </span>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {disciplines.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative bg-white border border-stone-200/90 hover:border-stone-300 rounded-2xl p-7 md:p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Number + Icon */}
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-stone-100">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-orange-600 tracking-wider">
                        {item.num}
                      </span>
                      <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-stone-50 group-hover:bg-orange-50 text-stone-600 group-hover:text-orange-600 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Concise Summary */}
                  <h3 className="text-xl md:text-2xl font-semibold text-stone-900 tracking-tight mb-3 group-hover:text-orange-600 transition-colors">
                    {item.title[locale]}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {item.summary[locale]}
                  </p>

                  {/* Capabilities Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2.5 py-1 bg-stone-100 text-stone-700 text-xs font-medium rounded-md"
                      >
                        {tag[locale]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Page Link */}
                <Link
                  to={item.path}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-stone-100 text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-orange-600 transition-colors"
                >
                  <span>Explore {item.title[locale]}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
