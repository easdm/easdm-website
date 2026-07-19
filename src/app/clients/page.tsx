import React from 'react';
import CaseStudies from '@/components/CaseStudies';

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-[#050811] text-white pt-20 pb-16 flex items-center justify-center">
      <div className="w-full max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar">
        <CaseStudies />
      </div>
    </main>
  );
}
