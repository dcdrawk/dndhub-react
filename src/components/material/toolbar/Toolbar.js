import React, {Component} from 'react';
import IconButton from '../button/IconButton';
class Toolbar extends Component {

    render() {
        return (
            <div className="toolbar">
                <IconButton icon="menu" type="square"></IconButton>
                <span className="title">{this.props.title}</span>
            </div>
        );

    }
}

export default Toolbar;