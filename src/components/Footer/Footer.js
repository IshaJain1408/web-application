import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer text-white text-center text-lg-start p-1">
     <div class="container p-4">
  <div class="row d-flex">
    <div class="col-lg-8 col-md-4 mb-4 mb-md-0">
      <p class="text-uppercase">Karo Abhayas <br />112 Electronic City<br />Bangalore, India</p>
    </div>
    <div class="col-lg-4 col-md-8 mb-4 mb-md-0 d-flex justify-content-end">
      <div>
        <p>Questions or ideas? We're here! Drop us a line via email, phone, or our online form. Expect speedy replies. Let's chat!</p>
          <a href="#contactForm" class="btn border-white rounded-0 text-uppercase">Get in Touch</a>
      </div>
    </div>
  </div>
</div>

      <div className="container p-4 pb-0">
        <section className="mb-4 d-flex justify-content-center gap-3">
          {/* Facebook */}
          <a
            href="#!"
            className="btn text-white btn-floating rounded-circle border-primary"
            style={{ backgroundColor: '#3b5998', width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            role="button"
          >
            <FaFacebookF  style={{ fontSize: '15px' }} />
          </a>
          {/* Twitter */}
          <a
            href="#!"
            className="btn text-white btn-floating rounded-circle border-info"
            style={{ width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            role="button"
          >
            <FaTwitter  style={{ fontSize: '20px' }} />
          </a>
          {/* Instagram */}
          <a
            href="#!"
            className="btn text-white btn-floating rounded-circle border-danger-subtle"
            style={{  width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            role="button"
          >
            <FaInstagram   style={{ fontSize: '20px'}} />
          </a>
          {/* LinkedIn */}
          <a
            href="#!"
            className="btn text-white btn-floating rounded-circle border-info-subtle "
            style={{  width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            role="button"
          >
            <FaLinkedinIn className='text-info-subtle' style={{ fontSize: '20px' }} />
          </a>
        </section>
      </div>
      <div className="text-center p-3">
        © 2020 Copyright :
        <Link className="text-primary p-2" to="/"> KaroAbhayas.com</Link>
      </div>
    </footer>
  );
}

export default Footer;
