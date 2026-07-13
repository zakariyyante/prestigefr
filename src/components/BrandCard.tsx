'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronRight } from 'lucide-react';
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

  const renderStars = (size = 14) => {
    let count = 4;
    if (order <= 3) count = 5;
    else if (order <= 7) count = 4.5;
    return (
      <div className="flex items-center space-x-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={size}
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

  /* ─── MOBILE LAYOUT ─── */
  if (isMobile) {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCTA}
        className="block bg-gradient-to-r from-[#181008] via-[#22180a] to-[#2e200c] border border-[rgba(180,130,40,0.4)] rounded-xl overflow-hidden mb-3 p-3 flex flex-col space-y-2 shadow-xl"
      >
        {order === 1 && (
          <div className="flex">
            <span className="bg-primary text-background text-[9px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full">
              ⭐ Premier Choix
            </span>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="w-32 h-20 relative overflow-hidden flex items-center justify-center">
            <Image
              src={getImageUrl(partner.logo)}
              alt={partner.name}
              fill
              unoptimized
              className="object-contain p-2"
              onError={(e) => { (e.target as any).src = '/placeholder.svg'; }}
            />
          </div>
          <div className="flex flex-col items-end space-y-0.5">
            <span className="text-xl font-bold neon-text">{rating.toFixed(1)}</span>
            {renderStars()}
            <span className="text-[9px] text-gray-500 uppercase tracking-tighter">1 240 avis</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xl text-center font-bold text-white line-clamp-2">
            {partner.bonusText}
          </p>
          <div className="flex items-center justify-center pt-1">
            <div
              className={order === 1
                ? "bg-gradient-to-r from-[#c49010] via-[#d4a820] to-[#e8c040] text-background border border-[#e8c840] w-full py-3.5 rounded-xl font-black text-sm flex items-center justify-center space-x-2 shadow-[0_0_18px_rgba(212,160,23,0.6)] transition-transform active:scale-95"
                : "bg-panel text-primary border border-border w-full py-3.5 rounded-xl font-black text-sm flex items-center justify-center space-x-2 shadow-neon transition-transform active:scale-95"
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

  /* ─── DESKTOP LAYOUT ─── */
  return (
    <div className="relative mb-8">
      {/* Premier Choix badge */}
      {order === 1 && (
        <div className="absolute -top-4 left-5 z-10">
          <span className="inline-block bg-primary text-background text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-neon">
            ⭐ Premier Choix
          </span>
        </div>
      )}

      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCTA}
        className="block bg-gradient-to-r from-[#181008] via-[#221a0a] to-[#30220e] border border-[rgba(180,130,40,0.4)] rounded-2xl overflow-hidden hover:border-primary/60 transition-all group shadow-2xl"
      >
        <div className={`flex items-center gap-5 p-5 ${order === 1 ? 'pt-7' : ''}`}>

          {/* Logo */}
          <div className="w-32 h-24 relative bg-white/8 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center">
            <Image
              src={getImageUrl(partner.logo)}
              alt={partner.name}
              fill
              unoptimized
              className="object-contain p-3 group-hover:scale-105 transition-transform"
              onError={(e) => { (e.target as any).src = '/placeholder.svg'; }}
            />
          </div>

          {/* Rank */}
          <div className="w-10 flex-shrink-0 text-center">
            <span className={`text-3xl font-black ${order <= 3 ? 'neon-text' : 'text-gray-600'}`}>
              #{order}
            </span>
          </div>

          {/* Bonus info + tags */}
          <div className="flex-1 min-w-0">
            <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">
              🎁 {order === 1 ? 'OFFRE EXCLUSIVE' : 'OFFRE DISPONIBLE'}
            </p>
            <p className="text-xl md:text-2xl font-black text-white leading-tight mb-2 truncate">
              {partner.bonusText}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] bg-white/5 border border-[rgba(180,130,40,0.25)] px-2.5 py-0.5 rounded text-gray-400">🛡️ Accrédité</span>
              <span className="text-[10px] bg-white/5 border border-[rgba(180,130,40,0.25)] px-2.5 py-0.5 rounded text-gray-400">⚡ Paiement Express</span>
            </div>
          </div>

          {/* Rating */}
          <div className="text-center flex-shrink-0 border-l border-[rgba(180,130,40,0.3)] pl-5">
            <span className="text-4xl font-black neon-text">{rating.toFixed(1)}</span>
            <div className="flex justify-center mt-1">{renderStars()}</div>
            <p className="text-[9px] text-gray-500 mt-0.5">D'après 1 240 avis</p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0 flex flex-col items-center space-y-1.5 pl-5">
            <div
              className={order === 1
                ? "bg-gradient-to-r from-[#c49010] via-[#d4a820] to-[#e8c040] text-background border border-[#e8c840] px-8 py-3.5 rounded-xl font-black text-base flex items-center space-x-2 shadow-[0_0_18px_rgba(212,160,23,0.6)] hover:scale-105 transition-all cursor-pointer"
                : "bg-panel text-primary border border-border px-8 py-3.5 rounded-xl font-black text-base flex items-center space-x-2 shadow-neon hover:scale-105 transition-all cursor-pointer"
              }
            >
              <span>{order === 1 ? 'PROFITER DU BONUS' : 'VISITER LE SITE'}</span>
              <ChevronRight size={18} />
            </div>
            <p className="text-[9px] text-gray-500 italic">Conditions générales en vigueur</p>
          </div>

        </div>
      </a>
    </div>
  );
}
