import React, {Component} from 'react';
// import Card from 'react-toolbox';

// import { Card } from 'node-modules/react-toolbox/lib/button';
import './card.css';


class card extends Component {
  render() {
    return (
      <div className="card whiteframe-z1">
        <div className="primary-title">
          <h2 className="title">This is a title</h2>
          <h3 className="subtitle">This is a subtitle</h3>
        </div>
      </div>
      // <Card>
      // </Card>
    );
  }
}

export default card;