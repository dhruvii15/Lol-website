import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import Main from '../Component/MainPage/Main';
import About from '../Component/MainPage/About';
import Inbox from '../Component/MainPage/Inbox';
import Footer from '../Component/Footer';
import Cards from '../Component/MainPage/Cards';
import Join from '../Component/MainPage/Join';
import Loading from '../Component/Loading'; 

const Home = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        // Page load thava pachi loader hatai devano chhe
        const handlePageLoad = () => {
            setLoading(false); // Jevu page load thai jai, loader hatai devano
        };

        // Jyare window load thai jase, te event listener add kari loader hatai devano
        window.addEventListener('load', handlePageLoad);

        // Fallback: Agar page load na thai shake 5 seconds ma to loader hatai devano
        const fallbackTimer = setTimeout(() => {
            setLoading(false); // Fallback: 5 seconds pachi loader hatai do
        }, 5000);

        // Cleanup function to remove event listener and fallback timer
        return () => {
            window.removeEventListener('load', handlePageLoad);
            clearTimeout(fallbackTimer);
        };
    }, []);

    // Agar loading true hoy to tamaro loader display thase
    if (loading) {
        return <Loading />; // Loading spinner/loader display thay
    }

    // Loading false thaya pachi main content render thase
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
