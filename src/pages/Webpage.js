import React, {Component} from 'react';
import Navbar from '../components/pages/Navbar';
import Footer from '../components/pages/Footer';

class Webpage extends Component {
    render() {
        return (
            <div id="page">
                <Navbar />
                <Footer />
            </div>
        );
    }
}

export default Webpage;