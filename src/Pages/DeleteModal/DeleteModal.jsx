import React, { useRef } from 'react';
import './DeleteModal.css'

const DeleteModal = () => {

    const deleteModal = useRef();
    const openModal = () => {
        deleteModal.current.style.display= "block";
    }

    const closeModal = () => {
        deleteModal.current.style.display = "none";
    }
    return (
        <>
            <button className='deleteButton' onClick={openModal} >Open Modal</button>
            <div className='modal-delete'ref={deleteModal}>
                <div className='modal-content-delete'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque repellat ullam assumenda autem, expedita aut beatae cumque corporis dignissimos fuga quisquam, sapiente et architecto facilis asperiores totam saepe error consectetur, necessitatibus dicta? Odio nam, necessitatibus blanditiis modi beatae ducimus suscipit cum magnam magni autem ratione eos, placeat iste reiciendis et!
                    <div className='buttons-delete'>
                        <button onClick={closeModal}>Delete</button>
                        <button onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteModal;