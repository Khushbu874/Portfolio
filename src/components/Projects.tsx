import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Star, Github, ExternalLink, FileText, Target, Lightbulb, TrendingUp, RotateCcw, CheckCircle2 } from 'lucide-react';
import { projects, type Project } from '@/data/content';
import Reveal, { RevealText } from '@/components/Reveal';
import AnimatedCounter from '@/components/AnimatedCounter';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

function parseMetric(value: string) {
  const num = parseFloat(value.replace(/[^0-9.]/g, ''));
  const rest = value.replace(/^[^0-9.-]+/, '');
  return { num: isNaN(num) ? 0 : num, suffix: rest };
}

function FlipCard({ project, index }: { project: Project; index: number }) {
  const [flipped, setFlipped] = useState(false);

  const flip = () => setFlipped((f) => !f);

  return (
    <Reveal delay={(index % 2) * 0.1} blur>
      <div
        className="group relative h-[460px] sm:h-[480px] cursor-pointer [perspective:1800px]"
        onClick={flip}
      >
        {/* The flip container — only the rotateY transform lives here so it never fights hover */}
        <motion.div
          className="relative h-full w-full rounded-3xl [transform-style:preserve-3d]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* FRONT */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl glass transition-colors duration-300 group-hover:border-brand-400/30 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
              {project.featured && (
                <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-brand-400/90 px-2.5 py-1 text-xs font-semibold text-ink-950">
                  <Star className="h-3 w-3 fill-current" /> Featured
                </span>
              )}
              <span className="absolute top-4 right-4 rounded-full glass px-2.5 py-1 text-xs text-ink-200">{project.year}</span>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">{project.category}</span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-ink-50">{project.title}</h3>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-ink-300 transition-all duration-300 group-hover:bg-brand-400 group-hover:text-ink-950 group-hover:rotate-12">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-3 text-sm text-ink-400 leading-relaxed line-clamp-2">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-ink-300">{t}</span>
                ))}
              </div>
              <motion.button
                onClick={(e) => { e.stopPropagation(); flip(); }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="mt-5 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-ink-100 transition-colors hover:bg-white/10"
              >
                <FileText className="h-3.5 w-3.5 text-brand-400" />
                View more
              </motion.button>
            </div>
          </div>

          {/* BACK */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl glass-strong [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex h-full flex-col p-6 overflow-y-auto">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">{project.category}</span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-ink-50">{project.title}</h3>
                </div>
                <motion.button
                  onClick={(e) => { e.stopPropagation(); flip(); }}
                  whileHover={{ scale: 1.1, rotate: -90 }}
                  whileTap={{ scale: 0.9 }}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5 text-ink-300 transition-colors hover:bg-brand-400 hover:text-ink-950"
                  aria-label="Flip back"
                >
                  <RotateCcw className="h-4 w-4" />
                </motion.button>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {project.metrics.map((m) => {
                  const pn = parseMetric(m.value);
                  return (
                    <div key={m.label} className="rounded-xl bg-white/[0.03] p-2.5 text-center">
                      <div className="font-display text-base font-bold text-ink-50">
                        {pn.num > 0 ? <AnimatedCounter value={Math.round(pn.num)} suffix={pn.suffix} /> : m.value}
                      </div>
                      <div className="text-[10px] text-ink-400 mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 space-y-3 text-xs">
                {[
                  { icon: Target, label: 'Problem', text: project.problem, color: 'text-amber-400' },
                  { icon: Lightbulb, label: 'Solution', text: project.solution, color: 'text-brand-400' },
                  { icon: TrendingUp, label: 'Results', text: project.results, color: 'text-brand-300' },
                ].map(({ icon: Icon, label, text, color }) => (
                  <div key={label}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon className={`h-3.5 w-3.5 ${color}`} />
                      <h4 className="font-semibold uppercase tracking-wider text-ink-200">{label}</h4>
                    </div>
                    <p className="text-ink-400 leading-relaxed">{text}</p>
                  </div>
                ))}

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent-400" />
                    <h4 className="font-semibold uppercase tracking-wider text-ink-200">Features</h4>
                  </div>
                  <ul className="space-y-1">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-1.5 text-ink-400">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-400 to-accent-400 px-3.5 py-2 text-xs font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-2 text-xs font-semibold text-ink-100 transition-colors hover:bg-white/10"
                >
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">03 — Selected Work</span>
            <span className="h-px w-12 bg-gradient-to-r from-brand-400/50 to-transparent" />
          </div>
        </Reveal>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-2xl text-balance">
            <RevealText text="Projects I'm" />{' '}
            <span className="gradient-text">
              <RevealText text="proud of" />
            </span>
            <RevealText text="." />
          </h2>
          <Reveal delay={0.1}>
            <p className="text-ink-400 text-lg max-w-sm">Tap a project and flip the card to dive into the case study.</p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === c ? 'text-ink-950' : 'glass text-ink-300 hover:text-ink-100 hover:bg-white/10'
                }`}
              >
                {filter === c && (
                  <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-ink-50" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid sm:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <FlipCard project={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
