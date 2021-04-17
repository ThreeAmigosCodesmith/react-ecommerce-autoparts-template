/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../yardhop-logo.png';
import { AUTH_USER, SET_USER_ROLE } from '../../redux/actions/actionTypes';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.auth.userRole);
  const signInButton = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('/api/users/verify', { email, password });
      // console.log(res.data);
      dispatch({ type: AUTH_USER, payload: res.data });
      dispatch({ type: SET_USER_ROLE, payload: res.data.userRole });
      if (userRole === 'CUSTOMER') history.push('/');
      else history.push('/dashboard');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <div className="login__background">
      <div className="login">
        <div className="login__image">
          <Link to="/">
            <img className="login__logo" src={Logo} alt="" />
          </Link>
        </div>
        <div className="login__container">
          <h1>Log in</h1>
          <form>
            <div className="login__input">
              <span className="login__icon"><MailOutlineIcon /></span>
              <input type="email" placeholder="Enter email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="login__input">
              <span className="login__icon"><LockIcon /></span>
              <input type="password" placeholder="Enter password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="login__signInButton" onClick={(e) => signInButton(e)}>Log in</button>
          </form>
          <div className="login__createAccount">
            <p>Don&apos;t have an account?</p>
            <Link to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
