import React from 'react';
import { IMG_URL } from '../../helper/apirequests';

function Header(props) {
    const { video } = props;
    return (
        <div className='h-dvh relative'>
            <img className='w-full h-full object-cover object-center' src={IMG_URL + video.backdrop_path} alt="" />
            <div className='absolute z-20 top-1/2 left-16 max-w-2xl -translate-y-1/2 w-full pe-6 text-white'>
                <h2 className='font-display text-6xl mb-5'>{video.name || video.original_name || video.title || video.original_title}</h2>
                <p className='text-xl'>{video.overview}</p>
            </div>
            <div className='absolute left-0 top-0 bg-gradient-to-r from-slate-950 to-transparent w-full max-w-4xl h-full'></div>
            <div className='absolute left-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent w-full h-80'></div>
        </div>
    );
}

export default Header;