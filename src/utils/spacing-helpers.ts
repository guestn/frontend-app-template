import { spacing, spacingValues } from './spacing';

// Utility function for React inline styles
export const getSpacing = (factor: number | keyof typeof spacingValues) => {
  if (typeof factor === 'string') {
    return `${spacingValues[factor]}px`;
  }
  return `${spacing(factor)}px`;
};

// CSS-in-JS helper for styled components or emotion
export const spacingCSS = (factor: number | keyof typeof spacingValues) => {
  if (typeof factor === 'string') {
    return `var(--spacing-${factor})`;
  }
  return `calc(${factor} * 0.125rem)`;
};
