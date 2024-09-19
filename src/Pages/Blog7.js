import React, { Suspense } from 'react';
import { Container } from 'reactstrap';

// img
import image from "../img/blog7-2.svg"

//  Lazy load components
const Header = React.lazy(() => import('../Component/Header'));
const MorePosts = React.lazy(() => import('../Component/MorePosts'));
const Footer2 = React.lazy(() => import('../Component/Footer2'));

const Blog7 = () => {
    return (
        <div className='BwGradual fs-5'>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
            </Suspense>
            <Container>
                <div className='position-relative text-center'>
                    <img src={image} alt='hidden-gems-tips-tricks-for-the-lol-app' className='img-fluid' />
                    <div className='position-absolute blog-bottom'>
                        <p className='BwGradualBold px-4 rounded-3 m-0 fs-2 bg-white text-start ps-0 ms-0 ps-xl-5 ms-xl-5'>LOL Procedures</p>
                    </div>
                    <div className='position-absolute bottom-0'>
                        <p className='BwGradualBold px-5 rounded-3 m-0 fs-2 bg-white text-start ps-0 ms-0 ps-xl-5 ms-xl-5'>For Information Requests</p>
                    </div>
                </div>
                <div className='px-3 px-lg-5'>
                    <div className='pt-5'>
                        <p>The safety of our users is extremely important to Team LOL. In order to ensure our users’ safety and the wellbeing of the community at large, we at LOL comply with law enforcement to protect users whenever it is deemed necessary.</p>
                        <div className='pt-5'>
                            <p className='BwGradualBold fs-2'>What should I do if I witness illegal activity on LOL?‍</p>
                            <p>If you see something that you believe may constitute illegal or criminal activity on LOL, please report this to our team by using the Report function in the app and by emailing our safety team a help@lolcards.link . </p>
                        </div>
                        <div className='pt-5'>
                            <p className='BwGradualBold fs-2'>What will you do with my report?</p>
                            <p>After careful consideration by our team, we may deem which authorities are best to contact and may share the activity with the appropriate channels. We will comply with law enforcement and secure the LOL community from further criminal activity by ensuring that the user is banned, and law enforcement will determine the appropriate legal action to take going forward.</p>
                        </div>
                    </div>
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

export default Blog7;
