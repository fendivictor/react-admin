import React, {Component} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCo2c_3Hbh7c-OFv0StO9gODQUPa-7MG04",
    authDomain: "latihan-react-native-235507.firebaseapp.com",
    databaseURL: "https://latihan-react-native-235507.firebaseio.com",
    projectId: "latihan-react-native-235507",
    storageBucket: "latihan-react-native-235507.appspot.com",
    messagingSenderId: "106491123919",
    appId: "1:106491123919:web:f79341991787fb82957fba"
};

class Login extends Component {
    constructor() {
        
    }

    render() {
        return (
            <div>
                <Container>
                    <Row className="login-form">
                        <Col>
                            <h2>Sign in</h2>
                            <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login;