import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { profile } from '@/data/content';
import Reveal, { RevealText } from '@/components/Reveal';
import Magnetic from '@/components/Magnetic';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');

    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${form.name}`
    )}&body=${encodeURIComponent(
      `Hi Khushbu,\n\n${form.message}\n\n---\nSender Name: ${form.name}\nSender Email: ${form.email}`
    )}`;

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _replyto: form.email,
          message: form.message,
          _subject: `New Portfolio Inquiry from ${form.name}`,
          _captcha: 'false',
        }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        window.location.href = mailtoUrl;
        setStatus('success');
      }
    } catch {
      window.location.href = mailtoUrl;
      setStatus('success');
    }

    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 6000);
  };

  const field =
    'w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-ink-100 placeholder:text-ink-500 outline-none transition-all duration-300 focus:border-brand-400/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(16,185,129,0.12)]';

  return (
    <section id="contact" className="relative py-24 sm:py-36">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full bg-brand-500/10 blur-[150px]" />
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">07 — Contact</span>
            <span className="h-px w-12 bg-gradient-to-r from-brand-400/50 to-transparent" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
              <RevealText text="Let's build something" />{' '}
              <span className="gradient-text">
                <RevealText text="great together" />
              </span>
              <RevealText text="." />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 text-ink-300 text-lg leading-relaxed max-w-lg">
                Have a project in mind, or just want to say hello? I'm always open to discussing new
                ideas and opportunities.
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              <Reveal delay={0.15}>
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all hover:border-brand-400/30 hover:bg-white/[0.04]"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-400/20 to-accent-400/20 text-brand-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-ink-500">Email</div>
                    <div className="text-sm font-medium text-ink-100">{profile.email}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-ink-500 transition-all duration-300 group-hover:text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex items-center gap-4 rounded-2xl glass p-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-400/20 to-accent-400/20 text-brand-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-500">Location</div>
                    <div className="text-sm font-medium text-ink-100">{profile.location}</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <div className="mt-8 flex items-center gap-3">
                {profile.social.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Magnetic
                      key={s.label}
                      as="a"
                      href={s.href}
                      strength={0.5}
                      className="grid h-11 w-11 place-items-center rounded-xl glass text-ink-300 transition-colors hover:bg-brand-400 hover:text-ink-950"
                      aria-label={s.label}
                    >
                      <Icon className="h-5 w-5" />
                    </Magnetic>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} blur>
            <form onSubmit={handleSubmit} className="rounded-3xl glass-strong p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                  <label className="block text-sm font-medium text-ink-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={field}
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                  <label className="block text-sm font-medium text-ink-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@email.com"
                    className={field}
                    required
                  />
                </motion.div>
              </div>
              <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <label className="block text-sm font-medium text-ink-300 mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`${field} resize-none`}
                  required
                />
              </motion.div>

              <Magnetic
                as="button"
                type="submit"
                className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-transform ${
                  status === 'success'
                    ? 'bg-brand-500/20 text-brand-300'
                    : 'bg-gradient-to-r from-brand-400 to-accent-400 text-ink-950 hover:scale-[1.01] active:scale-[0.99]'
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={status}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="inline-flex items-center gap-2"
                  >
                    {status === 'loading' && (<><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>)}
                    {status === 'success' && (<><CheckCircle2 className="h-4 w-4" /> Message sent!</>)}
                    {(status === 'idle' || status === 'error') && (<>Send message <Send className="h-4 w-4" /></>)}
                  </motion.span>
                </AnimatePresence>
              </Magnetic>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-brand-300 text-center"
                >
                  Thanks for reaching out — I'll get back to you within 48 hours.
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
