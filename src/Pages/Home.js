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
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Header />
            <div className='bg-black about-bg2 overflow-hidden' style={{borderTopLeftRadius:"40px" , borderTopRightRadius:"40px"}}>
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
