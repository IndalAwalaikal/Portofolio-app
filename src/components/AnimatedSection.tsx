// src/components/AnimatedSection.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean; // opsional: apakah animasi hanya sekali
}

export default function AnimatedSection({
  children,
  delay = 0,
  duration = 0.4,
  className,
  once = true,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // Batasi delay maksimal agar tidak terlalu lama
  const clampedDelay = Math.min(delay, 0.4);

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once, margin: '-100px' }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        ease: 'easeOut',
        delay: shouldReduceMotion ? 0 : clampedDelay,
      }}
    >
      {children}
    </motion.div>
  );
}