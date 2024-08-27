import React from 'react';
import { Container } from 'reactstrap';
import MorePosts from '../Component/MorePosts';
import Header from '../Component/Header';
import Footer2 from '../Component/Footer2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

// img
import image from "../img/blog7-2.svg"

const Blog7 = () => {
    return (
        <div className='BwGradual fs-5'>
            <Header />
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
                            <p>If you see something that you believe may constitute illegal or criminal activity on LOL, please report this to our team by using the Report function in the app and by emailing our safety team at safety@LOLapp.com.</p>
                        </div>
                        <div className='pt-5'>
                            <p className='BwGradualBold fs-2'>What will you do with my report?</p>
                            <p>After careful consideration by our team, we may deem which authorities are best to contact and may share the activity with the appropriate channels. We will comply with law enforcement and secure the LOL community from further criminal activity by ensuring that the user is banned, and law enforcement will determine the appropriate legal action to take going forward.</p>
                        </div>
                        <div className='pt-5'>
                            <p className='BwGradualBold fs-2'>What information do you share with law enforcement?‍</p>
                            <p>LOL is entirely willing to work with law enforcement to share whatever content is necessary to secure our users’ safety. LOL maintains user content data and will disclose such data pursuant to proper legal process in accordance with 18 U.S.C. §2703(a) and United States v. Warshak, 631 F.3d 266 (6th Cir. 2010). If you are concerned about what information LOL collects about you as a user, read over our Privacy Policy to learn more. However, due process is necessary in order for law enforcement to legally obtain much of this information from LOL. These processes may include, and are not limited to:</p>
                            <p className='pt-3'>Law enforcement must contact LOL by email a lawenforcement@LOLapp.com. Requests for information release should include, at minimum:</p>
                            <div className='d-flex gap-3 ps-4 pt-3'>
                                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                                <p className='m-0'>Screenshots or other proof of offending LOL content.</p>
                            </div>
                            <div className='d-flex gap-3 ps-4'>
                                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                                <p className='m-0'>Recipient’s name and LOL link.</p>
                            </div>
                            <div className='d-flex gap-3 ps-4'>
                                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                                <p className='m-0'>Any known information about sender of offending message</p>
                            </div>
                            <p className='pt-3'>In order to produce content information, LOL requests a valid search warrant in accordance with 18 U.S.C. §2703(a).</p>
                            <p className='pt-3'>LOL will honor preservation requests by law enforcement, provided that LOL is contacted at lawenforcement@LOLapp.com with a valid preservation request and all supporting documentation. We will preserve requested information for up to 180 days in accordance with 18 U.S.C. § 2703(f) and 18 U.S.C. § 2703(f). LOL can only preserve information for active accounts.</p>
                            <p className='pt-3'>Pursuant to 18 U.S.C. §§ 2702(b)(8) and 2702(c)(4), LOL is permitted to disclose information, including user information and access logs, voluntarily to a federal, state, or local government entity when LOL believes in good faith that an emergency involving danger, death or serious physical injury to any person requires such disclosure.</p>
                            <p className='pt-3'>All emergency data requests must be formatted in the manner dictated by US law with 18 U.S.C § 2702(b)(7) and § 2702(c).</p>
                            <p className='pt-3'>In accordance with 18 U.S.C. § 2703(c)(1)(C), LOL shall disclose information based on user consent obtained by law enforcement where sufficient information is provided to verify that the person providing the consent is the actual creator of the account and where law enforcement endorses the authenticity of the consent. LOL shall not release information if the user will not or cannot provide registration information that corresponds with the information on record at LOL.</p>
                            <p className='pt-3'>LOL will produce documents in response to out of state legal process such as subpoenas, court orders, emergency requests, consent letters and search warrants without requiring domestication.</p>
                            <p className='pt-3'>All communications with law enforcement officers must include full name, title, rank and badge number.</p>
                            <p className='pt-3'>In addition to the formalities set out above, all law enforcement requests must:</p>

                            <div className='d-flex gap-3 ps-4 pt-3'>
                                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                                <p className='m-0'>be sent by email to lawenforcement@LOLapp.com</p>
                            </div>
                            <div className='d-flex gap-3 ps-4'>
                                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                                <p className='m-0'>include in the subject header, “Request by Law Enforcement”</p>
                            </div>
                            <div className='d-flex gap-3 ps-4'>
                                <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{ fontSize: "8px" }} className='pb-1' /></p>
                                <p className='m-0'>be in the ELOLish language</p>
                            </div>
                            <p className='pt-3'>This policy may be changed at any time by Team LOL, and all changes are effective immediately upon publication.</p>

                        </div>
                    </div>
                    <MorePosts />
                </div>
            </Container>
            <Footer2 />

        </div>
    );
};

export default Blog7;
