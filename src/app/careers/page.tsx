import React from 'react';
import Careers from '@/components/Careers';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white pt-20 pb-16 flex items-center justify-center">
      <div className="w-full max-h-[calc(100vh-140px)] overflow-y-auto">
        <Careers />
      </div>
    </main>
  );
}
