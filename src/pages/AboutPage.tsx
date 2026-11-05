import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  Mail, 
  Phone, 
  Linkedin, 
  ArrowUpRight, 
  CheckCircle2, 
  Copy, 
  Send, 
  Sparkles,
  Award,
  GraduationCap,
  Code2,
  Palette,
  Layers,
  Globe,
  Briefcase,
  Smartphone
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import Footer from '../components/Footer';

export default function AboutPage() {
  const { locale, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('UX UI & App Design');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    timeline: 'Within 1-2 months',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-scroll to #contact or #skills if in URL hash
  useEffect(() => {
    if (window.location.hash === '#contact') {
      const el = document.getElementById('contact');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else if (window.location.hash === '#skills') {
      const el = document.getElementById('skills');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('siwat.ptyk@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const disciplinesOptions = [
    locale === 'fr' ? 'UX UI & Apps Mobiles' : 'UX UI & App Design',
    locale === 'fr' ? 'Web Design & WordPress' : 'Web Design & WordPress',
    locale === 'fr' ? 'Vibe Coding & Apps IA' : 'Vibe Coding & AI Apps',
    locale === 'fr' ? 'Design Graphique & Marque' : 'Graphic Design & Branding',
    locale === 'fr' ? 'Poste à Temps Plein / Collaboration' : 'Full-Time Role / Collaboration'
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FFFCF9]">
      {/* Page Header */}
      <section className="py-20 px-6 md:px-12 border-b border-stone-200/70 bg-stone-100/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            <span className="text-xs font-semibold tracking-wider text-orange-600 uppercase">
              {locale === 'fr' ? 'Profil & Collaboration' : 'Profile & Collaboration'}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-stone-900 tracking-tight mb-6 flex items-center gap-4">
            {locale === 'fr' ? 'À Propos & Contact' : 'About Me & Contact'}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}>
              <Sun className="w-9 h-9 text-orange-500" />
            </motion.div>
          </h1>
          <p className="text-stone-600 text-lg md:text-xl max-w-3xl leading-relaxed">
            {locale === 'fr'
              ? 'Je conçois, développe et donne vie aux idées en ligne. En tant que designer et créatrice, du design UX/UI aux créations graphiques et aux plateformes web, je livre des projets soignés, performants et prêts pour le monde réel.'
              : 'I design, build, and bring ideas online. From visual design and websites to UX/UI interfaces, work that looks good, works well, and is ready for the real world.'}
          </p>

          {/* Quick Anchor Navigation */}
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="#skills"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-stone-200/90 text-xs font-semibold text-stone-700 hover:text-orange-600 hover:border-orange-300 shadow-2xs transition-colors"
            >
              <Code2 className="w-3.5 h-3.5 text-orange-600" />
              <span>{locale === 'fr' ? 'Compétences & Diplômes' : 'Skills & Certificates'}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-orange-600 shadow-2xs transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-stone-300" />
              <span>{locale === 'fr' ? 'Me Contacter' : 'Get In Touch'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Biography & Credentials Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Circular Portrait (Medium-Balanced Size) & Status Box */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Circular Avatar: Medium-Balanced Size (Not too small, not too large) */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden bg-stone-100 flex items-center justify-center relative z-10 border-4 border-orange-500 shadow-lg ring-8 ring-orange-500/10"
                >
                  <img
                    src="/profile-photo.jpg"
                    alt="Siwat Prathuangyukun"
                    className="object-cover w-full h-full rounded-full"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.includes('.jpg')) {
                        target.src = '/profile-photo.png';
                      }
                    }}
                  />
                </motion.div>
              </div>

              {/* Status Box: Open for a Job, No Response Time */}
              <div className="p-6 bg-white border border-stone-200/80 rounded-2xl shadow-2xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    {locale === 'fr' ? 'Statut : Disponible' : 'Open for a Job'}
                  </span>
                </div>
                <p className="text-stone-700 text-xs leading-relaxed mb-4 font-medium">
                  {locale === 'fr'
                    ? "Disponible pour des postes à temps plein, projets freelance, collaborations créatives & projets de design numérique."
                    : "Available for full-time roles, freelance projects, creative collaborations & digital design projects."}
                </p>
                <div className="space-y-2 text-xs text-stone-500 border-t border-stone-100 pt-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>{locale === 'fr' ? 'Télétravail International' : 'Global Remote Work'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Spoken Languages */}
          <div className="md:col-span-7 lg:col-span-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-2">
                {locale === 'fr' ? 'Présentation' : 'Introduction'}
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight mb-6">
                {t('about.intro')}
              </h2>
              <div className="space-y-4 text-stone-600 text-base leading-relaxed">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
              </div>

              {/* Language Pills: English first, then French, then Thai */}
              <div className="pt-6 flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 border border-stone-200 rounded-full text-xs font-medium text-stone-700 bg-white shadow-2xs">
                  {locale === 'fr' ? 'Anglais : Professionnel courant' : 'English: Fluent Professional'}
                </span>
                <span className="px-3.5 py-1.5 border border-stone-200 rounded-full text-xs font-medium text-stone-700 bg-white shadow-2xs">
                  {locale === 'fr' ? 'Français : Niveau B1' : 'French: B1 Working Proficiency'}
                </span>
                <span className="px-3.5 py-1.5 border border-stone-200 rounded-full text-xs font-medium text-stone-700 bg-white shadow-2xs">
                  {locale === 'fr' ? 'Thaï : Langue maternelle' : 'Thai: Native'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            CORE CAPABILITIES: 4 COLUMNS IN A SINGLE ROW ON DESKTOP
            Layered 3D Dimensional Icons & Clickable Direct Links
           ========================================================= */}
        <div className="mt-16 pt-12 border-t border-stone-200/70">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 font-mono">
                  {locale === 'fr' ? '4 Disciplines Créatives' : '4 Core Disciplines'}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
                {locale === 'fr' ? 'Disciplines & Expertises Clés' : 'Core Capabilities & Disciplines'}
              </h2>
              <p className="text-stone-500 text-xs sm:text-sm mt-1">
                {locale === 'fr'
                  ? 'Cliquez sur une carte pour explorer directement le portfolio et les études de cas correspondants.'
                  : 'Click any capability card to jump directly to its portfolio works & live case studies.'}
              </p>
            </div>
          </div>

          {/* 4 Cards Arranged in 1 Single Row Across Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: UX/UI & App Design */}
            <Link
              to="/ux-ui"
              className="group p-6 bg-white hover:bg-stone-50/70 border border-stone-200/90 hover:border-blue-500/80 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(59,130,246,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                {/* Header row with 3D Layered Icon and Action Arrow */}
                <div className="flex items-start justify-between mb-4">
                  {/* Dimensional Icon with Gradient, Inner Ring and Drop Shadow */}
                  <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-[0_8px_20px_rgba(59,130,246,0.35)] ring-2 ring-white/80 group-hover:scale-105 group-hover:rotate-1 transition-all">
                    <Smartphone className="w-6 h-6 stroke-[2.2]" />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-100 border border-white flex items-center justify-center text-[9px] text-blue-700 font-bold">
                      ✦
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/60">
                      01 / UX·UI
                    </span>
                    <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-blue-600 text-stone-400 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-stone-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  UX/UI & App Design
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed mb-4">
                  {locale === 'fr'
                    ? "Recherche utilisateur, wireframes intuitifs, design systems Figma modulaires et accessibilité WCAG AA."
                    : "User research, intuitive wireframes, scalable Figma design systems, and WCAG AA accessible mobile interfaces."}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                  Figma • Wireframes • WCAG
                </span>
                <span className="text-[11px] font-semibold text-blue-600 group-hover:underline">
                  {locale === 'fr' ? 'Explorer →' : 'Explore →'}
                </span>
              </div>
            </Link>

            {/* Card 2: Web Design & WordPress */}
            <Link
              to="/web-design"
              className="group p-6 bg-white hover:bg-stone-50/70 border border-stone-200/90 hover:border-orange-500/80 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(249,115,22,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                {/* Header row with 3D Layered Icon and Action Arrow */}
                <div className="flex items-start justify-between mb-4">
                  {/* Dimensional Icon with Gradient, Inner Ring and Drop Shadow */}
                  <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center shadow-[0_8px_20px_rgba(249,115,22,0.35)] ring-2 ring-white/80 group-hover:scale-105 group-hover:rotate-1 transition-all">
                    <Globe className="w-6 h-6 stroke-[2.2]" />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-orange-100 border border-white flex items-center justify-center text-[9px] text-orange-700 font-bold">
                      ✦
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200/60">
                      02 / WEB
                    </span>
                    <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-orange-600 text-stone-400 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-stone-900 text-lg mb-2 group-hover:text-orange-600 transition-colors">
                  Web Design & WordPress
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed mb-4">
                  {locale === 'fr'
                    ? "WordPress sur-mesure, vitesse optimisée, code propre, design réactif et SEO pour de vrais résultats."
                    : "Custom WordPress, lightning-fast loading speeds, clean code, responsive layouts, and production SEO."}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-orange-700 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200/60">
                  WordPress • HTML5 • SEO
                </span>
                <span className="text-[11px] font-semibold text-orange-600 group-hover:underline">
                  {locale === 'fr' ? 'Explorer →' : 'Explore →'}
                </span>
              </div>
            </Link>

            {/* Card 3: Vibe Coding & AI Apps */}
            <Link
              to="/vibe-coding"
              className="group p-6 bg-white hover:bg-stone-50/70 border border-stone-200/90 hover:border-amber-500/80 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(245,158,11,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                {/* Header row with 3D Layered Icon and Action Arrow */}
                <div className="flex items-start justify-between mb-4">
                  {/* Dimensional Icon with Gradient, Inner Ring and Drop Shadow */}
                  <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white flex items-center justify-center shadow-[0_8px_20px_rgba(245,158,11,0.35)] ring-2 ring-white/80 group-hover:scale-105 group-hover:rotate-1 transition-all">
                    <Sparkles className="w-6 h-6 stroke-[2.2]" />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-100 border border-white flex items-center justify-center text-[9px] text-amber-700 font-bold">
                      ⚡
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                      03 / AI LAB
                    </span>
                    <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-amber-600 text-stone-400 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-stone-900 text-lg mb-2 group-hover:text-amber-700 transition-colors">
                  Vibe Coding & AI Apps
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed mb-4">
                  {locale === 'fr'
                    ? "Applications IA rapides (Claude 3.7 & Gemini), jeux Canvas sans dépendance, Web Audio et sandboxes."
                    : "Prompt-to-production AI apps, HTML5 Canvas zero-dependency games, Web Audio, and edge prototypes."}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                  Claude 3.7 • Gemini • Canvas
                </span>
                <span className="text-[11px] font-semibold text-amber-700 group-hover:underline">
                  {locale === 'fr' ? 'Explorer →' : 'Explore →'}
                </span>
              </div>
            </Link>

            {/* Card 4: Graphic Design & Branding */}
            <Link
              to="/graphic-design"
              className="group p-6 bg-white hover:bg-stone-50/70 border border-stone-200/90 hover:border-purple-500/80 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(168,85,247,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                {/* Header row with 3D Layered Icon and Action Arrow */}
                <div className="flex items-start justify-between mb-4">
                  {/* Dimensional Icon with Gradient, Inner Ring and Drop Shadow */}
                  <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-600 text-white flex items-center justify-center shadow-[0_8px_20px_rgba(168,85,247,0.35)] ring-2 ring-white/80 group-hover:scale-105 group-hover:rotate-1 transition-all">
                    <Palette className="w-6 h-6 stroke-[2.2]" />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-purple-100 border border-white flex items-center justify-center text-[9px] text-purple-700 font-bold">
                      ✦
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200/60">
                      04 / GRAPHIC
                    </span>
                    <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-purple-600 text-stone-400 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-stone-900 text-lg mb-2 group-hover:text-purple-600 transition-colors">
                  Graphic Design & Branding
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed mb-4">
                  {locale === 'fr'
                    ? "Packaging de parfum de luxe, tracés de découpe d'impression, identités de marque et visuels éditoriaux."
                    : "Luxury perfume packaging, print-ready dielines, brand identities, and editorial advertising campaigns."}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200/60">
                  Illustrator • Packaging • Brand
                </span>
                <span className="text-[11px] font-semibold text-purple-600 group-hover:underline">
                  {locale === 'fr' ? 'Explorer →' : 'Explore →'}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNICAL SKILLS & ACCREDITED CERTIFICATES SECTION
          (Compact 1-row layout for 5 skills categories)
         ========================================================= */}
      <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70 scroll-mt-20">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 font-mono">
              {locale === 'fr' ? 'Outils Techniques & Diplômes' : 'Technical Toolkit & Credentials'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
            {locale === 'fr' ? 'Compétences & Diplômes' : 'Skills & Certificates'}
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm max-w-2xl leading-relaxed">
            {locale === 'fr'
              ? "Compétences multidisciplinaires en design produit UX/UI, suite créative, développement web, flux de travail assistés par l'IA et certifications accréditées."
              : "Multidisciplinary capabilities across UX/UI product design, creative tool suites, full web development, AI-assisted workflows, and accredited certifications."}
          </p>
        </div>

        {/* 1. Core Skills & Capabilities: 5 Items in ONE SINGLE ROW on Desktop */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-5">
            <Code2 className="w-4 h-4 text-orange-600" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700">
              {locale === 'fr' ? 'Compétences Clés & Savoir-faire (5 Pôles)' : 'Core Skills & Capabilities'}
            </h3>
          </div>

          {/* 5-Column Compact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {/* 1. UX UI Product */}
            <div className="p-4 bg-white border border-stone-200/90 rounded-xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="font-semibold text-stone-900 text-sm leading-tight">UX UI Product</h4>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/60">
                    Product
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'User Flows',
                    'Wireframing',
                    'Prototyping',
                    'Design Systems',
                    'Accessibility',
                    'Responsive'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-stone-50 hover:bg-blue-50/60 text-stone-800 hover:text-blue-900 border border-stone-200/80 rounded-md text-[11px] font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Design Tools */}
            <div className="p-4 bg-white border border-stone-200/90 rounded-xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs shrink-0">
                      <Palette className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="font-semibold text-stone-900 text-sm leading-tight">Design Tools</h4>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200/60">
                    Creative
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Figma',
                    'Adobe Photoshop',
                    'Adobe Illustrator'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-stone-50 hover:bg-purple-50/60 text-stone-800 hover:text-purple-900 border border-stone-200/80 rounded-md text-[11px] font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Web Development */}
            <div className="p-4 bg-white border border-stone-200/90 rounded-xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-xs shrink-0">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="font-semibold text-stone-900 text-sm leading-tight">Web Dev</h4>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200/60">
                    Builds
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'WordPress',
                    'Elementor',
                    'HTML5 / CSS3',
                    'Git / GitHub',
                    'Netlify',
                    'Basic SEO'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-stone-50 hover:bg-orange-50/60 text-stone-800 hover:text-orange-950 border border-stone-200/80 rounded-md text-[11px] font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. AI Workflow */}
            <div className="p-4 bg-white border border-stone-200/90 rounded-xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs shrink-0">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="font-semibold text-stone-900 text-sm leading-tight">AI Workflow</h4>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                    Speed
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Claude 3.7',
                    'Gemini',
                    'Google AI Studio',
                    'Vibe Coding'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-stone-50 hover:bg-amber-50/60 text-stone-800 hover:text-amber-950 border border-stone-200/80 rounded-md text-[11px] font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Professional */}
            <div className="p-4 bg-white border border-stone-200/90 rounded-xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="font-semibold text-stone-900 text-sm leading-tight">Professional</h4>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                    Delivery
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'End-to-End Projects',
                    'Client Communication',
                    'Cross-functional Teamwork'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-stone-50 hover:bg-emerald-50/60 text-stone-800 hover:text-emerald-950 border border-stone-200/80 rounded-md text-[11px] font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Certificates & Accreditations (Feminine Forms in French) */}
        <div className="pt-14 border-t border-stone-200/70">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 font-mono">
                {locale === 'fr' ? 'Accréditations & Certifications' : 'Accreditations & Certificates'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
              {locale === 'fr' ? 'Certificats & Diplômes' : 'Certificates & Credentials'}
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm max-w-2xl leading-relaxed">
              {locale === 'fr'
                ? "Formations professionnelles vérifiées en recherche UX, systèmes Figma avancés et intelligence artificielle générative."
                : "Verified professional credentials across UX research, advanced Figma systems, and applied generative AI."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cert 1: Google UX */}
            <div className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200/60 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                    Coursera
                  </span>
                </div>

                <h4 className="font-semibold text-stone-900 text-base mb-1.5 group-hover:text-blue-600 transition-colors">
                  Google UX Design Professional Certificate
                </h4>
                <p className="text-xs text-stone-500 font-medium mb-3">
                  Coursera
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {locale === 'fr'
                    ? "Programme rigoureux couvrant la recherche utilisateur, les wireframes, le prototypage Figma haute fidélité et les tests d'utilisabilité."
                    : "Rigorous program covering foundational user research, wireframing, high-fidelity Figma prototyping, and usability studies."}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center gap-2 text-[11px] text-stone-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{locale === 'fr' ? 'Certifiée Google UX Design' : 'Verified Professional Certificate'}</span>
              </div>
            </div>

            {/* Cert 2: Figma Advanced */}
            <div className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200/60 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200/60">
                    BYOL
                  </span>
                </div>

                <h4 className="font-semibold text-stone-900 text-base mb-1.5 group-hover:text-purple-600 transition-colors">
                  Figma Advanced Certificate
                </h4>
                <p className="text-xs text-stone-500 font-medium mb-3">
                  Bring Your Own Laptop
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {locale === 'fr'
                    ? "Certification avancée sur les design tokens, les variantes de composants, les auto-layouts complexes et la gouvernance de design system."
                    : "Advanced certification in design token systems, component variants, complex auto-layouts, and design system governance."}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center gap-2 text-[11px] text-stone-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>{locale === 'fr' ? 'Certifiée Figma Avancé' : 'Verified Advanced Figma Skills'}</span>
              </div>
            </div>

            {/* Cert 3: Generative AI Mastermind */}
            <div className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200/60 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                    Outskill
                  </span>
                </div>

                <h4 className="font-semibold text-stone-900 text-base mb-1.5 group-hover:text-amber-700 transition-colors">
                  Generative AI Mastermind
                </h4>
                <p className="text-xs text-stone-500 font-medium mb-3">
                  Outskill
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {locale === 'fr'
                    ? "Mastermind pratique en prompt engineering, orchestration LLM, synthèse de recherche et développement accéléré par l'IA."
                    : "Practical mastermind in prompt engineering, LLM workflow orchestration, research synthesis, and rapid AI-assisted development."}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center gap-2 text-[11px] text-stone-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>{locale === 'fr' ? 'Certifiée IA Générative' : 'Verified Generative AI Credential'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTEGRATED CONTACT & INQUIRIES SECTION
         ========================================================= */}
      <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 font-mono">
              {locale === 'fr' ? 'Contact Direct & Collaboration' : 'Direct Contact & Collaboration'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
            {locale === 'fr' ? 'Connectons-nous' : "Let's Connect"}
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm max-w-2xl leading-relaxed">
            {locale === 'fr'
              ? "Prête à démarrer un projet, explorer une collaboration créative ou discuter d'opportunités ? Envoyez-moi un message pour échanger."
              : "Ready to start a project, explore a creative collaboration, or discuss full-time and freelance opportunities? Let's connect and build something great together."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Channels & Reach */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-stone-900 text-stone-100 rounded-2xl shadow-lg">
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-5">
                {locale === 'fr' ? 'Canaux de Contact Direct' : 'Direct Contact Channels'}
              </span>

              <div className="space-y-3.5">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/33652655676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700/80 hover:border-emerald-500 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-stone-100 group-hover:text-emerald-400 block transition-colors">
                        {locale === 'fr' ? 'Discuter sur WhatsApp' : 'Chat on WhatsApp'}
                      </span>
                      <span className="text-xs text-stone-400">
                        {locale === 'fr' ? 'Messagerie instantanée pour discuter' : 'Instant messaging for project scoping'}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>

                {/* Email */}
                <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700/80 hover:border-orange-500 transition-all group">
                  <div className="flex items-center justify-between">
                    <a
                      href="mailto:siwat.ptyk@gmail.com"
                      className="flex items-center gap-3.5 flex-1"
                    >
                      <div className="w-10 h-10 rounded-xl bg-orange-950/60 border border-orange-500/40 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-stone-100 group-hover:text-orange-400 block transition-colors">
                          {locale === 'fr' ? 'Envoyer un Email' : 'Send an Email'}
                        </span>
                        <span className="text-xs text-stone-400">
                          {locale === 'fr' ? 'Message direct dans ma boîte' : 'Direct dispatch to my inbox'}
                        </span>
                      </div>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg hover:bg-stone-700 text-stone-400 hover:text-white transition-colors ml-2"
                      title="Copy Email Address"
                    >
                      {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  {copiedEmail && (
                    <span className="text-xs text-emerald-400 block mt-2 pt-2 border-t border-stone-700/60 font-medium">
                      {locale === 'fr' ? '✓ Adresse email copiée dans le presse-papier !' : '✓ Copied email address to clipboard!'}
                    </span>
                  )}
                </div>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/siwat-prathuangyukun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700/80 hover:border-blue-500 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-stone-100 group-hover:text-blue-400 block transition-colors">
                        {locale === 'fr' ? 'Se connecter sur LinkedIn' : 'Connect on LinkedIn'}
                      </span>
                      <span className="text-xs text-stone-400">
                        {locale === 'fr' ? 'Parcours professionnel & réseau' : 'Professional background & network'}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>
              </div>

              <div className="mt-6 pt-5 border-t border-stone-800 text-xs text-stone-400 leading-relaxed">
                <p>
                  {locale === 'fr'
                    ? 'Vous préférez un email ou WhatsApp ? Envoyez un message pour démarrer la discussion.'
                    : 'Prefer email or WhatsApp? Send a brief overview of your scope, or book an introductory call.'}
                </p>
              </div>
            </div>

            {/* Quick Fact Card */}
            <div className="p-6 bg-stone-50 border border-stone-200/80 rounded-2xl text-xs text-stone-600 space-y-2">
              <span className="font-bold text-stone-800 uppercase tracking-wider block">
                {locale === 'fr' ? 'Notes de Collaboration' : 'Collaboration Notes'}
              </span>
              <p>
                {locale === 'fr'
                  ? '• Contrats au forfait ou par étapes pour les projets complets.'
                  : '• Fixed-price or milestone contracts for full projects.'}
              </p>
              <p>
                {locale === 'fr'
                  ? '• Formules de suivi disponibles pour le SEO, le design system et la maintenance.'
                  : '• Retainer models available for ongoing SEO, CRO, and maintenance.'}
              </p>
              <p>
                {locale === 'fr'
                  ? '• Facturation professionnelle formelle avec documentation.'
                  : '• Invoices issued with formal business documentation.'}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-200/90 rounded-2xl p-7 md:p-10 shadow-sm">
              <h3 className="text-2xl font-semibold text-stone-900 tracking-tight mb-2">
                {locale === 'fr' ? 'Formulaire de Contact' : 'Project Inquiry Form'}
              </h3>
              <p className="text-stone-500 text-xs mb-8">
                {locale === 'fr'
                  ? 'Remplissez les détails ci-dessous pour lancer notre échange.'
                  : 'Fill out the details below, and I will get back to you with next steps.'}
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-2xl font-semibold text-stone-900 mb-2">
                    {locale === 'fr' ? `Merci, ${formData.name || 'à vous'} !` : `Thank You, ${formData.name || 'Friend'}!`}
                  </h4>
                  <p className="text-stone-700 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    {locale === 'fr'
                      ? `Votre message concernant ${selectedDiscipline} a été bien reçu. Je vous répondrai rapidement.`
                      : `Your inquiry regarding ${selectedDiscipline} has been received. I will review your requirements and respond shortly.`}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:siwat.ptyk@gmail.com?subject=Project Inquiry: ${selectedDiscipline}&body=Hi Siwat, my name is ${formData.name}. ${formData.message}`}
                      className="px-6 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold"
                    >
                      {locale === 'fr' ? 'Envoyer par Email' : 'Send Duplicate as Email'}
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-stone-300 text-stone-700 text-xs font-semibold hover:border-stone-900"
                    >
                      {locale === 'fr' ? 'Envoyer un Autre Message' : 'Submit Another Inquiry'}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Discipline Selector Chips */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2.5">
                      {locale === 'fr' ? '1. Sélectionnez la discipline' : '1. Select Primary Discipline'}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {disciplinesOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSelectedDiscipline(opt)}
                          className={`px-3.5 py-2 rounded-full text-xs transition-all ${
                            selectedDiscipline === opt
                              ? 'bg-orange-600 text-white font-semibold shadow-sm'
                              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                        {locale === 'fr' ? '2. Votre Nom *' : '2. Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                        {locale === 'fr' ? '3. Votre Adresse Email *' : '3. Your Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Timeline Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                      {locale === 'fr' ? '4. Délai Souhaité' : '4. Ideal Timeline'}
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                    >
                      <option value="Urgent (within 2-3 weeks)">
                        {locale === 'fr' ? 'Urgent (dans les 2-3 semaines)' : 'Urgent (within 2-3 weeks)'}
                      </option>
                      <option value="Within 1-2 months">
                        {locale === 'fr' ? 'Standard (dans les 1-2 mois)' : 'Standard (Within 1-2 months)'}
                      </option>
                      <option value="Flexible / Exploration">
                        {locale === 'fr' ? 'Flexible / Exploration future' : 'Flexible / Future Exploration'}
                      </option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                      {locale === 'fr' ? '5. Portée du Projet & Objectifs *' : '5. Project Scope & Goals *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        locale === 'fr'
                          ? "Décrivez brièvement ce que vous souhaitez réaliser, vos références de design ou vos besoins..."
                          : "Briefly describe what you're looking to build, reference sites, or desired timelines..."
                      }
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>{locale === 'fr' ? 'Envoyer le Message' : 'Send Project Inquiry'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
