import React from 'react';
import { Col, Row } from 'reactstrap';

// img
import Nouser from "../img/NoUserFound.svg"

const NoUserFound = () => {
    return (
        <div style={{ height: "100vh" }}>
            <Row className='d-flex justify-content-center align-items-center h-100 m-0'>
                <Col sm={9} xl={5} className='h-100 d-flex flex-column justify-content-center align-items-center'>
                    <img src={Nouser} alt='NoUserFound' className='img-fluid pb-5 mb-5' width={250} />
                    <p className='fw-bold fs-5 m-0'>User Not Found !</p>
                    <p className='m-0 text-center' style={{ color: "#AAAAAA" }}>Please try again with a different</p>
                    <p className='' style={{ color: "#AAAAAA" }}> username.</p>
                </Col>
            </Row>
        </div>
    );
};

export default NoUserFound;
