'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ScrollReveal from "@/components/ScrollReveal";

export default function GetInTouchMenuPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-16 flex items-center justify-center animate-fade-in">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <ScrollReveal animation="slide-up">
          <div className="max-w-xl mx-auto bg-[#0A1A2F]/40 backdrop-blur-md border border-white/5 shadow-2xl rounded-2xl p-8 text-center space-y-8 py-12">
            <div className="space-y-3">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                Welcome to EAS
              </h1>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                To direct you to the correct department, please let us know if you are a current customer or a new inquiry.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  router.push('/contact');
                }}
                className="flex-1 rounded-xl border border-white/5 hover:border-[#009BFF]/30 p-6 text-center bg-[#0A1A2F]/20 hover:bg-[#0A1A2F]/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-[#009BFF]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-[#009BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-1">New Inquiry</h3>
                <p className="text-xs text-slate-400">Request consultation, quotes, or bespoke application engineering.</p>
              </button>

              <button
                onClick={() => router.push('/support')}
                className="flex-1 rounded-xl border border-white/5 hover:border-[#009BFF]/30 p-6 text-center bg-[#0A1A2F]/20 hover:bg-[#0A1A2F]/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-[#009BFF]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-[#009BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-1">Current Customer</h3>
                <p className="text-xs text-slate-400">Access support, view SLAs, or submit active technical tickets.</p>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
