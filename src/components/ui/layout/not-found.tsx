import { forwardRef } from 'react';
import styles from './not-found.module.scss';

export interface NotFoundProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export const NotFound = forwardRef<HTMLDivElement, NotFoundProps>(
  ({ children, title, description, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.notFound} ${className || ''}`}
        {...props}
      >
        {title && <h1 className={styles.title}>{title}</h1>}
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.content}>{children}</div>
      </div>
    );
  },
);

NotFound.displayName = 'NotFound';
