import { forwardRef, createElement } from 'react';
import styles from './typography.module.scss';

export interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, level = 1, className, ...props }, ref) => {
    return createElement(
      `h${level}`,
      {
        ref,
        className: `${styles.heading} ${styles[`h${level}`]} ${className || ''}`,
        ...props,
      },
      children,
    );
  },
);

Heading.displayName = 'Heading';
