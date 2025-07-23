import '@/styles/globals.css';
import '@/styles/globals.scss';

import React from 'react';

import type { TLocale } from '@/lib/constants/shared';
import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import config from '_config';
import { routing } from 'i18n/routing';
import { notFound } from 'next/navigation';

import Footer from '@/components/footer';
import GithubCorner from '@/components/github-corner';
import Navbar from '@/components/navbar';
import RootProvider from '@/components/providers/root';

export const metadata: Metadata = {
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  icons: '/favicon.svg',
  manifest: '/app.webmanifest'
};

export const viewport: Viewport = {
  themeColor: '#000'
};

type TRootLayout = PropsWithChildren & {
  params: Promise<{ locale: TLocale | undefined }>;
};

export default async function RootLayout({ params, children }: TRootLayout) {
  const { locale } = await params;
  if (!locale || !routing.locales.includes(locale)) {
    return notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <RootProvider>
          <div className='grid min-h-[100dvh] grid-rows-[auto_1fr_auto]'>
            <Navbar />
            {children}
            <Footer />
          </div>

          <GithubCorner
            title='Get started on GitHub'
            url='https://github.com/doinel1a/next-ts-shadcn-ui'
          />
        </RootProvider>
      </body>
    </html>
  );
}
