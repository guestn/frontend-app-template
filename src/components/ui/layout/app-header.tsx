import { forwardRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '../icons/hamburger-icon';
import { MobileMenu } from './mobile-menu';
import styles from './app-header.module.scss';

export interface NavItem {
  label: string;
  pathname: string;
}

export interface AppHeaderProps {
  title: string;
  logoSrc: string;
  logoHref: string;
  navItems: () => NavItem[];
  selectedPathname: string;
  isConnected: boolean;
  className?: string;
}

export const AppHeader = forwardRef<HTMLElement, AppHeaderProps>(
  (
    {
      title,
      logoSrc,
      logoHref,
      navItems,
      selectedPathname,
      isConnected,
      className,
    },
    ref,
  ) => {
    const navItemsList = navItems();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };

    return (
      <>
        <header ref={ref} className={`${styles.header} ${className || ''}`}>
          <div className={styles.container}>
            <NavLink to={logoHref} className={styles.logo}>
              <img src={logoSrc} alt={title} />
            </NavLink>

            <nav className={styles.nav}>
              {navItemsList.map((item) => (
                <NavLink
                  key={item.pathname}
                  to={item.pathname}
                  className={`${styles.navLink} ${
                    selectedPathname === item.pathname ? styles.active : ''
                  }`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <HamburgerIcon
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
              className={styles.hamburger}
            />
          </div>
        </header>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
          navItems={navItemsList}
          selectedPathname={selectedPathname}
        />
      </>
    );
  },
);

AppHeader.displayName = 'AppHeader';
