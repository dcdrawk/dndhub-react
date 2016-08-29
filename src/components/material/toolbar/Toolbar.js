import React, {Component} from 'react';
class Toolbar extends Component {

    render() {
        return (
            <div className="toolbar">
                { this.props.children }
                <span className="title">{this.props.title}</span>
            </div>
        );

    }
}

export default Toolbar;