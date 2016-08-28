import React, {Component} from 'react';
import ListItem  from './ListItem';

class List extends Component {

    render() {
        return (
            <ul className={`list ${this.props.dense ? 'dense' : ''}`}>
                <ListItem icon="star">
                    Here is my list 1
                </ListItem>
                <ListItem avatar icon="folder   ">
                    Here is my list 1
                </ListItem>
                <ListItem>
                    Here is my list 2
                </ListItem>
            </ul>
        );

    }
}

export default List;