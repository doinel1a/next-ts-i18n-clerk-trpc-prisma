import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { locales } from '@/lib/constants/shared';

const { it, en } = locales;
export const routing = defineRouting({
  locales: [it, en],
  defaultLocale: en,
  localePrefix: 'never'
});

// prettier-ignore
export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname
} = createNavigation(routing);
