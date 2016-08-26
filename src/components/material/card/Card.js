import React, {Component} from 'react';
import './card.css';

class card extends Component {

  render() {
    return (

      <div className="card whiteframe-z1" ref={(c) => {
        this.card = c
      } }>
        <div className="primary-title">
          <h2 className="title">{this.props.title}</h2>
          <h3 className="subtitle">{this.props.subtitle}</h3>
        </div>
        {this.props.children}
        {/*<CardActions>*/}
          {/*<Button primary>test</Button>*/}
        {/*</CardActions>*/}
      </div>
    );

  }
}

export default card;