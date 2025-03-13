import React from 'react';

import WithDynamicPageTitle from '@/components/hoc/server/with-dynamic-page-title';

import SignIn from '../_components/sign-in';

export default function SignInPage() {
  return (
    <WithDynamicPageTitle page='sign-in'>
      <SignIn />
    </WithDynamicPageTitle>
  );
}
