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
    title: lp?.pageTitle || "PrestigeFR - Les Meilleures Plateformes de Jeux en France",
    description: lp?.headParagraph || "Découvrez et analysez les opérateurs de jeux en ligne autorisés en France, minutieusement examinés par notre équipe d'experts indépendants.",
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
          headText={lp?.headText || "Classement des Opérateurs de Jeux Homologués en France"} 
          headParagraph={lp?.headParagraph || "Trouvez un opérateur agréé ANJ en toute transparence : nous analysons les offres, les conditions de retrait et l'expérience utilisateur — sans inscription requise sur PrestigeFR."} 
        />
        
        <div id="brands">
          <BrandList partners={partners} isMobile={isMobile} />
        </div>
        
        <ContentSection />
        <AdditionalSection />
        <FAQ />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}
