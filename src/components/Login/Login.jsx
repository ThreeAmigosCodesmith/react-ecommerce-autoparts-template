import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Login.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import Logo from '../../yardhop-logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signInButton = (event) => {
    event.preventDefault();

    fetch('/api/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => {
      if (res.status === 200) history.push('/dashboard');
    });
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
            <a href="/signup">
              Sign Up
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
