import { Eye, Box, Sparkles, CheckCircle2 } from 'lucide-react';

export interface PerfumeProjectItem {
  id: string;
  title: string;
  brand: string;
  type: string;
  tagline: string;
  image: string;
  badgeColor: string;
  fragranceNotes: {
    top: string;
    heart: string;
    base: string;
  };
  tools: string[];
  boxSpecs: {
    dieline: string;
    dimensions: string;
    paperStock: string;
    finishings: string;
  };
  highlights: string[];
}

interface PackagingShowcaseSectionProps {
  packagingActiveTab: 'both' | 'aqua' | 'pony';
  setPackagingActiveTab: (tab: 'both' | 'aqua' | 'pony') => void;
  perfumeProjects: PerfumeProjectItem[];
  onSelectPackaging: (id: 'aqua' | 'pony') => void;
}

export default function PackagingShowcaseSection({
  packagingActiveTab,
  setPackagingActiveTab,
  perfumeProjects,
  onSelectPackaging,
}: PackagingShowcaseSectionProps) {
  return (
    <section className="bg-white border border-stone-200/90 rounded-3xl p-7 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
              Visual System 02
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
              Packaging Design & Dielines
            </span>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
              LA PEARLY
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Illustrator
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-sky-50 text-sky-800 border border-sky-300">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              Photoshop
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-stone-900 tracking-tight">
            Fragrance Packaging & Structural Dielines
          </h2>
          <p className="text-stone-500 text-sm md:text-base mt-1">
            Luxury perfume packaging artwork, custom die-cut knife lines, and commercial print finishing specifications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center p-1 bg-stone-100 rounded-xl self-start md:self-auto border border-stone-200/80">
          <button
            onClick={() => setPackagingActiveTab('both')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              packagingActiveTab === 'both'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All (2)
          </button>
          <button
            onClick={() => setPackagingActiveTab('aqua')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              packagingActiveTab === 'aqua'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Aqua Arena
          </button>
          <button
            onClick={() => setPackagingActiveTab('pony')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              packagingActiveTab === 'pony'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Pretty Pony
          </button>
        </div>
      </div>

      {/* Project Showcase Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {perfumeProjects
          .filter(p => packagingActiveTab === 'both' || packagingActiveTab === p.id)
          .map(proj => (
            <div
              key={proj.id}
              className="rounded-2xl border border-stone-200/90 bg-[#FAF8F5] overflow-hidden flex flex-col justify-between hover:border-stone-300 transition-all duration-300 group"
            >
              <div>
                {/* Image / Dieline Preview Header */}
                <div className="relative aspect-[16/11] bg-white border-b border-stone-200/80 overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={proj.image}
                    alt={`${proj.title} Packaging Dieline`}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${proj.badgeColor} backdrop-blur-xs`}>
                      {proj.brand}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-stone-900/80 text-white backdrop-blur-xs">
                      {proj.type}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectPackaging(proj.id as 'aqua' | 'pony')}
                    className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-stone-900/90 hover:bg-stone-900 text-white text-xs font-medium backdrop-blur-xs flex items-center gap-1.5 transition-all shadow-md group/btn"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Dieline</span>
                  </button>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-5">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                        {proj.title}
                      </h3>
                      <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                        {proj.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Scent Notes Box */}
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200/80 space-y-1.5 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-stone-900 uppercase tracking-wider text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                      <span>Olfactory Profile</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] text-stone-600">
                      <div><strong className="text-stone-900">Top:</strong> {proj.fragranceNotes.top}</div>
                      <div><strong className="text-stone-900">Heart:</strong> {proj.fragranceNotes.heart}</div>
                      <div><strong className="text-stone-900">Base:</strong> {proj.fragranceNotes.base}</div>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                      <Box className="w-3.5 h-3.5 text-orange-600" />
                      <span>Key Features</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {proj.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="text-xs text-stone-600 flex items-start gap-2 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Specs Footer */}
              <div className="p-4 bg-stone-100/80 border-t border-stone-200 text-xs space-y-1.5">
                <div className="flex justify-between items-center text-stone-700">
                  <span className="font-medium text-stone-500">Software:</span>
                  <span className="font-semibold text-stone-900">{proj.tools.join(' • ')}</span>
                </div>
                <div className="flex justify-between items-center text-stone-700">
                  <span className="font-medium text-stone-500">Dieline Style:</span>
                  <span className="font-semibold text-stone-900">{proj.boxSpecs.dieline}</span>
                </div>
                <div className="flex justify-between items-center text-stone-700">
                  <span className="font-medium text-stone-500">Card Stock & Finishing:</span>
                  <span className="font-semibold text-stone-900 truncate max-w-[240px]" title={`${proj.boxSpecs.paperStock} • ${proj.boxSpecs.finishings}`}>
                    {proj.boxSpecs.finishings}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
