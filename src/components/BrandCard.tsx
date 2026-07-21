'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
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

  const renderStars = (size = 13) => {
    let count = 4;
    if (order <= 3) count = 5;
    else if (order <= 7) count = 4.5;
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={size}
            className={`${
              i < Math.floor(count)
                ? 'fill-primary text-primary'
                : i < count
                ? 'fill-primary/50 text-primary'
                : 'text-gray-700'
            }`}
          />
        ))}
      </div>
    );
  };

  const handleCTA = () => {
    track('brand_click', { brand: partner.name });
  };

  const gradientBtn = 'linear-gradient(to right, #00c8ff, #8b5cf6)';

  /* ─── MOBILE LAYOUT ─── */
  if (isMobile) {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCTA}
        className="block bg-[#0d0d1e] border border-[rgba(0,200,255,0.18)] rounded-xl overflow-hidden mb-3 p-4 flex flex-col space-y-3 shadow-xl hover:border-[rgba(0,200,255,0.45)] transition-all"
      >
        {order === 1 && (
          <div className="flex">
            <span
              className="text-white text-[9px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full"
              style={{ background: gradientBtn }}
            >
              ⭐ Premier Choix
            </span>
          </div>
        )}

        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-28 h-14 relative flex items-center justify-center">
            <Image
              src={getImageUrl(partner.logo)}
              alt={partner.name}
              fill
              unoptimized
              className="object-contain"
              onError={(e) => { (e.target as any).src = '/placeholder.svg'; }}
            />
          </div>
          {/* Rating */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black neon-text">{rating.toFixed(1)}</span>
              <span className="text-[10px] text-gray-500">/10</span>
            </div>
            {renderStars()}
            <span className="text-[9px] text-gray-600">1 240 avis</span>
          </div>
        </div>

        {/* Badge + bonus text */}
        <div className="flex items-start justify-between gap-2">
          <p className="text-base font-bold text-white leading-snug flex-1">
            {partner.bonusText}
          </p>
          <span className="flex-shrink-0 text-[9px] font-black uppercase tracking-wide text-primary border border-primary/50 px-2 py-0.5 rounded mt-0.5">
            BONUS EXCLUSIF
          </span>
        </div>

        {/* CTA */}
        <div
          className="w-full py-3 rounded-xl font-black text-sm text-white text-center tracking-wide"
          style={{ background: gradientBtn }}
        >
          JOUER SUR {partner.name.toUpperCase()}
        </div>
        <p className="text-[9px] text-gray-600 text-center italic -mt-1">Conditions générales en vigueur</p>
      </a>
    );
  }

  /* ─── DESKTOP LAYOUT ─── */
  return (
    <div className="relative mb-4">
      {order === 1 && (
        <div className="absolute -top-3.5 left-5 z-10">
          <span
            className="inline-block text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg"
            style={{ background: gradientBtn }}
          >
            ⭐ Premier Choix
          </span>
        </div>
      )}

      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCTA}
        className={`block bg-[#0d0d1e] border border-[rgba(0,200,255,0.18)] rounded-xl overflow-hidden hover:border-[rgba(0,200,255,0.45)] transition-all group shadow-xl ${order === 1 ? 'pt-2' : ''}`}
      >
        <div className="flex items-stretch">

          {/* ── Left: logo + rating + payment ── */}
          <div className="w-52 flex-shrink-0 flex flex-col items-center justify-center gap-2.5 p-5 border-r border-[rgba(0,200,255,0.1)]">
            <div className="w-36 h-16 relative flex items-center justify-center">
              <Image
                src={getImageUrl(partner.logo)}
                alt={partner.name}
                fill
                unoptimized
                className="object-contain group-hover:scale-105 transition-transform"
                onError={(e) => { (e.target as any).src = '/placeholder.svg'; }}
              />
            </div>
            <div className="flex items-center gap-1.5">
              {renderStars(13)}
              <span className="text-sm font-black neon-text">{rating.toFixed(1)}</span>
              <span className="text-[10px] text-gray-500">/10</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] bg-white/8 border border-white/10 px-1.5 py-0.5 rounded text-gray-400 font-medium">MC</span>
              <span className="text-[9px] bg-white/8 border border-white/10 px-1.5 py-0.5 rounded text-gray-400 font-medium">PP</span>
              <span className="text-[9px] bg-white/8 border border-white/10 px-1.5 py-0.5 rounded text-gray-400 font-medium">VISA</span>
            </div>
          </div>

          {/* ── Right: badge + bonus + CTA ── */}
          <div className="flex-1 p-5 flex flex-col justify-between gap-4">
            <div className="flex items-start justify-between gap-6">
              <p className="text-xl md:text-2xl font-black text-white leading-tight flex-1">
                {partner.bonusText}
              </p>
              <span className="flex-shrink-0 text-[10px] font-black uppercase tracking-widest text-primary border border-primary/50 bg-primary/5 px-2.5 py-1 rounded">
                BONUS EXCLUSIF
              </span>
            </div>

            <div>
              <div
                className="w-full py-3.5 rounded-xl font-black text-sm text-white text-center tracking-widest hover:scale-[1.02] transition-transform cursor-pointer shadow-lg"
                style={{ background: gradientBtn }}
              >
                JOUER SUR {partner.name.toUpperCase()}
              </div>
              <p className="text-[9px] text-gray-600 text-center mt-1.5 italic">Conditions générales en vigueur</p>
            </div>
          </div>

        </div>
      </a>
    </div>
  );
}
