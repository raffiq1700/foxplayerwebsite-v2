"use client";

import { motion } from "framer-motion";

export function AnimatedOrb() {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
      {/* Outer glow */}
      <motion.div
        className="absolute w-full h-full rounded-full bg-primary/20 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Inner core */}
      <motion.div
        className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_80px_rgba(0,255,224,0.6)]"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />
      {/* Floating rings */}
      <motion.div
        className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full border border-primary/30"
        style={{ rotateX: 75 }}
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full border border-secondary/30"
        style={{ rotateX: 65, rotateY: 20 }}
        animate={{
          rotateZ: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
