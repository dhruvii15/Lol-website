import React from 'react';
import { Container } from 'reactstrap';
import MorePosts from '../Component/MorePosts';

// img
import image from "../img/blog4-2.svg"
import Header from '../Component/Header';
import Footer2 from '../Component/Footer2';

const Blog4 = () => {
    return (
        <div className='BwGradual fs-5'>
            <Header />
            <Container>
                <div className='position-relative text-center'>
                    <img src={image} alt='hidden-gems-tips-tricks-for-the-lol-app' className='img-fluid'/>
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
                    <MorePosts />
                </div>
            </Container>
            <Footer2 />

        </div>
    );
};

export default Blog4;
