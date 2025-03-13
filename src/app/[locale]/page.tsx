import React from 'react';

import type { TLocale } from '@/lib/constants/shared';

import { routing } from 'i18n/routing';
import { getTranslations } from 'next-intl/server';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

import { Skeleton } from '@/components/ui/skeleton';

const Counter = dynamic(() => import('@/components/counter'), {
  loading: () => <Skeleton className='h-44 w-72 rounded-md' />
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: TLocale | undefined }>;
}) {
  const { locale } = await params;
  if (!locale || !routing.locales.includes(locale)) {
    return notFound();
  }

  const tHome = await getTranslations({ locale, namespace: 'pages.home' });

  return {
    title: tHome('title')
  };
}

export default function Home() {
  return (
    <main className='flex h-full w-full flex-col items-center justify-center'>
      <Counter />
    </main>
  );
}
