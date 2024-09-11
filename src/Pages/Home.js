import React, { useEffect } from 'react';
import { useLoading } from '../Component/LoadingContext';
import Header from '../Component/Header';
import Main from '../Component/MainPage/Main';
import About from '../Component/MainPage/About';
import Inbox from '../Component/MainPage/Inbox';
import Footer from '../Component/Footer';
import Cards from '../Component/MainPage/Cards';
import Join from '../Component/MainPage/Join';

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
        <>
            <Header />
            <div className='bg-black overflow-hidden' style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px" }}>
                <Main />
                <About />
                <Inbox />
                <Cards />
                <Join />
                <Footer />
            </div>
        </>
    );
};

export default Home;