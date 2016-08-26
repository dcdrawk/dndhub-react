import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './components/material/card/Card';
import Button from './components/material/button/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <section className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div>
                <Button raised primary>test</Button>
              </div>
              <Card title="This is a Title"
                    subtitle="This is a subtitle"
                    actions={['test', 'test2']}/>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <Card>Test</Card>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <Card/>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <Card/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
