import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Type, 
  ShieldCheck, 
  ArrowUpRight,
  Sliders, 
  Check,
  CheckCircle2,
  HeartPulse,
  Smartphone,
  Gamepad2,
  Layers,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

interface ColorToken {
  name: string;
  hex: string;
  role: string;
  contrast?: string;
  textColor?: string;
}

interface ProductDesignSystem {
  id: string;
  slug: string;
  productName: string;
  productType: {
    en: string;
    fr: string;
  };
  styleBadge: string;
  icon: typeof HeartPulse;
  brandColor: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  tagline: {
    en: string;
    fr: string;
  };
  summary: {
    en: string;
    fr: string;
  };
  previewColors: string[];
  colors: ColorToken[];
  typography: {
    displayFont: string;
    bodyFont: string;
    scale: string;
    rule: {
      en: string;
      fr: string;
    };
  };
  layout: {
    grid: string;
    radius: string;
    elevation: string;
  };
  coreComponents: {
    title: { en: string; fr: string };
    desc: { en: string; fr: string };
    tag: string;
  }[];
  accessibilityBadges: string[];
}

export const productDesignSystems: ProductDesignSystem[] = [
  {
    id: 'carepill',
    slug: 'carepill-medication-tracker',
    productName: 'Carepill',
    productType: {
      en: 'Healthcare & Medication Tracker',
      fr: 'Santé & Suivi de Médicaments'
    },
    styleBadge: 'Senior-Friendly Medical UI',
    icon: HeartPulse,
    brandColor: '#0284C7',
    accentBg: 'bg-sky-50',
    accentBorder: 'border-sky-200',
    accentText: 'text-sky-700',
    tagline: {
      en: 'High-contrast, empathetic medical interface for seniors and remote caregivers.',
      fr: 'Interface médicale haute visibilité pour personnes âgées et soignants à distance.'
    },
    summary: {
      en: 'Carepill eliminates medical anxiety through clear role separation (Patient vs. Caregiver), 48px+ generous touch hitboxes, and WCAG AAA verified contrast.',
      fr: 'Carepill élimine l’anxiété médicale grâce à la séparation des rôles (Patient vs Soignant), des zones tactiles de 48px+ et un contraste WCAG AAA.'
    },
    previewColors: ['#0284C7', '#EA580C', '#16A34A', '#DC2626'],
    colors: [
      { name: 'Medical Sky', hex: '#0284C7', role: 'Primary Brand / Trust', contrast: 'AAA 7.2:1', textColor: '#FFFFFF' },
      { name: 'Vital Action', hex: '#EA580C', role: 'Dose Confirmation CTA', contrast: 'AA 5.1:1', textColor: '#FFFFFF' },
      { name: 'Adherence Green', hex: '#16A34A', role: 'Completed Meds Confirmation', contrast: 'AA 4.8:1', textColor: '#FFFFFF' },
      { name: 'Alert Crimson', hex: '#DC2626', role: 'Missed Dose Warning', contrast: 'AA 5.6:1', textColor: '#FFFFFF' },
      { name: 'Canvas Ground', hex: '#F8FAFC', role: 'Anti-Glare Neutral Canvas', contrast: 'AAA 14:1', textColor: '#0F172A' },
    ],
    typography: {
      displayFont: 'Plus Jakarta Sans (SemiBold)',
      bodyFont: 'Plus Jakarta Sans (Regular, 18px baseline)',
      scale: 'Major Third (1.25) • 14px / 18px / 22px / 28px',
      rule: {
        en: '18px body text with 1.6 line height ensures effortless reading for low-vision seniors without eye strain.',
        fr: 'Corps de texte en 18px avec interligne 1.6 assurant une lisibilité sans effort pour les seniors.'
      }
    },
    layout: {
      grid: '8pt Spacing Grid (8px, 16px, 24px, 32px)',
      radius: 'Cards: 16px • Inner controls: 10px',
      elevation: 'Soft 1px border (#E2E8F0) + light 2px elevation (no blinding drop shadows)'
    },
    coreComponents: [
      {
        title: { en: 'Patient vs. Caregiver Dual Mode', fr: 'Double Mode Patient vs Soignant' },
        desc: {
          en: 'Instant role switcher adjusting the entire UI from a simplified senior view to a detailed caregiver log.',
          fr: 'Bascule de rôle instantanée adaptant l’interface de la vue senior simplifiée au journal soignant.'
        },
        tag: 'Navigation'
      },
      {
        title: { en: '48px+ Pill Dose Action Card', fr: 'Carte Dose Tactile 48px+' },
        desc: {
          en: 'Extra-large touch area with instant visual checkmark and haptic feedback to prevent accidental double-doses.',
          fr: 'Zone tactile extra-large avec coche de validation instantanée pour éviter les doubles prises.'
        },
        tag: 'Interaction'
      },
      {
        title: { en: '2-Step Safe Confirmation Modal', fr: 'Modal de Sécurité en 2 Étapes' },
        desc: {
          en: 'Intentional friction guard protecting seniors against accidental deletion of medication schedules.',
          fr: 'Barrière de confirmation protégeant contre la suppression accidentelle d’ordonnances.'
        },
        tag: 'Safety'
      }
    ],
    accessibilityBadges: [
      'WCAG 2.1 AAA Contrast',
      '48px+ Touch Hitboxes',
      'Reduced Motion Support',
      'Senior Anti-Glare Palette'
    ]
  },
  {
    id: 'moody-child',
    slug: 'moody-child',
    productName: 'Moody Child',
    productType: {
      en: 'Mental Health Micro-Journaling',
      fr: 'Micro-Journaling Santé Mentale'
    },
    styleBadge: 'Neo-Brutalist & Y2K Tactile',
    icon: Smartphone,
    brandColor: '#121214',
    accentBg: 'bg-lime-50',
    accentBorder: 'border-lime-300',
    accentText: 'text-lime-800',
    tagline: {
      en: 'Tactile, sticker-driven mental check-ins with 2-tap simplicity and zero clinical coldness.',
      fr: 'Suivi d’humeur tactile à base de stickers avec simplicité en 2 clics sans froideur médicale.'
    },
    summary: {
      en: 'Moody Child trades sterile hospital-like forms for collectible Y2K sticker physics, cardboard layering, and 100% private offline storage.',
      fr: 'Moody Child remplace les formulaires austères par des stickers Y2K tactiles et un stockage hors ligne 100% privé.'
    },
    previewColors: ['#121214', '#CCFF00', '#00E5FF', '#FF2A85'],
    colors: [
      { name: 'Charcoal Noir', hex: '#121214', role: 'Restful Deep Ground Canvas', contrast: 'AAA 16.5:1', textColor: '#FFFFFF' },
      { name: 'Acid Lime', hex: '#CCFF00', role: 'Energized / Joy Mood Token', contrast: 'AAA 13.2:1', textColor: '#000000' },
      { name: 'Cyber Cyan', hex: '#00E5FF', role: 'Calm / Reflective Mood Token', contrast: 'AAA 11.8:1', textColor: '#000000' },
      { name: 'Electric Magenta', hex: '#FF2A85', role: 'Anxious / Turbulent Mood Token', contrast: 'AA 6.4:1', textColor: '#FFFFFF' },
      { name: 'Brutalist Stroke', hex: '#000000', role: '3px Solid Cardboard Cutout Borders', contrast: 'AAA 21:1', textColor: '#FFFFFF' },
    ],
    typography: {
      displayFont: 'Syne / Space Grotesk (Expressive Brutalist)',
      bodyFont: 'Space Mono / Inter (Clean Monospace Metadata)',
      scale: 'Perfect Fourth (1.333) • 12px / 16px / 21px / 28px',
      rule: {
        en: 'Strict pairing of bold expressive headers with crisp monospace metadata for rapid emotional logging.',
        fr: 'Association de titres expressifs avec des métadonnées monospace pour un enregistrement rapide.'
      }
    },
    layout: {
      grid: 'Tactile 4px / 8px / 16px Spacing Grid',
      radius: 'Cards: 12px with 3px solid border • Badges: Full pill 9999px',
      elevation: 'Hard Drop Shadow: box-shadow: 4px 4px 0px #000000 (crisp cutouts, zero blur)'
    },
    coreComponents: [
      {
        title: { en: '2-Tap Fast Sticker Logging', fr: 'Saisie Rapide en 2 Clics' },
        desc: {
          en: 'Hick’s Law optimization: only 5 core emotions on screen to eliminate end-of-day cognitive fatigue.',
          fr: 'Loi de Hick : 5 émotions clés à l’écran pour éliminer la fatigue décisionnelle du soir.'
        },
        tag: 'Interaction'
      },
      {
        title: { en: 'Zine Cardboard Layering', fr: 'Superposition Zine Cartonnée' },
        desc: {
          en: 'Tactile cards with 4px offset hard drop shadows simulating physical sticker zine collections.',
          fr: 'Cartes tactiles avec ombres décalées de 4px simulant des découpes de papier zine.'
        },
        tag: 'Visual UI'
      },
      {
        title: { en: '100% Private Offline Storage', fr: 'Stockage Local 100% Privé' },
        desc: {
          en: 'Sandboxed local-first architecture ensuring sensitive emotional reflections never leak to third-party ad networks.',
          fr: 'Données personnelles enregistrées localement sans aucun traceur publicitaire tiers.'
        },
        tag: 'Privacy'
      }
    ],
    accessibilityBadges: [
      'High-Contrast Cutout Borders',
      'Color + Text Dual Indicators',
      'Hick’s Law 2-Tap Simplicity',
      'Offline-First Local Storage'
    ]
  },
  {
    id: 'survive-til-five',
    slug: 'survive-til-five',
    productName: "Survive 'til Five",
    productType: {
      en: 'Web Break Game & Pixel HUD',
      fr: 'Jeu Web Micro-Pause & HUD Pixel'
    },
    styleBadge: '16-Bit Pixel Art HUD',
    icon: Gamepad2,
    brandColor: '#F59E0B',
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-200',
    accentText: 'text-amber-800',
    tagline: {
      en: 'Zero-tutorial, cognitive-light web game interface designed for 45-second office breaks.',
      fr: 'Interface de jeu sans tutoriel, conçue pour de rapides pauses de bureau de 45 secondes.'
    },
    summary: {
      en: 'Instantly readable visual language: items with kawaii smiles are good (grab), hazards with angry scowls are bad (dodge). No instructions needed.',
      fr: 'Grammaire visuelle immédiate : les objets souriants sont bons (attraper), les visages fâchés sont des obstacles (esquiver).'
    },
    previewColors: ['#1E293B', '#F59E0B', '#22C55E', '#EF4444'],
    colors: [
      { name: 'Office Morning', hex: '#1E293B', role: 'Cool Corporate Slate Background', contrast: 'AAA 14:1', textColor: '#FFFFFF' },
      { name: 'Golden Clockout', hex: '#F59E0B', role: '5 PM Golden Hour Departure Light', contrast: 'AAA 8.4:1', textColor: '#000000' },
      { name: 'Fresh Energy', hex: '#22C55E', role: 'Full Energy Gauge Bar', contrast: 'AA 4.6:1', textColor: '#FFFFFF' },
      { name: 'Burnout Danger', hex: '#EF4444', role: 'Critical Energy Warning State', contrast: 'AA 5.2:1', textColor: '#FFFFFF' },
      { name: 'Caffeine Overdrive', hex: '#EAB308', role: 'Speed Boost State Indicator', contrast: 'AAA 9.0:1', textColor: '#000000' },
    ],
    typography: {
      displayFont: 'Press Start 2P / Bitmap Pixel 8px',
      bodyFont: 'Monospace Pixel Integer Grid',
      scale: 'Fixed Multipliers • 8px (HUD) / 16px (Headers) / 24px (Clockout)',
      rule: {
        en: 'Headless automated text overflow verification ensures zero clipped text on fixed 960×540 canvas across all strings.',
        fr: 'Vérification automatisée garantissant aucun texte tronqué sur la toile fixe 960×540.'
      }
    },
    layout: {
      grid: 'Integer Pixel Grid (4px, 8px, 16px nearest-neighbor)',
      radius: 'Strict 0px or procedural 1-pixel stepped corner coordinates',
      elevation: 'Canvas Z-Index: Parallax Background → Entities → HUD Overlays → Dialog Modals'
    },
    coreComponents: [
      {
        title: { en: 'Smile vs. Scowl Visual Grammar', fr: 'Grammaire Visuelle Sourire vs Fâché' },
        desc: {
          en: 'Instant cognitive readability: happy face = collect, grumpy face = jump/dodge. Zero written tutorial needed.',
          fr: 'Compréhension immédiate : visage souriant = attraper, visage fâché = esquiver. Zéro manuel requis.'
        },
        tag: 'Visual Grammar'
      },
      {
        title: { en: '3-State Fatigue Character Sprites', fr: 'Sprites Personnage à 3 États' },
        desc: {
          en: 'Avatar visually transitions from Fresh → Tired (eye bags) → Full Zombie mode as the energy bar drains.',
          fr: 'L’avatar passe visuellement d’En forme → Cernes de fatigue → Mode Zombie selon l’énergie.'
        },
        tag: 'Game UX'
      },
      {
        title: { en: 'Procedural Web Audio Synthesizer', fr: 'Synthèse Web Audio Procédurale' },
        desc: {
          en: 'Audio generated live in the browser using Web Audio API oscillators, keeping load times under 1 second.',
          fr: 'Sons générés en direct par l’API Web Audio sans aucun fichier audio lourd à télécharger.'
        },
        tag: 'Performance'
      }
    ],
    accessibilityBadges: [
      'Dual Keyboard & Touch Controls',
      'Instant 1-Tap Pause & Audio Mute',
      'Zero Disorienting Strobe Flashes',
      'High-Contrast Pixel HUD'
    ]
  }
];

