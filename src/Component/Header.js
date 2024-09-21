/* eslint-disable */
import React, { useState } from 'react';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons/faBarsStaggered';

// img
import logo from '../img/logo.png';
import { useTranslation } from 'react-i18next';

const Header = ({ activeLink }) => {

    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handleAppstoreClick = () => {
        const appstore = 'https://apps.apple.com/in/app/carrom-king/id1227693816';

        window.open(appstore, '_blank');
    };


    const handlePlaystoreClick = () => {
        const playstore = 'https://play.google.com/store/apps/details?id=com.pazugames.avatarworld';
        
        window.open(playstore, '_blank');
    };

    return (
        <div id="top">
            <Container>
                <Navbar expand="lg" className="h6-nav-bar pt-0">
                    <NavbarBrand href="/">

                        <img
                            src={logo}
                            alt="LOL"
                            className="img-fluid"
                            style={{ width: '130px' }}
                        />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle}><span> <FontAwesomeIcon icon={faBarsStaggered} className='fs-3' /> </span></NavbarToggler>
                    <Collapse isOpen={isOpen} navbar className="font-18" id="h6-info">
                        <Nav navbar className='mx-auto rounded-pill nav-border BwGradual'>
                            <NavItem>
                                <p
                                    className={`nav-link px-4 fw-bold cursor m-0 ${activeLink === 'safety' ? 'active' : ''}`}
                                    style={{ fontSize: "19px" }}
                                    onClick={() => window.location.href = "/safety"}
                                >
                                    
                <p>{t('welcome')}</p>
                                </p>
                            </NavItem>
                            <NavItem>
                                <p
                                    className={`nav-link px-4 fw-bold cursor m-0 ${activeLink === 'blog' ? 'active' : ''}`}
                                    style={{ fontSize: "19px" }}
                                    onClick={() => window.location.href = "/blog"}
                                >
                                    Blog
                                </p>
                            </NavItem>
                            <NavItem>
                                <a
                                    href="mailto:help@lolcards.link?subject=Support%20Request&body=Please%20describe%20your%20issue%20here."
                                    className={`nav-link px-4 fw-bold ${activeLink === 'contact' ? 'active' : ''}`}
                                    style={{ fontSize: "19px" }}
                                >
                                    Contact us
                                </a>

                            </NavItem>
                        </Nav>
                        <div className='border rounded-pill p-2 bg-black d-flex align-items-center justify-content-center ms-3 ms-lg-0' style={{ width: "130px" }}>
                            <div className='px-3 border-end border-light border-2 cursor' onClick={handleAppstoreClick} >
                                <svg className="logo-img" width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6959 25.5696C23.5529 24.2623 23.8725 23.5941 24.5261 22.127C19.7036 20.2967 18.9337 13.426 23.6982 10.7969C22.2456 8.96662 20.1975 7.90625 18.2655 7.90625C16.8711 7.90625 15.9124 8.26941 15.0553 8.6035C14.329 8.87949 13.6754 9.12642 12.8619 9.12642C11.9904 9.12642 11.2205 8.85044 10.4071 8.55992C9.52101 8.24036 8.5913 7.90625 7.42924 7.90625C5.26489 7.90625 2.95531 9.2281 1.4882 11.4941C-0.574458 14.6898 -0.211313 20.6744 3.11509 25.7875C4.30621 27.6177 5.90404 29.6659 7.98123 29.6949C8.85278 29.7095 9.41928 29.448 10.0439 29.172C10.7557 28.8524 11.5256 28.5038 12.8765 28.5038C14.2274 28.4893 14.9827 28.8524 15.6945 29.172C16.3046 29.448 16.8565 29.7095 17.7136 29.6949C19.8198 29.6659 21.5048 27.3999 22.6959 25.5696Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9611 0.642578C18.1935 2.24041 17.5399 3.82374 16.6828 4.9277C15.7677 6.11881 14.1699 7.04845 12.6301 6.99035C12.3542 5.45061 13.0659 3.86729 13.9375 2.80691C14.9107 1.64484 16.5521 0.744259 17.9611 0.642578Z" fill="white" />
                                </svg>
                            </div>
                            <div className='px-3 cursor' onClick={handlePlaystoreClick}>
                                <svg className="logo-img" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g mask="url(#mask0_757_696)">
                                        <path d="M22.6456 10.3813V21.9978C22.6456 23.0354 21.8381 23.8775 20.8147 23.9324L20.7081 23.9353L19.4228 23.935L19.4229 27.8983C19.4229 28.8646 18.6805 29.6402 17.7285 29.6926L17.6258 29.6954C16.6595 29.6954 15.8838 28.953 15.8315 28.0011L15.8286 27.8983L15.8281 23.935H13.4341L13.4343 27.8983C13.4343 28.8646 12.692 29.6402 11.74 29.6926L11.6372 29.6954C10.671 29.6954 9.89527 28.953 9.84293 28.0011L9.84011 27.8983L9.83995 23.935L8.55488 23.9353C7.5173 23.9353 6.67526 23.1278 6.62027 22.1044L6.61742 21.9978V10.3813H22.6456ZM4.1516 10.073C5.11787 10.073 5.89355 10.8154 5.9459 11.7674L5.94872 11.8701V19.3558C5.94872 20.3566 5.15238 21.1529 4.1516 21.1529C3.18533 21.1529 2.40965 20.4106 2.35731 19.4586L2.35449 19.3558V11.8701C2.35449 10.8694 3.15083 10.073 4.1516 10.073ZM25.1115 10.073C26.0778 10.073 26.8534 10.8154 26.9058 11.7674L26.9086 11.8701V19.3558C26.9086 20.3566 26.1123 21.1529 25.1115 21.1529C24.1452 21.1529 23.3695 20.4106 23.3172 19.4586L23.3144 19.3558V11.8701C23.3144 10.8694 24.1107 10.073 25.1115 10.073ZM19.6073 0.641613C19.6497 0.642043 19.6893 0.653033 19.7284 0.674663C19.8423 0.737804 19.8882 0.861171 19.847 0.978037L19.8274 1.02143L18.5615 3.30841C20.943 4.54758 22.5688 6.87771 22.6429 9.56455L22.6456 9.74829H6.61742C6.62064 7.04561 8.19356 4.68296 10.5403 3.39458L10.7015 3.30841L9.43555 1.02143C9.36434 0.892954 9.40648 0.745697 9.53463 0.674663C9.57365 0.653033 9.61324 0.642072 9.65572 0.641613C9.7315 0.640909 9.804 0.672342 9.85414 0.733497L9.88139 0.773738L11.1639 3.08549C12.213 2.62014 13.3897 2.35894 14.6315 2.35894C15.7846 2.35894 16.8816 2.58416 17.8724 2.98892L18.0991 3.08549L19.3816 0.773738C19.4301 0.686201 19.5163 0.64076 19.6073 0.641613ZM10.9327 5.47705C10.5668 5.47705 10.2639 5.77992 10.2639 6.14581C10.2639 6.5117 10.5668 6.81457 10.9327 6.81457C11.2986 6.81457 11.6014 6.5117 11.6014 6.14581C11.6014 5.77992 11.2986 5.47705 10.9327 5.47705ZM18.3303 5.47705C17.9644 5.47705 17.6615 5.77992 17.6615 6.14581C17.6615 6.5117 17.9644 6.81457 18.3303 6.81457C18.6962 6.81457 18.999 6.5117 18.999 6.14581C18.999 5.77992 18.6962 5.47705 18.3303 5.47705Z" fill="white" />
                                    </g>
                                </svg>
                            </div>

                        </div>

                    </Collapse>
                </Navbar>
            </Container>
        </div>
    );
}

export default Header;
