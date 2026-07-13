import { ShieldCheck, Trophy, Target, Clock, Zap } from 'lucide-react';

export function ContentSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 border-t border-border/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black mb-8 leading-tight">
            Ce qui place <span className="neon-text">MonteCarloFR</span> au-dessus du lot
          </h2>
          <div className="space-y-6">
            <div className="flex space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl h-fit">
                <ShieldCheck className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Sécurité Assurée</h4>
                <p className="text-gray-400 text-sm">Notre sélection ne comprend que des opérateurs homologués, soumis aux normes de sécurité les plus rigoureuses du secteur.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl h-fit">
                <Trophy className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Conditions Privilégiées</h4>
                <p className="text-gray-400 text-sm">Notre équipe négocie pour vous des offres exclusives afin de vous faire bénéficier du meilleur accueil dès votre première ouverture de compte.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl h-fit">
                <Target className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Analyses Rigoureuses</h4>
                <p className="text-gray-400 text-sm">Chaque plateforme fait l'objet d'une évaluation approfondie par nos experts, garantissant des avis objectifs, documentés et indépendants.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-[#b45309] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-panel backdrop-blur-lg border border-border p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Notre Processus de Validation</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>Contrôle de la licence et vérification de la conformité légale</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>Examen des options de dépôt et de retrait proposées</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>Mesure de la réactivité et de la qualité du support client</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span>Analyse des quotations sur les principaux événements sportifs</span>
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
        <h2 className="text-3xl font-bold mb-12">L'Univers Complet des Jeux Sportifs en Ligne</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors">
            <Clock className="mx-auto mb-4 text-primary" size={32} />
            <h4 className="font-bold mb-2">Jeu en Temps Réel</h4>
            <p className="text-xs text-gray-500">Participez à des centaines de rencontres sportives retransmises en direct chaque jour.</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors">
            <Zap className="mx-auto mb-4 text-primary" size={32} />
            <h4 className="font-bold mb-2">Quotations Boostées</h4>
            <p className="text-xs text-gray-500">Accédez à des cotes majorées sur vos combinés et les affiches les plus attendues.</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors">
            <Target className="mx-auto mb-4 text-primary" size={32} />
            <h4 className="font-bold mb-2">Variété de Marchés</h4>
            <p className="text-xs text-gray-500">Buteurs, corners, mi-temps... Explorez des dizaines de types de mises pour enrichir votre stratégie.</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors">
            <ShieldCheck className="mx-auto mb-4 text-primary" size={32} />
            <h4 className="font-bold mb-2">Retrait Anticipé</h4>
            <p className="text-xs text-gray-500">Sécurisez vos gains avant la fin du match ou limitez vos pertes grâce à la clôture partielle.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
