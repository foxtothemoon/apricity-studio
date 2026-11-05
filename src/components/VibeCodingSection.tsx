import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight, BookOpen, Layers, Terminal, Cpu, Play, CheckCircle2, ShieldCheck, Gamepad2, Heart } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { projects } from '../data';
import { Link } from 'react-router-dom';

export default function VibeCodingSection() {
  const { locale, t } = useLanguage();

  // Vibe coding projects: Moody Child & Survive 'til five
  const vibeProjects = projects.filter(p => p.categoryType === 'vibe_coding');

  const getVibePillars = (slug: string) => {
    if (slug.includes('survive')) {
      return [
        { title: 'Zero Dependencies', desc: 'Single-file HTML5 Canvas written in pure vanilla JS — runs instantly on any browser.' },
        { title: 'Synthesized Web Audio', desc: '8-bit chiptune sound effects synthesized in real time via Web Audio API (0KB audio download).' },
        { title: 'Automated AI Bot Simulation', desc: 'Headless AI bot ran thousands of test playthroughs to scientifically calibrate the difficulty curve.' }
      ];
    }
    return [
      { title: '2-Tap Micro-Logging', desc: 'Applied Hick\'s Law to reduce daily cognitive friction down to two taps.' },
      { title: 'Procedural SVG Stickers', desc: 'Infinite-resolution vector sticker badges generating dynamic glowing gradients with near-zero bundle size.' },
      { title: 'Edge Sandboxed Privacy', desc: '100% client-side encrypted local hydration — zero server data leaks.' }
    ];
  };

  return (
    <section id="vibe-coding" className="scroll-mt-24 pt-20 pb-28 border-b border-stone-200">
      {/* Category Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            03 / VIBE CODING & AI FULL-STACK
          </span>
          <span className="h-px bg-stone-300 flex-1 max-w-[80px]"></span>
          <span className="text-xs font-mono text-stone-400">2 Interactive Micro-Apps & Games</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 italic">
              {t('category.vibecoding.title')}
            </h3>
            <p className="text-stone-600 text-lg max-w-2xl font-sans leading-relaxed">
              {t('category.vibecoding.desc')}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-stone-600 uppercase tracking-wider">
            <span className="px-3 py-1 bg-stone-100 rounded-md border border-stone-200/80">Claude 3.7 & Gemini</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md border border-stone-200/80">Prompt Architecture</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md border border-stone-200/80">HTML5 Canvas (0 Deps)</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md border border-stone-200/80">Web Audio Synthesis</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md border border-stone-200/80">Netlify Continuous Deploy</span>
          </div>
        </div>

        {/* Why Vibe Coding callout */}
        <div className="p-4 md:p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs md:text-sm text-stone-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong className="text-stone-900">What is Vibe Coding?</strong> Engineering at the speed of thought. Combining strict architectural judgment, UX psychology, and generative AI steering to ship full-stack web software in hours instead of months.
            </span>
          </div>
          <Link
            to="/vibe-coding"
            className="shrink-0 text-amber-800 font-semibold hover:text-amber-900 flex items-center gap-1 group text-xs uppercase tracking-wider"
          >
            <span>Learn My AI Workflow</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Projects Showcase */}
      <div className="space-y-24">
        {vibeProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          const pillars = getVibePillars(project.slug);

          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-14 items-center bg-[#FFFCF9] border border-stone-200 p-6 md:p-10 rounded-2xl shadow-sm hover:border-amber-500 transition-colors group`}
            >
              {/* Media Preview */}
              <div className="w-full lg:w-3/5">
                <Link to={`/projects/${project.slug}`} className="block relative cursor-pointer">
                  <div className="relative overflow-hidden bg-stone-950 aspect-[16/10] rounded-xl border border-stone-800 shadow-md">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title[locale]} 
                      className="object-cover w-full h-full transform group-hover:scale-104 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-stone-900/15 group-hover:opacity-0 transition-opacity"></div>
                    
                    {/* Badge Overlay */}
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-amber-500/40 text-[11px] font-mono uppercase tracking-wider text-amber-300 flex items-center gap-1.5 shadow-sm">
                      {project.slug.includes('survive') ? (
                        <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
                      ) : (
                        <Heart className="w-3.5 h-3.5 text-rose-400" />
                      )}
                      <span>{project.category[locale]}</span>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-stone-900/90 backdrop-blur-xs px-3 py-1 rounded text-[10px] font-mono text-stone-300 border border-stone-700">
                      Vibe Coded with Claude & AI Studio
                    </div>
                  </div>
                </Link>
              </div>

              {/* Information & Vibe Coding Proof Points */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-widest">
                    Vibe Project 0{index + 1}
                  </span>
                  <span className="h-px bg-stone-200 flex-1"></span>
                  <span className="text-stone-400 font-mono text-xs">
                    Live Netlify Deploy
                  </span>
                </div>

                <Link to={`/projects/${project.slug}`} className="group/title inline-flex items-center gap-2 mb-3">
                  <h4 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight group-hover/title:text-amber-600 transition-colors">
                    {project.title[locale]}
                  </h4>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all text-amber-600" />
                </Link>

                <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-5">
                  {project.description[locale]}
                </p>

                {/* Vibe Engineering Highlights */}
                <div className="space-y-2.5 mb-6 p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-500 block mb-1">
                    Vibe Coding Technical Highlights
                  </span>
                  {pillars.map((pillar, pIdx) => (
                    <div key={pIdx} className="text-xs">
                      <span className="font-semibold text-stone-900">• {pillar.title}: </span>
                      <span className="text-stone-600">{pillar.desc}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA buttons */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-amber-600 transition-colors shadow-sm active:scale-95"
                    >
                      <span>{project.slug.includes('survive') ? 'Play Game Live' : 'Open Live Web App'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
                    </a>
                  )}

                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 bg-white text-stone-800 text-xs font-semibold uppercase tracking-wider hover:border-stone-900 transition-colors shadow-2xs"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                    <span>Case Study</span>
                  </Link>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 text-[11px] font-mono border border-stone-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
