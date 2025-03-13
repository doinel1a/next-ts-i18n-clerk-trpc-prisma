import type globalDictionary from 'i18n/dictionaries/it.json';

type TGlobalDictionary = typeof globalDictionary;
export type TPageName = keyof (typeof globalDictionary)['pages'];

declare global {
  type IntlMessages = TGlobalDictionary;
}
