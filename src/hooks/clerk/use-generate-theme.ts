import { useMemo } from 'react';

import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

import { theme } from '@/lib/constants/shared';

export default function useGenerateClerkTheme() {
  const { resolvedTheme } = useTheme();
  const isDark = useMemo(() => resolvedTheme === theme.dark, [resolvedTheme]);

  return {
    baseTheme: isDark ? dark : undefined
  };
}
