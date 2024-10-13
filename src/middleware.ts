import { i18nConfig } from 'constants/i18n.constants';
import { i18nRouter } from 'next-i18n-router';
import { NextRequest } from 'next/server';

// The i18nRouter function will take the request,
// detect the user’s preferred language using the accept-language header,
// and then redirect them to the path with their preferred language.
// If we don’t support their language, it will fallback to the default language.
export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
