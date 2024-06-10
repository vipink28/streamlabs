import React from 'react';
import { Link } from 'react-router-dom';

function NavLink(props) {
    const { link, children } = props;
    return (
        <Link to={link} className='font-semibold text-white no-underline py-4 px-3 hover:bg-violet-400 transition'>
            {children}
        </Link>
    );
}

export default NavLink;