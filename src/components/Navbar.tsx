import { motion } from 'motion/react';
import { Sun } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[#FFFCF9]/90 backdrop-blur-md border-b border-stone-900/10 py-4"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Sun className="w-6 h-6 text-amber-500" />
          </motion.div>
          <span className="font-serif text-xl font-medium tracking-wide text-stone-900 italic">Apricity Studio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600 tracking-wider uppercase">
          <a href="/#profile" className="hover:text-amber-600 transition-colors">{t('nav.profile')}</a>
          <a href="/#projects" className="hover:text-amber-600 transition-colors">{t('nav.projects')}</a>
          <a href="/#inquiries" className="hover:text-amber-600 transition-colors">{t('nav.inquiries')}</a>
        </nav>
        <div className="hidden md:flex items-center gap-6">
          <LanguageToggle />
          <a 
            href="https://wa.me/33652655676"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-stone-900 bg-[#FFFCF9] text-stone-900 text-sm font-medium hover:bg-stone-900 hover:text-[#FFFCF9] transition-all shadow-[2px_2px_0px_#1c1917] hover:shadow-[0px_0px_0px_#1c1917] hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            {t('nav.letstalk')}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
