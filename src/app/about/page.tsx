import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = "force-dynamic";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black mb-8 neon-text">À Propos de ChoixRoyal</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p>
            ChoixRoyal est né d'une passion pour le sport et d'une volonté de rendre l'univers des plateformes de jeux en ligne plus transparent et accessible. 
            Depuis 2024, notre équipe d'experts analyse quotidiennement le marché français pour dénicher les meilleures opportunités.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">Notre Mission</h2>
          <p>
            Notre mission est simple : vous fournir les outils et les informations nécessaires pour parier de manière éclairée et responsable. 
            Nous croyons que la connaissance est la clé du succès dans les paris sportifs.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8">Pourquoi nous choisir ?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Indépendance totale vis-à-vis des opérateurs.</li>
            <li>Transparence sur nos critères d'évaluation.</li>
            <li>Engagement fort pour le jeu responsable.</li>
            <li>Mises à jour quotidiennes des bonus et des cotes.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
