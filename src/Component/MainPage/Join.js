import React from 'react';

// img
import circle from "../../img/join-circle.png"
import join from "../../img/scanner.svg"

const Join = () => {


    return (
        <div className='join-bg overflow-hidden d-flex align-items-center position-relative justify-content-center'>
            <div className='overflow-hidden d-flex align-items-center justify-content-center join-main'>
                <img src={circle} alt='circle' className='rotate circle-img' />
                <div className='position-absolute text-center join-child w-100'>
                    <img src={join} alt='join-us' />
                    <h1 className='title-text BwGradualBold text-white'>Join</h1>
                    <h1 className='title-text BwGradualBold text-white'>the fun</h1>
                </div>
            </div>

        </div>
    );
};

export default Join;
