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
          <h2 className="text-xl font-bold text-white">1. Acceptation des conditions</h2>
          <p>En consultant PrestigeFR, vous attestez avoir pris connaissance des présentes conditions et vous engagez à les respecter, ainsi que l'ensemble des dispositions légales en vigueur.</p>
          <h2 className="text-xl font-bold text-white">2. Restrictions d'accès</h2>
          <p>Ce portail est exclusivement destiné aux individus âgés de 18 ans révolus. Toute consultation par un mineur est formellement interdite et contraire à la réglementation applicable.</p>
          <h2 className="text-xl font-bold text-white">3. Nature du service</h2>
          <p>PrestigeFR est un portail d'affiliation indépendant. Nous ne sommes titulaires d'aucune licence d'exploitation de jeux et n'organisons aucune activité ludique. Notre rôle se limite à la diffusion de contenus informatifs et de liens vers des opérateurs tiers.</p>
          <h2 className="text-xl font-bold text-white">4. Limitation de responsabilité</h2>
          <p>Nous veillons à l'exactitude des informations publiées sur ce site sans pouvoir en certifier l'exhaustivité à tout moment. La pratique en ligne comporte des risques financiers. PrestigeFR ne peut être tenu responsable des pertes subies sur des plateformes partenaires.</p>
          <h2 className="text-xl font-bold text-white">5. Propriété intellectuelle</h2>
          <p>L'ensemble des contenus éditoriaux publiés sur ce site sont la propriété exclusive de PrestigeFR. Toute reproduction, même partielle, sans autorisation écrite préalable est formellement prohibée.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
