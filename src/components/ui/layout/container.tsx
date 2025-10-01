import { ReactNode } from 'react';
import { joinClasses } from '@/utils';
import styles from './container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={joinClasses(styles.container, className)}>{children}</div>
  );
};
