import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { ReactComponent as Cards } from '../../img/inbox-cards.svg';

// img
import inboxcircle from "../../img/inbox-circle.png"
import person from "../../img/inbox-person.png"


const Inbox = () => (
    <div className='inbox-bg overflow-hidden d-flex justify-content-center align-items-center'>
        <Container>
            <Row className='d-flex justify-content-center align-items-center my-5' style={{ padding: "0px 0px 50px 0px",minHeight:"500px"}}>
                <Col xs={12} lg={3} className='text-center mt-3'>
                    <h1 className='m-0 BwGradualBold text-white inbox-text'>flood</h1>
                    <h1 className='m-0 BwGradualBold text-white inbox-text'>your</h1>
                    <h1 className='m-0 BwGradualBold text-white inbox-text'>inbox</h1>
                </Col>
                <Col xs={12} lg={6} className='position-relative text-center overflow-hidden mt-3 h-100'>
                    <img src={inboxcircle} alt='inbox' className='rotate img-fluid rotate-img ' />
                    <div className='position-absolute person-img w-100 text-center' style={{ bottom: "-20px"}}>
                        <img src={person} alt='inbox' className='img-fluid' />
                    </div>
                </Col>
                <Col xs={12} lg={3} className='text-center mt-3'>
                    <Cards alt='cards' className='img-fluid inbox-cards'/>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Inbox;