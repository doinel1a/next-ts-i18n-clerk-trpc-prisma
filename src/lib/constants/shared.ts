const BASE = 'next-ts-i18n-clerk-trpc-prisma';
export const storageKey = {
  theme: `${BASE}-theme`
} as const;

export type TLocale = (typeof locale)[keyof typeof locale];
export const locale = {
  it: 'it',
  en: 'en'
} as const;

export type TTheme = (typeof theme)[keyof typeof theme];
export const theme = {
  light: 'light',
  dark: 'dark',
  system: 'system'
} as const;
