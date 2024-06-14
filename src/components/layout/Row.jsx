import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';


function Row(props) {
    const { title, action, selector } = props;
    const collection = useSelector(selector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(action());
    }, [])
    return (
        <div className='py-5'>
            <h4 className='font-semibold text-xl mb-3'>{title}</h4>
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                modules={[Navigation]}
                navigation
            >
                {
                    collection.data?.results ?
                        collection.data.results.map((video) => (
                            <SwiperSlide key={video.id}>
                                <Card video={video} />
                            </SwiperSlide>
                        )) : ""
                }
            </Swiper>
        </div>
    );
}

export default Row;