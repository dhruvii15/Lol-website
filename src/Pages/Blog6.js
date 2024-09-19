import React, { Suspense } from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Loading from '../Component/Loading';

// img
import image from "../img/blog6-2.jpg"
import LazyLoad from 'react-lazyload';

//  Lazy load components
const Header = React.lazy(() => import('../Component/Header'));
const MorePosts = React.lazy(() => import('../Component/MorePosts'));
const Footer2 = React.lazy(() => import('../Component/Footer2'));

const Blog6 = () => {
    return (
        <div className='BwGradual fs-5'>
            <Suspense fallback={<div><Loading /></div>}>
                <Header />
            </Suspense>
            <Container>
                <div className='position-relative text-center'>
                    <LazyLoad >
                        <img src={image} alt='A-Guide-to-Online-Privacy' className='img-fluid' />
                    </LazyLoad>
                    <div className='position-absolute bottom-0'>
                        <p className='BwGradualBold px-5 rounded-3 m-0 fs-2 bg-white text-start ps-0 ms-0 ps-xl-5 ms-xl-5'>A Guide to Online Privacy</p>
                    </div>
                </div>
                <div className='px-3 px-lg-5'>
                    <div className='pt-5'>
                        <p>Platforms for online connection like LOL offer exciting new ways to connect, share, and have fun with your friends. LOL also offers several tools to protect yourself online. While we have an extensive safety system working behind the scenes, this guide will provide you with some other practical tips to help you stay safe and make the most of your online experience.tips for staying safe</p>
                        <p className='pt-4'>Here are some practical tips you can for using LOL:</p>
                    </div>
                    <div className='pt-5'>
                        <p className='BwGradualBold fs-2'>Think before you share</p>
                        <div className='d-flex gap-3 ps-4 pt-3'>
                            <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                            <p className='m-0'> Pause and consider whether you're comfortable with everyone seeing what you're about to post.</p>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <p className='BwGradualBold fs-2'>Protect Your Personal Information</p>
                        <div className='d-flex gap-3 ps-4 pt-3'>
                            <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                            <p className='m-0'>Avoid sharing your full name, address, phone number, or other sensitive details online.</p>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <p className='BwGradualBold fs-2'>Be Kind and Respectful</p>
                        <div className='d-flex gap-3 ps-4 pt-3'>
                            <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                            <p className='m-0'>Remember that there's a real person on the other side of the screen. Treat others how you'd like to be treated.</p>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <p className='BwGradualBold fs-2'>Block and Report</p>
                        <div className='d-flex gap-3 ps-4 pt-3'>
                            <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                            <p className='m-0'>Don't hesitate to block or report users who make you feel uncomfortable or send you harmful messages.</p>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <p className='BwGradualBold fs-2'>Reach Out for Support</p>
                        <div className='d-flex gap-3 ps-4 pt-3'>
                            <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                            <p className='m-0'>The LOL Community Team is here to help you, whatever you need; contact us at help@LOLapp.com for any support.</p>
                        </div>
                    </div>

                    <p className='pt-5 fw-bold'>Our commitment to safety - At LOL, your safety is our top priority. As a result, we've implemented features like keyword filtering and reporting mechanisms to help keep our platform safe and positive. We encourage you to use these tools and to report any harmful content you encounter. If you’d like to further bolster the safety of your LOL experience, the Safety Controls available in our Settings menu offers a variety of options to help with this.</p>

                    <Suspense fallback={<div><Loading /></div>}>
                        <MorePosts />
                    </Suspense>
                </div>
            </Container>
            <Suspense fallback={<div><Loading /></div>}>
                <Footer2 />
            </Suspense>

        </div>
    );
};

export default Blog6;
