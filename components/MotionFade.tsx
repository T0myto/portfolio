"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionFadeProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
}

export function MotionFade({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
}: MotionFadeProps) {
  const directions = {
    up: { y: 30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
