import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { profile } from '@/data/content';
import { scrollToId } from '@/lib/scroll';
import { RevealText } from '@/components/Reveal';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-14 overflow-hidden">
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-40 w-[40rem] rounded-full bg-brand-500/8 blur-[100px]" />
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 pb-10">
          <motion.button
            onClick={() => scrollToId('home')}
            whileHover={{ y: -4 }}
            className="group inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-ink-300 hover:text-ink-100 transition-colors"
          >
            Back to top
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </motion.button>

          <h3 className="font-display text-4xl sm:text-6xl font-bold leading-[0.95] max-w-3xl text-balance">
            <RevealText text={profile.name} />
          </h3>
          <p className="text-ink-400 max-w-md">Software Developer &amp; AI Engineer · {profile.location}</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-400">
            {['about', 'skills', 'work', 'experience', 'research', 'contact'].map((id) => (
              <button key={id} onClick={() => scrollToId(id)} className="capitalize hover:text-ink-100 transition-colors">
                {id}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-white/5">
          <p className="text-xs text-ink-500">© {year} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-xs text-ink-500">
            Designed &amp; built with <Heart className="h-3.5 w-3.5 text-brand-400 fill-current" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
