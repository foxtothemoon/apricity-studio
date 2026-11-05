import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../data';
import { useLanguage } from '../LanguageContext';
import { ArrowLeft, ArrowUpRight, Palette, Type, ShieldCheck, Cpu, Sliders, Check, ExternalLink } from 'lucide-react';
import Footer from '../components/Footer';
import { uxDesignSystems } from '../components/UxProductDesignSystems';
import CarePillCaseStudy from '../components/CarePillCaseStudy';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { locale, t } = useLanguage();
  
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFCF9]">
        <h1 className="text-4xl font-serif text-stone-900">Project not found</h1>
      </div>
    );
  }

  if (project.slug.includes('carepill')) {
    return (
      <div className="bg-[#FFFCF9]">
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
          <div className="flex items-center gap-3 mb-10">
            <Link 
              to="/ux-ui" 
              className="inline-flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors font-sans uppercase tracking-widest text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> 
              <span>{t('project.back')}</span>
            </Link>
            <span className="text-stone-300">•</span>
            <Link to="/" className="text-stone-400 hover:text-stone-700 transition-colors text-xs font-mono uppercase tracking-wider">
              Home Overview
            </Link>
          </div>

          <CarePillCaseStudy />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#FFFCF9]">
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        <div className="flex items-center gap-3 mb-12">
          <Link 
            to={project.categoryType === 'vibe_coding' ? '/vibe-coding' : '/ux-ui'} 
            className="inline-flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors font-sans uppercase tracking-widest text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> 
            <span>{project.categoryType === 'vibe_coding' ? 'Back to Vibe Coding' : t('project.back')}</span>
          </Link>
          <span className="text-stone-300">•</span>
          <Link to="/" className="text-stone-400 hover:text-stone-700 transition-colors text-xs font-mono uppercase tracking-wider">
            Home Overview
          </Link>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-stone-400">No. {project.id}</span>
            <span className="h-px bg-stone-300 w-12"></span>
            <span className="text-amber-600 font-sans text-xs font-bold tracking-widest uppercase">
              {project.category[locale]}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 italic">
            {project.title[locale]}
          </h1>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-medium uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-16">
            {project.figmaUrl && (
              <a 
                href={project.figmaUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-stone-900 text-white text-sm font-semibold hover:bg-black transition-all shadow-md active:scale-95 group"
              >
                <span>Inspect in Figma</span>
                <ExternalLink className="ml-2 w-4 h-4 text-emerald-400" />
              </a>
            )}

            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition-all shadow-md active:scale-95 group"
              >
                {t('project.prototype')}
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            )}
          </div>
        </motion.div>

        {(() => {
          if (project.slug.includes('carepill')) {
            const artifacts = [
              {
                title: "01 · Project Philosophy & Dual Care Spaces",
                desc: "Universal medication tracking built on 'Small moments. A kinder way to care.' Segmented into distinct 'For myself' (#C4F5E1 Mint) and 'For someone I love' (#E8DDFE Lilac) spaces with mutual consent.",
                img: "/assets/aistudio/00___CarePill_87abe415.png"
              },
              {
                title: "02 · Intentional Color System ('Color with a Clear Job')",
                desc: "Systematic color token architecture: Caretaker Mint, Caregiver Lilac, Taken confirmation, Upcoming soft yellow (#FFF0AC), Missed/unrecorded soft coral (#FFBFC7), and Warm Pink primary action.",
                img: "/assets/aistudio/02___Color___role_71f20287.png"
              },
              {
                title: "03 · Coherent Care Model & Architectural Pillars",
                desc: "5 UX Pillars: 01 Role clarity (QR onboarding & Care ID), 02 Restrained color, 03 Information hierarchy, 04 Gentle 2s dismissal actions, and 05 Realistic scheduling with collapsed custom weekdays.",
                img: "/assets/aistudio/04___Case_study_8fdd29c2.png"
              },
              {
                title: "04 · Beyond the Happy Path: Edge Cases & Typography Scaling",
                desc: "In-app scalable typography (Standard vs. Larger text mode for elderly comfort without clipping), empty states, consent circles, dark mode tokens, and LINE Seed Sans TH multilingual line-height verification.",
                img: "/assets/aistudio/06___States___review_c5b61f1b.png"
              },
              {
                title: "05 · Interactive Figma Prototype (40+ Interconnected Screens)",
                desc: "High-density prototype node graph in Figma showing complete interaction architecture, role switching, confirmation sheets, and multi-path branching.",
                img: "/assets/aistudio/Screenshot_2026-10-28_114929_f77479ee.png"
              }
            ];

            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-12 mb-24"
              >
                <div className="grid grid-cols-1 gap-10">
                  {artifacts.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white border border-stone-200/90 rounded-3xl overflow-hidden p-6 md:p-8 shadow-xs hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-5 border-b border-stone-100 gap-2">
                        <div>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                            Figma Artifact {item.title.split('·')[0].trim()}
                          </span>
                          <h3 className="text-lg md:text-xl font-bold text-stone-900">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xs md:text-sm text-stone-600 max-w-xl leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="rounded-2xl overflow-hidden border border-stone-200/80 bg-[#FAFAFA] flex items-center justify-center">
                        <img 
                          src={item.img} 
                          alt={item.title}
                          className="w-full h-auto max-h-[750px] object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Live GIF Demo Interaction */}
                <div className="p-8 rounded-3xl bg-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="space-y-3 max-w-md">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                      Live Interaction Test
                    </span>
                    <h3 className="text-2xl font-bold">
                      One-Tap Logging Micro-Interaction
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Instant feedback with haptic-ready confirmation checkmarks and gentle auto-dismissing modals tested for older adults and busy individuals.
                    </p>
                    <div className="pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-semibold text-xs transition-colors"
                      >
                        <span>Open Live Web App</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="w-full max-w-[320px] rounded-2xl overflow-hidden border border-stone-700 shadow-2xl bg-black">
                    <img
                      src="/carepill-action.gif"
                      alt="Carepill Live Interaction"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          }

          const galleryImages = project.images ? project.images.filter(img => !img.includes('figma')) : [];
          if (galleryImages.length > 0) {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 max-w-3xl mx-auto w-full mb-20"
              >
                {galleryImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="w-full max-w-[250px] sm:max-w-[280px] rounded-[28px] overflow-hidden border border-stone-200/90 bg-stone-100/50 p-1.5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img 
                      src={img} 
                      alt={`${project.title[locale]} - Screenshot ${idx + 1}`}
                      className="w-full h-auto block rounded-[22px] max-h-[520px] object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            );
          } else {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl mx-auto overflow-hidden border border-stone-200/90 rounded-2xl shadow-sm mb-20 bg-stone-50/50 p-2"
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title[locale]}
                  className="w-full h-auto max-h-[440px] object-contain rounded-xl block mx-auto"
                />
              </motion.div>
            );
          }
        })()}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 flex flex-col gap-12">
            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-stone-400 mb-4">{t('project.overview')}</h3>
              <p className="text-stone-800 text-lg leading-relaxed">
                {project.details.overview[locale]}
              </p>
            </div>
            
            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-stone-400 mb-4">{t('project.goals')}</h3>
              <ul className="space-y-3">
                {project.details.goals[locale].map((goal, i) => (
                  <li key={i} className="flex gap-3 text-stone-700 text-base leading-relaxed">
                    <span className="text-orange-500 mt-0.5">✦</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-8 flex flex-col gap-14">
            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-stone-400 mb-4">{t('project.problemStatement')}</h3>
              <p className="text-stone-700 text-base md:text-lg leading-relaxed">
                {project.details.problemStatement[locale]}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-stone-400 mb-4">{t('project.painpoints')}</h3>
              <ul className="space-y-3">
                {project.details.painPoints[locale].map((point, i) => (
                  <li key={i} className="flex gap-3 text-stone-700 text-base md:text-lg leading-relaxed">
                    <span className="text-orange-500 mt-0.5">✦</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-stone-400 mb-4">{t('project.persona')}</h3>
              <p className="text-stone-700 text-base md:text-lg leading-relaxed">
                {project.details.userPersona[locale]}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-stone-400 mb-4">{t('project.ideation')}</h3>
              <p className="text-stone-700 text-base md:text-lg leading-relaxed mb-8">
                {project.details.ideation[locale]}
              </p>
              
              {(() => {
                const figmaImages = project.images ? project.images.filter(img => img.includes('figma')) : [];
                if (figmaImages.length > 0) {
                  return (
                    <div className="grid grid-cols-1 gap-6 mt-8">
                      {figmaImages.map((img, idx) => (
                        <div key={idx} className="border border-stone-200/80 bg-stone-50 overflow-hidden relative rounded-2xl shadow-sm">
                          <img 
                            src={img} 
                            alt={`${project.title[locale]} - Figma Prototype`}
                            className="w-full h-auto block"
                          />
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              })()}
            </div>
            
            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-stone-400 mb-4">{t('project.uidesign')}</h3>
              <p className="text-stone-700 text-base md:text-lg leading-relaxed">
                {project.details.uiDesign[locale]}
              </p>
            </div>

            {/* Back-of-House Design System & Architecture */}
            {(() => {
              const matchingSystem = uxDesignSystems.find(s => s.slug === project.slug);
              if (!matchingSystem) return null;
              return (
                <div className="p-6 md:p-8 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                        <Sliders className="w-3.5 h-3.5" />
                        <span>Back-of-House Design System</span>
                      </div>
                      <h4 className="text-xl font-bold text-stone-900">
                        {matchingSystem.appName} : Design Tokens & Component Hierarchy
                      </h4>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200 font-mono self-start sm:self-auto">
                      {matchingSystem.badge}
                    </span>
                  </div>

                  {/* Color Tokens Swatches */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-blue-600" /> Color Tokens & WCAG Contrast
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {matchingSystem.colorTokens.map((col, cIdx) => (
                        <div key={cIdx} className="p-2.5 rounded-xl border border-stone-200 bg-stone-50/70 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div
                              className="w-6 h-6 rounded-md shrink-0 border border-stone-300"
                              style={{ backgroundColor: col.hex }}
                            />
                            <div className="min-w-0">
                              <span className="font-semibold text-stone-900 block truncate">{col.name}</span>
                              <span className="font-mono text-[10px] text-stone-400 block">{col.token}</span>
                            </div>
                          </div>
                          <span className="font-mono text-[11px] font-bold text-stone-700 shrink-0">{col.hex}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Component Hierarchy & State Machine */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-indigo-600" /> Component Tokens & Hierarchy
                      </span>
                      <ul className="space-y-1.5 text-xs text-stone-600">
                        {matchingSystem.backOfHouseArchitecture.componentHierarchy[locale].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-indigo-500 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Accessibility & Guardrails
                      </span>
                      <ul className="space-y-1.5 text-xs text-stone-600">
                        {matchingSystem.backOfHouseArchitecture.accessibilityAndSafety[locale].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-500 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacing & Developer Handoff */}
                  <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-700">
                    <div>
                      <strong className="text-blue-950 font-semibold">Grid & Scale:</strong> {matchingSystem.spacingAndRadius.grid} • {matchingSystem.spacingAndRadius.radiusFormula}
                    </div>
                    <div className="text-stone-500 font-mono text-[11px]">
                      {matchingSystem.spacingAndRadius.elevation}
                    </div>
                  </div>
                </div>
              );
            })()}
            
            {project.details.coreFeatures && (
              <div>
                <h3 className="text-xs font-semibold tracking-wider uppercase text-stone-400 mb-4">{t('project.coreFeatures')}</h3>
                <p className="text-stone-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {project.details.coreFeatures[locale]}
                </p>
              </div>
            )}

            {project.details.technicalHighlights && (
              <div>
                <h3 className="text-xs font-semibold tracking-wider uppercase text-stone-400 mb-4">{t('project.technicalHighlights')}</h3>
                <p className="text-stone-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {project.details.technicalHighlights[locale]}
                </p>
              </div>
            )}

            {project.details.aiWorkflow && (
              <div className="bg-stone-900 text-white p-8 rounded-2xl shadow-md mb-6">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-orange-400 mb-3">{t('project.aiWorkflow')}</h3>
                <p className="text-stone-200 text-base leading-relaxed">
                  {project.details.aiWorkflow[locale]}
                </p>
              </div>
            )}

            <div className="p-8 bg-orange-50/50 border border-orange-200/70 rounded-2xl">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-orange-700 mb-3">{t('project.outcome')}</h3>
              <p className="text-stone-900 text-xl font-medium leading-relaxed">
                "{project.details.outcome[locale]}"
              </p>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
