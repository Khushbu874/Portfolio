import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Quote } from 'lucide-react';
import { profile, services } from '@/data/content';
import Reveal, { RevealText } from '@/components/Reveal';

const checklist = [
  'End-to-end product ownership',
  'Accessibility-first design',
  'Design tokens & systems',
  'Performance budgets',
  'Prototyping in code',
  'Cross-team collaboration',
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const quoteY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const quoteRotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">01 — About</span>
            <span className="h-px w-12 bg-gradient-to-r from-brand-400/50 to-transparent" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
              <RevealText text="I sit at the intersection of" />{' '}
              <span className="gradient-text">
                <RevealText text="design" />
              </span>{' '}
              <RevealText text="and" />{' '}
              <span className="gradient-text">
                <RevealText text="engineering" />
              </span>
              <RevealText text="." />
            </h2>

            <div className="mt-7 space-y-5 text-ink-300 leading-relaxed text-lg max-w-xl">
              <Reveal delay={0.1}>
                <p>
                  I'm a product designer and frontend engineer based in {profile.location}. Over the past
                  eight years I've helped startups and established teams ship products that are as
                  delightful to use as they are robust to maintain.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  My approach is simple: understand the problem deeply, design with real users in mind,
                  and build it so it lasts. I care about the details that most people never notice — the
                  timing of an animation, the contrast of a label, the weight of a font — because those
                  details are what make a product feel crafted.
                </p>
              </Reveal>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-lg">
              {checklist.map((item, i) => (
                <Reveal key={item} delay={0.3 + i * 0.08}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex items-center gap-2.5 text-ink-200"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-400" />
                    <span className="text-sm">{item}</span>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.15} blur>
              <motion.div
                style={{ y: quoteY, rotate: quoteRotate }}
                className="relative rounded-3xl glass-strong p-6 sm:p-8 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-500/20 blur-2xl" />
                <Quote className="absolute top-6 right-6 h-10 w-10 text-brand-400/20" />
                <p className="relative font-serif text-2xl italic leading-relaxed text-ink-100">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <p className="mt-4 text-sm text-ink-400">— Steve Jobs</p>
              </motion.div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.title} delay={0.2 + i * 0.08} blur>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="group h-full rounded-2xl glass p-5 transition-colors hover:border-brand-400/30 hover:bg-white/[0.04]"
                    >
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-400/20 to-accent-400/20 text-brand-300 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-display text-base font-semibold text-ink-100">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-ink-400 leading-relaxed">{s.desc}</p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
