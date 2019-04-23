import React from 'react'
import { connect } from 'react-redux'

import actions from '../actions'

const serialize = (obj) => {
    const str = [];
    for (let p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
}

const Track = ({song}) => {
    return (
        <div>
            {
                song &&
                <audio src={'/stream?'+song} controls autoplay="true"></audio>
            }
        </div>
    )
}

const mapStateToProps = ({playingSong}) => ({song:serialize(playingSong)})

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Track)