import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Category from "./pages/categorypage/Category";
import Explore from "./pages/explorepage/Explore";
import Home from './pages/homepage/Home';
import Playlist from "./pages/playlistpage/Playlist";
import VideoCategory from "./pages/videocategorypage/VideoCategory";
import VideoDetails from "./pages/videodetails/VideoDetails";
import WatchLater from "./pages/watchlaterpage/WatchLater";
import PlaylistDetail from "./pages/playlistdetail/PlaylistDetail";


function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}> 
          <Route index element={<Category />}/>
          <Route path="/explore" element={<Explore />}/>
          <Route path="/watchlater" element={<WatchLater />}/>
          <Route path="/playlist" element={<Playlist />}/>
          <Route path="/playlist/:playlistName" element={<PlaylistDetail />}/>
          <Route path="/categories/:category" element={<VideoCategory />} />
          <Route path="/categories/:category/:title" element={<VideoDetails />}/>
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
