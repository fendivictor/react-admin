import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
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
    state = {user: []}

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

    render() {
        return (
            <div>
                <Container>
                    <Row className="login-form">
                        <Col>
                            <h2>Sign in</h2>
                            <div style={{display : 'flex' , justifyContent:'center',marginTop:'300px'}}>
                            { this.state.user.length === 0
                              ? <input type='button' value='login with google' onClick={this.onBtnLoginClick} />
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