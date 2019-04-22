export default {
    loadArtists:(artists=[],dispatch)=>{
        dispatch({ type:'SET_ARTISTS' , artists : artists })
    }
}