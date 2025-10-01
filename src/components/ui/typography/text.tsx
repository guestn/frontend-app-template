import { forwardRef } from 'react';
import styles from './typography.module.scss';

export enum TextVariant {
  Paragraph = 'paragraph',
  Small = 'small',
  Large = 'large',
}

export interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      children,
      variant = TextVariant.Paragraph,
      className,
      as: Component = 'p',
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={`${styles.text} ${styles[variant]} ${className || ''}`}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = 'Text';
