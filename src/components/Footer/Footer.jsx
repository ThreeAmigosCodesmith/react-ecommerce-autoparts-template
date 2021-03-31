import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="container-fluid">
    <div className="footer">
      <div className="title">
        <a href="http://google.com">Social</a>
      </div>

      <ul className="section">
        <li><a href="https://www.facebook.com/" aria-label="fb">Services</a></li>
        <li><a href="https://www.twitter.com/" aria-label="fb">Customers</a></li>
        <li><a href="https://www.instagram.com/" aria-label="fb">Careers</a></li>
      </ul>
      <ul className="section">
        <li><a href="https://www.facebook.com/" aria-label="fb">Help</a></li>
        <li><a href="https://www.twitter.com/" aria-label="fb">Sales</a></li>
        <li><a href="https://www.instagram.com/" aria-label="fb">Advertise</a></li>
      </ul>
      <ul className="section">
        <li><a href="https://www.facebook.com/" aria-label="fb"><i className="fab fa-facebook-f" /></a></li>
        <li><a href="https://www.twitter.com/" aria-label="fb"><i className="fab fa-twitter" /></a></li>
        <li><a href="https://www.instagram.com/" aria-label="fb"><i className="fab fa-instagram" /></a></li>
      </ul>

      <div className="copyright">YardHop Inc. Copyright&copy;2020</div>

    </div>
  </div>
);

export default Footer;
