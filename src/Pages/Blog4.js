import React, { Suspense } from 'react';
import { Container } from 'reactstrap';
import Loading from '../Component/Loading';

// img
import image from "../img/blog4-2.jpg"
import LazyLoad from 'react-lazyload';

//  Lazy load components
const Header = React.lazy(() => import('../Component/Header'));
const MorePosts = React.lazy(() => import('../Component/MorePosts'));
const Footer2 = React.lazy(() => import('../Component/Footer2'));

const Blog4 = () => {
    return (
        <div className='BwGradual fs-5'>
            <Suspense fallback={<div><Loading /></div>}>
                <Header />
            </Suspense>
            <Container>
                <div className='position-relative text-center'>
                    <LazyLoad >
                        <img src={image} alt='LOL-Response-to-FTC-Settlement' className='img-fluid' />
                    </LazyLoad>
                    <div className='position-absolute blog-bottom'>
                        <p className='BwGradualBold px-4 rounded-3 m-0 fs-2 bg-white text-start ps-0 ms-0 ps-xl-5 ms-xl-5'>LOL Response to</p>
                    </div>
                    <div className='position-absolute bottom-0'>
                        <p className='BwGradualBold px-5 rounded-3 m-0 fs-2 bg-white text-start ps-0 ms-0 ps-xl-5 ms-xl-5'>FTC Settlement</p>
                    </div>
                </div>
                <div className='px-3 px-lg-5'>
                    <div className='pt-5'>
                        <p>After nearly two years of cooperating with the FTC’s investigation, we view this resolution as an opportunity to make NGL better than ever for our users and we think the agreement is in our best interest. While we believe many of the allegations around the youth of our user base are factually incorrect, we anticipate that the agreed upon age-gating and other procedures will now provide direction for others in our space, and hopefully improve policies generally.</p>
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

export default Blog4;
