/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Logo from '../../yardhop-logo.png';
import './Header.css';
import * as types from '../../redux/actions/actionTypes';

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  // const dispatch = useDispatch();

  React.useEffect(() => {
    fetch('/session')
      .then((res) => res.json())
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('res: ', res.user);
        // dispatch({
        //   type: types.AUTH_USER,
        //   payload: {
        //     name: `${res.user.firstName} ${res.user.lastName}`,
        //     id: res.user.customerID,
        //   },
        // });
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  }, [types]);

  return (
    <div className="header">

      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <div className="header__search">
        <Nav />
      </div>

    </div>
  );
};

export default Header;
