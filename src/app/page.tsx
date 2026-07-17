'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduceMotion(true);
      setMinimized(true); // Skip animation entirely
    }
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      {/* Hero Video Container (Smooth Fade + Shrink) */}
      <div
        className={`
          relative overflow-hidden z-10 bg-black
          transition-all duration-[1200ms] ease-in-out
          ${minimized ? "h-20 md:h-24 scale-[0.98]" : "h-[50vh] md:h-screen scale-100"}
        `}
      >
        {!reduceMotion && (
          <video
            ref={videoRef}
            src="/intro-video.mp4"
            autoPlay
            muted={isMuted}
            playsInline
            onEnded={() => setMinimized(true)}
            className={`w-full h-full object-cover transition-opacity duration-[1200ms] ${
              minimized ? "opacity-0" : "opacity-100"
            }`}
          />
        )}

        {/* Minimized Banner Fade‑In */}
        {minimized && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6 animate-fade-in-slow">
            <h2 className="text-white text-base md:text-lg font-semibold tracking-wider">
              Enterprise Application Solutions
            </h2>
          </div>
        )}

        {/* Sound Toggle Button overlay (Placed prominently at top-right below layout Header) */}
        {!minimized && !reduceMotion && (
          <button
            onClick={() => {
              if (videoRef.current) {
                const nextMuted = !isMuted;
                setIsMuted(nextMuted);
                videoRef.current.muted = nextMuted;
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch((err) => console.log("Play failed:", err));
              }
            }}
            className="absolute top-24 right-6 md:right-12 z-30 bg-black/60 hover:bg-[#0066CC] border border-white/20 hover:border-[#009BFF] text-white px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 shadow-lg flex items-center gap-2 cursor-pointer"
          >
            {isMuted ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
                Unmute & Restart Video
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                Mute & Restart Video
              </>
            )}
          </button>
        )}
      </div>

      {/* Homepage Content Fade‑In */}
      <div
        className={`transition-opacity duration-900 ${
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
