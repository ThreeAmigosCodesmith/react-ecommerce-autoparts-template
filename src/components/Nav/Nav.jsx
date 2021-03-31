import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../../StateProvider';

const Nav = () => {
  const [{ basket }] = useStateValue();

  const navStyle = {
    color: 'rgb(128,128,128)',
    textDecoration: 'none',
  };

  return (
    <div className="nav">
      <div className="nav__links">
        <Link style={navStyle} to="/">
          <p className="link">Home</p>
        </Link>
        <Link style={navStyle} to="/catalog">
          <p className="link">Catalog</p>
        </Link>
        <Link style={navStyle} to="/order">
          <p className="link">Track Order</p>
        </Link>
        <Link style={navStyle} to="/cart">
          <p className="link">Cart</p>
        </Link>
      </div>
      <div className="nav__left">
        <div className="nav__login">
          <Link to="/login">
            <button type="button">Login</button>
          </Link>
          <p>or</p>
          <Link to="/signup">
            <button type="button">Create an Account</button>
          </Link>
        </div>
        <div className="nav__basket">
          <Link to="/checkout">
            <ShoppingCartIcon style={{ fill: '#f8f8f8' }} />
          </Link>
          <span className="nav__basketCount">{basket?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
