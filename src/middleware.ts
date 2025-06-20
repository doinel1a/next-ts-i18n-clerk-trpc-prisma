/* eslint-disable unicorn/prefer-string-raw */

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { routing } from 'i18n/routing';
import createMiddleware from 'next-intl/middleware';

import { route } from './lib/constants/routes';

const intlMiddleware = createMiddleware(routing);

const isPublicRoute = createRouteMatcher([`${route.signUp}(.*)`, `${route.signIn}(.*)`]);

export default clerkMiddleware(
  async (auth, request) => {
    if (!isPublicRoute(request)) {
      await auth.protect(); // For API routes, it will return a 404 error, if the user is not authed
    }

    return intlMiddleware(request);
  },
  {
    /* debug: true, */
  }
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)'
  ]
};
