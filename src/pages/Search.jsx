import React, { useEffect, useState } from 'react';
import instance from '../helper/axios';
import { apiRequests } from '../helper/apirequests';
import { useSelector } from 'react-redux';
import Card from '../components/layout/Card';

function Search(props) {
    const [videosBySearch, setVideosBySearch] = useState(null);
    const { platform, query } = useSelector((state) => (state.common.searchParameters));

    const fetchVideoByGenre = async (platform, query) => {
        const response = await instance.get(apiRequests.getBySearch(platform, query));
        setVideosBySearch(response.data);
    }

    useEffect(() => {
        if (platform, query) {
            fetchVideoByGenre(platform, query)
        }
    }, [platform, query])

    return (
        <div className='py-20'>
            <div className='flex flex-wrap'>
                {
                    videosBySearch?.results.map((video) => {
                        return (
                            <div className='w-1/5 p-5'>
                                <Card video={video} platform={platform} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Search;