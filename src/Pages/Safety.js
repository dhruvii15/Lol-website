import React, { useEffect, useState, lazy, Suspense } from 'react';

// Lazy load components
const Header = lazy(() => import('../Component/Header'));
const Title = lazy(() => import('../Component/Title'));
const Footer2 = lazy(() => import('../Component/Footer2'));
const Loading = lazy(() => import('../Component/Loading'));
const SafetyComponent = lazy(() => import('../Component/Safety/SafetyComponent'));

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
        // Simulate loading process
        const timer = setTimeout(() => {
            setLoading(false);
        }, 10); // Loading timeout duration

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    if (loading) {
        return (
            <Suspense fallback={<div><Loading /></div>}>
                <Loading />
            </Suspense>
        );
    }

    return (
        <div>
            <Suspense fallback={<div><Loading /></div>}>
                <Header activeLink={'safety'} />
            </Suspense>
            <div className='rounded-top-5 overflow-hidden'>
                <Suspense fallback={<div><Loading /></div>}>
                    <Title title={title} title2={titles} description={descriptions} />
                </Suspense>
            </div>
            <Suspense fallback={<div><Loading /></div>}>
                <SafetyComponent activeItem={activeItem} onItemClick={handleItemClick} />
            </Suspense>
            <Suspense fallback={<div><Loading /></div>}>
                <Footer2 />
            </Suspense>
        </div>
    );
};

export default Safety;
