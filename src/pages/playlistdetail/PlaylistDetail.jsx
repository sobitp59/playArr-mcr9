import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useVideoData } from '../../context/VideoContext';
import "./playlistdetail.css";

const PlaylistDetail = () => {
    const {playlistName} = useParams();
    const {playlists} = useVideoData();
    const playListVideos = playlists[playlistName];
    console.log(playListVideos);

  return (
    <div className='playlistDetail'>
        <h2>playlist - <em>{playlistName}</em> </h2>
        <ul className='videoCategory__lists'>
        {playListVideos?.map((video) => (
          <div key={video?._id} className="videoCategory__list">
            <Link to={`/categories/${video?.category}/${video?.title}`} >
              <img className='videoCategory__image' src={video?.thumbnail} alt={video?.title} />
              <p className='videoCategory__para'>{video?.title}</p>
              <p className='videoCategory__para'> <strong>views </strong> : {video?.views} | <strong>{video?.creator}</strong></p>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default PlaylistDetail