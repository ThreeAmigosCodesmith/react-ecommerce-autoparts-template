import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navStyle = {
    color: 'rgb(128,128,128)',
    textDecoration: 'none',
  };

  return (
    <div className="nav">
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li className="link">Home</li>
        </Link>
        <Link style={navStyle} to="/catalog">
          <li className="link">Catalog</li>
        </Link>
        <Link style={navStyle} to="/order">
          <li className="link">Track Order</li>
        </Link>
        <Link style={navStyle} to="/cart">
          <li className="link">Cart</li>
        </Link>
      </ul>
      <div className="reg-login-container">
        <Link style={navStyle} to="/login">
          <button type="button">Login</button>
        </Link>
        <p>or</p>
        <Link style={navStyle} to="/signup">
          <button type="button">Create an Account</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
