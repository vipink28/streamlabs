import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLink from './NavLink';
import { useDispatch } from 'react-redux';
import { searchVideos } from '../../features/common/commonSlice';

function Navbar(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSearch = (e) => {
        let { value } = e.target;
        if (value.length > 3) {
            dispatch(searchVideos({ platform: "movie", query: value }))
            navigate("/search");
        }
    }

    return (
        <nav className='bg-gradient-to-b from-slate-950 to-transparent text-white fixed w-full z-50 transition-colors duration-300'>
            <div className='px-4 flex items-center gap-4'>
                <div className='py-2'>
                    <Link to="/" className='text-2xl font-bold'>StreamLabs</Link>
                </div>
                {/* menu */}
                <div className='flex items-center'>
                    <NavLink link="/">Home</NavLink>
                    <NavLink link="/browse/tv">Tv Shows</NavLink>
                    <NavLink link="/browse/movie">Movies</NavLink>
                    <NavLink link="/browsebygenre/movie/28">Browse By Genre</NavLink>
                </div>

                <div className='ms-auto'>
                    <input onChange={handleSearch} type='search' placeholder='search' />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;