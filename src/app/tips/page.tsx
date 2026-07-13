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
            <h3 className="text-2xl font-bold">Gérez votre Enveloppe Financière</h3>
            <p className="text-gray-400">
              Définissez un montant maximal et ne le franchissez jamais. Fractionnez-le en parts et ne misez pas plus de 1 à 5 % de votre capital total sur une même sélection.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-2xl font-bold">Fondez-vous sur les Statistiques</h3>
            <p className="text-gray-400">
              Écartez l'instinct au profit des faits. Chaque décision doit s'appuyer sur des données tangibles : forme actuelle des équipes, absences importantes, historiques de confrontations et enjeu du match.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-2xl font-bold">Limitez vos Accumulations</h3>
            <p className="text-gray-400">
              Chaque événement ajouté multiplie le risque de façon exponentielle. Privilégiez les mises simples ou les combinés courts de 2 à 3 sélections au maximum.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
              <BookOpen size={28} />
            </div>
            <h3 className="text-2xl font-bold">Explorez les Marchés Alternatifs</h3>
            <p className="text-gray-400">
              Over/Under, Handicap Asiatique, Double Chance... Chaque marché obéit à sa propre logique. Les maîtriser vous ouvre des fenêtres d'opportunités souvent ignorées par la majorité des joueurs.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-panel border border-primary/20 p-8 rounded-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Pratiquez Toujours avec Lucidité</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Le jeu ne devrait jamais être source d'anxiété ou de tensions financières. Dès que vous percevez une perte de maîtrise, sollicitez une aide professionnelle sans tarder.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GamCare (UK)</a>
            <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BeGambleAware (UK)</a>
            <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Joueurs Info Service (FR)</a>
          </div>
          <a href="/" className="inline-block bg-primary text-background font-bold px-12 py-4 rounded-xl shadow-neon hover:scale-105 transition-all">
            Voir le Classement
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
