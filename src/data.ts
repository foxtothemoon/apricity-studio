import { Project, WebClientSite, GraphicDesignItem, OnlineMarketingStrategy, MarketingWorkflowStep, FacebookAdCaseStudy } from './types';

export const projects: Project[] = [
  {
    id: "01",
    slug: "carepill-medication-tracker",
    title: {
      en: "CarePill: A Kinder Way to Care",
      fr: "CarePill : Un Soin Bienveillant"
    },
    category: {
      en: "Universal UX/UI & Health Adherence",
      fr: "UX/UI Universelle & Suivi Santé"
    },
    categoryType: "app",
    description: {
      en: "A universal medication and care system designed for everyone, with thoughtful senior accommodations including in-app typography scaling, distinct caregiver circles, and intentional pastel color roles.",
      fr: "Un système universel de suivi de santé conçu pour tous avec une accessibilité pensée pour les aînés, incluant l'ajustement dynamique des polices, des espaces de soutien dédiés et des rôles de couleur pastels apaisants."
    },
    imageUrl: "/assets/aistudio/00___CarePill_87abe415.png",
    liveUrl: "https://carepillmedicationreminder.netlify.app/",
    figmaUrl: "https://www.figma.com/design/ASCy7gbGRwFXKBverOxev7/CarePill-%E2%80%94-Design-System---Portfolio?node-id=4-3&t=R0SNPguKBWnRGXJl-1",
    images: [
      "/assets/aistudio/00___CarePill_87abe415.png",
      "/assets/aistudio/02___Color___role_71f20287.png",
      "/assets/aistudio/04___Case_study_8fdd29c2.png",
      "/assets/aistudio/06___States___review_c5b61f1b.png",
      "/assets/aistudio/Screenshot_2026-10-28_114929_f77479ee.png",
      "/carepill-action.gif"
    ],
    tags: ["Universal UX/UI", "Scalable Typography", "Figma Design System", "Elder-Accommodating", "Edge Case States", "React"],
    details: {
      overview: {
        en: "CarePill is a universal medication tracking and caregiver synchronization application built on the principle: 'Small moments. A kinder way to care.' Rather than isolating seniors in a separate niche tool, CarePill serves anyone managing daily medications while enabling trusted caregivers (including family members, a personal doctor, or a home nurse) to monitor adherence respectfully through consent-based circles, senior-friendly scalable typography, and non-punitive feedback.",
        fr: "CarePill est une application universelle de suivi de médicaments et de synchronisation des proches fondée sur le principe : « De petits moments. Une manière plus bienveillante de prendre soin. » Elle permet un suivi à distance respectueux par des soignants et proches de confiance (famille, médecin traitant ou infirmier), tout en intégrant une ergonomie pour les aînés avec ajustement typographique et cibles tactiles de 48px."
      },
      problemStatement: {
        en: "Daily medication care involves high cognitive overhead. Conflating the person taking medication with the family member or medical provider supporting them leads to confusing interfaces. Furthermore, most clinical healthcare apps feature rigid, unscalable fonts and lack respectful remote monitoring for family, doctors, or nurses.",
        fr: "La gestion quotidienne des traitements engendre une charge mentale élevée. Mélanger les rôles du patient et des proches aidants ou soignants crée des interfaces confuses. De plus, la plupart des applications manquent d'un suivi à distance digne et bienveillant pour la famille, le médecin traitant ou l'infirmier."
      },
      painPoints: {
        en: [
          "Fixed small typography creates severe eye fatigue for older adults and individuals with visual impairments.",
          "Role confusion: Patients and family caregivers have entirely different jobs-to-be-done, but traditional apps mix them onto one cluttered dashboard.",
          "Punitive guilt: Red flashing warnings assume bad behavior, whereas missed logs often stem from memory lapses or offline moments.",
          "Complex scheduling: Alternating days, custom weekdays, and multi-dose intervals are typically hidden behind nested menus."
        ],
        fr: [
          "Typographies rigides provoquant une fatigue visuelle aiguë chez les aînés ou personnes malvoyantes.",
          "Confusion des rôles : Le patient et le proche aidant ont des besoins opposés mais sont souvent réunis sur un tableau de bord encombré.",
          "Culpabilisation punitive : Les alertes rouges agressives créent du stress au lieu d'encourager.",
          "Gestion des horaires complexe : Les prises un jour sur deux ou jours personnalisés sont souvent enfouies dans des sous-menus."
        ]
      },
      goals: {
        en: [
          "Universal Inclusivity: Build a clean, modern experience that anyone can enjoy, with built-in text scaling tailored for seniors.",
          "Role Separation: Distinct spaces for 'For myself' (Mint #C4F5E1) and 'For someone I love' (Lilac #E8DDFE) with mutual consent circles.",
          "Intentional Color with a Clear Job: Soft pastel status tokens (Taken Mint, Upcoming Soft Yellow #FFF0AC, Missed Soft Coral #FFBFC7).",
          "Comprehensive Edge Cases: Thoughtful empty states, permission revocations, and multilingual typography (LINE Seed Sans TH)."
        ],
        fr: [
          "Inclusivité universelle : Une expérience moderne pour tous avec ajustement d'échelle typographique pour les aînés.",
          "Séparation claire des rôles : Espaces dédiés « Pour moi-même » (Menthe #C4F5E1) et « Pour un proche » (Lilas #E8DDFE).",
          "Couleurs sémantiques ciblées : Jetons pastels apaisants (Pris Menthe, À venir Jaune doux #FFF0AC, Non enregistré Corail #FFBFC7).",
          "Gestion poussée des cas limites : États vides travaillés, révocation de consentement et typographie multilingue (LINE Seed Sans TH)."
        ]
      },
      userPersona: {
        en: "1. The Self-Care User: Any adult managing daily prescriptions or vitamins seeking an effortless, calming log. 2. The Older Adult (Elder-Accommodated): Benefits from one-tap larger typography, high contrast, and gentle microcopy. 3. The Supportive Caregiver: A family member connected via QR/Care ID receiving respectful status context without intrusive surveillance.",
        fr: "1. L'utilisateur autonome : Toute personne gérant ses vitamines ou ordonnances en quête de sérénité. 2. L'aîné (inclusivité seniors) : Bénéficie d'une typographie agrandie en un clic et de contrastes élevés. 3. Le proche aidant : Connecté via QR/Care ID pour suivre la situation avec bienveillance et consentement."
      },
      ideation: {
        en: "Synthesized into 5 architectural pillars from the Figma study: 01 Role clarity (QR onboarding & Care ID), 02 Restrained color (role cue preserved in bottom navigation rather than overwhelming tints), 03 Information hierarchy (horizontal person identity & clean permission cards), 04 Gentle but explicit actions (2-second dismissal feedback), and 05 Realistic scheduling (collapsed custom weekdays).",
        fr: "Synthétisé en 5 piliers issus de l'étude Figma : 01 Clarté des rôles (onboarding QR & Care ID), 02 Couleur maîtrisée (repère dans la barre de navigation), 03 Hiérarchie de l'information (cartes personnes horizontales), 04 Actions douces mais explicites (confirmation de 2s), 05 Planification réaliste (jours personnalisés repliables)."
      },
      uiDesign: {
        en: "• Semantic Color Tokens: Caretaker Mint (#C4F5E1, Ink #125943), Caregiver Lilac (#E8DDFE, Ink #61458C), Primary Action Warm Pink (#FF9AB4).\n• Respectful State Philosophy: Yellow (#FFF0AC) for upcoming waiting doses; Soft Coral (#FFBFC7) for missed logs ('An unrecorded dose is not proof a person did not take it').\n• In-App Text Scaling: Standard vs. Larger text mode for elderly comfort without UI clipping.\n• Typographic Foundations: Dual English/Thai support using LINE Seed Sans TH and crisp neutral ink (#202C37).",
        fr: "• Tokens de couleur sémantiques : Espace personnel Menthe (#C4F5E1), Espace aidant Lilas (#E8DDFE), Action principale Rose chaleureux (#FF9AB4).\n• Philosophie respectueuse des états : Jaune doux (#FFF0AC) pour l'attente, Corail doux (#FFBFC7) pour les doses non enregistrées sans jugement.\n• Échelle de texte adaptable : Mode standard et mode texte agrandi pour les aînés.\n• Typographie multilingue : Prise en charge EN/TH avec LINE Seed Sans TH et encre neutre (#202C37)."
      },
      coreFeatures: {
        en: "• In-App Typography Scaling: Instant toggle between Standard and Larger text sizing to ensure effortless reading for older adults.\n• Dual Role Spaces: 'For myself' and 'For someone I love' with independent bottom navigations and switch destinations.\n• Friction for Safety: Confirmation sheets with gentle wording that dismiss after 2 seconds to avoid accidental taps.\n• Edge-Case Governance: Complete coverage of empty circles, pending consent, revoked access, and offline states.\n• 40+ Screen Figma Interactive Prototype: Fully wired flow covering onboarding, dose logging, scheduling, and people settings.",
        fr: "• Échelle de texte personnalisable : Bascule immédiate entre taille standard et agrandie pour le confort des aînés.\n• Espaces à double rôle : « Pour moi-même » et « Pour un proche » avec navigations dédiées.\n• Sécurité bienveillante : Feuilles de confirmation douces avec fermeture automatique en 2 secondes.\n• Gestion des cas limites : Cercles vides, consentements en attente et révocation d'accès.\n• Prototype interactif Figma de 40+ écrans : Flux complet d'onboarding, de prise de traitement et de gestion des contacts."
      },
      technicalHighlights: {
        en: "• Engineered in Figma with strict reusable component instances, vector artwork, and named screens.\n• Linked prototype reactions with interactive modals and multi-path branching.\n• Fully synchronized to React, TypeScript, and Tailwind CSS on Netlify.\n• Production-ready dark mode tokens and multilingual layout flexibility.",
        fr: "• Développé sur Figma avec composants modulaires réutilisables, tracés vectoriels et écrans structurés.\n• Réactions de prototype interactives avec embranchements multiples.\n• Synchronisé vers React, TypeScript et Tailwind CSS déployé sur Netlify.\n• Tokens pour mode sombre et adaptabilité multilingue."
      },
      aiWorkflow: {
        en: "Rapid AI-assisted code translation from Figma tokens to clean TypeScript and Tailwind components, enabling live user testing of interactions like dose logging and typography scaling on mobile devices.",
        fr: "Traduction accélérée par IA des tokens Figma vers du code TypeScript et Tailwind propre pour tester immédiatement sur mobile les flux de prise et d'agrandissement de texte."
      },
      outcome: {
        en: "A comprehensive, production-grade UX case study and working prototype that reframes healthcare tracking from stressful clinical management into an empathetic, universally accessible ritual suitable for all ages.",
        fr: "Une étude de cas UX approfondie et un prototype fonctionnel qui transforment le suivi médical en un rituel bienveillant, accessible et adapté à tous les âges."
      }
    }
  },
  {
    id: "02",
    slug: "moody-child",
    title: {
      en: "Moody Child: Mood Tracker & Micro-Journal",
      fr: "Moody Child : Suivi d'Humeur & Micro-Journal"
    },
    category: {
      en: "Vibe Coding • Micro-App",
      fr: "Vibe Coding • Micro-App"
    },
    categoryType: "vibe_coding",
    description: {
      en: "A highly responsive, mobile-first micro-journaling app bridging emotional check-ins with expressive Neo-Brutalist art, built rapidly via full-stack AI vibe coding.",
      fr: "Une application de micro-journalisation mobile-first hautement réactive alliant bilans émotionnels et art Néo-Brutaliste expressif, développée rapidement par vibe coding assisté par IA."
    },
    imageUrl: "/moody-child-home.png",
    images: ["/moody-child-home.png", "/moody-child-record.png"],
    liveUrl: "https://moodychild.netlify.app/",
    tags: ["Vibe Coding", "Prompt Architecture", "Claude & AI Studio", "Neo-Brutalism", "Procedural SVG", "Local Edge Sandbox", "Netlify Continuous Deploy"],
    details: {
      overview: {
        en: "Moody Child is a production-ready mobile micro-journal created through AI vibe coding. By combining human emotional UX rationale with conversational AI steering (Claude 3.7 Sonnet & Google AI Studio), the entire application — from dynamic SVG sticker generators to client-side encrypted local storage — was architected and deployed in rapid sprint cycles.",
        fr: "Moody Child est un micro-journal mobile prêt pour la production conçu par vibe coding assisté par IA. En combinant l'intuition UX humaine avec le pilotage d'IA conversationnelle (Claude 3.7 Sonnet & Google AI Studio), l'application entière — des générateurs de stickers SVG au stockage local chiffré — a été orchestrée et déployée en cycles de sprint accélérés."
      },
      problemStatement: {
        en: "Traditional journaling apps suffer from extreme friction: demanding long paragraphs, clinical corporate UI, and questionable cloud privacy. Moody Child solves this with a 2-tap micro-logging paradigm and 100% private zero-server architecture.",
        fr: "Les applications traditionnelles imposent une friction excessive : longs paragraphes, design clinique impersonnel et doutes sur la confidentialité. Moody Child résout cela via un paradigme de saisie en 2 clics et une architecture zéro serveur 100% privée."
      },
      painPoints: {
        en: [
          "Cognitive fatigue: Writing paragraphs at the end of an exhausting day leads to user abandonment.",
          "Sterile medical design: Clinical hospital-like aesthetics alienate younger demographics.",
          "Data vulnerability: Sensitive emotional musings should never sit on vulnerable third-party databases."
        ],
        fr: [
          "Fatigue cognitive : Rédiger de longs bilans en fin de journée entraîne l'abandon rapide de l'application.",
          "Design clinique stérile : Les esthétiques hospitalières démotivent les jeunes générations.",
          "Vulnérabilité des données : Les réflexions émotionnelles intimes ne doivent pas être exposées en ligne."
        ]
      },
      goals: {
        en: [
          "2-Tap Rapid Logging (Hick's Law): Reduce daily decision overhead to near zero.",
          "Tactile Cyber-Y2K Aesthetics (Aesthetic-Usability Effect): Make daily reflection feel like collecting sticker zines.",
          "Zero-Server Edge Sandboxing: Total user privacy with instant client hydration."
        ],
        fr: [
          "Saisie en 2 clics (Loi de Hick) : Réduire la charge décisionnelle quotidienne à zéro.",
          "Esthétique Cyber-Y2K tactile : Transformer l'introspection en collection d'autocollants gratifiante.",
          "Bac à sable Edge sans serveur : Confidentialité absolue des données stockées localement."
        ]
      },
      userPersona: {
        en: "Gen-Z & young professionals seeking an honest, delightfully tactile, and completely private check-in without cognitive baggage.",
        fr: "Jeunes actifs et génération Z en quête d'un outil d'expression intime, tactile et strictement confidentiel sans contrainte rédactionnelle."
      },
      ideation: {
        en: "Neo-Brutalist collage aesthetic with 4px offset card shadows, tactile holographic borders, and bilingual slang microcopy engineered through prompt iteration.",
        fr: "Esthétique de collage Néo-Brutaliste avec ombres portées décalées de 4px, bordures holographiques et micro-textes bilingues rythmés."
      },
      uiDesign: {
        en: "High-contrast dark charcoal background framed with neon accents, custom inline SVGs that scale infinitely with zero asset weight, and spring-based tactile gestures.",
        fr: "Toile sombre anthracite soulignée de néons vifs, SVG en ligne légers et transitions tactiles réactives calibrées avec des courbes de ressort fluides."
      },
      technicalHighlights: {
        en: "• 100% Client-Side Sandboxing with encrypted LocalStorage state hydration.\n• Procedural vector sticker synthesis reducing bundle size to near zero.\n• Responsive mobile viewport lock with touch haptics simulation.",
        fr: "• Bac à sable 100% client avec réhydratation chiffrée du LocalStorage.\n• Synthèse vectorielle procédurale réduisant le poids du bundle au minimum.\n• Ergonomie mobile avec simulation de retour haptique."
      },
      aiWorkflow: {
        en: "Exemplifies expert Vibe Coding: I authored system prompts outlining component contracts, responsive layout constraints, and state transitions. Using Claude 3.7 and Google AI Studio, I rapidly co-generated the React logic, fine-tuned custom cubic-bezier animations, and set up continuous Netlify deployment hooks from GitHub in record time.",
        fr: "Exemple concret de maîtrise du Vibe Coding : j'ai rédigé les invites d'architecture définissant les contrats de composants, les contraintes réactives et la gestion d'état. Avec Claude 3.7 et Google AI Studio, j'ai co-généré la logique React, ajusté les animations et configuré le déploiement continu Netlify via GitHub en un temps record."
      },
      outcome: {
        en: "A fully live, deployed micro-app with zero backend costs, near-instant 100 Lighthouse performance, and an addictive tactile experience praised by early testers.",
        fr: "Une micro-application déployée en ligne sans frais de serveur, avec un score de performance Lighthouse de 100 et une expérience tactile très appréciée."
      }
    }
  },
  {
    id: "03",
    slug: "survive-til-five",
    title: {
      en: "Survive 'til five",
      fr: "Survive 'til five"
    },
    category: {
      en: "Vibe Coding • 16-Bit Web Game",
      fr: "Vibe Coding • Jeu Web 16-Bit"
    },
    categoryType: "vibe_coding",
    description: {
      en: "A 16-bit retro arcade web game engineered from scratch with zero dependencies, synthesized Web Audio, and AI-bot tuned physics — crafted through high-velocity Vibe Coding.",
      fr: "Un jeu d'arcade web 16 bits rétro conçu sans dépendances externes, avec synthèse audio Web Audio et physique équilibrée par bots IA — développé en Vibe Coding haute vélocité."
    },
    imageUrl: "/survive-til-five-home.png",
    images: ["/survive-til-five-home.png", "/survive-til-five.gif"],
    liveUrl: "https://survivetilfive.netlify.app/",
    tags: ["Vibe Coding", "HTML5 Canvas", "Web Audio API", "Vanilla JS", "AI Bot Playtesting", "Zero Dependencies", "Procedural Pixel Art"],
    details: {
      overview: {
        en: "SURVIVE 'TIL FIVE is a 16-bit side-scrolling browser game built via rapid Vibe Coding. Developed in pure HTML5 Canvas and vanilla JavaScript with zero external frameworks or bulky audio assets, it turns office workday fatigue into an instant, nostalgic coffee-break gaming loop.",
        fr: "SURVIVE 'TIL FIVE est un jeu d'arcade rétro en défilement horizontal conçu en Vibe Coding rapide. Développé en HTML5 Canvas et JavaScript pur sans frameworks externes ni fichiers audio lourds, il transforme le stress du bureau en une pause ludique et nostalgique de 45 secondes."
      },
      problemStatement: {
        en: "Desk workers face midday burnout but lack accessible, low-friction micro-break entertainment that doesn't demand 10-minute tutorials or massive app downloads.",
        fr: "Les travailleurs de bureau souffrent de surmenage mais manquent de distractions rapides, sans téléchargements volumineux ni tutoriels interminables."
      },
      painPoints: {
        en: [
          "Office fatigue & 3 PM slump with nowhere quick to decompress.",
          "Bloated modern web games taking dozens of seconds to load large asset bundles.",
          "Complex gaming mechanics unsuited for quick 45-second micro-breaks."
        ],
        fr: [
          "Baisse d'énergie vers 15h sans moyen rapide de décompresser.",
          "Jeux web modernes surchargés mettant des dizaines de secondes à charger des mégaoctets d'assets.",
          "Mécaniques complexes inadaptées à une pause café de 45 secondes."
        ]
      },
      goals: {
        en: [
          "Zero-Tutorial Intuitive Readability: 'Happy smile = collect, angry scowl = dodge'.",
          "Zero Asset Overhead: 100% procedural pixel drawing and synthesized Web Audio sound FX.",
          "Automated AI Bot Balance: Headless bot simulations running thousands of playthroughs to calibrate difficulty."
        ],
        fr: [
          "Compréhension immédiate sans tuto : 'Visage souriant = attraper, visage fâché = esquiver'.",
          "Zéro dépendance lourde : Dessin procédural des sprites et effets sonores synthétisés par l'API Web Audio.",
          "Équilibrage assisté par IA : Simulation automatisée de milliers de parties pour régler la courbe de difficulté."
        ]
      },
      userPersona: {
        en: "Desk employees, creatives, and programmers craving a quick, charming distraction to refresh focus between meetings.",
        fr: "Employés de bureau, créatifs et développeurs en quête d'une courte pause ludique pour se ressourcer entre deux réunions."
      },
      ideation: {
        en: "Translated real corporate pain points (unannounced meetings, jammed printers, endless emails) into funny arcade obstacles, and desk staples (boba tea, iced espresso, naps) into power-ups.",
        fr: "Traduction des aléas quotidiens du bureau (réunions imprévues, imprimante bloquée) en obstacles de jeu, et des carburants du bureau (café, bubble tea) en bonus d'énergie."
      },
      uiDesign: {
        en: "• Face-gesture instant iconography: clear feedback with zero text instructions.\n• Dynamic time-of-day office backdrop shifting from morning skylight to golden hour.\n• Real-time digital clock synced with in-game progression.",
        fr: "• Iconographie faciale intuitive : retour visuel clair sans aucun texte explicatif.\n• Arrière-plan de bureau dynamique évoluant du bleu matinal au crépuscule doré.\n• Horloge numérique en temps réel synchronisée avec l'avancement de la partie."
      },
      coreFeatures: {
        en: "• 4 distinct chibi office professions (Marketing, Sales, HR, IT) with progressive fatigue states.\n• 5 progressive workday stages (Mon–Fri) culminating in a 4:30 PM boss sprint.\n• Synthesized Caffeine Overdrive boosting velocity with screen-shaking thrills.\n• 16-item unlockable gacha wardrobe that equips wearable shields.",
        fr: "• 4 professions chibi (Marketing, Ventes, RH, Informatique) avec états de fatigue visuels.\n• 5 niveaux du lundi au vendredi s'achevant par l'apparition du boss à 16h30.\n• Mode Overdrive caféiné déclenchant une accélération avec tremblement d'écran.\n• Garde-robe gacha de 16 objets offrant des boucliers protecteurs."
      },
      technicalHighlights: {
        en: "• Single-file HTML5 Canvas written in pure vanilla JavaScript — zero runtime dependencies.\n• Web Audio API sound synthesizer generating 8-bit chiptune audio procedurally without MP3 files.\n• Headless bot simulation pipeline run via AI prompts to scientifically balance obstacle timing.",
        fr: "• Jeu Canvas HTML5 en fichier unique écrit en JavaScript pur — zéro dépendance externe.\n• Synthétiseur sonore Web Audio API générant des bruitages 8-bit de manière procédurale.\n• Simulation automatisée par scripts d'IA pour équilibrer scientifiquement la difficulté."
      },
      aiWorkflow: {
        en: "The quintessential Vibe Coding journey: Prompted Claude and Google AI Studio across 8 rapid iteration loops to write the collision math, procedural sprite rendering, and sound frequencies. AI simulations were then run headlessly to compress round lengths from 2+ minutes down to the ideal 35–55 second sweet spot, followed by instant Netlify continuous deployment.",
        fr: "Une démonstration éclatante du Vibe Coding : dialogue itératif avec Claude et Google AI Studio sur 8 cycles pour coder la géométrie des collisions, le rendu procédural des sprites et les fréquences sonores. Des simulations d'IA sans interface ont permis de calibrer la durée de partie au standard idéal de 35 à 55 secondes, avec déploiement continu immédiat sur Netlify."
      },
      outcome: {
        en: "Complete, instantly playable browser game with 0KB audio asset overhead, near-zero bandwidth footprint, and thousands of enthusiastic plays.",
        fr: "Jeu complet directement jouable dans le navigateur avec 0 Ko de fichiers sonores, une bande passante minimale et une jouabilité instantanée."
      }
    }
  },
  {
    id: "04",
    slug: "route-ev-charger",
    title: {
      en: "Route: EV Smart Charging & Route Planner",
      fr: "Route : Recharge VE & Planificateur de Trajet"
    },
    category: {
      en: "Automotive UX & Smart Mobility",
      fr: "UX Automobile & Mobilité Intelligente"
    },
    categoryType: "app",
    description: {
      en: "A streamlined EV charging companion designed for effortless station discovery, real-time charger availability, smart battery trip planning, and seamless plug-and-charge payments.",
      fr: "Une application mobile intuitive de recharge pour véhicules électriques : disponibilité des bornes en temps réel, planification intelligente des trajets et paiement sans friction."
    },
    imageUrl: "/route-ev-charger.jpg",
    images: ["/route-ev-charger.jpg"],
    tags: ["EV Mobility", "Smart Navigation", "Charging Stations", "Figma Design System", "In Development"],
    details: {
      overview: {
        en: "Route is an upcoming smart electric vehicle (EV) charging and navigation application currently in design. It addresses range anxiety by calculating battery state-of-charge along planned routes, predicting station queues, and supporting one-tap charging activations.",
        fr: "Route est une application de recharge et navigation pour véhicules électriques actuellement en cours de conception. Elle répond à l'anxiété liée à l'autonomie en calculant la batterie restante sur les trajets et en prédisant la disponibilité des bornes."
      },
      problemStatement: {
        en: "EV drivers face fragmented charging networks, broken hardware with inaccurate status updates, and unpredictable station wait times.",
        fr: "Les conducteurs de véhicules électriques font face à des réseaux de recharge morcelés, des bornes hors service mal signalées et des temps d'attente imprévisibles."
      },
      painPoints: {
        en: [
          "Fragmented charging networks requiring multiple subscriptions and RFID cards.",
          "Phantom availability: arriving at a station marked free only to find it occupied or broken.",
          "Inaccurate range estimations under real weather and elevation changes."
        ],
        fr: [
          "Réseaux morcelés imposant de multiples abonnements et cartes RFID.",
          "Disponibilité inexacte : arriver à une borne indiquée libre et la trouver occupée ou en panne.",
          "Estimations d'autonomie imprécises sans prise en compte de la météo et du relief."
        ]
      },
      goals: {
        en: [
          "Unified Plug-and-Charge across major public and private charging networks.",
          "Predictive Occupancy Intelligence using crowd-sourced telemetry and live station APIs.",
          "Clean, low-distraction driver mode with high-contrast night aesthetics."
        ],
        fr: [
          "Paiement unifié Plug-and-Charge sur l'ensemble des réseaux de recharge.",
          "Disponibilité prédictive basée sur la télémétrie et les API en direct.",
          "Mode conducteur épuré à fort contraste pour limiter les distractions au volant."
        ]
      },
      userPersona: {
        en: "EV commuters and road-trippers wanting reliable, zero-stress charging stops without downloading dozens of regional apps.",
        fr: "Conducteurs de véhicules électriques quotidiens et voyageurs cherchant des arrêts recharge fiables sans multiplier les applications."
      },
      ideation: {
        en: "Clean dark-mode interface with cyan and emerald energy accents, emphasizing glanceability, quick station filtering by charging speed (kW), and instant reservation.",
        fr: "Interface sombre aux accents cyan et émeraude, privilégiant la lisibilité immédiate, le filtrage rapide par puissance (kW) et la réservation instantanée."
      },
      uiDesign: {
        en: "High-contrast map visualization, battery SOC gauge with dynamic radius range overlays, and clear plug-type badges (CCS, CHAdeMO, Type 2).",
        fr: "Visualisation cartographique à fort contraste, jauge de batterie avec rayon d'action dynamique et identification claire des connecteurs."
      },
      technicalHighlights: {
        en: "• Comprehensive Figma token library with automotive-grade contrast ratios.\n• Real-time map clustering and routing algorithms.\n• In-app reservation and live charging telemetry monitor.",
        fr: "• Bibliothèque de tokens Figma avec ratios de contraste adaptés à l'automobile.\n• Algorithmes de regroupement cartographique et d'itinéraire en direct.\n• Réservation intégrée et télémétrie de charge en temps réel."
      },
      outcome: {
        en: "Case study and prototype currently in active development. Coming soon to the UX/UI portfolio.",
        fr: "Étude de cas et prototype en cours de finalisation. Bientôt disponible dans le portfolio UX/UI."
      }
    }
  }
];

