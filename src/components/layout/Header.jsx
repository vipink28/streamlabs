import React from 'react';
import { IMG_URL } from '../../helper/apirequests';

function Header(props) {
    const { video } = props;
    return (
        <div>
            <img src={IMG_URL + video.backdrop_path} alt="" />
            <div className=''>
                <h2>{video.name || video.original_name || video.title || video.original_title}</h2>
                <p>{video.overview}</p>
            </div>
        </div>
    );
}

export default Header;