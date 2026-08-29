import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ className = '', children, ...props }: SectionProps) {
  return (
    <section className={`py-12 md:py-20 lg:py-24 ${className}`} {...props}>
      {children}
    </section>
  );
}
