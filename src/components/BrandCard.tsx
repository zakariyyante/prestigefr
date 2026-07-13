'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, Gift, Zap, ChevronRight } from 'lucide-react';
import { track } from '@vercel/analytics';
import { Partner } from '@/types';
import { getImageUrl } from '@/lib/api';
import { getStoredGclid } from '@/utils/cookies';

interface BrandCardProps {
  partner: Partner;
  order: number;
  isMobile: boolean;
}

export default function BrandCard({ partner, order, isMobile }: BrandCardProps) {
  const [linkUrl, setLinkUrl] = useState(partner.partnerUrl);

  useEffect(() => {
    const gclid = getStoredGclid();
    if (gclid) {
      setLinkUrl(`${partner.partnerUrl}${gclid}`);
    }
  }, [partner.partnerUrl]);

  const rating = partner.rating ?? (10 - (order - 1) * 0.1);
  
  const renderStars = () => {
    let count = 4;
    if (order <= 3) count = 5;
    else if (order <= 7) count = 4.5;

    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={`${
              i < Math.floor(count)
                ? 'fill-primary text-primary'
                : i < count
                ? 'fill-primary/50 text-primary'
                : 'text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  const handleCTA = () => {
    track('brand_click', { brand: partner.name });
  };

  if (isMobile) {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCTA}
        className="block bg-card backdrop-blur-md border border-border rounded-xl overflow-hidden mb-3 p-3 flex flex-col space-y-2 shadow-xl"
      >
        {/* Top Section (2 columns) */}
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <div className="w-32 h-20 relative  overflow-hidden flex items-center justify-center">
            <Image
              src={getImageUrl(partner.logo)}
              alt={partner.name}
              fill
              unoptimized
              className="object-contain p-2"
              onError={(e) => {
                (e.target as any).src = '/placeholder.svg';
              }}
            />
          </div>

          {/* Right: Rating/Stars */}
          <div className="flex flex-col items-end space-y-0.5">
            <span className="text-xl font-bold neon-text">{rating.toFixed(1)}</span>
            {renderStars()}
            <span className="text-[9px] text-gray-500 uppercase tracking-tighter">1 240 avis</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-2">
          <p className="text-xl text-center font-bold text-white line-clamp-2">
            {partner.bonusText}
          </p>
          
          <div className="flex items-center justify-center pt-1">
             <div
              className={order === 1
                ? "bg-gradient-to-r from-[#a855f7] via-[#c060ff] to-[#d090ff] text-white border border-[#d8a0ff] w-full py-3.5 rounded-xl font-black text-sm flex items-center justify-center space-x-2 shadow-[0_0_18px_rgba(168,85,247,0.9),0_0_35px_rgba(192,96,255,0.5)] transition-transform active:scale-95"
                : "bg-background text-primary border border-primary w-full py-3.5 rounded-xl font-black text-sm flex items-center justify-center space-x-2 shadow-neon transition-transform active:scale-95"
              }
            >
              <span>{order === 1 ? '🎁 PROFITER DU BONUS' : '⚡ JOUER MAINTENANT'}</span>
              <ChevronRight size={18} />
            </div>
          </div>
        </div>
      </a>
    );
  }

  // Desktop Layout
  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleCTA}
      className="block bg-card backdrop-blur-md border border-border rounded-2xl overflow-hidden mb-6 hover:border-primary/50 transition-all group shadow-2xl"
    >
      <div className="flex items-center p-6">
        {/* Rank */}
        <div className="w-12 flex flex-col items-center justify-center">
           <span className={`text-2xl font-black ${order <= 3 ? 'neon-text' : 'text-gray-700'}`}>
             #{order}
           </span>
        </div>

        {/* Logo */}
        <div className="w-44 h-44 relative bg-white/10 rounded-xl overflow-hidden flex items-center justify-center mx-6">
          <Image
            src={getImageUrl(partner.logo)}
            alt={partner.name}
            fill
            unoptimized
            className="object-contain p-4 group-hover:scale-105 transition-transform"
            onError={(e) => {
              (e.target as any).src = '/placeholder.svg';
            }}
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-bold text-foreground">{partner.name}</h3>
          <div className="flex items-center space-x-4">
            {renderStars()}
            <span className="text-sm text-gray-500">D'après 1 240 évaluations vérifiées</span>
          </div>
          <p className="text-lg font-semibold text-white">
            {partner.bonusText}
          </p>
          <div className="flex space-x-3">
             <span className="text-[10px] bg-panel px-2 py-1 rounded border border-border text-gray-400">🛡️ Accrédité</span>
             <span className="text-[10px] bg-panel px-2 py-1 rounded border border-border text-gray-400">⚡ Paiement Express</span>
          </div>
        </div>

        {/* Rating & CTA */}
        <div className="flex flex-col items-center justify-center space-y-4 px-8 border-l border-border">
          <div className="text-center">
            <span className="text-4xl font-black neon-text">{rating.toFixed(1)}</span>
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Note Experte</p>
          </div>
          
          <div
            className={order === 1
              ? "bg-gradient-to-r from-[#a855f7] via-[#c060ff] to-[#d090ff] text-white border border-[#d8a0ff] px-10 py-4 rounded-xl font-black text-lg flex items-center space-x-2 shadow-[0_0_18px_rgba(168,85,247,0.9),0_0_35px_rgba(192,96,255,0.5)] hover:scale-105 transition-all"
              : "bg-background text-primary border border-primary px-10 py-4 rounded-xl font-black text-lg flex items-center space-x-2 shadow-neon hover:scale-105 transition-all"
            }          >
            <span>{order === 1 ? 'PROFITER DU BONUS' : 'VISITER LE SITE'}</span>
            <ChevronRight size={20} />
          </div>
          <p className="text-[10px] text-gray-500 italic">Conditions générales en vigueur</p>
        </div>
      </div>
    </a>
  );
}
