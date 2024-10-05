import React, { Suspense, useEffect } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { useLocation } from 'react-router-dom';

// img
import check from "../../img/check.svg"
import Loading from '../Loading';
import policy from "../../img/policyIcon.svg";
import { useTranslation } from 'react-i18next';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';


const MessageBtn = React.lazy(() => import('../Messagebtn'));

const Success = () => {
    // const [capturedImage, setCapturedImage] = useState(null);

    // Retrieve the image from session storage when the component mounts
    useEffect(() => {
        // const image = sessionStorage.getItem('capturedImage');
        // setCapturedImage(image);
    }, []);

    // const handleSaveToGallery = () => {
    //     if (capturedImage) {
    //         const link = document.createElement('a');
    //         link.href = capturedImage;
    //         link.download = 'captured-image.png'; // Download image as PNG
    //         link.click();

    //         // Clear the image from session storage after download
    //         sessionStorage.removeItem('capturedImage');
    //         setCapturedImage(null); // Clear from state as well
    //     }
    // };

    const { t } = useTranslation();


    const location = useLocation();
    const { username } = location.state || {};

    const handlePlaystoreClick = () => {
        const playstore = 'https://play.google.com/store/apps/details?id=com.lol.android';

        window.open(playstore, '_blank');
    };

    return (
        <>
            <div className="page1-bg orange-bg">
                <Row className="d-flex justify-content-center align-items-center h-100 m-0">
                    <Col sm={9} xl={5}>
                        <div className="d-flex flex-column mx-sm-3 mx-1 justify-content-between align-items-center vh-100">
                            {/* {username === "frnd" && (
                                <button
                                    onClick={handleSaveToGallery}
                                    className='ms-auto pt-5 bg-transparent border-0 text-white'
                                    style={{ fontSize: "18px" }}>
                                    <FontAwesomeIcon icon={faDownload} /> Save Card
                                </button>
                            )} */}
                            <img
                                src={policy}
                                alt="policy"
                                className='me-4 cursor mt-4'
                                onClick={() => window.open("/privacy-policy", "_blank")}
                                width={30}
                            />

                            <div className="d-flex flex-column w-100 justify-content-center align-items-center flex-grow-1">
                                <div className='mb-5'>
                                    <img src={check} alt='check' width={130} />
                                </div>
                                <Suspense fallback={<div><Loading /></div>}>
                                    <MessageBtn color="#fff" />
                                </Suspense>
                                <p
                                    className="text-white mt-2"
                                    style={{ fontSize: "18px", cursor: "pointer", textDecoration: "underline", }}
                                    onClick={() => window.location.href = `/${username}`}
                                >
                                    {t('success.0')}
                                </p>

                            </div>
                            <Button className="mb-5 rounded-pill fs-5 text-black border-0 py-2 new-app-btn px-3" onClick={handlePlaystoreClick} style={{ fontWeight: "600", backgroundColor: "rgba(255, 255, 255, 0.7)" }}>{t('success.1')}</Button>
                        </div>
                    </Col>

                </Row>
            </div>

        </>
    );
};

export default Success;
