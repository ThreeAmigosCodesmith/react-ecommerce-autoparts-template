import React from 'react';
import { Link } from 'react-router-dom';
// import SearchIcon from '@material-ui/icons/Search';
import Nav from '../Nav/Nav';
import Logo from '../../yardhop-logo.png';
import './Header.css';

const Header = () => (
  <div className="header">

    <div className="logo">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
    </div>

    <div className="header__search">
      <Nav />
      {/* <div className="header__searchbar">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search for car parts using keywords or #..."
        />
        <SearchIcon className="header__searchIcon" />
      </div> */}
    </div>

  </div>
);

export default Header;
