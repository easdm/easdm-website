'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import CognitiveCore from './CognitiveCore';
import { BespokeAppsEngine } from './BespokeAppsEngine';

const slides = [
  {
    titleLine1: "Bespoke Applications",
    titleLine2: "Built for Scale.",
    description: "High-performance client-facing web interfaces, cross-platform native apps, and automation microservices engineered with speed and security.",
    primaryBtn: "App Delivery",
    primaryHref: "#services",
    secondaryBtn: "Work With Us",
    secondaryHref: "#contact",
    bgGradient: "from-[#110E2E] via-[#4F46E5] to-[#0A071B]",
    techBadges: ["Next.js", "Firebase", "Android", "iOS", "CI/CD Automations"],
    graphic: (isActive: boolean) => <BespokeAppsEngine isActive={isActive} />
  },
  {
    titleLine1: "Engineering the",
    titleLine2: "Modern Enterprise.",
    description: "Cloud, Identity, Endpoint, and Application Solutions for organizations that demand security, scale, and precision.",
    primaryBtn: "Explore Services",
    primaryHref: "#services",
    secondaryBtn: "Contact EAS",
    secondaryHref: "#contact",
    bgGradient: "from-[#0A1A2F] via-[#0066CC] to-[#09111e]",
    techBadges: ["Azure", "Entra ID", "Intune", "Microsoft 365", "Custom Apps"],
    graphic: (isActive: boolean) => <CognitiveCore isActive={isActive} />
  },
  {
    titleLine1: "Secure Identity.",
    titleLine2: "Zero Trust.",
    description: "Modern Access, Governance, and Lifecycle Management solutions engineered to protect users and corporate digital resources.",
    primaryBtn: "Identity Security",
    primaryHref: "#services",
    secondaryBtn: "Read Success Stories",
    secondaryHref: "#contact",
    bgGradient: "from-[#07162C] via-[#0D9488] to-[#050B14]",
    techBadges: ["Zero Trust", "MFA & SSO", "Conditional Access", "Governance", "Lifecycle"],
    graphic: (
      <div className="relative w-full max-w-[280px] h-[280px] md:max-w-[480px] md:h-[480px] mx-auto rounded-2xl bg-gradient-to-br from-[#0D9488] via-[#14B8A6] to-[#07162C] overflow-hidden shadow-2xl border border-white/10 animate-gradient-drift">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_60%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border border-teal-400/20 flex items-center justify-center animate-ping [animation-duration:4s]" />
          <div className="absolute w-36 h-36 rounded-full border border-teal-300/30 flex items-center justify-center animate-ping [animation-duration:3s]" />
          <div className="absolute w-24 h-24 rounded-full border border-teal-200/40 flex items-center justify-center animate-pulse" />
          <div className="absolute w-12 h-12 rounded-full bg-teal-500/10 border border-teal-400/50 flex items-center justify-center">
            <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 right-8 text-sm text-slate-100 z-10">
          <p className="font-bold text-lg tracking-tight">Zero-Trust Security Controls</p>
          <p className="text-xs text-slate-300 mt-2 font-mono">
            Identity Protection · Access Reviews · PIM · Conditional Access Policies
          </p>
        </div>
      </div>
    )
  }
];

