import React, { Suspense } from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

// img
import image from "../img/blog3.svg"

//  Lazy load components
const Header = React.lazy(() => import('../Component/Header'));
const MorePosts = React.lazy(() => import('../Component/MorePosts'));
const Footer2 = React.lazy(() => import('../Component/Footer2'));

const Blog3 = () => {
    return (
        <div className='BwGradual fs-5'>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
            </Suspense>
            <Container>
                <div className='position-relative text-center'>
                    <img src={image} alt='hidden-gems-tips-tricks-for-the-lol-app' className='img-fluid' />
                    <div className='position-absolute blog-bottom'>
                        <p className='BwGradualBold px-4 rounded-3 m-0 fs-2 bg-white text-start ps-0 ms-0 ps-xl-5 ms-xl-5'>Announcing New</p>
                    </div>
                    <div className='position-absolute bottom-0'>
                        <p className='BwGradualBold px-5 rounded-3 m-0 fs-2 bg-white text-start ps-0 ms-0 ps-xl-5 ms-xl-5'>Features and user Controls</p>
                    </div>
                </div>
                <div className='px-3 px-lg-5'>
                    <div className='pt-5'>
                        <p>As LOL has rapidly grown in popularity as a fun Q&A games and messaging app, we have introduced a number of new features and updates to make the LOL experience better than ever.</p>
                        <p className='pt-3'>We created LOL as a place to create and foster meaningful and authentic social connections, and we are committed to cultivating a community rooted in kindness and understanding. We also take our responsibility to protect the community seriously, and we are constantly improving LOL to stay up-to-date with an ever-changing online world.</p>
                    </div>

                    <div className='pt-5'>
                        <p className='BwGradualBold fs-2'>Here’s what’s new: </p>
                        <div className='d-flex gap-3 ps-4 pt-3'>
                            <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                            <p className='m-0'><b className='BwGradualBold'>LOL verification: </b> We are now exclusively available to users over 18 and will require your birth date before creating an account.</p>
                        </div>
                        <div className='d-flex gap-3 ps-4 pt-3'>
                            <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                            <p className='m-0'><b className='BwGradualBold'>Team LOL messages: </b> Messages from Team LOL will now be clearly labeled and marked with a different color in your inbox – so you can more easily tell which messages are from us, and which are from your friends. You can also opt out of receiving these messages in your settings at any time.</p>
                        </div>
                        <div className='d-flex gap-3 ps-4 pt-3'>
                            <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                            <p className='m-0'><b className='BwGradualBold'>Updates to LOL Pro: </b> We have made it easier to manage your subscription from the LOL app. The terms of LOL Pro are more clear before you subscribe, and you can cancel at any time.</p>
                        </div>
                    </div>

                    <div className='pt-5'>
                        <p className='BwGradualBold fs-2'>User controls: </p>
                        <div className='d-flex gap-3 ps-4 pt-3'>
                            <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                            <p className='m-0'><b className='BwGradualBold'>Block users: </b> You now have more control over which users can send messages to you.</p>
                        </div>
                        <div className='d-flex gap-3 ps-4 pt-3'>
                            <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                            <p className='m-0'><b className='BwGradualBold'>Pause my link: </b> You can stop receiving messages at your LOL link for any chosen amount of time</p>
                        </div>
                        <div className='d-flex gap-3 ps-4 pt-3'>
                            <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                            <p className='m-0'><b className='BwGradualBold'>Advanced Message Filtering: </b> You can choose to have our content moderation filter prevent even more messages from reaching your inbox.</p>
                        </div>
                    </div>

                    <p className='pt-5 fw-bold'>As always, we do not tolerate bullying, harassment, or illegal activity, and encourage users to report messages and users who are violating our Community Guidelines or Terms of Service. It’s easy to report: Simply locate the message, tap on the Report button (⚠), select your Report reason, and tap “Get help from Safety Team.” This will immediately flag the message for review by LOL's Safety Team.</p>
                    <p className='pt-4 fw-bold'>By reporting messages that you deem harmful, you play a crucial role in maintaining a safe and respectful environment on LOL. Your actions help protect yourself and other users from harassment and bullying. Learn more at our Safety Center.</p>
                    <p className='pt-4 fw-bold'>We see LOL as an app where you can show up authentically, deepen your personal connections, and have genuine fun with your friends. We’re excited to see our community put these new features to good use.</p>
                    <Suspense fallback={<div>Loading...</div>}>
                        <MorePosts />
                    </Suspense>
                </div>
            </Container>
            <Suspense fallback={<div>Loading...</div>}>
                <Footer2 />
            </Suspense>

        </div>
    );
};

export default Blog3;
