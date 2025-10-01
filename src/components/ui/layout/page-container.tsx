import { forwardRef } from 'react';
import styles from './page-container.module.scss';

export interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.pageContainer} ${className || ''}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);

PageContainer.displayName = 'PageContainer';
