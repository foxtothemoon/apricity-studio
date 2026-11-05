import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Globe, 
  Smartphone, 
  Sparkles, 
  Mail, 
  Phone, 
  Linkedin, 
  CheckCircle2, 
  ShieldCheck, 
  Eye, 
  HeartHandshake, 
  ExternalLink,
  Award,
  Layers,
  Heart
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import { useLanguage } from '../LanguageContext';
import { webClientSites, projects } from '../data';
import GlassFolder, { FolderFile } from '@/components/ui/glass-folder-cards';

export default function Home() {
  const { locale, t } = useLanguage();
  const navigate = useNavigate();
  const carepill = projects.find(p => p.slug.includes('carepill'));
  const featuredWebSite = webClientSites[0];
  const vibeCodingApp = projects.find(p => p.slug.includes('moody')) || projects.find(p => p.categoryType === 'vibe_coding');

  // Contact copy state
  const [copiedEmail, setCopiedEmail] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('siwat.ptyk@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  // Glass Folder File Click Handler: navigates smoothly to project
  const handleFileSelect = (file: FolderFile) => {
    if (!file.href) return;
    if (file.href.startsWith('#')) {
      const el = document.querySelector(file.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (file.href.startsWith('http')) {
      window.open(file.href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(file.href);
    }
  };



  return (
    <div className="min-h-screen bg-[#FFFCF9]">
      {/* 1. HERO SECTION (Top, Warm Aesthetic) */}
      <Hero />

      {/* 2. INTRODUCTION SECTION (BLACK BACKGROUND - TIGHTENED PADDING & CIRCULAR BOUNCING AVATAR) */}
      <section id="about-intro" className="py-16 md:py-24 px-6 md:px-12 bg-stone-950 text-stone-100 border-y border-stone-800 scroll-mt-20 relative overflow-hidden">
        {/* Subtle Luxury Glow & Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[340px] bg-gradient-to-tr from-orange-600/15 via-purple-600/10 to-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* Left: Circular Avatar with Abstract Hand-Drawn Fox Line Art Sketch */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center py-4 sm:py-6">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex flex-col items-center group cursor-pointer"
              >
                {/* Minimalist Artistic White Line Art (Artsy Abstract Fox Gestures) */}
                <motion.svg
                  className="absolute -top-10 -bottom-10 -left-10 -right-10 sm:-top-12 sm:-bottom-12 sm:-left-12 sm:-right-12 w-[calc(100%+80px)] h-[calc(100%+80px)] sm:w-[calc(100%+96px)] sm:h-[calc(100%+96px)] max-w-none pointer-events-none -z-10"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Subtle Soft Ambient Glow */}
                  <circle cx="200" cy="200" r="130" fill="#FFFFFF" opacity="0.03" />

                  {/* Top: Fluid Minimalist Ear Gestures (Single continuous artistic stroke) */}
                  <path
                    d="M 125 105 C 105 70 86 42 80 32 C 90 46 110 72 144 86 C 172 92 228 92 256 86 C 290 72 310 46 320 32 C 314 42 295 70 275 105"
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Left Ear Accent: Loose artistic flick */}
                  <path
                    d="M 104 72 C 96 50 92 40 96 38 C 106 44 120 62 126 78"
                    stroke="rgba(255, 255, 255, 0.65)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Right Ear Accent: Loose artistic flick */}
                  <path
                    d="M 296 72 C 304 50 308 40 304 38 C 294 44 280 62 274 78"
                    stroke="rgba(255, 255, 255, 0.65)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Bottom & Right: Airy Sweeping Tail Swirl (Minimal gestural arc) */}
                  <path
                    d="M 140 315 C 175 352 240 362 288 340 C 335 315 360 265 350 215 C 342 182 324 176 318 195 C 312 218 322 252 308 284 C 294 316 256 328 220 322"
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Secondary Loose Sketch Trail (Soft airy sketch detail) */}
                  <path
                    d="M 165 338 C 218 364 276 355 318 320 C 348 288 356 238 338 196"
                    stroke="rgba(255, 255, 255, 0.4)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="5 5"
                  />

                  {/* Artsy Little Hand-Drawn Sparkle Accent */}
                  <path
                    d="M 334 68 Q 334 76 342 76 Q 334 76 334 84 Q 334 76 326 76 Q 334 76 334 68"
                    stroke="rgba(255, 255, 255, 0.75)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Artsy Soft Flick on Left Edge */}
                  <path
                    d="M 82 165 C 68 178 70 192 84 188"
                    stroke="rgba(255, 255, 255, 0.5)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </motion.svg>

                {/* Circular Profile Photo with Vivid Orange Border */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1.5 bg-orange-500 shadow-[0_15px_45px_rgba(234,88,12,0.45)] ring-4 ring-orange-500/50">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-orange-400/90 bg-stone-900 shadow-inner">
                    <img
                      src="/profile-photo.jpg"
                      alt="Siwat Prathuangyukun Fox"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.includes('.jpg')) {
                          target.src = '/profile-photo.png';
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Clean Floating Identity Tag */}
                <div className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/95 backdrop-blur-md border border-orange-500/40 shadow-lg text-xs text-stone-200">
                  <span className="text-sm">🦊</span>
                  <span className="font-sans font-medium text-[11px]">Fox · Global Remote</span>
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                </div>
              </motion.div>
            </div>

            {/* Right: Designer Details & Contact */}
            <div className="md:col-span-7 lg:col-span-8 space-y-5">
              {/* Header Badges: Location & Status */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-[11px] font-sans text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{locale === 'fr' ? 'Disponible pour travailler' : 'Available for work'}</span>
                </span>
                <span className="text-stone-700">•</span>
                <span className="px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-[11px] font-sans text-orange-400">
                  {locale === 'fr' ? 'Télétravail International' : 'Global Remote'}
                </span>
              </div>

              {/* Title & Name */}
              <div className="space-y-1.5">
                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                  Siwat Prathuangyukun{' '}
                  <span className="text-orange-400 font-normal text-2xl sm:text-3xl">
                    (Fox 🦊)
                  </span>
                </h2>
                <p className="text-base sm:text-lg font-medium text-orange-400 tracking-tight font-sans">
                  {locale === 'fr' 
                    ? 'Designer UX/UI, Designer Graphique & Créatrice Web' 
                    : 'UX/UI Designer, Graphic Designer & Web Creator'}
                </p>
              </div>

              {/* Comprehensive Bio covering UX/UI, Graphic Design, Web, and AI Vibe Coding */}
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl font-serif">
                {locale === 'fr'
                  ? 'Designer & créatrice multidisciplinaire forte de plus de 6 ans d’expérience : conception UX/UI centrée sur l’humain, identités graphiques & packaging, sites WordPress & plateformes web réactives, et création rapide par Vibe Coding IA. Certifiée Google UX.'
                  : 'Multidisciplinary designer with 6+ years of experience: crafting human-centered UX/UI products, distinctive graphic design & packaging, responsive web platforms, and rapid AI vibe coding. Google UX certified.'}
              </p>

              {/* Quick CV Credential Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5 text-xs font-sans text-stone-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800">
                  <Award className="w-3.5 h-3.5 text-blue-400" />
                  <span>{locale === 'fr' ? 'Certifiée Google UX' : 'Google UX Certified'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800">
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                  <span>Figma Design Systems</span>
                </span>
                
                {/* Languages: Clean Plain Text without Circles or Emojis */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-stone-900 border border-stone-800">
                  <span className="text-stone-400 font-mono text-[10px] uppercase tracking-wider">
                    {locale === 'fr' ? 'Langues :' : 'Languages:'}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-sans text-stone-200">
                    <span className="font-medium">English</span>
                    <span className="text-stone-600">·</span>
                    <span className="font-medium">Français</span>
                    <span className="text-stone-600">·</span>
                    <span className="font-medium">Thai</span>
                  </div>
                </div>
              </div>

              {/* Direct Clean Icon Contacts */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95 font-sans"
                >
                  <span>{locale === 'fr' ? 'Expérience & CV' : 'Experience & CV'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-2 pl-2 border-l border-stone-800">
                  {/* Email Icon with copy tooltip */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy Email address"
                      title="Copy email: siwat.ptyk@gmail.com"
                      className="p-2.5 rounded-full border border-stone-800 hover:border-orange-500 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-orange-400 transition-all hover:scale-105 active:scale-95 shadow-sm"
                    >
                      {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
                    </button>
                    {copiedEmail && (
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-stone-900 text-[10px] py-1 px-2.5 rounded shadow-lg z-20 font-bold font-sans">
                        Email Copied!
                      </span>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/33652655676"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    title="WhatsApp"
                    className="p-2.5 rounded-full border border-stone-800 hover:border-emerald-500 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/siwat-prathuangyukun/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    className="p-2.5 rounded-full border border-stone-800 hover:border-blue-400 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-blue-400 transition-all hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAREPILL FLAGSHIP: Mobile Phone Frame Simulator on Left, Concise Why/Problem Solved on Right */}
      <section id="carepill-flagship" className="py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: ONLY THE PHONE FRAME ITSELF (Outer Figma player canvas cropped out) */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <div className="w-[325px] sm:w-[360px] h-[660px] sm:h-[720px] rounded-[42px] overflow-hidden relative bg-black shadow-none border-0">
              <iframe
                title="CarePill Prototype"
                style={{ border: "none", boxShadow: "none", outline: "none" }}
                className="w-full h-full scale-[1.24] origin-center border-0 shadow-none"
                src="https://embed.figma.com/proto/ASCy7gbGRwFXKBverOxev7/CarePill-%E2%80%94-Design-System---Portfolio?node-id=22-1530&viewport=-310%2C167%2C0.14&scaling=scale-down&content-scaling=fixed&starting-point-node-id=22%3A1530&show-proto-sidebar=0&hide-ui=1&embed-host=share"
                allowFullScreen
              />
            </div>
          </div>

          {/* RIGHT COLUMN: 1 HEADLINE & 1 CONCISE PARAGRAPH EXPLAINING WHY & PROBLEM SOLVED */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-sans">
                  UX/UI Case Study
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
                {locale === 'fr' 
                  ? 'CarePill : Un Accompagnement Médical Bienveillant' 
                  : 'CarePill: A Kinder, Dignified Way to Care'}
              </h2>
            </div>

            {/* 1 Single Cohesive & Concise Paragraph */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
              {locale === 'fr'
                ? "CarePill est né du constat qu'oublier un médicament est profondément humain, alors que la plupart des applications de santé créent du stress à coup d'alertes anxiogènes et de parcours complexes. L'application transforme cette anxiété en un accompagnement bienveillant et digne : elle associe un enregistrement de prise en 1 clic pour le patient à un suivi à distance consenti pour les proches aidants (famille, médecin ou infirmier), assurant sérénité et sécurité sans sentiment de surveillance, avec une typographie agrandissable et des boutons tactiles généreux de 48px."
                : "Missing a medication dose is completely human, yet traditional health apps often trigger stress through guilt-inducing alerts and overwhelming workflows. CarePill was created to transform clinical anxiety into dignified, accessible care: pairing effortless 1-tap dose logging for patients with gentle, consent-based remote updates for family members and caregivers. Patients stay safe and independent without feeling surveilled, backed by senior-friendly scalable typography and generous 48px touch targets."}
            </p>

            {/* Clean Action Links */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="https://carepillmedicationreminder.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95 group font-sans"
              >
                <span>{locale === 'fr' ? 'Application Directe' : 'Live App'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-300 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                to="/projects/carepill-medication-tracker"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-stone-300 bg-white hover:border-stone-900 text-stone-800 text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs active:scale-95 font-sans"
              >
                <span>{locale === 'fr' ? 'Étude de Cas' : 'Case Study'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WORK CATEGORIES & CREATIVE DISCIPLINES */}
      <section id="selected-works" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 font-mono">
                {locale === 'fr' ? 'Portfolios par Catégorie · 4 Disciplines' : 'Portfolios by Category · 4 Disciplines'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              {locale === 'fr' ? 'Catégories de Travaux & Disciplines Créatives' : 'Work Categories & Creative Disciplines'}
            </h2>
            <p className="text-stone-600 text-xs md:text-sm max-w-xl mt-1 font-sans">
              {locale === 'fr'
                ? 'Dossiers interactifs : cliquez sur un dossier pour accéder directement à son portfolio complet.'
                : 'Tactile glass folders: click any folder to jump directly to its complete portfolio.'}
            </p>
          </div>

          <Link
            to="/ux-ui"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-800 hover:text-orange-600 transition-colors"
          >
            <span>{locale === 'fr' ? 'Voir Tout le Travail' : 'Explore All Work'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Interactive Glass Folder Cards: UX/UI, Web Design, Vibe Coding, Graphic Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 justify-items-center items-end py-6">
          
          {/* Folder 1: UX/UI Design */}
          <div className="flex flex-col items-center w-full max-w-[290px]">
            <GlassFolder
              label="01 · UX/UI Design"
              meta="CarePill & System"
              tone="light"
              art="aurora"
              seed={15}
              width={280}
              appearDelay={0}
              folderHref="/ux-ui"
              onFolderClick={() => navigate('/ux-ui')}
              action="more"
              menu={[
                { label: "Open UX/UI Portfolio", onSelect: () => navigate('/ux-ui') },
                { label: "View CarePill Case Study", onSelect: () => handleFileSelect({ name: "CarePill", href: "#carepill-flagship" }) },
              ]}
              onFileSelect={handleFileSelect}
              files={[
                {
                  name: "CarePill: Mobile App",
                  meta: "Universal Adherence",
                  image: "/assets/aistudio/Screenshot_2026-10-28_130556_943a56c0.png",
                  href: "/ux-ui",
                },
                {
                  name: "Design System Specs",
                  meta: "Tokens & WCAG AA",
                  image: "/assets/aistudio/02___Color___role_71f20287.png",
                  href: "/ux-ui",
                },
                {
                  name: "Figma Prototype Graph",
                  meta: "40+ Linked Screens",
                  image: "/assets/aistudio/Screenshot_2026-10-28_114929_f77479ee.png",
                  href: "/ux-ui",
                },
              ]}
            />
            <Link
              to="/ux-ui"
              className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider font-sans transition-colors"
            >
              <span>{locale === 'fr' ? "Explorer l'UX/UI" : "Explore UX/UI"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Folder 2: Web Design */}
          <div className="flex flex-col items-center w-full max-w-[290px]">
            <GlassFolder
              label={locale === 'fr' ? "02 · Web Design" : "02 · Web Design"}
              meta={locale === 'fr' ? "Sites Clients" : "Client Platforms"}
              tone="light"
              art="glacier"
              seed={23}
              width={280}
              appearDelay={100}
              folderHref="/web-design"
              onFolderClick={() => navigate('/web-design')}
              action="more"
              menu={[
                { label: locale === 'fr' ? "Ouvrir Portfolio Web" : "Open Web Design Portfolio", onSelect: () => navigate('/web-design') },
                { label: locale === 'fr' ? "Voir le site en vedette" : "View Featured Website", onSelect: () => handleFileSelect({ name: featuredWebSite.name, href: "/web-design" }) },
              ]}
              onFileSelect={handleFileSelect}
              files={[
                {
                  name: featuredWebSite.name,
                  meta: locale === 'fr' ? "Location de Villa de Luxe" : "Luxury Villa Rental",
                  image: featuredWebSite.image,
                  href: "/web-design",
                },
                {
                  name: "Pony Club & Equestre",
                  meta: locale === 'fr' ? "Site Web Équestre" : "Responsive Web Platform",
                  image: "/Pony.jpg",
                  href: "/web-design",
                },
                {
                  name: "Pension Canine",
                  meta: locale === 'fr' ? "Pension Animale" : "Pet Boarding UI",
                  image: "/pension-canine.png",
                  href: "/web-design",
                },
              ]}
            />
            <Link
              to="/web-design"
              className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider font-sans transition-colors"
            >
              <span>{locale === 'fr' ? "Explorer le Web" : "Explore Web"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Folder 3: Vibe Coding */}
          <div className="flex flex-col items-center w-full max-w-[290px]">
            <GlassFolder
              label={locale === 'fr' ? "03 · Vibe Coding" : "03 · Vibe Coding"}
              meta={locale === 'fr' ? "Apps IA & Jeux" : "AI Apps & Games"}
              tone="light"
              art="glacier"
              seed={37}
              width={280}
              appearDelay={200}
              folderHref="/vibe-coding"
              onFolderClick={() => navigate('/vibe-coding')}
              action="more"
              menu={[
                { label: locale === 'fr' ? "Ouvrir le Lab Vibe Coding" : "Open Vibe Coding Lab", onSelect: () => navigate('/vibe-coding') },
                { label: locale === 'fr' ? "Voir Moody Child" : "View Moody Child Journal", onSelect: () => handleFileSelect({ name: "Moody Child", href: "/vibe-coding" }) },
              ]}
              onFileSelect={handleFileSelect}
              files={[
                {
                  name: "Moody Child",
                  meta: locale === 'fr' ? "Journal en 2 Clics" : "2-Tap Daily Journal",
                  image: "/moody-child-home.png",
                  href: "/vibe-coding",
                },
                {
                  name: "Survive 'til Five",
                  meta: locale === 'fr' ? "Jeu Arcade Canvas" : "Arcade Canvas Runner",
                  image: vibeCodingApp?.imageUrl || "/moody-child-home.png",
                  href: "/vibe-coding",
                },
                {
                  name: "Rapid AI Prototypes",
                  meta: locale === 'fr' ? "Micro-Apps & Edge" : "Full-Stack Iterations",
                  art: "glacier",
                  href: "/vibe-coding",
                },
              ]}
            />
            <Link
              to="/vibe-coding"
              className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider font-sans transition-colors"
            >
              <span>{locale === 'fr' ? "Explorer le Vibe Coding" : "Explore Vibe Coding"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Folder 4: Graphic Design */}
          <div className="flex flex-col items-center w-full max-w-[290px]">
            <GlassFolder
              label={locale === 'fr' ? "04 · Design Graphique" : "04 · Graphic Design"}
              meta={locale === 'fr' ? "Marque & Médias" : "Branding & Media"}
              tone="light"
              art="dusk"
              seed={44}
              width={280}
              appearDelay={300}
              folderHref="/graphic-design"
              onFolderClick={() => navigate('/graphic-design')}
              action="more"
              menu={[
                { label: locale === 'fr' ? "Ouvrir Design Graphique" : "Open Graphic Design Portfolio", onSelect: () => navigate('/graphic-design') },
                { label: locale === 'fr' ? "Voir Campagne Immobilière" : "View Luxury Villa Banner", onSelect: () => navigate('/graphic-design') },
              ]}
              onFileSelect={handleFileSelect}
              files={[
                {
                  name: "Serene Bay Villas",
                  meta: locale === 'fr' ? "Campagne Immobilière" : "Real Estate Campaign",
                  image: "/ad-blue-villa.png",
                  href: "/graphic-design",
                },
                {
                  name: "WITH LOVE",
                  meta: locale === 'fr' ? "Soins Maternels & Packaging" : "Maternal Care Essentials",
                  image: "/withlove.png",
                  href: "/graphic-design",
                },
                {
                  name: "IELTS Masterclass",
                  meta: locale === 'fr' ? "Campagne de Préparation" : "Test Prep Institute Ad",
                  image: "/ielts-ad-1090.png",
                  href: "/graphic-design",
                },
              ]}
            />
            <Link
              to="/graphic-design"
              className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider font-sans transition-colors"
            >
              <span>{locale === 'fr' ? "Explorer le Graphisme" : "Explore Graphic"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Micro-hint */}
        <p className="text-center font-mono text-[11px] tracking-[0.18em] text-stone-500 uppercase mt-4">
          {locale === 'fr'
            ? "Cliquez sur un dossier pour voir le portfolio complet · Survolez pour prévisualiser"
            : "Click any folder to view full portfolio · Hover to see preview sheets"}
        </p>
      </section>

      {/* 5. FOOTER */}
      <Footer />
    </div>
  );
}
