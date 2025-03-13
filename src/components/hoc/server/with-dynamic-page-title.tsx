import React from 'react';

import type { TPageName } from '@/lib/types/global';
import type { PropsWithChildren } from 'react';

import { getTranslations } from 'next-intl/server';

type TWithPageTitle = PropsWithChildren & {
  page: TPageName;
};

export default async function WithDynamicPageTitle({ page, children }: TWithPageTitle) {
  const tPage = await getTranslations(`pages.${page}`);

  return (
    <>
      <title>{tPage('title')}</title>
      {children}
    </>
  );
}
