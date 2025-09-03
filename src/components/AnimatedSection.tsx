// src/components/AnimatedSection.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  delay = 0,
  duration = 0.4, 
  className,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: duration,
        ease: 'easeOut', 
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}