import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/content';
import { scrollToId } from '@/lib/scroll';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Journey' },
  { id: 'mentorships', label: 'Mentorships' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={`flex w-full max-w-[1600px] items-center justify-between gap-4 rounded-full px-4 sm:px-6 transition-all duration-500 ${
            scrolled
              ? 'glass-strong py-2.5 shadow-2xl shadow-black/40'
              : 'bg-transparent py-3'
          }`}
        >
          <button
            onClick={() => scrollToId('home')}
            className="group flex items-center gap-2.5"
            aria-label="Go to top"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-accent-500 font-display text-sm font-bold text-ink-950 transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
              {profile.initials}
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-ink-100 hidden sm:block">
              {profile.name}
            </span>
          </button>

          <ul className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToId(item.id)}
                  className="relative px-3.5 py-2 text-sm font-medium text-ink-300 transition-colors hover:text-ink-50 rounded-full"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToId('contact')}
            className="group hidden sm:inline-flex items-center gap-1.5 rounded-full bg-ink-50 px-4 py-2 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-[1.04] active:scale-95"
          >
            Let's talk
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-ink-100"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-4 top-24 rounded-3xl glass-strong p-3"
            >
              <ul className="flex flex-col gap-0.5">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setOpen(false);
                        scrollToId(item.id);
                      }}
                      className="w-full rounded-2xl px-4 py-3.5 text-left text-base font-medium text-ink-300 transition-colors hover:bg-white/5 hover:text-ink-50"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
