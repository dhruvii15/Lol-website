import React from 'react';


const Title = ({ title, title2 ,description, description2 }) => {
    return (
        <div className='title-bg d-flex align-items-center justify-content-center'>
            <div className='text-center'>
                <h1 className='title-text BwGradualBold text-white m-0'>{title}</h1>
                <h1 className='title-text BwGradualBold text-white'>{title2}</h1>
                <p className='text-white fs-4 BwGradual m-0'>{description}<br />
                    {description2}</p>
            </div>
        </div>
    );
};

export default Title;