export default function Hero({ minimized = true }: { minimized?: boolean }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Reset slide index to 0 when video plays
  useEffect(() => {
    if (!minimized) {
      setActiveSlide(0);
    }
  }, [minimized]);

  // Autoplay slides cycle (only runs once video has finished)
  useEffect(() => {
    if (isAutoplayPaused || !minimized) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isAutoplayPaused, minimized]);

  return (
    <section className="relative h-screen md:min-h-[700px] lg:min-h-[750px] bg-transparent text-white overflow-hidden flex items-center pt-12 md:pt-0 pb-12 md:pb-0">
      {/* Abstract Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-25 opacity-75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,155,255,0.04),_transparent_75%)] pointer-events-none z-25" />

      {/* Slides Container - Horizontal Fade */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full flex items-center bg-gradient-to-br ${slide.bgGradient} transition-all duration-[1200ms] ease-in-out ${
                isActive ? 'opacity-100 z-20 pointer-events-auto scale-100' : 'opacity-0 z-0 pointer-events-none scale-[0.98]'
              }`}
            >
              <div className="mx-auto max-w-6xl px-6 pt-16 pb-16 md:py-20 w-full h-full flex flex-col justify-center">
                <div className="flex-grow flex flex-col md:grid md:grid-cols-2 justify-between md:justify-center items-center gap-4 md:gap-16 h-full w-full">
                  
                  {/* Slide Text Content */}
                  <div className="flex-1 w-full text-left flex flex-col justify-center pt-4 md:pt-0">
                    {/* Staggered Badges */}
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6 order-3 md:order-first">
                      {slide.techBadges.map((badge, idx) => (
                        <span 
                          key={badge} 
                          className={`rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-bold font-mono text-slate-300 uppercase tracking-widest transition-all duration-[800ms] ease-out ${
                            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                          }`}
                          style={{ transitionDelay: isActive ? `${idx * 80}ms` : '0ms' }}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Masked Title Slide-Up */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-3 md:mb-6 order-1 md:order-none">
                      <span className="clip-mask">
                        <span className={`inline-block bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent transition-all duration-[1000ms] ease-out ${
                          isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                        }`}>
                          {slide.titleLine1}
                        </span>
                      </span>
                      <span className="clip-mask mt-1">
                        <span 
                          className={`inline-block text-[#009BFF] transition-all duration-[1000ms] ease-out ${
                            isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                          }`}
                          style={{ transitionDelay: isActive ? '150ms' : '0ms' }}
                        >
                          {slide.titleLine2}
                        </span>
                      </span>
                    </h1>

                    {/* Subtitle Fade In */}
                    <p 
                      className={`text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 mb-4 md:mb-8 max-w-xl leading-relaxed transition-all duration-[1000ms] ease-out order-2 md:order-none ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: isActive ? '300ms' : '0ms' }}
                    >
                      {slide.description}
                    </p>

                    {/* Buttons Reveal */}
                    <div 
                      className={`flex flex-wrap gap-4 transition-all duration-[1000ms] ease-out order-4 md:order-none ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: isActive ? '450ms' : '0ms' }}
                    >
                      <a
                        href={slide.primaryHref}
                        className="rounded-md bg-[#0066CC] px-6 py-3 text-sm font-semibold hover:bg-[#009BFF] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0066CC]/25"
                      >
                        {slide.primaryBtn}
                      </a>
                      <a
                        href={slide.secondaryHref}
                        className="rounded-md border border-slate-500 px-6 py-3 text-sm font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:-translate-y-0.5"
                      >
                        {slide.secondaryBtn}
                      </a>
                    </div>
                  </div>

                  {/* Slide Graphic/Visual Content */}
                  <div 
                    className={`flex-1 w-full flex items-center justify-center transition-all duration-[1200ms] ease-out ${
                      isActive ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-[0.97]'
                    }`}
                    style={{ transitionDelay: isActive ? '200ms' : '0ms' }}
                  >
                    {typeof slide.graphic === 'function' ? slide.graphic(isActive) : slide.graphic}
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-12 md:bottom-6 left-6 right-6 flex items-center justify-between z-30 mx-auto max-w-6xl px-6 w-full">
        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 hover:border-white/30 flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Previous Slide"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 hover:border-white/30 flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Next Slide"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Center: Autoplay Pause/Play button */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <button
            onClick={() => setIsAutoplayPaused(!isAutoplayPaused)}
            className="w-10 h-10 rounded-full border border-white/15 bg-white/10 hover:bg-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 cursor-pointer text-white shadow-lg hover:scale-105"
            aria-label={isAutoplayPaused ? "Play slide rotation" : "Pause slide rotation"}
            title={isAutoplayPaused ? "Play slide rotation" : "Pause slide rotation"}
          >
            {isAutoplayPaused ? (
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </button>
        </div>

        {/* Bullets with progress loaders */}
        <div className="flex gap-3 pr-12">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveSlide(idx);
              }}
              className={`relative h-1.5 rounded-full overflow-hidden transition-all duration-500 bg-white/20 cursor-pointer ${idx === activeSlide ? 'w-10' : 'w-4 hover:bg-white/40'}`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {idx === activeSlide && (
                <div className="absolute top-0 bottom-0 left-0 bg-[#009BFF] animate-progress-fill animate-none" style={{ animation: isAutoplayPaused ? 'none' : 'progress-fill 6s linear infinite' }} />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
