import React, { useRef } from 'react';
import './Popups.css';

const Popups = () => {
    const popup = useRef();
    const toggle = () => {
        popup.current.classList.toggle('show');
    }
    return (
        <>
            <div className='popup' onClick={toggle} >Click Here 
            <span className='popupText' ref={popup}>This is the popup text</span></div>
        </>
    );
};

export default Popups;