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

export async function fetchPartners(landingPageId: string, isMobile: boolean, hasGclid: boolean, referer: string): Promise<Partner[]> {
  function filterAndMap(data: ApiPageBrand[]): Partner[] {
    const filtered = data.filter(pb => {
      if (pb.isMobile === false) return true;
      if (pb.isMobile === true) return isMobile;
      return true;
    });

    return filtered.map((pb, i) => {
      const bonusText = pb.isBonusTextOverridden ? pb.overrideBonusText : pb.brand?.bonusText;
      const partnerUrl = pb.overrideLink || pb.brand?.link;
      const logo = pb.lightLogoUrl || pb.darkLogoUrl || pb.brand?.lightLogoUrl || pb.brand?.darkLogoUrl || pb.brand?.lightLogo || pb.brand?.darkLogo;

      return {
        id: pb.id || String(i + 1),
        name: pb.brand?.name || "Unknown",
        logo: logo || "",
        bonusText: bonusText || "",
        partnerUrl: partnerUrl || "",
        isMobile: pb.isMobile,
        order: pb.order,
        rating: parseFloat((10 - i * 0.1).toFixed(1)),
      };
    }).sort((a, b) => a.order - b.order);
  }

  try {
    const res = await fetch(`${API_URL}/public/page-brands/landing-page/${landingPageId}`);
    if (!res.ok) throw new Error("Failed to fetch brands");
    const data: ApiPageBrand[] = await res.json();
    return filterAndMap(data);
  } catch (error) {
    console.error("API Error (Partners):", error);
    return filterAndMap(mockPageBrands as any); // Type cast since mock data structure might be outdated
  }
}

export function getImageUrl(filename: string | null | undefined): string {
  if (!filename) return "/placeholder.svg";

  // Hide the absolute Vercel blob URL using our Next.js rewrite
  if (filename.startsWith("https://qokbynptuwcxxogg.public.blob.vercel-storage.com/partners/")) {
    return filename.replace("https://qokbynptuwcxxogg.public.blob.vercel-storage.com/partners/", "/partners/");
  }

  if (filename.startsWith("http")) return filename;
  
  // Clean up filename just in case
  const cleanFilename = filename.startsWith("/") ? filename.substring(1) : filename;
  
  if (!API_URL) {
    return `/${cleanFilename}`;
  }
  
  const formattedBaseUrl = API_URL.startsWith("http") ? API_URL : `https://${API_URL}`;
  return `${formattedBaseUrl}/files/brands/${cleanFilename}`;
}
