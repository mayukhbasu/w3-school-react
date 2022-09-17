import React from 'react';
import './FlipCard.css';

const FlipCard = () => {
    return (
        <>
            <div className='flip-card'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <img src='./react.png' alt='avatar' style={{width: '300px', height: '300px'}}/>
                    </div>
                    <div className='flip-card-back'>
                        <h1>Mayukh Basu</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlipCard;