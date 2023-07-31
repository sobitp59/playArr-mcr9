import { AiFillDelete } from "react-icons/ai";
import { LiaFileVideoSolid } from "react-icons/lia";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { Link } from "react-router-dom";
import { useVideoData } from "../../context/VideoContext";
import "./playlist.css";

const Playlist = () => {
  const {playlists, removePlaylist} = useVideoData();

  const playListData = Object.keys(playlists);


  return (
    <div className="playlist">
      <h2>playlist</h2>

      <ul className="playlist__cards">
        {playListData?.map((playlist, index) => {
          const image = playlists[playlist]?.map(({thumbnail}) => thumbnail)[0];
          // console.log(images[0]);
        
          return (
            <div  key={index} className="playlist__div">
              <Link className="playlist__card" to={`/playlist/${playlist}`}>
                <section className="playlist__images">
                    {image ? <img className="playlist__image" src={image} /> : <div className="playlist__image playlist__image__default" >
                      <LiaFileVideoSolid className="image__icon" />
                    </div> }
                </section>
              </Link>
                <section className="playlist__name">
                  <h3>{playlist}</h3>
                  <button onClick={() => removePlaylist(playlist)} className="playlist__removeBtn"><AiFillDelete /></button>
                  
                </section>
                <section className="playlist__count">
                  <MdOutlinePlaylistPlay /> {playlists[playlist]?.length}
                </section>
            </div>
            )
      })}
      </ul>

    </div>
  )
}

export default Playlist