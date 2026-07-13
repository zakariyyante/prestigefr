import { ShieldCheck, Trophy, Target, Clock, Zap } from 'lucide-react';

export function ContentSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 border-t border-border/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black mb-8 leading-tight">
            Ce qui distingue <span className="neon-text">BiarritzFR</span> de la concurrence
          </h2>
          <div className="space-y-6">
            <div className="flex space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl h-fit">
                <ShieldCheck className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Fiabilité Garantie</h4>
                <p className="text-gray-400 text-sm">Notre liste est exclusivement composée d'opérateurs titulaires d'une licence officielle et appliquant les standards de sécurité les plus stricts du secteur.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl h-fit">
                <Trophy className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Avantages Négociés</h4>
                <p className="text-gray-400 text-sm">Nos équipes obtiennent pour vous des conditions préférentielles afin de maximiser vos bénéfices dès votre première inscription.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl h-fit">
                <Target className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Tests Approfondis</h4>
                <p className="text-gray-400 text-sm">Chaque plateforme est examinée sur une période prolongée par nos analystes, afin de vous livrer des verdicts objectifs et vérifiés.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-[#b45309] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-panel backdrop-blur-lg border border-border p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Notre Protocole de Contrôle</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>Vérification de la licence et conformité réglementaire</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>Audit des solutions de paiement disponibles</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>Évaluation de la qualité du service client</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span>Benchmark des cotes sur les grands événements sportifs</span>
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
        <h2 className="text-3xl font-bold mb-12">Tout l'Univers des Jeux Sportifs en Ligne</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors">
            <Clock className="mx-auto mb-4 text-primary" size={32} />
            <h4 className="font-bold mb-2">Action en Direct</h4>
            <p className="text-xs text-gray-500">Engagez-vous sur des centaines d'événements sportifs diffusés en temps réel chaque jour.</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors">
            <Zap className="mx-auto mb-4 text-primary" size={32} />
            <h4 className="font-bold mb-2">Cotes Amplifiées</h4>
            <p className="text-xs text-gray-500">Profitez de quotations bonifiées sur vos sélections combinées et les rencontres vedettes.</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors">
            <Target className="mx-auto mb-4 text-primary" size={32} />
            <h4 className="font-bold mb-2">Options de Jeu Multiples</h4>
            <p className="text-xs text-gray-500">Buteurs, corners, mi-temps... Des dizaines de types de mises pour affiner votre stratégie.</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-colors">
            <ShieldCheck className="mx-auto mb-4 text-primary" size={32} />
            <h4 className="font-bold mb-2">Clôture Anticipée</h4>
            <p className="text-xs text-gray-500">Encaissez vos gains avant le terme ou stoppez une mise perdante grâce au retrait partiel.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
