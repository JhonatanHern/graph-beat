import React from 'react'
import { connect } from 'react-redux'

import actions from '../actions'

class Menu extends React.Component{
    state={active:false}//component-specific state
    constructor(props){
        super(props)
        fetch('/graphql', {
            method: 'POST',
            Accept: 'api_version=2',
            headers:{ 'Content-Type' : 'application/graphql' },
            body: '{getArtists{title}}',
        })
        .then(r=>r.json())
        .then(data=>{
            this.props.setArtists(data.data.getArtists)
        })
    }
    selectArtist = async e => {
        let artist = e.target.getAttribute('value')
        const query = `
        {
            getSongs(artist:"${artist}"){
                  title
              songs{
                title
              }
            }
        }
        `
        let data = await((await fetch('/graphql',{
            method:'POST',
            headers:{ 'Content-Type' : 'application/graphql' },
            body:query
        })).json())
        console.log(data)
    }
    toggleActive = _ => {
        this.setState({active:!this.state.active})
    }
    render(){
        return (
        <div id="menu" className={this.state.active?'active':''} onMouseEnter={this.toggleActive} onMouseLeave={this.toggleActive}>
            <span></span>
            <span></span>
            <span></span>
            <button>Set Reproduction mode</button>
            <button>Set Alarm</button>
            <b>Artists:</b>
            <div>
                {
                    this.props.artists.map(({title},i)=>(
                        <button value={title} onClick={this.selectArtist} key={i}>
                            {title}
                        </button>
                    ))
                }
            </div>
        </div>
        )
    }
}
const mapStateToProps = state => ({
    artists:state.artists
})

const mapDispatchToProps = dispatch => ({
    setArtists:arts=>actions.loadArtists(arts,dispatch)
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)