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
            muted
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

        {/* Sound Toggle Button overlay */}
        {!minimized && !reduceMotion && (
          <button
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.muted = !videoRef.current.muted;
              }
            }}
            className="absolute bottom-6 right-6 z-30 bg-black/50 hover:bg-black/70 text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer"
          >
            Toggle Sound
          </button>
        )}
      </div>

      {/* Homepage Content Fade‑In */}
      <div
        className={`transition-opacity duration-[900ms] ${
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
