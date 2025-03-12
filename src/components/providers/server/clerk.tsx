import React from 'react';

import type { PropsWithChildren } from 'react';

import { ClerkProvider as NextJSClerkProvider } from '@clerk/nextjs';

type TClerkProvider = PropsWithChildren;

export default async function ClerkProvider({ children }: TClerkProvider) {
  return <NextJSClerkProvider>{children}</NextJSClerkProvider>;
}
