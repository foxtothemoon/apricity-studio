import { createContext, useContext, useState, ReactNode } from 'react';
import { Locale } from './types';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Locale, string>> = {
  'nav.web': { en: 'Web Design', fr: 'Web Design' },
  'nav.uxui': { en: 'UX UI', fr: 'UX UI' },
  'nav.graphic': { en: 'Graphic Design', fr: 'Design Graphique' },
  'nav.marketing': { en: 'Online Marketing', fr: 'Marketing Digital' },
  'nav.about': { en: 'About Me', fr: 'À Propos' },
  'nav.letstalk': { en: "Let's Talk", fr: 'Discutons' },

  'filter.all': { en: 'All Disciplines', fr: 'Toutes Disciplines' },
  'filter.wordpress': { en: '1. WordPress Web Design & SEO/SEM', fr: '1. Web Design WordPress & SEO/SEM' },
  'filter.uxui': { en: '2. UX/UI Designer & App', fr: '2. Designer UX/UI & Applications' },
  'filter.graphic': { en: '3. Graphic Design', fr: '3. Design Graphique' },
  'filter.marketing': { en: '4. Online Marketing', fr: '4. Marketing Digital' },
  
  'category.wordpress.title': { en: 'Web Design & WordPress', fr: 'Web Design & WordPress' },
  'category.wordpress.tag': { en: 'AI Workflow Integration • General to E-Commerce • Live Deployments', fr: 'Intégration Workflow IA • Du Vitrine au E-Commerce • Déploiements Directs' },
  'category.wordpress.desc': { 
    en: 'Adapting modern AI into the workflow to eliminate redundant tasks, streamline branding, visual design, and deep SEO analysis — delivering everything from general business showcases to full e-commerce platforms. Every site is designed, deployed, and live immediately for real-world operations, with clean backend customization powered by foundational HTML, CSS, and coding knowledge.',
    fr: 'Intégration de l’IA moderne pour éliminer les tâches répétitives et optimiser le branding, le web design et l’analyse SEO approfondie — du site vitrine d’entreprise au e-commerce complet. Chaque site est conçu, déployé et opérationnel immédiatement, avec une gestion back-office fluide facilitée par les bases du HTML, CSS et du code.'
  },

  'category.uxui.title': { en: 'UX/UI Designer & App Design', fr: 'Designer UX/UI & Applications' },
  'category.uxui.tag': { en: 'User Research • Figma Systems • Mobile & Web', fr: 'Recherche Utilisateur • Systèmes Figma • Mobile & Web' },
  'category.uxui.desc': { 
    en: 'Clean mobile and web interfaces designed for real people, focused on ease of use and accessibility.',
    fr: 'Interfaces mobiles et web claires et pensées pour de vrais utilisateurs, axées sur la simplicité et l’accessibilité.'
  },

  'category.graphic.title': { en: 'Graphic Design', fr: 'Design Graphique' },
  'category.graphic.tag': { en: 'Brand Identity • Packaging • Editorial Campaigns', fr: 'Identité de Marque • Packaging • Campagnes Éditoriales' },
  'category.graphic.desc': { 
    en: 'Brand identities, perfume packaging, editorial social campaigns, and custom visual assets.',
    fr: 'Identités de marque, packaging de parfum, campagnes éditoriales et créations visuelles sur mesure.'
  },

  'category.marketing.title': { en: 'Online Marketing & Ads', fr: 'Marketing Digital & Publicité' },
  'category.marketing.tag': { en: 'Business Analysis • Target Audience • Keywords • Copywriting • Facebook Ads', fr: 'Analyse Business • Cible • Mots-clés • Copywriting • Facebook Ads' },
  'category.marketing.desc': {
    en: 'Real-world data-driven marketing: from business model analysis and persona targeting to high-intent keywords, compelling copywriting, and high-ROI Facebook Ads under strictly limited budgets.',
    fr: 'Marketing pragmatique axé sur les résultats : de l’analyse d’entreprise au ciblage d’audience, mots-clés transactionnels, copywriting persuasif et Facebook Ads à budget maîtrisé.'
  },

  'overview.badge': { en: 'WHAT I DO', fr: 'CE QUE JE FAIS' },
  'overview.title': { en: 'Core Disciplines', fr: 'Domaines d’Intervention' },
  'overview.desc': {
    en: 'From visual design and websites to digital marketing, I create work that looks good, works well, and is ready for the real world.',
    fr: 'Du design visuel aux sites web et au marketing digital, je crée des projets esthétiques, fonctionnels et prêts pour le monde réel.'
  },

  'hero.available': { en: 'Available for new opportunities', fr: 'Disponible pour de nouvelles opportunités' },
  'hero.title.part1': { en: 'Design & Build ', fr: 'Concevoir & Bâtir ' },
  'hero.title.part2': { en: 'Ideas ', fr: 'des Idées ' },
  'hero.title.part3': { en: 'Online.', fr: 'en Ligne.' },
  'hero.title.part4': { en: '', fr: '' },
  'hero.desc': { 
    en: 'I design, build, and bring ideas online. From visual design and websites to digital marketing, I create work that looks good, works well, and is ready for the real world — with AI helping me move from idea to execution.',
    fr: 'Je conçois, développe et donne vie aux idées en ligne. Du design visuel aux sites web et au marketing digital, je crée des projets esthétiques, fonctionnels et prêts pour le monde réel — avec l’IA pour m’accompagner de l’idée à la réalisation.'
  },
  'hero.btn.projects': { en: 'Explore Work', fr: 'Voir les Travaux' },
  'hero.btn.profile': { en: 'About Me', fr: 'À Propos' },
  
  'marquee.uxui': { en: 'UX/UI Design', fr: 'Design UX/UI' },
  'marquee.proto': { en: 'Prototyping', fr: 'Prototypage' },
  'marquee.webdev': { en: 'Web Development', fr: 'Développement Web' },
  'marquee.strategy': { en: 'Product Strategy', fr: 'Stratégie Produit' },
  'marquee.aiworkflow': { en: 'AI Workflow', fr: 'Flux de Travail IA' },
  'marquee.vibecoding': { en: 'Vibe Coding', fr: 'Vibe Coding' },
  'marquee.marketing': { en: 'Online Marketing', fr: 'Marketing Digital' },
  'marquee.ui': { en: 'User Interface', fr: 'Interface Utilisateur' },
  'marquee.wordpress': { en: 'WordPress', fr: 'WordPress' },

  'works.title': { en: 'Selected Work', fr: 'Travaux Choisis' },
  'works.desc': { 
    en: 'Recent projects across web development, app design, packaging, and digital marketing.',
    fr: 'Projets récents en développement web, design d\'applications, packaging et marketing digital.'
  },
  'works.count': { en: 'Works', fr: 'Projets' },

  'wordpress.title': { en: 'Client Websites', fr: 'Sites Web Clients' },
  'wordpress.desc': { 
    en: 'Custom WordPress & e-commerce websites built with clean code, fast speeds, and immediate live deployment.',
    fr: 'Sites WordPress et e-commerce sur mesure avec un code propre, des vitesses rapides et un déploiement direct.'
  },

  'about.title': { en: 'About Me', fr: 'À Propos de Moi' },
  'about.intro': {
    en: "Hi, I'm Siwat ('Fox').",
    fr: "Bonjour, je suis Siwat ('Fox')."
  },
  'about.p1': { 
    en: 'I design, build, and bring ideas online. With 6+ years of freelance experience, I build custom WordPress websites, user-friendly digital interfaces, and targeted marketing campaigns.',
    fr: 'Je conçois, développe et donne vie aux idées en ligne. Fort de plus de 6 ans d\'expérience en freelance, je conçois des sites WordPress sur mesure, des interfaces intuitives et des campagnes ciblées.'
  },
  'about.p2': {
    en: 'I focus on practical craftsmanship: clean code, fast loading speeds, and production-ready execution tailored to real business goals.',
    fr: 'Je privilégie une réalisation concrète : code propre, chargement rapide et exécution prête pour la production, alignée sur les objectifs réels.'
  },

  'footer.open': { en: '✦ Open for new projects', fr: '✦ Disponible pour de nouveaux projets' },
  'footer.title.1': { en: "Let's bring your ideas ", fr: "Donnons vie à vos idées " },
  'footer.title.2': { en: "online.", fr: "en ligne." },
  'footer.desc': { 
    en: "Open for freelance commissions and full-time opportunities. Reach out and let's create something great together.",
    fr: "Disponible pour des projets en freelance et opportunités à temps plein. Contactez-moi pour donner vie à vos projets."
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
