import nextra from 'nextra'
import path from 'path'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
  //defaultShowCopyCode: true,
})

export default withNextra({
  i18n: {
    locales: ['ca', 'en'],
    defaultLocale: 'ca',
  },
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(process.cwd(), 'components');
    config.resolve.alias['@styles'] = path.join(process.cwd(), 'styles');
    return config;
  },
  redirects: () => {
    return [
      {
        source: '/docs',
        destination: '/docs/index',
        statusCode: 302
      }
    ]
  },
  reactStrictMode: true
})