import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './mobile-menu.module.scss';

export interface NavItem {
  label: string;
  pathname: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  selectedPathname: string;
}

export const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ isOpen, onClose, navItems, selectedPathname }, ref) => {
    return (
      <>
        {/* Overlay */}
        {isOpen && (
          <div
            className={styles.overlay}
            onClick={onClose}
            aria-hidden="true"
          />
        )}

        {/* Menu */}
        <div
          ref={ref}
          className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <NavLink
                key={item.pathname}
                to={item.pathname}
                className={`${styles.navLink} ${
                  selectedPathname === item.pathname ? styles.active : ''
                }`}
                onClick={onClose}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </>
    );
  },
);

MobileMenu.displayName = 'MobileMenu';
