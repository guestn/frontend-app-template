import { forwardRef } from 'react';
import styles from './container.module.scss';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'twoxl' | 'full';
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, maxWidth = 'xl', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.container} ${styles[maxWidth]} ${className || ''}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = 'Container';
