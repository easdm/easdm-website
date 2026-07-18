"use client";

import { useEffect, useState } from "react";

export function AiNeuralCore() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduceMotion(true);
    }
  }, []);

  return (
    <div className="relative w-64 h-64 mx-auto group">
      {/* Static fallback for reduced motion */}
      {reduceMotion ? (
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#009BFF] via-[#00E5FF] to-[#0066CC] flex items-center justify-center">
          <span className="text-xs font-semibold text-white">
            AI Neural Core
          </span>
        </div>
      ) : (
        <>
          {/* Core glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#009BFF] via-[#00E5FF] to-[#0066CC] blur-xl opacity-70" />
          </div>

          {/* Inner rotating ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full border border-dashed border-[#00E5FF]/70 animate-spin-slow group-hover:animate-spin-fast" />
          </div>

          {/* Outer rotating ring (reverse) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 rounded-full border border-dashed border-[#0066CC]/60 animate-spin-reverse-slow group-hover:animate-spin-reverse-fast" />
          </div>

          {/* AI Core label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-white drop-shadow-[0_0_8px_#00E5FF]">
              AI Core
            </span>
          </div>

          {/* Orbiting labels */}
          <OrbitLabel text="AI" radius={80} className="text-[#00E5FF]" />
          <OrbitLabel text="LLM" radius={100} className="text-[#009BFF]" />
          <OrbitLabel
            text="Predictive Analytics"
            radius={120}
            className="text-[#0066CC]"
          />
        </>
      )}
    </div>
  );
}

type OrbitLabelProps = {
  text: string;
  radius: number;
  className?: string;
};

function OrbitLabel({ text, radius, className }: OrbitLabelProps) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ transformOrigin: "center" }}
    >
      <span
        className={`text-[10px] font-medium ${className} orbit-label`}
        style={{
          transform: `translateX(${radius}px)`,
          // Using custom properties to align with the CSS wobble keyframe
          ['--tx' as any]: `${radius}px`
        }}
      >
        {text}
      </span>
    </div>
  );
}
