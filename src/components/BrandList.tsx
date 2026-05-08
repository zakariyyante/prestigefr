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
  { icon: <Shield size={14} />, text: 'Certifié & Protégé' },
  { icon: <Zap size={14} />, text: 'Retraits le Jour Même' },
  { icon: <FileText size={14} />, text: 'Documentation Minimale' },
  { icon: <Eye size={14} />, text: 'Jeu Privé' },
];

export default function BrandList({ partners, isMobile }: BrandListProps) {
  const sortedPartners = [...partners].sort((a, b) => (a.order || 999) - (b.order || 999));

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 md:py-8">
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
