import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideoDetails, selectVideoDetails } from '../features/common/commonSlice';
import { IMG_URL } from '../helper/apirequests';
import VideoPlayer from '../components/common/VideoPlayer';

function Details(props) {
    const { data, error, status } = useSelector(selectVideoDetails);
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
        if (params.platform && params.id) {
            dispatch(fetchVideoDetails({ platform: params.platform, id: params.id }))
        }
    }, [params.platform, params.id])


    return (
        <div className='py-24 text-white'>
            {status === "success" ?
                <div className='px-6'>
                    <VideoPlayer videosList={data?.videos.results} />
                    {/* <img src={IMG_URL + data.backdrop_path} alt="" /> */}
                </div> : <p>"loading..."</p>
            }
        </div>
    );
}

export default Details;