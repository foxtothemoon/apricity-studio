import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Globe, Smartphone, Palette, TrendingUp, Mail, Phone, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import { useLanguage } from '../LanguageContext';
import { webClientSites, projects } from '../data';

export default function Home() {
  const { locale, t } = useLanguage();
  const carepill = projects.find(p => p.slug.includes('carepill') || p.id === '03');
  const featuredWebSite = webClientSites[0];

  return (
    <div className="min-h-screen bg-[#FFFCF9]">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Marquee */}
      <Marquee />

      {/* 3. Selected Works Across 4 Disciplines */}
      <section id="overview" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 font-mono">
                Selected Work
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-stone-900 tracking-tight">
              Featured Case Studies
            </h2>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-800 hover:text-orange-600 transition-colors"
          >
            <span>About Me</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid - 1 Flagship per Discipline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Web Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-stone-200/90 hover:border-stone-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-orange-600 font-mono">01</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Web Design & WordPress
                  </span>
                </div>
                <Globe className="w-4 h-4 text-stone-400 group-hover:text-orange-600 transition-colors" />
              </div>

              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-stone-100 border border-stone-200/80 mb-5">
                <img
                  src={featuredWebSite.image}
                  alt={featuredWebSite.name}
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <h3 className="text-xl font-semibold text-stone-900 tracking-tight mb-2 group-hover:text-orange-600 transition-colors">
                {featuredWebSite.name}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Real estate consultancy platform with property showcases, responsive design, and fast loading speed.
              </p>
            </div>

            <Link
              to="/web-design"
              className="inline-flex items-center justify-between pt-4 border-t border-stone-100 text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-orange-600 transition-colors"
            >
              <span>View Web Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Card 2: UX UI & App Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="bg-white border border-stone-200/90 hover:border-stone-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-blue-600 font-mono">02</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    UX UI & App Design
                  </span>
                </div>
                <Smartphone className="w-4 h-4 text-stone-400 group-hover:text-blue-600 transition-colors" />
              </div>

              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-stone-100 border border-stone-200/80 mb-5">
                <img
                  src={carepill?.imageUrl || '/carepill-cover.png'}
                  alt="Carepill App"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <h3 className="text-xl font-semibold text-stone-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                Carepill: Medication Reminder App
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Accessible medication scheduling app with high-contrast UI, verified Figma design tokens, and user testing.
              </p>
            </div>

            <Link
              to="/ux-ui"
              className="inline-flex items-center justify-between pt-4 border-t border-stone-100 text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-blue-600 transition-colors"
            >
              <span>View UX UI Case Studies</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Card 3: Graphic Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="bg-white border border-stone-200/90 hover:border-stone-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-purple-600 font-mono">03</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Graphic Design & Banners
                  </span>
                </div>
                <Palette className="w-4 h-4 text-stone-400 group-hover:text-purple-600 transition-colors" />
              </div>

              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-stone-950 border border-stone-200/80 mb-5">
                <img
                  src="/ad-blue-villa.png"
                  alt="Serene Bay Villas Banner"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <h3 className="text-xl font-semibold text-stone-900 tracking-tight mb-2 group-hover:text-purple-600 transition-colors">
                Marketing Banners & Packaging
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Real estate ad campaigns, educational test prep banners, and luxury fragrance packaging with print dielines.
              </p>
            </div>

            <Link
              to="/graphic-design"
              className="inline-flex items-center justify-between pt-4 border-t border-stone-100 text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-purple-600 transition-colors"
            >
              <span>View Graphic Works</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Card 4: Online Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="bg-white border border-stone-200/90 hover:border-stone-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-emerald-600 font-mono">04</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Online Marketing & Ads
                  </span>
                </div>
                <TrendingUp className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 transition-colors" />
              </div>

              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-stone-50 border border-stone-200/80 mb-5 p-6 flex items-center justify-around">
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-orange-600 block font-mono">฿8.33</span>
                  <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">Cost / Lead</span>
                </div>
                <div className="h-10 w-px bg-stone-200"></div>
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-emerald-600 block font-mono">157</span>
                  <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">Inquiries</span>
                </div>
                <div className="h-10 w-px bg-stone-200"></div>
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-stone-900 block font-mono">Verified</span>
                  <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">Ad Manager</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-stone-900 tracking-tight mb-2 group-hover:text-emerald-600 transition-colors">
                Facebook Ads & Conversion Campaigns
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Laser-targeted social ad campaigns with verified back-office stats, commercial keywords, and low-cost lead generation.
              </p>
            </div>

            <Link
              to="/online-marketing"
              className="inline-flex items-center justify-between pt-4 border-t border-stone-100 text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-emerald-600 transition-colors"
            >
              <span>View Ad Results</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. About Me Quick Contact Banner */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-stone-800 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono uppercase tracking-wider text-orange-400 block mb-2">
                Available for Projects
              </span>
              <h3 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-3">
                Siwat Prathuangyukun ("Fox")
              </h3>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                Freelance web designer, developer, and digital marketer with 6+ years of experience building real-world projects.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/about#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 transition-all shadow-md active:scale-95"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/33652655676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-stone-700 hover:border-emerald-500 bg-stone-800 text-stone-200 hover:text-emerald-400 text-xs font-medium transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:siwat.ptyk@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-stone-700 hover:border-orange-500 bg-stone-800 text-stone-200 hover:text-orange-400 text-xs font-medium transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-orange-400" />
                  <span>siwat.ptyk@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/siwat-prathuangyukun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-stone-700 hover:border-blue-400 bg-stone-800 text-stone-200 hover:text-blue-400 text-xs font-medium transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl border border-stone-700 overflow-hidden shadow-xl">
                <img
                  src="/profile-photo.jpg"
                  alt="Siwat Prathuangyukun"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.includes('.jpg')) {
                      target.src = '/profile-photo.png';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
