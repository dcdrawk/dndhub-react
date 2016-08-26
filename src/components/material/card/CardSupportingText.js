import React, {Component} from 'react';
import './card.css';

class CardSupportingText extends Component {

  render() {
    return (

      <div className="card-supporting-text">
        {this.props.children}
      </div>

    );

  }
}

export default CardSupportingText;