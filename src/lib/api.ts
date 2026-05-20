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

export async function fetchPartners(isMobile: boolean, hasGclid: boolean, referer: string): Promise<Partner[]> {
  const showMobile = isMobile && hasGclid && referer.toLowerCase().includes("google");

  function filterAndMap(data: ApiPageBrand[]): Partner[] {
    const filtered = data.filter(pb => showMobile ? pb.isMobile === true : !pb.isMobile);
    return filtered.map((pb, i) => ({
      id: String(i + 1),
      name: pb.name,
      logo: pb.logo,
      bonusText: pb.bonusText,
      partnerUrl: pb.link,
      isMobile: pb.isMobile ?? false,
      order: i + 1,
      rating: parseFloat((10 - i * 0.1).toFixed(1)),
    }));
  }

  try {
    const res = await fetch(`${API_URL}/public/page-brands/account/${ACCOUNT_ID}`);
    if (!res.ok) throw new Error("Failed to fetch brands");
    const data: ApiPageBrand[] = await res.json();
    return filterAndMap(data);
  } catch (error) {
    console.error("API Error (Partners):", error);
    return filterAndMap(mockPageBrands);
  }
}

export function getImageUrl(filename: string | null | undefined): string {
  if (!filename) return "/placeholder.svg";
  if (filename.startsWith("http")) return filename;
  if (filename.startsWith("/")) return filename;
  return `/${filename}`;
}
