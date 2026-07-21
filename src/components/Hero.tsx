'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  headText: string;
  headParagraph: string;
}

const plusGridBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23ffffff' fill-opacity='0.07'%3E%3Crect x='19' y='13' width='2' height='14'/%3E%3Crect x='13' y='19' width='14' height='2'/%3E%3C/g%3E%3C/svg%3E")`;

export default function Hero({ headText, headParagraph }: HeroProps) {
  return (
    <>
      {/* ── Main Hero ── */}
      <section
        className="relative overflow-hidden py-20 md:py-28 text-center"
        style={{ background: '#0d1628', backgroundImage: plusGridBg }}
      >
        {/* bottom fade into page bg */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-[#08080f] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 border border-white/25 rounded-full px-4 py-1.5 mb-8 text-[11px] font-bold text-white/80 tracking-widest uppercase"
          >
            <span>🇫🇷</span>
            <span>France · Édition 2026</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight"
          >
            {headText}
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            {headParagraph}
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <a
              href="#operators"
              className="bg-white text-gray-900 font-black px-8 py-3.5 rounded-full text-sm uppercase tracking-widest hover:bg-gray-100 active:scale-95 transition-all shadow-lg"
            >
              Voir les Opérateurs
            </a>
            <span className="text-gray-400 text-xs">
              18+ · Jouer comporte des risques ·{' '}
              <a href="/tips" className="underline hover:text-white transition-colors">
                Jeu responsable
              </a>
            </span>
          </motion.div>

        </div>
      </section>

      {/* ── Affiliate Transparency Card ── */}
      <div className="bg-[#08080f] py-6 px-4">
        <div className="max-w-3xl mx-auto bg-[#0f1120] border border-[rgba(0,200,255,0.1)] rounded-2xl p-5 md:p-6">
          <h4 className="text-primary font-bold text-sm mb-2">Transparence partenaires</h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            PrestigeFR est un portail éditorial indépendant. Certains liens vers des opérateurs agréés ANJ sont des liens d'affiliation : en vous inscrivant après clic, nous pouvons percevoir une rémunération sans surcoût pour vous. Cette rémunération n'influe ni sur nos analyses ni sur l'ordre de nos classements. Les montants de bonus sont donnés à titre indicatif — consultez toujours les conditions directement sur le site de l'opérateur avant de jouer.
          </p>
        </div>
      </div>
    </>
  );
}
