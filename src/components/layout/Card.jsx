import React from 'react';
import { IMG_URL } from '../../helper/apirequests';

function Card(props) {
    const { video } = props;
    return (
        <div className='rounded'>
            <img className='max-w-full inline-block' src={IMG_URL + video.backdrop_path} />
        </div>
    );
}

export default Card;