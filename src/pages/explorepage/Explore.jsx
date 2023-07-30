import { Link } from "react-router-dom";
import SearchBar from "../../components/searchbar/SearchBar";
import { useVideoData } from "../../context/VideoContext";
import "./explore.css";

const Explore = () => {
  const {searchQuery, videos} = useVideoData();
  console.log(searchQuery)
  
  const searchedVideos = videos?.filter(({title}) => title.toLowerCase().includes(searchQuery.toLowerCase()))
  console.log(searchedVideos)




  return (
    <div className="explore">
      <h2>explore</h2>
      <SearchBar />

      {searchQuery?.length > 0 && (
          searchedVideos.length > 0 ? (
            <ul className='videoCategory__lists'>
            {searchedVideos?.map((video) => (
                <Link key={video?._id} to={`/categories/${video?.category}/${video?.title}`} >
                  <img className='videoCategory__image' src={video?.thumbnail} alt={video?.title} />
                  <p className='videoCategory__para'>{video?.title}</p>
                  <p className='videoCategory__para'> <strong>views </strong> : {video?.views} | <strong>{video?.creator}</strong></p>
                </Link>
                  
                  ))}
              </ul>
          ) : (
            <h3>no videos found for &quot;<i style={{color : "gray"}}>{searchQuery}</i>&quot; </h3>
          ) 
      )}


    </div>
  )
}

export default Explore