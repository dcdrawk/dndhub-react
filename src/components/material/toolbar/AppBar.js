import React, {Component} from 'react';
import ToolBar from './Toolbar';

class Toolbar extends Component {

    render() {
        return (
            <ToolBar title={this.props.title}/>
        );

    }
}

export default Toolbar;