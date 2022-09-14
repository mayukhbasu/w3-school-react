import React, { useRef } from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {

    const myBar = useRef();
    const move = () => {
        let width = 0;
        const progress = setInterval(() => {
            if(width >= 100) {
                clearInterval(progress);
            } else {
                width++;
                myBar.current.style.width = width + '%';
            }
        }, 10)
        console.log("Move");
    }
    return (
        <>
        <h2>Progress Bar Javascript</h2>
            <div className={styles.myProgress}>
                <div className={styles.myBar} ref={myBar}></div>
            </div>
            <button className={styles.button} onClick={move}>Progress</button>
        </>
    );
};

export default ProgressBar;