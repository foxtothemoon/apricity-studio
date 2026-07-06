export type Locale = 'en' | 'fr';

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
  description: LocalizedString;
  imageUrl: string;
  images?: string[];
  liveUrl?: string;
  tags: string[];
  details: ProjectDetails;
}
