import React, { useEffect, useRef } from 'react';

// img
import circle from "../../img/join-circle.png"
import join from "../../img/playstore.png"
import join2 from "../../img/appstore.png"
import joinBgImage from "../../img/join-bg.svg" // Import the background image

const Join = () => {
    const mainBgRef = useRef(null);

    useEffect(() => {
        const mainBgElement = mainBgRef.current;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    mainBgElement.style.backgroundImage = `url(${joinBgImage})`;
                    observer.unobserve(entry.target);
                }
            });
        });

        if (mainBgElement) {
            observer.observe(mainBgElement);
        }

        return () => {
            if (mainBgElement) {
                observer.unobserve(mainBgElement);
            }
        };
    }, []);

    return (
        <div
            className='join-bg overflow-hidden d-flex align-items-center position-relative justify-content-center'
            ref={mainBgRef} // Attach ref to this div
        >
            <div className='overflow-hidden d-flex align-items-center justify-content-center join-main'>
                <img src={circle} alt='circle' className='rotate circle-img' />
                <div className='position-absolute text-center join-child w-100'>
                    <div className='d-flex justify-content-center gap-3'>
                    <img src={join} alt='join-us' className='rounded-1 scanner-width'/>
                    <img src={join2} alt='join-us' className='rounded-1 scanner-width'/>
                    </div>
                    <h1 className='title-text BwGradualBold text-white'>Join</h1>
                    <h1 className='title-text BwGradualBold text-white'>the fun</h1>
                </div>
            </div>
        </div>
    );
};

export default Join;
