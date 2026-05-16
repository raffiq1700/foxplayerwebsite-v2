"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowCard({ children, className = "" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

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
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div className="perspective-1000 w-full h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative group bg-white/[0.03] border border-white/10 rounded-3xl p-1 transition-all duration-300 ${className}`}
      >
        {/* Glow Border Effect */}
        <div 
          className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`}
          style={{
            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 211, 238, 0.2), transparent 80%)`
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
