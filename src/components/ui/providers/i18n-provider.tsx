import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n/i18n';

export interface I18nProviderProps {
  children: ReactNode;
  locale?: string;
}

export const I18nProvider = ({ children, locale }: I18nProviderProps) => {
  // Change language if locale is provided
  if (locale && locale !== i18n.language) {
    i18n.changeLanguage(locale);
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

// Export resolved locale for compatibility
export const resolvedLocale = i18n.language;
