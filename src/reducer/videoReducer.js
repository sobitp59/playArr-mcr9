export const initialState = {
    videos : [],
    watchLater : JSON.parse(localStorage.getItem("watchLaterVideos")) || [],
    searchQuery : "",
    playlists : JSON.parse(localStorage.getItem('playlistVideos')) || {playlist1: [], playlist2 :[]}
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

        default:
            return state;
    }
}