import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, type ReactNode, type ElementType } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'a' | 'div';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  'aria-label'?: string;
  type?: 'button' | 'submit';
};

export default function Magnetic({
  children,
  className = '',
  strength = 0.35,
  as = 'button',
  href,
  onClick,
  type = 'button',
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 18, stiffness: 220, mass: 0.4 });
  const sy = useSpring(y, { damping: 18, stiffness: 220, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    onMouseMove: onMove,
    onMouseLeave: reset,
    className: `relative inline-flex items-center justify-center ${className}`,
    style: { x: sx, y: sy },
  };

  const MotionTag = motion[as as 'button'] as ElementType;

  return (
    <MotionTag
      ref={ref}
      href={href}
      type={as === 'button' ? type : undefined}
      onClick={onClick}
      {...sharedProps}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
