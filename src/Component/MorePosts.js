import React from 'react';

// img
import blog1 from "../img/blog1.svg"
import blog2 from "../img/blog2.svg"
import blog3 from "../img/blog3.svg"
import blog4 from "../img/blog4.svg"
import blog5 from "../img/blog5.svg"
import blog6 from "../img/blog6.svg"
import blog7 from "../img/blog7.svg"


const ImageSlider = () => {
    return (
        <div className='pt-5'>
            <p className='BwGradualBold fs-2'>More Posts</p>
            <div className='slider-container py-5'>
                <div className='slider-content'>
                    <div className='language position-relative blog-img cursor' onClick={() => window.location.href = "/blog/hidden-gems-tips-tricks-for-the-lol-app"}>
                        <img src={blog1} alt='blog1' className='rounded-4' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className='overlay-content position-absolute h-100 w-100 d-flex flex-wrap align-items-end rounded-4 bg-overlay'>
                            <p className='blog-box m-0 p-3 w-100'>Hidden Gems: Tips & Tricks for the LOL App</p>
                        </div>
                    </div>

                    <div className='language position-relative blog-img cursor' onClick={() => window.location.href = "/blog/uplift-your-community"}>
                        <img src={blog2} alt='blog2' className='rounded-4' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className='overlay-content position-absolute h-100 w-100 d-flex flex-wrap align-items-end rounded-4 bg-overlay'>
                            <p className='blog-box m-0 p-3 w-100'>Uplift Your Community:
                                Getting Involved IRL</p>
                        </div>
                    </div>

                    <div className='language position-relative blog-img cursor' onClick={() => window.location.href = "/blog/announcing-new-features-and-user-controls"}>
                        <img src={blog3} alt='blog3' className='rounded-4' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className='overlay-content position-absolute h-100 w-100 d-flex flex-wrap align-items-end rounded-4 bg-overlay'>
                            <p className='blog-box m-0 p-3 w-100'>Announcing New
                                Features and User Controls</p>
                        </div>
                    </div>

                    <div className='language position-relative blog-img cursor' onClick={() => window.location.href = "/blog/lol-response-to-ftc-settlement"}>
                        <img src={blog4} alt='blog4' className='rounded-4' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className='overlay-content position-absolute h-100 w-100 d-flex flex-wrap align-items-end rounded-4 bg-overlay'>
                            <p className='blog-box m-0 p-3 w-100'>LOL Response to
                                FTC Settlement</p>
                        </div>
                    </div>

                    <div className='language position-relative blog-img cursor' onClick={() => window.location.href = "/blog/staying-safe-on-lol"}>
                        <img src={blog5} alt='blog5' className='rounded-4' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className='overlay-content position-absolute h-100 w-100 d-flex flex-wrap align-items-end rounded-4 bg-overlay'>
                            <p className='blog-box m-0 p-3 w-100'>Staying Safe on LOL: Tips for User Safety</p>
                        </div>
                    </div>

                    <div className='language position-relative blog-img cursor' onClick={() => window.location.href = "/blog/guide-to-online-privacy"}>
                        <img src={blog6} alt='blog6' className='rounded-4' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className='overlay-content position-absolute h-100 w-100 d-flex flex-wrap align-items-end rounded-4 bg-overlay'>
                            <p className='blog-box m-0 p-3 w-100'>A Guide to Online Privacy</p>
                        </div>
                    </div>

                    <div className='language position-relative blog-img cursor' onClick={() => window.location.href = "/blog/lol-request-procedures"}>
                        <img src={blog7} alt='blog7' className='rounded-4' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className='overlay-content position-absolute h-100 w-100 d-flex flex-wrap align-items-end rounded-4 bg-overlay'>
                            <p className='blog-box m-0 p-3 w-100'>LOL Procedures for Information Requests</p>
                        </div>
                    </div>




                    <div className='language position-relative blog-img cursor' onClick={() => window.location.href = "/blog/hidden-gems-tips-tricks-for-the-lol-app"}>
                        <img src={blog1} alt='blog1' className='rounded-4' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className='overlay-content position-absolute h-100 w-100 d-flex flex-wrap align-items-end rounded-4 bg-overlay'>
                            <p className='blog-box m-0 p-3 w-100'>Hidden Gems: Tips & Tricks for the LOL App</p>
                        </div>
                    </div>

                    <div className='language position-relative blog-img cursor' onClick={() => window.location.href = "/blog/uplift-your-community"}>
                        <img src={blog2} alt='blog2' className='rounded-4' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className='overlay-content position-absolute h-100 w-100 d-flex flex-wrap align-items-end rounded-4 bg-overlay'>
                            <p className='blog-box m-0 p-3 w-100'>Uplift Your Community:
                                Getting Involved IRL</p>
                        </div>
                    </div>

                    <div className='language position-relative blog-img cursor' onClick={() => window.location.href = "/blog/announcing-new-features-and-user-controls"}>
                        <img src={blog3} alt='blog3' className='rounded-4' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className='overlay-content position-absolute h-100 w-100 d-flex flex-wrap align-items-end rounded-4 bg-overlay'>
                            <p className='blog-box m-0 p-3 w-100'>Announcing New
                                Features and User Controls</p>
                        </div>
                    </div>

                    <div className='language position-relative blog-img cursor' onClick={() => window.location.href = "/blog/lol-response-to-ftc-settlement"}>
                        <img src={blog4} alt='blog4' className='rounded-4' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className='overlay-content position-absolute h-100 w-100 d-flex flex-wrap align-items-end rounded-4 bg-overlay'>
                            <p className='blog-box m-0 p-3 w-100'>LOL Response to
                                FTC Settlement</p>
                        </div>
                    </div>

                    <div className='language position-relative blog-img cursor' onClick={() => window.location.href = "/blog/staying-safe-on-lol"}>
                        <img src={blog5} alt='blog5' className='rounded-4' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className='overlay-content position-absolute h-100 w-100 d-flex flex-wrap align-items-end rounded-4 bg-overlay'>
                            <p className='blog-box m-0 p-3 w-100'>Staying Safe on LOL: Tips for User Safety</p>
                        </div>
                    </div>

                    <div className='language position-relative blog-img cursor' onClick={() => window.location.href = "/blog/guide-to-online-privacy"}>
                        <img src={blog6} alt='blog6' className='rounded-4' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className='overlay-content position-absolute h-100 w-100 d-flex flex-wrap align-items-end rounded-4 bg-overlay'>
                            <p className='blog-box m-0 p-3 w-100'>A Guide to Online Privacy</p>
                        </div>
                    </div>

                    <div className='language position-relative blog-img cursor' onClick={() => window.location.href = "/blog/lol-request-procedures"}>
                        <img src={blog7} alt='blog7' className='rounded-4' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className='overlay-content position-absolute h-100 w-100 d-flex flex-wrap align-items-end rounded-4 bg-overlay'>
                            <p className='blog-box m-0 p-3 w-100'>LOL Procedures for Information Requests</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
