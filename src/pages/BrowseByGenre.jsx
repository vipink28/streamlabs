import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../helper/axios';
import { apiRequests } from '../helper/apirequests';
import Card from '../components/layout/Card';

function BrowseByGenre(props) {
    const { platform, genreid } = useParams();
    const [genresList, setGenresList] = useState(null);
    const [currentPlatform, setCurrentPlatform] = useState("");

    const fetchGenreList = async (platform) => {
        const response = await instance.get(apiRequests.getGenres(platform));
        setGenresList(response.data.genres);
    }

    const [videosByGenre, setVideosByGenre] = useState(null);

    const fetchVideoByGenre = async (platform, genreid) => {
        const response = await instance.get(apiRequests.getByGenre(platform, genreid));
        setVideosByGenre(response.data)
    }

    const handlePlatform = (e) => {
        let { value } = e.target;
        fetchGenreList(value);
        setCurrentPlatform(value);
    }

    const handleGenre = (e) => {
        let { value } = e.target;
        fetchVideoByGenre(currentPlatform, value);
    }

    useEffect(() => {
        if (platform) {
            fetchGenreList(platform);
            setCurrentPlatform(platform);
        }
    }, [platform])

    useEffect(() => {
        if (platform && genreid) {
            fetchVideoByGenre(platform, genreid);
        }
    }, [platform, genreid]);

    return (
        <div className='py-20'>
            <div className='py-5 flex'>
                <div className='flex ms-auto'>
                    <select name='platform' onChange={handlePlatform}>
                        <option value="tv">Tv Shows</option>
                        <option value="movie">Movies</option>
                    </select>
                    <select onChange={handleGenre}>
                        {
                            genresList?.map((genre) => (
                                <option value={genre?.id}>{genre?.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className='flex flex-wrap'>
                {
                    videosByGenre?.results.map((video) => {
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

export default BrowseByGenre;