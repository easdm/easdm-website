'use client';

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A1A2F]/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="/" className="flex items-center gap-3 group">
          <svg className="w-8 h-8 transform group-hover:scale-105 transition-transform duration-300" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6H26" stroke="url(#logo-grad-1)" strokeWidth="4" strokeLinecap="round"/>
            <path d="M6 16H20" stroke="url(#logo-grad-2)" strokeWidth="4" strokeLinecap="round"/>
            <path d="M6 26H24" stroke="url(#logo-grad-1)" strokeWidth="4" strokeLinecap="round"/>
            <path d="M6 6V26" stroke="url(#logo-grad-2)" strokeWidth="4" strokeLinecap="round"/>
            <defs>
              <linearGradient id="logo-grad-1" x1="6" y1="6" x2="26" y2="6" gradientUnits="userSpaceOnUse">
                <stop stopColor="#009BFF"/>
                <stop offset="1" stopColor="#0066CC"/>
              </linearGradient>
              <linearGradient id="logo-grad-2" x1="6" y1="16" x2="20" y2="16" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00E5FF"/>
                <stop offset="1" stopColor="#009BFF"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-white">EAS</span>
            <div className="w-[1px] h-4 bg-white/20 self-center hidden sm:block" />
            <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase hidden sm:block">
              Enterprise Application Solutions
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#services" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#009BFF] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="/#industries" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group">
            Industries
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#009BFF] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="/about" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#009BFF] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="/contact" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#009BFF] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <a 
            href="/contact" 
            className="rounded-md bg-white/10 hover:bg-[#0066CC] border border-white/20 hover:border-[#009BFF] px-4 py-2 text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#0066CC]/20"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
