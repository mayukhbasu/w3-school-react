import React from 'react';
import styles from './DisplayHover.module.css';

const DisplayHover = () => {
    return (
        <>
            <div className={styles.text}>
                Please Hover Over me
            </div>
            <div className={styles.hoverText}>
                I am shown when someone hovers over the div above.
            </div>
        </>
    );
};

export default DisplayHover;