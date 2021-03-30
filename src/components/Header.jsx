import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Logo from '../yardhop-logo.png';
import './styles/Header.css';

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
    </div>
    <div className="links-searchbar-container">
      <Nav />
      <div className="searchBar">
        <form>
          <input type="text" placeholder="Search for car parts using keywords or #..." />
          <button type="submit" id="search-button">Search</button>
        </form>
      </div>
    </div>
  </div>
);

export default Header;
