import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Loading from '../Loading';
import NoInternet from '../NoInternet';

// img
import avatar from "../../img/avatar.png";
import gallery from "../../img/gallery.svg";
import emoji from "../../img/avataremoji.svg";
import MessageBtn from '../Messagebtn';
import NoDataFound from '../NoData';

const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Page1 = ({ username }) => {
    const finallanguageMappings = {
        en: {
            nickname: 'Nickname',
            placeholder: 'Enter',
        },
        hi: {
            nickname: 'उपनाम',
            placeholder: 'दर्ज',
        },
        es: {
            nickname: 'Apodo',
            placeholder: 'Introducir',
        },
        ur: {
            nickname: 'عرفیت',
            placeholder: 'داخل کریں',
        },
        fr: {
            nickname: 'Surnom',
            placeholder: 'Entrez le',
        }
    };
    
    


    const getfinallanguageText = (key) => {
        const finallanguageMapping = finallanguageMappings[finallanguage] || finallanguageMappings['en'];
        return finallanguageMapping[key] || '';
    };


    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [linkStatus, setlinkStatus] = useState();
    const [finallanguage, setfinallanguage] = useState('en');
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [online, setOnline] = useState(navigator.onLine);
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [Avatar, setAvatar] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [fileInputKey, setFileInputKey] = useState(Date.now());
    const [inputValues, setInputValues] = useState({});
    const [errors, setErrors] = useState({});
    const [nickname, setNickname] = useState('');
    const [nicknameError, setNicknameError] = useState(false);
    const [isEmojiView, setIsEmojiView] = useState(false);
    const [selectedColumn, setSelectedColumn] = useState(null);
    const inputRefs = useRef([]);
    

    const handleFileColumnClick = () => {
        setSelectedColumn('file');
    };

    const navigate = useNavigate();

    const handleClose = () => {
        setShow(false);
        setIsEmojiView(false);
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (index < data2.length - 1) {
                // Focus the next input field
                inputRefs.current[index + 1]?.focus();
            } else {
                // Handle the last input field (e.g., submit form or dismiss keyboard)
                e.target.blur();  // Dismiss the keyboard
            }
        }
    };

    const handleShow = () => setShow(true);

    const getData = useCallback(() => {
        if (!navigator.onLine) {
            setOnline(false);
            return;
        }
        setLoading(true);
        axios.post('https://lolcards.link/api/avatar')
            .then((res) => {
                setData(res.data.data);
                setLoading(false);
                setOnline(true);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
                setOnline(true);
                toast.error("Failed to fetch data.");
            });
    }, []);

    const getData2 = useCallback(() => {
        if (!navigator.onLine) {
            setOnline(false);
            return;
        }
        setLoading(true);
        axios.post('https://lolcards.link/api/findTitle', { username })
            .then((res) => {
                const { selectedCardTitle, finallanguage, linkStatus } = res.data.data;

                if (Array.isArray(selectedCardTitle) && selectedCardTitle.length > 0) {
                    setData2(selectedCardTitle);
                    setfinallanguage(finallanguage || "en");
                    setlinkStatus(linkStatus);
                    setOnline(true);
                } else {
                    setData2([]);
                    setfinallanguage("en");
                    setOnline(true);
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to fetch data.");
                setOnline(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [username]);



    useEffect(() => {
        getData();
        getData2();

        const handleOnline = () => setOnline(true);
        const handleOffline = () => setOnline(false);

        // Add event listeners
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Cleanup function
        return () => {
            // Remove event listeners
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [getData, getData2, username]);

    const handleAvatarClick = (avatarUrl) => {
        setAvatar(avatarUrl);
        setSelectedAvatar(avatarUrl);
        handleClose();
    };

    const handleEmojiClick = () => {
        setIsEmojiView(true);
        setSelectedColumn('emoji');
    };

    const handleChange = (e, index) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [index]: e.target.value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.currentTarget.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImagePreview(url);
            setAvatar(file);
        }
        setFileInputKey(Date.now());
    };

    const handleNextClick = () => {
        const newErrors = {};
        data2.forEach((_, index) => {
            if (!inputValues[index] || inputValues[index].trim() === '') {
                newErrors[index] = true;
            }
        });

        if (!nickname || nickname.trim() === '') {
            setNicknameError(true);
            return; // Stop navigation if there is an error
        } else {
            setNicknameError(false);
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; // Stop navigation if there are errors
        }

        // Prepare data for submission
        const formData = {
            avatar: Avatar,
            inputValues,
            username,
            nickname,
            data2
        };

        navigate(`/${username}/step2`, { state: formData });
    };

    if (!online) {
        return <NoInternet />;
    }

    if (loading) {
        return <Loading />;
    }


    if (linkStatus) {
        return <NoDataFound style={{ height: '100vh' }}/>;
    }

    return (
        <div className='page1-bg orange-bg'>
            <Row className='d-flex justify-content-center align-items-center h-100 m-0'>
                <Col sm={9} xl={5}>
                    <div className='py-3 pt-4 d-flex justify-content-center align-items-center'>
                        <div className='num-circle bg-black text-white'><p>1</p></div>
                        <div className='bg-black' style={{ width: '40px', height: '2px' }} />
                        <div className='num-circle bg-white rounded-circle'><p>2</p></div>
                        <div className='bg-white' style={{ width: '40px', height: '2px' }} />
                        <div className='num-circle bg-white rounded-circle'><p>3</p></div>
                    </div>

                    <div className='bg-white page1-whitebox mx-1 rounded-5 shadow text-center overflow-hidden'>
                        <img
                            src={selectedAvatar || imagePreview || avatar}
                            alt='avatar'
                            className='mt-1 mb-2 mt-2'
                            width={130}
                            height={130}
                            onClick={handleShow}
                            style={{ cursor: 'pointer' }}
                        />

                        <div className='mx-3 mx-md-5 py-3'>
                            <div className="form-group mb-3 position-relative text-start">
                                <Label className='m-0' style={{ fontWeight: "500" }}>
                                    {getfinallanguageText('nickname')}
                                </Label>
                                <input
                                    className="form-control border-black"
                                    placeholder={getfinallanguageText('placeholder') + ' ' + getfinallanguageText('nickname')}
                                    type='text'
                                    value={nickname}
                                    onChange={(e) => setNickname(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            e.target.blur();
                                        }
                                    }}
                                    maxLength={6}
                                    inputMode='text'
                                    enterKeyHint='next'
                                />

                                <FontAwesomeIcon
                                    icon={faCircleExclamation}
                                    className="position-absolute end-0 translate-middle-y px-3"
                                    style={{ top: "45px", color: nicknameError ? "red" : "black" }}
                                />
                            </div>
                            {data2.map((item, index) => (
                                <div className="form-group mb-3 position-relative text-start" key={index}>
                                    <Label className='m-0' style={{ fontWeight: "500" }}>
                                        {capitalizeFirstLetter(item)}
                                    </Label>
                                    <input
                                        ref={el => inputRefs.current[index] = el}
                                        className="form-control border-black"
                                        placeholder={`${getfinallanguageText('placeholder')} ${(item || '').replace(/\?/g, '')}`}
                                        type='text'
                                        value={inputValues[index] || ''}
                                        onChange={(e) => handleChange(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        maxLength={15}
                                        inputMode='text'
                                        enterKeyHint={index === data2.length - 1 ? 'done' : 'next'}  // Set 'done' for last input
                                    />

                                    <FontAwesomeIcon
                                        icon={faCircleExclamation}
                                        className="position-absolute end-0 translate-middle-y px-3"
                                        style={{ top: "45px", color: errors[index] ? "red" : "black" }}
                                    />
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className='d-flex flex-column justify-content-center align-items-center mx-2 mx-sm-5'>
                        <Button
                            className='bg-white rounded-pill w-75 border-0 py-2 my-4 mx-auto'
                            onClick={handleNextClick}
                        >
                            <span className='fs-5 text-decoration-none text-black'>Next</span>
                        </Button>
                        <MessageBtn />
                    </div>

                    <Offcanvas isOpen={show} toggle={handleClose} direction="bottom" className="h-50 offcanvas-custom">
                        <OffcanvasHeader className='mx-auto w-100 d-flex flex-column justify-content-center'>
                            <p className='bg-secondary rounded-pill mx-auto' style={{ width: "50px", height: "4px" }}></p>
                            <div className='rounded-pill mx-auto overflow-hidden'>
                                <Row>
                                    <Col
                                        className={`gray-bg py-2 px-4 border ${selectedColumn === 'file' ? 'orange-bg' : ''}`}
                                        onClick={handleFileColumnClick}
                                    >
                                        <label htmlFor="fileInput" className='ms-3'>
                                            <img src={gallery} alt='gallery' style={{ cursor: "pointer" }} />
                                            <input
                                                id="fileInput"
                                                type="file"
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                                key={fileInputKey}
                                                onChange={handleFileChange}
                                            />
                                        </label>
                                    </Col>
                                    <Col
                                        className={`gray-bg py-2 px-4 border border-start ${selectedColumn === 'emoji' ? 'orange-bg' : ''}`}
                                        style={{ cursor: "pointer" }}
                                        onClick={handleEmojiClick}
                                    >
                                        <img
                                            src={emoji}
                                            alt='emoji'
                                            className='me-3'
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </OffcanvasHeader>

                        <OffcanvasBody>
                            <Container>
                                <Row>
                                    {isEmojiView ? (
                                        data.length > 0 ? (
                                            data.map((avatarItem) => (
                                                <Col xs={6} lg={4} xl={3} className='text-center' key={avatarItem._id}>
                                                    <div
                                                        className='avatar-container'
                                                        onClick={() => handleAvatarClick(avatarItem.avatarUrl)}
                                                    >
                                                        <img
                                                            src={avatarItem.avatarUrl}
                                                            alt='avatar'
                                                            className={`avatar-image py-3 img-fluid ${selectedAvatar === avatarItem.avatarUrl ? 'selected' : ''}`}
                                                        />
                                                        {selectedAvatar === avatarItem.avatarUrl && (
                                                            <div className='check-overlay'>
                                                                <FontAwesomeIcon icon={faCheck} className='text-white' />
                                                            </div>
                                                        )}
                                                    </div>
                                                </Col>
                                            ))
                                        ) : (
                                            <Col className='text-center'>
                                                <NoDataFound  style={{ height: 'auto' }}/>
                                            </Col>
                                        )
                                    ) : (
                                        <p></p>
                                    )}
                                </Row>
                            </Container>
                        </OffcanvasBody>
                    </Offcanvas>
                </Col>
            </Row>
        </div>
    );
};

export default Page1;
