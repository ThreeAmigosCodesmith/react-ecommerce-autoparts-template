import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Nav.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';

const Nav = () => {
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const navStyle = {
    color: 'rgb(128,128,128)',
    textDecoration: 'none',
  };

  const logOutButton = (event) => {
    event.preventDefault();
    fetch('/api/users/verify', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    // eslint-disable-next-line no-unused-vars
    }).then((res) => {
      history.push('/');
      dispatch({
        type: 'UNAUTH_USER',
      });
    })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
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
        { user && (
          <Link style={navStyle} to="/dashboard">
            <p className="link">Dashboard</p>
          </Link>
        )}
      </div>
      <div className="nav__left">
        {user ? (
          <div className="nav__logout">
            <p className="nav__loggedInMsg">{`Hello, ${user.firstName}!`}</p>
            <Link style={navStyle} to="/">
              <button id="nav__logOutButton" type="button" onClick={(e) => logOutButton(e)}>Logout</button>
            </Link>
          </div>
        ) : (
          <div className="nav__login">
            <Link to="/login">
              <button className="nav__loginButton" type="button">Login</button>
            </Link>
            <p>or</p>
            <Link to="/signup">
              <button className="nav__signUpButton" type="button">Create an Account</button>
            </Link>
          </div>
        )}
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
