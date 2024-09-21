import React, { Suspense } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { useLocation } from 'react-router-dom';

// img
import check from "../../img/check.svg"
import Loading from '../Loading';
import { useTranslation } from 'react-i18next';


const MessageBtn = React.lazy(() => import('../Messagebtn'));

const Success = () => {
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
                            <div className="d-flex flex-column w-100 justify-content-center align-items-center flex-grow-1">
                                <div className='mb-5'>
                                    <img src={check} alt='check' width={130} />
                                </div>
                                <Suspense fallback={<div><Loading /></div>}>
                                    <MessageBtn />
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
