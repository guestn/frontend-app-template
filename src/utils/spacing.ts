// 16px is base font size for rem sizing in the app
export const spacing = (factor: number = 8) => factor * 0.125 * 16;

// CSS custom property version for use in CSS
export const spacingCSS = (factor: number = 8) => `calc(${factor} * 0.125rem)`;

// Predefined spacing values for common use cases
export const spacingValues = {
  xs: spacing(2), // 4px
  sm: spacing(4), // 8px
  md: spacing(8), // 16px
  lg: spacing(12), // 24px
  xl: spacing(16), // 32px
  '2xl': spacing(24), // 48px
  '3xl': spacing(32), // 64px
} as const;

// CSS custom properties for use in stylesheets
export const spacingCSSValues = {
  xs: spacingCSS(2), // 4px
  sm: spacingCSS(4), // 8px
  md: spacingCSS(8), // 16px
  lg: spacingCSS(12), // 24px
  xl: spacingCSS(16), // 32px
  '2xl': spacingCSS(24), // 48px
  '3xl': spacingCSS(32), // 64px
} as const;
