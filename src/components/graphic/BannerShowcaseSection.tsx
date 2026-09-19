import { motion } from 'motion/react';
import { Maximize2, Sparkles } from 'lucide-react';

export interface SocialBannerItem {
  id: number;
  campaignKey: 'luxury-villa' | 'ielts' | 'maternal' | 'advocacy';
  campaign: string;
  categoryBadge: string;
  badgeStyle: string;
  title: string;
  subtitle: string;
  image: string;
  caption: string;
  highlight: string;
  metric: string;
  tools: string[];
  specs: string;
}

interface BannerShowcaseSectionProps {
  spotlightBannerKey: 'luxury-villa' | 'ielts' | 'maternal';
  setSpotlightBannerKey: (key: 'luxury-villa' | 'ielts' | 'maternal') => void;
  bannerCampaignFilter: 'all' | 'luxury-villa' | 'ielts' | 'maternal' | 'advocacy';
  setBannerCampaignFilter: (filter: 'all' | 'luxury-villa' | 'ielts' | 'maternal' | 'advocacy') => void;
  allSocialBanners: SocialBannerItem[];
  onSelectBanner: (id: number) => void;
}

export default function BannerShowcaseSection({
  bannerCampaignFilter,
  setBannerCampaignFilter,
  allSocialBanners,
  onSelectBanner,
}: BannerShowcaseSectionProps) {
  const villaBanner = allSocialBanners.find(b => b.campaignKey === 'luxury-villa') || allSocialBanners[0];

  const filteredBanners = allSocialBanners.filter(banner => {
    if (bannerCampaignFilter === 'luxury-villa') return banner.campaignKey === 'luxury-villa';
    if (bannerCampaignFilter === 'ielts') return banner.campaignKey === 'ielts';
    if (bannerCampaignFilter === 'maternal') return banner.campaignKey === 'maternal';
    if (bannerCampaignFilter === 'advocacy') return banner.campaignKey === 'advocacy';
    return true;
  });

  return (
    <section className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono">
              01 • Banner Design
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
              Social Media & Commercial Ads
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-stone-900 tracking-tight">
            Commercial & Social Media Banners
          </h2>
          <p className="text-stone-500 text-sm md:text-base mt-1 max-w-2xl leading-relaxed">
            High-conversion promotional campaigns designed for digital ads, social feeds, and print marketing.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="inline-flex p-1 rounded-xl bg-stone-100 border border-stone-200 text-xs flex-wrap gap-1 self-start md:self-auto">
          <button
            onClick={() => setBannerCampaignFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
              bannerCampaignFilter === 'all'
                ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All ({allSocialBanners.length})
          </button>
          <button
            onClick={() => setBannerCampaignFilter('luxury-villa')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 ${
              bannerCampaignFilter === 'luxury-villa'
                ? 'bg-sky-950 text-amber-300 shadow-2xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-3 h-3 text-amber-400" />
            Luxury Villa
          </button>
          <button
            onClick={() => setBannerCampaignFilter('ielts')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
              bannerCampaignFilter === 'ielts'
                ? 'bg-white text-blue-900 shadow-2xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            IELTS Prep
          </button>
          <button
            onClick={() => setBannerCampaignFilter('maternal')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
              bannerCampaignFilter === 'maternal'
                ? 'bg-white text-rose-900 shadow-2xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Maternal Care
          </button>
          <button
            onClick={() => setBannerCampaignFilter('advocacy')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
              bannerCampaignFilter === 'advocacy'
                ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Advocacy
          </button>
        </div>
      </div>

      {/* Featured Hero Banner: Serene Bay Villas */}
      {(bannerCampaignFilter === 'all' || bannerCampaignFilter === 'luxury-villa') && (
        <div className="rounded-2xl bg-gradient-to-b from-[#031324] to-[#082038] text-stone-100 border border-sky-800/80 p-5 sm:p-8 md:p-10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Featured • Real Estate Ad
                </span>
                <span className="text-xs text-sky-300/70 font-mono">1536 × 1024 px</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Serene Bay Villas
              </h3>
              <p className="text-sky-200/80 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                Luxury real estate marketing banner designed for high-net-worth investor acquisition with architectural proportion and oceanic color harmony.
              </p>
            </div>
            <button
              onClick={() => onSelectBanner(villaBanner.id)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-xs shadow-lg transition-all self-start sm:self-auto shrink-0"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Inspect HD</span>
            </button>
          </div>

          {/* Villa Image Display */}
          <div
            className="w-full relative rounded-xl overflow-hidden shadow-2xl border border-sky-600/40 bg-stone-950 cursor-pointer group"
            onClick={() => onSelectBanner(villaBanner.id)}
          >
            <div className="relative aspect-[16/9] md:aspect-[2.1/1] w-full overflow-hidden">
              <img
                src="/ad-blue-villa.png"
                alt="Serene Bay Villas Banner"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none">
                <span className="bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs text-white border border-sky-800/60">
                  Phuket, Thailand • Private Beach Access
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-stone-950 shadow-md">
                  <Maximize2 className="w-3 h-3" /> Click to Expand
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Banners Grid - 3 Columns Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBanners
          .filter(b => bannerCampaignFilter !== 'luxury-villa' || b.campaignKey !== 'luxury-villa' || filteredBanners.length === 1)
          .map((banner) => (
            <motion.div
              key={banner.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer"
              onClick={() => onSelectBanner(banner.id)}
            >
              {/* Image Preview */}
              <div className="relative aspect-[4/5] bg-stone-900 overflow-hidden">
                <img
                  src={banner.image}
                  alt={banner.title}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full ${
                    banner.campaignKey === 'luxury-villa' ? 'object-cover object-center' : 'object-cover object-top'
                  } group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-stone-900/80 text-white backdrop-blur-xs">
                    {banner.campaignKey === 'luxury-villa' ? 'Villa' : banner.campaignKey === 'ielts' ? 'IELTS' : banner.campaignKey === 'maternal' ? 'Maternal' : 'Advocacy'}
                  </span>
                </div>
                <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-1.5 rounded-full bg-white text-stone-900 shadow-md inline-flex items-center">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-stone-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {banner.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {banner.caption}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 font-mono">
                  <span>{banner.specs.split('•')[0].trim()}</span>
                  <span className="font-sans font-semibold text-blue-600 group-hover:underline">View HD</span>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
}
