import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../data';
import { useLanguage } from '../LanguageContext';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Footer from '../components/Footer';

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

  return (
    <div className="bg-[#FFFCF9]">
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        <Link to="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors mb-12 font-sans uppercase tracking-widest text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> {t('project.back')}
        </Link>
        
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
          {project.liveUrl && (
            <div className="mb-16">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-stone-900 bg-stone-900 text-[#FFFCF9] text-sm font-medium hover:bg-[#FFFCF9] hover:text-stone-900 transition-all shadow-[4px_4px_0px_#d97706] hover:shadow-[0px_0px_0px_#d97706] hover:translate-x-[4px] hover:translate-y-[4px] group"
              >
                {t('project.prototype')}
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          )}
        </motion.div>

        {(() => {
          const galleryImages = project.images ? project.images.filter(img => !img.includes('figma')) : [];
          if (galleryImages.length > 0) {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 mb-24"
              >
                {galleryImages.map((img, idx) => {
                  let colSpan = "md:col-span-6 sm:col-span-2";
                  if (img.includes('carepill-action')) {
                    colSpan = "md:col-span-4 md:col-start-5 sm:col-span-2 mx-auto w-full max-w-[400px]";
                  } else if (img.includes('carepill-')) {
                    colSpan = "md:col-span-3 sm:col-span-1";
                  }
                  
                  return (
                    <div key={idx} className={`border border-stone-200 bg-stone-50 overflow-hidden relative rounded-xl shadow-sm ${colSpan}`}>
                       <img 
                        src={img} 
                        alt={`${project.title[locale]} - Screenshot ${idx + 1}`}
                        className="w-full h-auto block"
                      />
                    </div>
                  );
                })}
              </motion.div>
            );
          } else {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-video w-full overflow-hidden border border-stone-900 mb-24"
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title[locale]}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          }
        })()}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 flex flex-col gap-12">
            <div>
              <h3 className="text-sm font-sans tracking-widest uppercase text-stone-400 mb-4">{t('project.overview')}</h3>
              <p className="text-stone-800 font-serif text-xl leading-relaxed italic">
                {project.details.overview[locale]}
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-sans tracking-widest uppercase text-stone-400 mb-4">{t('project.goals')}</h3>
              <ul className="space-y-3">
                {project.details.goals[locale].map((goal, i) => (
                  <li key={i} className="flex gap-3 text-stone-700 text-base font-sans leading-relaxed">
                    <span className="text-amber-500 mt-1">✦</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-8 flex flex-col gap-16">
            <div>
              <h3 className="text-sm font-sans tracking-widest uppercase text-stone-400 mb-6">{t('project.problemStatement')}</h3>
              <p className="text-stone-700 text-lg font-sans leading-relaxed">
                {project.details.problemStatement[locale]}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-sans tracking-widest uppercase text-stone-400 mb-6">{t('project.painpoints')}</h3>
              <ul className="space-y-4">
                {project.details.painPoints[locale].map((point, i) => (
                  <li key={i} className="flex gap-4 text-stone-700 text-lg font-sans leading-relaxed">
                    <span className="text-amber-500 mt-1">✦</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-sans tracking-widest uppercase text-stone-400 mb-6">{t('project.persona')}</h3>
              <p className="text-stone-700 text-lg font-sans leading-relaxed">
                {project.details.userPersona[locale]}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-sans tracking-widest uppercase text-stone-400 mb-6">{t('project.ideation')}</h3>
              <p className="text-stone-700 text-lg font-sans leading-relaxed mb-8">
                {project.details.ideation[locale]}
              </p>
              
              {(() => {
                const figmaImages = project.images ? project.images.filter(img => img.includes('figma')) : [];
                if (figmaImages.length > 0) {
                  return (
                    <div className="grid grid-cols-1 gap-6 mt-8">
                      {figmaImages.map((img, idx) => (
                        <div key={idx} className="border border-stone-200 bg-stone-50 overflow-hidden relative rounded-xl shadow-sm">
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
              <h3 className="text-sm font-sans tracking-widest uppercase text-stone-400 mb-6">{t('project.uidesign')}</h3>
              <p className="text-stone-700 text-lg font-sans leading-relaxed">
                {project.details.uiDesign[locale]}
              </p>
            </div>
            
            {project.details.coreFeatures && (
              <div>
                <h3 className="text-sm font-sans tracking-widest uppercase text-stone-400 mb-6">{t('project.coreFeatures')}</h3>
                <p className="text-stone-700 text-lg font-sans leading-relaxed whitespace-pre-line">
                  {project.details.coreFeatures[locale]}
                </p>
              </div>
            )}

            {project.details.technicalHighlights && (
              <div>
                <h3 className="text-sm font-sans tracking-widest uppercase text-stone-400 mb-6">{t('project.technicalHighlights')}</h3>
                <p className="text-stone-700 text-lg font-sans leading-relaxed whitespace-pre-line">
                  {project.details.technicalHighlights[locale]}
                </p>
              </div>
            )}

            {project.details.aiWorkflow && (
              <div className="bg-stone-900 text-[#FFFCF9] p-8 relative shadow-[8px_8px_0px_#d97706] mb-8">
                <h3 className="text-sm font-sans tracking-widest uppercase text-stone-400 mb-4">{t('project.aiWorkflow')}</h3>
                <p className="text-[#FFFCF9] text-lg font-sans leading-relaxed">
                  {project.details.aiWorkflow[locale]}
                </p>
              </div>
            )}

            <div className="p-8 bg-stone-50 border border-stone-200 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
              <h3 className="text-sm font-sans tracking-widest uppercase text-stone-400 mb-4">{t('project.outcome')}</h3>
              <p className="text-stone-900 font-serif text-2xl italic leading-relaxed">
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
