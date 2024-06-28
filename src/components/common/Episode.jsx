import React from 'react';
import { IMG_URL } from '../../helper/apirequests';
import { truncateText } from '../../helper';

function Episode(props) {
    const { episode } = props;
    const { episode_number, name, overview, runtime, still_path } = episode;
    return (
        <div className='p-4 flex items-center gap-3'>
            <div className='w-10'>{episode_number}</div>
            <div className='w-1/5'><img className='max-w-full inline-block' src={IMG_URL + still_path} alt="" /></div>
            <div className='w-2/4'>
                <h4 className='text-2xl font-semibold'>{name}</h4>
                <p className='text-lg'>{truncateText(overview, 80)}</p>
            </div>
            <div className='w-1/5'>
                {runtime}
            </div>
        </div>
    );
}

export default Episode;