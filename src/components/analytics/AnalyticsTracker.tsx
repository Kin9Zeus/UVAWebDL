'use client';

import { useAnalytics } from '@/hooks/use-analytics';

export default function AnalyticsTracker() {
  useAnalytics();
  return null;
}