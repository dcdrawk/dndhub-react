import React, {Component} from 'react';
import ListItem  from './ListItem';

class List extends Component {

    render() {
        return (
            <ul className={`list ${this.props.dense ? 'dense' : ''}`}>
                <ListItem icon="star" text="Here is my list 1"/>
                <ListItem avatar icon="folder" text="Here is my list 1"/>
                <ListItem text="Here is my list 2"/>
                <ListItem icon="star" text="Here is my list 1"/>


                <ListItem icon="star" text="Here is my list 1" secondaryText="Secondary Text"/>
                <ListItem avatar icon="folder" text="Here is my list 1" secondaryText="Secondary Text"/>
                <ListItem text="Here is my list 2 dkoaspdkopa kdaopd kopad ksdk os dkoas sdaodpkas asdkopa " secondaryText="Secondary Tex das dad ads a dsa sdadad adadsadsad a dasd as da t"/>
                <ListItem icon="star" text="Here is my list 1" twoLine/>
            </ul>
        );

    }
}

export default List;