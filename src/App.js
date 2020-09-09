import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Table} from 'react-bootstrap';
import './App.css';
import Navbar from './components/Menubar';
import Breadcrumb from './components/Breadcrumb';

function App() {
  return (
    <div>
      <Navbar />
      <Breadcrumb title="Home" />
      <Container fluid>
        <Row>
          <Col>
              <h3>Ini Home</h3>
          </Col>
        </Row>
        <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
