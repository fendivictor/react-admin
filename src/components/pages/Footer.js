import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/footer.css';
import BlockUi from 'react-block-ui';
import '../../style/blockui.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    
        this.toggleBlocking = this.toggleBlocking.bind(this);
        this.state = {
          blocking: false,
        };
    }

    toggleBlocking() {
        this.setState({blocking: !this.state.blocking});
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        
        this.toggleBlocking();

        setTimeout(() => {
            this.toggleBlocking();
        }, 3000);
    }    

    render() {
        return (
            <div id="contact" className="contact">
                <BlockUi tag="div" blocking={this.state.blocking} keepInView message="Please wait">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="contact-title">Hubungi Kami</h1>
                            </div>
                            <div className="col-md-5">
                                <div className="box-contact">
                                    <div className="icon-contact">
                                        <img src="https://intaapp.id/assets/img/icon/phone.png" alt="Phone" />
                                    </div>
                                    <div className="text-icon">
                                        <a className="text-footer" href="https://api.whatsapp.com/send?phone=6281342907575&text=Halo%20Saya%20Ingin%20menjadi%20mitra%20inta">0813 4290 7575</a>
                                    </div>
                                </div>

                                <div className="box-contact">
                                    <div className="icon-contact">
                                        <img src="https://intaapp.id/assets/img/icon/mail.png" alt="Email" />
                                    </div>
                                    <div className="text-icon">
                                        <a href="mailto:customerservice@intaapp.id" className="text-footer">customerservice@intaapp.id</a>
                                    </div>
                                </div>

                                <div className="box-contact">
                                    <div className="box-social-wrapper">
                                        <a className="icon-contact-social" href="https://www.facebook.com/IntaApp/">
                                            <img src="https://intaapp.id/assets/img/icon/facebook.png" alt="Facebook" />
                                        </a>
                                        <a className="icon-contact-social" href="https://www.instagram.com/intaapp.id/">
                                            <img src="https://intaapp.id/assets/img/icon/instagram.png" alt="Instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h2 className="title-send-message">Kirim Pesan</h2>
                                <form id="form-contact" action="#" onSubmit={this.onSubmitHandler}>
                                    <div className="form-group">
                                        <input type="text" name="name" id="name" className="form-control input-lg" placeholder="Nama" required autoComplete="off" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email" required autoComplete="off" />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" id="message" cols="6" rows="6" className="form-control" placeholder="Pesan anda"></textarea>
                                    </div>
                                    <div className="form-group text-right">
                                        <button className="btn-send">Kirim</button>			
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </BlockUi>
            </div>
        );
    }
}

export default Footer;