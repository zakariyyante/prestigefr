import { ShieldCheck, Trophy, Target, Clock, Zap } from 'lucide-react';

export function ContentSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 border-t border-border/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black mb-8 leading-tight">
            Pourquoi faire confiance à <span className="neon-text">MajestiaFR</span> ?
          </h2>
          <div className="space-y-6">
            <div className="flex space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl h-fit">
                <ShieldCheck className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Sécurité Maximale</h4>
                <p className="text-gray-400 text-sm">Nous ne listons que des opérateurs possédant une licence officielle et des protocoles de sécurité de pointe.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl h-fit">
                <Trophy className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Meilleurs Bonus</h4>
                <p className="text-gray-400 text-sm">Nos experts négocient des offres exclusives pour vous garantir le meilleur départ possible.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl h-fit">
                <Target className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Analyses Précises</h4>
                <p className="text-gray-400 text-sm">Chaque site est évalué pendant plusieurs semaines par nos experts professionnels.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-[#00e5ff] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-panel backdrop-blur-lg border border-border p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Notre Processus de Revue</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>Vérification de la licence et régulation</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>Test des méthodes de dépôt et retrait</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>Évaluation du service client (réactivité)</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span>Analyse des cotes sur les grands événements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AdditionalSection() {
  return (
    <section className="bg-panel py-20 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Le Monde des Jeux en Direct</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-[#00e5ff]/40 transition-colors">
            <Clock className="mx-auto mb-4 text-[#00e5ff]" size={32} />
            <h4 className="font-bold mb-2">Jeux en Direct</h4>
            <p className="text-xs text-gray-500">Jouez en temps réel sur des centaines d'événements sportifs chaque jour.</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-[#00e5ff]/40 transition-colors">
            <Zap className="mx-auto mb-4 text-[#00e5ff]" size={32} />
            <h4 className="font-bold mb-2">Cotes Boostées</h4>
            <p className="text-xs text-gray-500">Profitez de cotes améliorées sur les sélections combinées et grands matchs.</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-[#00e5ff]/40 transition-colors">
            <Target className="mx-auto mb-4 text-[#00e5ff]" size={32} />
            <h4 className="font-bold mb-2">Marchés Spéciaux</h4>
            <p className="text-xs text-gray-500">Buteurs, corners, cartons... une infinité de marchés sportifs disponibles.</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-[#00e5ff]/40 transition-colors">
            <ShieldCheck className="mx-auto mb-4 text-[#00e5ff]" size={32} />
            <h4 className="font-bold mb-2">Cash Out</h4>
            <p className="text-xs text-gray-500">Gardez le contrôle sur vos sélections et sécurisez vos gains à tout moment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