export const uxDesignSystems = productDesignSystems.map(s => ({
  ...s,
  appName: s.productName,
  badge: s.styleBadge,
  colorTokens: s.colors.map(c => ({
    ...c,
    token: `--color-${c.name.toLowerCase().replace(/\s+/g, '-')}`
  })),
  backOfHouseArchitecture: {
    componentHierarchy: {
      en: s.coreComponents.map(c => `${c.title.en}: ${c.desc.en}`),
      fr: s.coreComponents.map(c => `${c.title.fr}: ${c.desc.fr}`)
    },
    accessibilityAndSafety: {
      en: s.accessibilityBadges,
      fr: s.accessibilityBadges
    }
  },
  spacingAndRadius: {
    grid: s.layout.grid,
    radiusFormula: s.layout.radius,
    elevation: s.layout.elevation
  }
}));

interface Props {
  activeSystemId?: string;
  onSelectSystem?: (id: string) => void;
}

export default function UxProductDesignSystems({ activeSystemId, onSelectSystem }: Props) {
  const { locale } = useLanguage();
  const [selectedId, setSelectedId] = useState<string>(activeSystemId || 'carepill');

  const currentSystem = productDesignSystems.find(s => s.id === selectedId) || productDesignSystems[0];
  const IconComponent = currentSystem.icon;

  const handleSelect = (id: string) => {
    setSelectedId(id);
    if (onSelectSystem) {
      onSelectSystem(id);
    }
  };

  return (
    <div 
      id="ux-design-systems-section" 
      className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm my-16 space-y-10 scroll-mt-24"
    >
      {/* 1. Section Header */}
      <div className="border-b border-stone-100 pb-6">
        <div className="flex items-center gap-2 mb-2.5">
          <Sliders className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            UI & Design Systems Governance
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">
          Design Systems by Product
        </h2>
        <p className="text-stone-600 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
          {locale === 'en'
            ? 'Each product has its own custom design system tailored to its users — from accessible medical interfaces to playful micro-journals and pixel HUDs. Select a product below to inspect its design tokens and components.'
            : 'Chaque produit possède son propre système de design adapté à ses utilisateurs — des interfaces médicales accessibles aux micro-journaux ludiques. Sélectionnez un produit ci-dessous pour voir ses tokens et composants.'}
        </p>
      </div>

      {/* 2. Top Product Switcher (3 Clear, Spacious Product Cards) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
            {locale === 'en' ? 'Select Product to Inspect:' : 'Sélectionnez un Produit :'}
          </span>
          <span className="text-xs text-stone-400 font-mono">
            3 Distinct Product Systems
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {productDesignSystems.map((system) => {
            const SystemIcon = system.icon;
            const isSelected = selectedId === system.id;

            return (
              <button
                key={system.id}
                onClick={() => handleSelect(system.id)}
                className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between relative group cursor-pointer ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/40 shadow-sm'
                    : 'border-stone-200/90 bg-stone-50/60 hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                {/* Active Indicator Pin */}
                {isSelected && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-2xs">
                      <Check className="w-3 h-3" />
                      <span>Active</span>
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected 
                          ? 'bg-blue-600 text-white shadow-sm' 
                          : 'bg-white border border-stone-200 text-stone-700 group-hover:border-stone-400'
                      }`}
                    >
                      <SystemIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-stone-900 leading-tight">
                        {system.productName}
                      </h3>
                      <span className="text-xs text-stone-500 font-medium block">
                        {system.productType[locale]}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    {system.tagline[locale]}
                  </p>
                </div>

                {/* Color preview dots */}
                <div className="pt-3 border-t border-stone-200/70 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-stone-500">
                    {system.styleBadge}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {system.previewColors.map((color, cIdx) => (
                      <span
                        key={cIdx}
                        className="w-3 h-3 rounded-full border border-stone-300 shadow-2xs"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Showcase for Selected Design System */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSystem.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.25 }}
          className="space-y-10"
        >
          {/* Header Banner: Product Identity & Purpose */}
          <div className={`p-6 sm:p-8 rounded-2xl border ${currentSystem.accentBg} ${currentSystem.accentBorder} flex flex-col lg:flex-row lg:items-center justify-between gap-6`}>
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-stone-200 shadow-2xs ${currentSystem.accentText}`}>
                  {currentSystem.styleBadge}
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  {currentSystem.productType[locale]}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">
                {currentSystem.productName} Design System
              </h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {currentSystem.summary[locale]}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <Link
                to={`/projects/${currentSystem.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all"
              >
                <span>View {currentSystem.productName} Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Color Tokens Section (Real Visual Swatches) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-blue-600" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900">
                  Color Tokens & Semantic Usage
                </h4>
              </div>
              <span className="text-xs text-stone-400 font-mono">
                {currentSystem.colors.length} Semantic Tokens
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {currentSystem.colors.map((color, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-stone-200/90 rounded-xl overflow-hidden shadow-2xs flex flex-col justify-between"
                >
                  {/* Visual Swatch */}
                  <div
                    className="h-16 w-full flex items-end justify-between p-2.5"
                    style={{ backgroundColor: color.hex }}
                  >
                    {color.contrast && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-black/60 text-white backdrop-blur-xs">
                        {color.contrast}
                      </span>
                    )}
                  </div>

                  {/* Token Details */}
                  <div className="p-3 bg-white space-y-1">
                    <span className="font-semibold text-xs text-stone-900 block truncate">
                      {color.name}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-stone-700 block">
                      {color.hex}
                    </span>
                    <span className="text-[11px] text-stone-500 block leading-tight pt-1 border-t border-stone-100">
                      {color.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography & Layout Rules (Clean 2-Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Typography Card */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 pb-3 border-b border-stone-100">
                <Type className="w-4 h-4 text-purple-600" />
                <span>Typography & Hierarchy</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                  <span className="text-stone-500 text-[11px] block uppercase font-mono">Display Typeface</span>
                  <span className="font-semibold text-stone-900 text-sm">{currentSystem.typography.displayFont}</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                  <span className="text-stone-500 text-[11px] block uppercase font-mono">Body Typeface</span>
                  <span className="font-semibold text-stone-900 text-sm">{currentSystem.typography.bodyFont}</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                  <span className="text-stone-500 text-[11px] block uppercase font-mono">Type Scale</span>
                  <span className="font-mono text-stone-800 font-medium">{currentSystem.typography.scale}</span>
                </div>
              </div>

              <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100 text-xs text-purple-950 leading-relaxed">
                <strong className="font-semibold">Legibility Rule:</strong> {currentSystem.typography.rule[locale]}
              </div>
            </div>

            {/* Layout Geometry Card */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 pb-3 border-b border-stone-100">
                <Layers className="w-4 h-4 text-amber-600" />
                <span>Layout, Spacing & Elevation</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                  <span className="text-stone-500 text-[11px] block uppercase font-mono">Grid System</span>
                  <span className="font-semibold text-stone-900 text-sm">{currentSystem.layout.grid}</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                  <span className="text-stone-500 text-[11px] block uppercase font-mono">Corner Radius</span>
                  <span className="font-semibold text-stone-900 text-sm">{currentSystem.layout.radius}</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                  <span className="text-stone-500 text-[11px] block uppercase font-mono">Depth & Elevation</span>
                  <span className="font-semibold text-stone-900 text-sm">{currentSystem.layout.elevation}</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 text-xs text-amber-950 leading-relaxed">
                <strong className="font-semibold">Geometry Rule:</strong> Inner element corner radius follows mathematical proportion: <code className="font-mono text-[11px] bg-white px-1.5 py-0.5 rounded border border-amber-200">R_inner = R_outer - Padding</code>.
              </div>
            </div>
          </div>

          {/* Key UI Components (3 Clear Cards) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900">
                  Core UI Components & Interaction Rules
                </h4>
              </div>
              <span className="text-xs text-stone-400 font-mono">
                Engineered for {currentSystem.productName}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {currentSystem.coreComponents.map((comp, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center">
                        0{cIdx + 1}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-stone-100 text-stone-600">
                        {comp.tag}
                      </span>
                    </div>

                    <h5 className="font-semibold text-sm text-stone-900 mb-2">
                      {comp.title[locale]}
                    </h5>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {comp.desc[locale]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accessibility Standards Verified */}
          <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-950 block">
                  Accessibility & Compliance (A11y)
                </span>
                <span className="text-xs text-emerald-800">
                  Verified standards applied across {currentSystem.productName}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {currentSystem.accessibilityBadges.map((badge, bIdx) => (
                <span
                  key={bIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-900 text-xs font-medium shadow-2xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
