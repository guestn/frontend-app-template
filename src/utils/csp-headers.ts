import { loadEnv } from 'vite';

const env = loadEnv('all', process.cwd());

const API_URLS = [env.VITE_SOME_API_URL];

const connectSrc = [
  "'self'",
  ...API_URLS,
  'https://api.merkl.xyz',
  // Google Analytics
  'https://*.googletagmanager.com',
  'https://*.google-analytics.com',
  // SimpleSVG
  'https://api.simplesvg.com',
  // HappyKit feature flags
  'https://happykit.dev',
  // Google Analytics
  'https://www.google-analytics.com',
  // Misc
  'https://raw.githubusercontent.com',
];

const imgSrc = [
  "'self'",
  ...API_URLS,
  'blob:',
  'data:',
  'https://raw.githubusercontent.com',
  'https://storage.googleapis.com',
  'https://placehold.co',
];

const fontSrc = [
  "'self'",
  'data:',
  'https://fonts.gstatic.com',
  'https://rsms.me',
];

const scriptSrc = [
  "'self'",
  "'unsafe-eval'",
  "'unsafe-inline'",
  'https://www.googletagmanager.com',
];

const frameSrc: string[] = [];

const frameAncestors: string[] = [];

const styleSrc = ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'];

export const cspHeaders = [
  "default-src 'self'",
  `script-src ${scriptSrc.join(' ')}`,
  `style-src ${styleSrc.join(' ')}`,
  `img-src ${imgSrc.join(' ')}`,
  `connect-src ${connectSrc.join(' ')}`,
  `font-src ${fontSrc.join(' ')}`,
  `frame-src ${frameSrc.join(' ')}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  `frame-ancestors ${frameAncestors.join(' ')}`,
  'block-all-mixed-content',
  'upgrade-insecure-requests',
].join('; ');
