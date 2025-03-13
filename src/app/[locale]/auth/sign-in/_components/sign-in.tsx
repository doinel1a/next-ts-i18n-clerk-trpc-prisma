'use client';

import React from 'react';

import { SignIn as Clerk_SignIn } from '@clerk/nextjs';

import useGenerateClerkTheme from '@/hooks/clerk/use-generate-theme';

export default function SignIn() {
  const theme = useGenerateClerkTheme();
  return <Clerk_SignIn appearance={theme} />;
}
