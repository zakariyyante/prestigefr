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
          <h2 className="text-xl font-bold text-white">1. Données recueillies</h2>
          <p>Lors de vos visites, nous pouvons collecter automatiquement certaines informations techniques telles que votre adresse IP, le type de navigateur utilisé et les pages parcourues, notamment par l'intermédiaire de témoins de connexion (cookies).</p>
          <h2 className="text-xl font-bold text-white">2. Utilisation des données</h2>
          <p>Ces informations nous servent à améliorer votre expérience de navigation, à étudier les statistiques de fréquentation et à veiller au bon fonctionnement de notre programme de partenariat.</p>
          <h2 className="text-xl font-bold text-white">3. Gestion des cookies</h2>
          <p>Des témoins de connexion sont déposés sur votre appareil pour mémoriser vos préférences et enregistrer les interactions avec nos liens partenaires. Vous pouvez ajuster ou retirer votre consentement à tout moment via notre bandeau dédié.</p>
          <h2 className="text-xl font-bold text-white">4. Transmission à des tiers</h2>
          <p>Vos données personnelles ne sont ni vendues ni cédées à des tiers. Cependant, en cliquant sur un lien partenaire, vous serez soumis à la politique de confidentialité propre à cet opérateur.</p>
          <h2 className="text-xl font-bold text-white">5. Vos droits</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous bénéficiez d'un droit d'accès, de correction et de suppression de vos données. Adressez-nous votre demande via notre formulaire de contact.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
