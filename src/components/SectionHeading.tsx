import { RevealText } from '@/components/Reveal';
import { scrollToId } from '@/lib/scroll';

type Props = {
  index: string;
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ index, label, title, subtitle, align = 'left' }: Props) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <RevealText
        text={`${index} — ${label}`}
        className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400"
      />
      <div className={`mt-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-10 bg-gradient-to-r from-brand-400/70 to-transparent" />
      </div>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg text-ink-400 leading-relaxed ${
            align === 'center' ? 'mx-auto max-w-xl' : 'max-w-xl'
          }`}
        >
          {subtitle}
        </p>
      )}
      <button
        onClick={() => scrollToId('contact')}
        className="sr-only"
        tabIndex={-1}
        aria-hidden
      />
    </div>
  );
}
