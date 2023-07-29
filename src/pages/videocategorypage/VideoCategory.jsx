import { MdOutlineWatchLater } from "react-icons/md";
import { Link, Outlet, useParams } from 'react-router-dom';
import { useVideoData } from '../../context/VideoContext';
import "./videocategory.css";


const VideoCategory = () => {
    const {category} = useParams();
    const {videos} = useVideoData();

    console.log(category)
    console.log(videos)

    const videoLists = videos?.filter((video) => video?.category === category );
    console.log(videoLists)


  return (
    <div className='videoCategory'>
      <h2>{category}</h2>
      <ul className='videoCategory__lists'>
        {videoLists?.map(({_id,  thumbnail, title, creator, views}) => (
          <Link to={`/categories/${category}/${title}`} className='videoCategory__list' key={_id}>
            <img className='videoCategory__image' src={thumbnail} alt={title} />
            <p className='videoCategory__para'>{title}</p>
            <p className='videoCategory__para'> <strong>views </strong> : {views} | <strong>{creator}</strong></p>
            <button className='videoCategory__watchlaterBtn'><MdOutlineWatchLater /></button>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default VideoCategory;
