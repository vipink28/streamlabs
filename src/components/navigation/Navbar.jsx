import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

function Navbar(props) {
    return (
        <nav className='bg-violet-800 text-white'>
            <div className='px-4 flex items-center gap-4'>
                <div className='py-2'>
                    <Link to="/" className='text-2xl font-bold'>StreamLabs</Link>
                </div>
                {/* menu */}
                <div className='flex items-center'>
                    <NavLink link="/">Home</NavLink>
                    <NavLink link="/">Tv Shows</NavLink>
                    <NavLink link="/">Movies</NavLink>
                    <NavLink link="/">Browse By Genre</NavLink>
                </div>

                <div className='ms-auto'>
                    <input type='search' placeholder='search' />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;