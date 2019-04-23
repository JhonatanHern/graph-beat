import React , { Fragment } from 'react'
import { connect } from 'react-redux'

import actions from '../actions'

const Album = ({data,artist,play}) => (
    <Fragment>
        <h3>{data.title}</h3>
        {
            data.songs.map((s,i)=>(
                <button key={i} album={data.title} song={s.title} artist={artist} onClick={play}>
                    {s.title}
                </button>
            ))
        }
    </Fragment>
)

const Albums = ({albums,play}) =>(
    <div id="albums">
        {
            albums&&
            albums.albums&&
            albums.albums.map((a,i)=>(
                <Album key={i} artist={albums.artist} data={a} play={play}/>
            ))
        }
    </div>
)

const mapStateToProps = ({albums}) => ({
    albums
})

const mapDispatchToProps = dispatch => ({
    play:({target})=>{
        actions.playSong({
            song:target.getAttribute('song'),
            album:target.getAttribute('album'),
            artist:target.getAttribute('artist')
        },dispatch)
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Albums)