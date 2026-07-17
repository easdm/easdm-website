'use client';

import React, { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import FeaturedInsights from "@/components/FeaturedInsights";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Mission from "@/components/Mission";
import Values from "@/components/Values";
import Careers from "@/components/Careers";

export default function Home() {
  const [minimized, setMinimized] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMinimized(true);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      {/* Hero Video Container */}
      <div
        className={`relative overflow-hidden transition-all duration-700 ${
          minimized ? "h-20 md:h-24" : "h-[50vh] md:h-screen"
        }`}
      >
        <video
          src="/intro-video.mp4"
          autoPlay
          muted={isMuted}
          playsInline
          onEnded={() => setMinimized(true)}
          className="w-full h-full object-cover"
        />
        
        {/* Unmute/Mute Toggle Button Overlay */}
        {!minimized && (
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-6 right-6 z-30 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all duration-300 flex items-center gap-2 cursor-pointer text-xs font-bold"
          >
            {isMuted ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
                Unmute Audio
              </>
            ) : (
              <>
                <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                Mute Audio
              </>
            )}
          </button>
        )}

        {minimized && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center px-6 animate-fade-in">
            <div className="mx-auto max-w-6xl w-full text-left">
              <h2 className="text-white text-base md:text-lg font-semibold tracking-wider">
                Enterprise Application Solutions
              </h2>
            </div>
          </div>
        )}
      </div>

      {/* Fade In Homepage Content After Minimize */}
      <div
        className={`transition-opacity duration-700 ${
          minimized ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Hero />
        <FeaturedInsights />
        <Services />
        <Industries />
        <CaseStudies />
        <Mission />
        <Values />
        <Careers />
      </div>
    </main>
  );
}
