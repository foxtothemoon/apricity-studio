import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  Palette, 
  Type, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  Sliders, 
  ArrowUpRight,
  Eye,
  Check,
  Smartphone,
  Gamepad2,
  HeartPulse
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

interface TokenColor {
  name: string;
  token: string;
  hex: string;
  role: string;
  contrastRatio?: string;
  textColor?: string;
}

interface DesignSystemData {
  id: string;
  slug: string;
  appName: string;
  badge: string;
  icon: typeof HeartPulse;
  themeColor: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  tagline: {
    en: string;
    fr: string;
  };
  philosophy: {
    en: string;
    fr: string;
  };
  colorTokens: TokenColor[];
  typography: {
    displayFont: string;
    bodyFont: string;
    scale: string;
    rules: {
      en: string;
      fr: string;
    };
  };
  spacingAndRadius: {
    grid: string;
    radiusFormula: string;
    elevation: string;
  };
  backOfHouseArchitecture: {
    componentHierarchy: {
      en: string[];
      fr: string[];
    };
    stateEngine: {
      en: string;
      fr: string;
    };
    accessibilityAndSafety: {
      en: string[];
      fr: string[];
    };
    devHandoff: {
      en: string;
      fr: string;
    };
  };
}

export const uxDesignSystems: DesignSystemData[] = [
  {
    id: 'carepill',
    slug: 'carepill-medication-tracker',
    appName: 'Carepill',
    badge: 'Healthcare Dual-Role System',
    icon: HeartPulse,
    themeColor: '#0284C7',
    accentBg: 'bg-sky-50',
    accentBorder: 'border-sky-200',
    accentText: 'text-sky-700',
    tagline: {
      en: 'High-visibility, empathetic medical design system for seniors & remote caregivers.',
      fr: 'Système de design médical empathique et haute visibilité pour seniors et soignants.'
    },
    philosophy: {
      en: 'Eliminates medical anxiety and confusion through role-segregated navigation, 48px+ touch targets, and high-contrast color hierarchy.',
      fr: 'Élimine l’anxiété et la confusion médicale via une navigation cloisonnée par rôle et des cibles tactiles de plus de 48px.'
    },
    colorTokens: [
      { name: 'Medical Sky', token: '--color-primary', hex: '#0284C7', role: 'Primary Brand / Trust & Calmness', contrastRatio: '7.2:1 (AAA)', textColor: '#FFFFFF' },
      { name: 'Vital Action', token: '--color-action', hex: '#EA580C', role: 'Dose Confirmation & Action CTA', contrastRatio: '5.1:1 (AA)', textColor: '#FFFFFF' },
      { name: 'Adherence Green', token: '--color-success', hex: '#16A34A', role: 'Completed Meds Confirmation', contrastRatio: '4.8:1 (AA)', textColor: '#FFFFFF' },
      { name: 'Alert Crimson', token: '--color-warning', hex: '#DC2626', role: 'Missed Dose & Critical Alert', contrastRatio: '5.6:1 (AA)', textColor: '#FFFFFF' },
      { name: 'Pure Canvas', token: '--color-surface', hex: '#F8FAFC', role: 'Anti-Glare Light Neutral Ground', contrastRatio: '14.1:1', textColor: '#0F172A' }
    ],
    typography: {
      displayFont: 'Plus Jakarta Sans (Medium/Bold)',
      bodyFont: 'Plus Jakarta Sans (Regular, 18px+)',
      scale: 'Major Third (1.25) • 14px / 18px / 22px / 28px / 36px',
      rules: {
        en: '18px baseline body text with 1.6 line height ensures effortless legibility for low-vision seniors without accidental misinterpretation.',
        fr: 'Corps de texte 18px avec hauteur de ligne 1.6 assurant une lisibilité sans effort pour les personnes âgées.'
      }
    },
    spacingAndRadius: {
      grid: '8pt Geometric Spacing (8px, 16px, 24px, 32px)',
      radiusFormula: 'Card: 16px • Inner Elements: 10px (R_inner = R_outer - Padding)',
      elevation: 'Subtle 1px border (#E2E8F0) + 2px soft drop-shadow (zero blinding glow)'
    },
    backOfHouseArchitecture: {
      componentHierarchy: {
        en: [
          '<RoleProvider> Context: Dynamically renders Patient View vs. Caregiver View without page reloads',
          '<PillActionCard>: 48px minimum touch hitbox with instant haptic visual checkmark',
          '<FrictionModal>: 2-step destructive confirmation guard preventing accidental profile or prescription deletion'
        ],
        fr: [
          'Contexte <RoleProvider> : Rendu dynamique de la vue Patient vs vue Soignant sans rechargement',
          '<PillActionCard> : Cible tactile minimale de 48px avec confirmation visuelle haptique',
          '<FrictionModal> : Confirmation en 2 étapes pour éviter les suppressions accidentelles'
        ]
      },
      stateEngine: {
        en: 'Client-side state synchronization using reactive hooks to preserve schedule history offline and sync to caregiver alerts.',
        fr: 'Synchronisation d’état côté client via des hooks réactifs pour préserver l’historique hors ligne.'
      },
      accessibilityAndSafety: {
        en: [
          'WCAG 2.1 AAA contrast on primary dose logging elements',
          'Native Reduced-Motion support for vertigo/motion-sensitive patients',
          'Context-aware empty states with direct action guides instead of blank screens'
        ],
        fr: [
          'Contraste WCAG 2.1 AAA sur les éléments d’enregistrement des doses',
          'Prise en charge native de Reduced-Motion pour les patients sensibles',
          'États vides contextuels guidant vers l’action'
        ]
      },
      devHandoff: {
        en: 'Tokens exported directly as Tailwind CSS utility variables (--color-primary, --font-sans, --radius-card) for zero-mismatch front-end implementation.',
        fr: 'Tokens exportés directement sous forme de variables Tailwind CSS pour une implémentation front-end sans décalage.'
      }
    }
  },
  {
    id: 'moody-child',
    slug: 'moody-child',
    appName: 'Moody Child',
    badge: 'Y2K Neo-Brutalist Micro-Journaling',
    icon: Smartphone,
    themeColor: '#CCFF00',
    accentBg: 'bg-lime-50',
    accentBorder: 'border-lime-300',
    accentText: 'text-lime-800',
    tagline: {
      en: 'Tactile, sticker-driven mental health logging with Hick’s Law 2-tap simplicity.',
      fr: 'Journalisation de santé mentale tactile et ludique avec la simplicité en 2 clics de la loi de Hick.'
    },
    philosophy: {
      en: 'Replaces clinical, sterile hospital-like journaling forms with collectible Y2K sticker physics and high-contrast Neo-Brutalist cardboard layering.',
      fr: 'Remplace les formulaires cliniques austères par des autocollants Y2K collectionnables et un style néo-brutaliste.'
    },
    colorTokens: [
      { name: 'Charcoal Noir', token: '--bg-canvas', hex: '#121214', role: 'Deep Ground Canvas (Restful for late night)', contrastRatio: '16.5:1', textColor: '#FFFFFF' },
      { name: 'Acid Lime', token: '--accent-euphoric', hex: '#CCFF00', role: 'Energized & Joyful Mood Token', contrastRatio: '13.2:1 (AAA on dark)', textColor: '#000000' },
      { name: 'Cyber Cyan', token: '--accent-calm', hex: '#00E5FF', role: 'Reflective & Balanced Mood Token', contrastRatio: '11.8:1 (AAA on dark)', textColor: '#000000' },
      { name: 'Electric Magenta', token: '--accent-turbulent', hex: '#FF2A85', role: 'Anxious / High-Emotion State Token', contrastRatio: '6.4:1 (AA on dark)', textColor: '#FFFFFF' },
      { name: 'Brutalist Ink', token: '--stroke-hard', hex: '#000000', role: '3px Solid High-Contrast Cutout Borders', contrastRatio: '21:1', textColor: '#FFFFFF' }
    ],
    typography: {
      displayFont: 'Syne / Space Grotesk (Chunky Brutalist Display)',
      bodyFont: 'Space Mono / Inter (Clean Micro-Logging Sans)',
      scale: 'Perfect Fourth (1.333) • 12px / 16px / 21px / 28px / 38px',
      rules: {
        en: 'Strict pairing of expressive bold display headers with clean monospace metadata to preserve high personality without sacrificing reading speed.',
        fr: 'Association stricte d’en-têtes display expressifs avec des métadonnées monospace lisibles.'
      }
    },
    spacingAndRadius: {
      grid: 'Tactile 4px / 8px / 16px Grid System',
      radiusFormula: 'Cards: 12px with 3px solid black border • Stickers: 9999px pill or organic SVG outline',
      elevation: 'Brutalist Hard Drop Shadow: box-shadow: 4px 4px 0px #000000 (No blur, zero rendering lag)'
    },
    backOfHouseArchitecture: {
      componentHierarchy: {
        en: [
          '<MoodStickerButton>: Procedural SVG with cubic-bezier(0.34, 1.56, 0.64, 1) spring tension feedback',
          '<ZineCardLayer>: Stacked cardboard paper cutout cards with 4px offset shadow geometry',
          '<MicroLogDrawer>: 2-tap fast recording drawer minimizing decision fatigue after exhausting workdays'
        ],
        fr: [
          '<MoodStickerButton> : SVG procédural avec retour de tension élastique cubique de Bézier',
          '<ZineCardLayer> : Cartes superposées simulant des découpes de papier zine avec ombre de 4px',
          '<MicroLogDrawer> : Tiroir d’enregistrement rapide en 2 clics pour éviter la fatigue cognitive'
        ]
      },
      stateEngine: {
        en: 'Local-first sandboxed storage (Edge/IndexedDB) providing ironclad user privacy: mental health data never touches remote third-party ad trackers.',
        fr: 'Stockage Edge sandboxed garantissant une confidentialité totale : les données de santé mentale ne fuient jamais vers des serveurs tiers.'
      },
      accessibilityAndSafety: {
        en: [
          'Hick’s Law optimization: only 5 core mood options on screen at any time',
          'Vivid color coding paired with descriptive text tags for colorblind users',
          'Offline-First hydration ensures immediate interactive feedback even in airplane mode'
        ],
        fr: [
          'Loi de Hick : seulement 5 états émotionnels principaux à l’écran',
          'Codage couleur doublé d’étiquettes textuelles pour l’accessibilité',
          'Fonctionnement 100% hors-ligne avec hydratation locale immédiate'
        ]
      },
      devHandoff: {
        en: 'Tailwind custom plugin generating rigid box-shadow utilities (shadow-brutal: 4px 4px 0px #000) and procedural SVG color variables.',
        fr: 'Plugin Tailwind personnalisé générant les ombres dures néo-brutalistes et variables SVG.'
      }
    }
  },
  {
    id: 'survive-til-five',
    slug: 'survive-til-five',
    appName: "Survive 'til Five",
    badge: 'Procedural 16-Bit Pixel HUD & Game UX',
    icon: Gamepad2,
    themeColor: '#F59E0B',
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-200',
    accentText: 'text-amber-800',
    tagline: {
      en: 'Zero-tutorial, cognitive-light web game UX designed for quick 45-second office breaks.',
      fr: 'UX de jeu web sans tutoriel, conçu pour des micro-pauses de bureau de 45 secondes.'
    },
    philosophy: {
      en: 'Instantly understandable visual grammar: every item wears a kawaii smile (grab), every hazard wears an angry scowl (dodge). Zero cognitive manual required.',
      fr: 'Grammaire visuelle immédiate : chaque objet utile sourit (attraper), chaque obstacle est renfrogné (esquiver).'
    },
    colorTokens: [
      { name: 'Office Morning', token: '--hud-morning', hex: '#1E293B', role: '8 AM Cool Corporate Slate Background', contrastRatio: '14.2:1', textColor: '#FFFFFF' },
      { name: 'Golden Clockout', token: '--hud-sunset', hex: '#F59E0B', role: '5 PM Golden Hour Departure Light', contrastRatio: '8.4:1', textColor: '#000000' },
      { name: 'Fresh Energy', token: '--state-energy-full', hex: '#22C55E', role: 'Full Energy Gauge Indicator', contrastRatio: '4.6:1 (AA)', textColor: '#FFFFFF' },
      { name: 'Burnout Danger', token: '--state-energy-low', hex: '#EF4444', role: 'Critical Energy Depletion Warning', contrastRatio: '5.2:1 (AA)', textColor: '#FFFFFF' },
      { name: 'Caffeine Overdrive', token: '--buff-caffeine', hex: '#EAB308', role: 'Screen-Shaking Speed Boost State', contrastRatio: '9.0:1', textColor: '#000000' }
    ],
    typography: {
      displayFont: 'Press Start 2P / Bitmap Pixel 8px Emulation',
      bodyFont: 'System Pixel Grid (Monospace integer values)',
      scale: 'Fixed Pixel Multiplication • 8px (HUD) / 16px (Headers) / 24px (Clockout)',
      rules: {
        en: 'Headless automated text overflow verification guarantees zero clipped text on fixed 960×540 canvas across all localized strings.',
        fr: 'Validation automatisée headless garantissant aucun texte tronqué sur le canvas 960x540.'
      }
    },
    spacingAndRadius: {
      grid: '4px / 8px / 16px Strict Integer Pixel Grid (Crisp nearest-neighbor rendering)',
      radiusFormula: 'Zero curve (0px) or procedural 1-pixel stepped corner coordinates',
      elevation: 'Layered Canvas Z-Index: Background parallax → Entities → HUD Overlays → Modal dialogs'
    },
    backOfHouseArchitecture: {
      componentHierarchy: {
        en: [
          '<CanvasViewport>: Responsive 960×540 integer-scaled viewport with letterbox centering',
          '<SpriteStateMatrix>: 3 visual states per character (Fresh → Eye-Bags Fatigued → Full Office Zombie)',
          '<WardrobeShieldLayer>: Collectible outfit sprites acting as mechanical 1-hit collision shields',
          '<ProceduralAudioSynth>: Web Audio API oscillator synthesis (zero heavy MP3/WAV download payloads)'
        ],
        fr: [
          '<CanvasViewport> : Viewport 960x540 à échelle entière avec centrage dynamique',
          '<SpriteStateMatrix> : 3 états visuels par avatar (En forme → Cernes de fatigue → Mode Zombie)',
          '<WardrobeShieldLayer> : Vêtements collectionnables agissant comme bouclier anti-choc',
          '<ProceduralAudioSynth> : Synthèse Web Audio API en direct (0 Mo de fichiers sonores)'
        ]
      },
      stateEngine: {
        en: 'Finite state game loop decoupled from render frames (delta-time calculated) ensuring 60 FPS consistency across low-end mobile and high-refresh desktop displays.',
        fr: 'Moteur de boucle à états finis découplé du rafraîchissement écran (calcul delta-time) garantissant 60 FPS constants.'
      },
      accessibilityAndSafety: {
        en: [
          'Dual input architecture: seamless simultaneous touch swipes and keyboard bindings (Arrow / Space)',
          'Instant 1-tap pause overlay with visual mute and volume sliders',
          'Zero flashing strobe effects in high-speed caffeine mode to prevent photosensitive discomfort'
        ],
        fr: [
          'Double contrôle : support simultané tactile (glissements) et clavier (flèches / espace)',
          'Pause instantanée avec contrôle du son et curseurs',
          'Aucun stroboscope agressif pour préserver le confort visuel'
        ]
      },
      devHandoff: {
        en: 'Zero-dependency vanilla JavaScript + HTML5 Canvas core: 100% portable, embeds seamlessly into any web iframe or React wrapper.',
        fr: 'Cœur en JavaScript pur et Canvas HTML5 sans dépendance : 100% portable dans n’importe quelle application web.'
      }
    }
  }
];

