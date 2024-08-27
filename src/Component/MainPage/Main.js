import React, { useEffect, useRef } from 'react';
import { Container } from 'reactstrap';
import { ReactSVG } from 'react-svg';


// img
import cartoon from "../../img/cartoon.svg"
import mask1 from "../../img/mask1.svg"
import monkey from "../../img/monkey.svg"
import card1 from "../../img/card1.png"
import card2 from "../../img/card2.png"
import emoji1 from "../../img/emoji1.svg"
import emoji2 from "../../img/emoji2.svg"


const Main = () => {
    const framerContainerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX: mouseX, clientY: mouseY } = e;
            const { offsetWidth: width, offsetHeight: height } = framerContainerRef.current;

            // Calculate the center of the element
            const centerX = width / 2;
            const centerY = height / 2;

            // Calculate the movement based on mouse position
            const moveX = ((mouseX - centerX) / centerX) * 30; // Adjust multiplier for movement range
            const moveY = ((mouseY - centerY) / centerY) * 30; // Adjust multiplier for movement range

            // Use requestAnimationFrame for smooth transitions
            requestAnimationFrame(() => {
                framerContainerRef.current.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
            });
        };

        const framerContainer = framerContainerRef.current;
        framerContainer.addEventListener('mousemove', handleMouseMove);

        return () => {
            framerContainer.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div className='Main-bg BwGradual overflow-hidden'>

            <Container className='position-relative text-center px-3 py-3'>

                <div className='framer-container' ref={framerContainerRef}>
                    <div className='Main-bg2 text-center d-flex flex-column align-items-center justify-content-center'>
                        {/* <h1 className='main-text'>real</h1>
                        <h1 className='main-text'>friends</h1>
                        <h1 className='main-text'>realfun</h1> */}
                    </div>
                </div>
                <div className='d-flex pt-5'>
                    <ReactSVG src={mask1} className='d-block d-md-none' beforeInjection={(svg) => { svg.setAttribute('style', 'width: 100px; height: 100px;') }} />
                    <ReactSVG src={monkey} className='d-block d-md-none ms-auto' beforeInjection={(svg) => { svg.setAttribute('style', 'width: 100px; height: 100px;') }} />
                </div>
                <div className='d-flex pt-5'>
                    <img src={card1} alt='card1' className='d-block d-md-none rounded-1 ms-2 img-fluid' width={70} style={{ rotate: "-18deg" }} />
                    <img src={card2} alt='card2' className='d-block d-md-none ms-auto rounded-1 ms-5 me-3 img-fluid' width={70} style={{ rotate: "18deg" }} />
                </div>
                <div className='d-flex pt-5'>
                    <ReactSVG src={emoji1} className='d-block d-md-none' beforeInjection={(svg) => { svg.setAttribute('style', 'width: 100px') }} />
                    <ReactSVG src={emoji2} className='d-block d-md-none ms-auto' beforeInjection={(svg) => { svg.setAttribute('style', 'width: 100px') }} />
                </div>
                <div className='mt-5 pt-5 pt-md-5 w-100 pe-4 pe-lg-0 text-center d-flex flex-column align-items-center justify-content-center main-box'>

                    <h1 className='main-text BwGradualBold position-relative'>real
                        <img src={cartoon} alt='lol' className='position-absolute emoji-width d-none d-md-block' style={{ top: "-30px", left: "60%" }} />
                        <ReactSVG src={cartoon} className='position-absolute emoji-width d-block d-md-none' beforeInjection={(svg) => { svg.setAttribute('style', 'top: -30px; left: 60%; width: 40px;') }} />
                    </h1>
                    <h1 className='main-text BwGradualBold'>friends</h1>
                    <h1 className='main-text BwGradualBold'>realfun</h1>
                    <div className='rounded-pill fs-5 mt-3 text-white box9 common d-none d-sm-block'>
                        <div className="common1 overlay9-1"></div>
                        <div className="box9-content">
                            <div className="box9-text">Download the app!</div>
                            <div className="box9-hidden-text fw-bold pt-1">Download the app!</div>
                        </div>
                    </div>

                    <div className='border border-2 border-white rounded-5 py-2 mt-3 d-none d-sm-block' style={{ width: "35px", height: "54px" }}>
                        <p className='border border-white rounded-2 border-2 m-0 scroll-mouse mx-auto' style={{ width: "2px", height: "12px" }}></p>
                    </div>


                    <div className='rounded-pill fs-6 mt-3 text-white box9 common2 mx-auto d-block d-sm-none' style={{ width: "180px", height: "55px" }} >
                        <div className="common1 overlay9-1"></div>
                        <div className="box9-content">
                            <div className="box9-text pt-1">Download the app!</div>
                            <div className="box9-hidden-text fw-bold pt-1">Download the app!</div>
                        </div>
                    </div>

                    <div className='border border-2 border-white rounded-5 py-2 text-center mt-3 d-block d-sm-none' style={{ width: "35px", height: "54px" }}>
                        <p className='border border-white rounded-2 border-2 m-0 scroll-mouse mx-auto' style={{ width: "2px", height: "12px" }}></p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Main;
