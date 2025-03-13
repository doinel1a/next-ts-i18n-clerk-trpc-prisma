import React from 'react';

import type { PropsWithChildren } from 'react';

type TAuthLayout = PropsWithChildren;

export default function AuthLayout({ children }: TAuthLayout) {
  return <main className='flex h-full w-full items-center justify-center'>{children}</main>;
}
