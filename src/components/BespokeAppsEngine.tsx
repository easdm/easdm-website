"use client";

import React, { useState } from "react";

export function BespokeAppsEngine() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 40;
    const y = (e.clientY - rect.top - rect.height / 2) / 40;
    setParallax({ x, y });
  }

  function handleMouseLeave() {
    setParallax({ x: 0, y: 0 });
  }

  return (
    <div
      className="relative w-80 h-80 mx-auto group cursor-default transition-transform duration-350 ease-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${parallax.x}px, ${parallax.y}px)`,
      }}
    >
      {/* Core: EAS Engine + Cloud */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-[#0066CC] via-[#00E5FF] to-[#009BFF] shadow-2xl animate-pulse-scale flex flex-col items-center justify-center border border-white/20 select-none">
          <span className="text-[11px] font-black uppercase tracking-wider text-white text-center leading-tight">
            EAS
          </span>
          <span className="text-[9px] font-bold text-slate-100 text-center leading-tight mt-0.5">
            Application Engine
          </span>
        </div>
      </div>

      {/* Inner orbit: Cloud & DevOps */}
      <InnerOrbitLabel text="Firebase" radius={55} color="#FFCA28" />
      <InnerOrbitLabel text="Google Cloud" radius={70} color="#4285F4" />
      <InnerOrbitLabel text="GitHub" radius={85} color="#000000" />

      {/* Framework orbit: React / Next.js / Tailwind */}
      <FrameworkOrbitLabel text="React" radius={105} color="#61DAFB" />
      <FrameworkOrbitLabel text="Next.js" radius={120} color="#000000" />
      <FrameworkOrbitLabel text="Tailwind" radius={135} color="#38BDF8" />

      {/* Runtime orbit: Android / iOS / SSR / CSR */}
      <RuntimeOrbitLabel text="Android" radius={155} color="#3DDC84" />
      <RuntimeOrbitLabel text="iOS" radius={170} color="#000000" />
      <RuntimeOrbitLabel text="SSR" radius={185} color="#009BFF" />
      <RuntimeOrbitLabel text="CSR" radius={200} color="#00E5FF" />

      {/* Device orbit: iPhone / iPad / Samsung / Pixel / Windows / Mac */}
      <DeviceOrbitLabel text="iPhone" radius={220} color="#000000" />
      <DeviceOrbitLabel text="iPad" radius={235} color="#000000" />
      <DeviceOrbitLabel text="Samsung" radius={250} color="#00BCD4" />
      <DeviceOrbitLabel text="Pixel" radius={265} color="#8BC34A" />
      <DeviceOrbitLabel text="Windows PC" radius={280} color="#0078D6" />
      <DeviceOrbitLabel text="MacBook" radius={295} color="#475569" />
    </div>
  );
}

type OrbitProps = {
  text: string;
  radius: number;
  color: string;
};

function InnerOrbitLabel({ text, radius, color }: OrbitProps) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ animation: "orbit-inner 18s linear infinite" }}
    >
      <span
        className="text-[9px] font-bold px-2 py-1 rounded-md bg-white/95 border border-slate-100 shadow-sm select-none"
        style={{ color, transform: `translateX(${radius}px)` }}
      >
        {text}
      </span>
    </div>
  );
}

function FrameworkOrbitLabel({ text, radius, color }: OrbitProps) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ animation: "orbit-framework 24s linear infinite" }}
    >
      <span
        className="text-[9px] font-bold px-2 py-1 rounded-md bg-white/95 border border-slate-100 shadow-sm select-none"
        style={{ color, transform: `translateX(${radius}px)` }}
      >
        {text}
      </span>
    </div>
  );
}

function RuntimeOrbitLabel({ text, radius, color }: OrbitProps) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ animation: "orbit-runtime 30s linear infinite" }}
    >
      <span
        className="text-[9px] font-bold px-2 py-1 rounded-md bg-white/95 border border-slate-100 shadow-sm select-none"
        style={{ color, transform: `translateX(${radius}px)` }}
      >
        {text}
      </span>
    </div>
  );
}

function DeviceOrbitLabel({ text, radius, color }: OrbitProps) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ animation: "orbit-device 36s linear infinite" }}
    >
      <span
        className="text-[9px] font-bold px-2 py-1 rounded-md bg-white/95 border border-slate-100 shadow-sm select-none"
        style={{ color, transform: `translateX(${radius}px)` }}
      >
        {text}
      </span>
    </div>
  );
}
