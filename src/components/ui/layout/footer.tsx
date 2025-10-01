import { forwardRef } from 'react';
import styles from './footer.module.scss';

export enum FooterVariant {
  Default = 'default',
  Compact = 'compact',
}

export interface FooterLink {
  href: string;
  label: string;
  isInternal: boolean;
}

export interface FooterLinksGroup {
  links: FooterLink[];
}

export interface FooterSocialLink {
  name: string;
  icon: React.ReactNode;
  href: string[];
  lang: string[];
}

export interface FooterProps {
  children?: React.ReactNode;
  background?: boolean;
  variant?: FooterVariant;
  logo?: React.ReactNode;
  className?: string;
  links?: FooterLinksGroup[];
  socialLinks?: FooterSocialLink[];
  copyright?: string;
  copyrightLinks?: Array<{ label: string; href: string }>;
}

export const Footer = forwardRef<HTMLElement, FooterProps>(
  (
    {
      children,
      background = true,
      variant = FooterVariant.Default,
      logo,
      className,
      links = [],
      socialLinks = [],
      copyright,
      copyrightLinks = [],
      ...props
    },
    ref,
  ) => {
    return (
      <footer
        ref={ref}
        className={`${styles.footer} ${styles[variant]} ${background ? styles.withBackground : ''} ${className || ''}`}
        {...props}
      >
        <div className={styles.container}>
          {logo && <div className={styles.logo}>{logo}</div>}

          {links.length > 0 && (
            <div className={styles.links}>
              {links.map((group, groupIndex) => (
                <div key={groupIndex} className={styles.linkGroup}>
                  {group.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className={styles.link}
                      target={link.isInternal ? '_self' : '_blank'}
                      rel={link.isInternal ? undefined : 'noopener noreferrer'}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}

          {socialLinks.length > 0 && (
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href[0]}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}

          <div className={styles.copyright}>
            {copyright && <p className={styles.copyrightText}>{copyright}</p>}
            {copyrightLinks.length > 0 && (
              <div className={styles.copyrightLinks}>
                {copyrightLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={styles.copyrightLink}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        {children}
      </footer>
    );
  },
);

Footer.displayName = 'Footer';
