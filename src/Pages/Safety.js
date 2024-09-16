import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import Title from '../Component/Title';
import Footer2 from '../Component/Footer2';
import Loading from '../Component/Loading';
import SafetyComponent from '../Component/Safety/SafetyComponent';



const Safety = () => {
    const [loading, setLoading] = useState(true); 

    const [activeItem, setActiveItem] = useState(1);

    const handleItemClick = (itemNumber) => {
        setActiveItem(itemNumber);
    };

    const title1 = {
        1: 'Safety center',
        2: 'Our Guide to',
        3: 'Our Community',
        4: 'Our Safety',
        5: 'Our Resources',
        6: 'Contact Us',
    };

    const title2 = {
        1: '',
        2: 'Online Safety',
        3: 'Guidelines',
        4: 'Tools',
        5: '',
        6: '',
    };

    const description = {
        1: 'Our users safety is our priority',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
    };


    const title = title1[activeItem] || 'Safety center';
    const titles = title2[activeItem] || '';
    const descriptions = description[activeItem] || '';


    useEffect(() => {
        setTimeout(() => {
            setLoading(false); 
        }, 10); 
    }, []);

    if (loading) {
        return <Loading />; 
    }

    return (
        <div>
            <Header activeLink={'safety'}/>
            <div className='rounded-top-5 overflow-hidden'>
                <Title title={title} title2={titles} description={descriptions} />
            </div>
                <SafetyComponent activeItem={activeItem} onItemClick={handleItemClick} />
                <Footer2 />
        </div>
    );
};

export default Safety;