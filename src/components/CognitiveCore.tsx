'use client';

import React from 'react';

export default function CognitiveCore() {
  return (
    <div className="relative w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-[#0A1A2F] via-[#05162E] to-[#020B14] overflow-hidden shadow-2xl border border-white/10 group cursor-default">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_#0066CC_0%,_transparent_60%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#00E5FF_0%,_transparent_40%)]" />
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      {/* Main container with scale effect on hover */}
      <div className="w-full h-full relative transition-transform duration-500 group-hover:scale-105 flex items-center justify-center">
        
        {/* Main SVG workspace */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#0066CC" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0A1A2F" stopOpacity="0" />
            </radialGradient>
            
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066CC" />
              <stop offset="50%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#0066CC" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Dynamic connection lines (Pulsing synapses) */}
          {/* Core (200, 200) to Top-Left Node (110, 110) */}
          <path d="M 200 200 L 110 110" stroke="url(#lineGrad)" strokeWidth="2.5" className="opacity-80 animate-dash-flow" />
          
          {/* Core (200, 200) to Top-Right Node (290, 110) */}
          <path d="M 200 200 L 290 110" stroke="url(#lineGrad)" strokeWidth="2.5" className="opacity-80 animate-dash-flow" style={{ animationDelay: '-0.5s' }} />
          
          {/* Core (200, 200) to Bottom-Right Node (290, 290) */}
          <path d="M 200 200 L 290 290" stroke="url(#lineGrad)" strokeWidth="2.5" className="opacity-80 animate-dash-flow" style={{ animationDelay: '-1s' }} />
          
          {/* Core (200, 200) to Bottom-Left Node (110, 290) */}
          <path d="M 200 200 L 110 290" stroke="url(#lineGrad)" strokeWidth="2.5" className="opacity-80 animate-dash-flow" style={{ animationDelay: '-1.5s' }} />

          {/* Outer orbital rings */}
          <circle cx="200" cy="200" r="120" stroke="#009BFF" strokeWidth="1" strokeDasharray="5 15" className="opacity-25 animate-[spin_40s_linear_infinite]" />
          <circle cx="200" cy="200" r="100" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="10 20 5 15" className="opacity-40 animate-[spin_25s_linear_infinite_reverse]" />

          {/* Central Cognitive Core */}
          {/* Core glow background */}
          <circle cx="200" cy="200" r="55" fill="url(#coreGlow)" className="animate-pulse" style={{ animationDuration: '3s' }} />
          
          {/* Core rotating geometries */}
          <g className="animate-[spin_12s_linear_infinite] origin-[200px_200px] group-hover:animate-[spin_6s_linear_infinite]">
            <circle cx="200" cy="200" r="35" stroke="#00E5FF" strokeWidth="2" strokeDasharray="25 15 5 10" filter="url(#glow)" />
            <path d="M 165 200 A 35 35 0 0 1 235 200" stroke="#009BFF" strokeWidth="3" strokeLinecap="round" />
          </g>
          
          <g className="animate-[spin_8s_linear_infinite_reverse] origin-[200px_200px] group-hover:animate-[spin_4s_linear_infinite_reverse]">
            <circle cx="200" cy="200" r="22" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="8 8" />
            <circle cx="200" cy="200" r="12" fill="#00E5FF" filter="url(#glow)" className="animate-ping [animation-duration:2.5s]" />
            <circle cx="200" cy="200" r="6" fill="#FFFFFF" />
          </g>

          {/* Orbit Nodes */}
          {/* Top-Left: Agentic Automation */}
          <g className="animate-float" style={{ animationDelay: '0s' }}>
            <circle cx="110" cy="110" r="10" fill="#0A1A2F" stroke="#009BFF" strokeWidth="2" filter="url(#glow)" />
            <circle cx="110" cy="110" r="4" fill="#00E5FF" />
          </g>
          
          {/* Top-Right: Large Language Models */}
          <g className="animate-float" style={{ animationDelay: '-1s' }}>
            <circle cx="290" cy="110" r="10" fill="#0A1A2F" stroke="#009BFF" strokeWidth="2" filter="url(#glow)" />
            <circle cx="290" cy="110" r="4" fill="#00E5FF" />
          </g>
          
          {/* Bottom-Right: Predictive Analytics */}
          <g className="animate-float" style={{ animationDelay: '-2s' }}>
            <circle cx="290" cy="290" r="10" fill="#0A1A2F" stroke="#009BFF" strokeWidth="2" filter="url(#glow)" />
            <circle cx="290" cy="290" r="4" fill="#00E5FF" />
          </g>
          
          {/* Bottom-Left: Cognitive Services */}
          <g className="animate-float" style={{ animationDelay: '-3s' }}>
            <circle cx="110" cy="290" r="10" fill="#0A1A2F" stroke="#009BFF" strokeWidth="2" filter="url(#glow)" />
            <circle cx="110" cy="290" r="4" fill="#00E5FF" />
          </g>
        </svg>

        {/* Orbiting AI Labels (Enhanced Layout) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="absolute text-[10px] font-bold text-[#009BFF] opacity-70 animate-orbit-slow select-none">AI</span>
          <span className="absolute text-[10px] font-bold text-[#00E5FF] opacity-70 animate-orbit-medium select-none">LLM</span>
          <span className="absolute text-[10px] font-bold text-[#0066CC] opacity-70 animate-orbit-fast select-none whitespace-nowrap">Predictive Analytics</span>
        </div>

        {/* AI Core Text overlay inside center */}
        <span className="absolute text-[10px] font-black uppercase tracking-widest text-white drop-shadow-[0_0_6px_#00E5FF] select-none pointer-events-none transition-all duration-300 group-hover:scale-110">
          AI Core
        </span>

        {/* Floating Labels Overlay */}
        {/* Top-Left */}
        <div className="absolute top-[12%] left-[3%] md:top-[16%] md:left-[6%] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] md:text-xs font-bold text-slate-200 tracking-wide uppercase transition-all duration-300 group-hover:border-[#009BFF]/30 group-hover:text-white shadow-lg animate-float-text">
          Agentic Automation
        </div>

        {/* Top-Right */}
        <div className="absolute top-[12%] right-[3%] md:top-[16%] right-[6%] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] md:text-xs font-bold text-slate-200 tracking-wide uppercase transition-all duration-300 group-hover:border-[#009BFF]/30 group-hover:text-white shadow-lg animate-float-text" style={{ animationDelay: '-1s' }}>
          LLM Pipelines
        </div>

        {/* Bottom-Right */}
        <div className="absolute bottom-[16%] right-[3%] md:bottom-[20%] right-[6%] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] md:text-xs font-bold text-slate-200 tracking-wide uppercase transition-all duration-300 group-hover:border-[#009BFF]/30 group-hover:text-white shadow-lg animate-float-text" style={{ animationDelay: '-2s' }}>
          Predictive Engines
        </div>

        {/* Bottom-Left */}
        <div className="absolute bottom-[16%] left-[3%] md:bottom-[20%] left-[6%] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] md:text-xs font-bold text-slate-200 tracking-wide uppercase transition-all duration-300 group-hover:border-[#009BFF]/30 group-hover:text-white shadow-lg animate-float-text" style={{ animationDelay: '-3s' }}>
          Cognitive Services
        </div>
      </div>

      {/* Center Label (Fades in on hover) */}
      <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none transition-all duration-500 opacity-80 group-hover:opacity-100">
        <p className="text-white font-extrabold text-sm md:text-base tracking-tight uppercase group-hover:text-[#00E5FF] transition-colors duration-300">
          Cognitive AI Core
        </p>
        <p className="text-[10px] text-slate-400 font-mono mt-1 group-hover:text-slate-350 transition-colors duration-300">
          Deep Neural Integration · Active Inference
        </p>
      </div>
    </div>
  );
}
