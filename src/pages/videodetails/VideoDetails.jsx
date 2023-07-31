import { useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { MdDelete, MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

import { useEffect } from "react";
import PlaylistModal from "../../components/playlistmodal/PlaylistModal";
import { useVideoData } from "../../context/VideoContext";
import "./videodetails.css";

const VideoDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const [note, setNote] = useState({title : '', description : ''})
    const {category, title} = useParams();
    const {videos, watchLater, addVideoToWatchLater, removeVideoFromWatchLater, saveNote, notes, editNote, deleteNote} = useVideoData();

    const catgeories = videos?.filter((video) => video?.category === category );
    const video = catgeories?.find((catgeory) => catgeory?.title === title);
    const suggestedVideos = videos?.filter(({_id}) => _id !== video?._id);


    const onNoteChange = (e) => {
        const {name, value} = e?.target;
        setNote((prev) => ({...prev, [name] : value}))
    }

    const discardNote = (e) => {
        e.preventDefault()
        setNote({title : '', description : ''})
    }


    return (
    <div className="videodetails">
        {showModal && <PlaylistModal setShowModal={setShowModal} video={video}/>}
        <section className="videoDetails__info">
                 <iframe className="videodetails__player" src={video?.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
                 <h2>{video?.title}</h2>
                 <section className="videoDeatails_btns">
                    {!watchLater?.find(({_id}) => _id === video?._id) ? 
                        <button onClick={() => addVideoToWatchLater(video?._id)}> <MdOutlineWatchLater /> add to watch later</button> :
                        <button onClick={() => removeVideoFromWatchLater(video?._id)}> <MdWatchLater/> remove from watch later</button>
                    }
                    <button onClick={() => setShowModal(true)}>add to playlist</button>
                 </section>

                 <section className="videoDetails__notes">
                    <p><HiPencil/> take notes</p>
                    <div className="videoDetails__note">
                        <form className="videoDetails__form" onSubmit={(event) => saveNote(event, video?._id, note?.title, note?.description, setNote)}>
                            <input name="title" value={note?.title} onChange={onNoteChange} type="text" placeholder="enter title"/>
                            <textarea name="description" value={note?.description} onChange={onNoteChange} placeholder="enter description"></textarea>
                            <button type="submit" >save</button>
                            <button type="button" onClick={discardNote}>discard</button>
                        </form>
                        <ul className="videoDetails__noteLists">
                            {notes?.[`${video?._id}`]?.map(({noteId, title, description}) => (
                                <li className="videoDetails__noteList" key={noteId}>
                                    <p><strong>{title}</strong></p>
                                    <p>{description}</p>

                                    <section className="videoDetails__noteBtns"> 
                                        <button onClick={() => deleteNote(video?._id, noteId)}><MdDelete /></button>
                                        <button onClick={() => editNote(video?._id, noteId, title, description, setNote)}><AiTwotoneEdit /></button>
                                    </section>
                                </li>
                            ))}
                        </ul>
                    </div>
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