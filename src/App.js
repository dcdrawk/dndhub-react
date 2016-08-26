import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './components/material/card/Card';
import CardActions from './components/material/card/CardActions';
import CardSupportingText from './components/material/card/CardSupportingText';
import Button  from './components/material/button/Button';
import IconButton from './components/material/button/IconButton';

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
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div>
                <Button>test</Button>
                <IconButton icon="person" raised primary></IconButton>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <Card title="This is a Title"
                    subtitle="This is a subtitle">
                <CardSupportingText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consequatur corporis deserunt distinctio doloribus dolorum fugit iste magni natus nesciunt, optio qui quo ratione voluptatibus. Dignissimos ipsum iusto reprehenderit?</CardSupportingText>
                <CardActions>
                  <Button primary>test</Button>
                </CardActions>
              </Card>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">

              <Card title="This is a Title"
                    subtitle="This is a subtitle">
                <CardSupportingText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consequatur corporis deserunt distinctio doloribus dolorum fugit iste magni natus nesciunt, optio qui quo ratione voluptatibus. Dignissimos ipsum iusto reprehenderit?</CardSupportingText>
                <CardActions>
                  <Button primary>test</Button>
                </CardActions>
              </Card>

            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <Card title="This is a Title"
                    subtitle="This is a subtitle">
                <CardSupportingText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consequatur corporis deserunt distinctio doloribus dolorum fugit iste magni natus nesciunt, optio qui quo ratione voluptatibus. Dignissimos ipsum iusto reprehenderit?</CardSupportingText>
                <CardActions>
                  <Button primary>test</Button>
                </CardActions>
              </Card>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <Card title="This is a Title"
                    subtitle="This is a subtitle">
                <CardSupportingText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consequatur corporis deserunt distinctio doloribus dolorum fugit iste magni natus nesciunt, optio qui quo ratione voluptatibus. Dignissimos ipsum iusto reprehenderit?</CardSupportingText>
                <CardActions>
                  <Button primary>test</Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
