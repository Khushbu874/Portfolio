import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import { achievements } from '@/data/content';
import Reveal, { RevealText } from '@/components/Reveal';

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-36">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[50rem] rounded-full bg-brand-500/8 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">05 — Recognition</span>
            <span className="h-px w-12 bg-gradient-to-r from-brand-400/50 to-transparent" />
          </div>
        </Reveal>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-2xl text-balance">
          <RevealText text="Awards &" />{' '}
          <span className="gradient-text">
            <RevealText text="recognition" />
          </span>
          <RevealText text="." />
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((a, i) => {
            const Icon = i % 2 === 0 ? Trophy : Award;
            return (
              <Reveal key={a.title + a.year} delay={i * 0.1} blur>
                <motion.div
                  whileHover={{ y: -8, rotateZ: -1 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-3xl glass p-6 transition-colors hover:border-brand-400/30"
                >
                  <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-brand-500/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-400/20 to-accent-400/20 text-brand-300 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-3xl font-bold text-ink-700 tabular-nums">{a.year}</span>
                  </div>
                  <h3 className="relative mt-5 font-display text-lg font-semibold text-ink-50">{a.title}</h3>
                  <p className="relative mt-1 text-sm text-ink-400">{a.org}</p>
                  <p className="relative mt-3 text-xs uppercase tracking-wider text-brand-400/80">{a.category}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
