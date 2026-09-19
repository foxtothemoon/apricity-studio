import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ArrowUpRight, Sparkles, Box, Layers, Eye, CheckCircle2, ChevronLeft, ChevronRight, GraduationCap, BookOpen } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import BannerShowcaseSection, { SocialBannerItem } from '../components/graphic/BannerShowcaseSection';
import PackagingShowcaseSection, { PerfumeProjectItem } from '../components/graphic/PackagingShowcaseSection';

export default function GraphicDesignPage() {
  const { locale } = useLanguage();
  const [selectedPackagingModal, setSelectedPackagingModal] = useState<'aqua' | 'pony' | null>(null);
  const [selectedBannerModal, setSelectedBannerModal] = useState<number | null>(null);
  const [packagingActiveTab, setPackagingActiveTab] = useState<'both' | 'aqua' | 'pony'>('both');
  const [bannerCampaignFilter, setBannerCampaignFilter] = useState<'all' | 'luxury-villa' | 'ielts' | 'maternal' | 'advocacy'>('all');
  const [spotlightBannerKey, setSpotlightBannerKey] = useState<'luxury-villa' | 'ielts' | 'maternal'>('luxury-villa');

  const allSocialBanners = [
    {
      id: 0,
      campaignKey: 'luxury-villa' as const,
      campaign: 'Serene Bay Villas • Real Estate',
      categoryBadge: 'Real Estate Banner',
      badgeStyle: 'bg-amber-100 text-amber-950 border-amber-300',
      title: 'Serene Bay Villas — Marketing Banner',
      subtitle: 'Real Estate Campaign',
      image: '/ad-blue-villa.png',
      caption: 'Targeted luxury real estate banner featuring serene architectural proportions, infinity pool, and clear typography.',
      highlight: 'Architectural Proportion & Clean Typography',
      metric: 'Optimized for high-net-worth investor acquisition.',
      tools: ['Photoshop CC', 'Illustrator CC', 'AI Direction'],
      specs: '1536 × 1024 px • 3:2 Landscape • 300 DPI'
    },
    {
      id: 1,
      campaignKey: 'ielts' as const,
      campaign: 'IELTS Test Prep Institute',
      categoryBadge: 'Education Banner',
      badgeStyle: 'bg-blue-50 text-blue-800 border-blue-200',
      title: 'IELTS Masterclass — Ad Banner',
      subtitle: 'Student Campaign',
      image: '/ielts-ad-1090.png',
      caption: 'Educational ad banner designed for test preparation tutoring, focusing on academic focus and test readiness.',
      highlight: 'Clear Academic Branding',
      metric: 'Designed for student engagement and course conversion.',
      tools: ['Photoshop', 'Illustrator'],
      specs: '1147 × 1371 px • Social Ad Portrait • 300 DPI'
    },
    {
      id: 2,
      campaignKey: 'maternal' as const,
      campaign: 'Maternal Care & Postpartum',
      categoryBadge: 'Product Promotion',
      badgeStyle: 'bg-rose-50 text-rose-800 border-rose-200',
      title: 'WITH LOVE — Postpartum Care Essentials',
      subtitle: 'Product Campaign',
      image: '/withlove.png',
      caption: 'Promotional campaign banner for new mothers, highlighting postpartum recovery kits with reassuring soft tones.',
      highlight: 'Maternal Care & Comfort',
      metric: 'Engineered for social commerce conversion.',
      tools: ['Illustrator', 'Photoshop'],
      specs: '1080 × 1350 px • 4:5 Portrait Feed • 300 DPI'
    },
    {
      id: 3,
      campaignKey: 'advocacy' as const,
      campaign: 'Public Advocacy Series',
      categoryBadge: 'Medical Safety',
      badgeStyle: 'bg-orange-50 text-orange-800 border-orange-200',
      title: 'Healthcare & Sterile Medical Security',
      subtitle: 'Slide 01 • Medical Polymers',
      image: '/plastic-1.png',
      caption: 'Advocacy infographic highlighting sterile medical instruments and hospital safety.',
      highlight: 'Sterile Safety & Clarity',
      metric: 'Educational carousel for social awareness.',
      tools: ['Illustrator', 'Photoshop'],
      specs: '1200 × 1500 px • 4:5 Portrait • 300 DPI'
    },
    {
      id: 4,
      campaignKey: 'advocacy' as const,
      campaign: 'Public Advocacy Series',
      categoryBadge: 'Food Logistics',
      badgeStyle: 'bg-orange-50 text-orange-800 border-orange-200',
      title: 'Food Preservation & Waste Minimization',
      subtitle: 'Slide 02 • Preservation',
      image: '/plastic-2.jpg',
      caption: 'Infographic banner communicating food shelf-life extension and waste reduction.',
      highlight: 'Waste Reduction Data',
      metric: 'Social media educational series.',
      tools: ['Illustrator', 'Photoshop'],
      specs: '1200 × 1500 px • 4:5 Portrait • 300 DPI'
    },
    {
      id: 5,
      campaignKey: 'advocacy' as const,
      campaign: 'Public Advocacy Series',
      categoryBadge: 'Clean Transit',
      badgeStyle: 'bg-orange-50 text-orange-800 border-orange-200',
      title: 'Lightweight Mobility & Energy Conservation',
      subtitle: 'Slide 03 • Transit',
      image: '/plastic-3.jpg',
      caption: 'Infographic highlighting lightweight materials in automotive and electric vehicles.',
      highlight: 'Energy Efficiency',
      metric: 'Educational content design.',
      tools: ['Illustrator', 'Photoshop'],
      specs: '1200 × 1500 px • 4:5 Portrait • 300 DPI'
    }
  ];

  const perfumeProjects = [
    {
      id: 'aqua',
      title: 'Aqua Arena',
      brand: 'LA PEARLY',
      type: 'Eau de Parfum • 100ml',
      tagline: 'Oceanic Marine & Coral Notes',
      image: '/Aqua.jpg',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      fragranceNotes: {
        top: 'Sea Salt, Ozone, Bergamot',
        heart: 'Marine Coral, Blue Lily',
        base: 'Ambergris, Driftwood, Musk'
      },
      tools: ['Illustrator', 'Photoshop'],
      boxSpecs: {
        dieline: 'Reverse Tuck End with Clear Die-Cut Window',
        dimensions: '155 × 72 × 42 mm',
        paperStock: '380 GSM SBS Ivory Board',
        finishings: 'Matte Lamination + Silver Hot Foil + Spot UV'
      },
      highlights: [
        'Die-Cut Window: Side transparent aperture revealing flacon clarity and liquid tint',
        'Continuous Artwork: 4-panel seamless oceanic reef wrap-around illustration',
        'Tactile Spot UV: Raised gloss lacquer on water drops for a sensory tactile feel',
        'Silver Hot Foil: Metallic stamping on brand emblem and typography borders'
      ]
    },
    {
      id: 'pony',
      title: 'Pretty Pony',
      brand: 'LA PEARLY',
      type: 'Eau de Parfum • 50ml & 100ml',
      tagline: 'Sweet Floral Gourmand',
      image: '/Pony.jpg',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      fragranceNotes: {
        top: 'Pink Peony, Sweet Berries',
        heart: 'Cherry Blossom, Rose Petals',
        base: 'Vanilla Orchid, Soft Musk'
      },
      tools: ['Illustrator', 'Photoshop'],
      boxSpecs: {
        dieline: 'Straight Tuck End with Reinforced Locking Tabs',
        dimensions: '140 × 68 × 38 mm',
        paperStock: '360 GSM C1S Ivory Board',
        finishings: 'Soft-Touch Coating + Rose Gold Foil + Debossing'
      },
      highlights: [
        'Feminine Silhouette: Expressive vector line-art with cascading wind-swept tresses',
        'Baroque Corner Filigree: Classic ornamental lace borders framing each carton panel',
        'Rose Gold Hot Stamping: Metallic script title contrasting with the ombre background',
        'Soft-Touch Lamination: Silky velvet hand feel resistant to fingerprint marks'
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FFFCF9]">
      {/* Page Header */}
      <section className="py-20 px-6 md:px-12 border-b border-stone-200/70 bg-stone-100/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
            <span className="text-xs font-semibold tracking-wider text-purple-600 uppercase">
              Discipline 03 • Graphic Design
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-stone-900 tracking-tight mb-6">
            Graphic Design & Visual Systems
          </h1>
          <p className="text-stone-600 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            {locale === 'en'
              ? 'AI-assisted IELTS tutoring ad banners, postpartum maternal care suites, luxury perfume packaging dielines, and precision print production finishing.'
              : 'Bannières éducatives IELTS assistées par IA, suites de soins post-partum, packaging de parfumerie & lignes de découpe et finitions d’impression haute précision.'}
          </p>
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-stone-600">
            <span className="px-3.5 py-1.5 bg-blue-600 text-white font-semibold rounded-full shadow-xs">
              IELTS Tutoring Banners (AI-Assisted)
            </span>
            <span className="px-3.5 py-1.5 bg-rose-50 text-rose-900 border border-rose-200 rounded-full shadow-2xs font-semibold">
              Postpartum Care Banners
            </span>
            <span className="px-3.5 py-1.5 bg-purple-50 text-purple-900 border border-purple-200 rounded-full shadow-2xs font-semibold">
              Social Media Campaigns
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs font-medium">
              Perfume Packaging & Dielines
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full shadow-2xs">
              Print Production & Finishing
            </span>
          </div>
        </div>
      </section>

      {/* Visual Systems Showcase */}
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16 border-b border-stone-200/70">

        {/* Visual System 01: Social Media & Commercial Promotional Banners (Top) */}
        <BannerShowcaseSection
          spotlightBannerKey={spotlightBannerKey}
          setSpotlightBannerKey={setSpotlightBannerKey}
          bannerCampaignFilter={bannerCampaignFilter}
          setBannerCampaignFilter={setBannerCampaignFilter}
          allSocialBanners={allSocialBanners}
          onSelectBanner={(id) => setSelectedBannerModal(id)}
        />

        {/* Visual System 02: Luxury Perfume Packaging & Structural Dielines (Bottom) */}
        <PackagingShowcaseSection
          packagingActiveTab={packagingActiveTab}
          setPackagingActiveTab={setPackagingActiveTab}
          perfumeProjects={perfumeProjects}
          onSelectPackaging={(id) => setSelectedPackagingModal(id)}
        />
      </div>

      {/* Packaging Fullscreen Dieline Inspector Modal */}
      <AnimatePresence>
        {selectedPackagingModal !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-stone-950/90 backdrop-blur-md">
            {(() => {
              const activeProj = perfumeProjects.find(p => p.id === selectedPackagingModal);
              if (!activeProj) return null;

              return (
                <div className="relative max-w-5xl w-full max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-stone-300">
                  {/* Modal Header */}
                  <div className="p-5 md:px-8 border-b border-stone-200 flex items-center justify-between bg-stone-50">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${activeProj.badgeColor}`}>
                        {activeProj.brand}
                      </span>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-stone-900">
                          {activeProj.title} — Packaging Dieline Blueprint
                        </h3>
                        <p className="text-xs text-stone-500">
                          {activeProj.tagline} • {activeProj.type}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedPackagingModal(null)}
                      className="p-2 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-200 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Modal Body */}
                  <div className="overflow-y-auto p-6 md:p-8 space-y-6">
                    {/* Image View */}
                    <div className="bg-[#FAF9F6] border border-stone-200 rounded-2xl p-4 md:p-6 flex items-center justify-center">
                      <img
                        src={activeProj.image}
                        alt={`${activeProj.title} Dieline Full View`}
                        referrerPolicy="no-referrer"
                        className="max-h-[55vh] object-contain mx-auto rounded-lg shadow-xs"
                      />
                    </div>

                    {/* Dieline Anatomy Guide */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80">
                        <span className="font-bold text-blue-900 uppercase block mb-1">
                          Crease Lines (Dashed Guides)
                        </span>
                        <p className="text-blue-800 leading-relaxed">
                          Precision score lines calibrated for folding thickness without substrate or lamination cracking.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-stone-100 border border-stone-300">
                        <span className="font-bold text-stone-900 uppercase block mb-1">
                          Dieline Cut (Solid Boundaries)
                        </span>
                        <p className="text-stone-700 leading-relaxed">
                          Solid outer knife cut lines with radiused tuck flaps designed for smooth insertion and carton assembly.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/80">
                        <span className="font-bold text-rose-900 uppercase block mb-1">
                          Glue Tab & Closures
                        </span>
                        <p className="text-rose-800 leading-relaxed">
                          15° angled glue tab clearance with internal locking dust flaps securing the glass flacon securely.
                        </p>
                      </div>
                    </div>

                    {/* Highlights & Notes */}
                    <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                        Technical Specs & Print Production Specifications
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
                        <div className="flex items-center gap-2 flex-wrap">
                          <strong className="text-stone-900">Software Tools:</strong>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {activeProj.tools.map((tool) => (
                              <span
                                key={tool}
                                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold border ${
                                  tool.toLowerCase().includes('illus')
                                    ? 'bg-amber-50 text-amber-900 border-amber-300'
                                    : 'bg-sky-50 text-sky-900 border-sky-300'
                                }`}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    tool.toLowerCase().includes('illus') ? 'bg-amber-500' : 'bg-sky-500'
                                  }`}
                                />
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <strong className="text-stone-900">Structure Style:</strong> {activeProj.boxSpecs.dieline}
                        </div>
                        <div>
                          <strong className="text-stone-900">Dimensions:</strong> {activeProj.boxSpecs.dimensions}
                        </div>
                        <div>
                          <strong className="text-stone-900">Paper Stock:</strong> {activeProj.boxSpecs.paperStock}
                        </div>
                        <div>
                          <strong className="text-stone-900">Finishing:</strong> {activeProj.boxSpecs.finishings}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="p-4 px-8 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-medium">
                      Designed for La Pearly Fine Fragrances • Production Ready 300 DPI
                    </span>
                    <button
                      onClick={() => setSelectedPackagingModal(null)}
                      className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Close Inspector
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </AnimatePresence>

      {/* Social Media Banner Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedBannerModal !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/85 backdrop-blur-sm overflow-y-auto">
            {(() => {
              const currentBanner = allSocialBanners[selectedBannerModal];
              return (
                <div className="relative max-w-5xl lg:max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200/90 my-auto">
                  {/* Modal Header */}
                  <div className="p-4 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-stone-50/80">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${currentBanner.badgeStyle}`}>
                        {currentBanner.subtitle}
                      </span>
                      <span className="text-xs text-stone-400">|</span>
                      <h3 className="text-sm sm:text-base font-bold text-stone-900 truncate">
                        {currentBanner.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedBannerModal(null)}
                      className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-200/60 rounded-full transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Modal Body */}
                  <div className="grid grid-cols-1 md:grid-cols-12 max-h-[80vh] overflow-y-auto">
                    {/* Banner Image Preview Container */}
                    <div className="md:col-span-7 lg:col-span-8 bg-stone-950 p-6 sm:p-8 flex items-center justify-center relative min-h-[380px] md:min-h-[540px]">
                      <img
                        src={currentBanner.image}
                        alt={currentBanner.title}
                        referrerPolicy="no-referrer"
                        className="max-h-[72vh] w-full object-contain rounded-xl shadow-2xl border border-stone-800"
                      />

                      {/* Previous / Next Controls */}
                      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedBannerModal((prev) =>
                              prev !== null ? (prev === 0 ? allSocialBanners.length - 1 : prev - 1) : 0
                            );
                          }}
                          className="pointer-events-auto p-2.5 rounded-full bg-stone-950/70 hover:bg-stone-950 text-white backdrop-blur-xs transition-colors shadow-md"
                          aria-label="Previous banner"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedBannerModal((prev) =>
                              prev !== null ? (prev === allSocialBanners.length - 1 ? 0 : prev + 1) : 0
                            );
                          }}
                          className="pointer-events-auto p-2.5 rounded-full bg-stone-950/70 hover:bg-stone-950 text-white backdrop-blur-xs transition-colors shadow-md"
                          aria-label="Next banner"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Banner Details Sidebar */}
                    <div className="md:col-span-5 lg:col-span-4 p-6 md:p-8 flex flex-col justify-between space-y-6 bg-white">
                      <div className="space-y-5">
                        <div>
                          <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block mb-1">
                            {currentBanner.campaign}
                          </span>
                          <h4 className="text-lg font-bold text-stone-900 leading-snug">
                            {currentBanner.title}
                          </h4>
                          <p className="text-xs text-stone-600 leading-relaxed mt-2.5">
                            {currentBanner.caption}
                          </p>
                        </div>

                        {/* Strategic Highlight Box */}
                        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1">
                          <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                            Key Focus
                          </span>
                          <p className="text-xs font-semibold text-stone-800">
                            {currentBanner.metric}
                          </p>
                        </div>

                        {/* Production Specs */}
                        <div className="space-y-2 text-xs">
                          <span className="font-bold text-stone-900 uppercase tracking-wider block text-[11px]">
                            Technical Specifications
                          </span>
                          <div className="divide-y divide-stone-100">
                            <div className="py-2 flex justify-between">
                              <span className="text-stone-500">Dimensions:</span>
                              <span className="font-mono font-medium text-stone-800">
                                {currentBanner.specs.split('•')[0].trim()}
                              </span>
                            </div>
                            <div className="py-2 flex justify-between">
                              <span className="text-stone-500">Aspect Ratio:</span>
                              <span className="font-medium text-stone-800">
                                {currentBanner.campaignKey === 'luxury-villa' 
                                  ? '3:2 Landscape Banner (1536:1024)' 
                                  : currentBanner.campaignKey === 'ielts' 
                                    ? 'Portrait Social Ad (1147:1371)' 
                                    : '4:5 Portrait Feed'}
                              </span>
                            </div>
                            <div className="py-2 flex justify-between items-center">
                              <span className="text-stone-500">Software Tools:</span>
                              <div className="flex items-center gap-1.5 flex-wrap">
                                {currentBanner.tools.map((tool) => (
                                  <span
                                    key={tool}
                                    className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                                      tool.toLowerCase().includes('ai')
                                        ? 'bg-purple-50 text-purple-900 border-purple-300'
                                        : tool.toLowerCase().includes('illus')
                                        ? 'bg-amber-50 text-amber-900 border-amber-300'
                                        : 'bg-sky-50 text-sky-900 border-sky-300'
                                    }`}
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="py-2 flex justify-between">
                              <span className="text-stone-500">Color Profile:</span>
                              <span className="font-mono text-stone-800">sRGB • 300 DPI</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Modal Footer Controls */}
                      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                        <span className="text-xs font-medium text-stone-400">
                          Banner {selectedBannerModal + 1} of {allSocialBanners.length}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              setSelectedBannerModal((prev) =>
                                prev !== null ? (prev === 0 ? allSocialBanners.length - 1 : prev - 1) : 0
                              )
                            }
                            className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-semibold transition-colors"
                          >
                            Prev
                          </button>
                          <button
                            onClick={() =>
                              setSelectedBannerModal((prev) =>
                                prev !== null ? (prev === allSocialBanners.length - 1 ? 0 : prev + 1) : 0
                              )
                            }
                            className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold transition-colors"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="p-10 md:p-14 bg-stone-100/70 border border-stone-200/80 rounded-3xl max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight mb-3">
            Need High-Impact Graphic Design?
          </h3>
          <p className="text-stone-600 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            From bespoke fragrance packaging and structural print dielines to high-impact promotional banners and campaigns, let's build your brand's visual identity.
          </p>
          <Link
            to="/about#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 transition-all shadow-md active:scale-95"
          >
            <span>Start a Design Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
