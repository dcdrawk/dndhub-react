import React, {Component} from 'react';
import PaperRipple from 'paper-ripple';
class Button extends Component {

  componentDidMount() {
    var button = this.button;

    // New PaperRipple for the button
    var ripple = new PaperRipple();

    // Adding ripple container to the button
    button.appendChild(ripple.$);

    // Subscribing to 'mousedown' and 'mouseup' button events to activate ripple effect
    // when a user clicks on the button.
    button.addEventListener('mousedown', function(ev) {
      ripple.downAction(ev);
    });
    button.addEventListener('mouseup', function() {
      ripple.upAction();
    });
  }
  render() {
    return (
      <button ref={(c) => {this.button = c} }
              onClick={this.props.onClick}
              className={`button paper-button
                          ${this.props.raised ? 'raised' : 'flat'}
                          ${this.props.primary ? 'primary' : ''}`}>{this.props.children}</button>
    );

  }
}

export default Button;