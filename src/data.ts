import { Project } from './types';

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
      en: "Web Game",
      fr: "Jeu Web"
    },
    description: {
      en: "A pixel art game designed to relieve stress for office workers by surviving the week, collecting items, and avoiding workplace obstacles.",
      fr: "Un jeu en pixel art conçu pour soulager le stress des employés de bureau en survivant à la semaine, en collectant des objets et en évitant les obstacles au travail."
    },
    imageUrl: "/survive-til-five-home.png",
    images: ["/survive-til-five-home.png", "/survive-til-five.gif"],
    liveUrl: "https://survivetilfive.netlify.app/",
    tags: ["HTML5 Canvas", "Vanilla JS", "Web Audio API", "Pixel Art"],
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