export const webClientSites: WebClientSite[] = [
  {
    id: "hir-consultants",
    name: "Real Estate & Property Investment Platform",
    url: "https://hirconsultants.com/",
    image: "/hir-consultants.jpg",
    description: {
      en: "A real estate consultancy and property investment website in Thailand. Built on WordPress with responsive property showcases, investment opportunities, fast loading times, and lead generation inquiry forms.",
      fr: "Site web de conseil en immobilier et investissement en Thaïlande. Développé sous WordPress avec vitrines de biens réactives, opportunités d'investissement, temps de chargement rapides et formulaires de contact pour investisseurs."
    },
    tags: ["WordPress", "Real Estate", "Property Showcase", "Lead Generation", "Mobile Responsive"],
    role: {
      en: "Full WordPress Build, UI Design & Real Estate Layout",
      fr: "Développement WordPress, Design UI & Mise en page Immobilière"
    }
  },
  {
    id: "pension-canine",
    name: "Pension Canine Familiale",
    url: "https://pensioncaninefamiliale.fr/",
    image: "/pension-canine.png",
    description: {
      en: "A custom WordPress website for a premium dog boarding business in France — bringing together thoughtful design, local SEO, and a seamless journey from search to booking.",
      fr: "Un site WordPress sur mesure pour une pension canine haut de gamme en France — alliant design soigné, SEO local et un parcours fluide de la recherche à la réservation."
    },
    tags: ["WordPress", "Local SEO & Schema", "UI/UX Design", "Conversion Rate (CRO)", "Responsive Web"],
    role: {
      en: "Full WordPress Build, UI/UX & Local Search Optimization",
      fr: "Conception WordPress, UI/UX & Optimisation du Référencement Local"
    }
  },
  {
    id: "piger-tech",
    name: "Piger Tech",
    url: "https://piger-tech.com/en/",
    image: "/piger-tech.png",
    description: {
      en: "A WordPress website for a B2B industrial technology supplier — combining clear, functional design with organized product content and SEO to improve visibility and help customers find the right solutions.",
      fr: "Un site WordPress pour un fournisseur de technologies industrielles B2B — alliant un design clair et fonctionnel avec un catalogue produits structuré et du SEO pour maximiser la visibilité et orienter les clients."
    },
    tags: ["WordPress", "Technical SEO", "B2B Architecture", "Core Web Vitals", "Multilingual"],
    role: {
      en: "Information Architecture, Custom Theme & Technical SEO",
      fr: "Architecture de l'Information, Thème Sur Mesure & SEO Technique"
    }
  },
  {
    id: "siam-pet",
    name: "Siam Pet Products",
    url: "https://siampetproducts.com/",
    image: "/siam-pet.png",
    description: {
      en: "A product-focused website for a pet treats manufacturer — designed to showcase its OEM capabilities, own-brand products, and product range in a clear and approachable way.",
      fr: "Un site axé sur les produits pour un fabricant de friandises pour animaux — conçu pour valoriser ses capacités OEM, ses marques propres et sa gamme de produits de façon claire et accessible."
    },
    tags: ["WordPress", "E-Commerce SEO", "SEM Intent Strategy", "Product Schema", "Responsive"],
    role: {
      en: "UI Design, E-Commerce Integration & Search Strategy",
      fr: "Design UI, Intégration E-Commerce & Stratégie de Recherche"
    }
  }
];

