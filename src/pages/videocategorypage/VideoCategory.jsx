import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import { useVideoData } from '../../context/VideoContext';
import "./videocategory.css";


const VideoCategory = () => {
    const {category} = useParams();
    const {videos, addVideoToWatchLater,removeVideoFromWatchLater, watchLater} = useVideoData();
    const videoLists = videos?.filter((video) => video?.category === category );

    console.log(watchLater)

  return (
    <div className='videoCategory'>
      <h2>{category}</h2>
      <ul className='videoCategory__lists'>
        <></>
        {videoLists?.map((video) => (
          <div key={video?._id} className="videoCategory__list">
            <Link to={`/categories/${category}/${video?.title}`} >
              <img className='videoCategory__image' src={video?.thumbnail} alt={video?.title} />
              <p className='videoCategory__para'>{video?.title}</p>
              <p className='videoCategory__para'> <strong>views </strong> : {video?.views} | <strong>{video?.creator}</strong></p>
            </Link>
            {watchLater?.includes(video) ? 
            <button onClick={() => removeVideoFromWatchLater(video?._id)} className='videoCategory__watchlaterBtn'><MdWatchLater /></button> :
            <button onClick={() => addVideoToWatchLater(video?._id)} className='videoCategory__watchlaterBtn'><MdOutlineWatchLater /></button>}
              
          </div>
        ))}
      </ul>
    </div>
  )
}

export default VideoCategory;
