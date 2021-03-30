import React from 'react';
// import { Link } from 'react-router-dom';
// import Nav from '../Nav/Nav';
// import Logo from '../../yardhop-logo.png';
import './Footer.css';

const Footer = () => (
  <div className="footer-container">
    <footer>

      {/* footer main */}
      <section>
        <div className="ft-main-item">
          <h2 className="ft-title">About</h2>
          <ul>
            <li><a href="www.google.com">Services</a></li>
            <li><a href="www.google.com">Portfolio</a></li>
            <li><a href="www.google.com">Pricing</a></li>
            <li><a href="www.google.com">Customers</a></li>
            <li><a href="www.google.com">Careers</a></li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Resources</h2>
          <ul>
            <li><a href="www.google.com">Docs</a></li>
            <li><a href="www.google.com">Blog</a></li>
            <li><a href="www.google.com">eBooks</a></li>
            <li><a href="www.google.com">Webinars</a></li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Contact</h2>
          <ul>
            <li><a href="www.google.com">Help</a></li>
            <li><a href="www.google.com">Sales</a></li>
            <li><a href="www.google.com">Advertise</a></li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Stay Updated</h2>
          <p>Subscribe to our newsletter to get our latest news.</p>
          <form>
            <input type="email" name="email" placeholder="Enter email address" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </section>

      {/* Footer social */}
      <section className="ft-social">
        <ul className="ft-social-list">
          <li><a href="www.google.com" aria-label="fb"><i className="fab fa-facebook" /></a></li>
          <li><a href="www.google.com" aria-label="tw"><i className="fab fa-twitter" /></a></li>
          <li><a href="www.google.com" aria-label="ig"><i className="fab fa-instagram" /></a></li>
          <li><a href="www.google.com" aria-label="gh"><i className="fab fa-github" /></a></li>
          <li><a href="www.google.com" aria-label="li"><i className="fab fa-linkedin" /></a></li>
          <li><a href="www.google.com" aria-label="yt"><i className="fab fa-youtube" /></a></li>
        </ul>
      </section>

      {/* Footer Legal */}
      <section className="ft-legal">
        <ul className="ft-legal-list">
          <li><a href="www.google.com">Terms &amp; Conditions</a></li>
          <li><a href="www.google.com">Privacy Policy</a></li>
          <li>&copy; 2019 Copyright Nowrap Inc.</li>
        </ul>
      </section>
    </footer>
  </div>
);

export default Footer;
