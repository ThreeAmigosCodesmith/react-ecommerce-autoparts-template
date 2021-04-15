import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import Nav from '../Nav/Nav';
import Logo from '../../yardhop-logo.png';
import './Header.css';
import * as types from '../../redux/actions/actionTypes';

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log('hello');
    fetch('/session')
      .then((res) => res.json())
      .then((res) => {
        // console.log('res: ', res.user);
        dispatch({
          type: types.AUTH_USER,
          payload: {
            name: `${res.user.firstName} ${res.user.lastName}`,
            id: res.user.customerID,
          },
        });
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
        <div className="header__searchbar">
          <input
            type="text"
            className="header__searchInput"
            placeholder="Search for car parts using keywords or #..."
          />
          <SearchIcon className="header__searchIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
