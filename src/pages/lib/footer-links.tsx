import { FooterLinksGroup } from '@pufferfinance/puffer-ui-components';
import { TFunction } from 'i18next';

export const footerLinks: (t: TFunction) => FooterLinksGroup[] = (t) => [
  {
    links: [
      {
        href: 'https://dummy.com/',
        label: t('NAV.FOOTER.TEMPLATE_LINK'),
        isInternal: false,
      },
      {
        href: 'https://dummy.com/',
        label: t('NAV.FOOTER.TEMPLATE_LINK'),
        isInternal: false,
      },
    ],
  },
];
