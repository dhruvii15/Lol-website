import React, { useState, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// img
import friend from "../../img/friend.svg";
import Family from "../../img/Family.svg";
import GirlFriend from "../../img/GirlFriend.svg";
import BoyFriend from "../../img/BoyFriend.svg";
import Enemy from "../../img/Enemy.svg";
import Stranger from "../../img/Stranger.svg";
import Loading from '../Loading';
import { useTranslation } from 'react-i18next';

const MessageBtn = React.lazy(() => import('../Messagebtn'));

const Page3 = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [avatar, setAvatar] = useState('');
    const [inputValues, setInputValues] = useState({});
    const [cardBg, setCardBg] = useState('');
    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('');
    
    const [hint, setHint] = useState('');
    const [selectedRelation, setSelectedRelation] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Retrieve data from sessionStorage
        const storedData = sessionStorage.getItem('formData');
        if (storedData) {
            const { avatar, inputValues, username, nickname, cardBg } = JSON.parse(storedData);
            setAvatar(avatar || '');
            setInputValues(inputValues || {});
            setUsername(username || '');
            setNickname(nickname || '');
            setCardBg(cardBg || '');
        }
    }, []);

    const handleSelectRelation = (relationLabel, index) => {
        setHint(relationLabel);
        setSelectedRelation(index);
    };

    const relations = [
        { src: friend, alt: t('page3.2'), label: t('page3.2') },
        { src: Family, alt: t('page3.3'), label: t('page3.3') },
        { src: GirlFriend, alt: t('page3.4'), label: t('page3.4') },
        { src: BoyFriend, alt: t('page3.5'), label: t('page3.5') },
        { src: Enemy, alt: t('page3.6'), label: t('page3.6') },
        { src: Stranger, alt: t('page3.7'), label: t('page3.7') },
    ];

    const handleSendClick = async () => {
        if (!hint) {
            toast.error('Please select a relation.');
            return;
        }

        try {
            setLoading(true);

            const formData = new FormData();
            formData.append('username', username);
            formData.append('nickname', nickname);
            formData.append('hint', hint);
            formData.append('bgUrl', cardBg);
            if (avatar) {
                formData.append('avatar', avatar);
            }
            for (let key in inputValues) {
                if (inputValues.hasOwnProperty(key)) {
                    formData.append(`selectedTitleAns${key}`, inputValues[key]);
                }
            }

            const response = await axios.post('https://lolcards.link/api/inbox/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 201) {
                navigate(`/${username}/success`, { state: { username } });
            } else {
                toast.error(response.data.message || 'Error submitting form');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='page1-bg orange-bg'>
                <Row className='d-flex justify-content-center align-items-center h-100 m-0'>
                    <Col sm={9} xl={5}>
                        <div className='py-3 pt-4 d-flex justify-content-center align-items-center'>
                            <div className='num-circle bg-black text-white rounded-circle'><p>1</p></div>
                            <div className='bg-black' style={{ width: '40px', height: '2px' }} />
                            <div className='num-circle bg-black text-white rounded-circle'><p>2</p></div>
                            <div className='bg-black' style={{ width: '40px', height: '2px' }} />
                            <div className='num-circle bg-black text-white'><p>3</p></div>
                        </div>
                        <h3 className='text-center text-white pt-4'>{t('page3.0')}</h3>
                        <p className='text-center text-white fs-5 pb-3 m-0'>{t('page3.1')}</p>

                        <div className=''>
                            <Row className='px-3'>
                                {relations.map((relation, index) => (
                                    <Col
                                        key={index}
                                        xs={6}
                                        className='p-3 d-flex justify-content-center align-items-center'
                                        onClick={() => handleSelectRelation(relation.label, index)}
                                    >
                                        <div
                                            className={`relation-box py-4 rounded-4 shadow ${selectedRelation === index ? 'border border-black border-3' : ''}`}
                                        >
                                            <img
                                                src={relation.src}
                                                alt={relation.alt}
                                                className='img-fluid w-50'
                                                style={{ cursor: 'pointer' }}
                                            />
                                            <h4 className='pt-4 fs-5'>{relation.label}</h4>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>

                        <div className='d-flex flex-column justify-content-center align-items-center mx-2 mx-sm-5'>
                            <Button
                                className='bg-white rounded-pill w-75 border-0 py-2 my-4 mx-auto'
                                onClick={handleSendClick}
                                disabled={loading} // Disable button when loading
                            >
                                <span className='fs-5 text-decoration-none text-black'>{loading ? t('page3.9') : t('page3.8')}</span>
                            </Button>

                            <Suspense fallback={<div><Loading /></div>}>
                                <MessageBtn />
                            </Suspense>
                        </div>
                    </Col>
                </Row>
            </div>
            <ToastContainer />
        </>
    );
};

export default React.memo(Page3);
