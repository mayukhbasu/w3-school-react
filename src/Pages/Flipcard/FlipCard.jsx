import React from 'react';
import './FlipCard.css';

const FlipCard = () => {
    return (
        <>
           <div className='flip-card'>
                <div className='inner-card'>
                    <div className='front'>
                        <img src="./react.png" style={{height:'300px', width: '300px'}}/>
                    </div>
                    <div className='back'>
                        <p>Hello Myself Mayukh</p>
                        <p>I work for software development</p>
                    </div>
                </div>
           </div>
        </>
    );
};

export default FlipCard;