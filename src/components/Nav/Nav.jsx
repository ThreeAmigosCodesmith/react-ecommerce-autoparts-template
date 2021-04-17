import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Nav.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

const Nav = () => {
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cart);
  const userRole = useSelector((state) => state.auth.userRole);
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
        {userRole === 'CUSTOMER' ? (
          <>
            <Link style={navStyle} to="/">
              <p className="link">Home</p>
            </Link>
            <Link style={navStyle} to="/catalog">
              <p className="link">Catalog</p>
            </Link>
            <Link style={navStyle} to="/dashboard">
              <p className="link">Dashboard</p>
            </Link>
          </>
        ) : null}
      </div>

      <div className="nav__left">
        {user ? (
          <div className="nav__logout">
            <p className="nav__loggedInMsg">{`Hello, ${user?.firstName || user.companyName}!`}</p>
            <Link style={navStyle} to="/">
              <Button id="nav__logOutButton" type="button" variant="contained" onClick={(e) => logOutButton(e)}>Logout</Button>
            </Link>
          </div>
        ) : (
          <div className="nav__login">
            <Link to="/login">
              <button className="nav__loginButton" type="button">Login</button>
            </Link>
            <p>or</p>
            <Link to="/signup">
              <button className="nav__signUpButton" type="button">Register</button>
            </Link>
          </div>
        )}
        <div className="nav__basket">
          {userRole === 'CUSTOMER' ? (
            <>
              <Link to="/cart">
                <ShoppingCartIcon style={{ fill: '#f8f8f8' }} />
              </Link>
              <span className="nav__basketCount">{cart?.length}</span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Nav;
