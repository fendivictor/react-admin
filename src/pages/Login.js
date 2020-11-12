import React, {Component} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCo2c_3Hbh7c-OFv0StO9gODQUPa-7MG04",
    authDomain: "latihan-react-native-235507.firebaseapp.com",
    databaseURL: "https://latihan-react-native-235507.firebaseio.com",
    projectId: "latihan-react-native-235507",
    storageBucket: "latihan-react-native-235507.appspot.com",
    messagingSenderId: "106491123919",
    appId: "1:106491123919:web:f79341991787fb82957fba"
};

firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();

class Login extends Component {
    state = {
        user: [],
        email: '',
        password: ''
    }

    onBtnLoginClick = () => {
        firebase.auth().signInWithPopup(provider)
        .then((res) => {
            this.setState({user: res.user})
        })
        .catch((err) => {
            console.log(err)
        });
    }

    onBtnLogoutClick = () =>{
        firebase.auth().signOut()
        .then((res) => this.setState({user : []}))
        .catch((err) => console.log(err))
    }

    onSubmitForm = (e) => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
            console.log(error);
        });
    }

    onChangeFormHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;

        this.setState({[name]: val});
    }

    render() {
        return (
            <div>
                <Container>
                    <Row className="login-form">
                        <Col>
                            <h2>Sign in</h2>
                            <div style={{display : 'flex' , justifyContent:'center'}}>
                            { this.state.user.length === 0
                              ? 
                                <div style={{width: '100%'}}>
                                    <Form style={{marginBottom: '20px'}} onSubmit={this.onSubmitForm}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.onChangeFormHandler} />
                                            <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
        
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" name="password" placeholder="Password" onChange={this.onChangeFormHandler} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                    <input type='button' className="btn btn-danger btn-login btn-lg" value='Login with Google' onClick={this.onBtnLoginClick} />
                                </div>
                              :
                                <div>
                                    <img src={this.state.user.photoURL  } alt='broken' width="200px"/>
                                    <p>{this.state.user.displayName}</p>
                                    <input type='button' value='log out' onClick={this.onBtnLogoutClick} />
                                </div>
                            }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login;