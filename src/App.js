import React, { Component } from 'react';
import AppBar from './components/material/toolbar/AppBar';
import Home from './Home';
import Shell from './Shell';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={hashHistory}>
            <Route path="/" component={Shell}>
              <IndexRoute component={Home} />
              <Route path="about" component={Home} />
              <Route path="inbox" component={Home} />
            </Route>
          </Router>
      </div>
    );
  }
}

export default App;
