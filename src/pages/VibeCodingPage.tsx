import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Play, 
  X, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Gamepad2, 
  Heart, 
  Code2, 
  Rocket, 
  Clock 
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { projects } from '../data';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function VibeCodingPage() {
  const { locale } = useLanguage();
  const vibeProjects = projects.filter(p => p.categoryType === 'vibe_coding');
  const [activeModalUrl, setActiveModalUrl] = useState<{ url: string; title: string } | null>(null);

  const workflowSteps = [
    {
      step: '01',
      title: { en: 'Prompt Architecture & Spec', fr: 'Architecture & Spécification' },
      desc: {
        en: 'Formulating explicit system prompts: defining data schemas, state machines, edge constraints, and accessibility rules before coding.',
        fr: 'Formulation d\'invites système précises : définition des modèles de données, machines d\'état et règles d\'accessibilité avant de coder.'
      },
      tag: 'System Design'
    },
    {
      step: '02',
      title: { en: 'AI Co-Generation (Claude & Gemini)', fr: 'Co-Génération IA (Claude & Gemini)' },
      desc: {
        en: 'Steering LLMs (Claude 3.7 Sonnet & Google AI Studio) to generate modular components, reactive physics, and clean styling without bloat.',
        fr: 'Pilotage de LLMs de pointe pour générer des composants modulaires, une physique réactive et un style épuré sans surcharge.'
      },
      tag: 'High Velocity'
    },
    {
      step: '03',
      title: { en: 'Zero-Bloat Procedural Assets', fr: 'Assets Procéduraux Zéro Dépendance' },
      desc: {
        en: 'Generating live synthesized sound via Web Audio API and procedural vector SVGs — eliminating bulky MP3 and image asset downloads.',
        fr: 'Génération de son en direct via l\'API Web Audio et de vecteurs SVG procéduraux — supprimant le téléchargement d\'assets lourds.'
      },
      tag: '0KB Audio Overhead'
    },
    {
      step: '04',
      title: { en: 'AI Bot QA & Continuous Deploy', fr: 'AQ par Bots IA & Déploiement Continu' },
      desc: {
        en: 'Headless AI bot simulations run thousands of automated test runs to tune difficulty curves, followed by instant Netlify continuous deployment.',
        fr: 'Des bots d\'IA exécutent des milliers de simulations automatisées pour équilibrer la difficulté, suivis d\'un déploiement continu sur Netlify.'
      },
      tag: 'Automated Balance'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FFFCF9]">
      {/* 1. Page Header */}
      <section className="py-20 px-6 md:px-12 border-b border-stone-200/70 bg-stone-100/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="text-xs font-semibold tracking-wider text-amber-700 uppercase font-mono">
              Discipline 03 • AI-Powered Full-Stack
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-stone-900 tracking-tight mb-6 flex flex-wrap items-center gap-4">
            <span>Vibe Coding & AI Apps</span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-sm font-mono font-medium">
              <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
              Speed of Thought
            </span>
          </h1>

          <p className="text-stone-700 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            {locale === 'en'
              ? 'Engineering functional, production-ready web applications and browser games rapidly using modern AI workflows (Claude 3.7 Sonnet & Google AI Studio), paired with solid frontend fundamentals, Web Audio synthesis, and procedural canvas graphics.'
              : 'Développement d’applications web et de jeux de navigateur prêts pour la production à grande vitesse grâce aux workflows d’IA modernes (Claude 3.7 Sonnet & Google AI Studio), alliés à de solides bases front-end, la synthèse Web Audio et le rendu Canvas procédural.'}
          </p>

          {/* Core Tags */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-stone-700 mb-8">
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Prompt Architecture
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Claude 3.7 Sonnet & Gemini
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              HTML5 Canvas (Zero Deps)
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Web Audio API Synthesizer
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Edge Sandboxed Privacy
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Netlify Continuous Deploy
            </span>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-stone-200/80">
            <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-2xs">
              <span className="text-2xl font-bold font-mono text-amber-600 block">0 KB</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-medium">Audio Assets (Synthesized Live)</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-2xs">
              <span className="text-2xl font-bold font-mono text-amber-600 block">0 Deps</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-medium">Canvas Game Runtime</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-2xs">
              <span className="text-2xl font-bold font-mono text-amber-600 block">&lt; 48 hrs</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-medium">Idea to Live Netlify Deploy</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-2xs">
              <span className="text-2xl font-bold font-mono text-amber-600 block">100%</span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-medium">Client Sandboxed Privacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Flagship Vibe Coded Projects */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
              Live Showcase
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">
            Flagship Vibe Coded Applications
          </h2>
          <p className="text-stone-600 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
            Real, fully interactive browser applications created by combining design psychology with AI prompt engineering.
          </p>
        </div>

        <div className="space-y-16">
          {vibeProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-stone-200/90 rounded-2xl p-7 md:p-10 shadow-sm hover:border-amber-400 hover:shadow-md transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Visual Preview */}
                <div className="lg:col-span-6">
                  <div className="relative group overflow-hidden rounded-xl bg-stone-950 border border-stone-800 aspect-[16/10] flex items-center justify-center shadow-inner">
                    <img
                      src={project.imageUrl}
                      alt={project.title[locale]}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />

                    {/* Interactive Play/Preview Overlay */}
                    {project.liveUrl && (
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex flex-col items-center justify-center gap-3">
                        <button
                          onClick={() => setActiveModalUrl({ url: project.liveUrl!, title: project.title[locale] })}
                          className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform hover:scale-105 active:scale-95"
                        >
                          <Play className="w-4 h-4 fill-current text-stone-950" />
                          <span>{project.slug.includes('survive') ? 'Play Inside Portfolio' : 'Test App Inside Portfolio'}</span>
                        </button>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-white text-[11px] font-mono flex items-center gap-1 underline underline-offset-4"
                        >
                          <span>Open in New Tab</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Information & Deep-Dive Rationale */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest">
                        Case 0{index + 1} • {project.category[locale]}
                      </span>
                      <span className="text-stone-300">•</span>
                      <span className="text-xs font-mono text-stone-500">
                        {project.slug.includes('survive') ? 'HTML5 Canvas Arcade' : 'Micro-Journal Web App'}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight mb-3">
                      {project.title[locale]}
                    </h3>

                    <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-5">
                      {project.details.overview[locale]}
                    </p>

                    {/* Vibe Engineering Highlights */}
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 mb-6 space-y-2">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>AI Workflow & Engineering Architecture</span>
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        {project.details.aiWorkflow[locale]}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono rounded-md border border-stone-200 bg-white text-stone-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {project.liveUrl && (
                        <button
                          onClick={() => setActiveModalUrl({ url: project.liveUrl!, title: project.title[locale] })}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-all shadow-md active:scale-95"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{project.slug.includes('survive') ? 'Play Live' : 'Launch App'}</span>
                        </button>
                      )}

                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-stone-300 text-stone-800 text-xs font-semibold uppercase tracking-wider hover:border-stone-900 transition-colors"
                      >
                        <span>Full Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-3 text-stone-500 hover:text-stone-900 text-xs font-mono uppercase tracking-wider transition-colors"
                        >
                          <span>Direct Link</span>
                          <ExternalLink className="w-3 h-3" />
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

      {/* 3. Vibe Coding Methodology (Process & Philosophy) */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>The 4-Step Engineering Loop</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight mb-3">
            How I Vibe Code with AI
          </h2>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed">
            Vibe coding is not blind guesswork — it is strict software architecture orchestrated with natural-language AI steering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-stone-200/80 rounded-2xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                  <span className="text-2xl font-bold font-mono text-amber-600">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/60 uppercase">
                    {step.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-base text-stone-900 mb-2">
                  {step.title[locale]}
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed mb-4">
                  {step.desc[locale]}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-stone-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Verified in production</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Collaboration CTA */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 md:p-12 border border-stone-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-2">
              Have an Idea to Build Fast?
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
              Let's turn your concept into a live interactive web app.
            </h3>
            <p className="text-stone-400 text-sm max-w-xl">
              Whether you need an MVP prototype, an interactive canvas tool, or a production web application, I combine AI velocity with solid code craftsmanship.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/about#contact"
              className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              Get In Touch
            </Link>
            <Link
              to="/ux-ui"
              className="px-6 py-3 rounded-full border border-stone-700 bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              View UX/UI Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Interactive Embedded Prototype Modal */}
      <AnimatePresence>
        {activeModalUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-stone-950/85 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-stone-900 border border-stone-700 rounded-2xl w-full max-w-5xl h-[88vh] flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="p-4 border-b border-stone-800 flex items-center justify-between bg-stone-950 text-stone-200">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <span className="font-mono text-xs text-stone-400">
                    Live Demo: <strong className="text-white">{activeModalUrl.title}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={activeModalUrl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <span>Full Window</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setActiveModalUrl(null)}
                    className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Iframe Viewport */}
              <div className="flex-1 bg-black relative">
                <iframe
                  src={activeModalUrl.url}
                  title={activeModalUrl.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
}
