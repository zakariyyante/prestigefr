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
            <h3 className="text-2xl font-bold">Gérez votre Bankroll</h3>
            <p className="text-gray-400">
              Ne misez jamais plus que ce que vous pouvez vous permettre de perdre. Divisez votre capital en unités et n'engagez qu'un petit pourcentage (1-5%) sur chaque mise.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-2xl font-bold">Analysez les Statistiques</h3>
            <p className="text-gray-400">
              Ne misez pas sur votre équipe de cœur. Utilisez des données objectives : forme récente, blessures, historique des confrontations et enjeux du match.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-2xl font-bold">Évitez les Combinés Trop Longs</h3>
            <p className="text-gray-400">
              Plus vous ajoutez de matchs, plus le risque augmente de manière exponentielle. Privilégiez les sélections simples ou les combinés de 2-3 matchs maximum.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
              <BookOpen size={28} />
            </div>
            <h3 className="text-2xl font-bold">Maîtrisez les Types de Mises</h3>
            <p className="text-gray-400">
              Over/Under, Handicap Asiatique, Double Chance... Maîtriser les différents marchés vous permet de trouver de la valeur là où les autres ne regardent pas.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-panel border border-primary/20 p-8 rounded-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Jeu Responsable</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Le jeu doit rester un divertissement. Si vous sentez que vous perdez le contrôle, n'hésitez pas à demander de l'aide.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GamCare (UK)</a>
            <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BeGambleAware (UK)</a>
            <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Joueurs Info Service (FR)</a>
          </div>
          <a href="/" className="inline-block bg-primary text-background font-bold px-12 py-4 rounded-xl shadow-neon hover:scale-105 transition-all">
            Retour au Classement
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
