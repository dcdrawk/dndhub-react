import React, { Component } from 'react';
import Shell from './Shell';
import Home from './Home';
import LogIn from './components/LogIn';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux';

import './App.css';

class App extends Component {
    
  render() {
    return (
      <div className="App">
        <Router history={hashHistory}>
            <Route path="/" component={Shell}>
              <IndexRoute component={Home} />
              <Route path="about" component={Home} />
              <Route path="login" component={LogIn} />
            </Route>
          </Router>
      </div>
    );
  }
}

export default App;
