import React, {Component} from 'react';
import IconButton from '../button/IconButton';
class Toolbar extends Component {

    render() {
        return (
            <div className="toolbar">
                <IconButton icon="menu" type="square"></IconButton>
                Here's the toolbar
            </div>
        );

    }
}

export default Toolbar;