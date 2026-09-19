import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, ArrowUpRight, CheckCircle2, Play, X, ExternalLink, Sliders } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { projects } from '../data';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import UxProductDesignSystems from '../components/UxProductDesignSystems';

export default function UxUiPage() {
  const { locale } = useLanguage();
  const appProjects = projects.filter(p => p.categoryType === 'app');
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  const [activeDesignSystemId, setActiveDesignSystemId] = useState<string>('carepill');

  const getProjectHighlights = (slug: string) => {
    if (slug.includes('survive')) {
      return [
        'Face-gesture input (smile/scowl interaction)',
        'HTML5 Canvas & Web Audio engine',
        '30–60 second micro-break loop'
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
      'High-contrast accessible typography',
      'Safety confirmation on critical doses',
      'Dual interface for seniors and family caregivers'
    ];
  };

  const designPhases = [
    {
      step: '01',
      title: { en: 'User Research', fr: 'Recherche Utilisateur' },
      desc: {
        en: 'Talking to users to understand real pain points, daily habits, and workflow friction.',
        fr: 'Échanger avec les utilisateurs pour comprendre les vrais besoins et points de friction.'
      }
    },
    {
      step: '02',
      title: { en: 'Information Flow', fr: 'Architecture des Flux' },
      desc: {
        en: 'Structuring simple task flows and clear hierarchies so navigation feels effortless.',
        fr: 'Structurer des parcours simples et une hiérarchie claire pour une navigation fluide.'
      }
    },
    {
      step: '03',
      title: { en: 'Figma Systems', fr: 'Systèmes Figma' },
      desc: {
        en: 'Building scalable component libraries, accessible contrast, and clean layout grids.',
        fr: 'Créer des composants modulaires, un contraste accessible et des grilles propres.'
      }
    },
    {
      step: '04',
      title: { en: 'Prototypes & Testing', fr: 'Prototypes & Tests' },
      desc: {
        en: 'Creating clickable prototypes to test usability, get feedback, and refine before code.',
        fr: 'Créer des prototypes interactifs pour tester l’ergonomie et peaufiner avant le code.'
      }
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
              Discipline 02 • UX UI & App Design
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-stone-900 tracking-tight mb-6">
            UX UI & App Design
          </h1>
          <p className="text-stone-600 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            {locale === 'en'
              ? 'Designing clear, accessible interfaces for apps and websites — tested with real users and ready to build.'
              : 'Concevoir des interfaces claires et accessibles pour applications et sites web — testées avec de vrais utilisateurs et prêtes à développer.'}
          </p>
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-stone-600">
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Mobile & Web UX
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Figma Design Systems
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              WCAG AA Accessibility
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Interactive Micro-Interactions
            </span>
            <a
              href="#ux-design-systems-section"
              className="px-3.5 py-1.5 bg-blue-50 text-blue-900 border border-blue-200/90 rounded-full shadow-2xs hover:bg-blue-100 transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Sliders className="w-3.5 h-3.5 text-blue-600" />
              <span>Design Systems & Tokens</span>
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Smartphone className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Product Case Studies
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">
            Research & Interactive Prototypes
          </h2>
          <p className="text-stone-600 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
            Case studies solving healthcare, pediatric, and behavioral challenges through human-centered design.
          </p>
        </div>

        <div className="space-y-12">
          {appProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-stone-200/90 hover:border-stone-300 rounded-2xl p-7 md:p-10 transition-all duration-300 hover:shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Preview */}
                <div className="lg:col-span-6">
                  <div className="relative group overflow-hidden rounded-xl bg-stone-100 border border-stone-200/80 aspect-[16/10] flex items-center justify-center p-2">
                    <img
                      src={project.imageUrl}
                      alt={project.title[locale]}
                      className="w-full h-full object-cover object-top rounded drop-shadow-sm group-hover:scale-103 transition-transform duration-500"
                    />
                    
                    {/* Prototype quick launch trigger */}
                    {project.liveUrl && (
                      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/25 transition-colors flex items-center justify-center">
                        <button
                          onClick={() => setSelectedDemo(project.slug)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity px-5 py-2.5 rounded-full bg-white text-stone-900 text-xs font-semibold flex items-center gap-2 shadow-lg"
                        >
                          <Play className="w-3.5 h-3.5 fill-current text-blue-600" />
                          <span>Preview Prototype</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Case Study Details */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                        Product Case 0{index + 1}
                      </span>
                      <span className="text-stone-300">•</span>
                      <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                        {project.category[locale]}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight mb-2">
                      {project.title[locale]}
                    </h3>
                    <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6">
                      {project.description[locale]}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2.5 mb-6 p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                      {getProjectHighlights(project.slug).map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium rounded-md border border-stone-200 text-stone-700 bg-stone-50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 transition-all shadow-md active:scale-95"
                      >
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href="#ux-design-systems-section"
                        onClick={() => {
                          if (project.slug.includes('carepill')) setActiveDesignSystemId('carepill');
                          else if (project.slug.includes('moody')) setActiveDesignSystemId('moody-child');
                          else if (project.slug.includes('survive')) setActiveDesignSystemId('survive-til-five');
                        }}
                        className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-stone-100 hover:bg-stone-200/80 text-stone-800 text-xs font-semibold uppercase tracking-wider transition-colors border border-stone-200"
                      >
                        <Sliders className="w-3.5 h-3.5 text-blue-600" />
                        <span>Design System</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-stone-300 text-stone-700 text-xs font-medium uppercase tracking-wider hover:border-stone-900 transition-colors"
                        >
                          <span>Open Live / Prototype</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Design Systems & Component Governance (Back-of-House Architecture) */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <UxProductDesignSystems
          activeSystemId={activeDesignSystemId}
          onSelectSystem={(id) => setActiveDesignSystemId(id)}
        />
      </section>

      {/* UX Design Framework */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase block mb-2">
            Design Methodology
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight mb-2">
            Process & Architecture
          </h2>
          <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
            From user research and information flows to scalable Figma design systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {designPhases.map((phase, idx) => (
            <div key={idx} className="p-5 bg-white border border-stone-200/80 rounded-2xl shadow-2xs hover:shadow-md transition-shadow">
              <span className="text-lg font-bold text-blue-600 block mb-2">
                {phase.step}
              </span>
              <h3 className="font-semibold text-sm text-stone-900 mb-1.5">
                {phase.title[locale]}
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                {phase.desc[locale]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Prototype Modal */}
      <AnimatePresence>
        {selectedDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-white rounded-2xl p-6 max-w-3xl w-full border border-stone-200 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-stone-900">Prototype Preview</h4>
                  <p className="text-xs text-stone-500">Live UX Simulation</p>
                </div>
                <button
                  onClick={() => setSelectedDemo(null)}
                  className="p-2 rounded-full hover:bg-stone-100 text-stone-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="aspect-video bg-stone-100 rounded-xl flex items-center justify-center overflow-hidden border border-stone-200">
                {selectedDemo.includes('carepill') && (
                  <img
                    src="/carepill-action.gif"
                    alt="Carepill Demo"
                    className="max-h-full object-contain"
                  />
                )}
                {selectedDemo.includes('moody') && (
                  <img
                    src="/moody-child-record.png"
                    alt="Moody Child Demo"
                    className="max-h-full object-contain"
                  />
                )}
                {selectedDemo.includes('survive') && (
                  <img
                    src="/survive-til-five.gif"
                    alt="Survive 'Til Five Demo"
                    className="max-h-full object-contain"
                  />
                )}
              </div>

              <div className="mt-6 flex items-center justify-between">
                {selectedDemo.includes('survive') ? (
                  <a
                    href="https://survivetilfive.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Play Live Game</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div></div>
                )}
                <button
                  onClick={() => setSelectedDemo(null)}
                  className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
