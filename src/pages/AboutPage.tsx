import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sun, 
  Mail, 
  Phone, 
  Linkedin, 
  Clock, 
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
  Briefcase
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import Footer from '../components/Footer';

export default function AboutPage() {
  const { locale, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('Web Design & WordPress');
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
    'Web Design & WordPress',
    'UX UI & App Design',
    'Graphic Design & Branding',
    'Online Marketing & SEO',
    'Full-Scope Multidisciplinary'
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FFFCF9]">
      {/* Page Header */}
      <section className="py-20 px-6 md:px-12 border-b border-stone-200/70 bg-stone-100/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            <span className="text-xs font-semibold tracking-wider text-orange-600 uppercase">
              Profile & Collaboration
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-stone-900 tracking-tight mb-6 flex items-center gap-4">
            About Me & Contact
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}>
              <Sun className="w-9 h-9 text-orange-500" />
            </motion.div>
          </h1>
          <p className="text-stone-600 text-lg md:text-xl max-w-3xl leading-relaxed">
            {locale === 'en'
              ? 'I design, build, and bring ideas online. From visual design and websites to digital marketing, work that looks good, works well, and is ready for the real world.'
              : 'Je conçois, développe et donne vie aux idées en ligne. Du design visuel aux sites web et au marketing digital, des projets esthétiques, fonctionnels et prêts pour le monde réel.'}
          </p>

          {/* Quick Anchor Navigation */}
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="#skills"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-stone-200/90 text-xs font-semibold text-stone-700 hover:text-orange-600 hover:border-orange-300 shadow-2xs transition-colors"
            >
              <Code2 className="w-3.5 h-3.5 text-orange-600" />
              <span>Skills & Certificates</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-orange-600 shadow-2xs transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-stone-300" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Biography & Credentials Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Highlights */}
          <div className="md:col-span-5">
            <div className="sticky top-28 space-y-6">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="aspect-square overflow-hidden bg-stone-100 flex items-center justify-center relative z-10 border border-stone-200 rounded-2xl shadow-md"
                >
                  <img
                    src="/profile-photo.jpg"
                    alt="Siwat Prathuangyukun"
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.includes('.jpg')) {
                        target.src = '/profile-photo.png';
                      }
                    }}
                  />
                </motion.div>
              </div>

              {/* Status Box */}
              <div className="p-6 bg-white border border-stone-200/80 rounded-2xl shadow-2xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Current Status: Available
                  </span>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed mb-4">
                  Open for freelance web & app commissions, design projects, and full-time opportunities.
                </p>
                <div className="space-y-2 text-xs text-stone-500 border-t border-stone-100 pt-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>Global Remote Work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>Response Time: Within 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Expertise */}
          <div className="md:col-span-7 space-y-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-2">
                Introduction
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight mb-6">
                {t('about.intro')}
              </h2>
              <div className="space-y-4 text-stone-600 text-base leading-relaxed">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
              </div>

              {/* Language Pills */}
              <div className="pt-6 flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 border border-stone-200 rounded-full text-xs font-medium text-stone-700 bg-white shadow-2xs">
                  Thai: Native
                </span>
                <span className="px-3.5 py-1.5 border border-stone-200 rounded-full text-xs font-medium text-stone-700 bg-white shadow-2xs">
                  English: Fluent Professional
                </span>
                <span className="px-3.5 py-1.5 border border-stone-200 rounded-full text-xs font-medium text-stone-700 bg-white shadow-2xs">
                  French: B1 Working Proficiency
                </span>
              </div>
            </div>

            {/* Matrix of 4 Disciplines */}
            <div className="pt-8 border-t border-stone-200/70">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-4">
                Core Capabilities
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white border border-stone-200/80 rounded-2xl shadow-2xs hover:shadow-md transition-all">
                  <h4 className="font-semibold text-stone-900 mb-1.5">01. Web Design</h4>
                  <p className="text-stone-600 text-xs leading-relaxed mb-3">
                    Custom WordPress, fast loading times, clean code, responsive layouts, and SEO setup.
                  </p>
                  <span className="text-[11px] font-medium text-orange-700 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200/60 inline-block">
                    WordPress • HTML5 • Tailwind • SEO
                  </span>
                </div>

                <div className="p-5 bg-white border border-stone-200/80 rounded-2xl shadow-2xs hover:shadow-md transition-all">
                  <h4 className="font-semibold text-stone-900 mb-1.5">02. UX UI & Apps</h4>
                  <p className="text-stone-600 text-xs leading-relaxed mb-3">
                    User research, intuitive wireframes, Figma systems, and accessible mobile designs.
                  </p>
                  <span className="text-[11px] font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60 inline-block">
                    Figma • Wireframes • Prototypes
                  </span>
                </div>

                <div className="p-5 bg-white border border-stone-200/80 rounded-2xl shadow-2xs hover:shadow-md transition-all">
                  <h4 className="font-semibold text-stone-900 mb-1.5">03. Graphic Design</h4>
                  <p className="text-stone-600 text-xs leading-relaxed mb-3">
                    Perfume packaging, production dielines, educational social campaigns, and brand identities.
                  </p>
                  <span className="text-[11px] font-medium text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200/60 inline-block">
                    Illustrator • Photoshop • Packaging
                  </span>
                </div>

                <div className="p-5 bg-white border border-stone-200/80 rounded-2xl shadow-2xs hover:shadow-md transition-all">
                  <h4 className="font-semibold text-stone-900 mb-1.5">04. Online Marketing</h4>
                  <p className="text-stone-600 text-xs leading-relaxed mb-3">
                    Targeted Google Ads, technical SEO, and conversion tracking that drive real results.
                  </p>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60 inline-block">
                    Google Ads • SEO • Analytics
                  </span>
                </div>
              </div>
            </div>

            {/* Philosophy Pillars */}
            <div className="pt-8 border-t border-stone-200/70">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-4">
                Working Principles
              </span>
              <div className="space-y-3 text-xs text-stone-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span><strong className="text-stone-900">Functional Aesthetics:</strong> Visual clarity and usability go hand in hand.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span><strong className="text-stone-900">Production-Ready:</strong> Fast loading, mobile friendly, and built for SEO from day one.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span><strong className="text-stone-900">Direct Execution:</strong> Moving from concept to live reality without unnecessary bloat.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNICAL SKILLS & ACCREDITED CERTIFICATES SECTION
         ========================================================= */}
      <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70 scroll-mt-20">
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Technical Toolkit & Credentials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-stone-900 tracking-tight mb-4">
            Skills & Certificates
          </h2>
          <p className="text-stone-600 text-base max-w-2xl leading-relaxed">
            Multidisciplinary capabilities across UX/UI product design, creative tool suites, full web development, AI-assisted workflows, and accredited certifications.
          </p>
        </div>

        {/* 1. Skills Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-4 h-4 text-orange-600" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700">
              Core Skills & Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* UX UI Product */}
            <div className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-stone-900 text-base">UX UI Product</h4>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                    Product
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'User Flows',
                    'Wireframing',
                    'Prototyping',
                    'Design Systems',
                    'Accessibility',
                    'Responsive Web Design'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-stone-50 hover:bg-blue-50/60 text-stone-800 hover:text-blue-900 border border-stone-200/80 rounded-lg text-xs font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Design Tools */}
            <div className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                      <Palette className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-stone-900 text-base">Design Tools</h4>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200/60">
                    Creative Suite
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Figma',
                    'Adobe Photoshop',
                    'Adobe Illustrator'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-stone-50 hover:bg-purple-50/60 text-stone-800 hover:text-purple-900 border border-stone-200/80 rounded-lg text-xs font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-xs">
                      <Globe className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-stone-900 text-base">Web Development</h4>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200/60">
                    Live Builds
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'WordPress (Expert)',
                    'Elementor',
                    'HTML5',
                    'CSS3',
                    'Git/GitHub',
                    'Netlify (deployment)',
                    'Basic SEO'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        skill.includes('Expert')
                          ? 'bg-orange-50 text-orange-900 border-orange-300 font-semibold'
                          : 'bg-stone-50 hover:bg-orange-50/60 text-stone-800 hover:text-orange-900 border-stone-200/80'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Workflow */}
            <div className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-stone-900 text-base">AI Workflow</h4>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                    Productivity
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Claude',
                    'Gemini',
                    'Google AI Studio (research synthesis, code generation)'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-stone-50 hover:bg-amber-50/60 text-stone-800 hover:text-amber-950 border border-stone-200/80 rounded-lg text-xs font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional */}
            <div className="p-6 bg-white border border-stone-200/90 rounded-2xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-stone-900 text-base">Professional</h4>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                    Execution
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'End-to-End Project Management',
                    'Client Communication'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-2 bg-stone-50 hover:bg-emerald-50/60 text-stone-800 hover:text-emerald-950 border border-stone-200/80 rounded-xl text-xs font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Certificates & Accreditations */}
        <div className="pt-10 border-t border-stone-200/70">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-4 h-4 text-orange-600" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700">
              Certificates & Credentials
            </h3>
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
                  Rigorous program covering foundational user research, wireframing, high-fidelity Figma prototyping, and usability studies.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center gap-2 text-[11px] text-stone-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Verified Professional Certificate</span>
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
                  Advanced certification in design token systems, component variants, complex auto-layouts, and design system governance.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center gap-2 text-[11px] text-stone-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>Verified Advanced Figma Skills</span>
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
                  Practical mastermind in prompt engineering, LLM workflow orchestration, research synthesis, and rapid AI-assisted development.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center gap-2 text-[11px] text-stone-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Verified Generative AI Credential</span>
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
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight mb-4">
            Let's Bring Your Ideas Online
          </h2>
          <p className="text-stone-600 text-base max-w-2xl leading-relaxed">
            Whether you need a custom WordPress platform, an app UX prototype, a brand visual identity, or a search marketing campaign, send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Channels & Reach */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-stone-900 text-stone-100 rounded-2xl shadow-lg">
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-5">
                Direct Contact Channels
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
                        Chat on WhatsApp
                      </span>
                      <span className="text-xs text-stone-400">
                        Instant messaging for project scoping
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
                          Send an Email
                        </span>
                        <span className="text-xs text-stone-400">
                          Direct dispatch to my inbox
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
                      ✓ Copied email address to clipboard!
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
                        Connect on LinkedIn
                      </span>
                      <span className="text-xs text-stone-400">
                        Professional background & network
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>
              </div>

              <div className="mt-6 pt-5 border-t border-stone-800 text-xs text-stone-400 leading-relaxed">
                <p>
                  Prefer email or WhatsApp? Send a brief overview of your scope, or book an introductory call.
                </p>
              </div>
            </div>

            {/* Quick Fact Card */}
            <div className="p-6 bg-stone-50 border border-stone-200/80 rounded-2xl text-xs text-stone-600 space-y-2">
              <span className="font-bold text-stone-800 uppercase tracking-wider block">
                Collaboration Notes
              </span>
              <p>• Fixed-price or milestone contracts for full projects.</p>
              <p>• Retainer models available for ongoing SEO, CRO, and maintenance.</p>
              <p>• Invoices issued with formal business documentation.</p>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-200/90 rounded-2xl p-7 md:p-10 shadow-sm">
              <h3 className="text-2xl font-semibold text-stone-900 tracking-tight mb-2">
                Project Inquiry Form
              </h3>
              <p className="text-stone-500 text-xs mb-8">
                Fill out the details below, and I will get back to you with next steps within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-2xl font-semibold text-stone-900 mb-2">Thank You, {formData.name || 'Friend'}!</h4>
                  <p className="text-stone-700 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Your inquiry regarding <strong>{selectedDiscipline}</strong> has been received. I will review your requirements and respond within 24 hours.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:siwat.ptyk@gmail.com?subject=Project Inquiry: ${selectedDiscipline}&body=Hi Siwat, my name is ${formData.name}. ${formData.message}`}
                      className="px-6 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold"
                    >
                      Send Duplicate as Email
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-stone-300 text-stone-700 text-xs font-semibold hover:border-stone-900"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Discipline Selector Chips */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2.5">
                      1. Select Primary Discipline
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
                        2. Your Name *
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
                        3. Your Email Address *
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
                      4. Ideal Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                    >
                      <option value="Urgent (within 2-3 weeks)">Urgent (within 2-3 weeks)</option>
                      <option value="Within 1-2 months">Standard (Within 1-2 months)</option>
                      <option value="Flexible / Exploration">Flexible / Future Exploration</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                      5. Project Scope & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're looking to build, reference sites, or desired timelines..."
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
                      <span>Send Project Inquiry</span>
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
