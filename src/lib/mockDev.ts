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
    name: "X3Bet",
    logo: "/x3bet.svg",
    bonusText: "100 % jusquà 1000 € + 200 FS",
    link: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5371&utm_campaign=X3Bet-SRJ53-FR&afp=",
    isMobile: true,
  },
  {
    name: "SpinBoss",
    logo: "/spinboss.png",
    bonusText: "400% JUSQU'À 15 000 € + 400 FS",
    link: "https://spbs.lynmonkel.com/?mid=355610_2121757&subid=SpinBoss-SRJ53-FR&clickid=",
    isMobile: true,

  },
  {
    name: "SGCasino",
    logo: "/sgcasino.png",
    bonusText: "100 % jusqu’à 500 € + 200 Tours Gratuits + 1 Bonus Crab",
    link: "https://sgc.monalvor.com/?mid=107161_2138954&subid=SGCasino-SRJ53-FR&clickid=",
    isMobile: true,

  },
  // {
  //   name: "Spinanga",
  //   logo: "/Spinanga.png",
  //   bonusText: "100 % JUSQU’À 500 € + 200 TOURS GRATUITS + 1 BONUS CRAB",
  //   link: "https://spng.lynmonkel.com/?mid=64877_2138959&var1=Spinanga-SRJ53-FR&clickid=",
  //   isMobile: true,
  // },
  {
    name: "SpinFin",
    logo: "/SpinFin.png",
    bonusText: "350% jusqu’à 10 000 € + 500 FS",
    link: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5358&utm_campaign=SpinFin-SRJ53-FR&afp=",
    isMobile: true,

  },
  {
    name: "Bwin",
    logo: "/bwin_dark.png",
    bonusText: "Votre mise remboursée jusqu'à 100€",
    link: "https://mediaserver.entainpartners.com/renderBanner.do?zoneId=2159573",
  },
];
