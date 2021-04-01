import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Nav.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../../StateProvider';

const Nav = () => {
  const [{ cart }] = useStateValue();
  const history = useHistory();

  const navStyle = {
    color: 'rgb(128,128,128)',
    textDecoration: 'none',
  };

  const logOutButton = (event) => {
    event.preventDefault();
    fetch('/api/verify', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) history.push('/');
    });
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
        <Link style={navStyle} to="/">
          <button id="nav__logOutButton" type="button" onClick={(e) => logOutButton(e)}>Logout</button>
        </Link>
      </div>
      <div className="nav__left">
        <div className="nav__login">
          <Link to="/login">
            <button className="nav__loginButton" type="button">Login</button>
          </Link>
          <p>or</p>
          <Link to="/signup">
            <button className="nav__signUpButton" type="button">Create an Account</button>
          </Link>
        </div>
        <div className="nav__basket">
          <Link to="/cart">
            <ShoppingCartIcon style={{ fill: '#f8f8f8' }} />
          </Link>
          <span className="nav__basketCount">{cart?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
