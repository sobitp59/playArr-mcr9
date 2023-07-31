import { MdDelete } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { useVideoData } from '../../context/VideoContext';
import "./playlistdetail.css";

const PlaylistDetail = () => {
    const {playlistName} = useParams();
    const {playlists, removePlaylistVideo} = useVideoData();
    const playListVideos = playlists[playlistName];

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
            <button className='delete__video' onClick={() => removePlaylistVideo(playlistName, video?._id)}>
              <MdDelete className='delete__icon' />
            </button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default PlaylistDetail