export const graphicDesignItems: GraphicDesignItem[] = [
  {
    id: "luxury-villa-ad-banner",
    title: {
      en: "Serene Bay Villas — High-Conversion Luxury Real Estate Marketing Banner",
      fr: "Serene Bay Villas — Bannière Marketing Immobilier de Luxe & Haute Conversion"
    },
    category: {
      en: "Luxury Real Estate & AI Brand Architecture",
      fr: "Immobilier de Prestige & Architecture de Marque IA"
    },
    description: {
      en: "A strategic online marketing promotional banner engineered for high-net-worth property buyers and luxury villa investors. Crafted around the concept of 'authentic quiet luxury'—prioritizing timeless architectural serenity over flashy ostentation. Leveraged a disciplined AI generative workflow strictly governed by brand identity guidelines, geometric perspective, natural materials, and structured spatial hierarchy rather than arbitrary AI imagery.",
      fr: "Bannière promotionnelle de marketing digital conçue pour les investisseurs et acquéreurs de villas de prestige. Développée autour du concept de « luxe authentique et discret » privilégiant la sérénité architecturale intemporelle plutôt que l'ostentation superflue. Intègre un flux créatif d'IA générative strictement encadré par la charte de marque, l'équilibre géométrique et les matériaux nobles."
    },
    tags: [
      "Luxury Real Estate",
      "Online Marketing Banner",
      "Quiet Luxury Aesthetic",
      "AI-Assisted Architectural Workflow",
      "Brand Guidelines Structure",
      "Typography & Color Theory",
      "Landscape Social Ad"
    ],
    previewType: "promotional_banner",
    image: "/ad-blue-villa.png",
    palette: [
      { hex: "#01192D", name: "Deep Andaman Midnight" },
      { hex: "#18426B", name: "Oceanic Twilight Blue" },
      { hex: "#E4CEBD", name: "Sunset Gold Reflection" },
      { hex: "#CDB89B", name: "Warm Travertine & Sand" },
      { hex: "#3F200C", name: "Natural Teakwood Accent" }
    ],
    specs: [
      { label: { en: "Format & Dimensions", fr: "Format & Dimensions" }, value: "1536 × 1024 px (High-Resolution 3:2 Landscape Banner)" },
      { label: { en: "Marketing Campaign", fr: "Campagne Marketing" }, value: "Luxury Villa Sales & Turnkey Investment Acquisition" },
      { label: { en: "Creative Methodology", fr: "Méthodologie Créative" }, value: "Brand-Guided AI Prompting + Structural Grid + Adobe Photoshop CC" },
      { label: { en: "Color Strategy", fr: "Stratégie Couleur" }, value: "Deep Midnight Blues + Sunset Amber Warmth (Understated Luxury)" },
      { label: { en: "Typography Hierarchy", fr: "Hiérarchie Typographique" }, value: "Classic Display Serif (Prestige) + Modern Clean Sans-Serif (Clarity)" }
    ],
    highlights: {
      en: [
        "Authentic Quiet Luxury vs. Gaudy Ostentation: Communicates genuine luxury through panoramic horizon integration, modern tropical minimalist architecture, and natural textures (teakwood, travertine stone, low-iron glass) rather than superficial glitter or artificial gold foils.",
        "Disciplined Brand-Guided AI Workflow: The AI visualization was strictly bound by brand identity rules, camera perspective, realistic golden-hour illumination, and pre-calculated negative space for commercial copy, preventing random generation errors.",
        "Psychological Color Theory: Deep midnight ocean navy (#01192D, #18426B) establishes institutional trust and tranquility, balanced by warm sunset reflections (#E4CEBD) and natural earth tones (#CDB89B) that evoke private sanctuary comfort.",
        "Dual-Font Typographic Hierarchy: High-contrast display serif with generous letter-spacing (tracking) anchors the headline with timeless prestige; crisp geometric sans-serif delivers instant readability for location highlights and property management guarantees."
      ],
      fr: [
        "Luxe Authentique et Discret vs Ostentation : Exprime le véritable luxe par la continuité visuelle avec l'horizon marin, l'architecture tropicale minimaliste et les matériaux nobles (teck, travertin, verre) sans artifices dorés superflus.",
        "Flux IA Structuré selon la Charte : Génération visuelle encadrée par des contraintes précises d'angles de prise de vue, lumière dorée crépusculaire et zones de respiration réservées pour la typographie commerciale.",
        "Théorie des Couleurs Équilibrée : Bleu nuit océanique profond (#01192D, #18426B) assurant stabilité et prestige, réchauffé par les reflets dorés du coucher de soleil et les tons sable naturel.",
        "Hiérarchie Typographique Bipartite : Serif à empattements avec interlettrage étendu pour le titre prestigieux, complété d'un Sans-Serif géométrique ultra-lisible pour les caractéristiques d'investissement."
      ]
    }
  },
  {
    id: "ielts-tutoring-banner",
    title: {
      en: "IELTS Test Prep & Tutoring — AI-Assisted Promotional Banner",
      fr: "Préparation & Tutorat IELTS — Bannière Promotionnelle Assistée par IA"
    },
    category: {
      en: "Educational Banner & AI Branding",
      fr: "Bannière Éducative & Branding IA"
    },
    description: {
      en: "A high-impact educational ad banner tailored for an IELTS tutoring institute, crafted for high school and university students preparing for IELTS exams. Created with an AI-assisted creative workflow that reinforces institutional branding and direct visual storytelling to immediately communicate active learning, academic immersion, and test readiness.",
      fr: "Bannière promotionnelle éducative pour un institut de tutorat préparant à l'examen IELTS, conçue pour les lycéens et étudiants universitaires. Intègre un flux créatif assisté par IA renforçant le branding institutionnel et une communication visuelle directe évoquant l'apprentissage intensif et la réussite."
    },
    tags: ["IELTS Tutoring", "Educational Banner", "AI-Assisted Workflow", "Student Branding", "Direct Visual Communication", "Portrait Feed"],
    previewType: "promotional_banner",
    image: "/ielts-ad-1090.png",
    palette: [
      { hex: "#1D4ED8", name: "Academic Blue" },
      { hex: "#0F172A", name: "Institutional Slate" },
      { hex: "#F59E0B", name: "Focus Amber" },
      { hex: "#FFFFFF", name: "Clarity White" },
      { hex: "#64748B", name: "Neutral Slate" }
    ],
    specs: [
      { label: { en: "Format", fr: "Format" }, value: "1147 × 1371 px (Portrait Social & Feed Ad)" },
      { label: { en: "Workflow", fr: "Méthodologie" }, value: "AI Generative Concept + Adobe Photoshop CC" },
      { label: { en: "Target Audience", fr: "Public Cible" }, value: "High School & University Students (Academic & General IELTS)" },
      { label: { en: "Core Strategy", fr: "Stratégie Clé" }, value: "Direct Visual Communication of Learning & Institutional Trust" }
    ],
    highlights: {
      en: [
        "AI-assisted generative concept workflow used to rapidly explore and refine focused study atmospheres and authentic student environments",
        "Direct visual communication conveying active learning, exam dedication, and academic growth without distracting clutter",
        "Clear institutional branding hierarchy establishing academic authority, trust, and test prep rigor",
        "High-density portrait layout calibrated for social media feeds, student outreach campaigns, and online ads"
      ],
      fr: [
        "Flux de travail créatif assisté par IA pour explorer rapidement des environnements d'étude stimulants et immersifs",
        "Communication visuelle directe traduisant l'apprentissage actif, la rigueur et la réussite aux examens sans surcharge",
        "Hiérarchie de marque institutionnelle affirmant l'autorité pédagogique et la confiance",
        "Format vertical haute définition optimisé pour les réseaux sociaux et les campagnes de recrutement d'étudiants"
      ]
    }
  },
  {
    id: "withlove-postpartum-banner",
    title: {
      en: "WITH LOVE — Postpartum Care & Recovery Product Promotional Banner",
      fr: "WITH LOVE — Bannière Promotionnelle Soins & Récupération Post-Partum"
    },
    category: {
      en: "Social Media & Product Banners",
      fr: "Bannières Produits & Réseaux Sociaux"
    },
    description: {
      en: "A nurturing promotional campaign banner tailored for new mothers navigating fourth-trimester recovery, featuring gentle herbal remedies, comfort kits, and reassuring maternal typography.",
      fr: "Une bannière de campagne promotionnelle dédiée aux nouvelles mères durant le quatrième trimestre, mettant en valeur des soins réparateurs, des kits de confort et une typographie maternelle bienveillante."
    },
    tags: ["Maternal Care", "Postpartum Recovery", "Social Media Banner", "Product Promotion", "4:5 Feed"],
    previewType: "promotional_banner",
    image: "/withlove.png",
    palette: [
      { hex: "#D63092", name: "Blush Orchid" },
      { hex: "#A10103", name: "Warm Berry" },
      { hex: "#FF8B23", name: "Gentle Coral" },
      { hex: "#5C9A9C", name: "Soothing Sage" },
      { hex: "#D3B8B6", name: "Soft Cashmere" }
    ],
    specs: [
      { label: { en: "Format", fr: "Format" }, value: "1080 × 1350 px (4:5 Social Feed Standard)" },
      { label: { en: "Software", fr: "Logiciels" }, value: "Adobe Illustrator CC + Photoshop CC" },
      { label: { en: "Color Profile", fr: "Profil Colorimétrique" }, value: "sRGB • 300 DPI High-Density" },
      { label: { en: "Campaign", fr: "Campagne" }, value: "Fourth Trimester Maternal Recovery Essentials" }
    ],
    highlights: {
      en: [
        "Warm, reassuring color story crafted to alleviate maternal anxiety and foster comfort",
        "Clear visual hierarchy highlighting sitz soaks, herbal recovery teas, and pelvic wellness essentials",
        "Conversion-optimized promotional framing suited for Instagram feeds and e-commerce hero placements",
        "Empathetic, reassuring typography balancing clinical safety with gentle maternal warmth"
      ],
      fr: [
        "Harmonie de couleurs douces et rassurantes réduisant le stress maternel et apportant du réconfort",
        "Hiérarchie visuelle claire mettant en valeur les soins réparateurs et les essentiels d'allaitement",
        "Mise en page optimisée pour la conversion sur les flux Instagram et bannières e-commerce",
        "Typographie bienveillante alliant rigueur des soins et douceur maternelle"
      ]
    }
  },
  {
    id: "la-pearly-perfume-packaging",
    title: {
      en: "LA PEARLY — Fragrance Packaging & Structural Dielines",
      fr: "LA PEARLY — Packaging de Parfum & Lignes de Découpe"
    },
    category: {
      en: "Packaging Design & Dielines",
      fr: "Design de Packaging & Découpe"
    },
    description: {
      en: "Luxury fragrance packaging artwork, custom die-cut knife lines, and commercial print finishing specifications for Aqua Arena and Pretty Pony.",
      fr: "Création graphique de packaging de parfum de luxe, lignes de découpe sur mesure et spécifications de finition d'impression pour Aqua Arena et Pretty Pony."
    },
    tags: ["Packaging Design", "Dieline Blueprint", "Foil Stamping", "Spot UV", "Print Production"],
    previewType: "packaging_dieline",
    palette: [
      { hex: "#0284C7", name: "Oceanic Cyan" },
      { hex: "#F43F5E", name: "Rose Bloom" },
      { hex: "#E2E8F0", name: "Silver Foil" },
      { hex: "#F59E0B", name: "Gold Hot Stamp" },
      { hex: "#1C1917", name: "Obsidian Ink" }
    ],
    specs: [
      { label: { en: "Software", fr: "Logiciels" }, value: "Adobe Illustrator CC + Photoshop CC" },
      { label: { en: "Substrate", fr: "Support" }, value: "380 GSM SBS Ivory Board" },
      { label: { en: "Finishings", fr: "Finitions" }, value: "Matte Lamination + Silver/Rose Gold Foil + Spot UV" },
      { label: { en: "Resolution", fr: "Résolution" }, value: "300 DPI Commercial Print Ready" }
    ],
    highlights: {
      en: [
        "Calibrated crease scores and radius cut lines preventing substrate tearing during assembly",
        "Multi-panel seamless continuous wrap-around artwork with foil stamping accents",
        "Clear die-cut aperture window engineered for perfume flacon visibility",
        "Complete commercial print production specification sheets"
      ],
      fr: [
        "Rainures de pliage calibrées et lignes de découpe empêchant la déchirure du carton",
        "Illustration panoramique continue sur 4 panneaux avec dorure à chaud",
        "Fenêtre ajourée découpée à l'emporte-pièce pour la visibilité du flacon",
        "Fiches techniques complètes prêtes pour l'imprimerie industrielle"
      ]
    }
  },
  {
    id: "apricity-brand-identity",
    title: {
      en: "Apricity Studio — Visual Identity & System",
      fr: "Apricity Studio — Identité Visuelle & Système"
    },
    category: {
      en: "Brand Identity & Typography",
      fr: "Identité de Marque & Typographie"
    },
    description: {
      en: "A deliberate visual identity balancing warm golden radiance with editorial restraint. Anchored by the 8-ray geometric sun emblem, high-contrast serif typography, and tactile tactile micro-borders.",
      fr: "Une identité visuelle délibérée équilibrant l'éclat doré chaleureux avec la retenue éditoriale. Ancrée par l'emblème solaire géométrique à 8 rayons, une typographie avec empattements à fort contraste et des micro-bordures tactiles."
    },
    tags: ["Brand Identity", "Design System", "Editorial Typography", "Monogram"],
    previewType: "palette_and_spec",
    palette: [
      { hex: "#FFFCF9", name: "Warm Canvas" },
      { hex: "#F59E0B", name: "Amber Sun" },
      { hex: "#D97706", name: "Golden Shadow" },
      { hex: "#1C1917", name: "Deep Charcoal" },
      { hex: "#78716C", name: "Stone Slate" }
    ],
    specs: [
      { label: { en: "Display Font", fr: "Police de Titre" }, value: "Playfair Display (Italic & Semibold)" },
      { label: { en: "Body Font", fr: "Police de Texte" }, value: "Inter Sans (Light & Medium)" },
      { label: { en: "Scale Ratio", fr: "Ratio d'Échelle" }, value: "1.25 Major Third" },
      { label: { en: "Symbolic Motif", fr: "Motif Symbolique" }, value: "8-Ray Radiant Solar Icon" }
    ],
    highlights: {
      en: [
        "Crafted a distinctive sun mark reflecting 'apricity' (the warmth of the sun in winter)",
        "Curated a warm off-white canvas (#FFFCF9) paired with obsidian black text for zero-glare readability",
        "Developed custom neo-brutalist offset drop-shadow specs (4px solid offset)",
        "Engineered strict spacing rhythms and mathematical border radiuses"
      ],
      fr: [
        "Création d'un symbole solaire distinctif reflétant l'apricité (la chaleur du soleil en hiver)",
        "Toile blanc cassé chaleureuse (#FFFCF9) associée à un texte noir obsidienne pour une lisibilité sans reflets",
        "Spécifications d'ombres portées décalées néo-brutalistes sur mesure (décalage solide de 4 px)",
        "Rythmes d'espacement stricts et rayons de bordure mathématiques"
      ]
    }
  },
  {
    id: "moody-child-stickers",
    title: {
      en: "Moody Child — Y2K Stickers & Vector Asset Pack",
      fr: "Moody Child — Autocollants Y2K & Pack Vectoriel"
    },
    category: {
      en: "Digital Asset & Iconography",
      fr: "Ressource Numérique & Iconographie"
    },
    description: {
      en: "A vibrant digital sticker collection and tactile badge system inspired by early-2000s zines, metallic sticker sheets, and cyber-grunge aesthetics for mental health check-ins.",
      fr: "Une collection d'autocollants numériques éclatante et un système de badges tactiles inspirés des fanzines des années 2000, des feuilles d'autocollants métallisés et de l'esthétique cyber-grunge pour le suivi émotionnel."
    },
    tags: ["Vector Illustration", "Y2K Aesthetic", "Die-Cut Badges", "Custom SVGs"],
    previewType: "sticker_sheet",
    palette: [
      { hex: "#A855F7", name: "Cyber Violet" },
      { hex: "#EC4899", name: "Neon Rose" },
      { hex: "#3B82F6", name: "Digital Blue" },
      { hex: "#10B981", name: "Electric Mint" },
      { hex: "#FACC15", name: "Acid Yellow" }
    ],
    specs: [
      { label: { en: "Format", fr: "Format" }, value: "Scalable Vector Graphics (SVG)" },
      { label: { en: "Visual Style", fr: "Style Visuel" }, value: "Cyber Y2K, Holographic, Neo-Brutalism" },
      { label: { en: "Stroke & Edge", fr: "Contour & Bord" }, value: "2.5px solid borders + white die-cut margins" }
    ],
    highlights: {
      en: [
        "Procedural holographic gradients simulating collectible trading card foils",
        "Tactile paper cut-out offset drop shadows for authentic collage feel",
        "Expressive character mood badges transforming clinical logging into gamified collectibles",
        "Scalable across all resolutions without quality loss"
      ],
      fr: [
        "Dégradés holographiques procéduraux simulant des cartes à collectionner",
        "Ombres portées simulant le papier découpé pour une sensation de collage authentique",
        "Badges d'humeur expressifs transformant la journalisation clinique en objets de collection",
        "Mise à l'échelle sur toutes les résolutions sans perte de qualité"
      ]
    }
  },
  {
    id: "editorial-visual-graphics",
    title: {
      en: "Editorial Layouts & Digital Marketing Assets",
      fr: "Mises en Page Éditoriales & Graphismes Digitaux"
    },
    category: {
      en: "Editorial & Visual Media",
      fr: "Éditorial & Médias Visuels"
    },
    description: {
      en: "A suite of clean typography layouts, social media collateral, promotional banners, and vector infographic diagrams adhering to international Swiss grid disciplines.",
      fr: "Une suite de mises en page typographiques soignées, d'éléments pour réseaux sociaux, de bannières promotionnelles et de diagrammes infographiques vectoriels."
    },
    tags: ["Editorial Design", "Swiss Grid", "Social Media Graphics", "Typography"],
    previewType: "editorial_cards",
    palette: [
      { hex: "#18181B", name: "Pitch Black" },
      { hex: "#E4E4E7", name: "Zinc Light" },
      { hex: "#F59E0B", name: "Warm Accent" },
      { hex: "#71717A", name: "Neutral Medium" }
    ],
    specs: [
      { label: { en: "Grid System", fr: "Système de Grille" }, value: "12-Column Modular Swiss Grid" },
      { label: { en: "Contrast Ratio", fr: "Ratio de Contraste" }, value: "WCAG AAA 7:1 Compliant" },
      { label: { en: "Export Formats", fr: "Formats d'Exportation" }, value: "SVG, High-res WebP, Print-Ready PDF" }
    ],
    highlights: {
      en: [
        "Strict typographical hierarchy and optical kerning alignment",
        "Balanced negative space designed to command user attention",
        "Consistent brand voice across multiple digital touchpoints",
        "Reusable layout templates for rapid social campaign creation"
      ],
      fr: [
        "Hiérarchie typographique stricte et alignement optique du crénage",
        "Espace négatif équilibré conçu pour capter l'attention de l'utilisateur",
        "Voix de marque cohérente sur tous les points de contact numériques",
        "Modèles de mise en page réutilisables pour la création rapide de campagnes"
      ]
    }
  }
];

