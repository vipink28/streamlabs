import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNetflixOrginals } from '../features/tv/tvSlice';
import Header from '../components/layout/Header';
import Row from '../components/layout/Row';
import { fetchNowPlayingMovies, selectNowPlayingMovies } from '../features/movie/movieSlice';
import { platformTypes } from '../helper/apirequests';

function Homescreen(props) {
    const { data, status, error } = useSelector(selectNetflixOrginals);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])

    return (
        <>
            {
                status === "success" ?
                    < Header video={data.results[Math.floor(Math.random() * data.results.length)]} platform={platformTypes.tv} />
                    : ""
            }
            <div className='px-4 relative -top-32'>
                <Row title="Now Playing Movies" action={fetchNowPlayingMovies} selector={selectNowPlayingMovies} platform={platformTypes.movie} />
                <Row title="Netflix Originals" action={fetchNetflixOriginals} selector={selectNetflixOrginals} platform={platformTypes.tv} />
            </div>
        </>
    );
}

export default Homescreen;