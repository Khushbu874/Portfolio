import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function Cursor() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 35, stiffness: 400, mass: 0.5 });
  const sy = useSpring(y, { damping: 35, stiffness: 400, mass: 0.5 });
  const ringX = useSpring(x, { damping: 25, stiffness: 200, mass: 0.8 });
  const ringY = useSpring(y, { damping: 25, stiffness: 200, mass: 0.8 });

  const ringSize = useMotionValue(40);
  const ringScale = useSpring(ringSize, { damping: 20, stiffness: 250 });
  const ringOpacity = useTransform(ringScale, [28, 48], [0.6, 0.15]);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="lg"]');
      ringSize.set(interactive ? 64 : 40);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y, ringSize, reduce]);

  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute -ml-[5px] -mt-[5px] h-2.5 w-2.5 rounded-full bg-brand-400"
      />
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          scale: ringScale,
          opacity: ringOpacity,
        }}
        className="absolute -ml-5 -mt-5 h-10 w-10 rounded-full border border-brand-400/50"
      />
    </div>
  );
}
