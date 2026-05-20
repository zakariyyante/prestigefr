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
    title: lp?.pageTitle || "Maître Guide - Meilleur Guide de Paris Sportifs",
    description: lp?.headParagraph || "Affiliate marketing for betting brands",
  };
}

export default async function Home() {
  const headerList = await headers();
  const userAgent = headerList.get('user-agent') || '';
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobile = mobileRegex.test(userAgent);

  // Note: gclid is read client-side via GclidTracker and stored in cookies
  // For the initial server fetch, we check if it's already in cookies
  const cookieHeader = headerList.get('cookie') || '';
  const hasGclid = cookieHeader.includes('gclid=');
  const referer = headerList.get('referer') || '';

  const lp = await getLandingPage();
  const partners = await fetchPartners( isMobile, hasGclid, referer);

  return (
    <div className="flex flex-col min-h-screen">
      <GclidTracker />
      <Header />
      
      <main className="flex-grow">
        <Hero 
          headText={lp?.headText || "Les Meilleurs Sites de Paris Sportifs"} 
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
