import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Lightbulb, TrendingUp, ShieldAlert, BookOpen } from 'lucide-react';

export const dynamic = "force-dynamic";

export default function Tips() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black mb-12 text-center red-neon-text">Conseils de Pronostics Sportifs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-2xl font-bold">Maîtrisez votre Budget</h3>
            <p className="text-gray-400">
              Établissez une enveloppe dédiée et ne la dépassez en aucun cas. Répartissez-la en portions et n'engagez jamais plus de 1 à 5 % de votre capital sur une seule sélection.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-2xl font-bold">Raisonnez avec les Chiffres</h3>
            <p className="text-gray-400">
              Bannissez les choix affectifs. Appuyez chaque décision sur des données factuelles : dynamique récente des équipes, absences, confrontations passées et importance de la rencontre.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-2xl font-bold">Restez Concis dans vos Combinaisons</h3>
            <p className="text-gray-400">
              À chaque sélection supplémentaire, le risque se multiplie de façon exponentielle. Optez pour des mises uniques ou des accumulations courtes de 2 à 3 résultats au maximum.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
              <BookOpen size={28} />
            </div>
            <h3 className="text-2xl font-bold">Diversifiez vos Types de Mises</h3>
            <p className="text-gray-400">
              Over/Under, Handicap Asiatique, Double Chance... Chaque marché possède sa propre logique. En les maîtrisant, vous débloquez des opportunités souvent négligées par la majorité.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-panel border border-primary/20 p-8 rounded-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Jouez Toujours de Façon Raisonnée</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Le jeu ne doit jamais être source de stress ou de contraintes financières. Dès que vous ressentez une perte de contrôle, cherchez de l'aide sans attendre.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GamCare (UK)</a>
            <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BeGambleAware (UK)</a>
            <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Joueurs Info Service (FR)</a>
          </div>
          <a href="/" className="inline-block bg-primary text-background font-bold px-12 py-4 rounded-xl shadow-neon hover:scale-105 transition-all">
            Consulter le Classement
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
