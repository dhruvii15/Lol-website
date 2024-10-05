import React, { useCallback, useEffect, useState, useMemo, Suspense } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Col, Row, Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from 'reactstrap';

// Import images
import fontBg1 from "../../img/1.png";
import fontBg2 from "../../img/2.png";
import fontBg3 from "../../img/3.png";
import fontBg4 from "../../img/4.png";
import fontBg5 from "../../img/5.png";
import Loading from '../Loading';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';

import MessageBtn from "../Messagebtn";
import NoDataFound from "../NoData";

const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Page2 = () => {
    const handleCapture = (callback) => {
        const divToCapture = document.getElementById('captureDiv');
        if (!divToCapture) {
            console.error("Div to capture not found.");
            return;
        }
        const scale = 2; // Increase this for higher resolution, but be mindful of performance
        html2canvas(divToCapture, {
            scale: scale,
            useCORS: true,
            allowTaint: true,
            logging: false,
            backgroundColor: null,
            scrollX: 0,
            scrollY: -window.scrollY,
            windowWidth: document.documentElement.offsetWidth,
            windowHeight: document.documentElement.offsetHeight,
            onclone: (clonedDoc) => {
                const clonedDiv = clonedDoc.getElementById('captureDiv');
                if (clonedDiv) {
                    clonedDiv.classList.remove('rounded-4');
                    clonedDiv.style.borderRadius = '0';
                }
            }
        }).then(canvas => {
            // Create a new canvas with the same dimensions
            const perfectedCanvas = document.createElement('canvas');
            perfectedCanvas.width = canvas.width;
            perfectedCanvas.height = canvas.height;
            const ctx = perfectedCanvas.getContext('2d');

            // Apply image smoothing
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            // Draw the original canvas onto the new one
            ctx.drawImage(canvas, 0, 0);

            // Convert to a high-quality PNG
            const image = perfectedCanvas.toDataURL('image/png', 1.0);

            // Store the captured image in session storage
            sessionStorage.setItem('capturedImage', image);

            // Execute the callback to proceed to the next step
            if (callback) {
                callback();
            }
        }).catch(error => {
            console.error("Error capturing image:", error);
        });
    };


    const { t } = useTranslation();

    const defaultAvatarURL = 'https://lolcards.link/api/public/images/avatar.png';

    // Retrieve data from sessionStorage
    const storedData = JSON.parse(sessionStorage.getItem('formData')) || {};
    const {
        avatar = '',
        inputValues = {},
        username = '',
        nickname = '',
        data2 = [],
        userLocation
    } = storedData;

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
    // const [avatarURL, setAvatarURL] = useState('');

    const imageUrl = 
    avatar || 
    defaultAvatarURL;

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

    const shuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    };

    const getData = useCallback(async () => {
        const MAX_RETRIES = 3;
        let attempts = 0;
        let success = false;

        while (attempts < MAX_RETRIES && !success) {
            try {
                setLoading(true);
                const res = await axios.post('https://lolcards.link/api/cardBackground');
                const fetchedData = res.data.data;
                const shuffledData = shuffleArray([...fetchedData]);
                setData(shuffledData);
                setNoData(shuffledData.length === 0);
                success = true;  // Mark success if data is fetched
            } catch (err) {
                console.error(err);
                setNoData(true);
                if (attempts === MAX_RETRIES - 1) {
                    toast.error("Failed to fetch data after multiple attempts.");
                }
            } finally {
                setLoading(false);
                attempts++;
            }
        }
    }, []);


    useEffect(() => {
        getData();

        // if (avatar instanceof File) {
        //     const url = URL.createObjectURL(avatar);
        //     setAvatarURL(url);
        //     return () => URL.revokeObjectURL(url);
        // } else {
        //     setAvatarURL(avatar);
        // }

    }, [getData]);

    const handleNextClick = useCallback(() => {
        // Prepare the data to store
        const formData = {
            avatar,
            inputValues,
            username,
            nickname,
            data2,
            cardBg: selectedImage,
            font,    // Add font
            color,   // Add color
            userLocation    // Add userLocation
        };

        // Store data in sessionStorage
        sessionStorage.setItem('formData', JSON.stringify(formData));

        // Capture the image and store it before navigation
        handleCapture(() => {
            // Use window.location.href to navigate after capture is complete
            window.location.href = `/${username}/step3`;
        });
    }, [avatar, inputValues, username, nickname, data2, selectedImage, font, color, userLocation]);



    if (loading) return <LoadingComponent />;
    if (noData) return <NoDataComponent />;

    return (
        <div className='page1-bg orange-bg'>
            <Row className='d-flex justify-content-center align-items-center h-100 m-0'>
                <Col sm={9} xl={5}>
                    <StepIndicator />
                    <h4 className='text-center text-white py-4'>{t('page2')}</h4>
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
                t={t}
            />

        </div>
    );
};

const LoadingComponent = () => {
    const { t } = useTranslation();

    return (
        <div className='page1-bg orange-bg'>
            <Row className='d-flex justify-content-center align-items-center h-100 m-0'>
                <Col sm={9} xl={5}>
                    <StepIndicator />
                    <h4 className='text-center text-white py-4'>{t('page2')}</h4>
                    <Row className='px-3'>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Col xs={6} key={index} className='d-flex justify-content-center align-items-center p-3'>
                                <div
                                    className='w-100 img-fluid rounded-4 default-box' // Corrected typo from "defult-box" to "default-box"
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
};

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


const PreviewOffcanvas = React.memo(({
    show,
    handleClose,
    selectedImage,
    fontBg,
    font,
    color,
    shape,
    nickname,
    imageUrl,
    data2,
    values,
    handleNextClick,
    t,
}) => (
    <Offcanvas isOpen={show} toggle={handleClose} direction="bottom" className="h-75 offcanvas-custom overflow-hidden">
        <OffcanvasHeader className='mx-auto w-100 d-flex flex-column justify-content-center'>
            <p className='bg-secondary rounded-pill mx-auto' style={{ width: "50px", height: "4px" }}></p>
        </OffcanvasHeader>
        <OffcanvasBody className='text-center p-0'>
            <Row className='d-flex justify-content-center align-items-center h-100 m-0'>
                <Col sm={9} xl={5}>
                    {/* save gallery */}
                        <div
                            className="shadow rounded-4 mx-auto p-0 overflow-hidden" id='captureDiv'
                            style={{
                                width: "300px",
                                height: "400px",
                                backgroundImage: `url(${selectedImage})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        >
                            <div className='py-2' >
                                <div className='mx-auto d-flex justify-content-center align-items-center '
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
                    {/* save gallery */}

                    <div className='d-flex flex-column justify-content-center align-items-center mx-2 mx-sm-5'>
                        <Button
                            className='orange-bg rounded-pill w-75 border-0 py-2 my-4 mx-auto'
                            onClick={handleNextClick}
                        >
                            <span className='fs-5 text-decoration-none text-white'>{t('next')}</span> {/* Use t here */}
                        </Button>
                    </div>
                    <div className='w-100 p-3 pt-0'>
                        <Suspense fallback={<div><Loading /></div>}>
                            <MessageBtn color="#A9A9A9" />
                        </Suspense>
                    </div>
                </Col>
            </Row>
        </OffcanvasBody>
    </Offcanvas>
));


export default React.memo(Page2);