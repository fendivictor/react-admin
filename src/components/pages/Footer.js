import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/footer.css';

class Footer extends Component {
    render() {
        return (
            <div id="contact" class="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="contact-title">Hubungi Kami</h1>
                        </div>
                        <div class="col-md-5">
                            <div class="box-contact">
                                <div class="icon-contact">
                                    <img src="https://intaapp.id/assets/img/icon/phone.png" alt="Phone" />
                                </div>
                                <div class="text-icon">
                                    <a class="text-footer" href="https://api.whatsapp.com/send?phone=6281342907575&text=Halo%20Saya%20Ingin%20menjadi%20mitra%20inta">0813 4290 7575</a>
                                </div>
                            </div>

                            <div class="box-contact">
                                <div class="icon-contact">
                                    <img src="https://intaapp.id/assets/img/icon/mail.png" alt="Email" />
                                </div>
                                <div class="text-icon">
                                    <a href="mailto:customerservice@intaapp.id" class="text-footer">customerservice@intaapp.id</a>
                                </div>
                            </div>

                            <div class="box-contact">
                                <div class="box-social-wrapper">
                                    <a class="icon-contact-social" href="https://www.facebook.com/IntaApp/">
                                        <img src="https://intaapp.id/assets/img/icon/facebook.png" alt="Facebook" />
                                    </a>
                                    <a class="icon-contact-social" href="https://www.instagram.com/intaapp.id/">
                                        <img src="https://intaapp.id/assets/img/icon/instagram.png" alt="Instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <h2 class="title-send-message">Kirim Pesan</h2>
                            <form id="form-contact" action="#">
                                <div class="form-group">
                                    <input type="text" name="name" id="name" class="form-control input-lg" placeholder="Nama" required autocomplete="off" />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="email" id="email" class="form-control input-lg" placeholder="Email" required autocomplete="off" />
                                </div>
                                <div class="form-group">
                                    <textarea name="message" id="message" cols="6" rows="6" class="form-control" placeholder="Pesan anda"></textarea>
                                </div>
                                <div class="form-group text-right">
                                    <button class="btn-send">Kirim</button>			
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;