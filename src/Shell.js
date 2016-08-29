import React, { Component } from 'react';
import AppBar from './components/material/toolbar/AppBar';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import './App.css';

class Shell extends Component {
    render() {
        return (
            <div className="App">
                <AppBar title="dndhub"/>
                {this.props.children}
            </div>
        );
    }
}

export default Shell;
