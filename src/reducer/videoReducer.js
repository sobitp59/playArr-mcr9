export const initialState = {
    videos : [],
    watchLater : JSON.parse(localStorage.getItem("watchLaterVideos")) || [],
    searchQuery : "",
    playlists : JSON.parse(localStorage.getItem('playlistVideos')) || {},
    notes : JSON.parse(localStorage.getItem('notes')) || {},
}

export const videoReducerFunc = (state, {type, payload}) => {
    switch(type){
        case 'GET_VIDEOS' : {
            return {...state, videos : [...payload]}
        }

        case 'ADD_WATCH_LATER' : {
            console.log(state.watchLater)
            return {...state, watchLater : [...state?.watchLater, payload] }
        }
        
        case 'REMOVE_WATCH_LATER' : {
            return {...state, watchLater : payload }
        }

        case "SEARCH_QUERY": {
            return {...state, searchQuery : payload }
        }
        
        case "ADD_TO_PLAYLIST": {
            localStorage.setItem('playlistVideos', JSON.stringify({...state?.playlists, ...payload}))
            return {...state, playlists : { ...state?.playlists, ...payload} }
        }
        
        case "REMOVE_PLAYLIST": {
            localStorage.setItem('playlistVideos', JSON.stringify(payload))
            return {...state, playlists : payload}
        }
        
        case "REMOVE_PLAYLIST_VIDEO": {
            localStorage.setItem('playlistVideos', JSON.stringify({...state?.playlists, [payload?.playlistname] : payload?.update}))
            return {...state, playlists : {...state?.playlists, [payload?.playlistname] : payload?.update}}
        }

        case "ADD_NOTE" : {
            if(Object?.keys(state?.notes)?.find((id) => id === payload?.id
            )){
                localStorage.setItem("notes", JSON.stringify({...state?.notes, [payload?.id] : [...state?.notes[payload?.id], payload?.note] }));
                return {...state, notes : {...state?.notes, [payload?.id] : [...state?.notes[payload?.id], payload?.note] }}
            }else{
                localStorage.setItem("notes", JSON.stringify({...state?.notes, [payload?.id] : [payload?.note]}));
                return {...state, notes :  {...state?.notes, [payload?.id] : [payload?.note]} }
            }
        }

        case "DELETE_NOTE" : {
            localStorage.setItem("notes",JSON.stringify({...state?.notes, [payload?.videoID] : payload?.data}))
            return {...state, notes : {...state?.notes, [payload?.videoID] : payload?.data}}
        }

        default:
            return state;
    }
}