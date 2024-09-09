import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const FAQ = () => {
    const [open, setOpen] = useState('');

    const toggle = (id) => {
        setOpen(open === id ? '' : id);
    };

    return (
        <div className="faq-container">
            <div className="faq-item my-4 rounded-3 bg-pink">
                <div
                    className={`faq-header d-flex justify-content-between align-items-center cursor`}
                    onClick={() => toggle('1')}
                    style={{ padding: '1rem' }}
                >
                    <span>Q: What is and isn’t allowed on LOL?</span>
                    <span>{open === '1' ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
                </div>
                {open === '1' && (
                    <div className="faq-body" style={{ padding: '1rem' }}>
                        A: Our Community Guidelines and Terms of Service provide an overview of behaviors and content that are and are not permitted on LOL. In general, LOL is a place for you to have fun, be kind, and make connections; we recommend keeping your communications positive and lighthearted to uplift your LOL community.
                    </div>
                )}
            </div>

            <div className="faq-item my-4 rounded-3 bg-pink">
                <div
                    className={`faq-header d-flex justify-content-between align-items-center cursor `}
                    onClick={() => toggle('2')}
                    style={{ padding: '1rem' }}
                >
                    <span>Q: Can I block message senders on LOL ?</span>
                    <span>{open === '2' ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
                </div>
                {open === '2' && (
                    <div className="faq-body" style={{ padding: '1rem' }}>
                        A: Yes; to block an individual, just tap the Report button (⚠), report the message, and tap “Block user”. The message will be deleted from your inbox and the user will be forbidden from sending you any further messages.
                    </div>
                )}
            </div>

            <div className="faq-item my-4 rounded-3 bg-pink">
                <div
                    className={`faq-header d-flex justify-content-between align-items-center cursor `}
                    onClick={() => toggle('3')}
                    style={{ padding: '1rem' }}
                >
                    <span>Q: I received an emergency message; what do I do?</span>
                    <span>{open === '3' ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
                </div>
                {open === '3' && (
                    <div className="faq-body" style={{ padding: '1rem' }}>
                    A :
                    <a
                        href="mailto:help@lolcards.link?subject=Support%20Request&body=Please%20describe%20your%20issue%20here."
                        className='text-black'
                    >
                         help@lolcards.link
                    </a>
                    </div>
                )}
            </div>

            <div className="faq-item my-4 rounded-3 bg-pink">
                <div
                    className={`faq-header d-flex justify-content-between align-items-center cursor `}
                    onClick={() => toggle('4')}
                    style={{ padding: '1rem' }}
                >
                    <span>Q: I rceived a concerning message; what do I do?</span>
                    <span>{open === '4' ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
                </div>
                {open === '4' && (
                    <div className="faq-body" style={{ padding: '1rem' }}>
                        A :
                        <a
                            href="mailto:help@lolcards.link?subject=Support%20Request&body=Please%20describe%20your%20issue%20here."
                            className='text-black'
                        >
                             help@lolcards.link
                        </a>
                    </div>
                )}
            </div>

            <div className="faq-item my-4 rounded-3 bg-pink">
                <div
                    className={`faq-header d-flex justify-content-between align-items-center cursor `}
                    onClick={() => toggle('5')}
                    style={{ padding: '1rem' }}
                >
                    <span className='pe-5 ps-'>Q: I’m looking for resources to reach out to. Where can I find these?</span>
                    <span>{open === '5' ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
                </div>
                {open === '5' && (
                    <div className="faq-body" style={{ padding: '1rem' }}>
                        A: Check our Resources page in our Safety Center for an extensive list of safety and wellbeing services supporting our LOL community.
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQ;
