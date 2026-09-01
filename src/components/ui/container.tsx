import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Container({ className = '', children, as: Component = 'div', ...props }: ContainerProps) {
  return (
    <Component className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`} {...props}>
      {children}
    </Component>
  );
}
