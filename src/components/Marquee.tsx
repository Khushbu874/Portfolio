import { tools } from '@/data/content';

export default function Marquee() {
  const row = [...tools, ...tools, ...tools];
  return (
    <div className="relative w-full overflow-hidden py-2 marquee-mask">
      <div className="flex w-max animate-marquee gap-3">
        {row.map((t, i) => {
          const Icon = t.icon;
          return (
            <span
              key={i}
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm text-ink-300"
            >
              <Icon className="h-4 w-4 text-brand-400" />
              <span className="font-display font-medium">{t.name}</span>
              <span className="text-ink-600">·</span>
              <span className="text-ink-500 text-xs">studio@{i % 3 === 0 ? '2024' : '2025'}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
