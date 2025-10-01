import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from 'react-aria-components';
import { forwardRef } from 'react';
import styles from './button.module.scss';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  CTA = 'cta',
  Translucent = 'translucent',
}

export interface ButtonProps extends Omit<AriaButtonProps, 'className'> {
  variant?: ButtonVariant;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = ButtonVariant.Primary, className, ...props }, ref) => {
    return (
      <AriaButton
        ref={ref}
        className={`${styles.button} ${styles[variant]} ${className || ''}`}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
