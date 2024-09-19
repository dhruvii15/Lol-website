import React, { Suspense } from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

// img
import { ReactComponent as Image } from "../img/blog1-2.svg"

//  Lazy load components
const Header = React.lazy(() => import('../Component/Header'));
const MorePosts = React.lazy(() => import('../Component/MorePosts'));
const Footer2 = React.lazy(() => import('../Component/Footer2'));

const Blog1 = () => {
    return (
        <div className='BwGradual fs-5'>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
            </Suspense>
            <Container>
                <div className='position-relative text-center'>
                    <Image alt='hidden-gems-tips-tricks-for-the-lol-app' className='img-fluid' />
                    <div className='position-absolute blog-bottom'>
                        <p className='BwGradualBold px-4 rounded-3 m-0 fs-2 bg-white text-start ps-0 ms-0 ps-xl-5 ms-xl-5'>Hidden Gems: Tips &</p>
                    </div>
                    <div className='position-absolute bottom-0'>
                        <p className='BwGradualBold px-5 rounded-3 m-0 fs-2 bg-white text-start ps-0 ms-0 ps-xl-5 ms-xl-5'>Tricks for the LOL App</p>
                    </div>
                </div>
                <div className='px-3 px-lg-5'>
                    <div className='pt-5'>
                        <p>All of our users know the best way to traditionally use LOL; sharing your LOL link with your friends to receive prompts from fun games, strengthening your friendships and deepening your connections. But did you know about some other ways that you can use LOL to get the most of your experience in the app? Keep reading to find out tips and tricks straight from the LOL team to help you maximize the fun of LOL!</p>
                    </div>
                    <div className='pt-5'>
                        <p className='BwGradualBold fs-2'>Use your link anywhere</p>
                        <p>While the LOL app offers a variety of social media platforms to which you can share your link, your inbox will work anywhere you place it as a tappable link. In order to use it in other places, just tap "copy link" under the game that you want to use, and paste it to your preferred destination. As long as the destination allows linking, your friends will be able to tap your LOL link and send you messages!</p>
                    </div>
                    <div className='pt-5'>
                        <p className='BwGradualBold fs-2'>Make your own games</p>
                        <p>While the NGL app offers a variety of social media platforms to which you can share your link, your inbox will work anywhere you place it as a tappable link. In order to use it in other places, just tap "copy link" under the game that you want to use, and paste it to your preferred destination. As long as the destination allows linking, your friends will be able to tap your NGL link and send you messages!</p>
                    </div>
                    <div className='pt-5'>
                        <p className='BwGradualBold fs-2'>Customize your replies</p>
                        <p>We offer a few different ways for users to customize their replies to LOL messages, such as:</p>
                    </div>
                    <div className='d-flex gap-3 ps-4 pt-3'>
                        <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                        <p className='m-0'><b className='BwGradualBold'> Color Changing </b> - When you receive a message, tap the color picker circle under the message text in order to change the color of your reply image.</p>
                    </div>
                    <div className='d-flex gap-3 ps-4 pt-3'>
                        <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                        <p className='m-0'><b className='BwGradualBold'> Photo Replies </b> - When you receive a message, tap the Camera logo under the message text in order to reply to the message with a photo background.</p>
                    </div>
                    <div className='d-flex gap-3 ps-4 pt-3'>
                        <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                        <p className='m-0'><b className='BwGradualBold'> Pick a Profile Pic </b> - In order to change your profile pic on LOL, just tap the image above the prompt text ("ask me anything!") and a prompt will appear allowing you to upload a new profile picture.</p>
                    </div>
                    <p className='pt-5 fw-bold'>No matter how you choose to share your LOL link, the app offers a variety of ways to customize your in-app experience and have the most fun possible.</p>

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

export default Blog1;
