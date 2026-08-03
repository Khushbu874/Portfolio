import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skillCategories, tools } from '@/data/content';
import Reveal, { RevealText } from '@/components/Reveal';
import { Check } from 'lucide-react';

function SkillChips({ skills, delay }: { skills: { name: string }[]; delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <div ref={ref} className="flex flex-wrap gap-2">
      {skills.map((s, i) => (
        <motion.span
          key={s.name}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: delay + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.06, y: -2 }}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-ink-200 cursor-default transition-colors hover:border-brand-400/40 hover:bg-brand-400/10 hover:text-ink-50"
        >
          <Check className="h-3 w-3 text-brand-400" />
          {s.name}
        </motion.span>
      ))}
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="relative py-24 sm:py-36">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">02 — Skills</span>
            <span className="h-px w-12 bg-gradient-to-r from-brand-400/50 to-transparent" />
          </div>
        </Reveal>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-4xl text-balance">
          <RevealText text="A toolkit honed over" />{' '}
          <span className="gradient-text">
            <RevealText text="years of shipping" />
          </span>
          <RevealText text="." />
        </h2>
        <Reveal delay={0.15}>
          <p className="mt-5 text-ink-400 text-lg max-w-3xl">
            From low-fidelity sketches to production code, a full-stack design skill set for every project.
          </p>
        </Reveal>

        {/* Interactive category tabs */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-2">
            {skillCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.title}
                  onClick={() => setActive(i)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                    active === i ? 'text-ink-950' : 'glass text-ink-300 hover:text-ink-100'
                  }`}
                >
                  {active === i && (
                    <motion.span
                      layoutId="skill-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-400 to-accent-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="relative h-4 w-4" />
                  <span className="relative">{cat.title}</span>
                </motion.button>
              );
            })}
          </div>
        </Reveal>

        {/* Active category panel */}
        <div className="mt-6 min-h-[220px]">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            const isActive = active === i;
            return (
              <motion.div
                key={cat.title}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 20,
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={isActive ? 'block' : 'hidden'}
              >
                <div className="relative overflow-hidden rounded-3xl glass p-6 sm:p-8">
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-500/15 blur-3xl" />
                  <div className="relative flex items-start gap-4">
                    <motion.div
                      animate={isActive ? { rotate: [0, 8, 0], scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-400/25 to-accent-400/25 text-brand-300"
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-ink-100">{cat.title}</h3>
                      <p className="mt-1 text-sm text-ink-400">{cat.blurb}</p>
                      <div className="mt-4">
                        <SkillChips skills={cat.skills} delay={0.1} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 rounded-3xl glass p-6 sm:p-8 overflow-hidden">
            <p className="mb-5 text-center text-xs uppercase tracking-[0.3em] text-ink-500">Tools I work with daily</p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
              {tools.map((t, i) => {
                const Icon = t.icon;
                return (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ y: -4, scale: 1.08 }}
                    className="flex items-center gap-2 text-ink-300 transition-colors hover:text-ink-50"
                  >
                    <Icon className="h-5 w-5 text-brand-400" />
                    <span className="font-display text-sm font-medium">{t.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
