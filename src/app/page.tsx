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
          muted
          playsInline
          onEnded={() => setMinimized(true)}
          className="w-full h-full object-cover"
        />
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
