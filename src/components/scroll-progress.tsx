"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="flux-scroll-progress"
      style={{
        scaleX: prefersReducedMotion
          ? scrollYProgress
          : smoothProgress,
      }}
      aria-hidden="true"
    />
  );
}