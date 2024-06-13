import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, netflixOrignalsSelector } from '../features/tv/tvSlice';
import Header from '../components/layout/Header';
import Row from '../components/layout/Row';

function Homescreen(props) {
    const { data, status, error } = useSelector(netflixOrignalsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])

    return (
        <>
            {
                status === "success" ?
                    < Header video={data.results[Math.floor(Math.random() * data.results.length)]} />
                    : ""
            }

            <div className='px-4'>
                <Row />
            </div>

        </>
    );
}

export default Homescreen;