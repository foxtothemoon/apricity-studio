import { motion } from 'motion/react';
import { 
  Smartphone, 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles,
  Users,
  Workflow,
  Layers,
  PlayCircle,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { projects } from '../data';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function UxUiPage() {
  const { locale } = useLanguage();
  const navigate = useNavigate();
  // 3 UX/UI Showcase Projects in exact requested order: CarePill, MoodyChild, Route
  const carepill = projects.find(p => p.slug.includes('carepill'));
  const moodyChild = projects.find(p => p.slug.includes('moody'));
  const routeApp = projects.find(p => p.slug.includes('route'));

  const appProjects = [carepill, moodyChild, routeApp].filter(Boolean) as typeof projects;

  const getProjectHighlights = (slug: string) => {
    if (slug.includes('route')) {
      return [
        locale === 'fr'
          ? 'Disponibilité des bornes en direct et calcul d\'itinéraire batterie'
          : 'Real-time charger availability and battery trip planning',
        locale === 'fr'
          ? 'Paiement Plug-and-Charge unifié et filtres de puissance (kW)'
          : 'Unified Plug-and-Charge with charging speed filters (kW)',
        locale === 'fr'
          ? 'Design System Figma dédié et interface nuit sans distraction'
          : 'Dedicated automotive Figma design system and night-mode UI'
      ];
    }
    if (slug.includes('survive')) {
      return [
        'Face-gesture input (smile/scowl interaction)',
        'HTML5 Canvas & Web Audio engine',
        '30 to 60 second micro-break loop'
      ];
    }
    if (slug.includes('moody')) {
      return [
        '2-tap frictionless mood logging',
        'Tactile stickers & expressive feedback',
        '100% private local storage'
      ];
    }
    return [
      'Universal care model with in-app typography scaling for older adults',
      'Dual care spaces: "For myself" (Mint #C4F5E1) & "For someone I love" (Lilac #E8DDFE)',
      '40+ screen interactive Figma prototype with deep edge-case governance'
    ];
  };

  const designPhases = [
    {
      step: '01',
      title: { en: 'User Research', fr: 'Recherche Utilisateur' },
      subtitle: { en: 'Discovery & Empathy', fr: 'Découverte & Empathie' },
      desc: {
        en: 'Talking directly to users to understand real pain points, daily friction, and underlying emotional habits.',
        fr: 'Échanger avec les utilisateurs pour comprendre les vrais besoins, habitudes et points de friction.'
      },
      deliverable: { en: 'Personas & Friction Map', fr: 'Personas & Cartographie' },
      icon: Users
    },
    {
      step: '02',
      title: { en: 'Information Flow', fr: 'Architecture des Flux' },
      subtitle: { en: 'Structure & Logic', fr: 'Structure & Logique' },
      desc: {
        en: 'Structuring simple task flows, navigational clarity, and edge-case branching so actions feel effortless.',
        fr: 'Structurer des parcours simples, une hiérarchie claire et des scénarios alternatifs sans friction.'
      },
      deliverable: { en: 'Task Flows & Wireframes', fr: 'Parcours Tâches & Wireframes' },
      icon: Workflow
    },
    {
      step: '03',
      title: { en: 'Figma Systems', fr: 'Systèmes Figma' },
      subtitle: { en: 'Scalable Foundations', fr: 'Fondations Évolutives' },
      desc: {
        en: 'Crafting production-ready component libraries, WCAG AA contrast tokens, auto-layout, and clean spatial grids.',
        fr: 'Créer des composants modulaires, un contraste accessible WCAG et des grilles propres.'
      },
      deliverable: { en: 'Tokens & Reusable Components', fr: 'Tokens & Composants Modulaires' },
      icon: Layers
    },
    {
      step: '04',
      title: { en: 'Prototypes & Testing', fr: 'Prototypes & Tests' },
      subtitle: { en: 'Usability Validation', fr: 'Validation Ergonomique' },
      desc: {
        en: 'Building high-fidelity interactive prototypes to validate ergonomics, gather feedback, and refine before code.',
        fr: 'Créer des prototypes interactifs pour tester l’ergonomie et peaufiner avant le code.'
      },
      deliverable: { en: 'Interactive Figma Prototype', fr: 'Prototype Interactif Figma' },
      icon: PlayCircle
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FFFCF9]">
      {/* Page Header */}
      <section className="py-20 px-6 md:px-12 border-b border-stone-200/70 bg-stone-100/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
              Discipline 01 • UX UI & App Design
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-stone-900 tracking-tight mb-6">
            UX UI & App Design
          </h1>
          <p className="text-stone-600 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            {locale === 'en'
              ? 'Designing clear, accessible interfaces for apps and websites, tested with real users and ready to build.'
              : 'Concevoir des interfaces claires et accessibles pour applications et sites web, testées avec de vrais utilisateurs et prêtes à développer.'}
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-stone-600 font-mono">
            <span>Mobile & Web UX</span>
            <span className="text-stone-300">·</span>
            <span>Figma Design Systems</span>
            <span className="text-stone-300">·</span>
            <span>WCAG AA Accessibility</span>
            <span className="text-stone-300">·</span>
            <span>Micro-Interactions</span>
          </div>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70">
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
            <Smartphone className="w-3.5 h-3.5 text-blue-600" />
            <span>Product Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-stone-900 tracking-tight">
            Research & Interactive Prototypes
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed font-sans">
            {locale === 'fr'
              ? 'Études de cas approfondies résolvant des défis de santé, pédiatrie et mobilité par le design centré utilisateur.'
              : 'Case studies solving healthcare, pediatric, and behavioral challenges through human-centered design.'}
          </p>
        </div>

        {/* 3 Case Study Cards - Clean, Spacious & Unified */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {appProjects.map((project, index) => (
            <motion.div
              key={project.id}
              id={project.slug.includes('carepill') ? 'carepill' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => navigate(`/projects/${project.slug}`)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(`/projects/${project.slug}`);
                }
              }}
              tabIndex={0}
              role="link"
              aria-label={`${project.title[locale]} - Explore Case Study`}
              className="group relative p-6 sm:p-7 bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between scroll-mt-24 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <div className="space-y-4">
                {/* Visual Preview */}
                <div className="relative overflow-hidden rounded-xl bg-stone-50 border border-stone-200/80 aspect-[16/10] flex items-center justify-center">
                  <img
                    src={project.imageUrl}
                    alt={project.title[locale]}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  />
                </div>

                {/* Header Row: Case Index & Category */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-stone-600 group-hover:text-blue-600 transition-colors bg-stone-100/70 group-hover:bg-blue-50 px-2.5 py-1 rounded-full border border-stone-200/60 group-hover:border-blue-200">
                    CASE 0{index + 1}
                  </span>
                  <span className="text-xs font-mono text-stone-500 truncate max-w-[180px]">
                    {project.category[locale]}
                  </span>
                </div>

                {/* Titles & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-stone-900 group-hover:text-blue-600 transition-colors tracking-tight">
                    {project.title[locale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {project.description[locale]}
                  </p>
                </div>

                {/* Key Deliverables & Focus - Clean & Readable */}
                <div className="space-y-2 pt-2">
                  {getProjectHighlights(project.slug).slice(0, 3).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      <span className="truncate">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] font-mono font-medium rounded-md border border-stone-200/80 text-stone-600 bg-stone-50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono text-stone-900 group-hover:text-blue-600 transition-colors">
                  <span>{locale === 'fr' ? 'Voir l’Étude de Cas' : 'Explore Case Study'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </span>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="relative z-10 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-[11px] font-mono font-medium transition-colors"
                    title="Live Web Prototype"
                  >
                    <span>Live App</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout to Vibe Coding for Micro-Apps & Games - Clean & Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center shrink-0 shadow-2xs">
              <Sparkles className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                  Discipline 03 • AI Vibe Coding
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold font-heading text-stone-900">
                {locale === 'fr' ? 'Micro-Apps & Jeux Interactifs' : 'Interactive Micro-Apps & Games'}
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm mt-0.5 max-w-2xl leading-relaxed font-sans">
                {locale === 'fr'
                  ? 'Découvrez Moody Child (journal émotionnel) et Survive \'til five (jeu arcade canvas) développés rapidement avec des workflows IA modernes.'
                  : 'See how rapid AI vibe coding brings playable canvas games and full-stack micro-apps to life in hours.'}
              </p>
            </div>
          </div>
          <Link
            to="/vibe-coding"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs"
          >
            <span>{locale === 'fr' ? 'Voir le Vibe Coding' : 'Explore Vibe Coding'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </section>


      {/* UX Design Framework: Standout, Eye-catching yet Ultra-Clean */}
      <section className="py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-white to-[#FDFBF7] border border-stone-200/90 p-8 sm:p-12 md:p-16 shadow-xs overflow-hidden">
          
          {/* Subtle Ambient Decorative Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-orange-100/35 blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="relative z-10 mb-14 text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>Design Methodology</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-stone-900 tracking-tight">
              Process & Architecture
            </h2>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              {locale === 'fr'
                ? 'De la recherche terrain aux flux d’information jusqu’aux design systems Figma modulaires et prêts pour la production.'
                : 'From user research and information flows to scalable Figma design systems.'}
            </p>
          </div>

          {/* 4 Connected Cards with Step Flow */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {designPhases.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 sm:p-7 bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon + Phase Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-stone-50 border border-stone-200/80 text-stone-800 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors shadow-2xs">
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-stone-600 group-hover:text-blue-600 transition-colors bg-stone-100/70 group-hover:bg-blue-50 px-2.5 py-1 rounded-full border border-stone-200/60 group-hover:border-blue-200">
                        PHASE {phase.step}
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-stone-900 group-hover:text-blue-600 transition-colors">
                        {phase.title[locale]}
                      </h3>
                      <span className="text-xs font-mono text-stone-600 font-medium block">
                        {phase.subtitle[locale]}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {phase.desc[locale]}
                    </p>
                  </div>

                  {/* Bottom Deliverable Tag */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-600">
                    <span className="truncate">{phase.deliverable[locale]}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Quality Pillars Strip */}
          <div className="relative z-10 mt-12 pt-6 border-t border-stone-200/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-mono text-stone-600 text-center">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Human-Centered & Evidence-Based
            </span>
            <span className="hidden sm:inline text-stone-300">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Figma Variables & Auto-Layout
            </span>
            <span className="hidden sm:inline text-stone-300">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              WCAG AA Accessibility Ready
            </span>
          </div>

        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="p-10 md:p-14 bg-stone-100/70 border border-stone-200/80 rounded-3xl max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight mb-3">
            Have a Digital Product in Mind?
          </h3>
          <p className="text-stone-600 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            From user journey mapping to comprehensive Figma design systems, let's create a product that works seamlessly.
          </p>
          <Link
            to="/about#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 transition-all shadow-md active:scale-95"
          >
            <span>Start a UX Collaboration</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
