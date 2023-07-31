import { createContext, useContext, useEffect, useReducer } from "react";
import { videos } from "../db/videos";
import { initialState, videoReducerFunc } from "../reducer/videoReducer";
const VideoContext = createContext();


export const VideoContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(videoReducerFunc, initialState)

    const addVideoToWatchLater = (videoID) => {
        const video = state?.videos?.find(({_id}) => _id === videoID);
        const watchLaterVideos = [...state?.watchLater, video];
        localStorage.setItem("watchLaterVideos", JSON.stringify(watchLaterVideos))
        dispatch({
            type : "ADD_WATCH_LATER",
            payload : video
        })
    }
    
    const removeVideoFromWatchLater = (videoID) => {
        const videos = state?.watchLater?.filter(({_id}) => _id !== videoID);
        localStorage.setItem("watchLaterVideos", JSON.stringify(videos))
        dispatch({
            type : "REMOVE_WATCH_LATER",
            payload : videos
        })
    }

    const getSearchQuery = (e) => {
        dispatch({
            type : "SEARCH_QUERY",
            payload : e?.target?.value
        })
    }


    const addToPlaylist = (playListName, setShowModal, video) => {
        if(Object.keys(state?.playlists)?.find((playlist) => playlist === playListName)){
            const isVideoInPlayList = state?.playlists[playListName]?.find(({_id}) => _id === video?._id)
            
            dispatch({
                type : "ADD_TO_PLAYLIST",
                payload : {[playListName] : isVideoInPlayList ? state?.playlists[playListName] : [...state?.playlists[playListName], video] }
            })
        }else{
            dispatch({
                type : "ADD_TO_PLAYLIST",
                payload : {[playListName] :[video]}
            })
        }        
        setShowModal(false)
    }


    const removePlaylist = (playListName) => {
        const filtered = {};
        for(const playlist in state?.playlists){
            if(playlist !== playListName){
                filtered[playlist] = state?.playlists[playlist]
            }
        }
        dispatch({
            type : "REMOVE_PLAYLIST",
            payload : filtered
        })
    }


    const  removePlaylistVideo = (playlistName, videoID) => {
        console.log(playlistName, videoID)
        const update = state?.playlists[playlistName]?.filter(({_id}) => _id !== videoID);
        dispatch(({
            type : "REMOVE_PLAYLIST_VIDEO",
            payload : {
                playlistname: playlistName,
                update : update
            }
        }))
        console.log(update)
    }

    useEffect(() => {
        dispatch({
            type : "GET_VIDEOS",
            payload : videos 
        })
    }, [])



    const value = {
        videos : state.videos,
        watchLater : state.watchLater,
        searchQuery : state.searchQuery,
        playlists : state.playlists,
        addVideoToWatchLater,
        removeVideoFromWatchLater,
        getSearchQuery,
        addToPlaylist,
        removePlaylist,
        removePlaylistVideo
    }




    return (
        <VideoContext.Provider value={value}>
            {children}
        </VideoContext.Provider>
    )
}

export const useVideoData = () => useContext(VideoContext)