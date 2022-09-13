import React, { useRef } from 'react';
import './Modal.css';

const Modal = () => {

    const modal = useRef();
    const open = () => {
        modal.current.style.display = "block";
    }
    const closeModal = () => {
        modal.current.style.display = "none";
    }

    const outsideClick = (e) => {
        if(e.target.id === "modal") {
            modal.current.style.display = "none";
        }
    }
    return (
        <>
            <button className='button' onClick={open}>Open Modal</button>
            <div className='modal' id='modal' ref={modal} onClick={outsideClick}>
                <div className="modal-content" id='modal-content'>
                    <span className='close' id='close' onClick={closeModal}>&times;</span>
                    <p>Some Text in the modal</p>
                </div>
                
            </div>
        </>
    );
};

export default Modal;