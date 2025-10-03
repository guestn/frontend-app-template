import { TFunction } from 'i18next';
import { FooterLinksGroup } from '../../components/ui';

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
