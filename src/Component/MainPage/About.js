import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// img
import mainimg from "../../img/aboutmain.svg"
import aboutleft from "../../img/aboutleft.svg"
import aboutright from "../../img/aboutright.svg"
import lol from "../../img/logo2.png"
import { ReactSVG } from 'react-svg';


const About = () => {
    return (
        <>
            <Container id='aboutUsSection' className='overflow-hidden'>
                <div className='text-center BwGradual about-padding postion-absolute'>
                    <Row className='ps-0 ps-lg-5 ms-0 ms-xl-5'>
                        <Col xs={12} lg={9} className='ps-0 ps-xl-5 ms-0 ms-lg-5 order-2 order-lg-1'>
                        <div>
                            <h1 className='about-text fw-bold ps-0 ps-xl-5 m-0'>About us</h1>
                            <svg width="140" height="23" viewBox="0 0 249 23" fill="none" xmlns="http://www.w3.org/2000/svg" className='ms-xl-5 ms-0'>
                                <path d="M5 13.9833C14.4166 11.3127 23.8247 8.64205 28.5671 7.2439C33.3095 5.84575 33.3691 5.72793 31.198 7.58165C29.0269 9.43538 24.6166 13.2607 22.4454 15.2008C20.2743 17.1409 20.3425 17.2038 30.4402 15.35C40.5465 13.4963 60.6824 9.73386 70.7546 7.79373C80.8268 5.8536 80.8268 5.72793 75.9227 7.76231C71.0185 9.7967 61.2103 13.9833 56.3061 16.1434C51.402 18.2956 51.402 18.4212 68.1578 16.0805C84.9051 13.7398 118.408 8.94838 135.164 6.54482C151.911 4.14912 151.911 4.14912 149.153 6.57624C146.386 9.00337 140.86 13.8655 138.093 16.2926C135.326 18.7197 135.326 18.7197 146.879 17.1409C158.433 15.5621 181.532 12.4045 193.086 10.7314C204.639 9.05835 204.639 8.87769 203.916 10.0952C203.192 11.3127 201.744 13.9205 201.021 15.2243C200.297 16.5282 200.297 16.5282 207.568 15.7428C214.839 14.9573 229.39 13.3785 243.932 11.7997" stroke="white" stroke-width="8.52461" stroke-miterlimit="2.61313" stroke-linecap="round" />
                            </svg>
                        </div>
                            <h1 className='w-75 text-white mx-auto m-0 ps-0 ps-xl-5' style={{ fontWeight: "600", fontSize: "40px" }}>A new way to known</h1>
                            <h1 className='w-75 text-white mx-auto ps-0 ps-xl-5' style={{ fontWeight: "600", fontSize: "40px" }}>Annonymous</h1>
                        </Col>
                        <Col className='about-bg order-1 order-lg-2 animation'> </Col>
                    </Row>
                </div>
                <div className='py-5'>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col xs={12} lg={4} className='p-0 text-center px-5 mt-3'>
                            <div id='1' className='bg-white rounded-3 position-relative w-100 animation text-start p-4' style={{ height: "230px" }}>
                                <svg width="46" height="62" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg" className='position-absolute d-none d-lg-block bottom-0' style={{ right: "-45px" }}>
                                    <path d="M55.5112 36.4104C4.25433 28.0959 0.895752 29.398 0.89576 71.8349L0.89576 0.986323L55.5112 36.4104Z" fill="white" />
                                </svg>
                                <p className='fs-5 BwGradual fw-bold'>Who We are?</p>
                                <p className='BwGradual'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <ReactSVG id='2' src={aboutleft} className='animation' />

                            <div id='3' className='bg-white rounded-3 position-relative w-100 animation text-start p-4' style={{ height: "230px" }}>
                                <svg width="56" height="72" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg" className='position-absolute d-none d-lg-block top-0' style={{ right: "-50px" }}>
                                    <path d="M55.5112 35.6814C4.25433 43.9959 0.895753 42.6938 0.895759 0.256862L0.895758 71.1055L55.5112 35.6814Z" fill="white" />
                                </svg>
                                <p className='fs-5 BwGradual fw-bold'>Our Goal</p>
                                <p className='BwGradual'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </Col>

                        <Col xs={12} lg={4} className='p-0 text-center mt-3'>
                            <ReactSVG src={mainimg} className='img-fluid mx-auto' beforeInjection={(svg) => {svg.setAttribute('style', 'width: 400px')}}  />
                            <h1 className='about-text BwGradualBold'>Do you</h1>
                            <h1 className='about-text BwGradualBold'>Love the LOL app?</h1>
                        </Col>

                        <Col xs={12} lg={4} className='p-0 text-center px-5 mt-3'>
                            <div id='4' className='bg-white rounded-3 position-relative w-100 animation text-start p-4' style={{ height: "230px" }}>
                                <svg width="56" height="72" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg" className='position-absolute d-none d-lg-block bottom-0' style={{ left: "-50px" }}>
                                    <path d="M0.93457 36.4104C52.1915 28.0959 55.55 29.398 55.55 71.8349L55.55 0.986323L0.93457 36.4104Z" fill="white" />
                                </svg>
                                <p className='fs-5 BwGradual fw-bold'><img src={lol} alt='LOL' width={80} /></p>
                                <p className='BwGradual'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <ReactSVG id='5' src={aboutright} className='animation' />

                            <div id='6' className='bg-white rounded-3 position-relative w-100 animation text-start p-4' style={{ height: "230px" }}>
                                <svg width="56" height="72" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg" className='position-absolute d-none d-lg-block top-0' style={{ left: "-50px" }}>
                                    <path d="M0.93457 35.6814C52.1915 43.9959 55.55 42.6938 55.55 0.256858L55.55 71.1055L0.93457 35.6814Z" fill="white" />
                                </svg>
                                <p className='fs-5 BwGradual fw-bold'>Our Community</p>
                                <p className='BwGradual'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default About;