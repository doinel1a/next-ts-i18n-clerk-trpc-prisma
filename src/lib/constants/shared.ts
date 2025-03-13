export type TLocale = (typeof locales)[keyof typeof locales];
export const locales = {
  it: 'it',
  en: 'en'
} as const;

export type TTheme = (typeof theme)[keyof typeof theme];
export const theme = {
  light: 'light',
  dark: 'dark',
  system: 'system'
} as const;
