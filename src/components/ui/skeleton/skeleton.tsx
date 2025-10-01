import { forwardRef } from 'react';
import styles from './skeleton.module.scss';

export interface SkeletonProps {
  count?: number;
  className?: string;
  height?: string;
  width?: string;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    { count = 1, className, height = '1rem', width = '100%', ...props },
    ref,
  ) => {
    const skeletons = Array.from({ length: count }, (_, index) => (
      <div
        key={index}
        className={`${styles.skeleton} ${className || ''}`}
        style={{ height, width }}
        {...props}
      />
    ));

    return <div ref={ref}>{skeletons}</div>;
  },
);

Skeleton.displayName = 'Skeleton';
