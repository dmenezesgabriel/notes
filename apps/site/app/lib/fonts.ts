import {
  Bebas_Neue,
  Black_Han_Sans,
  Cutive_Mono,
  Permanent_Marker,
  Special_Elite,
} from 'next/font/google';

export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const specialElite = Special_Elite({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marker',
  display: 'swap',
});

export const cuitveMono = Cutive_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const blackHanSans = Black_Han_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-stamp',
  display: 'swap',
});
