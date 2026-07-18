'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from "@/components/ScrollReveal";

export default function GetInTouchHero() {
  return (
    <section className="bg-slate-50 border-t border-slate-100 py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal animation="slide-up">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let’s discuss how EAS can support your enterprise IT and application needs.
          </p>
          <div className="inline-block">
            <Link
              href="/contact"
              className="rounded-lg bg-[#0066CC] hover:bg-[#009BFF] px-8 py-4 text-sm font-bold text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0066CC]/20 inline-flex items-center gap-2"
            >
              Contact EAS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
