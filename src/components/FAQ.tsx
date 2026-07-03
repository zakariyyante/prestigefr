'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Comment choisir le meilleur site de paris sportifs ?",
    a: "Le choix dépend de plusieurs facteurs : la licence (ANJ en France), la qualité des cotes, la diversité des sports proposés, et bien sûr la générosité des bonus de bienvenue."
  },
  {
    q: "Les bonus de bienvenue sont-ils vraiment avantageux ?",
    a: "Oui, ils permettent de commencer avec un capital plus important. Cependant, lisez toujours les conditions d'utilisation (wagering) avant de vous inscrier."
  },
  {
    q: "Est-il légal de parier en ligne en France ?",
    a: "Oui, à condition d'utiliser des sites agréés par l'Autorité Nationale des Jeux (ANJ). Tous les sites présentés sur ChoixRoyal sont rigoureusement vérifiés."
  },
  {
    q: "Comment retirer mes gains ?",
    a: "Les retraits se font généralement par virement bancaire sur le compte vérifié lors de votre inscription. Les délais varient de 24h à quelques jours selon l'opérateur."
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
