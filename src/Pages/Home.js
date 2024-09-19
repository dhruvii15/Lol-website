import React, { useEffect, Suspense } from 'react';
import { useLoading } from '../Component/LoadingContext';

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
        setIsLoading(true);
        console.log('Loading started');
    
        const handlePageLoad = () => {
            setIsLoading(false);
            console.log('Loading finished');
        };
    
        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
    
            const fallbackTimer = setTimeout(() => {
                handlePageLoad();
            }, 1500);
    
            return () => {
                window.removeEventListener('load', handlePageLoad);
                clearTimeout(fallbackTimer);
            };
        }
    }, [setIsLoading]);

    console.log(document.readyState);

    return (
        <Suspense fallback={<div>Loading...</div>}>
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
