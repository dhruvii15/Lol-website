import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import LazyLoad from 'react-lazyload';

// img
import spinner from "../../img/spinner.svg";
import point from "../../img/point.svg";
import cards1 from "../../img/cards1.png";
import cards2 from "../../img/cards2.png";
import cards3 from "../../img/cards3.png";
import cards4 from "../../img/cards4.jpg";
import cards5 from "../../img/cards5.png";
import cards6 from "../../img/cards6.png";
import cards7 from "../../img/cards7.jpg";

// Function to preload images
const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const Cards = () => {
    const [isInView, setIsInView] = useState(false);
    const cardsRef = useRef(null);

    useEffect(() => {
        const currentRef = cardsRef.current;

        // Preload all images
        const imagesToPreload = [spinner, point, cards1, cards2, cards3, cards4, cards5, cards6, cards7];
        imagesToPreload.forEach((image) => preloadImage(image));

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                threshold: 0.1
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div className='cards-bg overflow-hidden position-relative' ref={cardsRef} style={{ maxWidth: "2500px", margin: "auto" }}>
            <Container className='h-100 '>
                <Row className='d-flex justify-content-center align-items-center h-100'>
                    <Col xs={12} lg={4} className='mt-3 p-0 m-0 text-center text-lg-start d-flex justify-content-center align-items-center'>
                        <h1 className='cards-text BwGradualBold about-text'>
                            get to <br /> know
                        </h1>
                    </Col>
                    <Col xs={12} lg={4} className='text-center overflow-hidden mt-3 px-3 position-relative p-0 py-5'>
                        <LazyLoad height={120} offset={100}>
                            <img src={spinner} alt='spin' className='rotate2 img-fluid' loading="lazy" />
                        </LazyLoad>
                        <div className='position-absolute pointer-position'>
                            <img src={point} alt='point' loading="lazy" />
                        </div>
                    </Col>
                    <Col xs={12} lg={4} className='mt-3 p-0 m-0 text-center text-lg-start d-flex justify-content-center align-items-center'>
                        <h1 className='cards-text BwGradualBold about-text'>
                            your<br /> friends
                        </h1>
                    </Col>
                </Row>
            </Container>

            {/* Lazy load each image */}
            <LazyLoad height={120} offset={100}>
                <div className={`${isInView ? 'cards1' : ''}`}>
                    <img src={cards1} alt='cards1' width={120} className='rounded-1 img-fluid' loading="lazy" />
                </div>
            </LazyLoad>
            <LazyLoad height={120} offset={100}>
                <div className={`${isInView ? 'cards2' : ''}`}>
                    <img src={cards2} alt='cards2' width={120} className='rounded-1' style={{ rotate: "-15deg" }} loading="lazy" />
                </div>
            </LazyLoad>
            <LazyLoad height={120} offset={100}>
                <div className={`${isInView ? 'cards3' : ''}`}>
                    <img src={cards3} alt='cards3' width={120} className='rounded-1' style={{ rotate: "30deg" }} loading="lazy" />
                </div>
            </LazyLoad>
            <LazyLoad height={120} offset={100}>
                <div className={`${isInView ? 'cards4' : ''}`}>
                    <img src={cards4} alt='cards4' width={120} className='rounded-1' style={{ rotate: "60deg" }} loading="lazy" />
                </div>
            </LazyLoad>
            <LazyLoad height={120} offset={100}>
                <div className={`${isInView ? 'cards5' : ''}`}>
                    <img src={cards5} alt='cards5' width={120} className='rounded-1' style={{ rotate: "-120deg" }} loading="lazy" />
                </div>
            </LazyLoad>
            <LazyLoad height={120} offset={100}>
                <div className={`${isInView ? 'cards6' : ''}`}>
                    <img src={cards6} alt='cards6' width={120} className='rounded-1' loading="lazy" />
                </div>
            </LazyLoad>
            <LazyLoad height={120} offset={100}>
                <div className={`${isInView ? 'cards7' : ''}`}>
                    <img src={cards7} alt='cards7' width={120} className='rounded-1' style={{ rotate: "-20deg" }} loading="lazy" />
                </div>
            </LazyLoad>
        </div>
    );
};

export default Cards;
