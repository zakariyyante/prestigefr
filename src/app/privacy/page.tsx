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
          <p>Dernière mise à jour : Mai 2026</p>
          <h2 className="text-xl font-bold text-white">1. Collecte des données</h2>
          <p>Nous collectons des informations lorsque vous visitez notre site, notamment votre adresse IP, le type de navigateur et les pages consultées via des cookies.</p>
          <h2 className="text-xl font-bold text-white">2. Utilisation des informations</h2>
          <p>Les informations que nous collectons sont utilisées pour améliorer votre expérience utilisateur, analyser le trafic et assurer le bon fonctionnement de nos liens d'affiliation.</p>
          <h2 className="text-xl font-bold text-white">3. Cookies</h2>
          <p>Nous utilisons des cookies pour stocker vos préférences et suivre les clics sur les liens d'affiliation. Vous pouvez gérer vos préférences via notre bannière de consentement.</p>
          <h2 className="text-xl font-bold text-white">4. Partage avec des tiers</h2>
          <p>Nous ne vendons ni n'échangeons vos données personnelles à des tiers. Cependant, en cliquant sur un lien de partenaire, vous êtes soumis à la politique de confidentialité de ce partenaire.</p>
          <h2 className="text-xl font-bold text-white">5. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous pour toute demande.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
