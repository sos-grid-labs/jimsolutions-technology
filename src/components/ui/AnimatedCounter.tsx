'use client';

import { animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ value, suffix = '', prefix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 1.5,
        ease: 'easeOut',
        onUpdate(latest) {
          node.textContent = `${prefix}${Math.round(latest)}${suffix}`;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
