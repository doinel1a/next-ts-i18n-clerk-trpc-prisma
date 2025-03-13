'use client';

import * as React from 'react';

import type { TTheme } from '@/lib/constants/shared';
import type { TLucideIconName } from '../icons/lucide';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { theme } from '@/lib/constants/shared';

import LucideIcon from '../icons/lucide';

export default function ThemeToggle() {
  const tToggle = useTranslations('components.toggles.theme');

  const { setTheme } = useTheme();
  const onThemeClick = React.useCallback(
    (theme: TTheme) => {
      setTheme(theme);
    },
    [setTheme]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button data-testid='theme-toggle' variant='outline' size='icon'>
          <LucideIcon
            name='Sun'
            className='scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90'
          />
          <LucideIcon
            name='MoonStar'
            className='absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0'
          />
          <span className='sr-only'>{tToggle('title')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent data-testid='theme-dropdown-content'>
        <DropdownMenuLabel>{tToggle('title')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <MenuItem
          icon='Sun'
          label={tToggle(theme.light)}
          dataTestid='theme-light'
          onClick={() => onThemeClick(theme.light)}
        />
        <MenuItem
          icon='MoonStar'
          label={tToggle(theme.dark)}
          dataTestid='theme-dark'
          onClick={() => onThemeClick(theme.dark)}
        />
        <MenuItem
          icon='Laptop'
          label={tToggle(theme.system)}
          dataTestid='theme-system'
          onClick={() => onThemeClick(theme.system)}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type TMenuItem = {
  icon: TLucideIconName;
  label: string;
  dataTestid: string;
  onClick: () => void;
};

function MenuItem({ icon, label, dataTestid, onClick }: TMenuItem) {
  return (
    <DropdownMenuItem data-testid={dataTestid} onClick={onClick}>
      <LucideIcon name={icon} className='mr-2' />
      <span>{label}</span>
    </DropdownMenuItem>
  );
}
