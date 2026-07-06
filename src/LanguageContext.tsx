import { createContext, useContext, useState, ReactNode } from 'react';
import { Locale } from './types';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Locale, string>> = {
  'nav.projects': { en: 'Projects', fr: 'Projets' },
  'nav.profile': { en: 'Profile', fr: 'Profil' },
  'nav.inquiries': { en: 'Inquiries', fr: 'Demandes' },
  'nav.letstalk': { en: "Let's Talk", fr: 'Discutons' },
  
  'hero.available': { en: 'Available for new opportunities', fr: 'Disponible pour de nouvelles opportunités' },
  'hero.title.part1': { en: 'Crafting ', fr: 'Créer des ' },
  'hero.title.part2': { en: 'elegant,', fr: 'élégantes,' },
  'hero.title.part3': { en: ' intuitive', fr: ' intuitives' },
  'hero.title.part4': { en: ' digital experiences.', fr: ' expériences numériques.' },
  'hero.desc': { 
    en: 'I design digital products that prioritize user clarity and business goals. By bridging the gap between visual aesthetics and functional logic, I turn complex problems into seamless experiences.',
    fr: 'Je conçois des produits numériques qui privilégient la clarté pour l\'utilisateur et les objectifs commerciaux. En comblant le fossé entre l\'esthétique visuelle et la logique fonctionnelle, je transforme des problèmes complexes en expériences fluides.'
  },
  'hero.btn.projects': { en: 'View Selected Works', fr: 'Voir les Œuvres Choisies' },
  'hero.btn.profile': { en: 'View Profile', fr: 'Voir le Profil' },
  
  'marquee.uxui': { en: 'UX/UI Design', fr: 'Design UX/UI' },
  'marquee.proto': { en: 'Prototyping', fr: 'Prototypage' },
  'marquee.webdev': { en: 'Web Development', fr: 'Développement Web' },
  'marquee.strategy': { en: 'Product Strategy', fr: 'Stratégie Produit' },
  'marquee.aiworkflow': { en: 'AI Workflow', fr: 'Flux de Travail IA' },
  'marquee.claude': { en: 'Claude', fr: 'Claude' },
  'marquee.gemini': { en: 'Gemini', fr: 'Gemini' },
  'marquee.ui': { en: 'User Interface', fr: 'Interface Utilisateur' },
  'marquee.wordpress': { en: 'WordPress', fr: 'WordPress' },

  'works.title': { en: 'Selected Works', fr: 'Œuvres Choisies' },
  'works.desc': { 
    en: 'A curated collection of digital products, blending timeless aesthetics with user-centered functionality.',
    fr: 'Une collection organisée de produits numériques, alliant une esthétique intemporelle à une fonctionnalité centrée sur l\'utilisateur.'
  },
  'works.count': { en: 'Works', fr: 'Œuvres' },

  'wordpress.title': { en: 'Client Websites', fr: 'Sites Web Clients' },
  'wordpress.desc': { 
    en: 'With years of freelance experience, I manage end-to-end web projects—from initial client briefs and strategic problem-solving to bespoke design and live WordPress deployment. I deliver fully functional websites tailored to real business needs.',
    fr: 'Fort de plusieurs années d\'expérience en tant que freelance, je gère des projets web de bout en bout : des briefs clients et de la résolution stratégique de problèmes jusqu\'au design sur mesure et au déploiement en direct sur WordPress. Je livre des sites web entièrement fonctionnels et adaptés aux besoins des entreprises.'
  },

  'about.title': { en: 'About Me', fr: 'À Propos de Moi' },
  'about.intro': {
    en: "Hi I'm Siwat, you can call me 'Fox'.",
    fr: "Bonjour, je suis Siwat, vous pouvez m'appeler 'Fox'."
  },
  'about.p1': { 
    en: 'I am a User-focused UX/UI and Web Designer who believes that great digital products stem from understanding real user problems before writing a single line of code.',
    fr: 'Je suis un concepteur UX/UI et Web axé sur l\'utilisateur qui croit que les grands produits numériques découlent de la compréhension des problèmes réels des utilisateurs avant d\'écrire une seule ligne de code.'
  },
  'about.p2': {
    en: 'With over 6 years of freelance experience, I specialize in bridging the gap between visual design and functional development. Known by clients as a reliable partner who translates complex requirements into intuitive platforms, I handle everything from mapping user flows to live web deployment.',
    fr: 'Avec plus de 6 ans d\'expérience en freelance, je me spécialise dans le rapprochement entre la conception visuelle et le développement fonctionnel. Reconnu par les clients comme un partenaire fiable qui traduit des exigences complexes en plateformes intuitives, je gère tout, de la cartographie des flux utilisateurs au déploiement web en direct.'
  },
  'about.p3': {
    en: 'By actively integrating AI tools (Gemini, Claude) into my workflow, I accelerate ideation and code generation, consistently delivering high-quality, responsive websites that balance user needs with business goals.',
    fr: 'En intégrant activement des outils d\'IA (Gemini, Claude) dans mon flux de travail, j\'accélère l\'idéation et la génération de code, en fournissant constamment des sites Web réactifs de haute qualité qui équilibrent les besoins des utilisateurs avec les objectifs commerciaux.'
  },

  'footer.open': { en: '✦ Open for opportunities', fr: '✦ Disponible pour des opportunités' },
  'footer.title.1': { en: "Let's craft something ", fr: "Créons quelque chose de " },
  'footer.title.2': { en: "remarkable.", fr: "remarquable." },
  'footer.desc': { 
    en: "I'm currently open for new full-time opportunities and freelance projects. Reach out if you want to elevate your digital presence.",
    fr: "Je suis actuellement disponible pour de nouvelles opportunités à temps plein et des projets en freelance. Contactez-moi si vous souhaitez élever votre présence numérique."
  },
  
  'project.overview': { en: 'Overview', fr: 'Aperçu' },
  'project.problemStatement': { en: 'Problem Statement', fr: 'Énoncé du Problème' },
  'project.painpoints': { en: 'Pain Points', fr: 'Points de Douleur' },
  'project.goals': { en: 'Goals & Objectives', fr: 'Buts & Objectifs' },
  'project.persona': { en: 'User Persona', fr: 'Persona Utilisateur' },
  'project.ideation': { en: 'Ideation', fr: 'Idéation' },
  'project.uidesign': { en: 'UI Design & Prototype', fr: 'Design UI & Prototype' },
  'project.coreFeatures': { en: 'Core Systems & Features', fr: 'Systèmes de base et fonctionnalités' },
  'project.technicalHighlights': { en: 'Technical Highlights', fr: 'Points forts techniques' },
  'project.outcome': { en: 'Outcome', fr: 'Résultat' },
  'project.aiWorkflow': { en: 'AI Workflow & Deployment', fr: 'Flux de Travail IA & Déploiement' },
  'project.back': { en: 'Back to Projects', fr: 'Retour aux Projets' },
  'project.prototype': { en: 'View Live Prototype', fr: 'Voir le Prototype en Direct' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const t = (key: string): string => {
    return translations[key]?.[locale] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
