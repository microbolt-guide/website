const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    //defaultShowCopyCode: true,
})

const path = require('path')

module.exports = withNextra({
    i18n: {
        locales: ['ca-ES', 'en-US'],
        defaultLocale: 'ca-ES'
    },
    webpack: (config) => {
        config.resolve.alias['@components'] = path.join(__dirname, 'components');
        return config;
    },
})

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })