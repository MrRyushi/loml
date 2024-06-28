import React from 'react'

const VideoDefault = (props) => {
    return (
        <video className="md:w-1/3 rounded-lg xl:h-1/4" controls autoPlay muted>
        <source src={props.video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
      
}

export default VideoDefault