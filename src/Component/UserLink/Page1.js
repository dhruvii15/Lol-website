import React, { useEffect, useState, useCallback, useRef, Suspense } from 'react';
import { Button, Col, Container, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from 'reactstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// img
import gallery from "../../img/gallery.svg";
import emoji from "../../img/avataremoji.svg";
import Loading from '../Loading';
import { useTranslation } from 'react-i18next';

const MessageBtn = React.lazy(() => import('../Messagebtn'));
const NoDataFound = React.lazy(() => import('../NoData'));


const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Page1 = ({ username }) => {

    const { t } = useTranslation();

    const languageMappings = {
        en: {
            nickname: 'Nickname',
            nicknamerequire: "Nickname is required",
            placeholder: 'Enter',
            create: "Create",
            card: "Card"
        },
        hi: {
            nickname: 'उपनाम',
            nicknamerequire: "उपनाम आवश्यक है",
            placeholder: 'दर्ज',
            create: "बनाएं",
            card: "कार्ड"
        },
        es: {
            nickname: 'Apodo',
            nicknamerequire: "Se requiere apodo",
            placeholder: 'Introducir',
            create: "Crear",
            card: "Tarjeta"
        },
        ur: {
            nickname: 'عرفیت',
            nicknamerequire: "عرفی نام درکار ہے۔",
            placeholder: 'داخل کریں',
            create: "بنائیں",
            card: "کارڈ"
        },
        fr: {
            nickname: 'Surnom',
            nicknamerequire: "Le pseudo est obligatoire",
            placeholder: 'Entrez le',
            create: "Créer",
            card: "Carte"
        },
        pt: {
            nickname: 'Apelido',
            nicknamerequire: "O apelido é obrigatório",
            placeholder: 'Digitar',
            create: "Criar",
            card: "Cartão"
        },
        in: {
            nickname: 'Nama panggilan',
            nicknamerequire: "Nama panggilan diperlukan",
            placeholder: 'Memasuki',
            create: "Membuat",
            card: "Kartu"
        },
        ar: {
            nickname: 'كنية',
            nicknamerequire: "اللقب مطلوب",
            placeholder: 'يدخل',
            create: "يخلق",
            card: "بطاقة"
        }
    };

    const getlanguageText = (key) => {
        const languageMapping = languageMappings[language] || languageMappings['en'];
        return languageMapping[key] || '';
    };

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [language, setlanguage] = useState('en');
    const [name, setname] = useState();
    const [show, setShow] = useState(false);
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
    const [userLocation, setUserLocation] = useState('block')


    const handleFileColumnClick = () => {
        setSelectedColumn('file');
    };

    const handleClose = () => {
        setShow(false);
        setIsEmojiView(false);
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (index < data2.length - 1) {
                inputRefs.current[index + 1]?.focus();
            } else {
                e.target.blur();
            }
        }
    };

    const handleShow = () => setShow(true);

    const getData = useCallback(() => {
        axios.post('https://lolcards.link/api/avatar')
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to fetch data.");
            });
    }, []);

    const getData2 = useCallback(() => {
        if (!navigator.onLine) {
            return;
        }
        axios.post('https://lolcards.link/api/user/found', { username })
            .then((res) => {
                const { selectedCardTitle, language, name } = res.data.data;

                if (Array.isArray(selectedCardTitle) && selectedCardTitle.length > 0) {
                    setData2(selectedCardTitle);
                    setlanguage(language || "en");
                    setname(name);
                } else {
                    setData2([]);
                    setlanguage("en");
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to fetch data.");
            })
            .finally(() => {
            });
    }, [username]);


    const requestLocationPermission = () => {
        if ("geolocation" in navigator) {
            // Request location only after user interaction
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation('allow'); // Success callback
                },
                (error) => {
                    console.error("Error getting location:", error); // Log the error for debugging
                    // Handle specific error cases
                    if (error.code === error.POSITION_UNAVAILABLE) {
                        toast.error("Unable to retrieve your location. Please check your location settings.");
                    }
                },
                {
                    timeout: 10000, // Increase timeout to 10 seconds
                    maximumAge: 60000, // Cache the location for 1 minute
                    enableHighAccuracy: true // Request high accuracy if available
                }
            );
        } else {
            toast.error("Geolocation is not supported by your browser.");
        }
    };
    

    useEffect(() => {
        getData();
        getData2();
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
        const value = e.target.value;
        if (value.length <= 20) {
            setInputValues((prevValues) => ({
                ...prevValues,
                [index]: value
            }));
            setErrors((prevErrors) => ({
                ...prevErrors,
                [index]: false
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [index]: true
            }));
        }
    };

    const handleNicknameChange = (e) => {
        const value = e.target.value;
        setNickname(value);
        setNicknameError(value.length === 0 || value.length > 10);
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
        
        requestLocationPermission();
        const newErrors = {};
        data2.forEach((_, index) => {
            if (!inputValues[index] || inputValues[index].trim() === '') {
                newErrors[index] = true;
            }
        });

        if (!nickname || nickname.trim() === '') {
            setNicknameError(true);
            return;
        } else {
            setNicknameError(false);
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Prepare form data
        const formData = {
            avatar: Avatar,
            inputValues,
            username,
            nickname,
            data2,
            userLocation
        };

        // Store form data in sessionStorage
        sessionStorage.setItem('formData', JSON.stringify(formData));

        // Navigate to the new page
        window.location.href = `/${username}/step2`;
    };

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
                        <p className='pt-3 fs-5'>
                            {getlanguageText('create')}
                            <small className='fw-bolder'>
                            {name ? `  ${name.charAt(0).toUpperCase() + name.slice(1)}'s  ` : ''}
                            </small>
                            {getlanguageText('card')}
                        </p>

                        <img
                            src={selectedAvatar || imagePreview || 'https://lolcards.link/api/public/images/avatar.png'}
                            alt='avatar'
                            className='mt-1 mb-2 mt-2 rounded-3'
                            width={130}
                            height={130}
                            onClick={handleShow}
                            style={{
                                cursor: 'pointer',
                                objectFit: imagePreview ? 'cover' : 'unset'
                            }}
                        />

                        <div className='mx-3 mx-md-5 py-3'>
                            <div className="form-group mb-3 position-relative text-start">
                                <div className='d-flex justify-content-between pb-1'>
                                    <Label className='m-0' style={{ fontWeight: "500" }}>
                                        {getlanguageText('nickname')}
                                    </Label>
                                    <div className="text-end mt-1">
                                        <small
                                            style={{
                                                fontSize: "13px",
                                                color: nickname.length >= 10 ? "red" : "inherit"
                                            }}
                                        >
                                            {nickname.length || 0} / 10
                                        </small>
                                    </div>
                                </div>
                                <input
                                    className={`form-control border-black ${nicknameError ? 'is-invalid' : ''}`}
                                    placeholder={getlanguageText('placeholder') + ' ' + getlanguageText('nickname')}
                                    type='text'
                                    value={nickname}
                                    onChange={(e) => handleNicknameChange(e)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            e.target.blur();
                                        }
                                    }}
                                    maxLength={10}
                                    inputMode='text'
                                    enterKeyHint='next'
                                />
                                {nicknameError && (
                                    <div className="invalid-feedback">
                                        {getlanguageText('nicknamerequire')}
                                    </div>
                                )}
                            </div>

                            {data2.map((item, index) => (
                                <div className="form-group mb-3 position-relative text-start" key={index}>
                                    <div className='d-flex justify-content-between pb-1'>
                                        <Label className='m-0' style={{ fontWeight: "500" }}>
                                            {capitalizeFirstLetter(item)}
                                        </Label>
                                        <div className="text-end">
                                            <small
                                                style={{
                                                    fontSize: "13px",
                                                    color: (inputValues[index]?.length || 0) >= 20 ? "red" : "inherit" // Change color to red if limit is reached
                                                }}
                                            >
                                                {(inputValues[index]?.length || 0)} / 20
                                            </small>
                                        </div>
                                    </div>
                                    <input
                                        ref={el => inputRefs.current[index] = el}
                                        className={`form-control border-black ${errors[index] ? 'is-invalid' : ''}`}
                                        placeholder={`${getlanguageText('placeholder')} ${(item || '').replace(/\?/g, '')}`}
                                        type='text'
                                        value={inputValues[index] || ''}
                                        onChange={(e) => handleChange(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        maxLength={20}
                                        inputMode='text'
                                        enterKeyHint={index === data2.length - 1 ? 'done' : 'next'}
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
                            <span className='fs-5 text-decoration-none text-black'>{t('next')}</span>
                        </Button>
                        <Suspense fallback={<div><Loading /></div>}>
                            <MessageBtn color="#fff"/>
                        </Suspense>
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
                                                <Suspense fallback={<div><Loading /></div>}>
                                                    <NoDataFound style={{ height: 'auto' }} />
                                                </Suspense>
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

            <ToastContainer />
        </div>
    );
};

export default Page1;
