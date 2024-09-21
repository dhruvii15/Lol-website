import React, { useEffect, Suspense } from 'react';
import { useLoading } from '../Component/LoadingContext';
import Loading from '../Component/Loading';

// Lazy load components
const Header = React.lazy(() => import('../Component/Header'));
const Main = React.lazy(() => import('../Component/MainPage/Main'));
const About = React.lazy(() => import('../Component/MainPage/About'));
const Inbox = React.lazy(() => import('../Component/MainPage/Inbox'));
const Footer = React.lazy(() => import('../Component/Footer'));
const Cards = React.lazy(() => import('../Component/MainPage/Cards'));
const Join = React.lazy(() => import('../Component/MainPage/Join'));

const Home = () => {
    const { setIsLoading } = useLoading();

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const isFromSnapAd = queryParams.get('sc_referrer') === 'snapchat';
        const isFromFbAd = queryParams.get('fbclid') !== null; // Check for Facebook Click ID

        // Function to track Snap Pixel event
        const trackSnapPixelEvent = () => {
            if (window.snaptr) {
                // console.log('Snaptr is available. Sending PAGE_VIEW event...');
                window.snaptr('track', 'PAGE_VIEW', {
                    'page_name': 'user_link',
                    'page_url': window.location.href,
                    'sc_referrer': isFromSnapAd ? 'snapchat' : 'other'
                });
            } else {
                // console.warn('Snap Pixel (snaptr) is not available.');
            }
        };

        // Function to track Facebook Pixel event
        const trackFacebookPixelEvent = () => {
            if (window.fbq) {
                // console.log('Facebook Pixel is available. Sending PageView event...');
                window.fbq('track', 'PageView', {
                    page_name: 'user_link',
                    page_url: window.location.href,
                    fb_referrer: isFromFbAd ? 'facebook' : 'other'
                });
            } else {
                // console.warn('Facebook Pixel (fbq) is not available.');
            }
        };

        // Track events
        trackSnapPixelEvent();
        trackFacebookPixelEvent();

        setIsLoading(true);

        const handlePageLoad = () => {
            setIsLoading(false);
        };

        // Check if the page is already loaded
        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            // Add load event listener
            window.addEventListener('load', handlePageLoad);

            return () => {
                window.removeEventListener('load', handlePageLoad);
            };
        }

    }, [setIsLoading]);

    return (
        <Suspense fallback={<div><Loading /></div>}>
            <Header />
            <div className='bg-black overflow-hidden' style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px" }}>
                <Main />
                <About />
                <Inbox />
                <Cards />
                <Join />
                <Footer />
            </div>
        </Suspense>
    );
};

export default Home;