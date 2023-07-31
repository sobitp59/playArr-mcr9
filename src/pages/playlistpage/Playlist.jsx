import { AiFillDelete } from "react-icons/ai";
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
          const images = playlists[playlist]?.map(({thumbnail}) => thumbnail);
        
          return (
            <div  key={index} className="playlist__div">
              <Link className="playlist__card" to={`/playlist/${playlist}`}>
                <section className="playlist__images">
                  {images?.map((image , index) => (
                    <img className="playlist__image" src={image} key={index} />
                  ))}
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