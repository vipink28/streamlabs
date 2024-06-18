import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideoDetails } from '../features/common/commonSlice';

function Details(props) {
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
        if (params.platform && params.id) {
            dispatch(fetchVideoDetails({ platform: params.platform, id: params.id }))
        }
    }, [params.platform, params.id])


    return (
        <div className='py-24 text-white'>

            {params.platform} {params.id}
        </div>
    );
}

export default Details;