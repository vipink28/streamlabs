import React from 'react';
import { IMG_URL } from '../../helper/apirequests';

function Card(props) {
    const { video } = props;
    return (
        <div className='rounded'>
            <img className='max-w-full inline-block' src={IMG_URL + video.backdrop_path} />
            <div>
                <h5>{video.title || video.original_title || video.name || video.original_name}</h5>
            </div>
        </div>
    );
}

export default Card;