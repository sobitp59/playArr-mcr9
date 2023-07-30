import { useVideoData } from "../../context/VideoContext";
import "./playlist.css";

const Playlist = () => {
  const {playlists} = useVideoData();
  console.log(playlists)
  return (
    <div>Playlist</div>
  )
}

export default Playlist