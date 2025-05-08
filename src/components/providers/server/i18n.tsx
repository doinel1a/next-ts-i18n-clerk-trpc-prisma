import React from 'react';

import type { PropsWithChildren } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

type TI18nProvider = PropsWithChildren;

export default async function I18nProvider({ children }: Readonly<TI18nProvider>) {
  const messages = await getMessages();
  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
