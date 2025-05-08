import type globalDictionary from 'i18n/dictionaries/it.json';

type TGlobalDictionary = typeof globalDictionary;
export type TPageName = keyof (typeof globalDictionary)['pages'];

declare global {
  // eslint-disable-next-line sonarjs/redundant-type-aliases
  type IntlMessages = TGlobalDictionary;
}
