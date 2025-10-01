import { forwardRef } from 'react';
import styles from './hamburger-icon.module.scss';

export interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const HamburgerIcon = forwardRef<HTMLButtonElement, HamburgerIconProps>(
  ({ isOpen, onClick, className }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`${styles.hamburgerIcon} ${className || ''}`}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span
          className={`${styles.hamburgerLine} ${isOpen ? styles.open : ''}`}
        />
        <span
          className={`${styles.hamburgerLine} ${isOpen ? styles.open : ''}`}
        />
        <span
          className={`${styles.hamburgerLine} ${isOpen ? styles.open : ''}`}
        />
      </button>
    );
  },
);

HamburgerIcon.displayName = 'HamburgerIcon';