export const marketingWorkflowSteps: MarketingWorkflowStep[] = [
  {
    stepNumber: "01",
    id: "business-analysis",
    title: {
      en: "Business & Value Proposition Analysis",
      fr: "Analyse d'Entreprise & Proposition de Valeur"
    },
    subtitle: {
      en: "Deconstruct product-market fit, unit economics, and limited-budget viability",
      fr: "Déconstruire l'adéquation produit-marché et la viabilité en budget limité"
    },
    description: {
      en: "Deep-dive analysis into the core offering, unique selling points (USP), profit margins, and capacity constraints before spending a single ad dollar. In limited-budget scenarios, every cent must drive direct inquiries rather than vanity brand awareness.",
      fr: "Analyse approfondie de l'offre, des points forts uniques (USP) et de la rentabilité avant d'investir le moindre euro. En budget limité, chaque centime doit générer des demandes directes."
    },
    coreConcepts: [
      { en: "Unique Selling Proposition (USP) Definition", fr: "Définition de la proposition de valeur unique (USP)" },
      { en: "Unit Economics & Customer Lifetime Value (LTV)", fr: "Économie unitaire et rentabilité par client" },
      { en: "Strict Budget Allocation & ROAS Benchmarks", fr: "Allocation stricte du budget et seuil de rentabilité" }
    ],
    tactics: [
      {
        name: { en: "Offer Packaging & Pricing Sweet-Spot", fr: "Packaging de l'offre et positionnement prix" },
        description: {
          en: "Structuring services into irresistible, transparent packages that answer the customer's primary anxiety immediately.",
          fr: "Structurer des offres claires et transparentes qui lèvent immédiatement les doutes des clients."
        }
      },
      {
        name: { en: "Capacity & Response Speed Audit", fr: "Audit de capacité et réactivité de réponse" },
        description: {
          en: "Ensuring team readiness to respond to ad messages within 5-15 minutes, which directly dictates ad conversion rates.",
          fr: "S'assurer que l'équipe répond aux messages publicitaires en moins de 15 minutes pour maximiser la conversion."
        }
      }
    ],
    appliedToRealEstate: {
      en: "Real Estate (Ad 1): Analyzed private pool villa with 4 bedrooms, 3 bathrooms, spiral water slide, and BBQ grill. Focused on group affordability (cost per head) and weekend party vibe rather than generic luxury accommodation.",
      fr: "Immobilier (Ad 1) : Analyse d'une villa avec piscine privée, 4 chambres, toboggan spiralé et barbecue. Accent mis sur le coût par personne et les soirées conviviales."
    },
    appliedToLanguageCourse: {
      en: "Language Course (Ad 2): Positioned an intensive 1-on-1 IELTS online program (24 hours / 11 classes at ฿5,990) taught by a Harvard University certified instructor, addressing students' fear of failing university entrance cutoffs.",
      fr: "Cours de Langue (Ad 2) : Positionnement d'un programme IELTS en ligne 1-sur-1 intensif (24h pour 5 990 ฿) dispensé par un tuteur certifié Harvard University."
    }
  },
  {
    stepNumber: "02",
    id: "target-audience",
    title: {
      en: "Target Audience & Persona Mapping",
      fr: "Ciblage d'Audience & Cartographie des Personas"
    },
    subtitle: {
      en: "Define laser-targeted buyer profiles by urgency, geography, and purchasing intent",
      fr: "Définir des profils d'acheteurs ultra-ciblés selon l'urgence et le pouvoir d'achat"
    },
    description: {
      en: "Segmenting audiences based on actual commercial intent, geographic proximity, and timing triggers. Eliminating broad, wasteful audience groups in favor of high-propensity buyers who need a solution today.",
      fr: "Segmentation basée sur l'intention d'achat réelle, la proximité géographique et le timing. Élimination des cibles trop larges au profit d'acheteurs à fort besoin immédiat."
    },
    coreConcepts: [
      { en: "High-Intent Behavioral Demographics", fr: "Démographie comportementale à forte intention" },
      { en: "Geolocation & Proximity Radius Filtering", fr: "Filtrage géographique et rayon de proximité" },
      { en: "Pain Point & Urgency Trigger Identification", fr: "Identification des déclencheurs d'urgence et frustrations" }
    ],
    tactics: [
      {
        name: { en: "Exclusion of Low-Quality Audiences", fr: "Exclusion des audiences non qualifiées" },
        description: {
          en: "Filtering out non-buyers, irrelevant age brackets, and distant regions to prevent accidental ad clicks and budget drain.",
          fr: "Filtrage des tranches d'âge non pertinentes et régions hors zone pour préserver le budget publicitaire."
        }
      },
      {
        name: { en: "Timing-Trigger Matching", fr: "Synchronisation sur les temps forts du calendrier" },
        description: {
          en: "Aligning campaign launches with seasonal windows: school breaks for education, weekends/holidays for rental properties.",
          fr: "Lancer les campagnes lors des fenêtres clés : vacances scolaires pour la formation, week-ends pour les locations."
        }
      }
    ],
    appliedToRealEstate: {
      en: "Real Estate (Ad 1): Targeted young adults, friend circles, and families looking for private weekend getaways with photogenic 'Instagrammable' corners and complete party amenities within accessible driving radius.",
      fr: "Immobilier (Ad 1) : Ciblage des groupes d'amis et familles cherchant une escapade le week-end avec spots photos instagrammables et barbecue."
    },
    appliedToLanguageCourse: {
      en: "Language Course (Ad 2): Targeted high school and university students preparing for international university admission during school breaks, plus working professionals aiming for overseas scholarships or career advancement.",
      fr: "Cours de Langue (Ad 2) : Ciblage des lycéens et étudiants préparant les admissions universitaires internationales pendant les vacances, et professionnels visant une promotion."
    }
  },
  {
    stepNumber: "03",
    id: "keyword-research",
    title: {
      en: "Keyword Research & High-Intent Selection",
      fr: "Recherche de Mots-Clés & Sélection à Forte Intention"
    },
    subtitle: {
      en: "Extract high-conversion search phrases and commercial intent keywords",
      fr: "Extraire les expressions de recherche transactionnelles à fort taux de conversion"
    },
    description: {
      en: "Selecting high-intent, long-tail keywords that signal immediate readiness to book or buy. These terms serve dual purposes: structuring organic articles for ranking and fueling exact-match hooks for social ad copywriting.",
      fr: "Sélection de mots-clés longue traîne à forte intention transactionnelle. Ces termes structurent le contenu SEO et servent d'accroches percutantes dans les publicités."
    },
    coreConcepts: [
      { en: "Commercial vs. Informational Intent Sorting", fr: "Tri d'intention commerciale vs informationnelle" },
      { en: "Long-Tail Specificity over Broad Buzzwords", fr: "Spécificité longue traîne plutôt que termes génériques" },
      { en: "Semantic Search & Social Copy Keyword Infusion", fr: "Infusion de mots-clés sémantiques dans les accroches" }
    ],
    tactics: [
      {
        name: { en: "Search Query Intent Scoring", fr: "Scoring d'intention des requêtes de recherche" },
        description: {
          en: "Prioritizing keywords containing buying indicators (price, rental, private pool, 1-on-1, course, schedule).",
          fr: "Prioriser les mots-clés avec intentions d'achat (prix, location, piscine privée, cours particulier)."
        }
      },
      {
        name: { en: "Negative Keyword & Spam Filtering", fr: "Filtrage des termes non pertinents" },
        description: {
          en: "Discarding free seekers ('free download', 'cheapest hostel') to maintain high lead quality.",
          fr: "Éliminer les requêtes hors sujet ou gratuites pour garantir la qualité des prospects."
        }
      }
    ],
    appliedToRealEstate: {
      en: "Real Estate (Ad 1): Selected high-intent phrases: 'private pool villa', 'spiral slide pool', 'pool party BBQ', '4-bedroom villa'.",
      fr: "Immobilier (Ad 1) : Mots-clés sélectionnés : 'villa avec piscine privée', 'toboggan géant', 'location fête barbecue', 'villa 4 chambres'."
    },
    appliedToLanguageCourse: {
      en: "Language Course (Ad 2): Selected specific terms: '1-on-1 IELTS tutor', 'online IELTS preparation', 'IELTS Reading techniques', 'holiday English course'.",
      fr: "Cours de Langue (Ad 2) : Mots-clés : 'cours IELTS particulier en ligne', 'préparation IELTS intensive', 'technique lecture IELTS', 'stage anglais vacances'."
    }
  },
  {
    stepNumber: "04",
    id: "content-and-copywriting",
    title: {
      en: "Content & Copywriting Architecture",
      fr: "Rédaction de Contenu & Copywriting Persuasif"
    },
    subtitle: {
      en: "Craft value-first articles and scroll-stopping social hooks that build trust",
      fr: "Rédiger des articles à forte valeur ajoutée et des accroches sociales captivantes"
    },
    description: {
      en: "Transforming dry product specs into compelling narratives. The copy must hook attention in 3 seconds, answer core questions upfront (pricing, capacity, instructor credentials), and make taking action effortless.",
      fr: "Transformer des caractéristiques techniques en récits convaincants. L'accroche capte en 3 secondes, répond aux questions essentielles (prix, capacité, diplômes) et pousse au passage à l'action."
    },
    coreConcepts: [
      { en: "The 3-Second Social Hook Principle", fr: "Principe de l'accroche sociale en 3 secondes" },
      { en: "Transparent Value Presentation (Zero Ambiguity)", fr: "Présentation transparente de la valeur (zéro flou)" },
      { en: "Frictionless Call-to-Action (Send Message CTA)", fr: "Appel à l'action direct et sans friction (Bouton Message)" }
    ],
    tactics: [
      {
        name: { en: "Structure: Hook → Story → Proof → Offer → CTA", fr: "Structure : Accroche → Histoire → Preuve → Offre → CTA" },
        description: {
          en: "Guiding the reader from immediate visual interest to logical trust proof, finishing with a clear direct message prompt.",
          fr: "Guider le lecteur de l'intérêt visuel immédiat à la preuve rationnelle, conclu par une invitation à échanger par message."
        }
      },
      {
        name: { en: "Social Proof & Authenticity Highlights", fr: "Preuve sociale et mise en avant d'éléments réels" },
        description: {
          en: "Using genuine unpolished photos, verified credentials, and real customer scenarios over artificial stock imagery.",
          fr: "Privilégier photos réelles, diplômes vérifiés et mises en situation authentiques plutôt que des banques d'images génériques."
        }
      }
    ],
    appliedToRealEstate: {
      en: "Real Estate (Ad 1): Copy opened with sensory details: 'Private pool villa with oversized pool, iconic spiral slide, cozy atmosphere, pristine hygiene, and photogenic corners...' emphasizing cleanliness, photo spots, and full party amenities.",
      fr: "Immobilier (Ad 1) : Accroche sensorielle valorisant la propreté, la grande piscine, le toboggan, les spots photos tendance et le barbecue pour les soirées."
    },
    appliedToLanguageCourse: {
      en: "Language Course (Ad 2): Copy leveraged seasonal urgency and prestige: 'School break is here! Master IELTS 1-on-1 Online with an instructor certified with an English Certificate from Harvard University, USA • 11 classes, 24 hours for only 5,990.-' with crystal-clear syllabus breakdown.",
      fr: "Cours de Langue (Ad 2) : Accroche basée sur l'urgence des vacances et le prestige du tuteur certifié Harvard University avec détail des 11 cours pour 5 990 ฿."
    }
  },
  {
    stepNumber: "05",
    id: "social-media-ads",
    title: {
      en: "Targeted Social Media Ads (Limited Budget)",
      fr: "Publicités Ciblées sur Réseaux Sociaux (Budget Maîtrisé)"
    },
    subtitle: {
      en: "Execute Facebook Ad campaigns with micro-budgets and direct messenger conversion",
      fr: "Déployer des campagnes Facebook Ads en micro-budget axées sur la messagerie directe"
    },
    description: {
      en: "Launching tightly scoped Facebook Ads with the 'Get More Messages' campaign objective. Bypassing complex drop-off funnels to start real conversations instantly. Monitored daily to maintain low Cost Per Messaging Started.",
      fr: "Lancer des campagnes Facebook Ads ciblées avec l'objectif 'Plus de messages'. Éviter les déperditions de tunnel en engageant la discussion directement avec des coûts par prospect optimisés."
    },
    coreConcepts: [
      { en: "Direct-to-Messenger Campaign Objective", fr: "Objectif de campagne direct vers la messagerie" },
      { en: "Micro-Budget Efficiency Testing (฿100 - ฿132/day)", fr: "Tests d'efficacité en micro-budget (100 ฿ - 132 ฿/jour)" },
      { en: "Cost Per Messaging Started Optimization", fr: "Optimisation du coût par conversation engagée" }
    ],
    tactics: [
      {
        name: { en: "Fast-Paced Creative & Video Teasers", fr: "Créations visuelles dynamiques et vidéos courtes" },
        description: {
          en: "Pairing real villa walk-throughs or tutor introduction snippets with bold text overlays to capture thumb scroll.",
          fr: "Associer visites réelles de villa ou présentations du formateur avec textes lisibles pour arrêter le défilement."
        }
      },
      {
        name: { en: "Automated Messenger Greeting & FAQ Bot", fr: "Message d'accueil automatique et FAQ instantanée" },
        description: {
          en: "Setting up instant quick-reply buttons in Messenger (dates availability, pricing, class schedule) to capture leads 24/7.",
          fr: "Configurer des boutons de réponse rapide dans Messenger pour qualifier et répondre aux prospects 24h/24."
        }
      }
    ],
    appliedToRealEstate: {
      en: "Real Estate (Ad 1 Result): Executed with a lifetime budget of just ฿100.00 over 2 days. Generated 12 messaging conversations started at an astonishing ฿8.33 per lead, reaching 1,243 targeted users.",
      fr: "Immobilier (Ad 1 - Résultat) : Déployé avec un budget total de 100 ฿ sur 2 jours. 12 conversations engagées à seulement 8,33 ฿ par prospect, touchant 1 243 personnes qualifiées."
    },
    appliedToLanguageCourse: {
      en: "Language Course (Ad 2 Result): Executed with a daily budget of ฿132.00 over 8 days. Generated 24 qualified messaging inquiries at ฿43.57 per student lead for a ฿5,990 course package, achieving 9,057 total views.",
      fr: "Cours de Langue (Ad 2 - Résultat) : Déployé à 132 ฿/jour sur 8 jours. 24 prospects qualifiés à 43,57 ฿ par lead pour une formation à 5 990 ฿, totalisant 9 057 impressions."
    }
  }
];

