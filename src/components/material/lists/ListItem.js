/*
Created By: Devin Cook
Selector: <ListItem
Attributes:
    *type*:['single-line', 'two-line', 'three-line']
    icon
    avatar
    text
    subject
    secondary-text

/>


 */

import React, {Component} from 'react';
import PaperRipple from 'paper-ripple';

class ListItem extends Component {

    render() {
        return (
            <li className={`list-item ${this.props.avatar ? 'avatar' : ''} ${this.props.secondaryText ? 'two-line' : ''}`} ref={(c) => {this.listItem = c} }>
                {this.props.avatar && this.props.icon
                    ?
                    <span className="list-item-avatar">
                        <i className="material-icons">{this.props.icon}</i>
                    </span>
                    :
                    null
                }

                {!this.props.avatar && this.props.icon
                    ?
                    <span className="list-item-icon">
                        <i className="material-icons">{this.props.icon}</i>
                    </span>
                    :
                    null
                }
                {this.props.secondaryText
                    ?
                    <span className="list-item-text-container">
                        <span className="item-text">{this.props.text}</span>
                        <span className="secondary-text">{this.props.secondaryText}</span>
                    </span>
                    :
                    <span className="list-item-text-container">
                        <span className="item-text">{this.props.text}</span>
                    </span>
                }

            </li>
        );

    }

    componentDidMount() {
        var listItem = this.listItem;

        // New PaperRipple for the button
        var ripple = new PaperRipple();

        // Adding ripple container to the button
        listItem.appendChild(ripple.$);

        // Subscribing to 'mousedown' and 'mouseup' button events to activate ripple effect
        // when a user clicks on the button.
        listItem.addEventListener('mousedown', function(ev) {
            ripple.downAction(ev);
        });
        listItem.addEventListener('mouseup', function() {
            ripple.upAction();
        });
    }
}

export default ListItem;