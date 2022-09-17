import React, { useRef } from 'react';
import './Snackbar.css'

const Snackbar = () => {
    const snackbar = useRef();
    const showSnackbar = () => {
        snackbar.current.className = 'show';
        setTimeout(() => {
            snackbar.current.className = snackbar.current.className.replace("show", "");
        }, 3000)
    }
    return (
        <>
            <button onClick={showSnackbar}>Show Snackbar</button>
            <div id='snackbar' ref={snackbar}>Some Text Message</div>
        </>
    );
};

export default Snackbar;