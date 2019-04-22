import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
import Header from './Header'
import Menu from './Menu'
import Albums from './Albums'
import SongData from './SongData'
import Track from './Track'

class App extends Component {
  render() {
    return(
      <div>
        <Header/>
        <main>
          <Menu/>
          <Albums/>
          <SongData/>
        </main>
        <footer>
          <Track/>
        </footer>
      </div>
    )
  }
}

export default App;
