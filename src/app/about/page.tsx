import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = "force-dynamic";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black mb-8 red-neon-text">À Propos de BiarritzFR</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p>
            BiarritzFR est né d'une passion pour le sport et d'une ambition claire : rendre l'univers des plateformes de jeux en ligne plus lisible, plus transparent et plus accessible à tous. 
            Depuis 2024, nos spécialistes scrutent le marché français chaque jour pour vous signaler les meilleures opportunités disponibles.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">Notre Raison d'Être</h2>
          <p>
            Nous avons pour vocation de vous armer des connaissances et des outils nécessaires pour aborder les jeux en ligne avec lucidité et discernement. 
            Chez BiarritzFR, nous sommes convaincus qu'un joueur bien informé prend de meilleures décisions.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">Nos Points Forts</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Indépendance éditoriale complète, sans influence des opérateurs.</li>
            <li>Critères d'évaluation publics et vérifiables par tous.</li>
            <li>Engagement ferme en faveur du jeu responsable.</li>
            <li>Mise à jour régulière des offres, des cotes et des classements.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
