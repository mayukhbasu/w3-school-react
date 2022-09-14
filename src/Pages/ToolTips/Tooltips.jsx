import React from 'react';
import styles from './Tooltips.module.css'

const Tooltips = () => {
    return (
        <>
            <div className={styles.container}>
                <h2>Tooltip</h2>
                <p>Move the mouse over the text below:</p>
                <div className={styles.tooltip}>
                    Hover over me <span className={styles.tooltipText}>Tooltip text</span>
                </div>
            </div>
        </>
    );
};

export default Tooltips;