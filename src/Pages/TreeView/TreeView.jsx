import React from 'react';
import styles from './TreeView.module.css';

const TreeView = () => {
    return (
        <ul id='myUL'>
            <li>
                <span className={styles.caret}>Test</span>
            </li>
        </ul>
    );
};

export default TreeView;