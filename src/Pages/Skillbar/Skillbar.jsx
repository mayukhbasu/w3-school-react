import React from 'react';
import styles from './Skillbar.module.css'

const Skillbar = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.html}>90%</div>
            </div>
            <div className={styles.container}>
                <div className={styles.css}>80%</div>
            </div>
            <div className={styles.container}>
                <div className={styles.js}>65%</div>
            </div>
        </>
    );
};

export default Skillbar;