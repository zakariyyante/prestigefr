import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = "force-dynamic";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black mb-8 red-neon-text">À Propos de MonteleFR</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p>
            MonteleFR est le fruit d'un attachement profond au sport et d'une volonté ferme de démystifier l'univers des plateformes de jeux en ligne. 
            Depuis 2024, notre équipe de spécialistes scrute le marché français au quotidien pour vous faire découvrir les meilleures opportunités disponibles.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">Notre Engagement</h2>
          <p>
            Nous nous donnons pour objectif de vous transmettre les ressources et les informations indispensables pour jouer en pleine connaissance de cause et de façon responsable. 
            Chez nous, la maîtrise du sujet est le premier atout du joueur averti.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">Ce qui nous distingue</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Neutralité totale vis-à-vis des opérateurs référencés.</li>
            <li>Clarté absolue sur nos méthodes d'évaluation.</li>
            <li>Attachement sincère à la pratique responsable du jeu.</li>
            <li>Actualisation quotidienne des promotions et des cotes.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
