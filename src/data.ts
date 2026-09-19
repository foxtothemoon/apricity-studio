import { Project, WebClientSite, GraphicDesignItem, OnlineMarketingStrategy, MarketingWorkflowStep, FacebookAdCaseStudy } from './types';

export const projects: Project[] = [
  {
    id: "01",
    slug: "moody-child",
    title: {
      en: "Moody Child - Mood tracker",
      fr: "Moody Child - Suivi d'Humeur"
    },
    category: {
      en: "Mobile Web App",
      fr: "Application Web Mobile"
    },
    categoryType: "app",
    description: {
      en: "A highly responsive, mobile-first micro-journaling application bridging emotional check-ins with expressive visual art.",
      fr: "Une application de micro-journalisation mobile-first hautement réactive, reliant les bilans émotionnels à l'art visuel expressif."
    },
    imageUrl: "/moody-child-home.png",
    images: ["/moody-child-home.png", "/moody-child-record.png"],
    liveUrl: "https://moodychild.netlify.app/",
    tags: ["Frontend", "Neo-Brutalism", "SVG", "Mobile-First", "AI Workflow", "Deployment"],
    details: {
      overview: {
        en: "MoodyChild is a highly responsive, mobile-first micro-journaling application designed specifically to bridge the gap between emotional check-ins and expressive visual art. Styled after early 2000s collage zines and vintage collectible sticker packs, it turns the routine task of mental health logging into a tactile, satisfying hobby.",
        fr: "MoodyChild est une application de micro-journalisation mobile-first conçue pour combler le fossé entre les bilans émotionnels et l'art visuel expressif. Inspirée des fanzines de collage du début des années 2000 et des packs d'autocollants de collection, elle transforme la tâche routinière du journal de santé mentale en un passe-temps tactile et satisfaisant."
      },
      problemStatement: {
        en: "Traditional mental health journaling tools are often exhausting, clinical, and raise privacy concerns, preventing young users from building consistent habits.",
        fr: "Les outils traditionnels de journalisation de la santé mentale sont souvent épuisants, cliniques et soulèvent des problèmes de confidentialité, empêchant les jeunes utilisateurs de prendre des habitudes cohérentes."
      },
      painPoints: {
        en: [
          "\"Journaling is exhausting.\" Traditional journaling apps require paragraphs of text. Users suffer from cognitive overhead at the end of a tiring day.",
          "\"Clinical and cold layouts.\" Many apps look like hospital utilities or sterile corporate templates, isolating young users.",
          "\"Data privacy concerns.\" Users are uncomfortable storing confidential, personal thoughts on vulnerable web databases."
        ],
        fr: [
          "\"Tenir un journal est épuisant.\" Les applications traditionnelles nécessitent des paragraphes de texte, créant une surcharge cognitive à la fin d'une journée.",
          "\"Mises en page cliniques et froides.\" De nombreuses applications ressemblent à des utilitaires d'hôpitaux, isolant les jeunes utilisateurs.",
          "\"Problèmes de confidentialité.\" Les utilisateurs ne sont pas à l'aise de stocker des pensées personnelles sur des bases de données web vulnérables."
        ]
      },
      goals: {
        en: [
          "Log in 2 Taps (Hick's Law): Minimizing decision-making options.",
          "Collectible Y2K Collage Visuals (Aesthetic-Usability Effect).",
          "Zero-Server Client-Side Sandboxing (Edge Storage & User Trust)."
        ],
        fr: [
          "Connexion en 2 clics (Loi de Hick) : Minimiser les options de décision.",
          "Visuels de collage Y2K à collectionner (Effet esthétique-utilisabilité).",
          "Bacs à sable client sans serveur (Stockage Edge et confiance)."
        ]
      },
      userPersona: {
        en: "Gen-Z users seeking a fun, tactile, and private way to log their mental health without the cognitive overhead of traditional journaling.",
        fr: "Utilisateurs de la génération Z à la recherche d'un moyen amusant, tactile et privé d'enregistrer leur santé mentale sans la surcharge cognitive."
      },
      ideation: {
        en: "Aesthetic: Cyber Y2K, Neo-Brutalism, and Soft Grunge. High-contrast borders, tactile drop shadows. Tone: Sassy but supportive. Speaks running Gen-Z lingo with bilingual flexibility.",
        fr: "Esthétique : Cyber Y2K, Néo-Brutalisme et Soft Grunge. Bordures contrastées, ombres tactiles. Ton : Impertinent mais solidaire. Parle l'argot Gen-Z avec une flexibilité bilingue."
      },
      uiDesign: {
        en: "Deep Charcoal Canvas frames vivid neon elements. Holographic Borders with 4px offset card shadows simulate cardboard paper cutouts. Custom-coded SVG sticker badges feature glowing gradients. Interactive transitions use custom cubic-bezier spring strings.",
        fr: "Toile anthracite encadrant des éléments néon vifs. Bordures holographiques avec ombres décalées de 4px simulant des découpes de carton. Badges d'autocollants SVG personnalisés. Les transitions interactives utilisent des ressorts cubiques de Bézier."
      },
      aiWorkflow: {
        en: "Leveraged Claude and Google AI Studio to accelerate the design and development process. The AI tools assisted in generating boilerplate code, refining the Neo-Brutalism CSS framework, and structuring the component logic. The codebase is version-controlled via GitHub and deployed continuously to Netlify, enabling rapid prototyping and seamless testing.",
        fr: "Utilisation de Claude et de Google AI Studio pour accélérer le processus de conception et de développement. Les outils d'IA ont aidé à générer du code de base, à affiner le framework CSS Néo-Brutalisme et à structurer la logique des composants. Le code source est contrôlé en version via GitHub et déployé en continu sur Netlify, permettant un prototypage rapide et des tests fluides."
      },
      outcome: {
        en: "Engineered with absolute modularity and performance. Procedural SVGs ensure instant loading. Offline-First & Smart Re-hydration provides a rich mock-log dataset for new testers without server dependencies.",
        fr: "Conçu avec une modularité et des performances absolues. Les SVG procéduraux garantissent un chargement instantané. Offline-First & Smart Re-hydration fournit un ensemble de données factices sans dépendances au serveur."
      }
    }
  },
  {
    id: "02",
    slug: "survive-til-five",
    title: {
      en: "Survive 'til five",
      fr: "Survive 'til five"
    },
    category: {
      en: "Web Game & UX Design",
      fr: "Jeu Web & Design UX"
    },
    categoryType: "app",
    description: {
      en: "A pixel art game designed to relieve stress for office workers by surviving the week, collecting items, and avoiding workplace obstacles.",
      fr: "Un jeu en pixel art conçu pour soulager le stress des employés de bureau en survivant à la semaine, en collectant des objets et en évitant les obstacles au travail."
    },
    imageUrl: "/survive-til-five-home.png",
    images: ["/survive-til-five-home.png", "/survive-til-five.gif"],
    liveUrl: "https://survivetilfive.netlify.app/",
    tags: ["Game UX", "Micro-Interactions", "HTML5 Canvas", "Vanilla JS", "Web Audio API", "Pixel Art"],
    details: {
      overview: {
        en: "SURVIVE 'TIL FIVE is a 16-bit pixel-art side-scrolling runner for web browsers, designed for office workers to play during coffee breaks. Players take the role of an office worker who must survive the workday from 8 AM to 5 PM without running out of energy.",
        fr: "SURVIVE 'TIL FIVE est un jeu de course à défilement horizontal en pixel art 16 bits pour navigateurs web, conçu pour les employés de bureau. Les joueurs incarnent un employé qui doit survivre à la journée de travail de 8h à 17h sans épuiser son énergie."
      },
      problemStatement: {
        en: "Office workers need a game that genuinely gets office life — hazards are real office annoyances (chatty coworkers, meetings, jammed printers) and power-ups are what workers actually run on (coffee, bubble tea, naps). Rounds last just 30–55 seconds, perfect for real break time.",
        fr: "Les employés de bureau ont besoin d'un jeu qui comprend la vie de bureau - les dangers sont de vrais ennuis (collègues bavards, réunions) et les bonus sont ce qui les fait tenir (café, siestes). Les parties durent 30 à 55 secondes, parfait pour une pause."
      },
      painPoints: {
        en: [
          "High stress levels and burnout during office hours.",
          "Lack of quick, relatable entertainment during short work breaks.",
          "Many web games are either too complex or require long time commitments."
        ],
        fr: [
          "Niveaux de stress élevés et épuisement professionnel pendant les heures de bureau.",
          "Manque de divertissement rapide et relatable pendant les courtes pauses de travail.",
          "De nombreux jeux web sont soit trop complexes, soit nécessitent de longs engagements de temps."
        ]
      },
      goals: {
        en: [
          "Provide a quick, stress-relieving gaming experience.",
          "Create highly relatable office scenarios and obstacles.",
          "Showcase an AI-assisted game development workflow."
        ],
        fr: [
          "Offrir une expérience de jeu rapide et déstressante.",
          "Créer des scénarios et des obstacles de bureau très relatables.",
          "Présenter un flux de travail de développement de jeux assisté par l'IA."
        ]
      },
      userPersona: {
        en: "Office workers and professionals looking for a quick, relatable, and cute distraction during their breaks to decompress and smile.",
        fr: "Employés de bureau et professionnels à la recherche d'une distraction rapide, relatable et mignonne pendant leurs pauses pour décompresser et sourire."
      },
      ideation: {
        en: "Brainstormed common office tropes—like sudden meetings or broken printers—and translated them into game mechanics. Decided on a retro pixel art style for nostalgic charm and simplicity.",
        fr: "Nous avons brainstormé sur les clichés courants du bureau – comme les réunions soudaines ou les imprimantes en panne – et les avons traduits en mécaniques de jeu. Nous avons opté pour un style pixel art rétro pour son charme nostalgique et sa simplicité."
      },
      uiDesign: {
        en: "• \"Happy face = grab, grumpy face = dodge\" — every item wears a kawaii smile, every hazard wears an angry scowl. New players read the screen instantly with zero tutorial.\n• Fully procedural pixel art: rounded silhouettes drawn from span maps instead of uniform boxes.\n• Cozy office backdrop with a wall clock whose hands track actual in-game time, sticky-note boards, plants, a water cooler, and window light that shifts from morning blue to golden-hour orange.",
        fr: "• \"Visage heureux = attraper, visage grincheux = esquiver\" — chaque objet a un sourire kawaii, chaque danger a un regard renfrogné.\n• Pixel art entièrement procédural : silhouettes arrondies dessinées à partir de cartes d'envergure.\n• Décor de bureau confortable avec une horloge murale qui suit l'heure du jeu, des plantes et une lumière de fenêtre qui passe du bleu matinal à l'orange de l'heure dorée."
      },
      coreFeatures: {
        en: "• 4 chibi characters (Marketing, Sales, HR, IT), each with 3 visual states tied to the energy bar: fresh → tired with eye bags → full zombie mode with messy hair and drool.\n• 5 themed levels (Mon–Fri) with escalating speed and hazard density: Monday's coffee rush to Friday's crunch time with an extended boss rush.\n• Energy economy: constant drain, replenished by 8 snack items, plus a Caffeine Overdrive mechanic (3 quick coffees = screen-shaking speed boost).\n• Gacha-style wardrobe with 16 collectible items. Every item renders on the character and acts as a one-hit shield.\n• Controls: jump, double jump, duck/slide — keyboard and touch supported.\n• Boss event at 4:30 PM: the boss appears wanting \"one more thing\" before you can clock out.",
        fr: "• 4 personnages chibi (Marketing, Ventes, RH, Informatique), chacun avec 3 états visuels liés à la barre d'énergie : frais → fatigué avec des cernes → mode zombie.\n• 5 niveaux thématiques (Lun-Ven) avec une vitesse et une densité d'obstacles croissantes.\n• Économie d'énergie : drain constant, reconstitué par 8 collations, plus une mécanique de surcharge de caféine.\n• Garde-robe de style gacha avec 16 objets à collectionner agissant comme des boucliers.\n• Commandes : saut, double saut, glissade — clavier et tactile pris en charge.\n• Événement de boss à 16h30 : le patron apparaît et veut \"une dernière chose\" avant de pouvoir pointer."
      },
      technicalHighlights: {
        en: "• Single-file HTML5 Canvas game in vanilla JavaScript — zero dependencies, runs instantly in any browser.\n• Sound effects synthesized live with the Web Audio API (no audio assets).\n• 960×540 landscape canvas with responsive scaling and crisp pixel rendering.\n• Balance-tested via headless bot simulation: thousands of automated playthroughs tuned the difficulty curve.\n• Automated visual QA pipeline: every screen rendered headlessly with pixel-font width emulation to catch text overflow before release.",
        fr: "• Jeu Canvas HTML5 dans un seul fichier en JavaScript vanilla — zéro dépendance, s'exécute instantanément.\n• Effets sonores synthétisés en direct avec l'API Web Audio (aucun fichier audio).\n• Toile paysage 960x540 avec mise à l'échelle réactive et rendu de pixels net.\n• Testé en équilibre via une simulation de bot headless : des milliers de parties automatisées ont ajusté la courbe de difficulté.\n• Pipeline d'AQ visuelle automatisée : chaque écran est rendu sans interface pour détecter les débordements de texte."
      },
      aiWorkflow: {
        en: "Built iteratively across 8+ playtest-and-revise cycles using Claude and AI Studio: difficulty and pacing tuning, item readability overhaul (the face-language system), round length cut from ~2 minutes to 30–55 seconds based on player feedback, and a collectible wardrobe added for replay value.",
        fr: "Construit de manière itérative sur plus de 8 cycles de test et de révision en utilisant Claude et AI Studio : réglage de la difficulté, refonte de la lisibilité des objets, réduction de la durée des parties et ajout d'une garde-robe à collectionner."
      },
      outcome: {
        en: "Fully playable free prototype with all 5 levels complete. Planned next: score system and office leaderboards, unlockable characters, and progress saving.",
        fr: "Prototype gratuit entièrement jouable avec les 5 niveaux terminés. Prévu ensuite : système de score et classements de bureau, personnages à débloquer et sauvegarde de la progression."
      }
    }
  },
  {
    id: "03",
    slug: "carepill-medication-tracker",
    title: {
      en: "Carepill",
      fr: "Carepill"
    },
    category: {
      en: "Mobile Web Application",
      fr: "Application Web Mobile"
    },
    categoryType: "app",
    description: {
      en: "A dual-role mobile web application designed to improve medication adherence and connect patients with their caregivers.",
      fr: "Une application web mobile à double rôle conçue pour améliorer l'observance des médicaments et connecter les patients avec leurs soignants."
    },
    imageUrl: "/carepill-cover.png",
    liveUrl: "https://carepill.netlify.app/",
    images: [
      "/carepill-hi-fi-figma.png",
      "/carepill-action.gif"
    ],
    tags: ["UX/UI Design", "Healthcare", "Figma", "React", "TypeScript", "Tailwind CSS"],
    details: {
      overview: {
        en: "Carepill is a mobile-first web application that helps users track their daily medications while allowing family members or professional caregivers to monitor their adherence remotely in real-time.",
        fr: "Carepill est une application web mobile first qui aide les utilisateurs à suivre leurs médicaments quotidiens tout en permettant aux membres de la famille ou aux soignants professionnels de surveiller leur observance à distance en temps réel."
      },
      problemStatement: {
        en: "Elderly patients or individuals with chronic illnesses frequently forget to take their medications or take incorrect doses. Meanwhile, their caregivers experience anxiety because they have no real-time way to know if their loved ones are following their medication schedule.",
        fr: "Les patients âgés ou les personnes atteintes de maladies chroniques oublient fréquemment de prendre leurs médicaments ou prennent des doses incorrectes. Pendant ce temps, leurs soignants ressentent de l'anxiété car ils n'ont aucun moyen en temps réel de savoir si leurs proches suivent leur horaire de médicaments."
      },
      painPoints: {
        en: [
          "Existing medication apps are often too complex, cluttered, or difficult to read for seniors.",
          "Lack of a seamless, dedicated 'Caregiver Mode' that prioritizes remote monitoring and missed-dose alerts.",
          "Destructive actions (like deleting a profile) happen accidentally and need strong safeguards."
        ],
        fr: [
          "Les applications de médicaments existantes sont souvent trop complexes, encombrées ou difficiles à lire pour les personnes âgées.",
          "Absence d'un « mode soignant » dédié et transparent qui donne la priorité à la surveillance à distance et aux alertes de doses manquées.",
          "Les actions destructives (comme la suppression d'un profil) se produisent accidentellement et nécessitent de solides garanties."
        ]
      },
      goals: {
        en: [
          "Create a frictionless medication logging experience that encourages daily use.",
          "Provide a simple, highly accessible interface to view and log daily medications without confusion.",
          "Provide peace of mind through a clear dashboard that tracks the patient's schedule and sends immediate notifications for missed doses."
        ],
        fr: [
          "Créer une expérience de journalisation des médicaments sans friction qui encourage une utilisation quotidienne.",
          "Fournir une interface simple et très accessible pour afficher et enregistrer les médicaments quotidiens sans confusion.",
          "Offrir la tranquillité d'esprit grâce à un tableau de bord clair qui suit l'emploi du temps du patient et envoie des notifications immédiates pour les doses manquées."
        ]
      },
      userPersona: {
        en: "The Independent Senior (Patient): Wants to stay healthy but struggles with small text and complex app navigation. The Anxious Loved One (Caregiver): A busy working adult who needs a quick, at-a-glance status of their parent's health.",
        fr: "Le senior indépendant (patient) : souhaite rester en bonne santé mais a du mal avec les petits textes et la navigation complexe des applications. L'être cher anxieux (soignant) : un adulte actif qui a besoin d'un état rapide et en un coup d'œil de la santé de ses parents."
      },
      ideation: {
        en: "Designed a seamless onboarding experience that immediately segments users into Patient Mode or Caregiver Mode. The information architecture was kept extremely flat (Maximum 2 clicks to reach any core feature) with a persistent Bottom Navigation Bar.",
        fr: "Conception d'une expérience d'intégration transparente qui segmente immédiatement les utilisateurs en mode patient ou en mode soignant. L'architecture de l'information a été maintenue extrêmement plate avec une barre de navigation inférieure persistante."
      },
      uiDesign: {
        en: "• Trustworthy 'Medical Blues' mixed with high-visibility 'Alert Oranges' for primary actions.\n• Clean, large sans-serif fonts with generous line spacing.\n• Built-in toggles for 'High Contrast Mode' and 'Reduce Motion'.\n• Context-aware empty states guiding caregivers to connect via ID.",
        fr: "• 'Bleus médicaux' dignes de confiance mélangés à des 'Oranges d'alerte' à haute visibilité.\n• Polices sans empattement propres et grandes avec un espacement des lignes généreux.\n• Bascules intégrées pour le 'Mode contraste élevé' et 'Réduire les mouvements'.\n• États vides sensibles au contexte guidant les soignants."
      },
      coreFeatures: {
        en: "• Dual-Role System: Distinct paths and views for Patients (focus on logging) and Caregivers (focus on status overviews).\n• Friction for Safety: Custom confirmation popup modals featuring a warning icon and distinct primary/secondary buttons to prevent accidental profile deletions.",
        fr: "• Système à double rôle : parcours et vues distincts pour les patients (accent sur la journalisation) et les soignants (accent sur les aperçus d'état).\n• Friction pour la sécurité : fenêtres contextuelles de confirmation personnalisées avec icône d'avertissement pour éviter les suppressions accidentelles."
      },
      technicalHighlights: {
        en: "• Front-end implementation using React, TypeScript, and Tailwind CSS.\n• Prioritized single-column layouts for maximum readability.\n• Implemented smooth micro-interactions like satisfying checkmark animations when a pill is taken to make health tracking feel rewarding.",
        fr: "• Implémentation front-end à l'aide de React, TypeScript et Tailwind CSS.\n• Priorité aux dispositions à une seule colonne pour une lisibilité maximale.\n• Mise en œuvre de micro-interactions fluides comme des animations de coche satisfaisantes lorsqu'une pilule est prise."
      },
      aiWorkflow: {
        en: "To bridge the gap between design and reality, I utilized AI tools to translate the Figma concepts into functional prototype code. This rapid AI prototyping allowed me to test the core interaction flow interactively, proving that the empathetic design translates beautifully into a working application.",
        fr: "Pour combler le fossé entre la conception et la réalité, j'ai utilisé des outils d'IA pour traduire les concepts Figma en code de prototype fonctionnel. Ce prototypage rapide par l'IA m'a permis de tester le flux d'interaction de base de manière interactive."
      },
      outcome: {
        en: "Delivered a highly accessible, dual-interface application that successfully bridges the communication gap between patients and caregivers. The focus on large UI components and clear empty states significantly reduced the learning curve for elderly users.",
        fr: "Livraison d'une application à double interface hautement accessible qui comble avec succès le déficit de communication entre les patients et les soignants. L'accent mis sur les grands composants de l'interface utilisateur a considérablement réduit la courbe d'apprentissage pour les utilisateurs âgés."
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
      en: "Language Course (Ad 2): Targeted high school and university students preparing for international university admission during school breaks ('ปิดเทอม'), plus working professionals aiming for overseas scholarships or career advancement.",
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
      en: "Real Estate (Ad 1): Selected high-intent phrases: 'พูลวิลล่าส่วนตัว' (private pool villa), 'สระว่ายน้ำสไลเดอร์เกลียว' (spiral slide pool), 'ที่พักปาร์ตี้เตาปิ้งย่าง' (pool party BBQ), 'พูลวิลล่า 4 ห้องนอน' (4-bedroom villa).",
      fr: "Immobilier (Ad 1) : Mots-clés sélectionnés : 'villa avec piscine privée', 'toboggan géant', 'location fête barbecue', 'villa 4 chambres'."
    },
    appliedToLanguageCourse: {
      en: "Language Course (Ad 2): Selected specific terms: 'เรียน IELTS ตัวต่อตัว' (1-on-1 IELTS tutor), 'ติวสอบ IELTS Online' (online IELTS preparation), 'เทคนิค Reading IELTS' (IELTS Reading techniques), 'ปิดเทอมเรียนภาษา' (holiday English course).",
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
      en: "Real Estate (Ad 1): Copy opened with sensory details: 'พูลวิลล่าส่วนตัว พร้อมสระว่ายน้ำขนาดใหญ่ สไลเดอร์เกลียวสุดชิค บรรยากาศสบายๆ ที่พักสะอาด มุมถ่ายรูปน่ารักๆ ติดแกรมเพียบ...' emphasizing cleanliness, photo spots, and full party amenities.",
      fr: "Immobilier (Ad 1) : Accroche sensorielle valorisant la propreté, la grande piscine, le toboggan, les spots photos tendance et le barbecue pour les soirées."
    },
    appliedToLanguageCourse: {
      en: "Language Course (Ad 2): Copy leveraged seasonal urgency and prestige: 'ปิดเทอมแล้ว มาเรียน IELTS Online ตัวต่อตัวกัน! สอนโดยอาจารย์ที่จบ English Certificate จาก Harvard University, USA • 11 คลาส 24 ชั่วโมง เพียง 5,990.-' with crystal-clear syllabus breakdown.",
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
      en: "Real Estate Rental (อสังหาริมทรัพย์)",
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
      en: "Language Course (คอร์สสอนภาษา)",
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
        name: { en: "School Break Urgency Hook ('ปิดเทอม')", fr: "Accroche sur les Vacances Scolaires" },
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

