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
        <h4>CONTACT</h4>
        <div className="footer__section__text">
          <p className="footer__link">contact@yardhop.com</p>
          <p className="footer__link"> +1 (800) 999-9999</p>
        </div>
      </div>
    </div>

    <div className="footer__icons">
      <TwitterIcon />
      <FacebookIcon />
      <InstagramIcon />
      <YouTubeIcon />
    </div>

    <p className="footer__copyright">Copyright &copy; 2021 YardHop Inc. All Rights Reserved.</p>

  </div>
);

export default Footer;
