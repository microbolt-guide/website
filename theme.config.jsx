import { useRouter } from 'nextra/hooks'
import { useConfig } from 'nextra-theme-docs'

import CustomLink from '@components/CustomLink'

// Start of l10n strings on /locales/*.js
// Dynamically import all locale files
const locales = require.context('./locales', false, /\.js$/)
const localizedStrings = {}

// Loop through each locale file and add its strings to the localizedStrings object
locales.keys().forEach((key) => {
  const locale = key.replace('./', '').replace('.js', '')
  localizedStrings[locale] = locales(key).default
})

// Generate the list of locales
const i18n = Object.keys(localizedStrings).map(locale => ({
  locale,
  name: localizedStrings[locale].LANGUAGE_NAME
}))

// Extract localized strings
const l10n = (key) => {
  return Object.fromEntries(
    Object.entries(localizedStrings).map(([locale, strings]) => [locale, strings[key]])
  )
}

// Extract localized strings
const FEEDBACK = l10n('FEEDBACK')
const DESCRIPTION = l10n('DESCRIPTION')
const SEARCH_PLACEHOLDER = l10n('SEARCH_PLACEHOLDER')
const BANNER_TEXT = l10n('BANNER_TEXT')
const TOC_TITLE = l10n('TOC_TITLE')
const TOC_L10N_TEXT = l10n('TOC_L10N_TEXT')
const BACK_TO_TOP = l10n('BACK_TO_TOP')
const EDIT_TEXT = l10n('EDIT_TEXT')
const GIT_TIMESTAMP = l10n('GIT_TIMESTAMP')

const BANNER_KEY = 'microbolt-v2.1'
const BANNER_LINK = 'https://t.me/microbolt_official'
const TOC_L10N_LINK = 'https://l10n.microbolt.guide'
// End of l10n strings

export const MOBLogo = (props) => (
  <svg viewBox="0 0 720 720" fill="none" {...props}>
    <title>Microbolt</title>
    <path
      d="M292.52,317.32l-15.42,61.83c19.04,4.73,77.77,23.58,86.45-11.3C372.61,331.48,311.56,322.07,292.52,317.32z"
      fill="#F7941F"
    />
    <path
      d="M313.56,232.93l-13.98,56.08c15.86,3.95,64.74,20.07,72.66-11.66C380.48,244.26,329.41,236.88,313.56,232.93z"
      fill="#F7941F"
    />
    <path
      d="M322.7,492.48c0-22.9,4.56-44.73,12.8-64.65c-5.45-0.68-11.1-1.59-16.92-2.69l-11.62,46.58l-28.09-7l11.47-45.96c-7.28-1.81-14.72-3.73-22.38-5.81l-11.51,46.18l-28.06-7l11.62-46.67c-6.56-1.68-13.22-3.46-20.02-5.17l-36.55-9.11l13.94-32.15c0,0,20.7,5.5,20.42,5.1c7.95,1.97,11.48-3.22,12.87-6.67l18.37-73.64c1.03,0.25,2.03,0.5,2.97,0.74c-1.12-0.45-2.14-0.74-2.92-0.94l13.1-52.57c0.34-5.97-1.71-13.5-13.09-16.34c0.44-0.3-20.4-5.07-20.4-5.07l7.47-30l38.74,9.67l-0.03,0.14c5.82,1.45,11.82,2.82,17.94,4.22l11.51-46.13l28.07,7l-11.28,45.22c7.54,1.72,15.12,3.46,22.5,5.3l11.2-44.93l28.09,7l-11.5,46.14c35.46,12.22,61.4,30.53,56.3,64.59c-3.69,24.94-17.51,37.01-35.86,41.24c10.98,5.72,19.61,12.76,24.84,21.78c22.66-11.26,48.19-17.61,75.21-17.61c27.88,0,54.18,6.75,77.37,18.69c13.76-125.3-66.82-244.64-192.53-275.98C239.62,31.8,100.72,115.27,66.54,252.43C32.33,389.56,115.8,528.48,252.9,562.67c29.63,7.39,59.34,9.27,88.06,6.33C329.29,546.01,322.7,520.01,322.7,492.48z"
      fill="#F7941F"
    />
    <path
      d="M491.9,323.28c-93.45,0-169.2,75.75-169.2,169.2s75.75,169.2,169.2,169.2s169.2-75.75,169.2-169.2S585.35,323.28,491.9,323.28z M566.04,483.53l-111,97.8c-7.8,6.6-13.2,3-7.8-7.2l34.8-69h-63.6c0,0-10.2,0,0-9l112.8-97.2c4.92-3.15,9.6,0,6.6,5.4l-36,70.8h64.2C566.04,475.13,576.24,475.13,566.04,483.53z"
      fill="#6A53A3"
    />
    <path
      d="M418.44,496.13l112.8-97.2c4.92-3.15,9.6,0,6.6,5.4l-36,70.8h64.2c0,0,10.2,0,0,8.4l-111,97.8c-7.8,6.6-13.2,3-7.8-7.2l34.8-69h-63.6C418.44,505.13,408.24,505.13,418.44,496.13z"
      fill="#FFFFFF"
    />
    <path
      d="M416.7,340.88c-5.23-9.02-13.86-16.06-24.84-21.78c18.35-4.23,32.18-16.3,35.86-41.24c5.1-34.06-20.84-52.38-56.3-64.59l11.5-46.14l-28.09-7l-11.2,44.93c-7.38-1.84-14.97-3.58-22.5-5.3l11.28-45.22l-28.07-7l-11.51,46.13c-6.11-1.39-12.11-2.77-17.94-4.22l0.03-0.14l-38.74-9.67l-7.47,30c0,0,20.84,4.78,20.4,5.07c11.38,2.84,13.43,10.37,13.09,16.34l-13.1,52.57c0.78,0.2,1.8,0.49,2.92,0.94c-0.94-0.23-1.94-0.49-2.97-0.74l-18.37,73.64c-1.39,3.46-4.92,8.64-12.87,6.67c0.28,0.41-20.42-5.1-20.42-5.1l-13.94,32.15l36.55,9.11c6.8,1.7,13.46,3.49,20.02,5.17l-11.62,46.67l28.06,7l11.51-46.18c7.66,2.08,15.1,4,22.38,5.81l-11.47,45.96l28.09,7l11.62-46.58c5.82,1.1,11.46,2.01,16.92,2.69C351.18,389.96,380.2,359.03,416.7,340.88z M313.56,232.93c15.86,3.95,66.92,11.33,58.67,44.42c-7.92,31.73-56.8,15.61-72.66,11.66L313.56,232.93z M277.09,379.15l15.42-61.83c19.04,4.75,80.1,14.16,71.02,50.54C354.86,402.73,296.13,383.88,277.09,379.15z"
      fill="#FFFFFF"
    />
  </svg>
)

