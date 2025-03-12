import React from 'react';

import type { PropsWithChildren } from 'react';

import ThemeProvider from './client/theme';
import { TRPCProvider } from './client/trpc';
import ClerkProvider from './server/clerk';
import I18nProvider from './server/i18n';

type TRootProvider = PropsWithChildren;

export default function RootProvider({ children }: TRootProvider) {
  return (
    <I18nProvider>
      <ThemeProvider>
        <ClerkProvider>
          <TRPCProvider>{children}</TRPCProvider>
        </ClerkProvider>
      </ThemeProvider>
    </I18nProvider>
  );
}
