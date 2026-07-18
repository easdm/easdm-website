"use client";

import React, { useState, useEffect } from "react";

export function BespokeAppsEngine({ isActive }: { isActive?: boolean }) {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [isPaused, setIsPaused] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 45;
    const y = (e.clientY - rect.top - rect.height / 2) / 45;
    setParallax({ x, y });
  }

  useEffect(() => {
    if (!isActive) {
      setIsPaused(false);
    }
  }, [isActive]);

  function handleMouseLeave() {
    setParallax({ x: 0, y: 0 });
  }

  return (
    <div className={`relative w-full h-[500px] flex items-center justify-center overflow-hidden ${isPaused ? 'paused-animation' : ''}`}>
      {/* Pause/Play Control Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsPaused(!isPaused);
        }}
        className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 border border-white/15 backdrop-blur-md flex items-center justify-center transition-all duration-300 pointer-events-auto shadow-md text-white hover:scale-105"
        aria-label={isPaused ? "Play animation" : "Pause animation"}
        title={isPaused ? "Play animation" : "Pause animation"}
      >
        {isPaused ? (
          <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        )}
      </button>
      <div
        className="relative w-[480px] h-[480px] scale-[0.65] md:scale-100 transition-transform duration-350 ease-out group cursor-default"
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

        {/* Orbit Paths */}
        <OrbitPath radius={90} />
        <OrbitPath radius={125} />
        <OrbitPath radius={160} />
        <OrbitPath radius={195} />
        <OrbitPath radius={230} />

        {/* RING 1 — Platforms */}
        <OrbitTab label="Android" radius={90} angle={0} color="#009BFF" duration={22} />
        <OrbitTab label="iOS" radius={90} angle={90} color="#00E5FF" duration={22} />
        <OrbitTab label="SSR" radius={90} angle={180} color="#0066CC" duration={22} />
        <OrbitTab label="CSR" radius={90} angle={270} color="#009BFF" duration={22} />

        {/* RING 2 — Devices */}
        <OrbitTab label="iPhone" radius={125} angle={0} color="#A020F0" duration={26} reverse={true} />
        <OrbitTab label="iPad" radius={125} angle={60} color="#FF6AD5" duration={26} reverse={true} />
        <OrbitTab label="Samsung" radius={125} angle={120} color="#00FFC8" duration={26} reverse={true} />
        <OrbitTab label="Pixel" radius={125} angle={180} color="#FFD700" duration={26} reverse={true} />
        <OrbitTab label="Windows PC" radius={125} angle={240} color="#A020F0" duration={26} reverse={true} />
        <OrbitTab label="MacBook" radius={125} angle={300} color="#FF6AD5" duration={26} reverse={true} />

        {/* RING 3 — AI */}
        <OrbitTab label="Agents" radius={160} angle={0} color="#FFD700" duration={30} />
        <OrbitTab label="RAG" radius={160} angle={120} color="#00FFC8" duration={30} />
        <OrbitTab label="Automation" radius={160} angle={240} color="#FFD700" duration={30} />

        {/* RING 4 — Frameworks */}
        <OrbitTab label="React" radius={195} angle={0} color="#00E5FF" duration={34} reverse={true} />
        <OrbitTab label="Next.js" radius={195} angle={120} color="#009BFF" duration={34} reverse={true} />
        <OrbitTab label="Tailwind" radius={195} angle={240} color="#0066CC" duration={34} reverse={true} />

        {/* RING 5 — Cloud */}
        <OrbitTab label="Firebase" radius={230} angle={0} color="#FFFFFF" duration={38} />
        <OrbitTab label="Google Cloud" radius={230} angle={120} color="#C0C0C0" duration={38} />
        <OrbitTab label="GitHub" radius={230} angle={240} color="#FFFFFF" duration={38} />

      </div>
    </div>
  );
}

interface OrbitTabProps {
  label: string;
  radius: number;
  angle: number;
  color: string;
  duration: number;
  reverse?: boolean;
}

function OrbitTab({ label, radius, angle, color, duration, reverse = false }: OrbitTabProps) {
  return (
    <div
      className="absolute tab-orbit"
      style={{
        "--radius": `${radius}px`,
        "--angle": `${angle}deg`,
        color,
        animationName: reverse ? "orbit-reverse" : "orbit",
        animationDuration: `${duration}s`,
      } as React.CSSProperties}
    >
      <div className="tab border border-white/10 select-none hover:scale-105 transition-transform duration-200">
        {label}
      </div>
    </div>
  );
}

function OrbitPath({ radius }: { radius: number }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className="rounded-full border border-dashed border-[#009BFF]/10"
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
      />
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
