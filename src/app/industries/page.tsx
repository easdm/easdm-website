import React from 'react';
import Industries from '@/components/Industries';

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#F3F4F6] pt-20 pb-16 flex items-center justify-center">
      <div className="w-full max-h-[calc(100vh-140px)] overflow-y-auto">
        <Industries />
      </div>
    </main>
  );
}
