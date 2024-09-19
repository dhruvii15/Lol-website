import React, { lazy, Suspense } from 'react';
import { Col, Container, Row } from 'reactstrap';

// Lazy load the Safety components
const Safety1 = lazy(() => import('./Safety1'));
const Safety2 = lazy(() => import('./Safety2'));
const Safety3 = lazy(() => import('./Safety3'));
const Safety4 = lazy(() => import('./Safety4'));
const Safety5 = lazy(() => import('./Safety5'));
const Safety6 = lazy(() => import('./Safety6'));

const SafetyComponent = ({ activeItem, onItemClick }) => {
    const renderSafetyContent = () => {
        switch (activeItem) {
            case 1:
                return <Safety1 />;
            case 2:
                return <Safety2 />;
            case 3:
                return <Safety3 />;
            case 4:
                return <Safety4 />;
            case 5:
                return <Safety5 />;
            case 6:
                return <Safety6 />;
            default:
                return <div>Please select an item to see details.</div>;
        }
    };

    return (
        <Container>
            <Row className='BwGradual fs-5 pb-5'>
                <Col xs={12} lg={4} className="sticky py-5 px-3">
                    <div className='p-4 rounded-3' style={{ backgroundColor: "#E9E7E7" }}>
                        <p className='BwGradualBold pt-3 m-0 fs-1'>Safety</p>
                        {[1, 2, 3, 4, 5, 6].map(itemNumber => (
                            <p
                                key={itemNumber}
                                onClick={() => onItemClick(itemNumber)}
                                style={{ cursor: 'pointer' }}
                                className={`${activeItem === itemNumber ? 'active' : ''} pt-3`}
                            >
                                {itemNumber}. {getSafetyItemText(itemNumber)}
                            </p>
                        ))}
                    </div>
                </Col>
                <Col xs={12} lg={8} className='p-4'>
                    <Suspense fallback={<div>Loading...</div>}>
                        {renderSafetyContent()}
                    </Suspense>
                </Col>
            </Row>
        </Container>
    );
};

// Helper function to get safety item text based on item number
const getSafetyItemText = (itemNumber) => {
    const texts = {
        1: 'Our Approach to Safety',
        2: 'Our Guide to Online Safety',
        3: 'Our Community Guidelines',
        4: 'Our Safety Tools',
        5: 'Our Resources',
        6: 'Contact Us',
    };
    return texts[itemNumber] || '';
};

export default SafetyComponent;
