import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/header.css';

class Navbar extends Component {
    render() {
        return (
            <div id="home" className="home-section">
                <nav className="navbar navbar-expand-lg bg-transparent">
                    <a className="navbar-brand" href="https://intaapp.id/">
                        <img src="https://intaapp.id/assets/img/icon/intaputih.png" alt="" className="img-logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#app-work">Cara Pakai INTA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#get-app">Download Gratis</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Hubungi Kami</a>
                            </li>
                            <li className="nav-item">
                                <img className="social-icon" id="icon-header-fb" src="https://intaapp.id/assets/img/icon/facebook.png" alt="Facebook" />
                                <img className="social-icon" id="icon-header-ig" src="https://intaapp.id/assets/img/icon/instagram.png" alt="Instagram" />
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="navbar-text">
                    <h1 className="heading-text">Kasana Kamari</h1>
                    <h1 className="heading-text">SO GAMPANG</h1>
                    <p>Sekarang perjalanan antar kota kamu semakin mudah bersama INTA, Mitra driver kami selalu menjadikan keamanan dan kenyamananmu dalam perjalanan sebagai prioritas</p>
                    <div className="button-group">
                        <a id="btn-contact-us" href="#join-us">Menjadi Pengemudi</a>
                        <a id="btn-download-app" href="#get-app">Download Gratis</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;