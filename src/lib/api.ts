import { ApiLandingPage, ApiPageBrand, Partner } from "@/types";
import { mockLandingPages, mockPageBrands } from "./mockDev";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const ACCOUNT_ID = process.env.ACCOUNT_ID;

export async function getLandingPage(): Promise<ApiLandingPage | null> {
  try {
    const res = await fetch(`${API_URL}/public/landing-pages/account/${ACCOUNT_ID}`);
    if (!res.ok) throw new Error("Failed to fetch landing page");
    const data: ApiLandingPage[] = await res.json();
    const activePages = data.filter(lp => lp.isActive);
    return activePages.find(lp => lp.order === 1) || activePages[0] || null;
  } catch (error) {
    console.error("API Error (Landing Page):", error);
    return mockLandingPages.find(lp => lp.isActive && lp.order === 1) || null;
  }
}

export async function fetchPartners(landingPageId: string, isMobile: boolean, hasGclid: boolean): Promise<Partner[]> {
  try {
    const res = await fetch(`${API_URL}/public/page-brands/landing-page/${landingPageId}`);
    if (!res.ok) throw new Error("Failed to fetch brands");
    const data: ApiPageBrand[] = await res.json();

    let filtered = data.filter(pb => {
      if (isMobile && hasGclid) {
        return pb.isMobile === true;
      }
      return pb.isMobile === false;
    });

    // Fallback if isMobile && hasGclid returns nothing
    if (isMobile && hasGclid && filtered.length === 0) {
      filtered = data.filter(pb => pb.isMobile === false);
    }

    const partners: Partner[] = filtered.map(pb => ({
      id: pb.brand.id,
      name: pb.brand.name,
      logo: pb.brand.logo,
      bonusText: pb.isBonusTextOverridden ? (pb.overrideBonusText || pb.brand.bonusText) : pb.brand.bonusText,
      partnerUrl: pb.overrideLink || pb.brand.link,
      isMobile: pb.isMobile,
      order: pb.order,
      rating: pb.brand.rating
    }));

    return partners.sort((a, b) => (a.order || 999) - (b.order || 999));
  } catch (error) {
    console.error("API Error (Partners):", error);
    // Mock fallback with same logic
    let filtered = mockPageBrands.filter(pb => {
      if (isMobile && hasGclid) return pb.isMobile === true;
      return pb.isMobile === false;
    });
    if (isMobile && hasGclid && filtered.length === 0) {
      filtered = mockPageBrands.filter(pb => pb.isMobile === false);
    }

    return filtered.map(pb => ({
      id: pb.brand.id,
      name: pb.brand.name,
      logo: pb.brand.logo,
      bonusText: pb.isBonusTextOverridden ? (pb.overrideBonusText || pb.brand.bonusText) : pb.brand.bonusText,
      partnerUrl: pb.overrideLink || pb.brand.link,
      isMobile: pb.isMobile,
      order: pb.order,
      rating: pb.brand.rating
    })).sort((a, b) => (a.order || 999) - (b.order || 999));
  }
}

export function getImageUrl(filename: string | null | undefined): string {
  if (!filename) return "/placeholder.svg";
  if (filename.startsWith("http")) return filename;
  if (filename.startsWith("/")) return filename;
  return `/${filename}`;
}
