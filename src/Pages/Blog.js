import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import Title from '../Component/Title';
import Footer2 from '../Component/Footer2';
import Loading from '../Component/Loading';
import { Col, Container, Row } from 'reactstrap';

// img
import { ReactComponent as Blog1} from "../img/blog1.svg"
import { ReactComponent as Blog2} from "../img/blog2.svg"
import { ReactComponent as Blog3} from "../img/blog3.svg"
import { ReactComponent as Blog4} from "../img/blog4.svg"
import { ReactComponent as Blog5} from "../img/blog5.svg"
import { ReactComponent as Blog6} from "../img/blog6.svg"
import { ReactComponent as Blog7} from "../img/blog7.svg"


const Blog = () => {
    const [loading, setLoading] = useState(true);


    const title = 'Blog';
    const titles = '';
    const descriptions = 'My favorite app is the one that tells me';
    const descriptionss = "how much time I've wasted on other apps.";


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 10);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <Header activeLink={'blog'} />
            <div className='rounded-top-5 overflow-hidden'>
                <Title title={title} title2={titles} description={descriptions} description2={descriptionss} />
                <Container className='my-3 blog-padding'>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col xs={12} lg={6} className='pt-4'>
                            <div
                                className='position-relative cursor blog-animation'
                                onClick={() => window.location.href = "/blog/hidden-gems-tips-tricks-for-the-lol-app"}
                            >
                                <Blog1 className='img-fluid' />
                                <div className='position-absolute bottom-0'>
                                    <p className='BwGradual blog-box px-4 text-white'>Hidden Gems: Tips &
                                        Tricks for the LOL App</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className='d-flex flex-column gap-4 pt-4'>
                            <div
                                className='position-relative cursor blog-animation'
                                onClick={() => window.location.href = "/blog/uplift-your-community"}
                            >
                                <Blog2 className='img-fluid' />
                                <div className='position-absolute bottom-0'>
                                    <p className='BwGradual blog-box px-4 text-white'>Uplift Your Community:
                                        Getting Involved IRL</p>
                                </div>
                            </div>
                            <div
                                className='position-relative cursor blog-animation'
                                onClick={() => window.location.href = "/blog/announcing-new-features-and-user-controls"}
                            >
                                <Blog3 className='img-fluid' />
                                <div className='position-absolute bottom-0'>
                                    <p className='BwGradual blog-box px-4 text-white'>Announcing New
                                        Features and User Controls</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='py-4'>
                        <Col className='text-center'>
                            <div
                                className='position-relative cursor blog-animation'
                                onClick={() => window.location.href = "/blog/lol-response-to-ftc-settlement"}
                            >
                                <Blog4 className='img-fluid'/>
                                <div className='position-absolute bottom-0 text-start'>
                                    <p className='BwGradual blog-box px-4 text-white'>LOL Response to
                                        FTC Settlement</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={6} className='d-flex flex-column gap-4'>
                            <div
                                className='position-relative cursor blog-animation'
                                onClick={() => window.location.href = "/blog/staying-safe-on-lol"}
                            >
                                <Blog5 className='img-fluid' />
                                <div className='position-absolute bottom-0'>
                                    <p className='BwGradual fs-5 fs-lg-3 px-4 w-75 text-white'>Staying Safe on LOL: Tips for User Safety</p>
                                </div>
                            </div>
                            <div
                                className='position-relative cursor blog-animation'
                                onClick={() => window.location.href = "/blog/guide-to-online-privacy"}
                            >
                                <Blog6 className='img-fluid' />
                                <div className='position-absolute bottom-0'>
                                    <p className='BwGradual blog-box px-4 text-white'>A Guide to Online Privacy</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className='pt-lg-0 pt-4'>
                            <div
                                className='position-relative cursor blog-animation'
                                onClick={() => window.location.href = "/blog/lol-request-procedures"}
                            >
                                <Blog7 className='img-fluid' />
                                <div className='position-absolute bottom-0'>
                                    <p className='BwGradual blog-box px-4 text-white'>LOL Procedures for Information Requests</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer2 />
            </div>
        </div>
    );
};

export default Blog;