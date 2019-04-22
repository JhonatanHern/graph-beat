import React from 'react'
import { connect } from 'react-redux'

import actions from '../actions'

class Menu extends React.Component{
    constructor(props){
        super(props)
        fetch('/graphql', {
            method: 'POST',
            Accept: 'api_version=2',
            headers:{'Content-Type': 'application/graphql' },
            body: '{getArtists{title}}',
        })
        .then(r=>r.json())
        .then(data=>{
            this.props.setArtists(data.getArtists)
        })
    }
    state={active:true}//component-specific state
    toggleActive = _ => {
        // this.setState({active:!this.state.active})
    }
    render(){
        return (
        <div id="menu" className={this.state.active&&'active'} onMouseEnter={this.toggleActive} onMouseLeave={this.toggleActive}>
            <span>🎼</span>
            <button>Set Reproduction mode</button>
            <button>Set Alarm</button>
            <button>Artists</button>
            <div>
                <button>A</button>
            </div>
        </div>
        )
    }
}
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    setArtists:arts=>actions.loadArtists(arts,dispatch)
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)