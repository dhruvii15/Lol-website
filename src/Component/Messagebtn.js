import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';

const MessageBtn = () => {
    const [count, setCount] = useState(128);
    const { t } = useTranslation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + (Math.random() > 0.5 ? 1 : 2));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handlePlaystoreClick = () => {
        const playstore = 'https://play.google.com/store/apps/details?id=com.lol.android';
    
        // Snapchat Pixel tracking for APP_REDIRECT
        if (window.snaptr) {
            // console.log('Snaptr is available. Sending APP_REDIRECT event...');
            window.snaptr('track', 'CUSTOM_EVENT_1', {
                'event_name': 'APP_REDIRECT', // You can add custom metadata like this
                'page_name': 'LOL',
                'page_url': 'Get own message!',
            });
        } else {
            // console.log('Snap Pixel (snaptr) is not available.');
        }
    
        // Facebook Pixel tracking for APP_REDIRECT
        if (window.fbq) {
            // console.log('Facebook Pixel is available. Sending APP_REDIRECT event...');
            window.fbq('track', 'APP_REDIRECT', {
                page_name: 'LOL',
                page_url: 'Get own message!',
            });
        } else {
            // console.log('Facebook Pixel (fbq) is not available.');
        }
    
        // Open Play Store link
        window.open(playstore, '_blank');
    };
    

    return (
        <>
            <p className='py-2 m-0' style={{ fontSize: "12px", color: "#D9D9D9" }}>👇 <span>{count}</span> {t('tap')}</p>
            <Button className='bg-black rounded-pill w-100 border-0 py-2 mb-4 pulse mt-1' onClick={handlePlaystoreClick}>
                <p className='fs-5 text-decoration-none text-white m-0'>{t('msg')}</p>
            </Button>
        </>
    );
};

export default MessageBtn;