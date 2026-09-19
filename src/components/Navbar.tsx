import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/web-design', label: t('nav.web') },
    { path: '/ux-ui', label: t('nav.uxui') },
    { path: '/graphic-design', label: t('nav.graphic') },
    { path: '/online-marketing', label: t('nav.marketing') },
    { path: '/about', label: t('nav.about') },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-stone-50/85 backdrop-blur-md border-b border-stone-200/80 py-3.5 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Brand -> Links to Home Overview */}
        <Link to="/" className="flex items-center gap-2.5 group cursor-pointer">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="text-orange-600"
          >
            <Sun className="w-5 h-5" />
          </motion.div>
          <span className="font-semibold text-lg tracking-tight text-stone-900 group-hover:text-orange-600 transition-colors">
            Apricity <span className="font-normal text-stone-400">Studio</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase font-sans">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-1 transition-colors ${
                  isActive 
                    ? 'text-orange-600 font-bold' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions (Language + WhatsApp / Contact) */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <Link 
            to="/about#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-orange-600 transition-all shadow-sm active:scale-95"
          >
            {t('nav.letstalk')}
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-stone-200 bg-stone-50 px-6 py-6 shadow-xl"
          >
            <nav className="flex flex-col gap-2 text-sm font-medium uppercase tracking-wider font-sans">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-stone-100 text-stone-500 hover:text-stone-900 flex items-center justify-between text-xs"
              >
                <span>Overview / Home</span>
                <span className="font-mono text-[10px] text-stone-400">00</span>
              </Link>
              {navItems.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 border-b border-stone-100 flex items-center justify-between transition-colors ${
                      isActive ? 'text-orange-600 font-bold' : 'text-stone-800 hover:text-stone-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-stone-400">0{idx + 1}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col gap-3">
              <Link 
                to="/about#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-sm"
              >
                {t('nav.letstalk')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
