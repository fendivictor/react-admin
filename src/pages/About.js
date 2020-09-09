import React, {Component} from 'react';
import Navbar from '../components/Menubar';
import Breadcrumb from '../components/Breadcrumb';
import {Container, Row, Col} from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Breadcrumb title="About" />
                <Container fluid>
                    <Row>
                    <Col>
                        <h3>Ini About</h3>
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;