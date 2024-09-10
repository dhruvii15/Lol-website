import React, { useRef, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import LazyLoad from 'react-lazyload';
import { ReactComponent as Cards } from '../../img/inbox-cards.svg';

// img
import inboxcircle from "../../img/inbox-circle.png";
import person from "../../img/inbox-person.png";
import inboxBgImage from "../../img/inbox-bg.svg"; // Import your background image here

const Inbox = () => {
    const inboxBgRef = useRef(null);

    useEffect(() => {
        const inboxBgElement = inboxBgRef.current;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    inboxBgElement.style.backgroundImage = `url(${inboxBgImage})`;
                    observer.unobserve(entry.target);
                }
            });
        });

        if (inboxBgElement) observer.observe(inboxBgElement);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={inboxBgRef} className='inbox-bg overflow-hidden d-flex justify-content-center align-items-center'>
            <Container>
                <Row className='d-flex justify-content-center align-items-center my-5' style={{ padding: "0 0 50px 0", minHeight: "500px" }}>
                    <Col xs={12} lg={3} className='text-center mt-3'>
                        <h1 className='m-0 BwGradualBold text-white inbox-text'>
                        flood your inbox of your friends & strangers
                        </h1>
                    </Col>
                    <Col xs={12} lg={6} className='position-relative text-center overflow-hidden mt-3 h-100'>
                        <LazyLoad height={300} offset={100}>
                            <img src={inboxcircle} alt='inbox circle' className='rotate img-fluid rotate-img' />
                        </LazyLoad>
                        <div className='position-absolute person-img w-100 text-center' style={{ bottom: "-20px" }}>
                            <LazyLoad height={300} offset={100}>
                                <img src={person} alt='inbox person' className='img-fluid' />
                            </LazyLoad>
                        </div>
                    </Col>
                    <Col xs={12} lg={3} className='text-center mt-3'>
                        <LazyLoad height={300} offset={100}>
                            <Cards alt='cards' className='img-fluid inbox-cards' />
                        </LazyLoad>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Inbox;
