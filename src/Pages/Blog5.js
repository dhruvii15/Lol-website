import React, { Suspense } from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Loading from '../Component/Loading';

// img
import image from "../img/blog5-2.jpg"
import LazyLoad from 'react-lazyload';

//  Lazy load components
const Header = React.lazy(() => import('../Component/Header'));
const MorePosts = React.lazy(() => import('../Component/MorePosts'));
const Footer2 = React.lazy(() => import('../Component/Footer2'));

const Blog5 = () => {
    return (
        <div className='BwGradual fs-5'>
            <Suspense fallback={<div><Loading /></div>}>
                <Header />
            </Suspense>
            <Container>
                <div className='position-relative text-center'>
                    <LazyLoad >
                        <img src={image} alt='Staying-Safe-ON-LOL' className='img-fluid' />
                    </LazyLoad>
                    <div className='position-absolute blog-bottom'>
                        <p className='BwGradualBold px-4 rounded-3 m-0 fs-2 bg-white text-start ps-0 ms-0 ps-xl-5 ms-xl-5'>Staying Safe ON LOL:</p>
                    </div>
                    <div className='position-absolute bottom-0'>
                        <p className='BwGradualBold px-5 rounded-3 m-0 fs-2 bg-white text-start ps-0 ms-0 ps-xl-5 ms-xl-5'>Tips for User Safaety</p>
                    </div>
                </div>
                <div className='px-3 px-lg-5'>
                    <div className='pt-5'>
                        <p className='BwGradualBold fs-2'>We’re here for you</p>
                        <p>We made LOL as a place where you can foster meaningful and authentic connections with your friends, and we are committed to a community rooted in kindness and understanding. You should learn more about your friends, and you should get to be your authentic self, too. But what’s not OK — what’s never OK — is attacking, intimidating, or otherwise being unkind to others. Stopping this is a team effort, so here’s a rundown of how abuse is handled on LOL: how we keep users safe and what to do if you see objectionable content on the app.</p>
                    </div>
                    <div className='pt-5'>
                        <p className='BwGradualBold fs-2'>Keeping users safe</p>
                        <p>Our number one priority is keeping our users safe. That’s why we offer various ways to keep negative content at bay to make sure you have a great LOL experience. For starters, we use Hive's AI-enabled content moderation to keep our safety techniques up-to-date while helping keep our users’ inboxes free of negativity. We also have a dedicated, 24/7 safety team constantly working to combat abuse, bullying, and harassment on LOL. Email help@lolcards.link to get in touch with us; we’re here to help you!</p>
                    </div>
                    <div className='pt-5'>
                        <p className='BwGradualBold fs-2'>See something, say something</p>
                        <p>What should you do if you see a friend receiving abusive messages on LOL? This is where the power of community comes in. If you see something, say something! Report abuse by emailing our safety team right away; get in touch with us at help@lolcards.link and we can review the situation and take the necessary steps to ensure all users’ safety. </p>
                    </div>
                    <div className='pt-5'>
                        <p className='BwGradualBold fs-2'>I feel uncomfortable as a result of an LOL message; what do I do?</p>
                        <p>We at LOL do our best to keep our incredible community safe. However, sometimes a message can still leave you feeling threatened, unsafe, or uneasy, and you may want to take additional measures to ensure your safety and wellbeing. If you receive a message on LOL that leaves you feeling this way, here are some steps to take to keep you safe:</p>
                    </div>
                    <div className='pt-5 d-flex gap-3 ps-4'>
                        <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pt-4' /></p>
                        <div>
                            <p className='m-2 BwGradualBold fs-3'>Block the message sender</p>
                            <p className='ps-2'>Head to the “Report” menu and Block the user from your inbox permanently.</p>
                        </div>
                    </div>
                    <div className='pt-3 d-flex gap-3 ps-4'>
                        <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pt-4' /></p>
                        <div>
                            <p className='m-2 BwGradualBold fs-3'>Report the message to Team LOL</p>
                            <p className='ps-2'>Our number one priority is keeping our users safe. That’s why we offer various ways to keep negative content at bay to make sure you have a great LOL experience.</p>
                        </div>
                    </div>
                    <div className='pt-3 d-flex gap-3 ps-4'>
                        <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pt-4' /></p>
                        <div>
                            <p className='m-2 BwGradualBold fs-3'>Find resources that can help you feel comfortable</p>
                            <p className='ps-2'>Visit "Our Resources" to find help with getting back to feeling good!</p>
                        </div>
                    </div>
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

export default Blog5;
