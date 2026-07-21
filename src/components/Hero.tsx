'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  headText: string;
  headParagraph: string;
}

export default function Hero({ headText, headParagraph }: HeroProps) {
  return (
    <section className="relative py-8 md:py-14 overflow-hidden border-b border-[rgba(0,200,255,0.1)]">
      {/* Background glow */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[500px] h-[400px] bg-primary/6 blur-[110px] rounded-full -z-10" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* ── LEFT: main content ── */}
          <div className="flex-1 min-w-0">

            {/* Flag badges row */}
            <div className="flex items-center flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center space-x-1.5 bg-panel border border-border px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-300">
                <span>🇫🇷</span><span>FRANCE · 2026</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 bg-panel border border-border px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-300">
                <span>🔒</span><span>Marché réglementé</span>
              </span>
            </div>

            {/* Update badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-panel border border-border px-3 py-1 rounded-full mb-4"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-300">
                Mis à jour : Juillet 2026
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight leading-tight"
            >
              {headText.split(' ').map((word, i) => (
                <span key={i} className={i >= headText.split(' ').length - 2 ? 'red-neon-text' : ''}>
                  {word}{' '}
                </span>
              ))}
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-sm md:text-base mb-5 leading-relaxed max-w-xl"
            >
              {headParagraph}
            </motion.p>

            {/* Small pill badges */}
            <div className="flex items-center flex-wrap gap-2 mb-5">
              <span className="bg-primary/15 border border-primary/40 text-primary text-[11px] font-black px-3 py-1 rounded-full">ANJ</span>
              <span className="bg-primary/15 border border-primary/40 text-primary text-[11px] font-black px-3 py-1 rounded-full">18+</span>
              <span className="bg-primary/15 border border-primary/40 text-primary text-[11px] font-black px-3 py-1 rounded-full">Indép.</span>
            </div>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <div className="flex items-center space-x-2 bg-panel/60 border border-border px-4 py-2 rounded-lg">
                <span className="text-primary">🛡️</span>
                <span className="text-xs font-medium">Agréé ANJ</span>
              </div>
              <div className="flex items-center space-x-2 bg-panel/60 border border-border px-4 py-2 rounded-lg">
                <span className="text-primary">⚡</span>
                <span className="text-xs font-medium">Retraits Instantanés</span>
              </div>
              <div className="flex items-center space-x-2 bg-panel/60 border border-border px-4 py-2 rounded-lg">
                <span className="text-primary">🎁</span>
                <span className="text-xs font-medium">Avantages Exclusifs</span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: info card ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="w-full md:w-64 flex-shrink-0"
          >
            <div className="bg-panel border border-[rgba(0,200,255,0.2)] rounded-2xl p-5 shadow-[0_0_30px_rgba(0,200,255,0.06)]">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 pb-2 border-b border-border">
                EN UN COUP D'ŒIL
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Cadre légal</span>
                  <span className="bg-primary/20 text-primary font-black text-xs px-2.5 py-0.5 rounded">ANJ</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Accès</span>
                  <span className="bg-primary/20 text-primary font-black text-xs px-2.5 py-0.5 rounded">18+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Contenu</span>
                  <span className="bg-primary/20 text-primary font-black text-xs px-2.5 py-0.5 rounded">Indép.</span>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 mt-4 pt-3 border-t border-border/50 leading-relaxed">
                Analyses informatives uniquement — jouez de façon responsable.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
