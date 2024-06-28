import React from 'react'

interface VideoProps{
    video: string;
}

const VideoDefault = ({video}:VideoProps) => {
    return (
        <video className="md:w-1/3 rounded-lg xl:h-1/4" controls autoPlay muted>
        <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
      
}

export default VideoDefault