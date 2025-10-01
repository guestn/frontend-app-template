import {
  MediumIcon,
  DiscordIcon,
  TelegramIcon,
  TwitterIcon,
} from '../../components/ui';

export type FooterSocialLink = {
  name: string;
  icon: React.ReactNode;
  href: string[];
  lang: string[];
};

export const socialLinks: FooterSocialLink[] = [
  {
    name: 'twitter',
    icon: <TwitterIcon />,
    href: ['alinkhere', 'alinkhere'],
    lang: ['EN', 'CH'],
  },
  {
    name: 'discord',
    icon: <DiscordIcon />,
    href: ['alinkhere'],
    lang: ['EN'],
  },
  {
    name: 'telegram',
    icon: <TelegramIcon />,
    href: ['alinkhere', 'alinkhere'],
    lang: ['EN', 'CH'],
  },
  {
    name: 'medium',
    icon: <MediumIcon />,
    href: ['alinkhere'],
    lang: ['EN'],
  },
];
