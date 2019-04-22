import React, { Component , Fragment } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.scss'
import Header from './Header'
import Menu from './Menu'
import Albums from './Albums'
import SongData from './SongData'
import Track from './Track'

class App extends Component {
  render() {
    return(
      <Fragment>
        <Header/>
        <main>
          <Menu/>
          <Albums/>
          <SongData/>
        </main>
        <footer>
          <Track/>
        </footer>
      </Fragment>
    )
  }
}

export default App;
