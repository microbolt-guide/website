import { useEffect, useRef, useMemo } from 'react'
import { useRouter } from 'nextra/hooks'

export default function MyApp({ Component, pageProps }) {
  const { route, events } = useRouter()
  const hueRef = useRef(0) // Initial hue value
  const intervalIdRef = useRef() // Ref to store interval ID

  const styles = useMemo(() => ({
    '/system': { hue: '204', sat: '100%' },
    '/bitcoin': { hue: '34', sat: '93%' },
    '/ashigaru': { hue: '6', sat: '100%' },
    '/lightning': { hue: '52', sat: '98%' },
    '/liquid': { hue: '172', sat: '76%' },
    '/darkirc': { hue: '0', sat: '0%' },
    '/nostr': { hue: '281', sat: '58%' },
  }), [])

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Clear any existing interval
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }

      const matchingStyle = Object.entries(styles).find(([route, style]) => url.includes(route));

      if (!matchingStyle) {
        intervalIdRef.current = setInterval(() => {
          hueRef.current++;
          if (hueRef.current > 360) { // Upper limit
            hueRef.current = 0; // Reset to lower limit
          }
          document.documentElement.style.setProperty(
            '--nextra-primary-hue',
            hueRef.current
          );
          document.documentElement.style.setProperty(
            '--nextra-primary-saturation',
            '100%'
          );
        }, 30); // Change hue every 30ms
      } else {
        const [, style] = matchingStyle;
        document.documentElement.style.setProperty(
          '--nextra-primary-hue',
          style.hue
        );
        document.documentElement.style.setProperty(
          '--nextra-primary-saturation',
          style.sat
        );
      }
    }

    // Call handleRouteChange immediately with the current URL
    handleRouteChange(route)

    // When the component is mounted, subscribe to router events
    events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe from the event
    return () => {
      events.off('routeChangeComplete', handleRouteChange)
      // Clear any existing interval when the component is unmounted
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current)
      }
    }
  }, [events, route, styles])

  return <Component {...pageProps} />
}