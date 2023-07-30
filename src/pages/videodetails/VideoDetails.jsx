import { useState } from "react";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import PlaylistModal from "../../components/playlistmodal/PlaylistModal";
import { useVideoData } from "../../context/VideoContext";
import "./videodetails.css";

const VideoDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const {category, title} = useParams();
    const {videos, watchLater, addVideoToWatchLater, removeVideoFromWatchLater} = useVideoData();

    const catgeories = videos?.filter((video) => video?.category === category );
    const video = catgeories?.find((catgeory) => catgeory?.title === title);
    const suggestedVideos = videos?.filter(({_id}) => _id !== video?._id)
    return (
    <div className="videodetails">
        {showModal && <PlaylistModal setShowModal={setShowModal} video={video}/>}
        <section>
                 <iframe className="videodetails__player" src={video?.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 <h2>{video?.title}</h2>
                 <section className="videoDeatails_btns">
                    {!watchLater?.find(({_id}) => _id === video?._id) ? 
                        <button onClick={() => addVideoToWatchLater(video?._id)}> <MdOutlineWatchLater /> add to watch later</button> :
                        <button onClick={() => removeVideoFromWatchLater(video?._id)}> <MdWatchLater/> remove from watch later</button>
                    }
                    <button onClick={() => setShowModal(true)}>add to playlist</button>
                    <button>make note</button>
                 </section>
        </section>
        <ul className="videodetails__suggested">
            <p>suggested videos for you</p>

            {suggestedVideos?.map((suggestedVid) => (
                <Link className="videodetails__suggVideo" key={suggestedVid?._id} to={`/categories/${suggestedVid?.category}/${suggestedVid?.title}`}>
                    <img  className="videodetails__image" src={suggestedVid?.thumbnail} alt={suggestedVid?.title} />
                <p>{suggestedVid?.title}</p>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default VideoDetails