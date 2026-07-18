"use client";

import { useEffect, useState } from "react";

export function AiNeuralCore() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduceMotion(true);
    }
  }, []);

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
      className="relative w-64 h-64 mx-auto group cursor-default transition-transform duration-350 ease-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${parallax.x}px, ${parallax.y}px)`
      }}
    >
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

          {/* Beam-lines that pulse toward labels */}
          <BeamLine radius={120} color="#00E5FF" />
          <BeamLine radius={140} color="#009BFF" />
          <BeamLine radius={160} color="#0066CC" />

          {/* Orbiting labels */}
          <OrbitLabel text="Agents" radius={140} className="text-[#00E5FF]" />
          <OrbitLabel text="RAG" radius={160} className="text-[#009BFF]" />
          <OrbitLabel text="Automation" radius={180} className="text-[#0066CC]" />
        </>
      )}
    </div>
  );
}

function BeamLine({ radius, color }: { radius: number; color: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className="beam-line"
        style={{
          width: radius,
          height: 2,
          background: `linear-gradient(90deg, ${color} 0%, transparent 100%)`,
        }}
      />
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
        className={`text-[10px] font-semibold ${className} orbit-label`}
        style={{
          transform: `translateX(${radius}px)`,
          ['--tx' as any]: `${radius}px`
        }}
      >
        {text}
      </span>
    </div>
  );
}
