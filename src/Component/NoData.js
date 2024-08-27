import React from 'react';
import { Col, Row } from 'reactstrap';

// img
import Nouser from "../img/NoUserFound.svg"

const NoDataFound = () => {
    return (
        <div>
            <Row className='d-flex justify-content-center align-items-center h-100 m-0'>
                <Col sm={9} xl={5} className='h-100 d-flex flex-column justify-content-center align-items-center'>
                    <img src={Nouser} alt='NoInternet' className='img-fluid pb-5' width={250} />
                    <p className='fw-bold fs-5 m-0'>No data found. !</p>
                    <p className='m-0' style={{ color: "#AAAAAA" }}>Request failed! Please try again after some time..</p>
                </Col>
            </Row>
        </div>
    );
};

export default NoDataFound;
