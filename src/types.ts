export type Locale = 'en' | 'fr';

export type CategoryFilter = 'all' | 'wordpress_web' | 'ux_ui_app' | 'graphic_design' | 'online_marketing';

export interface LocalizedString {
  en: string;
  fr: string;
}

export interface LocalizedStringArray {
  en: string[];
  fr: string[];
}

export interface ProjectDetails {
  overview: LocalizedString;
  problemStatement: LocalizedString;
  painPoints: LocalizedStringArray;
  goals: LocalizedStringArray;
  userPersona: LocalizedString;
  ideation: LocalizedString;
  uiDesign: LocalizedString;
  coreFeatures?: LocalizedString;
  technicalHighlights?: LocalizedString;
  aiWorkflow?: LocalizedString;
  outcome: LocalizedString;
}

export interface Project {
  id: string;
  slug: string;
  title: LocalizedString;
  category: LocalizedString;
  categoryType: 'web' | 'app';
  description: LocalizedString;
  imageUrl: string;
  images?: string[];
  liveUrl?: string;
  tags: string[];
  details: ProjectDetails;
}

export interface WebClientSite {
  id: string;
  name: string;
  url: string;
  image: string;
  description: LocalizedString;
  tags: string[];
  role: LocalizedString;
}

export interface GraphicDesignItem {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  description: LocalizedString;
  tags: string[];
  previewType: 'palette_and_spec' | 'sticker_sheet' | 'packaging_dieline' | 'promotional_banner' | 'pixel_sprites' | 'editorial_cards';
  palette?: { hex: string; name: string }[];
  specs?: { label: LocalizedString; value: string }[];
  highlights?: LocalizedStringArray;
  image?: string;
}

export interface MarketingMetric {
  label: LocalizedString;
  value: string;
  subtext?: LocalizedString;
}

export interface MarketingWorkflowStep {
  stepNumber: string;
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  coreConcepts: LocalizedString[];
  tactics: {
    name: LocalizedString;
    description: LocalizedString;
  }[];
  appliedToRealEstate: LocalizedString;
  appliedToLanguageCourse: LocalizedString;
}

export interface FacebookAdCaseStudy {
  id: string;
  adNumber: string;
  businessType: LocalizedString;
  tagline: LocalizedString;
  image: string;
  goal: string;
  status: string;
  budgetType: LocalizedString;
  budgetValue: string;
  duration: LocalizedString;
  metrics: {
    messagingStarted: number;
    costPerMessage: string;
    reach: number;
    views: number;
    videoPlays?: number;
  };
  targetAudience: {
    demographics: LocalizedString;
    interests: LocalizedString[];
    painPointSolved: LocalizedString;
  };
  keywordStrategy: {
    highIntentKeywords: string[];
    explanation: LocalizedString;
  };
  copywritingExcerpt: {
    headline: string;
    body: string;
    cta: string;
  };
  keyTakeaways: LocalizedString[];
}

export interface OnlineMarketingStrategy {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  category: LocalizedString;
  description: LocalizedString;
  tags: string[];
  metrics: MarketingMetric[];
  tactics: {
    name: LocalizedString;
    description: LocalizedString;
    impact: LocalizedString;
  }[];
  caseStudyContext?: LocalizedString;
}

