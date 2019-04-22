import React, { Component } from 'react'
import { connect } from 'react-redux'

class Menu extends Component{
    render(){
        return <div>Menu</div>
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)