export const TGLogo = (props) => (
  <>
    <svg viewBox="0 0 496 512" fill="none" {...props}>
      <title>Telegram</title>
      <path
        d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
        fill="currentColor"
      />
    </svg>
    <span className="_sr-only">Telegram</span>
  </>
)

export default {
  docsRepositoryBase: "https://github.com/microbolt-guide/website/blob/main",
  feedback: {
    content() {
      const { locale } = useRouter()
      return FEEDBACK[locale]
    },
    labels: 'feedback'
  },
  components: {
    a: (props) => <CustomLink {...props} />,
  },
  head: function useHead() {
    const config = useConfig()
    const { locale } = useRouter()
    const description =
      config.frontMatter.description || DESCRIPTION[locale]
    const image =
      config.frontMatter.image ||
      'https://raw.githubusercontent.com/microbolt-guide/website/main/public/img/microbolt-banner.webp'
    const title = `${config.title} – Microbolt`
    return (
      <>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        {/* Favicons, meta */}
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
        />
        <meta name="msapplication-TileColor" content="#f79413" />
        <meta httpEquiv="Content-Language" content={locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@doitwithnotepad" />
        <meta property="og:image" content={image} />
        <meta name="apple-mobile-web-app-title" content="Microbolt" />
      </>
    )
  },
  i18n,
  logo: (
    <>
      <MOBLogo width="48" height="48" />
      <span
        className="max-md:_hidden _select-none _font-extrabold ltr:_ml-2 rtl:_mr-2"
      >
        Microbolt
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/microbolt-guide/website'
  },
  chat: {
    link: 'https://t.me/microbolt_official',
    icon: <TGLogo width="24" height="24" />
  },
  search: {
    placeholder() {
      const { locale } = useRouter()
      return SEARCH_PLACEHOLDER[locale]
    }
  },
  banner: {
    dismissible: true,
    key: BANNER_KEY,
    content() {
      const { locale } = useRouter()
      return (
        <a href={BANNER_LINK} target="_blank">{BANNER_TEXT[locale]}</a>
      )
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    toggleButton: true
  },
  toc: {
    title() {
      const { locale } = useRouter()
      return TOC_TITLE[locale]
    },
    backToTop: function BackToTop() {
      const { locale } = useRouter()
      return BACK_TO_TOP[locale]
    },
    extraContent() {
      const { locale } = useRouter()
      return (
        <a
          className="nextra-focus _text-xs _font-medium _text-gray-600 dark:_text-gray-400 hover:_text-gray-800 dark:hover:_text-gray-200 contrast-more:_text-gray-700 contrast-more:dark:_text-gray-100"
          href={TOC_L10N_LINK}
          target="_blank"
        >
          {TOC_L10N_TEXT[locale]}
        </a>
      )
    }
  },
  editLink: {
    content() {
      const { locale } = useRouter()
      return EDIT_TEXT[locale]
    }
  },
  navigation: {
    prev: true,
    next: true
  },
  gitTimestamp: function useGitTimestamp({ timestamp }) {
    const { locale } = useRouter()
    return (
      <>
        {GIT_TIMESTAMP[locale]}{' '}
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
  footer: {
    content: (
      <span style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <img src="/assets/buttons/notepad.png" alt="Made with Notepad" />
        <img src="/assets/buttons/freeware-guide.png" alt="Freeware Guide" />
        <img src="/assets/buttons/firefox.png" alt="Get Firefox" />
        <img src="/assets/buttons/linux.png" alt="Linux powered" />
        <img src="/assets/buttons/netscape.png" alt="Netscape NOW" />
      </span>
    )
  }
}