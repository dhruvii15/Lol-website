import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


// img
import lol from "../img/logo2.png"
import insta from "../img/instagram.svg"
import playstore from "../img/playstore.svg"
import appstore from "../img/appstore.svg"

const Footer = () => {

    const handleInstaClick = () => {
        const instaUrl = 'https://www.instagram.com/lots_of_laugh2024?igsh=ZHpxa2RzcG90Z3Fl';

        window.open(instaUrl, '_blank');
    };

    //   const handlePrivacyClick = () => {
    //     const history = useHistory();

    //     // Navigate to the privacy policy page using React Router
    //     history.push('/privacy-policy');
    //   };


    const handleAppstoreClick = () => {
        const appstore = 'https://apps.apple.com/us/app/lol-anonymous-funny-card/id6670788272';

        window.open(appstore, '_blank');
    };


    const handlePlaystoreClick = () => {
        const playstore = 'https://play.google.com/store/apps/details?id=com.lol.android';

        window.open(playstore, '_blank');
    };



    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='pt-5 BwGradual'>
            <Container>
                <Row className='px-2'>
                    <Col xs={12} md={6} className='mt-2'>
                        <img src={lol} alt='lol' width={100} onClick={() => window.location.href = "/"} className='cursor' />
                        <h3 className='text-white BwGradual pt-2'>Join our newsletter</h3>
                        <p className='text-white BwGradual'>Stay in the know on the latest alpha, <br />news and product updates.</p>
                    </Col>
                    <Col xs={6} md={3} className='pt-3 mt-2'>
                        <p className='text-white BwGradual fs-5 cursor hovertext' onClick={() => window.location.href = "/safety"}>Safety</p>
                        <a href="mailto:help@lolcards.link?subject=Support%20Request&body=Please%20describe%20your%20issue%20here." className="text-decoration-none">
                            <p className="text-white BwGradual fs-5 cursor hovertext">Contact us</p>
                        </a>
                    </Col>
                    <Col xs={6} md={3} className='pt-3 mt-2'>
                        <p className='text-white BwGradual fs-5 m-1 cursor'>Follow us: </p>
                        <p className='text-white BwGradual ps-2 cursor hovertext' style={{ fontSize: "15px" }} onClick={handleInstaClick}>
                            <img src={insta} alt="instagram" width={20} className='me-2' />
                            Instagram</p>
                        <p className='text-white BwGradual fs-5 m-1 cursor'>Download: </p>
                        <div className='d-flex gap-2'>
                            <img src={playstore} alt='playstore' className='cursor' onClick={handlePlaystoreClick} />
                            <img src={appstore} alt='appstore' className='cursor' onClick={handleAppstoreClick} />
                        </div>
                    </Col>
                </Row>

                <p className='text-center BwGradual text-white pt-4 cursor hovertext' onClick={scrollToTop}>Back To Top <FontAwesomeIcon icon={faChevronUp} className='px-2' /></p>
                <hr style={{ color: "#FFFFFF", border: "1px solid #FFFFFF" }} />
                <div className='d-flex flex-wrap alig-items-center justify-content-center gap-sm-5 gap-3 pb-3'>
                    <p className='text-center BwGradual text-white m-0'>©2024 Cabin. All rights reserved</p>
                    <p className='text-center BwGradual text-white m-0 cursor hovertext' onClick={() => window.location.href = "/privacy-policy"}>Privacy Policy</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;