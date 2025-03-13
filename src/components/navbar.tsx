import React from 'react';

import dynamic from 'next/dynamic';

import { Skeleton } from './ui/skeleton';

const LanguageToggle = dynamic(() => import('./toggles/language'), {
  loading: () => <Skeleton className='h-10 w-10 rounded-md' />
});

const ThemeToggle = dynamic(() => import('./toggles/theme'), {
  loading: () => <Skeleton className='h-10 w-10 rounded-md' />
});

export default function Navbar() {
  return (
    <header className='border-border flex h-16 w-full items-center justify-between border-b px-5'>
      <span className='text-lg font-black'>Template</span>

      <div className='space-x-5 pr-20'>
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
