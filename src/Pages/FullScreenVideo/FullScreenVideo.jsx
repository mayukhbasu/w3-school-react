import React, { useRef, useState } from 'react';
import './FullScreenVideo.css'

const FullScreenVideo = () => {
    const tekkenVideo = useRef();
    const [buttonLabel, setButtonLabel] = useState(false);

    const pause = () => {
        setButtonLabel(!buttonLabel);
        if(!buttonLabel) {
            tekkenVideo.current.pause();
        } else {
            tekkenVideo.current.play();
        }
    }
    return (
        <>
            <video autoPlay loop muted id='myVideo' ref={tekkenVideo}>
                <source src='armorking.mp4' type='video/mp4'></source>
            </video>
            <div className='content'>
                <button id='myButton' onClick={pause}>{buttonLabel === false ? 'Pause': 'Play'}</button>
            </div>
        </>
    );
};

export default FullScreenVideo;