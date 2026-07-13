'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Quels éléments prendre en compte pour sélectionner un opérateur de jeux en ligne fiable ?",
    a: "Les points clés à examiner sont : la détention d'une licence ANJ en cours de validité, la compétitivité des quotations, la diversité du catalogue sportif disponible, et la générosité des promotions destinées aux nouveaux inscrits."
  },
  {
    q: "Une offre de bienvenue a-t-elle un impact réel sur l'expérience de jeu ?",
    a: "Assurément. Elle vous donne accès à un capital de départ plus conséquent pour démarrer. Examinez néanmoins avec soin les conditions de libération (wagering) associées avant de vous inscrire."
  },
  {
    q: "La pratique des jeux en ligne est-elle autorisée en France ?",
    a: "Oui, à condition d'utiliser des plateformes titulaires d'une autorisation délivrée par l'Autorité Nationale des Jeux (ANJ). L'ensemble des opérateurs mis en avant sur MonteCarloFR ont été vérifiés et validés en amont."
  },
  {
    q: "Comment procéder pour retirer ses gains depuis une plateforme en ligne ?",
    a: "Le virement bancaire vers votre compte personnel vérifié demeure la méthode la plus répandue. Les délais varient selon l'opérateur et le montant sollicité, de quelques heures à plusieurs jours ouvrables."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center neon-text">Vos Questions, Nos Réponses</h2>
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
