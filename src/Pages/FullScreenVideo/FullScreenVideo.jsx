import React from 'react';
import './FullScreenVideo.css'

const FullScreenVideo = () => {
    return (
        <>
            <video autoPlay loop muted id='myVideo'>
                <source src='armorking.mp4' type='video/mp4'></source>
            </video>
            <div className='content'>
                <button id='myButton'>Pause</button>
            </div>
        </>
    );
};

export default FullScreenVideo;