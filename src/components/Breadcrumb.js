import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Breadcrumb} from 'react-bootstrap';
import '../App.css';

class Breadcrumbs extends Component {
  render() {
      return (
        <div>
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>{this.props.title}</Breadcrumb.Item>
        </Breadcrumb>
        </div>
      )
  };
}

export default Breadcrumbs;
