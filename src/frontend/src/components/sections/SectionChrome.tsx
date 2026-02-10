import { type ReactNode } from 'react';

interface SectionChromeProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionChrome({ id, children, className = '' }: SectionChromeProps) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}
