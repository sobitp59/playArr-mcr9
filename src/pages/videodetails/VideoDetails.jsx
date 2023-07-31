import { useState } from "react";
import { HiPencil } from "react-icons/hi";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import NoteModal from "../../components/notemodal/NoteModal";
import PlaylistModal from "../../components/playlistmodal/PlaylistModal";
import { useVideoData } from "../../context/VideoContext";
import "./videodetails.css";

const VideoDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const [note, setNote] = useState({title : '', description : ''})
    const {category, title} = useParams();
    const {videos, watchLater, addVideoToWatchLater, removeVideoFromWatchLater, saveNote, notes} = useVideoData();

    const catgeories = videos?.filter((video) => video?.category === category );
    const video = catgeories?.find((catgeory) => catgeory?.title === title);
    const suggestedVideos = videos?.filter(({_id}) => _id !== video?._id);


    const onNoteChange = (e) => {
        const {name, value} = e?.target;
        setNote((prev) => ({...prev, [name] : value}))
    }

    console.log('NOtES : ',  notes)

    return (
    <div className="videodetails">
        {showModal && <PlaylistModal setShowModal={setShowModal} video={video}/>}
        <section>
                 <iframe className="videodetails__player" src={video?.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
                 <h2>{video?.title}</h2>
                 <section className="videoDeatails_btns">
                    {!watchLater?.find(({_id}) => _id === video?._id) ? 
                        <button onClick={() => addVideoToWatchLater(video?._id)}> <MdOutlineWatchLater /> add to watch later</button> :
                        <button onClick={() => removeVideoFromWatchLater(video?._id)}> <MdWatchLater/> remove from watch later</button>
                    }
                    <button onClick={() => setShowModal(true)}>add to playlist</button>
                 </section>

                 <section>
                    <p><HiPencil/> take notes</p>
                    <form onSubmit={(event) => saveNote(event, video?._id, note?.title, note?.description)}>
                        <input name="title" value={note?.title} onChange={onNoteChange} type="text" placeholder="enter title"/>
                        <textarea name="description" value={note?.description} onChange={onNoteChange} placeholder="enter description"></textarea>
                        <button type="submit" >save</button>
                        <button>discard</button>
                    </form>
                    <ul>
                        <li>{note?.title }</li>
                        <li>{note?.description }</li>
                        <li>note2</li>
                        <li>note2</li>
                        <li>note2</li>
                        <li>note2</li>
                    </ul>
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