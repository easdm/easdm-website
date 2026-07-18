"use client";

import React from "react";

export function BespokeAppsEngine() {
  return (
    <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto flex items-center justify-center group cursor-default">
      
      {/* Central cube (representing the application engine) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#0066CC] to-[#00E5FF] rounded-2xl shadow-2xl border border-white/20 animate-pulse-scale flex items-center justify-center" />
      </div>

      {/* Central Engine Label Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
        <span className="text-[10px] font-black uppercase tracking-widest text-white drop-shadow-[0_0_6px_#00E5FF]">
          Engine
        </span>
        <span className="text-[8px] font-mono text-slate-300 mt-0.5">
          v3.0
        </span>
      </div>

      {/* SSR Plane (Blue) */}
      <OrbitPlane
        label="SSR"
        color="#009BFF"
        radius={90}
        duration={22}
      />

      {/* Android Plane (Green) */}
      <OrbitPlane
        label="Android Native"
        color="#00C853"
        radius={115}
        duration={26}
      />

      {/* iOS Plane (Purple) */}
      <OrbitPlane
        label="iOS Native"
        color="#AA00FF"
        radius={140}
        duration={30}
      />

      {/* Scaling rings */}
      <ScalingRing radius={110} delay="0s" />
      <ScalingRing radius={140} delay="1.3s" />
      <ScalingRing radius={170} delay="2.6s" />

    </div>
  );
}

function OrbitPlane({
  label,
  color,
  radius,
  duration,
}: {
  label: string;
  color: string;
  radius: number;
  duration: number;
}) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{
        animation: `orbit ${duration}s linear infinite`,
      }}
    >
      <div
        className="px-3 py-1.5 rounded-lg text-[9px] md:text-xs font-bold text-white shadow-lg border border-white/10"
        style={{
          backgroundColor: color,
          transform: `translateX(${radius}px)`,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function ScalingRing({ radius, delay }: { radius: number; delay: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className="rounded-full border border-[#009BFF]/30 animate-scale-ring"
        style={{
          width: radius,
          height: radius,
          animationDelay: delay
        }}
      />
    </div>
  );
}
