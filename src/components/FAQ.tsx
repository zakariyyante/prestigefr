'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Quels critères retenir pour sélectionner une plateforme de jeux en ligne ?",
    a: "Plusieurs éléments entrent en jeu : l'agrément ANJ, la compétitivité des cotes, l'étendue des disciplines couvertes, et la générosité des offres promotionnelles proposées aux nouveaux inscrits."
  },
  {
    q: "Les offres de bienvenue valent-elles vraiment la peine ?",
    a: "Absolument, elles vous permettent de démarrer avec un solde plus conséquent. Pensez toutefois à bien lire les conditions associées (notamment le wagering) avant de finaliser votre inscription."
  },
  {
    q: "Le jeu en ligne est-il autorisé en France ?",
    a: "Oui, sous réserve d'utiliser des plateformes homologuées par l'Autorité Nationale des Jeux (ANJ). Chaque site présenté sur MonteleFR fait l'objet d'une vérification préalable stricte."
  },
  {
    q: "Comment procéder pour encaisser mes gains ?",
    a: "Les retraits s'effectuent en règle générale par virement sur le compte bancaire enregistré lors de l'inscription. Les délais de traitement s'échelonnent de quelques heures à quelques jours selon la plateforme choisie."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center neon-text">Questions Fréquentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-panel backdrop-blur-md border border-border rounded-xl overflow-hidden shadow-lg">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-5 text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-semibold text-lg">{faq.q}</span>
              {openIndex === i ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-500" />}
            </button>
            {openIndex === i && (
              <div className="p-5 pt-0 text-gray-400 leading-relaxed border-t border-border/50 mt-2">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
