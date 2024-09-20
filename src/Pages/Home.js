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

        // Snap Pixel tracking for VIEW_CONTENT
        if (isFromSnapAd && window.snaptr && typeof window.snaptr.tracked === 'undefined') {
            console.log('Snaptr is available and user is from Snap ad. Sending VIEW_CONTENT event...');
            window.snaptr('track', 'VIEW_CONTENT', {
                'page_name': 'user_link',
                'page_url': window.location.href,
                'sc_referrer': 'snapchat'
            });
            window.snaptr.tracked = true; // Prevents multiple calls
        } else if (!window.snaptr) {
            console.warn('Snap Pixel (snaptr) is not available.');
        } else if (!isFromSnapAd) {
            console.log('User is not from a Snap ad. Skipping Snap Pixel tracking.');
        }

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
