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
            <h3 className="text-2xl font-bold">Pilotez votre Bankroll</h3>
            <p className="text-gray-400">
              Ne dépassez jamais les limites que vous vous êtes fixées. Fractionnez votre budget en unités et n'allouez qu'une fraction raisonnable (1–5 %) à chaque pronostic.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-2xl font-bold">Fondez-vous sur les Données</h3>
            <p className="text-gray-400">
              Écartez l'affect et appuyez-vous sur des indicateurs concrets : état de forme actuel, absences sur blessure, historique des duels directs et contexte de la rencontre.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-2xl font-bold">Limitez la Longueur des Accumulateurs</h3>
            <p className="text-gray-400">
              Chaque événement supplémentaire multiplie les risques de manière exponentielle. Préférez les mises uniques ou des accumulateurs de 2 à 3 résultats tout au plus.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
              <BookOpen size={28} />
            </div>
            <h3 className="text-2xl font-bold">Explorez les Marchés Disponibles</h3>
            <p className="text-gray-400">
              Over/Under, Handicap Asiatique, Double Chance... Élargir votre connaissance des marchés vous ouvre des opportunités que la majorité des joueurs ne perçoit pas.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-panel border border-primary/20 p-8 rounded-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Pratiquez de Façon Responsable</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Le jeu doit avant tout rester un plaisir. Si vous constatez que vous en perdez la maîtrise, n'attendez pas pour solliciter un accompagnement adapté.
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
