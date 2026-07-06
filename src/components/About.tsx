import { motion } from 'motion/react';
import { Sun } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="profile" className="py-32 px-6 md:px-12 bg-[#FFFCF9] relative border-b border-stone-900/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="aspect-square overflow-hidden bg-stone-100 flex items-center justify-center relative z-10 border border-stone-900"
          >
            <img 
              src="/profile-photo.jpg" 
              alt="Profile" 
              className="object-cover w-full h-full opacity-90 sepia-[0.1]"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src.includes('.jpg')) {
                  target.src = '/profile-photo.png';
                }
              }}
            />
          </motion.div>
          {/* 90s offset shadow box effect */}
          <div className="absolute top-4 left-4 w-full h-full border border-amber-600 bg-amber-500/10 -z-0"></div>
        </div>
        
        <div className="md:col-span-7 md:pl-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 italic flex items-center gap-4"
          >
            {t('about.title')}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
              <Sun className="w-10 h-10 text-amber-500" />
            </motion.div>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-stone-700 font-sans leading-relaxed text-lg"
          >
            <p className="font-serif text-2xl text-stone-900 mb-2">
              {t('about.intro')}
            </p>
            <p>
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2')}
            </p>
            <p>
              {t('about.p3')}
            </p>
            
            <div className="pt-6 mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 border border-stone-200 rounded-full text-xs font-medium tracking-widest uppercase text-stone-600">
                Thai: Native
              </span>
              <span className="px-4 py-2 border border-stone-200 rounded-full text-xs font-medium tracking-widest uppercase text-stone-600">
                English: Fluent
              </span>
              <span className="px-4 py-2 border border-stone-200 rounded-full text-xs font-medium tracking-widest uppercase text-stone-600">
                French: B1
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
