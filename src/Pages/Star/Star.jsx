import React from 'react';
import './Star.css';

const Star = () => {
    return (
        <>
           <h1>Pure CSS Star Rating Widget</h1>
           <fieldset className='rating'>
                <input type="radio" name='rating' id='star5'/>
                <label className='full' htmlFor='star5'></label>
                <input type="radio" name='rating' id='star4'/>
                <label className='full' htmlFor='star4'></label>
                <input type="radio" name='rating' id='star3'/>
                <label className='full' htmlFor='star3'></label>
                <input type="radio" name='rating' id='star2'/>
                <label className='full' htmlFor='star2'></label>
                <input type="radio" name='rating' id='star1'/>
                <label className='full' htmlFor='star1'></label>
           </fieldset>
        </>
    );
};

export default Star;