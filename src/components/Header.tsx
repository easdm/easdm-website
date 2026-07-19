'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isNewInquiry = pathname === '/contact' || pathname === '/getintouch' || pathname === '/support';

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
    } else {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHome]);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-[#050811]/30 backdrop-blur-md py-4 px-4 md:px-8 border-b border-white/5 transition-all duration-300"
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between relative z-50">
        <Link href="/?play=true" className="flex flex-col items-start group">
          <span className="text-2xl font-black bg-gradient-to-r from-[#00E5FF] via-[#009BFF] to-[#0066CC] bg-clip-text text-transparent leading-none tracking-wider">EAS</span>
          <span className="text-[7.5px] sm:text-[9px] font-bold tracking-widest text-white uppercase mt-1.5 leading-none transition-opacity group-hover:opacity-80">
            Enterprise Application Solutions
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/insights" className={`text-xs font-bold tracking-wider uppercase transition-colors relative group ${pathname === '/insights' ? 'text-[#009BFF]' : 'text-slate-300 hover:text-white'}`}>
            Insights
            <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-[#009BFF] transition-all duration-300 ${pathname === '/insights' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
          <Link href="/services" className={`text-xs font-bold tracking-wider uppercase transition-colors relative group ${pathname.startsWith('/services') ? 'text-[#009BFF]' : 'text-slate-300 hover:text-white'}`}>
            Services
            <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-[#009BFF] transition-all duration-300 ${pathname.startsWith('/services') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
          <Link href="/industries" className={`text-xs font-bold tracking-wider uppercase transition-colors relative group ${pathname.startsWith('/industries') ? 'text-[#009BFF]' : 'text-slate-300 hover:text-white'}`}>
            Industries
            <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-[#009BFF] transition-all duration-300 ${pathname.startsWith('/industries') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
          <Link href="/clients" className={`text-xs font-bold tracking-wider uppercase transition-colors relative group ${pathname === '/clients' || pathname.startsWith('/case-studies') ? 'text-[#009BFF]' : 'text-slate-300 hover:text-white'}`}>
            Clients
            <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-[#009BFF] transition-all duration-300 ${pathname === '/clients' || pathname.startsWith('/case-studies') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
          <Link href="/mission" className={`text-xs font-bold tracking-wider uppercase transition-colors relative group ${pathname === '/mission' ? 'text-[#009BFF]' : 'text-slate-300 hover:text-white'}`}>
            Mission
            <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-[#009BFF] transition-all duration-300 ${pathname === '/mission' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
          <Link href="/commitment" className={`text-xs font-bold tracking-wider uppercase transition-colors relative group ${pathname === '/commitment' ? 'text-[#009BFF]' : 'text-slate-300 hover:text-white'}`}>
            Commitment
            <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-[#009BFF] transition-all duration-300 ${pathname === '/commitment' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
          <Link href="/careers" className={`text-xs font-bold tracking-wider uppercase transition-colors relative group ${pathname === '/careers' ? 'text-[#009BFF]' : 'text-slate-300 hover:text-white'}`}>
            Careers
            <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-[#009BFF] transition-all duration-300 ${pathname === '/careers' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
        </nav>

        {/* Action Button & Hamburger Toggle */}
        <div className="flex items-center gap-4">
          {!isNewInquiry && (
            <Link 
              href="/getintouch" 
              className="hidden lg:block rounded-md bg-white/10 hover:bg-[#0066CC] border border-white/20 hover:border-[#009BFF] px-4 py-2 text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#0066CC]/20"
            >
              Get in Touch
            </Link>
          )}
          {/* Hamburger Menu Icon */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block lg:hidden text-white hover:text-[#009BFF] transition-colors focus:outline-none z-50 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A1A2F]/98 backdrop-blur-xl flex flex-col justify-start items-center gap-4 pt-28 pb-12 px-6 overflow-y-auto w-full h-full animate-fade-in">
          <Link href="/?skip=true" onClick={() => setIsMobileMenuOpen(false)} className={`w-full max-w-xs text-center py-3 border-b border-white/5 text-xs font-bold tracking-widest uppercase transition-colors ${isHome ? 'text-[#009BFF] border-b-[#009BFF]/30' : 'text-slate-200 hover:text-[#009BFF]'}`}>Home</Link>
          <Link href="/insights" onClick={() => setIsMobileMenuOpen(false)} className={`w-full max-w-xs text-center py-3 border-b border-white/5 text-xs font-bold tracking-widest uppercase transition-colors ${pathname === '/insights' ? 'text-[#009BFF] border-b-[#009BFF]/30' : 'text-slate-200 hover:text-[#009BFF]'}`}>Insights</Link>
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className={`w-full max-w-xs text-center py-3 border-b border-white/5 text-xs font-bold tracking-widest uppercase transition-colors ${pathname.startsWith('/services') ? 'text-[#009BFF] border-b-[#009BFF]/30' : 'text-slate-200 hover:text-[#009BFF]'}`}>Services</Link>
          <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)} className={`w-full max-w-xs text-center py-3 border-b border-white/5 text-xs font-bold tracking-widest uppercase transition-colors ${pathname.startsWith('/industries') ? 'text-[#009BFF] border-b-[#009BFF]/30' : 'text-slate-200 hover:text-[#009BFF]'}`}>Industries</Link>
          <Link href="/clients" onClick={() => setIsMobileMenuOpen(false)} className={`w-full max-w-xs text-center py-3 border-b border-white/5 text-xs font-bold tracking-widest uppercase transition-colors ${pathname === '/clients' || pathname.startsWith('/case-studies') ? 'text-[#009BFF] border-b-[#009BFF]/30' : 'text-slate-200 hover:text-[#009BFF]'}`}>Clients</Link>
          <Link href="/mission" onClick={() => setIsMobileMenuOpen(false)} className={`w-full max-w-xs text-center py-3 border-b border-white/5 text-xs font-bold tracking-widest uppercase transition-colors ${pathname === '/mission' ? 'text-[#009BFF] border-b-[#009BFF]/30' : 'text-slate-200 hover:text-[#009BFF]'}`}>Mission</Link>
          <Link href="/commitment" onClick={() => setIsMobileMenuOpen(false)} className={`w-full max-w-xs text-center py-3 border-b border-white/5 text-xs font-bold tracking-widest uppercase transition-colors ${pathname === '/commitment' ? 'text-[#009BFF] border-b-[#009BFF]/30' : 'text-slate-200 hover:text-[#009BFF]'}`}>Commitment</Link>
          <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className={`w-full max-w-xs text-center py-3 border-b border-white/5 text-xs font-bold tracking-widest uppercase transition-colors ${pathname === '/careers' ? 'text-[#009BFF] border-b-[#009BFF]/30' : 'text-slate-200 hover:text-[#009BFF]'}`}>Careers</Link>
          {!isNewInquiry && (
            <Link href="/getintouch" onClick={() => setIsMobileMenuOpen(false)} className="w-full max-w-xs text-center py-3.5 bg-[#0066CC] hover:bg-[#009BFF] text-xs font-black tracking-widest uppercase rounded-lg transition-all duration-300 text-white mt-4 shadow-lg shadow-[#0066CC]/20 hover:shadow-[#0066CC]/40">Get in Touch</Link>
          )}
        </div>
      )}
    </header>
  );
}
