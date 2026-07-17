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
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayOverlay, setShowPlayOverlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMinimized(true);
      setShowPlayOverlay(false);
    }
  }, []);

  const handlePlayWithSound = () => {
    setIsMuted(false);
    setShowPlayOverlay(false);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        console.log("Play failed after user interaction:", err);
      });
    }
  };

  const handleSkipIntro = () => {
    setMinimized(true);
    setShowPlayOverlay(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <main className="min-h-screen bg-[#050811] text-slate-900 relative">
      {/* Hero Video Container */}
      <div
        className={`relative overflow-hidden transition-all duration-[800ms] ease-in-out ${
          minimized ? "h-20 md:h-24" : "h-[50vh] md:h-screen"
        }`}
      >
        <video
          ref={videoRef}
          src="/intro-video.mp4"
          muted={isMuted}
          playsInline
          onEnded={() => setMinimized(true)}
          className="w-full h-full object-contain bg-black"
        />
        
        {/* Play/Sound Overlay for browser autoplay compliance */}
        {showPlayOverlay && !minimized && (
          <div className="absolute inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-fade-in backdrop-blur-md">
              <div className="w-16 h-16 bg-[#0066CC]/20 border border-[#009BFF]/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <svg className="w-8 h-8 text-[#009BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">Welcome to EAS</h3>
              <p className="text-slate-350 text-xs mb-6">Experience our introduction with full audio.</p>
              
              <div className="flex flex-col gap-3">
                <button
                  onClick={handlePlayWithSound}
                  className="w-full rounded-lg bg-[#0066CC] hover:bg-[#009BFF] py-3 text-sm font-bold text-white transition-all duration-300 transform hover:shadow-lg hover:shadow-[#0066CC]/20 cursor-pointer"
                >
                  Play with Sound
                </button>
                <button
                  onClick={handleSkipIntro}
                  className="w-full rounded-lg border border-slate-500 hover:border-slate-300 py-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Skip Intro
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Unmute/Mute Toggle Button Overlay (Post-click control) */}
        {!minimized && !showPlayOverlay && (
          <button
            onClick={() => {
              if (videoRef.current) {
                const nextMuteState = !isMuted;
                videoRef.current.muted = nextMuteState;
                setIsMuted(nextMuteState);
              }
            }}
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
        className={`transition-opacity duration-700 bg-white ${
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
