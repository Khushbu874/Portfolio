import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <motion.div
        className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-500/20 blur-[130px]"
        animate={reduce ? {} : { x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-accent-500/18 blur-[150px]"
        animate={reduce ? {} : { x: [0, -70, 0], y: [0, 50, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-brand-600/12 blur-[140px]"
        animate={reduce ? {} : { x: [0, 40, 0], y: [0, 60, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 noise opacity-[0.02]" />

      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(16,185,129,0.08), transparent 60%)',
        }}
      />
    </div>
  );
}
