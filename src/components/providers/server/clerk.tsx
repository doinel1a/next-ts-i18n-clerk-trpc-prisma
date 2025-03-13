/* eslint-disable unicorn/no-await-expression-member */

import React from 'react';

import type { PropsWithChildren } from 'react';

import { ClerkProvider as NextJSClerkProvider } from '@clerk/nextjs';
import { getLocale } from 'next-intl/server';

import { locales } from '@/lib/constants/shared';

type TClerkProvider = PropsWithChildren;

export default async function ClerkProvider({ children }: TClerkProvider) {
  const locale = await getLocale();
  const localization =
    locale === locales.it
      ? (await import('@clerk/localizations')).itIT
      : (await import('@clerk/localizations')).enUS;

  return <NextJSClerkProvider localization={localization}>{children}</NextJSClerkProvider>;
}
