import { ShieldCheck, Trophy, Target, Clock, Zap } from 'lucide-react';

export function ContentSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 border-t border-border/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black mb-8 leading-tight">
            Pourquoi choisir <span className="neon-text">MonteleFR</span> ?
          </h2>
          <div className="space-y-6">
            <div className="flex space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl h-fit">
                <ShieldCheck className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Protection Absolue</h4>
                <p className="text-gray-400 text-sm">Seuls les opérateurs détenant une accréditation officielle et appliquant des mesures de sécurité avancées figurent dans notre sélection.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl h-fit">
                <Trophy className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Offres Optimisées</h4>
                <p className="text-gray-400 text-sm">Nos spécialistes obtiennent des conditions privilégiées pour vous assurer le lancement le plus avantageux possible.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl h-fit">
                <Target className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Évaluations Rigoureuses</h4>
                <p className="text-gray-400 text-sm">Chaque plateforme est soumise à des tests approfondis sur plusieurs semaines par notre équipe de spécialistes indépendants.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-[#b45309] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-panel backdrop-blur-lg border border-border p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Notre Méthode d'Évaluation</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>Contrôle de l'agrément et du cadre réglementaire</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>Validation des canaux de dépôt et de retrait</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>Mesure de la qualité et de la réactivité du support</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span>Comparaison des cotes sur les grandes compétitions</span>
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
        <h2 className="text-3xl font-bold mb-12">L'Univers des Jeux Sportifs en Ligne</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors">
            <Clock className="mx-auto mb-4 text-primary" size={32} />
            <h4 className="font-bold mb-2">Jeux en Temps Réel</h4>
            <p className="text-xs text-gray-500">Participez en direct à des centaines de rencontres sportives diffusées chaque journée.</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors">
            <Zap className="mx-auto mb-4 text-primary" size={32} />
            <h4 className="font-bold mb-2">Cotes Rehaussées</h4>
            <p className="text-xs text-gray-500">Tirez parti de quotations renforcées sur vos combinaisons et les rencontres majeures.</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors">
            <Target className="mx-auto mb-4 text-primary" size={32} />
            <h4 className="font-bold mb-2">Marchés Variés</h4>
            <p className="text-xs text-gray-500">Buteurs, corners, cartons jaunes... un éventail illimité d'options de jeu à votre disposition.</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors">
            <ShieldCheck className="mx-auto mb-4 text-primary" size={32} />
            <h4 className="font-bold mb-2">Retrait Anticipé</h4>
            <p className="text-xs text-gray-500">Reprenez la main sur vos sélections en cours et mettez vos gains en sécurité à tout instant.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
