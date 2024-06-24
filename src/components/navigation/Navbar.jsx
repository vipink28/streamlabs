import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

function Navbar(props) {
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
                    <NavLink link="/browsebygenre">Browse By Genre</NavLink>
                </div>

                <div className='ms-auto'>
                    <input type='search' placeholder='search' />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;