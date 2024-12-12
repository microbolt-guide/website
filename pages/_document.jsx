import Document, { Head, Html, Main, NextScript } from 'next/document'
import { SkipNavLink } from 'nextra-theme-docs'

import Crowdjet from '@components/Crowdjet'

export default class MyDocument extends Document {
  render() {
    const pathname = this.props.__NEXT_DATA__.page
    let lang = pathname.split('/', 2)[1]

    return (
      <Html lang={lang}>
        <Head />
        <body>
          <SkipNavLink styled />
          <Main />
          <NextScript />
          <Crowdjet />
        </body>
      </Html>
    )
  }
}