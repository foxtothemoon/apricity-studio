import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Sparkles, Sun, Check, Eye, X, Layers, Compass, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { graphicDesignItems } from '../data';
import { GraphicDesignItem } from '../types';

export default function GraphicDesignSection() {
  const { locale, t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<GraphicDesignItem | null>(null);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="graphic-design" className="scroll-mt-24 pt-20 pb-28 border-b border-stone-200">
      {/* Category Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold tracking-wider uppercase">
            <Palette className="w-3.5 h-3.5 text-amber-600" />
            03 / GRAPHIC DESIGN & VISUAL SYSTEMS
          </span>
          <span className="h-px bg-stone-300 flex-1 max-w-[80px]"></span>
          <span className="text-xs font-mono text-stone-400">{graphicDesignItems.length} Curated Works</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 italic">
              {t('category.graphic.title')}
            </h3>
            <p className="text-stone-600 text-lg max-w-2xl font-sans leading-relaxed">
              {t('category.graphic.desc')}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-stone-500 uppercase tracking-wider">
            <span className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-md font-semibold">Luxury Villa Ad (AI)</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md">Brand Systems</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md">Perfume Packaging</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md">IELTS Prep (AI)</span>
            <span className="px-3 py-1 bg-stone-100 rounded-md">Postpartum Care</span>
          </div>
        </div>
      </div>

      {/* Grid of Graphic Design Work */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {graphicDesignItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`flex flex-col bg-[#FFFCF9] border rounded-sm transition-all group ${
              item.id === 'luxury-villa-ad-banner'
                ? 'md:col-span-2 border-2 border-stone-900 p-6 md:p-10 shadow-lg hover:shadow-[6px_6px_0px_#1c1917]'
                : 'border-stone-200 hover:border-stone-900 p-6 md:p-8 hover:shadow-[4px_4px_0px_#1c1917]'
            }`}
          >
            {/* Visual Canvas Area based on previewType */}
            <div className={`relative w-full ${
              item.id === 'luxury-villa-ad-banner'
                ? 'aspect-[16/9] md:aspect-[21/10] max-h-[540px] p-0'
                : 'aspect-[16/10] p-6'
            } bg-stone-100 border border-stone-900/20 rounded overflow-hidden mb-6 flex items-center justify-center select-none`}>
              
              {/* Preview 1: Brand Identity & Palette */}
              {item.previewType === 'palette_and_spec' && (
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-stone-300 pb-3">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      >
                        <Sun className="w-8 h-8 text-amber-500" />
                      </motion.div>
                      <div>
                        <span className="font-serif text-2xl font-semibold italic text-stone-900 tracking-tight">Apricity.</span>
                        <span className="block text-[10px] font-mono tracking-widest text-stone-500 uppercase">Visual Identity System</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400">FIG. 01</span>
                  </div>

                  <div className="grid grid-cols-5 gap-2 my-auto pt-2">
                    {item.palette?.map((c) => (
                      <div key={c.hex} className="flex flex-col items-center">
                        <div 
                          className="w-full h-12 rounded border border-stone-900/10 shadow-inner flex items-center justify-center group/swatch cursor-pointer transition-transform hover:scale-105"
                          style={{ backgroundColor: c.hex }}
                          onClick={() => handleCopyHex(c.hex)}
                          title={`Click to copy ${c.hex}`}
                        >
                          <span className="opacity-0 group-hover/swatch:opacity-100 text-[10px] font-mono font-bold px-1 py-0.5 rounded bg-black/60 text-white">
                            {c.hex}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono text-stone-600 mt-1 truncate max-w-full">{c.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 pt-2 border-t border-stone-200">
                    <span>Playfair Display + Inter</span>
                    <span>Ratio 1.250</span>
                  </div>
                </div>
              )}

              {/* Preview 2: Y2K Sticker Sheet */}
              {item.previewType === 'sticker_sheet' && (
                <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 rounded">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:12px_12px]"></div>

                  {/* Badges scattered like stickers */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: -3 }}
                      className="absolute -top-1 left-2 bg-purple-600 text-white font-mono text-xs px-3 py-1.5 rounded-full border-2 border-black shadow-[3px_3px_0px_#000] cursor-pointer"
                    >
                      ★ 2-TAP LOG ★
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 4 }}
                      className="bg-pink-500 text-white font-serif italic text-base px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_#000] cursor-pointer"
                    >
                      Moody Child ✦
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: -6 }}
                      className="absolute bottom-2 left-4 bg-yellow-300 text-stone-900 font-mono text-[11px] px-3 py-1 rounded border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
                    >
                      HOLOGRAPHIC FOIL
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="absolute top-3 right-3 bg-emerald-400 text-stone-900 font-mono text-[11px] px-3 py-1 rounded-full border-2 border-black shadow-[3px_3px_0px_#000] cursor-pointer"
                    >
                      OFFLINE-FIRST
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: -2 }}
                      className="absolute bottom-2 right-4 bg-blue-500 text-white font-sans text-xs font-bold px-3.5 py-1.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_#000] cursor-pointer"
                    >
                      ZERO-SERVER
                    </motion.div>
                  </div>
                </div>
              )}

              {/* Preview 3: Fragrance Packaging & Dielines */}
              {item.previewType === 'packaging_dieline' && (
                <div className="w-full h-full flex flex-col justify-between bg-stone-900 text-stone-100 p-4 rounded font-mono">
                  <div className="flex items-center justify-between border-b border-stone-700 pb-2 text-[10px] text-amber-400">
                    <span className="font-semibold tracking-wide">LA PEARLY • FRAGRANCE PACKAGING</span>
                    <span className="text-stone-400">DIELINE SPEC</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 my-auto py-2">
                    <div className="p-2.5 border border-sky-500/40 rounded bg-sky-950/30">
                      <div className="flex items-center justify-between text-[10px] text-sky-300 font-bold mb-1">
                        <span>Aqua Arena</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-200">100ml EDP</span>
                      </div>
                      <div className="text-[10px] text-stone-300 font-sans leading-tight">
                        Silver foil ocean crest & spot UV varnish over deep cyan.
                      </div>
                    </div>

                    <div className="p-2.5 border border-rose-500/40 rounded bg-rose-950/30">
                      <div className="flex items-center justify-between text-[10px] text-rose-300 font-bold mb-1">
                        <span>Pretty Pony</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-200">100ml EDP</span>
                      </div>
                      <div className="text-[10px] text-stone-300 font-sans leading-tight">
                        Rose gold hot stamping with custom die-cut bottle window.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-stone-400 pt-2 border-t border-stone-700">
                    <span>380 GSM SBS Ivory</span>
                    <span>Cut & Crease Dieline</span>
                    <span>300 DPI Print</span>
                  </div>
                </div>
              )}

              {/* Preview 4: Swiss Editorial Layouts */}
              {item.previewType === 'editorial_cards' && (
                <div className="w-full h-full flex flex-col justify-between bg-stone-50 border border-stone-300 p-5 rounded font-sans">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-mono tracking-widest text-amber-600 block uppercase">INTERNATIONAL STYLE</span>
                      <h5 className="text-xl font-serif text-stone-900 italic font-semibold">Grid, Type & Rhythm</h5>
                    </div>
                    <span className="text-2xl font-serif text-stone-400 font-light">12</span>
                  </div>

                  <div className="grid grid-cols-12 gap-1 py-3 my-auto">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="h-10 bg-stone-200 rounded-sm flex items-center justify-center text-[9px] font-mono text-stone-500">
                        {i + 1}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 border-t border-stone-200 pt-2">
                    <span>WCAG AAA 7:1</span>
                    <span>Vector & WebP</span>
                  </div>
                </div>
              )}

              {/* Preview: Promotional Banners (Luxury Villa, IELTS Prep & Postpartum Care) */}
              {item.previewType === 'promotional_banner' && (
                <div className="w-full h-full relative flex items-center justify-center bg-stone-900 rounded overflow-hidden">
                  <img
                    src={item.image || "/withlove.png"}
                    alt={item.title[locale]}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full ${
                      item.id === 'luxury-villa-ad-banner'
                        ? 'object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out'
                        : 'object-cover object-top'
                    } filter brightness-[0.98]`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-stone-950/25" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5 ${
                      item.id === 'luxury-villa-ad-banner'
                        ? 'bg-amber-500 text-stone-950 shadow-amber-500/20'
                        : item.id === 'ielts-tutoring-banner' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-pink-500 text-white'
                    }`}>
                      {item.id === 'luxury-villa-ad-banner' && <Sparkles className="w-3 h-3 text-stone-950" />}
                      {item.id === 'luxury-villa-ad-banner'
                        ? 'FEATURED HERO BANNER • QUIET LUXURY'
                        : item.id === 'ielts-tutoring-banner' 
                          ? 'IELTS PREP • AI-ASSISTED' 
                          : 'WITH LOVE • 4:5 FEED'}
                    </span>
                    {item.id === 'luxury-villa-ad-banner' && (
                      <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-sky-950/90 text-sky-200 border border-sky-700/60 backdrop-blur-xs">
                        AI BRAND ARCHITECTURE
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-xs text-white/95 font-mono">
                    <span className="truncate font-medium">
                      {item.id === 'luxury-villa-ad-banner'
                        ? 'Serene Bay Villas • Online Marketing Campaign'
                        : item.id === 'ielts-tutoring-banner' 
                          ? 'IELTS Test Prep Tutoring' 
                          : 'Postpartum Recovery Care'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/70 text-[10px] font-bold text-amber-300 shrink-0">
                      {item.id === 'luxury-villa-ad-banner'
                        ? '1536×1024 HD • 3:2'
                        : item.id === 'ielts-tutoring-banner' 
                          ? '1147×1371' 
                          : '1080×1350'}
                    </span>
                  </div>
                </div>
              )}

              {/* Hover overlay to open details */}
              <div 
                onClick={() => setSelectedItem(item)}
                className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-stone-900 text-xs font-medium shadow-lg">
                  <Eye className="w-4 h-4 text-amber-600" />
                  Inspect System Details
                </span>
              </div>
            </div>

            {/* Content info */}
            <div className="flex flex-col flex-grow">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-700">
                  {item.category[locale]}
                </span>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="text-stone-400 hover:text-stone-900 transition-colors p-1"
                  aria-label="Inspect details"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <h4 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">
                {item.title[locale]}
              </h4>

              <p className="text-stone-600 font-sans text-sm leading-relaxed mb-6 flex-grow">
                {item.description[locale]}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-100 mt-auto">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 border border-stone-200 rounded-full text-[11px] font-sans tracking-wider text-stone-500 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Modal to Inspect Graphic Design System */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`bg-[#FFFCF9] border border-stone-900 w-full ${selectedItem.image ? 'max-w-4xl' : 'max-w-2xl'} max-h-[90vh] overflow-y-auto rounded-sm p-6 sm:p-8 shadow-2xl relative`}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-stone-300 hover:border-stone-900 text-stone-500 hover:text-stone-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  {selectedItem.category[locale]}
                </span>
              </div>

              <h3 className="text-3xl font-serif text-stone-900 mb-4 italic">
                {selectedItem.title[locale]}
              </h3>

              <p className="text-stone-700 font-sans text-base leading-relaxed mb-8">
                {selectedItem.description[locale]}
              </p>

              {/* Full Image Banner Preview if present */}
              {selectedItem.image && (
                <div className="mb-8 rounded-xl overflow-hidden border border-stone-200 bg-stone-950 flex items-center justify-center p-2 sm:p-4">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title[locale]}
                    referrerPolicy="no-referrer"
                    className="max-h-[560px] w-full object-contain rounded-lg shadow-xl"
                  />
                </div>
              )}

              {/* Color Palette if present */}
              {selectedItem.palette && selectedItem.palette.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-3 flex items-center gap-2">
                    <Palette className="w-3.5 h-3.5 text-amber-500" />
                    Color Palette (Click to copy hex)
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {selectedItem.palette.map((c) => (
                      <div
                        key={c.hex}
                        onClick={() => handleCopyHex(c.hex)}
                        className="p-2 border border-stone-200 rounded bg-white cursor-pointer hover:border-stone-900 transition-all group"
                      >
                        <div
                          className="w-full h-10 rounded mb-2 border border-stone-200 flex items-center justify-center text-xs font-mono font-bold"
                          style={{ backgroundColor: c.hex }}
                        >
                          {copiedHex === c.hex && (
                            <span className="bg-black text-white px-1.5 py-0.5 rounded text-[10px] flex items-center gap-1">
                              <Check className="w-3 h-3" /> Copied
                            </span>
                          )}
                        </div>
                        <span className="block text-xs font-semibold text-stone-800 truncate">{c.name}</span>
                        <span className="block text-[11px] font-mono text-stone-500">{c.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              {selectedItem.specs && selectedItem.specs.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-3 flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-amber-500" />
                    Design Specifications
                  </h4>
                  <div className="border border-stone-200 rounded divide-y divide-stone-200 bg-white">
                    {selectedItem.specs.map((spec, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 text-sm">
                        <span className="font-mono text-stone-500 text-xs">{spec.label[locale]}</span>
                        <span className="font-medium text-stone-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {selectedItem.highlights && selectedItem.highlights[locale].length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Key Craft Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedItem.highlights[locale].map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-stone-700 leading-relaxed font-sans">
                        <span className="text-amber-500 mt-0.5">✦</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2.5 rounded-full bg-stone-900 text-[#FFFCF9] text-xs font-medium uppercase tracking-widest hover:bg-stone-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
