import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useVideoData } from '../../context/VideoContext';
import "./playlistmodal.css";
 

const PlaylistModal = ({setShowModal, video}) => {
    const [showInput, setShowInput] = useState(false);
    const [playlistName, setPlayListName] = useState("");
    const {playlists, addToPlaylist} = useVideoData();

    const playListsDtaa = Object.keys(playlists);
    console.log(video)


  return (
    <div className='playlistModal'>
        <div className='modal'>
            <section className='modal__top'>
                <h3>add to playlist</h3>
                
                <button onClick={() => setShowModal(false)}><RxCross2/></button>
            </section>
            <section className='modal__playLists'>
                {playListsDtaa?.map((playlist, index) => (
                    <button onClick={() => addToPlaylist(playlist, setShowModal, video)} className='modal__btn modal__btnPlay' key={index}>{playlist}</button>                    
                ))}
            </section>
            {showInput && <input onChange={(e) => setPlayListName(e?.target?.value)} className='playlist__modal' type="text" placeholder='enter playlist name'/>}
            {showInput ? <button  className="modal__btn" onClick={() => addToPlaylist(playlistName, setShowModal, video)}>add</button> : <button className='modal__btn' onClick={() => setShowInput(true)}>+ create new playlist</button>}
            
        </div>
    </div>
  )
}

export default PlaylistModal