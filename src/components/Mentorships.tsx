import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { mentorships, type Mentorship } from '@/data/content';
import Reveal, { RevealText } from '@/components/Reveal';

export default function Mentorships() {
  return (
    <section id="mentorships" className="relative py-24 sm:py-36">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">05 — Mentorships</span>
            <span className="h-px w-12 bg-gradient-to-r from-brand-400/50 to-transparent" />
          </div>
        </Reveal>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl text-balance">
            <RevealText text="Mentorship &" />{' '}
            <span className="gradient-text">
              <RevealText text="Growth" />
            </span>
            <RevealText text="." />
          </h2>
          <Reveal delay={0.1}>
            <p className="text-ink-400 text-lg max-w-md">
              Selective mentorship programs and technical guidance from industry leaders.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 sm:gap-8">
          {mentorships.map((m: Mentorship, i: number) => {
            const Icon = m.icon || Sparkles;
            return (
              <Reveal key={m.title + m.organization} delay={i * 0.12} blur>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-3xl glass p-7 sm:p-9 transition-all hover:border-brand-400/30 hover:bg-white/[0.04] flex flex-col justify-between"
                >
                  <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-brand-500/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-400/20 to-accent-400/20 text-brand-300 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300 border border-brand-400/30">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            {m.organization}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-mono text-ink-400 bg-white/[0.03] px-3 py-1 rounded-full border border-white/10">
                        {m.period}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-50 transition-colors group-hover:text-brand-300 leading-snug">
                      {m.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-ink-300 leading-relaxed">
                      {m.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {m.skills.map((skill: string) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-ink-200 transition-colors group-hover:border-brand-400/25 group-hover:bg-brand-400/5"
                        >
                          <CheckCircle2 className="h-3 w-3 text-brand-400" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
