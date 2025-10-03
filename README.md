# Frontend App Template

This is a template for developer frontend apps.

## Setup

To complete the setup, make sure to add the `NPM_TOKEN` environment variable to your GitHub Actions secrets to be able to install private packages in the CI/CD pipeline.

## Getting started

Install:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

or to e.g. run on port 4000

```bash
pnpm dev --port 4000
```

Build for deployment:

```bash
pnpm build
```

## Repo information

- **Package manager:** pnpm
- **Library:** Vite.js
- **State management:** Context API
- **Querying:** SWR
- **UI base components:** React Aria Components
- **Unit Testing:** React Testing Library
- **E2E Testing:** Playwright (TBC)
- **Linting:** ESLint / Prettier / Stylelint
- **Internationalization:** i18next
- **CSS:** SCSS Modules

## Environment variables

Environment variables are stored in the `.env` file and should be prefixed with `VITE_PUBLIC_`, if they are public variables. To access them in the code, use `meta.env.VITE_PUBLIC_VARIABLE_NAME` instead of `process.env.VITE_PUBLIC_VARIABLE_NAME`.

## Release

## Project directory structure

### Top Level

```text
.
└── src/
    ├── lib/
    ├── components/
    │   └── domain/                   — Logical domain components
    └── pages/
        ├── main-page
        └── secondary-page
```

### Component/Page Level

```text
.
└── component-name/
    ├── lib/
    │   ├── constants.ts
    │   ├── type.ts
    │   ├── functions.ts
    │   └── ...                       — There could be more files if `functions.ts` gets too big.
    ├── __test__/
    │   ├── component-name.spec.tsx
    │   ├── functions.spec.tsx
    │   └── ...
    ├── component-name.module.scss
    └── component-name.tsx
```

### Public Files/Assets

```text
.
└── public/
    ├── images/
    │   └── image.jpg
    ├── favicon/
    └── ...
```

## Feature Flags

The application implements a hierarchical feature flag system that allows dynamic feature toggling through multiple configuration layers. Feature flags can be enabled through the following methods, listed in order of precedence (highest to lowest):

1. **Query Parameters**
   - Format: `?feature_FEATURE_ID=true`
   - Example: `https://dummy.com/?feature_EXAMPLE_FEATURE=true`

2. **Browser Local Storage**
   - Key format: `feature_FEATURE_ID`
   - Example: `feature_EXAMPLE_FEATURE: true`

3. **Environment Variables**
   - Format: `VITE_FEATURE_FEATURE_ID=true`
   - Example: `VITE_FEATURE_EXAMPLE_FEATURE=true`

For React components, use the `useFeatureService` hook to check feature flag states and conditionally render features.

See `src/features/feature-flags.ts` for available feature flags and their default configurations.
