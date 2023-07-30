export const initialState = {
    videos : [],
    watchLater : JSON.parse(localStorage.getItem("watchLaterVideos")) || [],
    searchQuery : ""
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

        default:
            return state;
    }
}