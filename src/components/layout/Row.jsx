import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import instance from '../../helper/axios';
import { apiRequests } from '../../helper/apirequests';


function Row(props) {
    const { title, action, selector, platform, genre } = props;
    const [videosByGenre, setVideosByGenre] = useState(null);
    const collection = useSelector(genre ? (state) => state.common.headerDetails : selector);
    const dispatch = useDispatch();

    const fetchVideoByGenre = async (platform, genreid) => {
        const response = await instance.get(apiRequests.getByGenre(platform, genreid));
        setVideosByGenre(response.data.results)
    }

    useEffect(() => {
        if (genre && platform) {
            fetchVideoByGenre(platform, genre.id);
        }
    }, [genre, platform])

    useEffect(() => {
        if (!genre) {
            dispatch(action());
        }
    }, [genre])
    return (
        <div className='py-5'>
            <h4 className='text-white font-semibold text-2xl mb-5'>{title}</h4>
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                modules={[Navigation]}
                navigation
            >
                {
                    genre ?
                        videosByGenre ?
                            videosByGenre.map((video) => (
                                <SwiperSlide key={video.id}>
                                    <Card video={video} platform={platform} />
                                </SwiperSlide>
                            )) : ""
                        : collection.data?.results ?
                            collection.data.results.map((video) => (
                                <SwiperSlide key={video.id}>
                                    <Card video={video} platform={platform} />
                                </SwiperSlide>
                            )) : ""
                }
            </Swiper>
        </div>
    );
}

export default Row;