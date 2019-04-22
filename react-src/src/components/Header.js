import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component{
    render(){
        return <header>{this.props.title || "Select a song"}</header>
    }
}

const mapStateToProps = state => ({
    title: state.song ? state.song.title : null
})

const mapDispatchToProps = dispatch => ({})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)