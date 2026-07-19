'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface BackButtonProps {
  fallbackPath?: string;
  label?: string;
}

export default function BackButton({ fallbackPath = '/', label = 'Back' }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    // If there is browser history, go back, otherwise fall back to home or the provided path
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackPath);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-xs font-bold text-[#009BFF] hover:text-white transition-colors cursor-pointer group mb-6 z-25 relative"
    >
      <span className="transform group-hover:-translate-x-1 transition-transform duration-300">
        &larr;
      </span>
      {label}
    </button>
  );
}
