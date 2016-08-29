import React, { Component } from 'react';
import Shell from './Shell';
import Home from './Home';
import LogIn from './components/LogIn';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
// import { Provider } from 'react-redux';
import Firebase from 'firebase';
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);

    var config = {
      apiKey: "AIzaSyACdSfcm596fdnyoIFiovJWlq_15g0Vuag",
      authDomain: "codex-9bc8c.firebaseapp.com",
      databaseURL: "https://codex-9bc8c.firebaseio.com",
      storageBucket: "codex-9bc8c.appspot.com",
    };
    Firebase.initializeApp(config);

    console.log('app constructor!');
    console.log(Firebase);
    Firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('a user has signed in!');
        // User is signed in.
      } else {
        // No user is signed in.
        console.log('no user has signed in')
      }
    });

  }
    
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
