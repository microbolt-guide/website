import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const hueRef = useRef(0) // Initial hue value
    const directionRef = useRef(1) // Initial direction
    const intervalIdRef = useRef() // Ref to store interval ID

    useEffect(() => {
        const handleRouteChange = (url) => {
            const styles = {
                '/system': { hue: '204', sat: '100%' },
                '/bitcoin': { hue: '33', sat: '94%' },
                '/lightning': { hue: '52', sat: '98%' },
                '/faq': { hue: '5', sat: '97%' },
            }

            // Clear any existing interval
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
                intervalIdRef.current = null;
            }

            if (url === '/' || url === '/en-US') {
                intervalIdRef.current = setInterval(() => {
                    hueRef.current += directionRef.current;
                    if (hueRef.current > 360) { // Upper limit
                        directionRef.current = -1;
                    } else if (hueRef.current < 0) { // Lower limit
                        directionRef.current = 1;
                    }
                    document.documentElement.style.setProperty(
                        '--nextra-primary-hue',
                        hueRef.current
                    );
                    document.documentElement.style.setProperty(
                        '--nextra-primary-saturation',
                        '100%'
                    );
                }, 30); // Change hue every 100ms
            } else {
                for (const [route, style] of Object.entries(styles)) {
                    if (url.includes(route)) {
                        document.documentElement.style.setProperty(
                            '--nextra-primary-hue',
                            style.hue
                        );
                        document.documentElement.style.setProperty(
                            '--nextra-primary-saturation',
                            style.sat
                        );
                        break;
                    }
                }
            }
        }

        // Call handleRouteChange immediately with the current URL
        handleRouteChange(router.pathname, router.locale)

        // When the component is mounted, subscribe to router events
        router.events.on('routeChangeComplete', (url) => handleRouteChange(url, router.locale))

        // If the component is unmounted, unsubscribe from the event
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
            // Clear any existing interval when the component is unmounted
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        }
    }, [router.events, router.pathname, router.locale])

    return <Component {...pageProps} />
}