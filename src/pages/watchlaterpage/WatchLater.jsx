import { Link } from "react-router-dom";
import { useVideoData } from "../../context/VideoContext";
import "./watchlater.css";

const WatchLater = () => {
  const {watchLater} = useVideoData();
  console.log(watchLater)
  return (
    <div className="watchlater">
      <h2>watch later</h2>
      <ul className="watchlater__videos">
        {watchLater?.map((video) => (
           <Link key={video?._id} to={`/categories/${video?.category}/${video?.title}`} >
           <img className='videoCategory__image' src={video?.thumbnail} alt={video?.title} />
           <p className='videoCategory__para'>{video?.title}</p>
           <p className='videoCategory__para'> <strong>views </strong> : {video?.views} | <strong>{video?.creator}</strong></p>
         </Link>
        ))}
      </ul>
    </div>
  )
}

export default WatchLater