export { middleware } from 'nextra/locales'

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  // Also ignoring custom paths like `.well-known` and `assets`
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|\\.well-known|assets|config).*)'
  ]
}