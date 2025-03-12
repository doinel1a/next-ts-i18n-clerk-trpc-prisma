import React from 'react';

import type { PropsWithChildren } from 'react';

import ThemeProvider from './client/theme';
import { TRPCProvider } from './client/trpc';
import ClerkProvider from './server/clerk';

type TRootProvider = PropsWithChildren;

export default function RootProvider({ children }: TRootProvider) {
  return (
    <ThemeProvider>
      <ClerkProvider>
        <TRPCProvider>{children}</TRPCProvider>
      </ClerkProvider>
    </ThemeProvider>
  );
}
