import React from 'react';
import { Col, Row } from 'reactstrap';

const NoInternet = () => {
    return (
        <div style={{ height: "100vh" }}>
            <Row className='d-flex justify-content-center align-items-center h-100 m-0'>
                <Col sm={9} xl={5} className='h-100 d-flex flex-column justify-content-center align-items-center'>
                    {/* <img src="/noInternet.svg" alt='NoInternet' className='img-fluid pb-5 mb-5' width={350} /> */}
                    <p className='m-0 fs-4 fw-bold'>Oops...</p>
                    <p className='fw-bold fs-5 m-0'>No internet connection!</p>
                    <p className='' style={{ color: "#AAAAAA" }}>Please turn on internet connection!</p>
                </Col>
            </Row>
        </div>
    );
};

export default NoInternet;
