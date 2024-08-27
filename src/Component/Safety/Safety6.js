import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Safety6 = () => {
    return (
        <div className='BwGradual fs-5 px-0 px-md-5'>
            <div className='d-flex gap-3 pt-5 ps-4'>
                    <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{fontSize:"8px"}} className='pb-1'/></p>
                    <p className='m-0'>To contact the LOL Support Team, reach out to us at help@LOLapp.com.</p>
                </div>
                <div className='d-flex gap-3 ps-4'>
                    <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{fontSize:"8px"}} className='pb-1'/></p>
                    <p className='m-0'>To directly contact our LOL Safety Team, reach out at safety@LOLapp.com.</p>
                </div>
                <div className='d-flex gap-3 ps-4'>
                    <p className='m-0'><FontAwesomeIcon icon={faCircle} style={{fontSize:"8px"}} className='pb-1'/></p>
                    <p className='m-0'>Information requesters, such as law enforcement, should reach out to lawenforcement@LOLapp.com with the materials detailed here.</p>
                </div>
        </div>
    );
};

export default Safety6;
