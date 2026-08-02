import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { profile } from '@/data/content';
import { scrollToId } from '@/lib/scroll';
import Magnetic from '@/components/Magnetic';
import { RevealText } from '@/components/Reveal';

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 0.25], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.96]);
  const yImg = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  useEffect(() => {
    const full = profile.roles[roleIdx];
    let i = 0;
    const typeTimer = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(typeTimer);
        setTimeout(() => setRoleIdx((r) => (r + 1) % profile.roles.length), 2200);
      }
    }, 70);
    return () => clearInterval(typeTimer);
  }, [roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <motion.div className="absolute inset-0 grid-bg opacity-60" style={{ scale }} />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Mobile: image first, Desktop: text + image side by side */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-12">
          <motion.div style={{ y: yText, opacity }} className="flex-1 w-full">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-ink-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              Available for new projects · {profile.location}
            </motion.span>

            <h1 className="mt-7 font-display text-[10vw] sm:text-6xl lg:text-[5.25rem] font-bold leading-[0.95] tracking-tight text-balance">
              <motion.span
                initial={{ opacity: 0, y: 40, filter: 'blur(16px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 2.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block text-ink-200"
              >
                Hi, I'm {profile.firstName}.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40, filter: 'blur(16px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 2.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block gradient-text text-glow"
              >
                I design &amp; build
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40, filter: 'blur(16px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 2.65, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block text-ink-100"
              >
                digital products.
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.6 }}
              className="mt-6 flex items-center gap-2 text-base sm:text-lg text-ink-300 font-display"
            >
              <Sparkles className="h-5 w-5 text-brand-400" />
              <span className="text-ink-100">{typed}</span>
              <span className="inline-block w-[2px] h-5 bg-brand-400 animate-blink" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-md text-base text-ink-400 leading-relaxed"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Magnetic
                onClick={() => scrollToId('work')}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-accent-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] active:scale-95"
              >
                View my work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Magnetic>
              <Magnetic
                onClick={() => scrollToId('contact')}
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-ink-100 transition-colors hover:bg-white/10"
              >
                Get in touch
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl glass max-w-md"
            >
              {profile.stats.map((s) => {
                const num = parseInt(s.value.replace(/\D/g, ''), 10) || 0;
                const suffix = s.value.replace(/[0-9]/g, '');
                return (
                  <div key={s.label} className="bg-white/[0.02] px-4 py-3">
                    <div className="font-display text-xl font-bold text-ink-50">
                      {num > 0 ? null : s.value}
                      {num > 0 && (
                        <span className="tabular-nums">
                          +{num}
                          {suffix}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-ink-400 mt-0.5">{s.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            style={{ y: yImg, opacity }}
            initial={{ opacity: 0, scale: 0.85, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 2.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xs sm:max-w-sm lg:max-w-[26rem] lg:flex-1 order-first lg:order-last"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/30 to-accent-500/20 blur-3xl" />
              {/* Frame */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900/40"
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover aspect-[3/4]"
                />
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl glass-strong px-4 py-3"
                >
                  <div>
                    <div className="font-display text-sm font-semibold text-ink-50">{profile.name}</div>
                    <div className="text-xs text-ink-400">{profile.roles[0]}</div>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-accent-500 font-display text-xs font-bold text-ink-950">
                    {profile.initials}
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollToId('about')}
        style={{ opacity }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink-500 hover:text-ink-200 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
