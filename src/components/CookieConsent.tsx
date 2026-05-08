'use client';

import { useState, useEffect } from 'react';
import { setCookie, parseCookies } from 'nookies';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookies = parseCookies();
    if (!cookies['cookie_consent']) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie(null, 'cookie_consent', 'accepted', {
      maxAge: 365 * 24 * 60 * 60,
      path: '/',
      secure: true,
      sameSite: 'lax'
    });
    
    // Google Consent Mode V2
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }
    
    setIsVisible(false);
  };

  const handleDecline = () => {
    setCookie(null, 'cookie_consent', 'declined', {
      maxAge: 365 * 24 * 60 * 60,
      path: '/',
      secure: true,
      sameSite: 'lax'
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 bg-[#0a0b14] border-t border-primary/20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300 text-center md:text-left">
          <p>
            Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. 
            En cliquant sur "Accepter", vous consentez à l'utilisation de tous les cookies. 
            Consultez notre <a href="/privacy" className="text-primary underline">politique de confidentialité</a>.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleDecline}
            className="px-6 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={handleAccept}
            className="px-8 py-2 bg-primary text-background font-bold rounded-lg shadow-neon hover:scale-105 transition-all text-sm"
          >
            Accepter Tout
          </button>
        </div>
      </div>
    </div>
  );
}
