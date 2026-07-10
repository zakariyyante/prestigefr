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
          <p>Dernière révision : Mai 2026</p>
          <h2 className="text-xl font-bold text-white">1. Acceptation des présentes conditions</h2>
          <p>L'accès à MonteleFR implique votre adhésion aux présentes conditions d'utilisation ainsi qu'au respect de l'ensemble des dispositions légales en vigueur.</p>
          <h2 className="text-xl font-bold text-white">2. Public concerné</h2>
          <p>Ce site s'adresse exclusivement aux personnes majeures, âgées de 18 ans révolus. Toute consultation par un mineur est formellement interdite.</p>
          <h2 className="text-xl font-bold text-white">3. Périmètre du service</h2>
          <p>MonteleFR opère en tant que plateforme d'affiliation et ne dispose d'aucune licence d'opérateur de jeux. Nous mettons à disposition des informations et des redirections vers des sites tiers indépendants.</p>
          <h2 className="text-xl font-bold text-white">4. Limitation de responsabilité</h2>
          <p>Bien que nous mettions tout en œuvre pour publier des informations fiables, nous ne pouvons en garantir l'exactitude absolue. Les jeux en ligne impliquent des risques financiers. MonteleFR décline toute responsabilité quant aux pertes occasionnées sur les plateformes partenaires.</p>
          <h2 className="text-xl font-bold text-white">5. Droits de propriété intellectuelle</h2>
          <p>L'ensemble du contenu publié sur ce site appartient à MonteleFR. Toute reproduction ou diffusion sans autorisation préalable est strictement prohibée.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
