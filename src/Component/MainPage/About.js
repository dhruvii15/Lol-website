import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { ReactSVG } from 'react-svg';

// img
import mainimg from "../../img/aboutmain.svg"
import aboutleft from "../../img/aboutleft.svg"
import aboutright from "../../img/aboutright.svg"
import lol from "../../img/logo2.png"
import about1 from "../../img/about.png"


const About = () => {
    return (
        <>
            <Container id='aboutUsSection' className='overflow-hidden'>
                <div className='text-center BwGradual about-padding postion-absolute'>
                    <Row className='ps-0 ps-lg-5 ms-0 ms-xl-5'>
                        <Col xs={12} lg={9} className='ps-0 ps-xl-5 ms-0 ms-lg-5 order-2 order-lg-1'>
                            <div className='pb-3'>
                                <h1 className='about-text ps-0 ps-xl-5 m-0 BwGradualBold'>Test how much your <br></br>
                                    friend knows you.</h1>
                                <svg width="280" height="28" viewBox="0 0 354 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='ms-xl-5 ms-0'>
                                    <path d="M4.28027 17.3238C17.8945 13.5864 31.4964 9.84914 38.3528 7.89254C45.2091 5.93595 45.2953 5.77107 42.1564 8.3652C39.0175 10.9593 32.6412 16.3125 29.5023 19.0275C26.3634 21.7426 26.4619 21.8305 41.0608 19.2364C55.6721 16.6423 84.7839 11.377 99.346 8.66199C113.908 5.94694 113.908 5.77107 106.818 8.61802C99.7276 11.465 85.5471 17.3238 78.4569 20.3466C71.3667 23.3584 71.3667 23.5343 95.5916 20.2587C119.804 16.983 168.242 10.2778 192.467 6.91425C216.679 3.56166 216.679 3.56166 212.691 6.95821C208.691 10.3548 200.702 17.1589 196.701 20.5554C192.701 23.952 192.701 23.952 209.405 21.7426C226.108 19.5332 259.504 15.1144 276.208 12.773C292.912 10.4317 292.912 10.1789 291.865 11.8827C290.819 13.5864 288.727 17.2358 287.68 19.0605C286.634 20.8852 286.634 20.8852 297.146 19.786C307.658 18.6868 328.695 16.4774 349.72 14.268" stroke="white" stroke-width="8" stroke-miterlimit="2.61313" stroke-linecap="round" />
                                </svg>

                            </div>
                            <h1 className='w-75 text-white mx-auto m-0 ps-0 ps-xl-5' style={{ fontWeight: "400", fontSize: "40px" }}>A new way to share.</h1>
                            <h1 className='text-white mx-auto ps-0 ps-xl-5' style={{ fontWeight: "400", fontSize: "40px" }}> your question's link on IG & snapchat</h1>
                        </Col>
                        <Col className='about-bg order-1 order-lg-2 animation'> </Col>
                    </Row>
                </div>
                <div className='py-5'>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col xs={12} lg={4} className='p-0 text-center px-5 mt-3'>
                            {/* <div id='1' className='bg-white rounded-3 position-relative w-100 animation text-start p-4' style={{ height: "230px" }}>
                                <svg width="46" height="62" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg" className='position-absolute d-none d-lg-block bottom-0' style={{ right: "-45px" }}>
                                    <path d="M55.5112 36.4104C4.25433 28.0959 0.895752 29.398 0.89576 71.8349L0.89576 0.986323L55.5112 36.4104Z" fill="white" />
                                </svg>
                                <p className='fs-5 BwGradual fw-bold'>Who We are?</p>
                                <p className='BwGradual'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> */}
                            <img id='2' alt="animation" src={about1} className='animation img-fluid'/>

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
                            <ReactSVG src={mainimg} className='img-fluid mx-auto' beforeInjection={(svg) => { svg.setAttribute('style', 'width: 400px') }} />
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