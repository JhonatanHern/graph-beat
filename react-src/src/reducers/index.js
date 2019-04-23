import { combineReducers } from 'redux'

function playMode( currentPlay = 'NORMAL' , action ){
    console.log(action.type,action)
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
function albums( currentAlbums = [] , {type,albums,artist} ){
    if(type==="SET_ALBUMS"){
        return {albums,artist}
    }
    return currentAlbums
}
function song( currentSong = {} , action ){
    if(action.type==="SET_SONG"){
        return action.song
    }
    return currentSong
}
function playingSong( currentSong = null , action ){
    if(action.type==="PLAY_SONG"){
        const {song,album,artist} = action
        if(!song||!album||!artist){
            return currentSong
        }
        return {
            song,
            album,
            artist
        }
    }
    return currentSong
}

export default combineReducers({
  playMode,
  artists,
  albums,
  song,
  playingSong
})