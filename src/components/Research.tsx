import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Mic, BookOpen, FlaskConical } from 'lucide-react';
import { research, type Research } from '@/data/content';
import Reveal, { RevealText } from '@/components/Reveal';

const typeIcon: Record<Research['type'], typeof FileText> = {
  'Case Study': FileText,
  Talk: Mic,
  Article: BookOpen,
  Research: FlaskConical,
};

export default function ResearchSection() {
  return (
    <section id="research" className="relative py-24 sm:py-36">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">06 — Writing & Talks</span>
            <span className="h-px w-12 bg-gradient-to-r from-brand-400/50 to-transparent" />
          </div>
        </Reveal>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-2xl text-balance">
            <RevealText text="Research &" />{' '}
            <span className="gradient-text">
              <RevealText text="publications" />
            </span>
            <RevealText text="." />
          </h2>
          <Reveal delay={0.1}>
            <p className="text-ink-400 text-lg max-w-sm">Essays, talks, and field studies on design, systems, and motion.</p>
          </Reveal>
        </div>

        <div className="mt-12 divide-y divide-white/5 rounded-3xl glass overflow-hidden">
          {research.map((r, i) => {
            const Icon = typeIcon[r.type] ?? FileText;
            return (
              <Reveal key={r.title} delay={i * 0.06} blur>
                <motion.a
                  href={r.href}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 sm:p-7"
                >
                  <div className="flex items-center gap-4 sm:w-48 shrink-0">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-400/20 to-accent-400/20 text-brand-300 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-brand-400">{r.type}</div>
                      <div className="text-sm text-ink-500 font-mono">{r.year} · {r.meta}</div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-ink-50 transition-colors group-hover:text-brand-300">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-400 leading-relaxed">{r.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {r.tags.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-ink-400">{t}</span>
                      ))}
                    </div>
                  </div>

                  <ArrowUpRight className="hidden sm:block h-5 w-5 text-ink-500 transition-all duration-300 group-hover:text-brand-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
