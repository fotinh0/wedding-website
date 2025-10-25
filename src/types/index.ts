export interface NavigationItem {
  name: string;
  href: string;
}

export interface WeddingDetails {
  bride: string;
  groom: string;
  date: string;
  venue: string;
  ceremony: string;
  reception: string;
}

export type Lang = 'en' | 'es' | 'sq';

export interface Language {
  code: Lang;
  name: string;
}

export interface HomepageTranslationContent {
  overlay: string;
  welcome: string;
  details: string;
  story: string;
  howWeMet: string;
  howWeMetText: string;
  proposal: string;
  proposalText: string;
  date: string;
  date2: string;
  saveTheDateText: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}
