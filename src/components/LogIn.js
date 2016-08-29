import React, {Component} from 'react';
import Card from '../components/material/card/Card';
import CardActions from '../components/material/card/CardActions';
import CardContent from '../components/material/card/CardContent';
import Button  from '../components/material/button/Button';
import IconButton from '../components/material/button/IconButton';
import Input from '../components/material/text-fields/Input';
import Checkbox from '../components/material/controls/Checkbox';
import { connect } from 'react-redux';
// import linkState from 'react-link-state';

class LogIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email : 'test',
            password : undefined
        };
    }

    mapStateToProps(state, ownProps) {
        console.log('map');
        return {
            active: ownProps.filter === state.visibilityFilter
        }
    }

    handleChange(event) {
        console.log(event);
    }

    logIn() {
        console.log('log in');
        console.log(this.state.email);
        console.log(this.state.password);
    }
    render() {
        return (

            <div>

                <section className="container">
                    <div className="row space-around">
                        <div className="col-md-6 col-sm-8 col-xs-12">
                            <Card title="Log In">
                                <CardContent>
                                    <Input label="Email" value={this.state.password} onChange={this.handleChange} type="text"/>
                                    <Input label="Password" value={this.state.password} onChange={this.handleChange.bind(this)} type="password"/>
                                </CardContent>
                                <CardActions>
                                    <Button primary onClick={this.logIn.bind(this)}>test</Button>
                                </CardActions>
                            </Card>
                        </div>

                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div>
                                <Button>test</Button>
                                <IconButton icon="person" raised primary></IconButton>
                                <IconButton icon="star" type="square" primary></IconButton>
                                <IconButton icon="edit" raised type="small" primary></IconButton>
                                <Checkbox/>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        );

    }
}

export default LogIn;