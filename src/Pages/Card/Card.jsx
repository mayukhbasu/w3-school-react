import React from 'react';
import './Card.css'
const Card = () => {
    return (
        <>
            <div className='card'>
                <div className="card-image">
                    <img src="./react.png"/>
                </div>
                <div className='card-body'>
                    Hello I am card body
                </div>
                <div className='footer'>
                    <button>Test</button>
                </div>
            </div>
        </>
    );
};

export default Card;