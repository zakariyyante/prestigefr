'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { storeGclid } from '@/utils/cookies';

export default function GclidTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const gclid = searchParams.get('gclid');
    if (gclid) {
      storeGclid(gclid);
      document.body.setAttribute('data-gclid', gclid);
    } else {
      // Check if it's already in cookies
      const storedGclid = document.cookie
        .split('; ')
        .find(row => row.startsWith('gclid='))
        ?.split('=')[1];
      if (storedGclid) {
        document.body.setAttribute('data-gclid', storedGclid);
      }
    }
  }, [searchParams]);

  return null;
}
