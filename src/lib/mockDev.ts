import { ApiLandingPage, ApiPageBrand } from "@/types";

export const mockLandingPages: ApiLandingPage[] = [
  {
    id: "lp_1",
    isActive: true,
    order: 1,
    headText: "Les Meilleurs Sites de Paris Sportifs en France 2026",
    headParagraph: "Découvrez notre sélection exclusive des plateformes les plus fiables et performantes pour vos paris sportifs.",
    pageTitle: "Maître Guide - Meilleur Guide de Paris Sportifs",
  }
];

export const mockPageBrands: ApiPageBrand[] = [
  {
    id: "pb_1",
    brand: {
      id: "brand_1",
      name: "Bwin",
      logo: "/bwin_dark.png",
      bonusText: "Votre mise remboursée jusqu'à 100€",
      link: "https://mediaserver.entainpartners.com/renderBanner.do?zoneId=2159573",
      rating: 9.8,
    },
    isBonusTextOverridden: false,
    isMobile: false,
    order: 1,
  }
];
