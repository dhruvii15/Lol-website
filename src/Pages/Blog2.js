import React, { Suspense } from 'react';
import { Container } from 'reactstrap';
import Loading from '../Component/Loading';
import LazyLoad from 'react-lazyload';

// img
import image from "../img/blog2-2.jpg"

//  Lazy load components
const Header = React.lazy(() => import('../Component/Header'));
const MorePosts = React.lazy(() => import('../Component/MorePosts'));
const Footer2 = React.lazy(() => import('../Component/Footer2'));

const Blog2 = () => {
    return (
        <div className='BwGradual fs-5'>
            <Suspense fallback={<div><Loading /></div>}>
                <Header />
            </Suspense>
            <Container>
                <div className='position-relative text-center'>
                    <LazyLoad >
                        <img src={image} alt='Uplift Your Community' className='img-fluid' />
                    </LazyLoad>
                    <div className='position-absolute blog-bottom'>
                        <p className='BwGradualBold px-4 rounded-3 m-0 fs-2 bg-white text-start ps-0 ms-0 ps-xl-5 ms-xl-5'>Uplift Your Community</p>
                    </div>
                    <div className='position-absolute bottom-0'>
                        <p className='BwGradualBold px-5 rounded-3 m-0 fs-2 bg-white text-start ps-0 ms-0 ps-xl-5 ms-xl-5'>Getting Involved IEL</p>
                    </div>
                </div>
                <div className='px-3 px-lg-5'>
                    <div className='pt-5'>
                        <p>LOL was built in order to foster community amongst its users. In an increasiLOLy online world, it's easy to feel lonely; digital connection doesn't provide the same depth of community as getting to connect in-person. That's why it's essential to give back to your community. Community involvement is essential for creating a sense of collective belonging and connection. Whether you're new to your neighborhood or a long-time resident, there are plenty of ways to get involved and make a positive impact.</p>
                        <p className='pt-4'>Volunteering your time is a fantastic way to give back. Numerous organizations need help, whether it's serving meals at a soup kitchen, walking dogs at an animal shelter, or tutoring students. Find a cause that resonates with you and donate your skills and energy. Attending local events is another great way to connect with your community. Festivals, fairs, concerts, and farmers' markets offer opportunities to meet neighbors, support local businesses, and learn more about your area.</p>
                        <p className='pt-4'>Consider joining clubs or organizations aligned with your interests. This could be a sports league, book club, gardening group, or volunteer fire department. These groups provide a space to socialize, learn new skills, and work towards common goals. Supporting local businesses is crucial for a thriving community. Instead of opting for large chains, explore the unique shops, restaurants, and services offered by local entrepreneurs. Your patronage helps sustain the local economy and fosters a vibrant atmosphere.</p>
                        <p className='pt-4'>Engaging in local government is a powerful way to shape your community. Attend city council meetings, voice your opinions on important issues, and consider running for office yourself. By participating in the decision-making process, you can ensure your community reflects the values and needs of its residents. Remember, even small actions can have a significant impact. Every act of kindness, volunteer hour, and purchase from a local business contributes to a stronger, more connected community.</p>
                        <p className='pt-5 fw-bold'>Remember - change doesn't happen without a catalyst. So get involved, make a difference, and watch your community flourish.</p>
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

export default Blog2;
