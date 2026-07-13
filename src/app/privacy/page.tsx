import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = "force-dynamic";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black mb-8 neon-text">Politique de Confidentialité</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-400 text-sm">
          <p>Dernière mise à jour : Juillet 2026</p>
          <h2 className="text-xl font-bold text-white">1. Informations collectées</h2>
          <p>À chaque visite sur notre site, nous pouvons être amenés à recueillir certaines données techniques telles que votre adresse IP, votre type de navigateur et les pages que vous avez visitées, notamment via des témoins de connexion (cookies).</p>
          <h2 className="text-xl font-bold text-white">2. Finalités du traitement</h2>
          <p>Les informations collectées nous permettent d'optimiser votre navigation, d'analyser les statistiques de fréquentation et d'assurer le bon fonctionnement de notre programme de partenariat.</p>
          <h2 className="text-xl font-bold text-white">3. Gestion des cookies</h2>
          <p>Des cookies sont placés sur votre terminal afin de mémoriser vos préférences et de tracer les interactions avec nos liens partenaires. Vous pouvez à tout moment modifier vos choix depuis notre bandeau de consentement.</p>
          <h2 className="text-xl font-bold text-white">4. Communication à des tiers</h2>
          <p>Vos données personnelles ne font l'objet d'aucune cession ni revente. En revanche, en accédant à un site partenaire via nos liens, vous êtes soumis à la propre politique de confidentialité de cet opérateur.</p>
          <h2 className="text-xl font-bold text-white">5. Exercice de vos droits</h2>
          <p>En vertu du Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et d'effacement de vos données. Contactez-nous pour toute demande en ce sens.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
