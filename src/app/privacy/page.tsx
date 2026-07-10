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
          <p>Dernière révision : Mai 2026</p>
          <h2 className="text-xl font-bold text-white">1. Données collectées</h2>
          <p>Lors de votre navigation sur notre site, nous recueillons certaines informations telles que votre adresse IP, le type de navigateur utilisé et les pages que vous consultez, notamment via des cookies de suivi.</p>
          <h2 className="text-xl font-bold text-white">2. Usage des données</h2>
          <p>Les données que nous collectons servent à perfectionner votre expérience de navigation, à mesurer l'audience de notre site et à garantir le bon fonctionnement de notre programme d'affiliation.</p>
          <h2 className="text-xl font-bold text-white">3. Utilisation des cookies</h2>
          <p>Des cookies sont déposés afin de mémoriser vos préférences et de tracer les interactions avec nos liens partenaires. Vous conservez la possibilité de gérer ces paramètres depuis notre bandeau de consentement.</p>
          <h2 className="text-xl font-bold text-white">4. Transmission à des tiers</h2>
          <p>Vos données personnelles ne sont ni vendues ni cédées à des organismes tiers. En revanche, en suivant un lien vers un site partenaire, vous relevez dès lors de la politique de confidentialité de cet opérateur.</p>
          <h2 className="text-xl font-bold text-white">5. Droits des utilisateurs</h2>
          <p>Conformément au RGPD, vous bénéficiez d'un droit d'accès, de modification et de suppression de vos données personnelles. Adressez-nous votre demande pour tout exercice de ces droits.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