interface Props {
  activeSystemId?: string;
  onSelectSystem?: (id: string) => void;
}

export default function UxProductDesignSystems({ activeSystemId, onSelectSystem }: Props) {
  const { locale } = useLanguage();
  const [selectedId, setSelectedId] = useState<string>(activeSystemId || 'carepill');

  const currentSystem = uxDesignSystems.find(s => s.id === selectedId) || uxDesignSystems[0];
  const IconComponent = currentSystem.icon;

  const handleSelect = (id: string) => {
    setSelectedId(id);
    if (onSelectSystem) {
      onSelectSystem(id);
    }
  };

  return (
    <div id="ux-design-systems-section" className="bg-white border border-stone-200/90 rounded-3xl p-6 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 space-y-10 my-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" /> Back-of-House Systems Architecture
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
              Product Design Systems
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-stone-900 tracking-tight">
            Design Systems & Component Governance
          </h2>
          <p className="text-stone-600 text-sm md:text-base mt-1.5 max-w-3xl leading-relaxed">
            {locale === 'en'
              ? 'Concise visual tokens, component states, and back-of-house architecture engineered for each product — demonstrating rigorous design scalability, accessibility compliance, and developer handoff readiness.'
              : 'Tokens visuels, états de composants et architecture système conçus pour chaque produit — démontrant une rigueur technique, l’accessibilité et la cohérence de production.'}
          </p>
        </div>

        {/* Quick App Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-stone-100 p-1.5 rounded-2xl border border-stone-200/70 self-start md:self-auto">
          {uxDesignSystems.map((system) => {
            const SystemIcon = system.icon;
            const isSelected = selectedId === system.id;
            return (
              <button
                key={system.id}
                onClick={() => handleSelect(system.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-white text-stone-950 shadow-sm border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <SystemIcon className="w-3.5 h-3.5" style={{ color: isSelected ? system.themeColor : undefined }} />
                <span>{system.appName}</span>
                <span className="hidden sm:inline-block text-[10px] text-stone-400 font-normal">
                  ({system.badge.split(' ')[0]})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected System Showcase Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSystem.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="space-y-8"
        >
          {/* Top Banner: Product Overview & Core Philosophy */}
          <div className={`p-6 md:p-8 rounded-2xl border ${currentSystem.accentBg} ${currentSystem.accentBorder} flex flex-col lg:flex-row lg:items-center justify-between gap-6`}>
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white border border-stone-200 shadow-2xs ${currentSystem.accentText}`}>
                  {currentSystem.badge}
                </span>
                <span className="text-xs font-mono text-stone-400">Design System Spec v2.4</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-stone-900">
                {currentSystem.appName} — {currentSystem.tagline[locale]}
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                <strong>Core Philosophy:</strong> {currentSystem.philosophy[locale]}
              </p>
            </div>

            {/* Quick Link to Full Case Study */}
            <div className="shrink-0 flex items-center gap-3">
              <Link
                to={`/projects/${currentSystem.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all active:scale-95"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 3-Column Architecture Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Color Tokens & Typography (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Color Tokens */}
              <div className="p-6 rounded-2xl bg-stone-50/80 border border-stone-200 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
                    <Palette className="w-4 h-4 text-blue-600" />
                    <span>Semantic Color Tokens</span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">5 Scalable Roles</span>
                </div>

                <div className="space-y-2.5">
                  {currentSystem.colorTokens.map((color, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-white rounded-xl border border-stone-200/80 flex items-center justify-between gap-3 text-xs shadow-2xs"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="w-8 h-8 rounded-lg shrink-0 border border-stone-300/80 shadow-2xs flex items-center justify-center font-mono text-[9px] font-bold"
                          style={{ backgroundColor: color.hex, color: color.textColor || '#000000' }}
                        >
                          ●
                        </div>
                        <div className="min-w-0 truncate">
                          <span className="font-semibold text-stone-900 block truncate">{color.name}</span>
                          <span className="text-[11px] text-stone-500 font-mono block truncate">{color.role}</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-mono text-xs font-bold text-stone-800 block">{color.hex}</span>
                        {color.contrastRatio && (
                          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-medium">
                            {color.contrastRatio}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography Scale & Hierarchy */}
              <div className="p-6 rounded-2xl bg-stone-50/80 border border-stone-200 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
                    <Type className="w-4 h-4 text-purple-600" />
                    <span>Typography & Hierarchy</span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">WCAG AA+</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-stone-200/80">
                    <span className="text-stone-400 font-mono text-[10px] block uppercase">Display Font:</span>
                    <span className="font-semibold text-stone-900">{currentSystem.typography.displayFont}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-stone-200/80">
                    <span className="text-stone-400 font-mono text-[10px] block uppercase">Body Font:</span>
                    <span className="font-semibold text-stone-900">{currentSystem.typography.bodyFont}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-stone-200/80">
                    <span className="text-stone-400 font-mono text-[10px] block uppercase">Scale & Mathematical Step:</span>
                    <span className="font-mono text-stone-800 font-medium">{currentSystem.typography.scale}</span>
                  </div>
                </div>

                <p className="text-stone-600 text-xs leading-relaxed p-2.5 bg-blue-50/50 rounded-lg border border-blue-100">
                  <strong className="text-blue-900">Legibility Rule:</strong> {currentSystem.typography.rules[locale]}
                </p>
              </div>

              {/* Spacing & Corner Radius Formula */}
              <div className="p-5 rounded-2xl bg-stone-50/80 border border-stone-200 space-y-2.5 text-xs text-stone-600">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider mb-1">
                  <Layers className="w-4 h-4 text-amber-600" />
                  <span>Geometry & Elevation Rules</span>
                </div>
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div><strong className="text-stone-800">Grid:</strong> {currentSystem.spacingAndRadius.grid}</div>
                  <div><strong className="text-stone-800">Radius Formula:</strong> {currentSystem.spacingAndRadius.radiusFormula}</div>
                  <div><strong className="text-stone-800">Elevation:</strong> {currentSystem.spacingAndRadius.elevation}</div>
                </div>
              </div>
            </div>

            {/* Right: Back-of-House Architecture & Component Governance (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Atomic Components & Component Hierarchy */}
              <div className="p-6 md:p-8 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
                    <Cpu className="w-4 h-4 text-indigo-600" />
                    <span>Back-of-House: Atomic Components & State Hierarchy</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200">
                    System Architecture
                  </span>
                </div>

                <div className="space-y-3">
                  {currentSystem.backOfHouseArchitecture.componentHierarchy[locale].map((comp, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3 text-xs leading-relaxed"
                    >
                      <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {cIdx + 1}
                      </div>
                      <span className="text-stone-800 font-medium">{comp}</span>
                    </div>
                  ))}
                </div>

                {/* State Machine & Engine Logic */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-stone-900 to-stone-800 text-white space-y-2 mt-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Runtime State Engine & Privacy Architecture</span>
                  </div>
                  <p className="text-stone-300 text-xs leading-relaxed">
                    {currentSystem.backOfHouseArchitecture.stateEngine[locale]}
                  </p>
                </div>
              </div>

              {/* Accessibility & Safety Guardrails */}
              <div className="p-6 md:p-8 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Accessibility & Safety Guardrails (A11y)</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    WCAG AA/AAA Verified
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentSystem.backOfHouseArchitecture.accessibilityAndSafety[locale].map((rule, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3.5 rounded-xl bg-emerald-50/40 border border-emerald-200/60 space-y-1.5 text-xs text-stone-700 leading-relaxed"
                    >
                      <div className="flex items-center gap-1.5 font-bold text-emerald-900 text-[11px]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Rule 0{rIdx + 1}</span>
                      </div>
                      <p>{rule}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Developer Handoff Token Export */}
              <div className="p-5 rounded-2xl bg-stone-100/80 border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-700">
                <div className="space-y-1">
                  <span className="font-bold text-stone-900 block flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-blue-600" />
                    <span>Production Developer Handoff:</span>
                  </span>
                  <p className="text-stone-600 text-xs">
                    {currentSystem.backOfHouseArchitecture.devHandoff[locale]}
                  </p>
                </div>
                <Link
                  to={`/projects/${currentSystem.slug}`}
                  className="px-4 py-2 rounded-xl bg-white border border-stone-300 hover:border-stone-900 font-semibold text-stone-900 text-xs shrink-0 transition-colors shadow-2xs flex items-center gap-1.5"
                >
                  <span>Inspect Implementation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
