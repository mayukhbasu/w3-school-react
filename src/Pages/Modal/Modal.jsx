import React from 'react';
import './Modal.css';

const Modal = () => {
    return (
        <>
            <button className='button'>Open Modal</button>
            <div className='modal'>
                <div className="modal-content">
                    <span className='close'>&times;</span>
                    <p>Some Text in the modal</p>
                </div>
                
            </div>
        </>
    );
};

export default Modal;