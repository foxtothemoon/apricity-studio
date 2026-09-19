import { useLanguage } from '../LanguageContext';
import { Mail, Linkedin, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-[#FFFCF9] pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
        <div className="md:col-span-6">
          <span className="text-orange-400 mb-3 block uppercase tracking-wider text-xs font-semibold">
            {t('footer.open')}
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-5 text-white leading-tight tracking-tight">
            {t('footer.title.1')} <br/><span className="text-stone-400">{t('footer.title.2')}</span>
          </h2>
          <p className="text-stone-400 text-base max-w-md leading-relaxed mb-8">
            {t('footer.desc')}
          </p>
          <Link
            to="/about#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 transition-all shadow-md active:scale-95"
          >
            <span>Let's Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Disciplines Navigation */}
        <div className="md:col-span-3">
          <span className="text-xs uppercase tracking-wider text-stone-400 block mb-4 font-semibold">
            Disciplines
          </span>
          <ul className="space-y-3 text-sm text-stone-300">
            <li>
              <Link to="/web-design" className="hover:text-orange-400 transition-colors">
                {t('nav.web')}
              </Link>
            </li>
            <li>
              <Link to="/ux-ui" className="hover:text-orange-400 transition-colors">
                {t('nav.uxui')}
              </Link>
            </li>
            <li>
              <Link to="/graphic-design" className="hover:text-orange-400 transition-colors">
                {t('nav.graphic')}
              </Link>
            </li>
            <li>
              <Link to="/online-marketing" className="hover:text-orange-400 transition-colors">
                {t('nav.marketing')}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-400 transition-colors">
                {t('nav.about')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Channels & Social */}
        <div className="md:col-span-3 flex flex-col md:items-end">
          <span className="text-xs uppercase tracking-wider text-stone-400 block mb-4 font-semibold">
            Direct Contact
          </span>
          <div className="flex gap-3 mb-4">
            <a 
              href="https://wa.me/33652655676" 
              className="text-stone-300 hover:text-emerald-400 transition-all p-3 rounded-full border border-stone-800 hover:border-emerald-500 bg-stone-800/60 hover:bg-stone-800 flex items-center justify-center"
              aria-label="Chat on WhatsApp"
              title="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
            </a>
            <a 
              href="mailto:siwat.ptyk@gmail.com" 
              className="text-stone-300 hover:text-orange-400 transition-all p-3 rounded-full border border-stone-800 hover:border-orange-500 bg-stone-800/60 hover:bg-stone-800 flex items-center justify-center"
              aria-label="Send an Email"
              title="Email"
            >
              <Mail className="w-5 h-5 text-orange-400" />
            </a>
            <a 
              href="https://www.linkedin.com/in/siwat-prathuangyukun/" 
              className="text-stone-300 hover:text-blue-400 transition-all p-3 rounded-full border border-stone-800 hover:border-blue-500 bg-stone-800/60 hover:bg-stone-800 flex items-center justify-center"
              aria-label="Connect on LinkedIn"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
            </a>
          </div>
          <p className="text-xs text-stone-400 text-left md:text-right">
            Available for select projects worldwide
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-stone-500 text-xs uppercase tracking-wider">
        <p>© {new Date().getFullYear()} Apricity Studio.</p>
        <p className="mt-4 md:mt-0">Designed & Built with <span className="text-orange-500">✦</span> Precision & Craft</p>
      </div>
    </footer>
  );
}
