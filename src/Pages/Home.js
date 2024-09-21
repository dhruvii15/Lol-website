import React, { useEffect, Suspense } from 'react';
import { useLoading } from '../Component/LoadingContext';
import Loading from '../Component/Loading';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../Component/firebase-config';

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
    
        // Track Snap Pixel event
        const trackSnapPixelEvent = () => {
            if (window.snaptr) {
                window.snaptr('track', 'PAGE_VIEW', {
                    'page_name': 'main_link',
                    'page_url': window.location.href,
                    'sc_referrer': isFromSnapAd ? 'snapchat' : 'other'
                });
            } else {
                console.warn('Snap Pixel (snaptr) is not available.');
            }
        };
    
        // Track Facebook Pixel event
        const trackFacebookPixelEvent = () => {
            if (window.fbq) {
                window.fbq('track', 'PageView', {
                    page_name: 'main_link',
                    page_url: window.location.href,
                    fb_referrer: isFromFbAd ? 'facebook' : 'other'
                });
            } else {
                console.warn('Facebook Pixel (fbq) is not available.');
            }
        };
    
        // Call tracking functions
        trackSnapPixelEvent();
        trackFacebookPixelEvent();
    
        // Log page view event with Firebase Analytics
        logEvent(analytics, 'page_view', {
            page_title: 'main_link',
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    
        // Set the loading state to true initially
        setIsLoading(true);
    
        const handlePageLoad = () => {
            setIsLoading(false);
        };
    
        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            // Add an event listener for page load
            window.addEventListener('load', handlePageLoad);
    
            // Cleanup event listener on component unmount
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