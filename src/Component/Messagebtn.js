// Page2.js
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

const MessageBtn = () => {
    const [count, setCount] = useState(128);

    useEffect(() => {

        const interval = setInterval(() => {
            setCount(prevCount => prevCount + (Math.random() > 0.5 ? 1 : 2));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <p className='py-2 m-0' style={{ fontSize: "12px" , color:"#D9D9D9" }}>👇 <span>{count}</span> people just tapped the button 👇</p>
            <Button className='bg-black rounded-pill w-100 border-0 py-2 mb-4 pulse mt-1'>
                <p className='fs-5 text-decoration-none text-white m-0'>Get own message!</p>
            </Button>
        </>
    );
};

export default MessageBtn;
