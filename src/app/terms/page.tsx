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
          <p>En consultant MonteCarloFR, vous attestez avoir lu et compris les présentes conditions et vous engagez à les observer, ainsi que l'ensemble des dispositions légales applicables.</p>
          <h2 className="text-xl font-bold text-white">2. Restrictions d'accès</h2>
          <p>Ce site est exclusivement destiné aux personnes âgées de 18 ans révolus. Toute consultation par un individu mineur est formellement proscrite et contraire à la réglementation en vigueur.</p>
          <h2 className="text-xl font-bold text-white">3. Nature du service proposé</h2>
          <p>MonteCarloFR est un portail d'affiliation indépendant. Nous ne sommes détenteurs d'aucune licence d'exploitation et n'organisons aucune activité de jeu. Notre rôle se limite à fournir des contenus informatifs et des liens vers des opérateurs tiers.</p>
          <h2 className="text-xl font-bold text-white">4. Limitation de responsabilité</h2>
          <p>Nous veillons à la fiabilité des informations diffusées sur ce site, sans pouvoir en certifier l'exhaustivité à tout moment. La pratique des jeux en ligne implique des risques financiers. MonteCarloFR ne peut être tenu responsable des pertes éventuellement subies sur des plateformes partenaires.</p>
          <h2 className="text-xl font-bold text-white">5. Droits de propriété intellectuelle</h2>
          <p>L'ensemble des contenus éditoriaux publiés sur ce site sont la propriété exclusive de MonteCarloFR. Toute reproduction, même partielle, sans autorisation écrite préalable, est formellement prohibée.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
