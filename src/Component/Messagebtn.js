import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../Component/firebase-config';

const MessageBtn = ({ color }) => {
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
            window.snaptr('track', 'CUSTOM_EVENT_1', {
                'event_name': 'APP_REDIRECT', // Custom metadata
                'page_name': 'LOL',
                'page_url': 'Get own message!',
            });
        } else {
            console.warn('Snap Pixel (snaptr) is not available.');
        }
    
        // Facebook Pixel tracking for APP_REDIRECT
        if (window.fbq) {
            window.fbq('track', 'APP_REDIRECT', {
                page_name: 'LOL',
                page_url: 'Get own message!',
            });
        } else {
            console.warn('Facebook Pixel (fbq) is not available.');
        }
    
        // Firebase Analytics custom event for app_redirect
        logEvent(analytics, 'app_redirect', {
            event_category: 'engagement',
            event_action: 'playstore_redirect',
            page_name: 'LOL',
            page_url: window.location.href
        });
    
        // Open Play Store link
        window.open(playstore, '_blank');
    };
    
    

    return (
        <>
            <p className='py-2 m-0' style={{ fontSize: "13px", color:  color  }}>👇 <span>{count}</span> {t('tap')}</p>
            <Button className='bg-black rounded-pill w-100 border-0 py-2 mb-4 pulse mt-1' onClick={handlePlaystoreClick}>
                <p className='fs-5 text-decoration-none text-white m-0'>{t('msg')}</p>
            </Button>
        </>
    );
};

export default MessageBtn;