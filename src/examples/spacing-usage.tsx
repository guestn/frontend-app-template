// Example usage of the spacing system

// 1. JavaScript/TypeScript usage
import { spacing, spacingValues, getSpacing, spacingCSS } from '../utils/spacing';

// Basic usage
const padding = spacing(8); // 16px
const margin = spacing(12); // 24px

// Using predefined values
const smallPadding = spacingValues.sm; // 8px
const largeMargin = spacingValues.xl; // 32px

// For React inline styles
const buttonStyle = {
  padding: getSpacing(8), // "16px"
  margin: getSpacing('lg'), // "24px"
};

// For CSS-in-JS
const cssString = `
  .my-component {
    padding: ${spacingCSS(8)};
    margin: ${spacingCSS('lg')};
  }
`;

// 2. CSS usage examples

// Using CSS custom properties
.example-css-properties {
  padding: var(--spacing-md); // 16px
  margin: var(--spacing-lg); // 24px
  gap: var(--spacing-sm); // 8px
}

// Using SCSS function directly
.example-scss-function {
  padding: spacing(8); // 16px padding
  margin: spacing(12); // 24px margin
  gap: spacing(4); // 8px gap
}

// Using SCSS function with multiple values
.example-multiple-values {
  padding: spacing(4) spacing(8); // 8px top/bottom, 16px left/right
  margin: spacing(2) spacing(4) spacing(6) spacing(8); // 4px, 8px, 12px, 16px (top, right, bottom, left)
}

// 3. React component example
import React from 'react';
import { getSpacing } from '../utils/spacing';

const ExampleComponent = () => {
  return (
    <div
      style={{
        padding: getSpacing(8),
        margin: getSpacing(12),
        gap: getSpacing(4),
      }}
    >
      <button style={{ padding: getSpacing(4) }}>
        Button with spacing
      </button>
    </div>
  );
};

export default ExampleComponent;
