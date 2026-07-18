"use client";

import React, { useState } from "react";

export function BespokeAppsEngine() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 45;
    const y = (e.clientY - rect.top - rect.height / 2) / 45;
    setParallax({ x, y });
  }

  function handleMouseLeave() {
    setParallax({ x: 0, y: 0 });
  }

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="relative w-[480px] h-[480px] scale-[0.65] md:scale-100 transition-transform duration-300 flex items-center justify-center group cursor-default"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${parallax.x}px, ${parallax.y}px)`,
        }}
      >
        
        {/* Central pulsing cube core */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-24 h-24 bg-gradient-to-br from-[#0066CC] to-[#00E5FF] rounded-2xl shadow-2xl border border-white/20 animate-pulse-scale flex flex-col items-center justify-center select-none text-center p-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-white drop-shadow-[0_0_6px_#00E5FF] leading-tight">
              Engine
            </span>
            <span className="text-[8px] font-mono text-slate-200 mt-0.5">
              v3.0
            </span>
          </div>
        </div>

        {/* Central ambient core glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#009BFF] to-[#00E5FF] blur-3xl opacity-20" />
        </div>

        {/* Original Scaling Rings */}
        <ScalingRing radius={180} />
        <ScalingRing radius={250} />
        <ScalingRing radius={320} />

        {/* RING 1 — Platforms */}
        <Ring radius={90} duration={22}>
          <Tab label="Android" color="#00C853" />
          <Tab label="iOS" color="#AA00FF" />
          <Tab label="SSR" color="#009BFF" />
          <Tab label="CSR" color="#00E5FF" />
        </Ring>

        {/* RING 2 — Frameworks */}
        <Ring radius={125} duration={26} reverse={true}>
          <Tab label="React" color="#61DAFB" />
          <Tab label="Next.js" color="#0F172A" />
          <Tab label="Tailwind" color="#38BDF8" />
        </Ring>

        {/* RING 3 — AI */}
        <Ring radius={160} duration={30}>
          <Tab label="Agents" color="#00E5FF" />
          <Tab label="RAG" color="#009BFF" />
          <Tab label="Automation" color="#0066CC" />
        </Ring>

        {/* RING 4 — Cloud */}
        <Ring radius={195} duration={34} reverse={true}>
          <Tab label="Firebase" color="#FFCA28" />
          <Tab label="Google Cloud" color="#4285F4" />
          <Tab label="GitHub" color="#1E293B" />
        </Ring>

        {/* RING 5 — Devices */}
        <Ring radius={230} duration={38}>
          <Tab label="iPhone" color="#334155" />
          <Tab label="iPad" color="#475569" />
          <Tab label="Samsung" color="#00BCD4" />
          <Tab label="Pixel" color="#8BC34A" />
          <Tab label="Windows PC" color="#0078D6" />
          <Tab label="MacBook" color="#64748B" />
        </Ring>

      </div>
    </div>
  );
}

interface RingProps {
  radius: number;
  duration: number;
  reverse?: boolean;
  children: React.ReactNode;
}

function Ring({ radius, duration, reverse = false, children }: RingProps) {
  return (
    <div
      className="absolute flex items-center justify-center pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
        animation: `orbit ${duration}s linear infinite${reverse ? " reverse" : ""}`,
      }}
    >
      {/* Dashed ring path line */}
      <div className="absolute inset-0 rounded-full border border-dashed border-[#009BFF]/15" />

      {/* Position children around the circle */}
      {React.Children.map(children, (child, index) => {
        const count = React.Children.count(children);
        const angle = (360 / count) * index;
        return (
          <div
            className="absolute pointer-events-auto"
            style={{
              transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

function Tab({ label, color }: { label: string; color: string }) {
  return (
    <div
      className="px-2.5 py-1 rounded-lg text-[9px] md:text-xs font-bold text-white shadow-xl border border-white/10 select-none whitespace-nowrap hover:scale-110 transition-transform duration-200"
      style={{
        backgroundColor: color,
      }}
    >
      {label}
    </div>
  );
}

function ScalingRing({ radius }: { radius: number }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className="rounded-full border border-[#009BFF]/20 animate-scale-ring"
        style={{
          width: radius,
          height: radius,
        }}
      />
    </div>
  );
}
