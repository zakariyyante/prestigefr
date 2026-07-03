import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = "force-dynamic";

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black mb-8 neon-text">Conditions d'Utilisation</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-400 text-sm">
          <p>Dernière mise à jour : Mai 2026</p>
          <h2 className="text-xl font-bold text-white">1. Acceptation des conditions</h2>
          <p>En accédant à MajestiaFR, vous acceptez d'être lié par les présentes conditions d'utilisation et toutes les lois et réglementations applicables.</p>
          <h2 className="text-xl font-bold text-white">2. Utilisation du site</h2>
          <p>Ce site est destiné exclusivement aux personnes âgées de 18 ans et plus. L'accès est interdit aux mineurs.</p>
          <h2 className="text-xl font-bold text-white">3. Nature du service</h2>
          <p>MajestiaFR est un site d'affiliation. Nous ne sommes pas un opérateur de jeux. Nous fournissons des informations et des liens vers des plateformes tierces.</p>
          <h2 className="text-xl font-bold text-white">4. Responsabilité</h2>
          <p>Nous nous efforçons de fournir des informations exactes, mais nous ne garantissons pas l'absence d'erreurs. Les jeux d'argent en ligne comportent des risques. Nous ne sommes pas responsables des pertes financières subies sur les plateformes tierces.</p>
          <h2 className="text-xl font-bold text-white">5. Propriété intellectuelle</h2>
          <p>Le contenu de ce site est la propriété de MajestiaFR. Toute reproduction sans autorisation est interdite.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
