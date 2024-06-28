import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideoDetails, selectVideoDetails } from '../features/common/commonSlice';
import { IMG_URL, apiRequests } from '../helper/apirequests';
import VideoPlayer from '../components/common/VideoPlayer';
import Ratings from '../components/common/Ratings';
import Card from '../components/layout/Card';
import instance from '../helper/axios';
import Episode from '../components/common/Episode';

function Details(props) {
    const { data, error, status } = useSelector(selectVideoDetails);
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
        if (params.platform && params.id) {
            dispatch(fetchVideoDetails({ platform: params.platform, id: params.id }))
        }
    }, [params.platform, params.id])

    const [seasonList, setSeasonList] = useState(null);

    const fetchSeasonList = async (platform, seriesid, seasonnumber) => {
        const response = await instance.get(apiRequests.getSeasonList(platform, seriesid, seasonnumber));
        setSeasonList(response.data);
    }

    useEffect(() => {
        if (params.platform === "tv" && data) {
            fetchSeasonList(params.platform, data?.id, data?.seasons[0].season_number)
        }
    }, [params.platform, data])

    const handleSeasons = (e) => {
        let { value } = e.target;
        fetchSeasonList(params.platform, data?.id, value);
    }

    return (
        <div className='py-24 text-white'>
            {status === "success" ?
                <div className='px-6'>
                    <VideoPlayer videosList={data?.videos.results} />
                    {/* <img src={IMG_URL + data.backdrop_path} alt="" /> */}
                </div> : <p>"loading..."</p>
            }
            <div className='flex gap-4 mt-8'>
                <div className='w-1/3'>
                    <div className='px-5'>
                        <img className='max-w-full inline-block' src={IMG_URL + data?.poster_path} alt={data?.title || data?.name} />
                    </div>
                </div>
                <div className='w-2/3'>
                    <div className='mb-4'>
                        <h1 className='font-display text-6xl mb-5'>{data?.title || data?.original_title || data?.name || data?.original_name}</h1>
                        <h3 className='text-4xl font-alternate text-yellow-500 mb-4'>{data?.tagline !== "" && data?.tagline}</h3>
                    </div>
                    <div className='flex gap-3'>
                        <div>
                            <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count} />
                        </div>
                        <div>
                            {data?.runtime}
                        </div>
                        <div>
                            {data?.release_date || data?.first_air_date}
                        </div>
                    </div>
                    <div className='w-4/5 mt-5'>
                        <p>{data?.overview}</p>
                    </div>
                    <h3 className='text-2xl font-bold mt-5'>Recommended</h3>
                    <div className='flex gap-3 flex-wrap mt-5'>
                        {
                            data?.recommendations.results.map((video, index) => (
                                index < 8 ?
                                    <div className='w-1/5'>
                                        <Card video={video} platform={params.platform} />
                                    </div> : ""
                            ))
                        }
                    </div>
                    {
                        data?.seasons ?
                            <div className='py-4'>
                                <div className='flex'>
                                    <select className='text-black' name="season" onChange={handleSeasons}>
                                        {
                                            data?.seasons.map((season) => (
                                                <option value={season?.season_number}>{season?.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div>
                                    {
                                        seasonList?.episodes.map((episode) => (
                                            <Episode episode={episode} />
                                        ))
                                    }
                                </div>
                            </div> : ""
                    }
                </div>
            </div>
        </div>
    );
}

export default Details;