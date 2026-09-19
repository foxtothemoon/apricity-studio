import { motion } from 'motion/react';
import { Smartphone, ArrowUpRight, BookOpen, Layers } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { projects } from '../data';
import { Link } from 'react-router-dom';

export default function AppDesignSection() {
  const { locale, t } = useLanguage();

  // App design projects: Carepill and Moody Child
  const appProjects = projects.filter(p => p.categoryType === 'app');

  return (
    <section id="ux-ui-app" className="scroll-mt-24 pt-20 pb-28 border-b border-stone-200">
      {/* Category Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold tracking-wider uppercase">
            <Smartphone className="w-3.5 h-3.5 text-amber-600" />
            02 / UX/UI DESIGNER & APP DESIGN
          </span>
          <span className="h-px bg-stone-300 flex-1 max-w-[80px]"></span>
          <span className="text-xs font-mono text-stone-400">2 In-depth Case Studies</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 italic">
              {t('category.uxui.title')}
            </h3>
            <p className="text-stone-600 text-lg max-w-2xl font-sans leading-relaxed">
              {t('category.uxui.desc')}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-stone-500 uppercase tracking-wider">
            <span className="px-3 py-1 bg-stone-100 rounded-md">Mobile-First UX</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md">Figma Systems</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md">WCAG AA Accessible</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md">Live Interactive Demos</span>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-28">
        {appProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center bg-[#FFFCF9] border border-stone-200 p-6 md:p-10 rounded-sm shadow-sm hover:border-stone-900 transition-colors`}
            >
              {/* Media preview */}
              <div className="w-full lg:w-3/5 group">
                <Link to={`/projects/${project.slug}`} className="block relative cursor-pointer">
                  <div className="relative overflow-hidden bg-stone-100 aspect-[16/10] border border-stone-900 shadow-md">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title[locale]} 
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-stone-900/10 group-hover:opacity-0 transition-opacity"></div>
                    
                    {/* Badge overlay */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-stone-900/20 text-[11px] font-mono uppercase tracking-wider text-stone-800 flex items-center gap-1.5 shadow-sm">
                      <Layers className="w-3 h-3 text-amber-600" />
                      {project.category[locale]}
                    </div>
                  </div>

                  {/* 90s decorative corner brackets */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-stone-900 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-stone-900 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
                </Link>
              </div>
              
              {/* Information */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs text-stone-400">Project {project.id}</span>
                  <span className="h-px bg-stone-300 flex-1"></span>
                  <span className="text-amber-700 font-sans text-xs font-semibold tracking-widest uppercase">
                    {project.category[locale]}
                  </span>
                </div>

                <Link to={`/projects/${project.slug}`} className="group inline-flex items-center gap-3">
                  <h4 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4 group-hover:text-amber-600 transition-colors cursor-pointer italic">
                    {project.title[locale]}
                  </h4>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-stone-900 group-hover:text-amber-600 mb-4" />
                </Link>

                <p className="text-stone-600 font-sans leading-relaxed text-base md:text-lg mb-6">
                  {project.description[locale]}
                </p>

                {/* Key feature bullet / insight */}
                <div className="bg-stone-50 border-l-2 border-amber-500 p-4 rounded-r mb-6 text-sm text-stone-700 leading-relaxed font-sans">
                  <span className="font-semibold text-stone-900 block mb-1">Problem & UX Impact:</span>
                  {project.details.problemStatement[locale]}
                </div>
                
                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-900 bg-stone-900 text-[#FFFCF9] text-xs font-medium uppercase tracking-widest hover:bg-stone-800 transition-colors shadow-[2px_2px_0px_#d97706]"
                    >
                      {t('project.prototype')}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 bg-white text-stone-800 text-xs font-medium uppercase tracking-widest hover:border-stone-900 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                    Case Study
                  </Link>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full border border-stone-900/15 text-stone-600 text-xs font-medium uppercase tracking-wider"
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
