import type globalDictionary from 'i18n/dictionaries/it.json';

type TGlobalDictionary = typeof globalDictionary;

declare global {
  type IntlMessages = TGlobalDictionary;
}
