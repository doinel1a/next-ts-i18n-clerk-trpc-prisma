export type TLocale = (typeof locales)[keyof typeof locales];
export const locales = {
  it: 'it',
  en: 'en'
} as const;
