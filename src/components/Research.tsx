import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Mic, BookOpen, FlaskConical, ExternalLink, UserCheck } from 'lucide-react';
import { research, type Research } from '@/data/content';
import Reveal, { RevealText } from '@/components/Reveal';

const typeIcon: Record<string, typeof FileText> = {
  'Journal Publication': FlaskConical,
  'Case Study': FileText,
  Talk: Mic,
  Article: BookOpen,
  Research: FlaskConical,
};

export default function ResearchSection() {
  return (
    <section id="research" className="relative py-24 sm:py-36">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">07 — Research</span>
            <span className="h-px w-12 bg-gradient-to-r from-brand-400/50 to-transparent" />
          </div>
        </Reveal>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            <RevealText text="Research &" />{' '}
            <span className="gradient-text">
              <RevealText text="Publications" />
            </span>
          </h2>
          <Reveal delay={0.1}>
            <p className="text-ink-400 text-lg max-w-md">Peer-reviewed academic research papers and published work.</p>
          </Reveal>
        </div>

        <div className="mt-10 space-y-6">
          {research.map((r, i) => {
            const Icon = typeIcon[r.type] ?? FileText;
            return (
              <Reveal key={r.title} delay={i * 0.08} blur>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-3xl glass p-6 sm:p-8 transition-colors hover:border-brand-400/30 overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-brand-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      {/* Badge & Publication Meta */}
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-400/15 px-3 py-1 font-semibold text-brand-300 border border-brand-400/30">
                          <Icon className="h-3.5 w-3.5" />
                          {r.type}
                        </span>
                        <span className="text-ink-400 font-mono">{r.year}</span>
                        <span className="text-ink-500">•</span>
                        <span className="text-ink-300 font-medium">{r.meta}</span>
                      </div>

                      {/* Paper Title */}
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink-50 transition-colors group-hover:text-brand-300">
                        {r.title}
                      </h3>

                      {/* Author */}
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-ink-300 font-medium">
                        <UserCheck className="h-4 w-4 text-brand-400" />
                        <span>Author: <strong className="text-ink-100">Khushbu Dewangan</strong></span>
                      </div>

                      {/* Summary / Abstract */}
                      <p className="text-sm sm:text-base text-ink-300 leading-relaxed max-w-4xl">
                        {r.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {r.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-ink-300 transition-colors group-hover:border-brand-400/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    {r.href && r.href !== '#' && (
                      <div className="shrink-0 pt-2 lg:pt-0">
                        <a
                          href={r.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-accent-400 px-5 py-3 text-xs sm:text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-[1.04] active:scale-95 shadow-lg shadow-brand-500/10"
                        >
                          View Publication <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    )}
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
