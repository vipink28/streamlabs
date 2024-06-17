import React from 'react';
import { IMG_URL } from '../../helper/apirequests';

function Card(props) {
    const { video } = props;
    return (
        <div className='rounded-md overflow-hidden relative cursor-pointer group'>
            <img className='max-w-full inline-block' src={IMG_URL + video.backdrop_path} />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent text-white'>
                <div className='h-24 absolute left-0 p-4 bg-gradient-to-t from-slate-900 to-transparent -bottom-9 w-full group-hover:bottom-0 transition-all duration-300'>
                    <h5 className='w-5/6 font-display text-xl truncate'>{video.title || video.original_title || video.name || video.original_name}</h5>
                </div>
            </div>
        </div>
    );
}

export default Card;