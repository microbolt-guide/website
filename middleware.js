import { locales } from 'nextra/locales';

export async function middleware(req) {
  const pathIsDocs = req.nextUrl.pathname === '/docs';
  // return the /docs/index.${locale} instead of /docs.${locale}
  if (pathIsDocs) {
    req.nextUrl.pathname = '/docs/index';
  }
  return locales(req);
}