import React from 'react';
import { Col, Row } from 'reactstrap';

// img
import Nouser from "../img/NoUserFound.svg"
import { useTranslation } from 'react-i18next';

const NoDataFound = ({ style }) => {

    const { t } = useTranslation();

    return (
        <div style={style}>
            <Row className='d-flex justify-content-center align-items-center h-100 m-0'>
                <Col sm={9} xl={5} className='h-100 d-flex flex-column justify-content-center align-items-center'>
                    <img src={Nouser} alt='NoDataFound' className='img-fluid pb-5' width={250} />
                    <p className='fw-bold fs-5 m-0'>{t('noData.0')}</p>
                    <p className='m-0 text-center' style={{ color: "#AAAAAA" }}>{t('noData.1')}</p>
                </Col>
            </Row>
        </div>
    );
};

export default NoDataFound;
