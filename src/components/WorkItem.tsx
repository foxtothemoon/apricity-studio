import { motion } from 'motion/react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

interface WorkItemProps {
  project: Project;
  index: number;
}

export default function WorkItem({ project, index }: WorkItemProps) {
  const isEven = index % 2 === 0;
  const { locale, t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-20 items-center`}
    >
      <Link to={`/projects/${project.slug}`} className="w-full md:w-3/5 group cursor-pointer relative block">
        <div className="relative overflow-hidden bg-stone-100 aspect-[4/3] border border-stone-900">
          <img 
            src={project.imageUrl} 
            alt={project.title[locale]} 
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[0.2] group-hover:grayscale-0" 
          />
          <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
        </div>
        {/* 90s decorative corner brackets */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-stone-900 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-stone-900 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
      </Link>
      
      <div className="w-full md:w-2/5 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-stone-400">No. {project.id}</span>
          <span className="h-px bg-stone-300 flex-1"></span>
          <span className="text-amber-600 font-sans text-xs font-bold tracking-widest uppercase">
            {project.category[locale]}
          </span>
        </div>
        <Link to={`/projects/${project.slug}`} className="group inline-flex items-center gap-3">
          <h3 className="text-3xl font-serif text-stone-900 mb-6 group-hover:text-amber-600 transition-colors cursor-pointer italic">
            {project.title[locale]}
          </h3>
          <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-stone-900 group-hover:text-amber-600 mb-6" />
        </Link>
        <p className="text-stone-600 font-sans leading-relaxed text-lg mb-8">
          {project.description[locale]}
        </p>
        
        {project.liveUrl && (
          <div className="mb-8">
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-stone-900 bg-transparent text-stone-900 text-xs font-medium uppercase tracking-widest hover:bg-stone-900 hover:text-[#FFFCF9] transition-colors"
            >
              {t('project.prototype')}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-4 py-1.5 rounded-full border border-stone-900/20 text-stone-600 text-xs font-medium uppercase tracking-wider hover:border-stone-900 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
