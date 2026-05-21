export interface ApiLandingPage {
  id: string;
  isActive: boolean;
  order: number;
  headText: string;
  headParagraph: string;
  pageTitle: string;
}

export interface ApiPageBrand {
  id: string;
  order: number;
  isMobile: boolean;
  isBonusTextOverridden: boolean;
  overrideBonusText: string;
  overrideLink: string;
  brand: {
    id?: string;
    name: string;
    lightLogo: string;
    darkLogo: string;
    bonusText: string;
    link: string;
  };
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
