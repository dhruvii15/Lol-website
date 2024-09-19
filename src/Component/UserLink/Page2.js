import React, { useCallback, useEffect, useState, useMemo, Suspense } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Col, Row, Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from 'reactstrap';
import { useLocation, useNavigate } from 'react-router-dom';


// Import images
import fontBg1 from "../../img/1.png";
import fontBg2 from "../../img/2.png";
import fontBg3 from "../../img/3.png";
import fontBg4 from "../../img/4.png";
import fontBg5 from "../../img/5.png";
import Loading from '../Loading';

const MessageBtn = React.lazy(() => import('../Messagebtn'));
const NoDataFound = React.lazy(() => import('../NoData'));

const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Page2 = () => {
    const defaultAvatarURL = 'https://lolcards.link/api/public/images/avatar.png';

    const location = useLocation();
    const navigate = useNavigate();
    const {
        avatar = '',
        inputValues = {},
        username = '',
        nickname = '',
        data2 = []
    } = location.state || {};

    const values = useMemo(() => Object.values(inputValues), [inputValues]);

    const fontArray = useMemo(() => ['BunnyFunny', 'CCKillJoy', 'Pure', 'SHOWG', 'Spider'], []);
    const colorArray = useMemo(() => ['#4D5D53', '#0D9494', '#CC8899', '#F1C40F', '#42B3AE'], []);
    const shapeArray = useMemo(() => ['circle', 'square', 'heptagon'], []);
    const fontBgImages = useMemo(() => [fontBg1, fontBg2, fontBg3, fontBg4, fontBg5], []);

    const [fontBg, setFontBg] = useState(fontBgImages[0]);
    const [font, setFont] = useState('');
    const [color, setColor] = useState('');
    const [shape, setShape] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noData, setNoData] = useState(false);
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [avatarURL, setAvatarURL] = useState('');

    const imageUrl = avatarURL || defaultAvatarURL;

    const getRandomElement = useCallback((array) => array[Math.floor(Math.random() * array.length)], []);

    const selectRandomStyles = useCallback(() => {
        setFontBg(getRandomElement(fontBgImages));
        setFont(getRandomElement(fontArray));
        setColor(getRandomElement(colorArray));
        setShape(getRandomElement(shapeArray));
    }, [getRandomElement, fontBgImages, fontArray, colorArray, shapeArray]);

    const handleShow = useCallback((image) => {
        setSelectedImage(image);
        setShow(true);
        selectRandomStyles();
    }, [selectRandomStyles]);

    const handleClose = useCallback(() => setShow(false), []);

    const getData = useCallback(async () => {
        if (!navigator.onLine) {
            return;
        }
        try {
            setLoading(true);
            const res = await axios.post('https://lolcards.link/api/cardBackground');
            const fetchedData = res.data.data;
            setData(fetchedData);
            setNoData(fetchedData.length === 0);
        } catch (err) {
            console.error(err);
            setNoData(true);
            toast.error("Failed to fetch data.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getData();

        if (avatar instanceof File) {
            const url = URL.createObjectURL(avatar);
            setAvatarURL(url);
            return () => URL.revokeObjectURL(url);
        } else {
            setAvatarURL(avatar);
        }

    }, [getData, avatar]);

    const handleNextClick = useCallback(() => {
        const formData = { avatar, inputValues, username, nickname, cardBg: selectedImage };
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/${username}/step3`, { state: formData });
    }, [avatar, inputValues, username, nickname, selectedImage, navigate]);

    if (loading) return <LoadingComponent />;
    if (noData) return <NoDataComponent />;

    return (
        <div className='page1-bg orange-bg'>
            <Row className='d-flex justify-content-center align-items-center h-100 m-0'>
                <Col sm={9} xl={5}>
                    <StepIndicator />
                    <h4 className='text-center text-white py-4'>Select a card background</h4>
                    <CardBackgrounds data={data} handleShow={handleShow} />
                </Col>
            </Row>

            <PreviewOffcanvas
                show={show}
                handleClose={handleClose}
                selectedImage={selectedImage}
                fontBg={fontBg}
                font={font}
                color={color}
                shape={shape}
                nickname={nickname}
                imageUrl={imageUrl}
                data2={data2}
                values={values}
                handleNextClick={handleNextClick}
            />
        </div>
    );
};

const LoadingComponent = () => (
    <div className='page1-bg orange-bg'>
        <Row className='d-flex justify-content-center align-items-center h-100 m-0'>
            <Col sm={9} xl={5}>
                <StepIndicator />
                <h4 className='text-center text-white py-4'>Select a card background</h4>
                <Row className='px-3'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Col xs={6} key={index} className='d-flex justify-content-center align-items-center p-3'>
                            <div
                                className='w-100 img-fluid rounded-4 defult-box'
                                style={{
                                    background: "linear-gradient(to bottom, rgba(128, 128, 128, 0.2), rgba(255, 255, 255, 0.2))",
                                    cursor: 'pointer'
                                }}
                            >
                            </div>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    </div>
);

const NoDataComponent = () => (
    <div style={{ height: "100vh" }} className='d-flex flex-column justify-content-center'>
        <Suspense fallback={<div><Loading /></div>}>
            <NoDataFound />
        </Suspense>
    </div>
);

const StepIndicator = () => (
    <div className='py-3 pt-4 d-flex justify-content-center align-items-center'>
        <div className='num-circle bg-black rounded-circle text-white'><p>1</p></div>
        <div className='bg-black' style={{ width: '40px', height: '2px' }} />
        <div className='num-circle bg-black text-white'><p>2</p></div>
        <div className='bg-black' style={{ width: '40px', height: '2px' }} />
        <div className='num-circle bg-white rounded-circle'><p>3</p></div>
    </div>
);

const CardBackgrounds = React.memo(({ data, handleShow }) => (
    <Row className='px-3'>
        {data.map((item, index) => (
            <Col xs={6} className='d-flex justify-content-center align-items-center p-3' key={index}>
                <img
                    src={item.cardBg}
                    alt='card-background'
                    className='w-100 img-fluid rounded-4 border border-2 border-white shadow'
                    onClick={() => handleShow(item.cardBg)}
                    style={{ cursor: 'pointer' }}
                />
            </Col>
        ))}
    </Row>
));

const PreviewOffcanvas = React.memo(({ show, handleClose, selectedImage, fontBg, font, color, shape, nickname, imageUrl, data2, values, handleNextClick }) => (
    <Offcanvas isOpen={show} toggle={handleClose} direction="bottom" className="h-75 offcanvas-custom overflow-hidden">
        <OffcanvasHeader className='mx-auto w-100 d-flex flex-column justify-content-center'>
            <p className='bg-secondary rounded-pill mx-auto' style={{ width: "50px", height: "4px" }}></p>
        </OffcanvasHeader>
        <OffcanvasBody className='text-center p-0'>
            <Row className='d-flex justify-content-center align-items-center h-100 m-0'>
                <Col sm={9} xl={5}>
                    <div
                        className="shadow rounded-4 mx-auto p-0"
                        style={{
                            width: "300px",
                            height: "400px",
                            backgroundImage: `url(${selectedImage})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        <div className='py-2'>
                            <div className='mx-auto d-flex justify-content-center align-items-center'
                                style={{
                                    width: "150px",
                                    height: "100px",
                                    backgroundImage: `url(${fontBg})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "150px 100px",
                                    backgroundPosition: "center"
                                }}
                            >
                                <p className={`${font} ps-2`} style={{ color: color }}>{nickname}</p>
                            </div>

                            <img src={imageUrl} alt='avatar' className={`${shape} my-1`} />
                            <div className='px-2 pt-2 d-flex justify-content-center align-items-center'>
                                <div className='bg-white d-flex justify-content-center align-items-center' style={{ height: "155px", width: "280px", borderRadius: "10px" }}>
                                    <Row className='w-100 text-start px-3'>
                                        <Col xs={6} className='p-0'>
                                            {data2.map((value, index) => (
                                                <p key={index} className='mb-2' style={{ fontSize: "10px", fontWeight: "600" }}>{capitalizeFirstLetter(value)}</p>
                                            ))}
                                        </Col>
                                        <Col xs={6} className='p-0'>
                                            {values.map((value, index) => (
                                                <p key={index} className='mb-2' style={{ fontSize: "10px", fontWeight: "600" }}><span className='pe-2 fw-bold'>:</span>{capitalizeFirstLetter(value)}</p>
                                            ))}
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex flex-column justify-content-center align-items-center mx-2 mx-sm-5'>
                        <Button
                            className='orange-bg rounded-pill w-75 border-0 py-2 my-4 mx-auto'
                            onClick={handleNextClick}
                        >
                            <span className='fs-5 text-decoration-none text-white'>Next</span>
                        </Button>
                    </div>
                    <div className='w-100 p-3 pt-0'>
                        <Suspense fallback={<div><Loading /></div>}>
                            <MessageBtn />
                        </Suspense>
                    </div>
                </Col>
            </Row>
        </OffcanvasBody>
    </Offcanvas>
));

export default React.memo(Page2);