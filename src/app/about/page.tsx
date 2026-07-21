import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = "force-dynamic";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black mb-8 red-neon-text">À Propos de PrestigeFR</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p>
            PrestigeFR est né d'un engouement sincère pour le sport et d'une volonté affirmée : rendre le marché des opérateurs en ligne plus accessible, plus transparent et plus compréhensible pour tous. 
            Depuis 2024, nos analystes scrutent quotidiennement le marché français pour vous signaler les opportunités les plus intéressantes.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">Notre Vocation</h2>
          <p>
            Nous aspirons à vous fournir les ressources et les repères nécessaires pour aborder les plateformes en ligne avec discernement et sérénité. 
            Chez PrestigeFR, nous sommes convaincus qu'un utilisateur informé prend des décisions bien plus éclairées.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">Ce Qui Nous Distingue</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Autonomie éditoriale totale, sans aucune influence des opérateurs référencés.</li>
            <li>Méthodologie d'évaluation transparente et vérifiable par tous.</li>
            <li>Engagement constant en faveur d'une pratique maîtrisée et responsable.</li>
            <li>Mise à jour permanente des offres, des analyses et des classements.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
