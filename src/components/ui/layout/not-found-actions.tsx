import { forwardRef } from 'react';
import styles from './not-found-actions.module.scss';

export interface NotFoundActionsProps {
  children: React.ReactNode;
  className?: string;
}

export const NotFoundActions = forwardRef<HTMLDivElement, NotFoundActionsProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.actions} ${className || ''}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);

NotFoundActions.displayName = 'NotFoundActions';
