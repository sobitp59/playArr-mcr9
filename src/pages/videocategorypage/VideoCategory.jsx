import { Link, useParams } from 'react-router-dom';
import { useVideoData } from '../../context/VideoContext';

const VideoCategory = () => {
    const {category} = useParams();
    const {videos} = useVideoData();

    console.log(category)
    console.log(videos)

    const videoLists = videos?.filter((video) => video?.category === category );
    console.log(videoLists)


  return (
    <div className='videoCategory'>
      <h2>{category}</h2>
      <ul>
        {videoLists?.map(({_id,  thumbnail, title}) => (
          <Link key={_id}>
            <img src={thumbnail} alt={title} />
            <p>{title}</p>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default VideoCategory;


// category
// : 
// "Origami"
// chips
// : 
// (4) ['origami', 'swan', 'paper', 'elegant']
// creator
// : 
// "PaperCraftPro"
// src
// : 
// "https://www.youtube.com/embed/GBIIQ0kP15E"
// thumbnail
// : 
// "https://picsum.photos/300/174"
// title
// : 
// "Origami Swan - Simple and Elegant"
// views
// : 
// 2879
// _id
// : 
// 19