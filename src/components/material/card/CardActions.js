import React, {Component} from 'react';
import './card.css';

class CardActions extends Component {

  render() {
    return (

      <div className="card-actions">
        {this.props.children}
      </div>

    );

  }
}

export default CardActions;