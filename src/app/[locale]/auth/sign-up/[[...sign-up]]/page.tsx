import React from 'react';

import WithDynamicPageTitle from '@/components/hoc/server/with-dynamic-page-title';

import SignUp from '../_components/sign-up';

export default function SignUpPage() {
  return (
    <WithDynamicPageTitle page='sign-up'>
      <SignUp />
    </WithDynamicPageTitle>
  );
}
