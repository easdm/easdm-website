import React from 'react';
import FeaturedInsights from '@/components/FeaturedInsights';

import BackButton from '@/components/BackButton';

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-24 pb-16 flex flex-col items-center justify-start">
      <div className="w-full max-w-6xl px-6">
        <BackButton fallbackPath="/?skip=true" />
      </div>
      <div className="w-full max-h-[calc(100vh-200px)] overflow-y-auto no-scrollbar">
        <FeaturedInsights />
      </div>
    </main>
  );
}
