import React from 'react';
import './Footer.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => (
  <div className="footer">
    <div className="footer__top">
      <div className="footer__section">
        <h4>COMPANY</h4>
        <a href="/">About us</a>
        <a href="/">Our Services</a>
        <a href="/">Careers</a>
        <a href="/">Blog</a>
      </div>

      <div className="footer__section">
        <h4>CONTACT</h4>
        <p className="footer__email">contact@yardhop.com</p>
        <p>+1 (800) 999-9999</p>
        <div className="footer__icons">
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
      </div>

      <div className="footer__section">
        <h4>HELP</h4>
        <a href="/">Seller Center</a>
        <a href="/">Resolution Center</a>
        <a href="/">Buying Help</a>
        <a href="/">Registration</a>
      </div>
    </div>

    <p className="footer__copyright">Copyright &copy; 2021 YardHop Inc. All Rights Reserved.</p>
  </div>
);

export default Footer;
