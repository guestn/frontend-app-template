import { FC } from 'react';
import ReactGA from 'react-ga4';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppFooter } from '@/components/domain/app-footer/app-footer';
import {
  AppHeader,
  Background,
  BackgroundVariant,
  RouterProvider,
} from './components/ui';
import { navItems } from './pages/lib/nav-items';
import { policyRoutes } from './pages/lib/routes';
import { env } from './utils/env';

// Pages
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { HomePage } from './pages/home-page/home-page';

// Initialize Google Analytics
if (env.VITE_GOOGLE_ANALYTICS_ID) {
  ReactGA.initialize(env.VITE_GOOGLE_ANALYTICS_ID);
}

export const App: FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const headerNavItems = navItems(t);

  return (
    <RouterProvider navigate={navigate}>
      <Background variant={BackgroundVariant.Default}>
        <AppHeader
          title={t('HEADER.TITLE')}
          logoSrc="https://placehold.co/100x50"
          logoHref="/"
          navItems={() => Object.values(headerNavItems)}
          selectedPathname={pathname}
          isConnected={false}
          className="app-header"
        />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Policy Routes */}
            <Route
              path={policyRoutes(t).privacyPolicy.pathname}
              element={policyRoutes(t).privacyPolicy.element}
            />
            <Route
              path={policyRoutes(t).termsOfService.pathname}
              element={policyRoutes(t).termsOfService.element}
            />
            <Route
              path={policyRoutes(t).cookiePolicy.pathname}
              element={policyRoutes(t).cookiePolicy.element}
            />
            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <AppFooter />
      </Background>
    </RouterProvider>
  );
};
