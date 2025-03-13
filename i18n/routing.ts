import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { locale } from '@/lib/constants/shared';

const { it, en } = locale;
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
