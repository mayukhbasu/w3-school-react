import React, { useRef } from 'react';
import './Snackbar.css'

const Snackbar = () => {
    const snackbar = useRef();
    const snak = () => {
        snackbar.current.className = "show";
        setTimeout(() => {
            snackbar.current.className = snackbar.current.className.replace("show", "");
        }, 2000)
    }
    return (
        <>
            <button onClick={snak}>Show Snackbar</button>
            <div id='snackbar' className='snackbar' ref={snackbar}>This is the snackbar text</div>
        </>
    )
};

export default Snackbar;