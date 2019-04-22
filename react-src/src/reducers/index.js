import { combineReducers } from 'redux'

function playMode( currentPlay = 'NORMAL' , action ){
    switch ( action.playMode ){
        case 'NORMAL':
        case 'RANDOM':
        case 'RANDOM_INNER':
            return action.playMode
        default:
            return currentPlay
    }
}

function artists( currentArtists = [] , action ){
    if(action.type==="SET_ARTISTS"){
        return action.artists
    }
    return currentArtists
}
function albums( currentAlbums = [] , action ){
    if(action.type==="SET_ALBUMS"){
        return action.albums
    }
    return currentAlbums
}
function song( currentSong = {} , action ){
    if(action.type==="SET_SONG"){
        return action.song
    }
    return currentSong
}

export default combineReducers({
  playMode,
  artists,
  albums,
  song
})