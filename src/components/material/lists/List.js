import React, {Component} from 'react';
// import ListItem  from './ListItem';

class List extends Component {

    render() {
        return (
            <ul className={`list ${this.props.dense ? 'dense' : ''}`}>
                { this.props.children }
            </ul>
        );

    }
}

export default List;