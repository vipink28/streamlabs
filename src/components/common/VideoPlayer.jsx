import React, { useEffect, useState } from 'react';

const VideoPlayer = (props) => {
    const { videosList } = props;
    const [key, setKey] = useState(null);
    useEffect(() => {
        const trailer = videosList.find((item) => (
            item.site === "YouTube" && item.type === "Trailer"
        ))
        setKey(trailer.key);
    }, [videosList])

    return (
        <div className='relative'>
            {
                key ?
                    <iframe className='aspect-video w-full' src={`https://www.youtube.com/embed/${key}?rel=0&autoplay=1&mute=1`} title="YouTube video" allowfullscreen></iframe> : "No video available"
            }
        </div>
    );
};

export default VideoPlayer;