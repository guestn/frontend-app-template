import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { I18nProvider, resolvedLocale, ToastProvider } from './components/ui';
import { App } from './app';
import { SWRProvider } from './context/swr-provider/swr-provider';

import './styles/globals.scss';
import './i18n/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <SWRProvider>
          <I18nProvider locale={resolvedLocale}>
            <ToastProvider>
              <App />
            </ToastProvider>
          </I18nProvider>
        </SWRProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
