import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const K = () => {
  return <Link to="/">Homen</Link>
}

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <ul>
            <li>
              <K />
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={null} />
          <Route path="/about" component={null} />
          <Route path="/topics" component={null} />
        </div>
      </Router>
    )
  }
}

export default App;
