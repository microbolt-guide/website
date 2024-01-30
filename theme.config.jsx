import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
    project: {
        link: 'https://github.com/microbolt-guide/microbolt'
    },
    sidebar: {
        defaultMenuCollapseLevel: 1,
        autoCollapse: true
    },
    docsRepositoryBase: "https://github.com/microbolt-guide/microbolt/blob/main",
    i18n: [
        { locale: 'ca-ES', text: 'Català' },
        { locale: 'en-US', text: 'English' },
    ],
    logo: (
        <>
            <svg viewBox="0 0 720 720" width="50px" height="50px" overflow="visible">
                <path fill="#F7941F" d="M292.52,317.32l-15.42,61.83c19.04,4.73,77.77,23.58,86.45-11.3C372.61,331.48,311.56,322.07,292.52,317.32z" />
                <path fill="#F7941F" d="M313.56,232.93l-13.98,56.08c15.86,3.95,64.74,20.07,72.66-11.66C380.48,244.26,329.41,236.88,313.56,232.93z" />
                <path fill="#F7941F" d="M322.7,492.48c0-22.9,4.56-44.73,12.8-64.65c-5.45-0.68-11.1-1.59-16.92-2.69l-11.62,46.58l-28.09-7
	l11.47-45.96c-7.28-1.81-14.72-3.73-22.38-5.81l-11.51,46.18l-28.06-7l11.62-46.67c-6.56-1.68-13.22-3.46-20.02-5.17l-36.55-9.11
	l13.94-32.15c0,0,20.7,5.5,20.42,5.1c7.95,1.97,11.48-3.22,12.87-6.67l18.37-73.64c1.03,0.25,2.03,0.5,2.97,0.74
	c-1.12-0.45-2.14-0.74-2.92-0.94l13.1-52.57c0.34-5.97-1.71-13.5-13.09-16.34c0.44-0.3-20.4-5.07-20.4-5.07l7.47-30l38.74,9.67
	l-0.03,0.14c5.82,1.45,11.82,2.82,17.94,4.22l11.51-46.13l28.07,7l-11.28,45.22c7.54,1.72,15.12,3.46,22.5,5.3l11.2-44.93l28.09,7
	l-11.5,46.14c35.46,12.22,61.4,30.53,56.3,64.59c-3.69,24.94-17.51,37.01-35.86,41.24c10.98,5.72,19.61,12.76,24.84,21.78
	c22.66-11.26,48.19-17.61,75.21-17.61c27.88,0,54.18,6.75,77.37,18.69c13.76-125.3-66.82-244.64-192.53-275.98
	C239.62,31.8,100.72,115.27,66.54,252.43C32.33,389.56,115.8,528.48,252.9,562.67c29.63,7.39,59.34,9.27,88.06,6.33
	C329.29,546.01,322.7,520.01,322.7,492.48z"/>
                <path fill="#6A53A3" d="M491.9,323.28c-93.45,0-169.2,75.75-169.2,169.2s75.75,169.2,169.2,169.2
	s169.2-75.75,169.2-169.2S585.35,323.28,491.9,323.28z M566.04,483.53l-111,97.8c-7.8,6.6-13.2,3-7.8-7.2l34.8-69h-63.6
	c0,0-10.2,0,0-9l112.8-97.2c4.92-3.15,9.6,0,6.6,5.4l-36,70.8h64.2C566.04,475.13,576.24,475.13,566.04,483.53z"/>
                <path fill="#FFFFFF" d="M418.44,496.13l112.8-97.2c4.92-3.15,9.6,0,6.6,5.4l-36,70.8h64.2c0,0,10.2,0,0,8.4l-111,97.8
	c-7.8,6.6-13.2,3-7.8-7.2l34.8-69h-63.6C418.44,505.13,408.24,505.13,418.44,496.13z"/>
                <path fill="#FFFFFF" d="M416.7,340.88c-5.23-9.02-13.86-16.06-24.84-21.78c18.35-4.23,32.18-16.3,35.86-41.24
	c5.1-34.06-20.84-52.38-56.3-64.59l11.5-46.14l-28.09-7l-11.2,44.93c-7.38-1.84-14.97-3.58-22.5-5.3l11.28-45.22l-28.07-7
	l-11.51,46.13c-6.11-1.39-12.11-2.77-17.94-4.22l0.03-0.14l-38.74-9.67l-7.47,30c0,0,20.84,4.78,20.4,5.07
	c11.38,2.84,13.43,10.37,13.09,16.34l-13.1,52.57c0.78,0.2,1.8,0.49,2.92,0.94c-0.94-0.23-1.94-0.49-2.97-0.74l-18.37,73.64
	c-1.39,3.46-4.92,8.64-12.87,6.67c0.28,0.41-20.42-5.1-20.42-5.1l-13.94,32.15l36.55,9.11c6.8,1.7,13.46,3.49,20.02,5.17
	l-11.62,46.67l28.06,7l11.51-46.18c7.66,2.08,15.1,4,22.38,5.81l-11.47,45.96l28.09,7l11.62-46.58c5.82,1.1,11.46,2.01,16.92,2.69
	C351.18,389.96,380.2,359.03,416.7,340.88z M313.56,232.93c15.86,3.95,66.92,11.33,58.67,44.42c-7.92,31.73-56.8,15.61-72.66,11.66
	L313.56,232.93z M277.09,379.15l15.42-61.83c19.04,4.75,80.1,14.16,71.02,50.54C354.86,402.73,296.13,383.88,277.09,379.15z"/>
            </svg>
            <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
                MicroBolt
            </span>
        </>
    ),
    useNextSeoProps() {
        const { asPath, locale } = useRouter()
        if (locale === 'ca-ES') return {
            titleTemplate: asPath !== '/' ? '%s – MicroBolt' : 'Inici – MicroBolt'
        }
        if (locale === 'en-US') return {
            titleTemplate: asPath !== '/' ? '%s – MicroBolt' : 'Home – MicroBolt'
        }
    },
    head: () => {
        const { asPath, defaultLocale, locale } = useRouter()
        const { frontMatter } = useConfig()
        const url =
            'https://microbolt.guide' +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

        return (
            <>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={frontMatter.title || 'MicroBolt'} />
                <meta
                    property="og:description"
                    content={frontMatter.description || 'The next node builder'}
                />
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
            </>
        )
    },
    footer: {
        component: null,
    },
    gitTimestamp: function useGitTimestamp({ timestamp }) {
        const { locale } = useRouter()
        if (locale === 'ca-ES') return (
            <>
                Última actualització el{' '}
                <time dateTime={timestamp.toISOString()}>
                    {timestamp.toLocaleDateString(locale, {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                </time>
            </>
        )
        if (locale === 'en-US') return (
            <>
                Last updated on{' '}
                <time dateTime={timestamp.toISOString()}>
                    {timestamp.toLocaleDateString(locale, {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                </time>
            </>
        )
    },
    navigation: {
        prev: true,
        next: true
    },
    feedback: {
        content: null
    },
    search: {
        placeholder() {
            const { locale } = useRouter()
            if (locale === 'ca-ES') return 'Cerca a la documentació…'
            if (locale === 'en-US') return 'Search documentation…'
        }
    },
    toc: {
        title() {
            const { locale } = useRouter()
            if (locale === 'ca-ES') return 'En aquesta pàgina'
            if (locale === 'en-US') return 'On This Page'
        }
    },
    editLink: {
        text() {
            const { locale } = useRouter()
            if (locale === 'ca-ES') return 'Edita aquesta pàgina'
            if (locale === 'en-US') return 'Edit this page'
        }
    }
}