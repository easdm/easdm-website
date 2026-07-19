import React from 'react';
import Services from '@/components/Services';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20 pb-16 flex items-center justify-center">
      <div className="w-full max-h-[calc(100vh-140px)] overflow-y-auto">
        <Services />
      </div>
    </main>
  );
}
