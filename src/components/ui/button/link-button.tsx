import {
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from 'react-aria-components';
import { forwardRef } from 'react';
import { ButtonVariant } from './button';
import styles from './button.module.scss';

export interface LinkButtonProps extends Omit<AriaLinkProps, 'className'> {
  variant?: ButtonVariant;
  className?: string;
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ variant = ButtonVariant.Primary, className, ...props }, ref) => {
    return (
      <AriaLink
        ref={ref}
        className={`${styles.button} ${styles[variant]} ${className || ''}`}
        {...props}
      />
    );
  },
);

LinkButton.displayName = 'LinkButton';
