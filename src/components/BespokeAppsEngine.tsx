"use client";

import React from "react";

export function BespokeAppsEngine() {
  return (
    <div className="relative w-72 h-72 mx-auto flex items-center justify-center group cursor-default">
      
      {/* Central cube representing application engine */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 bg-gradient-to-br from-[#0066CC] to-[#00E5FF] rounded-2xl shadow-2xl border border-white/20 animate-pulse-scale flex items-center justify-center" />
      </div>

      {/* SSR Plane */}
      <OrbitPlane
        label="SSR"
        color="#009BFF"
        radius={110}
        duration={22}
      />

      {/* Android Plane */}
      <OrbitPlane
        label="Android Native"
        color="#00C853"
        radius={140}
        duration={26}
      />

      {/* iOS Plane */}
      <OrbitPlane
        label="iOS Native"
        color="#AA00FF"
        radius={170}
        duration={30}
      />

      {/* Scaling rings */}
      <ScalingRing radius={140} />
      <ScalingRing radius={180} />
      <ScalingRing radius={220} />

      {/* Floating labels around the existing animation */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Platform labels */}
        <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-white/80 font-bold uppercase tracking-wider">
          Android
        </span>

        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-white/80 font-bold uppercase tracking-wider">
          iOS
        </span>

        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-white/80 font-bold uppercase tracking-wider">
          SSR
        </span>

        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-white/80 font-bold uppercase tracking-wider">
          CSR
        </span>

        {/* Device labels */}
        <span className="absolute top-6 left-6 text-[10px] text-white/70 font-semibold">
          iPhone
        </span>

        <span className="absolute top-6 right-6 text-[10px] text-white/70 font-semibold">
          Samsung
        </span>

        <span className="absolute bottom-6 left-6 text-[10px] text-white/70 font-semibold">
          Windows PC
        </span>

        <span className="absolute bottom-6 right-6 text-[10px] text-white/70 font-semibold">
          MacBook
        </span>

      </div>

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

function ScalingRing({ radius }: { radius: number }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className="rounded-full border border-[#009BFF]/30 animate-scale-ring"
        style={{
          width: radius,
          height: radius,
        }}
      />
    </div>
  );
}
