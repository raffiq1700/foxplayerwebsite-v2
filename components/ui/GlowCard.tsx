"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowCard({ children, className = "" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse positions for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Rotation transforms
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    // Dynamic cursor coordinates
    ref.current.style.setProperty("--mouse-x", `${(mouseX / width) * 100}%`);
    ref.current.style.setProperty("--mouse-y", `${(mouseY / height) * 100}%`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-1000 w-full h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative group bg-[#0F172A]/50 border border-white/5 rounded-3xl p-[1px] transition-all duration-300 ${className}`}
      >
        {/* Glow Border Effect */}
        <div 
          className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`}
          style={{
            background: `radial-gradient(circle 220px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 212, 255, 0.15), rgba(139, 92, 246, 0.05) 50%, transparent 100%)`
          }}
        />

        {/* Content Container */}
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="relative z-10 w-full h-full bg-surface rounded-[22px] p-6 border border-white/5 overflow-hidden"
        >
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-mesh-gradient pointer-events-none" />
          
          <div className="relative z-20 h-full">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
