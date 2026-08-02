import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '@/data/content';
import Reveal, { RevealText } from '@/components/Reveal';

function TimelineItem({ exp, index }: { exp: (typeof experiences)[number]; index: number }) {
  const Icon = exp.icon;
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'start 30%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative pl-16 sm:pl-24">
      <div className="absolute left-0 top-1 bottom-[-2rem] w-px bg-ink-700" />
      <motion.div
        style={{ scaleY: lineScale, originY: 0 }}
        className="absolute left-0 top-1 bottom-[-2rem] w-px bg-gradient-to-b from-brand-400 via-brand-400/60 to-transparent"
      />

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-1 grid h-11 w-11 sm:h-14 sm:w-14 -translate-x-[1px] place-items-center rounded-2xl bg-ink-900 border border-white/10 text-brand-300 ring-4 ring-ink-950"
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </motion.div>

      <Reveal delay={index * 0.05} blur>
        <div className="group rounded-3xl glass p-6 sm:p-7 transition-all hover:border-brand-400/30 hover:bg-white/[0.04]">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink-50">{exp.role}</h3>
            <span className="text-sm font-mono text-ink-400">{exp.period}</span>
          </div>
          <p className="mt-1 text-sm font-medium text-brand-400">{exp.company}</p>
          <p className="mt-3 text-ink-300 leading-relaxed">{exp.description}</p>
          <ul className="mt-4 space-y-2">
            {exp.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-ink-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-36">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">04 — Journey</span>
            <span className="h-px w-12 bg-gradient-to-r from-brand-400/50 to-transparent" />
          </div>
        </Reveal>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-2xl text-balance">
          <RevealText text="Where I've" />{' '}
          <span className="gradient-text">
            <RevealText text="made an impact" />
          </span>
          <RevealText text="." />
        </h2>

        <div className="mt-14 space-y-10">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.role + exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
