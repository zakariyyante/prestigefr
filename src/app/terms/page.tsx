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
          <p>Dernière mise à jour : Juillet 2026</p>
          <h2 className="text-xl font-bold text-white">1. Adhésion aux conditions</h2>
          <p>En naviguant sur BiarritzFR, vous reconnaissez avoir pris connaissance des présentes conditions et vous engagez à les respecter, ainsi que l'ensemble des textes légaux applicables.</p>
          <h2 className="text-xl font-bold text-white">2. Restrictions d'accès</h2>
          <p>Ce site est strictement réservé aux individus âgés de 18 ans ou plus. Toute consultation par un mineur est formellement interdite et contraire aux règles en vigueur.</p>
          <h2 className="text-xl font-bold text-white">3. Nature et périmètre du service</h2>
          <p>BiarritzFR est une plateforme d'affiliation indépendante. Nous ne détenons aucune licence d'opérateur de jeux et n'organisons aucune activité ludique. Nous mettons uniquement à disposition des informations comparatives et des liens vers des sites tiers.</p>
          <h2 className="text-xl font-bold text-white">4. Responsabilité limitée</h2>
          <p>Nous nous efforçons d'assurer l'exactitude des informations publiées, sans pouvoir en garantir l'exhaustivité. Les activités de jeu en ligne comportent des risques financiers inhérents. BiarritzFR ne saurait être tenu responsable des pertes survenues sur les plateformes partenaires.</p>
          <h2 className="text-xl font-bold text-white">5. Propriété du contenu</h2>
          <p>L'intégralité du contenu éditorial de ce site appartient à BiarritzFR. Sa reproduction, partielle ou totale, sans accord écrit préalable, est strictement interdite.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
