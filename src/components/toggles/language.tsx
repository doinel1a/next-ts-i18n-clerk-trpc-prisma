'use client';

import React, { useCallback, useEffect, useMemo, useTransition } from 'react';

import type { TLocale } from '@/lib/constants/shared';

import { usePathname, useRouter } from 'i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { createPortal } from 'react-dom';

import Icons from '@/components/icons/custom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { locale } from '@/lib/constants/shared';
import { cn } from '@/lib/utils';

import LucideIcon from '../icons/lucide';

type TLanguageToggle = {
  className?: string;
};

export default function LanguageToggle({ className }: Readonly<TLanguageToggle>) {
  const tToggle = useTranslations('components.toggles.language');

  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const isItalian = useMemo(() => currentLocale === locale.it, [currentLocale]);

  const [isPending, startTransition] = useTransition();
  const onLanguageClick = useCallback(
    (locale: TLocale) => {
      startTransition(() => {
        router.replace(pathname, { locale });
      });
    },
    [router, pathname]
  );

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            data-testid='language-toggle'
            variant='outline'
            size='icon'
            className={cn(className)}
          >
            {isItalian ? <Icons.flags.italian /> : <Icons.flags.english />}
            <span className='sr-only'>{tToggle('title')}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent data-testid='language-dropdown-content'>
          <DropdownMenuLabel>{tToggle('title')}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            data-testid='language-en'
            onClick={() => {
              onLanguageClick(locale.en);
            }}
          >
            <Icons.flags.english className='mr-2' />
            <span>English</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            data-testid='language-it'
            onClick={() => {
              onLanguageClick(locale.it);
            }}
          >
            <Icons.flags.italian className='mr-2' />
            <span>Italiano</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Loader isLoading={isPending} />
    </>
  );
}

type TLoader = {
  isLoading: boolean;
};

function Loader({ isLoading }: TLoader) {
  const tCommons = useTranslations('commons');

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isLoading]);

  if (!isLoading) {
    return null;
  }

  return createPortal(
    <div className='pointer-events-none fixed inset-0 z-50 flex items-center justify-center'>
      <div className='bg-background/75 absolute inset-0 backdrop-blur-sm' />
      <div className='relative z-50 flex flex-col items-center justify-center gap-y-2.5'>
        <LucideIcon name='Loader' className='h-8 w-8 animate-spin' />
        <p className='text-xl font-bold'>{tCommons('loading')}</p>
      </div>
    </div>,
    document.body
  );
}
