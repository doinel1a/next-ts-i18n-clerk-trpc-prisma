import React from 'react';

import type { LucideProps } from 'lucide-react';

import { icons } from 'lucide-react';

import { cn } from '@/lib/utils';

export type TLucideIconName = keyof typeof icons;

type TLucideIcon = LucideProps & {
  name: TLucideIconName;
  className?: string;
};

export default function LucideIcon({ name, className, ...otherProperties }: TLucideIcon) {
  const _LucideIcon = icons[name];
  return <_LucideIcon className={cn('h-[1.2rem] w-[1.2rem]', className)} {...otherProperties} />;
}