export const facebookAdCaseStudies: FacebookAdCaseStudy[] = [
  {
    id: "ad-1-real-estate-rental",
    adNumber: "Ad 1",
    businessType: {
      en: "Real Estate Rental Business (Private Pool Villa)",
      fr: "Location Immobilière (Villa Privée avec Piscine)"
    },
    tagline: {
      en: "Micro-Budget Facebook Ad for Vacation Property Rental",
      fr: "Campagne Facebook Ads à Micro-Budget pour Location de Vacances"
    },
    image: "/ad-1.png",
    goal: "Get more messages",
    status: "Completed",
    budgetType: {
      en: "Total Budget (Limited)",
      fr: "Budget Total (Limité)"
    },
    budgetValue: "฿100.00",
    duration: {
      en: "2 days",
      fr: "2 jours"
    },
    metrics: {
      messagingStarted: 12,
      costPerMessage: "฿8.33",
      reach: 1243,
      views: 1877,
      videoPlays: 9
    },
    targetAudience: {
      demographics: {
        en: "Ages 21–38, groups of friends, young working professionals, and families in surrounding provinces looking for weekend getaways.",
        fr: "21–38 ans, groupes d'amis, jeunes actifs et familles des provinces voisines cherchant une escapade le week-end."
      },
      interests: [
        { en: "Travel & Vacation Rentals", fr: "Voyages & Locations de vacances" },
        { en: "Pool Parties & Weekend Trips", fr: "Piscines & Week-ends détente" },
        { en: "Barbecue & Social Gathering", fr: "Barbecue & Événements conviviaux" },
        { en: "Photography & Instagrammable Spots", fr: "Photographie & Lieux branchés" }
      ],
      painPointSolved: {
        en: "Finding a clean, private, fully equipped party villa with spiral slide and BBQ that accommodates large groups affordably without hotel restrictions.",
        fr: "Trouver une villa propre, privée et équipée avec grand toboggan et barbecue pour groupe à tarif accessible sans contraintes d'hôtel."
      }
    },
    keywordStrategy: {
      highIntentKeywords: [
        "Private Pool Villa",
        "Spiral Slide Swimming Pool",
        "Pool Party & BBQ Grill",
        "4-Bedroom Vacation Rental",
        "Instagrammable Stay"
      ],
      explanation: {
        en: "Integrated highly specific amenities directly into the post text and headline so that users searching or browsing immediately see exact features.",
        fr: "Intégration d'équipements très précis dans le texte pour capter immédiatement l'attention des utilisateurs intéressés par ce type de séjour."
      }
    },
    copywritingExcerpt: {
      headline: "Private Pool Villa with Large Swimming Pool & Spiral Slide",
      body: "Relaxing atmosphere, clean accommodations, photogenic photo spots, and full amenities. Evening pool party with large BBQ grill, 4 bedrooms, 3 bathrooms, and 1 fully equipped kitchen.",
      cta: "Send Message (Direct Booking Inquiries)"
    },
    keyTakeaways: [
      {
        en: "Remarkable Cost Per Acquisition: Only ฿8.33 per messaging conversation, proving that even a ฿100 test budget can yield 12 direct booking inquiries.",
        fr: "Coût par prospect exceptionnel : Seulement 8,33 ฿ par message, prouvant qu'un budget test de 100 ฿ peut générer 12 demandes directes."
      },
      {
        en: "Zero-Friction Inquiries: Direct Messenger CTA eliminated landing page drop-offs, allowing immediate host-to-guest booking confirmation.",
        fr: "Contact direct sans friction : Le bouton Messenger élimine les abandons et permet de confirmer les dates instantanément."
      },
      {
        en: "Visual Feature Anchoring: Highlighting the spiral slide and BBQ amenities solved the exact group activity search criteria.",
        fr: "Mise en avant visuelle clé : Le toboggan et le barbecue répondent exactement aux critères des groupes d'amis."
      }
    ]
  },
  {
    id: "ad-2-language-course",
    adNumber: "Ad 2",
    businessType: {
      en: "Language Education Course (1-on-1 IELTS Online)",
      fr: "Cours de Langue (IELTS 1-sur-1 en Ligne)"
    },
    tagline: {
      en: "High-ROI Facebook Ad for Premium 1-on-1 English Tutoring",
      fr: "Campagne Facebook Ads à Fort ROI pour Cours Particuliers d'Anglais"
    },
    image: "/ad-2.png",
    goal: "Get more messages",
    status: "Completed",
    budgetType: {
      en: "Daily Budget (Controlled)",
      fr: "Budget Quotidien (Maîtrisé)"
    },
    budgetValue: "฿132.00 / day",
    duration: {
      en: "8 days",
      fr: "8 jours"
    },
    metrics: {
      messagingStarted: 24,
      costPerMessage: "฿43.57",
      reach: 3328,
      views: 9057
    },
    targetAudience: {
      demographics: {
        en: "Ages 16–28, high school seniors, university undergrads, and young professionals aiming for international university admission or overseas careers.",
        fr: "16–28 ans, lycéens, étudiants universitaires et jeunes professionnels préparant des études internationales ou un départ à l'étranger."
      },
      interests: [
        { en: "International English Language Testing System (IELTS)", fr: "Test officiel IELTS" },
        { en: "Study Abroad & International Programs", fr: "Études à l'étranger & Programmes internationaux" },
        { en: "English Language Learning & Grammar", fr: "Apprentissage de l'anglais & Grammaire" },
        { en: "Harvard University & Top Higher Education", fr: "Universités internationales & Harvard" }
      ],
      painPointSolved: {
        en: "Students wasting months in crowded group tutoring without personalized feedback, needing an intensive 1-on-1 mentor to hit IELTS band 6.5–7.5 fast.",
        fr: "Élèves perdant du temps dans des cours collectifs bondés sans suivi personnalisé, ayant besoin d'un mentor individuel pour valider leur score."
      }
    },
    keywordStrategy: {
      highIntentKeywords: [
        "1-on-1 Online IELTS Tutoring",
        "School Break Intensive IELTS",
        "Harvard Certified Instructor",
        "IELTS Reading Techniques",
        "Grammar & Vocabulary for IELTS"
      ],
      explanation: {
        en: "Positioned during the school break window when students actively search for test prep, pairing tutor credentials with concrete curriculum modules.",
        fr: "Positionné pendant les vacances scolaires avec une mise en avant du diplôme Harvard et du programme de 24 heures bien détaillé."
      }
    },
    copywritingExcerpt: {
      headline: "School Break is Here — Learn IELTS 1-on-1 Online!",
      body: "Taught by an instructor certified with an English Certificate from Harvard University, USA. 11 classes, 24 hours for only ฿5,990. Module 1: Grammar & Vocabulary for IELTS. Module 2: Reading techniques and rapid comprehension.",
      cta: "Send Message (Free Consultation & Enrollment)"
    },
    keyTakeaways: [
      {
        en: "Outstanding Lead Efficiency: Generated 24 qualified student inquiries at ฿43.57 per message for a ฿5,990 high-ticket course, delivering huge ROI potential.",
        fr: "Rapport coût/prospect remarquable : 24 demandes qualifiées à 43,57 ฿ par message pour une offre à 5 990 ฿, offrant une rentabilité très élevée."
      },
      {
        en: "Seasonal Urgency Hook: Capitalizing on the school break season triggered immediate parental and student enrollment decisions.",
        fr: "Déclencheur d'urgence saisonnier : L'accroche sur les vacances a provoqué une prise de décision rapide des parents et étudiants."
      },
      {
        en: "Elite Credibility Factor: Highlighting the instructor's Harvard University credentials removed trust barriers instantly.",
        fr: "Crédibilité immédiate : La certification Harvard du formateur a levé tous les freins de confiance."
      }
    ]
  }
];

