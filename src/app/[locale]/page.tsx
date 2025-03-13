import React from 'react';

import dynamic from 'next/dynamic';

import WithDynamicPageTitle from '@/components/hoc/server/with-dynamic-page-title';
import { Skeleton } from '@/components/ui/skeleton';

const Counter = dynamic(() => import('@/components/counter'), {
  loading: () => <Skeleton className='h-44 w-72 rounded-md' />
});

export default function HomePage() {
  return (
    <WithDynamicPageTitle page='home'>
      <main className='flex h-full w-full flex-col items-center justify-center'>
        <Counter />
      </main>
    </WithDynamicPageTitle>
  );
}
