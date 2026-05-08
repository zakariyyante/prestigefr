'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  headText: string;
  headParagraph: string;
}

export default function Hero({ headText, headParagraph }: HeroProps) {
  return (
    <section className="relative py-6 md:py-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-panel border border-border px-3 py-1 rounded-full mb-3"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-300">
            Mis à jour : Mai 2026
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-6xl font-extrabold mb-2 tracking-tight leading-tight"
        >
          {headText.split(' ').map((word, i) => (
            <span key={i} className={i >= headText.split(' ').length - 2 ? "neon-text" : ""}>
              {word}{' '}
            </span>
          ))}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-400 text-xs md:text-lg mb-4 leading-relaxed"
        >
          {headParagraph}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex justify-center space-x-4"
        >
          <div className="flex items-center space-x-2 bg-panel/50 border border-border px-4 py-2 rounded-lg">
            <span className="text-primary">🛡️</span>
            <span className="text-xs font-medium">Licence ANJ</span>
          </div>
          <div className="flex items-center space-x-2 bg-panel/50 border border-border px-4 py-2 rounded-lg">
            <span className="text-primary">⚡</span>
            <span className="text-xs font-medium">Paiements Rapides</span>
          </div>
          <div className="flex items-center space-x-2 bg-panel/50 border border-border px-4 py-2 rounded-lg">
            <span className="text-primary">🎁</span>
            <span className="text-xs font-medium">Bonus Exclusifs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
