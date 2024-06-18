import React from 'react';
import { Link } from 'react-router-dom';

function GenresList(props) {
    const { genres } = props;
    return (
        <div className='flex gap-3 py-3'>
            {
                genres?.map((genre) => (
                    <Link key={genre.id} to="/" className='py-2 px-3 bg-violet-600 text-white rounded-full'>{genre.name}</Link>
                ))
            }

        </div>
    );
}

export default GenresList;