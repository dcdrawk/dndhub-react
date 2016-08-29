import React, {Component} from 'react';
import ToolBar from './Toolbar';
import List from '../lists/List';
import ListItem from '../lists/ListItem';
import IconButton from '../button/IconButton';
import { Link } from 'react-router'

class AppBar extends Component {

    constructor(props) {
        super(props);
        this.state = { open : false };
    }

    toggleSidenav() {
        console.log('toggle');
        this.setState({open: !this.state.open});
    }

    componentDidMount() {

    }

    render() {
        return (

            <div className="app-bar">
                <ToolBar title={this.props.title}>
                    <IconButton icon="menu" type="square" onClick={this.toggleSidenav.bind(this)}></IconButton>
                </ToolBar>

                <div className={`sidebar-backdrop  ${this.state.open ? 'show' : 'hide' }`} onClick={this.toggleSidenav.bind(this)}></div>

                <div className={`sidebar whiteframe-z3 ${this.state.open ? 'open' : 'closed' }`}>
                    <div className="avatar-container">
                        <div className="avatar"></div>
                        <div className="user-info">
                            <p className="body-1">Username</p>
                            <p className="body-1 secondary-text">email</p>
                        </div>
                    </div>

                    <nav>
                        <List>
                            <Link to="/about"><ListItem text="List Item"/></Link>
                            <Link to="/"><ListItem text="List Item2"/></Link>

                        </List>
                    </nav>
                </div>

            </div>
        );

    }
}

export default AppBar;