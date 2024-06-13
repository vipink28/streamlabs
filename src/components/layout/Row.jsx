import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNowPlayingMovies, selectNowPlayingMovies } from '../../features/movie/movieSlice';
import Card from './Card';

function Row(props) {
    const nowPlaying = useSelector(selectNowPlayingMovies);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNowPlayingMovies());
    }, [])
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={5}
        >
            {
                nowPlaying.data?.results ?
                    nowPlaying.data.results.map((video) => (
                        <SwiperSlide key={video.id}>
                            <Card video={video} />
                        </SwiperSlide>
                    )) : ""
            }

        </Swiper>
    );
}

export default Row;