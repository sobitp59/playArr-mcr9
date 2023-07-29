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
        dispatch({
            type : "REMOVE_WATCH_LATER",
            payload : videos
        })
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
        addVideoToWatchLater,
        removeVideoFromWatchLater
    }




    return (
        <VideoContext.Provider value={value}>
            {children}
        </VideoContext.Provider>
    )
}

export const useVideoData = () => useContext(VideoContext);