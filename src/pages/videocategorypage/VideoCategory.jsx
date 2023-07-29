import React from 'react';
import { useParams } from 'react-router-dom';

const VideoCategory = () => {
    const {category} = useParams();
    console.log(category)
  return (
    <div>VideoCategory</div>
  )
}

export default VideoCategory