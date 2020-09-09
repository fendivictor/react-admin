import React, {Component} from 'react';
import Navbar from '../components/Menubar';
import Breadcrumb from '../components/Breadcrumb';
import {Container, Row, Col} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

const columns = [{
        dataField: 'item_number',
        text: 'Item Number',
        filter: textFilter(),
        sort: true
  }, {
        dataField: 'item_name',
        text: 'Item Name',
        filter: textFilter(),
        sort: true
  }, {
        dataField: 'lot_number',
        text: 'Lot Number',
        filter: textFilter(),
        sort: true
  }, {
        dataField: 'location',
        text: 'Location',
        filter: textFilter(),
        sort: true
  }, {
        dataField: 'qty',
        text: 'Qty',
        filter: textFilter(),
        sort: true
  }, {
        dataField: 'unit',
        text: 'Unit',
        filter: textFilter(),
        sort: true
  }];

class Item extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        const urlFetch = fetch("http://localhost:6200/item");

        urlFetch.then((res) => {
            return res.json();
        }).then((response) => {
            this.setState({
                data: response
            })
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <Breadcrumb title="Item" />
                <Container fluid>
                    <Row>
                        <Col>
                            <h3>Ini Item</h3>
                            <p>Datatable - Bootstrap Table</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BootstrapTable keyField='_id' data={ this.state.data } columns={ columns } pagination={ paginationFactory() } filter={ filterFactory() } />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Item;