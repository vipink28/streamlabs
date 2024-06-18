import React, { useEffect } from 'react';
import { IMG_URL } from '../../helper/apirequests';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderDetails, selectHeaderDetails } from '../../features/common/commonSlice';
import GenresList from '../common/GenresList';
import { Link } from 'react-router-dom';

function Header(props) {
    const { video, platform } = props;
    const dispatch = useDispatch();
    const { data, error, status } = useSelector(selectHeaderDetails)

    useEffect(() => {
        if (video && platform) {
            dispatch(fetchHeaderDetails({ platform: platform, id: video.id }))
        }
    }, [video, platform])

    return (
        <div className='h-dvh relative'>
            <img className='w-full h-full object-cover object-center' src={IMG_URL + data?.backdrop_path} alt="" />
            <div className='absolute z-20 top-1/2 left-16 max-w-2xl -translate-y-1/2 w-full pe-6 text-white'>
                <h2 className='font-display text-6xl mb-5'>{data?.name || data?.original_name || data?.title || data?.original_title}</h2>
                <h3 className='text-4xl font-alternate text-yellow-500 mb-4'>{data?.tagline !== "" && data?.tagline}</h3>
                <p className='text-xl'>{data?.overview}</p>
                <GenresList genres={data?.genres} />

                <Link to={`/details/${platform}/${data?.id}`}>View</Link>

            </div>
            <div className='absolute left-0 top-0 bg-gradient-to-r from-slate-950 to-transparent w-full max-w-4xl h-full'></div>
            <div className='absolute left-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent w-full h-80'></div>
        </div>
    );
}

export default Header;