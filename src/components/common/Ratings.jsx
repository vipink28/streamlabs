import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Ratings(props) {
    const { voteAverage, voteCount } = props;
    let voteRating = voteAverage / 2;
    const voteArr = [...Array(5)];
    return (
        <div className='flex items-center'>
            {
                voteArr.map((item, index) => (
                    index < voteRating ?
                        <FontAwesomeIcon icon={solidStar} /> :
                        <FontAwesomeIcon icon={faStar} />
                ))
            }
            <p className='ms-3'>({voteCount})</p>
        </div>
    );
}

export default Ratings;