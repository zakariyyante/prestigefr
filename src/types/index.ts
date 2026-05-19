export interface ApiLandingPage {
  id: string;
  isActive: boolean;
  order: number;
  headText: string;
  headParagraph: string;
  pageTitle: string;
}

export interface ApiPageBrand {
  name: string;
  logo: string;
  bonusText: string;
  link: string;
  rating?: number;
  isMobile?: boolean;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  bonusText: string;
  partnerUrl: string;
  isMobile: boolean;
  order: number;
  rating?: number;
}
