'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Sur quoi se baser pour choisir une plateforme de jeux en ligne sérieuse ?",
    a: "Les critères essentiels sont : la possession d'une licence ANJ valide, la compétitivité des cotes proposées, la richesse du catalogue sportif, et l'attractivité des offres promotionnelles réservées aux nouveaux membres."
  },
  {
    q: "Une offre de bienvenue peut-elle réellement faire la différence ?",
    a: "Oui, sans conteste. Elle vous permet d'entamer votre expérience avec un capital de départ supérieur. Veillez cependant à analyser attentivement les conditions de mise (wagering) avant toute inscription."
  },
  {
    q: "Les jeux en ligne sont-ils légaux sur le territoire français ?",
    a: "Tout à fait, dès lors que vous utilisez des plateformes détenant une autorisation délivrée par l'Autorité Nationale des Jeux (ANJ). Chacun des sites référencés sur BiarritzFR a été préalablement contrôlé et validé."
  },
  {
    q: "Comment récupérer mes gains sur une plateforme en ligne ?",
    a: "Le virement bancaire vers votre compte vérifié est le mode de retrait le plus courant. Selon la plateforme et le montant, les délais peuvent aller de quelques heures à plusieurs jours ouvrés."
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
