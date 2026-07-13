import { headers } from 'next/headers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import BrandList from '@/components/BrandList';
import FAQ from '@/components/FAQ';
import { ContentSection, AdditionalSection } from '@/components/Sections';
import CookieConsent from '@/components/CookieConsent';
import GclidTracker from '@/components/GclidTracker';
import { getLandingPage, fetchPartners } from '@/lib/api';
import { Metadata } from 'next';

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const lp = await getLandingPage();
  return {
    title: lp?.pageTitle || "MonteCarloFR - Les Meilleures Plateformes de Jeux en France",
    description: lp?.headParagraph || "Explorez et évaluez les opérateurs de jeux en ligne autorisés en France, soigneusement examinés par notre équipe d'experts.",
  };
}

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const headerList = await headers();
  const params = await searchParams;
  const userAgent = headerList.get('user-agent') || '';
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobile = mobileRegex.test(userAgent);

  const hasGclid = !!params['gclid'];
  const referer = headerList.get('referer') || '';

  const lp = await getLandingPage();
  const partners = lp?.id ? await fetchPartners(lp.id, isMobile, hasGclid, referer) : [];

  return (
    <div className="flex flex-col min-h-screen">
      <GclidTracker />
      <Header />
      
      <main className="flex-grow">
        <Hero 
          headText={lp?.headText || "Les Meilleures Plateformes de Jeux en France 2026"} 
          headParagraph={lp?.headParagraph || "Découvrez notre sélection exclusive."} 
        />
        
        <BrandList partners={partners} isMobile={isMobile} />
        
        <ContentSection />
        <AdditionalSection />
        <FAQ />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}
