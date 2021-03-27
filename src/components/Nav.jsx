import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';

const Nav = () => {
  const navStyle = {
    color: 'rgb(128,128,128)',
    textDecoration: 'none',
  };

  return (
    <nav>
      <Link to="/">
        <img className="img-logo" src={Logo} alt="logo" />
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li className="link">Home</li>
        </Link>
        <Link style={navStyle} to="/PastCoordinates">
          <li className="link">Catalog</li>
        </Link>
        <Link style={navStyle} to="/PromptEntry">
          <li className="link">Track Order</li>
        </Link>
        <Link style={navStyle} to="/cart">
          <li className="link">Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
