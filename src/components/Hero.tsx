'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AiNeuralCore } from './AiNeuralCore';

const slides = [
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
    graphic: <AiNeuralCore />
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
      <div className="relative w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-[#0D9488] via-[#14B8A6] to-[#07162C] overflow-hidden shadow-2xl border border-white/10 animate-gradient-drift">
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
  },
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
    graphic: (
      <div className="relative w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#110E2E] overflow-hidden shadow-2xl border border-white/10 animate-gradient-drift">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:16px_16px]" />
        <div className="absolute top-12 left-12 right-12 bottom-12 flex flex-col gap-3 justify-center z-10">
          <div className="h-6 w-3/4 rounded bg-white/10 border border-white/20 transform -translate-x-4 hover:translate-x-0 transition-transform duration-500" />
          <div className="h-6 w-1/2 rounded bg-white/15 border border-white/20 transform translate-x-4 hover:translate-x-0 transition-transform duration-500" />
          <div className="h-6 w-5/6 rounded bg-white/5 border border-white/10 transform -translate-x-2 hover:translate-x-0 transition-transform duration-500" />
        </div>
        <div className="absolute bottom-8 left-8 right-8 text-sm text-slate-100 z-10">
          <p className="font-bold text-lg tracking-tight">Full-Stack SSR & Native Apps</p>
          <p className="text-xs text-slate-300 mt-2 font-mono">
            React Server Components · Firebase App Hosting · Swift & Kotlin Parity
          </p>
        </div>
      </div>
    )
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[620px] md:min-h-[700px] bg-[#050811] text-white overflow-hidden flex items-center">
      {/* Abstract Tech Grid Background */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_transparent_40%,_#050811_95%)] pointer-events-none z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />

      {/* Top Banner Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#009BFF] to-transparent opacity-60 z-30" />

      {/* Slides Container */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full flex items-center bg-gradient-to-br ${slide.bgGradient} transition-all duration-[1200ms] ease-in-out ${
                isActive ? 'opacity-100 z-20 pointer-events-auto scale-100' : 'opacity-0 z-0 pointer-events-none scale-[0.98]'
              }`}
            >
              <div className="mx-auto max-w-6xl px-6 py-20 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                  
                  {/* Slide Text Content */}
                  <div className="flex-1 w-full text-left">
                    {/* Staggered Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-6">
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
                      className={`text-base md:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed transition-all duration-[1000ms] ease-out ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: isActive ? '300ms' : '0ms' }}
                    >
                      {slide.description}
                    </p>

                    {/* Buttons Reveal */}
                    <div 
                      className={`flex flex-wrap gap-4 transition-all duration-[1000ms] ease-out ${
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
                    className={`flex-1 w-full transition-all duration-[1200ms] ease-out ${
                      isActive ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-[0.97]'
                    }`}
                    style={{ transitionDelay: isActive ? '200ms' : '0ms' }}
                  >
                    {slide.graphic}
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-30 mx-auto max-w-6xl px-6 w-full">
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

        {/* Bullets with progress loaders */}
        <div className="flex gap-3 pr-12">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentSlide(idx);
              }}
              className={`relative h-1.5 rounded-full overflow-hidden transition-all duration-500 bg-white/20 cursor-pointer ${idx === currentSlide ? 'w-10' : 'w-4 hover:bg-white/40'}`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {idx === currentSlide && (
                <div className="absolute top-0 bottom-0 left-0 bg-[#009BFF] animate-progress-fill" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
