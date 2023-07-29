export const initialState = {
    videos : []
}

export const videoReducerFunc = (state, {type, payload}) => {
    switch(type){
        case 'GET_VIDEOS' : {
            return {...state, videos : [...payload]}
        }


        default:
            return state;
    }
}