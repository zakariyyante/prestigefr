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
    id: "1",
    order: 1,
    isMobile: true,
    isBonusTextOverridden: false,
    overrideBonusText: "",
    overrideLink: "",
    brand: {
      name: "X3Bet",
      lightLogo: "/x3bet.svg",
      darkLogo: "/x3bet.svg",
      bonusText: "100 % jusquà 1000 € + 200 FS",
      link: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5371&utm_campaign=X3Bet-SRJ53-FR&afp=",
    }
  },
  {
    id: "2",
    order: 2,
    isMobile: true,
    isBonusTextOverridden: false,
    overrideBonusText: "",
    overrideLink: "",
    brand: {
      name: "SpinBoss",
      lightLogo: "/spinboss.png",
      darkLogo: "/spinboss.png",
      bonusText: "400% JUSQU'À 15 000 € + 400 FS",
      link: "https://spbs.lynmonkel.com/?mid=355610_2121757&subid=SpinBoss-SRJ53-FR&clickid=",
    }
  },
  {
    id: "3",
    order: 3,
    isMobile: true,
    isBonusTextOverridden: false,
    overrideBonusText: "",
    overrideLink: "",
    brand: {
      name: "SGCasino",
      lightLogo: "/sgcasino.png",
      darkLogo: "/sgcasino.png",
      bonusText: "100 % jusqu’à 500 € + 200 Tours Gratuits + 1 Bonus Crab",
      link: "https://sgc.monalvor.com/?mid=107161_2138954&subid=SGCasino-SRJ53-FR&clickid=",
    }
  },
  {
    id: "4",
    order: 4,
    isMobile: true,
    isBonusTextOverridden: false,
    overrideBonusText: "",
    overrideLink: "",
    brand: {
      name: "SpinFin",
      lightLogo: "/spinfin.png",
      darkLogo: "/spinfin.png",
      bonusText: "350% jusqu’à 10 000 € + 500 FS",
      link: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5358&utm_campaign=SpinFin-SRJ53-FR&afp=",
    }
  },
  {
    id: "5",
    order: 5,
    isMobile: false,
    isBonusTextOverridden: false,
    overrideBonusText: "",
    overrideLink: "",
    brand: {
      name: "Bwin",
      lightLogo: "/bwin_dark.png",
      darkLogo: "/bwin_dark.png",
      bonusText: "Votre mise remboursée jusqu'à 100€",
      link: "https://mediaserver.entainpartners.com/renderBanner.do?zoneId=2159573",
    }
  },
];
