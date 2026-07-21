'use client';

import { Partner } from '@/types';
import BrandCard from './BrandCard';
import { Shield, Zap, FileText, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface BrandListProps {
  partners: Partner[];
  isMobile: boolean;
}

const badges = [
  { icon: <Shield size={14} />, text: 'Homologué & Sécurisé' },
  { icon: <Zap size={14} />, text: 'Paiements Instantanés' },
  { icon: <FileText size={14} />, text: 'Inscription Simplifiée' },
  { icon: <Eye size={14} />, text: 'Données Protégées' },
];

export default function BrandList({ partners, isMobile }: BrandListProps) {
  const sortedPartners = [...partners].sort((a, b) => (a.order || 999) - (b.order || 999));

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 md:py-8">

      {/* Section heading */}
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
          TOP <span className="neon-text">PLATEFORMES</span> RECOMMANDÉES
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Notre palmarès rigoureux des meilleurs opérateurs, établi selon la sécurité, les avantages proposés et la qualité de l'expérience globale.
        </p>
      </div>

      {/* Mobile Badges */}
      {isMobile && (
        <div className="flex overflow-x-auto space-x-2 pb-3 hide-scrollbar">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 flex items-center space-x-1.5 bg-panel border border-border px-2.5 py-1.5 rounded-full"
            >
              <span className="text-primary">{badge.icon}</span>
              <span className="text-[9px] font-bold whitespace-nowrap uppercase tracking-tight">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </div>
      )}

      {/* Brand Cards */}
      <div className="space-y-4 md:space-y-0">
        {sortedPartners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BrandCard
              partner={partner}
              order={index + 1}
              isMobile={isMobile}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
