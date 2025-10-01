import { forwardRef } from 'react';
import styles from './background.module.scss';

export enum BackgroundVariant {
  Default = 'default',
}

export interface BackgroundProps {
  children: React.ReactNode;
  variant?: BackgroundVariant;
  className?: string;
}

export const Background = forwardRef<HTMLDivElement, BackgroundProps>(
  ({ children, variant = BackgroundVariant.Default, className }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.background} ${styles[variant]} ${className || ''}`}
      >
        {children}
      </div>
    );
  },
);

Background.displayName = 'Background';
