import React, { useRef } from 'react';
import './Popups.css';

const Popups = () => {
    const popup = useRef();
    const toggle = () => {
        popup.current.classList.toggle("show");
    }
    return (
        <>
            <div className='popup' onClick={toggle}>Click Me <span className='popuptext' ref={popup}>Popup Text</span> </div>
        </>
    );
};

export default Popups;