// Backward compatibility export for components referencing onlineMarketingStrategies
export const onlineMarketingStrategies: OnlineMarketingStrategy[] = [
  {
    id: "real-estate-micro-budget-ad",
    title: {
      en: "Real Estate Rental Ad Campaign (Ad 1)",
      fr: "Campagne Publicitaire Location Immobilière (Ad 1)"
    },
    subtitle: {
      en: "Micro-budget Facebook ad generating 12 inquiries at ฿8.33/lead",
      fr: "Campagne Facebook à micro-budget générant 12 prospects à 8,33 ฿/lead"
    },
    category: {
      en: "Real Estate Rental",
      fr: "Location Immobilière"
    },
    description: {
      en: "Real Facebook ad campaign for a private pool villa property. Executed with a total budget of only ฿100 over 2 days, yielding 12 direct messenger conversations and reaching 1,243 targeted vacationers.",
      fr: "Vraie campagne Facebook Ads pour une villa avec piscine privée. Réalisée avec un budget total de 100 ฿ sur 2 jours, générant 12 conversations directes et 1 243 personnes atteintes."
    },
    tags: ["Facebook Ads", "Real Estate Rental", "Cost ฿8.33/Lead", "Budget ฿100", "Messenger Ads"],
    metrics: [
      { label: { en: "Cost Per Lead", fr: "Coût Par Prospect" }, value: "฿8.33", subtext: { en: "Per Message Started", fr: "Par Message Reçu" } },
      { label: { en: "Inquiries Started", fr: "Demandes Reçues" }, value: "12 Leads", subtext: { en: "In 2 Days", fr: "En 2 Jours" } },
      { label: { en: "Total Budget", fr: "Budget Total" }, value: "฿100.00", subtext: { en: "Limited Budget", fr: "Budget Maîtrisé" } }
    ],
    tactics: [
      {
        name: { en: "Sensory Feature-Loaded Copywriting", fr: "Copywriting Sensoriel Axé sur les Équipements" },
        description: {
          en: "Highlighted the private pool, spiral slide, BBQ grill, and 4 bedrooms immediately in the post caption to attract groups.",
          fr: "Mise en avant immédiate de la piscine privée, du toboggan, du barbecue et des 4 chambres pour attirer les groupes."
        },
        impact: { en: "High conversion rate on small reach", fr: "Fort taux de conversion sur audience ciblée" }
      },
      {
        name: { en: "Direct Messenger Conversion CTA", fr: "Bouton d'Appel Direct Messenger" },
        description: {
          en: "Connected users straight to the host inbox with zero intermediate landing page friction.",
          fr: "Connexion directe avec l'hôte dans la messagerie sans friction de page intermédiaire."
        },
        impact: { en: "Instant date checking & closing", fr: "Réservation et vérification des dates immédiates" }
      },
      {
        name: { en: "Targeted Geolocation & Friend Circles", fr: "Ciblage Géolocalisé & Groupes d'Amis" },
        description: {
          en: "Filtered to travelers looking for holiday gatherings and party stays within driving distance.",
          fr: "Filtrage ciblé sur les voyageurs cherchant un séjour festif accessible en voiture."
        },
        impact: { en: "1,243 targeted accounts reached", fr: "1 243 comptes qualifiés touchés" }
      }
    ],
    caseStudyContext: {
      en: "Verified back-office ad manager stats from live Facebook Ad campaign (Ad 1).",
      fr: "Statistiques réelles vérifiées depuis le gestionnaire de publicités Facebook (Ad 1)."
    }
  },
  {
    id: "language-course-ielts-ad",
    title: {
      en: "Language Education Course Ad Campaign (Ad 2)",
      fr: "Campagne Publicitaire Cours de Langue (Ad 2)"
    },
    subtitle: {
      en: "Targeted 1-on-1 IELTS tutoring ad generating 24 student inquiries at ฿43.57/lead",
      fr: "Campagne IELTS particulier générant 24 demandes d'élèves à 43,57 ฿/lead"
    },
    category: {
      en: "Language Course",
      fr: "Formation Linguistique"
    },
    description: {
      en: "Real Facebook ad campaign for an intensive 1-on-1 online IELTS program (฿5,990). Operating on a controlled ฿132/day budget over 8 days, generating 24 student inquiries at ฿43.57 per message and over 9,000 views.",
      fr: "Vraie campagne publicitaire pour une formation IELTS individuelle en ligne (5 990 ฿). Budget maîtrisé de 132 ฿/jour sur 8 jours, générant 24 demandes à 43,57 ฿ par prospect et plus de 9 000 vues."
    },
    tags: ["Facebook Ads", "IELTS Course", "Cost ฿43.57/Lead", "Budget ฿132/Day", "High ROI"],
    metrics: [
      { label: { en: "Cost Per Lead", fr: "Coût Par Prospect" }, value: "฿43.57", subtext: { en: "For ฿5,990 Course", fr: "Pour Offre à 5 990 ฿" } },
      { label: { en: "Student Inquiries", fr: "Demandes d'Élèves" }, value: "24 Leads", subtext: { en: "In 8 Days", fr: "En 8 Jours" } },
      { label: { en: "Total Views", fr: "Vues Totales" }, value: "9,057", subtext: { en: "High Ad Engagement", fr: "Forte Portée" } }
    ],
    tactics: [
      {
        name: { en: "School Break Urgency Hook", fr: "Accroche sur les Vacances Scolaires" },
        description: {
          en: "Capitalized on the holiday window when students must prepare IELTS scores for overseas university applications.",
          fr: "Exploitation de la fenêtre des vacances scolaires propice à la préparation des concours et séjours d'études."
        },
        impact: { en: "Urgent student & parent response", fr: "Décision rapide des familles et étudiants" }
      },
      {
        name: { en: "Harvard Instructor Credibility", fr: "Crédibilité du Tuteur Certifié Harvard" },
        description: {
          en: "Highlighted the instructor's Harvard University English Certificate to eliminate tutor quality skepticism immediately.",
          fr: "Mise en avant du certificat Harvard pour instaurer immédiatement une confiance maximale."
        },
        impact: { en: "High trust and inquiry conversion", fr: "Forte conversion en demandes qualifiées" }
      },
      {
        name: { en: "Transparent Syllabus & Pricing (฿5,990)", fr: "Programme & Tarif Transparent (5 990 ฿)" },
        description: {
          en: "Listed exact 24-hour / 11-class duration and module topics (Grammar, Vocabulary, Reading techniques) upfront.",
          fr: "Affichage transparent des 24 heures, 11 cours et modules clés (lecture, grammaire, vocabulaire)."
        },
        impact: { en: "Filtered out non-serious inquiries", fr: "Filtrage naturel des prospects non sérieux" }
      }
    ],
    caseStudyContext: {
      en: "Verified back-office ad manager stats from live Facebook Ad campaign (Ad 2).",
      fr: "Statistiques réelles vérifiées depuis le gestionnaire de publicités Facebook (Ad 2)."
    }
  }
];

