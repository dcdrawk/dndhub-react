import React, {Component} from 'react';
import Card from '../components/material/card/Card';
import CardActions from '../components/material/card/CardActions';
import CardContent from '../components/material/card/CardContent';
import Button  from '../components/material/button/Button';
import IconButton from '../components/material/button/IconButton';
import Input from '../components/material/text-fields/Input';
import Checkbox from '../components/material/controls/Checkbox';
import Firebase from 'firebase';
// import { connect } from 'react-redux';
// import linkState from 'react-link-state';

class LogIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email : 'tesdsadsaat',
            password : undefined
        };
        console.log(this);
    }

    mapStateToProps(state, ownProps) {
        console.log('map');
        return {
            active: ownProps.filter === state.visibilityFilter
        }
    }

    handleChange(event) {
        // console.log(event);
        // console.log(this);
    }

    logIn() {
        console.log('log in');
        console.log(this.email.state.value);
        console.log(this.password.state.value);

        let email = this.email.state.value;
        let password = this.password.state.value;

        Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);

            // ...
        });
    }

    componentDidMount() {
        console.log('mounted');
        // console.log(this);
    }

    componentDidUpdate() {
        console.log('updated');
        console.log(this);
    }

    render() {
        return (

            <div>

                <section className="container">
                    <div className="row space-around">
                        <div className="col-md-6 col-sm-8 col-xs-12">
                            <Card title="Log In">
                                <CardContent>
                                    <form onChange={this.handleChange.bind(this)}>
                                        <Input label="Email"
                                               ref={(c) => {this.email = c}}
                                               value={this.state.password}
                                               onBlur={this.handleChange.bind(this)}
                                               type="text"/>
                                        <Input label="Password"
                                               ref={(c) => {this.password = c}}
                                               value={this.state.password}
                                               onChange={this.handleChange.bind(this)}
                                               type="password"/>
                                    </form>
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