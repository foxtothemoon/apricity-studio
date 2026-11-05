import { createContext, useContext, useState, ReactNode } from 'react';
import { Locale } from './types';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Locale, string>> = {
  'nav.uxui': { en: 'UX UI', fr: 'UX UI' },
  'nav.web': { en: 'Web Design', fr: 'Web Design' },
  'nav.vibecoding': { en: 'Vibe Coding', fr: 'Vibe Coding' },
  'nav.graphic': { en: 'Graphic Design', fr: 'Design Graphique' },
  'nav.about': { en: 'About Me', fr: 'À Propos' },
  'nav.letstalk': { en: "Let's Talk", fr: 'Discutons' },

  'filter.all': { en: 'All Disciplines', fr: 'Toutes Disciplines' },
  'filter.uxui': { en: '1. UX/UI & App Design', fr: '1. Designer UX/UI & Applications' },
  'filter.wordpress': { en: '2. Web Design & WordPress', fr: '2. Web Design WordPress & Code' },
  'filter.vibecoding': { en: '3. Vibe Coding & AI Apps', fr: '3. Vibe Coding & Apps IA' },
  'filter.graphic': { en: '4. Graphic Design', fr: '4. Design Graphique' },
  
  'category.uxui.title': { en: 'UX/UI & App Design', fr: 'Designer UX/UI & Applications' },
  'category.uxui.tag': { en: 'User Research • Figma Systems • WCAG AA Accessibility', fr: 'Recherche Utilisateur • Systèmes Figma • Accessibilité WCAG AA' },
  'category.uxui.desc': { 
    en: 'Human-centered mobile and web applications designed in Figma, structured with scalable design tokens, and crafted for everyday clarity, accessibility, and caregiver safety.',
    fr: 'Applications mobiles et web centrées sur l’humain conçues dans Figma, structurées avec des tokens modulaires et optimisées pour la clarté, l’accessibilité et la sécurité.'
  },

  'category.wordpress.title': { en: 'Web Design & WordPress', fr: 'Web Design & WordPress' },
  'category.wordpress.tag': { en: 'Full-Stack WordPress • Custom Elementor • Live Deployments', fr: 'Développement WordPress • Elementor sur mesure • Déploiements Directs' },
  'category.wordpress.desc': { 
    en: 'Real-world business showcases and platforms built with clean code, responsive layouts, fast loading speeds, and SEO readiness from day one.',
    fr: 'Sites vitrines et plateformes professionnelles conçus avec un code propre, des mises en page réactives, des vitesses de chargement ultra-rapides et un SEO optimisé dès le premier jour.'
  },

  'category.vibecoding.title': { en: 'Vibe Coding & AI Fullstack', fr: 'Vibe Coding & Développement IA' },
  'category.vibecoding.tag': { en: 'Claude 3.7 & Gemini • Prompt-to-Production • Zero-Dependency Canvas & Edge Apps', fr: 'Claude 3.7 & Gemini • Du Prompt à la Production • Canvas & Micro-Apps sans dépendance' },
  'category.vibecoding.desc': {
    en: 'Software engineering at the speed of thought. Combining strong frontend fundamentals with conversational AI steering (Claude 3.7 Sonnet, Google AI Studio) to build zero-dependency HTML5 games, procedural Web Audio, and private edge sandboxed web apps in hours instead of months.',
    fr: 'Le développement au rythme de la pensée. Alliant bases techniques solides et pilotage d’IA conversationnelle (Claude 3.7 Sonnet, Google AI Studio) pour concevoir des jeux HTML5 Canvas sans dépendance, du son Web Audio synthétisé et des micro-apps privées en quelques heures.'
  },

  'category.graphic.title': { en: 'Graphic Design', fr: 'Design Graphique' },
  'category.graphic.tag': { en: 'Brand Identity • Packaging • Editorial Campaigns', fr: 'Identité de Marque • Packaging • Campagnes Éditoriales' },
  'category.graphic.desc': { 
    en: 'Brand identities, perfume packaging with print dielines, editorial social campaigns, and custom vector assets.',
    fr: 'Identités de marque, packaging de parfum avec lignes de découpe, campagnes éditoriales et créations vectorielles sur mesure.'
  },

  'overview.badge': { en: 'FLAGSHIP CASE STUDY', fr: 'ÉTUDE DE CAS MAÎTRESSE' },
  'overview.title': { en: 'Carepill: Medication Tracker & Caregiver Ecosystem', fr: 'Carepill : Suivi de Médicaments & Écosystème Aidant' },
  'overview.desc': {
    en: 'An accessible, human-centered healthcare mobile application designed in Figma with WCAG AA compliance, safety friction safeguards, and real-time caregiver synchronization.',
    fr: 'Une application mobile de santé accessible et centrée sur l’humain conçue dans Figma avec conformité WCAG AA, sécurités anti-erreur et synchronisation des aidants en temps réel.'
  },

  'hero.available': { en: 'Product & UX/UI Designer', fr: 'Designer Produit & UX/UI' },
  'hero.title.part1': { en: 'Product & ', fr: 'Design Produit & ' },
  'hero.title.part2': { en: 'UX/UI ', fr: 'UX/UI ' },
  'hero.title.part3': { en: 'Designer.', fr: 'Designer.' },
  'hero.title.part4': { en: '', fr: '' },
  'hero.desc': { 
    en: 'Product & UX/UI Designer crafting accessible digital products, scalable design systems, and empathetic user journeys, moving smoothly from discovery to high-fidelity Figma and production-ready code.',
    fr: 'Designer Produit & UX/UI concevant des produits numériques accessibles, des systèmes de design modulaires et des parcours empathiques, de la découverte initiale jusqu’à Figma et au code de production.'
  },
  'hero.btn.projects': { en: 'Explore Carepill', fr: 'Découvrir Carepill' },
  'hero.btn.profile': { en: 'About Me', fr: 'À Propos' },
  
  'marquee.uxui': { en: 'Product & UX/UI Design', fr: 'Design Produit & UX/UI' },
  'marquee.proto': { en: 'Interactive Prototyping', fr: 'Prototypage Interactif' },
  'marquee.webdev': { en: 'Responsive Web Platforms', fr: 'Plateformes Web Réactives' },
  'marquee.strategy': { en: 'Product Strategy & UX Research', fr: 'Stratégie Produit & Recherche UX' },
  'marquee.aiworkflow': { en: 'Design Systems & Tokens', fr: 'Design Systems & Tokens' },
  'marquee.vibecoding': { en: 'Vibe Coding & Rapid Prototyping', fr: 'Vibe Coding & Prototypage Rapide' },
  'marquee.marketing': { en: 'WCAG AA Accessibility', fr: 'Accessibilité WCAG AA' },
  'marquee.ui': { en: 'User Interface Architecture', fr: 'Architecture d’Interface' },
  'marquee.wordpress': { en: 'Frontend Engineering', fr: 'Ingénierie Frontend' },

  'works.title': { en: 'Selected Case Studies', fr: 'Études de Cas Sélectionnées' },
  'works.desc': { 
    en: 'Curated digital products, design systems, and production platforms crafted with care.',
    fr: 'Produits numériques sélectionnés, systèmes de design et plateformes conçus avec soin.'
  },
  'works.count': { en: 'Works', fr: 'Projets' },

  'wordpress.title': { en: 'Client Websites', fr: 'Sites Web Clients' },
  'wordpress.desc': { 
    en: 'Custom WordPress & e-commerce websites built with clean code, fast speeds, and immediate live deployment.',
    fr: 'Sites WordPress et e-commerce sur mesure avec un code propre, des vitesses rapides et un déploiement direct.'
  },

  'hero.title': { en: 'DESIGN WITH CREATIVE, CLARITY & CARE', fr: 'DESIGN WITH CREATIVE, CLARITY & CARE' },
  'hero.subtitle': {
    en: 'UX/UI Designer, Graphic Designer & Web Creator crafting accessible digital products, scalable Figma systems, and AI-powered web platforms.',
    fr: 'Designer UX/UI, Designer Graphique & Créatrice Web concevant des produits numériques accessibles, des systèmes Figma modulaires et des plateformes web propulsées par l’IA.'
  },
  'hero.btn.explore': { en: 'EXPLORE PROJECTS', fr: 'EXPLORER LES PROJETS' },
  'hero.btn.contact': { en: 'CONTACT', fr: 'CONTACT' },

  'about.title': { en: 'About Me', fr: 'À Propos de Moi' },
  'about.intro': {
    en: "Hi, I’m Fox :)",
    fr: "Bonjour, je suis Fox :)"
  },
  'about.p1': { 
    en: 'I design, build, and bring ideas online. As a multidisciplinary designer and developer with 6+ years of experience, I craft human-centered UX/UI product designs, distinctive graphic branding & packaging, and high-performance responsive web platforms.',
    fr: 'Je conçois, développe et donne vie aux idées en ligne. En tant que designer et créatrice multidisciplinaire forte de plus de 6 ans d\'expérience, je conçois des produits UX/UI centrés sur l\'humain, des identités graphiques et packagings distinctifs, ainsi que des plateformes web réactives à haute performance.'
  },
  'about.p2': {
    en: 'I combine thoughtful design craftsmanship with modern AI-powered workflows and vibe coding to bring ideas to life faster. From rapid prototyping and creative exploration to production-ready development, I leverage AI without compromising quality. Every solution is built on scalable Figma design systems, clean code, and a clear focus on real business goals.',
    fr: 'J\'allie conception soignée, flux de travail modernes assistés par l\'IA et vibe coding pour donner vie aux idées plus rapidement. Du prototypage rapide et l\'exploration créative au développement prêt pour la production, j\'utilise l\'IA sans jamais compromettre la qualité. Chaque solution repose sur des design systems Figma modulaires, un code propre et des objectifs concrets.'
  },

  'footer.open': { en: '✦ Open for Opportunities', fr: '✦ Ouverte aux opportunités' },
  'footer.title': { en: "Let's connect.", fr: "Connectons-nous." },
  'footer.title.1': { en: "Let's connect.", fr: "Connectons-nous." },
  'footer.title.2': { en: "", fr: "" },
  'footer.desc': { 
    en: "Open to full-time opportunities, freelance projects, creative collaborations, and digital design projects. Reach out and let's build something remarkable together.",
    fr: "Ouverte aux opportunités à temps plein, projets freelance, collaborations créatives et projets de design numérique. Contactez-moi pour bâtir ensemble quelque chose de remarquable."
  },
  'footer.btn': { en: "Let's Discuss Your Project", fr: 'Discutons de votre projet' },
  'footer.contact': { en: 'Direct Contact', fr: 'Contact Direct' },
  'footer.worldwide': { en: 'Available for roles and projects worldwide', fr: 'Disponible pour des postes et projets dans le monde entier' },
  
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
    return translations[key]?.[locale] || translations[key]?.['en'] || key;
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
