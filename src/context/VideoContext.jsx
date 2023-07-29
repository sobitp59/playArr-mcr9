import { createContext, useContext, useEffect, useReducer } from "react";
import { videos } from "../db/videos";
import { initialState, videoReducerFunc } from "../reducer/videoReducer";
const VideoContext = createContext();


export const VideoContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(videoReducerFunc, initialState)

    useEffect(() => {
        dispatch({
            type : "GET_VIDEOS",
            payload : videos 
        })
    }, [])



    const value = {
        videos : state.videos,
    }




    return (
        <VideoContext.Provider value={value}>
            {children}
        </VideoContext.Provider>
    )
}

export const useVideoData = () => useContext(VideoContext);