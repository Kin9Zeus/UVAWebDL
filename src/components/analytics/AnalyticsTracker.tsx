'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as gtm from '@/lib/analytics/gtm';
import * as pixel from '@/lib/analytics/meta-pixel';

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      gtm.pageview(pathname);
      pixel.pageview();
    }
  }, [pathname, searchParams]);

  return null;
}