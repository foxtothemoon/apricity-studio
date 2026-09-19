import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  Search, 
  PenTool, 
  CheckCircle2, 
  Maximize2, 
  X, 
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { facebookAdCaseStudies } from '../data';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function OnlineMarketingPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'real-estate' | 'language-course'>('all');

  return (
    <div className="pt-24 min-h-screen bg-[#FFFCF9]">
      {/* Lightbox Modal for Ad Manager Screenshots */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center cursor-pointer"
          >
            <div className="relative max-w-4xl max-h-[90vh] bg-stone-900 rounded-xl overflow-hidden border border-stone-800 shadow-2xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close image"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage}
                alt="Facebook Ad Manager Verified Stats"
                className="max-h-[85vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 bg-stone-950 text-center text-xs text-stone-400">
                Verified Facebook Ads Manager Screenshot • Click outside or press Close to dismiss
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Header */}
      <section className="py-20 px-6 md:px-12 border-b border-stone-200/70 bg-stone-100/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            <span className="text-xs font-semibold tracking-wider text-orange-600 uppercase">
              Discipline 04 • Online Marketing
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-stone-900 tracking-tight mb-4">
            Online Marketing & Performance Ads
          </h1>

          <p className="text-stone-700 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Targeted Facebook Ads and performance marketing executed with lean testing budgets — verified by direct Facebook Ads Manager metrics and real customer inquiries.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-stone-700">
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Verified Facebook Ads Manager Data
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Direct Messenger Lead Generation
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Controlled Testing Budgets
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              High Commercial-Intent Targeting
            </span>
          </div>
        </div>
      </section>

      {/* Verified Facebook Ad Stats Showcase */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200/70">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Verified Campaign Case Studies
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-stone-900 tracking-tight">
              Real Ad Results & Live Performance
            </h2>
            <p className="text-stone-600 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
              Verified campaign performance extracted directly from Facebook Ads Manager, showing low Cost-Per-Lead (CPL) and strong inquiry volume under lean test budgets.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-xl border border-stone-200 self-start md:self-auto text-xs font-medium">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Cases (2)
            </button>
            <button
              onClick={() => setActiveTab('real-estate')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'real-estate'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Ad 1 • Real Estate
            </button>
            <button
              onClick={() => setActiveTab('language-course')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'language-course'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Ad 2 • Language Course
            </button>
          </div>
        </div>

        {/* Case Studies Display */}
        <div className="space-y-16">
          {facebookAdCaseStudies
            .filter((study) => {
              if (activeTab === 'real-estate') return study.id === 'ad-1-real-estate-rental';
              if (activeTab === 'language-course') return study.id === 'ad-2-language-course';
              return true;
            })
            .map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-xs hover:shadow-md transition-shadow"
              >
                {/* Header Tagline & Badges */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider">
                        {study.adNumber}
                      </span>
                      <span className="text-stone-300">•</span>
                      <span className="text-xs font-semibold uppercase text-stone-500">
                        {study.businessType.en}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight">
                      {study.tagline.en}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-medium">
                      Goal: {study.goal}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      {study.status}
                    </span>
                  </div>
                </div>

                {/* Main Content Grid: Screenshot + Verified Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-start">
                  {/* Screenshot Card */}
                  <div className="lg:col-span-5">
                    <div className="relative group rounded-2xl overflow-hidden border border-stone-200 bg-stone-950 shadow-md">
                      <img
                        src={study.image}
                        alt={`${study.adNumber} Verified Performance Screenshot`}
                        className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div 
                        onClick={() => setSelectedImage(study.image)}
                        className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                      >
                        <div className="px-4 py-2 rounded-full bg-white/95 text-stone-950 text-xs font-semibold flex items-center gap-2 shadow-lg">
                          <Maximize2 className="w-4 h-4" />
                          <span>Inspect Full Screenshot</span>
                        </div>
                      </div>
                      <div className="p-3 bg-stone-900 border-t border-stone-800 text-center">
                        <span className="text-[11px] text-stone-400">
                          Verified Facebook Ads Manager Back-Office Stat
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Performance Indicators (KPIs) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Budget Banner */}
                      <div className="p-4 rounded-xl bg-orange-50 border border-orange-200/80 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-orange-700 font-semibold block">
                            {study.budgetType.en}
                          </span>
                          <span className="text-2xl font-bold text-orange-950">
                            {study.budgetValue}
                          </span>
                        </div>
                        <div className="sm:text-right">
                          <span className="text-xs uppercase tracking-wider text-stone-500 block">
                            Campaign Duration
                          </span>
                          <span className="text-sm font-semibold text-stone-900">
                            {study.duration.en}
                          </span>
                        </div>
                      </div>

                      {/* Verified Metrics Cards */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center">
                          <span className="text-2xl md:text-3xl font-bold text-orange-600 block mb-0.5">
                            {study.metrics.messagingStarted}
                          </span>
                          <span className="text-xs font-medium text-stone-700 block">
                            Chats Started
                          </span>
                          <span className="text-[10px] text-stone-400">
                            Direct Inquiries
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center">
                          <span className="text-2xl md:text-3xl font-bold text-emerald-700 block mb-0.5">
                            {study.metrics.costPerMessage}
                          </span>
                          <span className="text-xs font-medium text-stone-700 block">
                            Cost / Chat
                          </span>
                          <span className="text-[10px] text-stone-400">
                            Cost Per Lead
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center">
                          <span className="text-2xl md:text-3xl font-bold text-stone-900 block mb-0.5">
                            {study.metrics.reach.toLocaleString()}
                          </span>
                          <span className="text-xs font-medium text-stone-700 block">
                            Reach
                          </span>
                          <span className="text-[10px] text-stone-400">
                            Unique Accounts
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center">
                          <span className="text-2xl md:text-3xl font-bold text-stone-900 block mb-0.5">
                            {study.metrics.views.toLocaleString()}
                          </span>
                          <span className="text-xs font-medium text-stone-700 block">
                            Total Views
                          </span>
                          <span className="text-[10px] text-stone-400">
                            Impressions
                          </span>
                        </div>
                      </div>

                      {/* Live Copywriting & Hook Snippet */}
                      <div className="p-5 rounded-xl bg-stone-900 text-stone-100 mb-6">
                        <div className="flex items-center justify-between mb-3 border-b border-stone-800 pb-2">
                          <span className="text-xs uppercase tracking-wider text-orange-400 flex items-center gap-1.5 font-medium">
                            <PenTool className="w-3.5 h-3.5" />
                            Live Ad Copywriting & Hook
                          </span>
                          <span className="text-[11px] text-stone-400">
                            CTA: {study.copywritingExcerpt.cta}
                          </span>
                        </div>
                        <h4 className="font-semibold text-sm md:text-base text-white mb-2">
                          "{study.copywritingExcerpt.headline}"
                        </h4>
                        <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
                          {study.copywritingExcerpt.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategy Breakdown: Audience + Keywords + Why It Succeeded */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-stone-100">
                  {/* Target Audience */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-orange-600" />
                      Audience & Targeting
                    </h4>
                    <p className="text-xs text-stone-700 leading-relaxed mb-3">
                      {study.targetAudience.demographics.en}
                    </p>
                    <div className="pt-2 border-t border-stone-200/60">
                      <span className="text-[11px] font-semibold text-stone-800 block mb-1.5">
                        Interests Layered:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {study.targetAudience.interests.map((int, iIdx) => (
                          <span key={iIdx} className="px-2 py-0.5 bg-white border border-stone-200 rounded text-[10px] text-stone-600">
                            {int.en}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Keyword Strategy */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
                      <Search className="w-4 h-4 text-orange-600" />
                      High-Intent Keywords
                    </h4>
                    <p className="text-xs text-stone-700 leading-relaxed mb-3">
                      {study.keywordStrategy.explanation.en}
                    </p>
                    <div className="pt-2 border-t border-stone-200/60">
                      <span className="text-[11px] font-semibold text-stone-800 block mb-1.5">
                        Selected Keywords:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {study.keywordStrategy.highIntentKeywords.map((kw, kIdx) => (
                          <span key={kIdx} className="px-2 py-0.5 bg-white border border-stone-200 rounded text-[10px] text-orange-700 font-medium">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Why It Succeeded */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-orange-600" />
                      Key Takeaways & ROI
                    </h4>
                    <ul className="space-y-2 text-xs text-stone-700">
                      {study.keyTakeaways.map((takeaway, tkIdx) => (
                        <li key={tkIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{takeaway.en}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="p-10 md:p-14 bg-stone-100/70 border border-stone-200/80 rounded-3xl max-w-3xl mx-auto shadow-xs">
          <h3 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight mb-3">
            Ready to Launch a High-ROI Campaign?
          </h3>
          <p className="text-stone-600 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Whether starting with a small test budget or scaling customer acquisition, let's target high-intent buyers and drive verified direct inquiries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/33652655676"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 transition-all shadow-md active:scale-95"
            >
              <span>Consult on Growth & Ads</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              to="/#works"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-stone-300 text-stone-800 text-xs font-semibold uppercase tracking-wider hover:bg-stone-50 transition-all shadow-2xs"
            >
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
