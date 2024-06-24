import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNetflixOrginals } from '../features/tv/tvSlice';
import { fetchNowPlayingMovies, selectNowPlayingMovies } from '../features/movie/movieSlice';
import instance from '../helper/axios';
import { apiRequests } from '../helper/apirequests';
import Row from '../components/layout/Row';
import { shuffle } from '../helper';

function Browse(props) {
    const { platform } = useParams();
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(platform === "tv" ? selectNetflixOrginals : selectNowPlayingMovies);

    const [genresList, setGenresList] = useState(null);

    const fetchGenreList = async (platform) => {
        const response = await instance.get(apiRequests.getGenres(platform));
        setGenresList(shuffle(response.data.genres));
    }

    useEffect(() => {
        if (platform) {
            fetchGenreList(platform);
        }
    }, [platform])

    useEffect(() => {
        if (platform === "tv") {
            dispatch(fetchNetflixOriginals())
        } else {
            dispatch(fetchNowPlayingMovies())
        }
    }, [platform]);




    return (
        <>
            {
                status === "success" ?
                    < Header video={data.results[Math.floor(Math.random() * data.results.length)]} platform={platform} />
                    : ""
            }

            <div className='px-4 relative -top-32'>
                {
                    genresList?.map((genre, index) => {
                        return (
                            index < 6 ?
                                <Row key={genre?.id} title={genre?.name} genre={genre} platform={platform} /> : null
                        )
                    })
                }
            </div>
        </>
    );
}

export default Browse;