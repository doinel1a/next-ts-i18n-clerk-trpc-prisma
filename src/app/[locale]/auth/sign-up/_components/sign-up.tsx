'use client';

import React from 'react';

import { SignUp as Clerk_SignUp } from '@clerk/nextjs';

import useGenerateClerkTheme from '@/hooks/clerk/use-generate-theme';

export default function SignUp() {
  const theme = useGenerateClerkTheme();
  return <Clerk_SignUp appearance={theme} />;
}
