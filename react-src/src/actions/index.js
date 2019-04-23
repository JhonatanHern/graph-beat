export default {
    loadArtists:(artists=[],dispatch)=>{
        dispatch({ type:'SET_ARTISTS' , artists : artists })
    },
    loadSingleArtist:(albums=[],artist=null,dispatch)=>{
        dispatch({ type:'SET_ALBUMS' , albums , artist })
    },
    playSong:(data,dispatch)=>{
        if(!data){
            return console.log('no song provided, error.')
        }
        dispatch({ type:'PLAY_SONG' , ...data  })
    }
}