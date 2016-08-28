import React, {Component} from 'react';
import PaperRipple from 'paper-ripple';

class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.state = { value : false };
    }

    handleChange(event) {
        // this.setState({value: event.target.value});
    }

    componentDidMount() {
        var checkbox = this.checkbox;

        // New PaperRipple for the button
        var ripple = new PaperRipple({
                center: true,
                round: true
            }
        );

        // Adding ripple container to the button
        checkbox.appendChild(ripple.$);

        // Subscribing to 'mousedown' and 'mouseup' button events to activate ripple effect
        // when a user clicks on the button.
        checkbox.addEventListener('mousedown', function(ev) {
            ripple.downAction(ev);
        });
        checkbox.addEventListener('mouseup', function() {
            ripple.upAction();
        });
    }

    onFocus() {
        // this.setState({focus: true});
    }

    onBlur() {
        // this.setState({focus: false});
    }

    onClick() {
        console.log('test');
        this.setState({value: !this.state.value});
    }

    render() {
        return (

            <div ref={(c) => {this.checkbox = c} }
                 className={`checkbox-container ${this.state.value ? 'has-value' : ''}`} onClick={this.onClick.bind(this) }>
                <div className="checkbox ">
                </div>
                <i className="material-icons">check</i>
            </div>

        );

    }
}

export default Checkbox;