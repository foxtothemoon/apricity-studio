import { useLanguage } from '../LanguageContext';
import { Mail, Linkedin, Phone } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="inquiries" className="bg-stone-900 text-[#FFFCF9] pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <span className="font-mono text-amber-500 mb-6 block uppercase tracking-widest text-sm">{t('footer.open')}</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-8 text-[#FFFCF9] leading-tight">
            {t('footer.title.1')} <br/><span className="italic text-stone-400">{t('footer.title.2')}</span>
          </h2>
          <p className="text-stone-400 font-sans text-lg max-w-md leading-relaxed">
            {t('footer.desc')}
          </p>
        </div>
        <div className="flex flex-col md:items-end justify-center">
          <div className="flex gap-6">
            <a 
              href="mailto:siwat.ptyk@gmail.com" 
              className="text-stone-400 hover:text-amber-500 transition-all p-4 rounded-full border border-stone-800 hover:border-amber-500 bg-stone-800/30 hover:bg-stone-800/80"
              aria-label="Email"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a 
              href="https://wa.me/33652655676" 
              className="text-stone-400 hover:text-amber-500 transition-all p-4 rounded-full border border-stone-800 hover:border-amber-500 bg-stone-800/30 hover:bg-stone-800/80"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-8 h-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/siwat-prathuangyukun/" 
              className="text-stone-400 hover:text-amber-500 transition-all p-4 rounded-full border border-stone-800 hover:border-amber-500 bg-stone-800/30 hover:bg-stone-800/80"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-stone-500 text-sm font-sans uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Apricity Studio.</p>
        <p className="mt-4 md:mt-0">Designed & Built with <span className="text-amber-500">✦</span></p>
      </div>
    </footer>
  );
}
