import { projects } from '../data';
import WorkItem from './WorkItem';
import { motion } from 'motion/react';
import { Sun } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Work() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="absolute top-16 right-6 md:right-12 opacity-10">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
          <Sun className="w-32 h-32 text-amber-500" />
        </motion.div>
      </div>
      
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 italic">{t('works.title')}</h2>
          <p className="text-lg text-stone-600 max-w-2xl font-sans">
            {t('works.desc')}
          </p>
        </div>
        <div className="hidden md:block">
          <span className="text-sm font-sans tracking-widest uppercase text-stone-400">({projects.length} {t('works.count')})</span>
        </div>
      </div>
      
      <div className="space-y-32">
        {projects.map((project, index) => (
          <WorkItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
