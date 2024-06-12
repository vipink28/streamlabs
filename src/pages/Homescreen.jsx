import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, netflixOrignalsSelector } from '../features/tv/tvSlice';

function Homescreen(props) {
    const netflix = useSelector(netflixOrignalsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])

    console.log(netflix);

    return (
        <div>
            Homescreen
        </div>
    );
}

export default Homescreen;