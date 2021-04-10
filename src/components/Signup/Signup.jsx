import React, { useState } from 'react';
import './Signup.css';
import { useHistory, Link } from 'react-router-dom';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../yardhop-logo.png';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const validateForm = () => {
  // (name.length !== 0) && (email.length > 0) && (password.length > 0) };

  const submitUser = (event) => {
    event.preventDefault();
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((res) => res.json())
      .then((res) => {
        dispatch({
          type: 'AUTH_USER',
          item: {
            name: res.name,
            id: res.id,
          },
        });
      })
      .then(() => history.push('/dashboard'))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };

  return (
    <div className="signup__background">
      <div className="signup">
        <div className="login__image">
          <Link to="/">
            <img className="login__logo" src={Logo} alt="" />
          </Link>
        </div>

        <div className="signup__container">
          <h1>Sign up</h1>
          <form>
            <div className="signup__input">
              <span className="login__icon"><PermIdentityIcon /></span>
              <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="signup__input">
              <span className="login__icon"><MailOutlineIcon /></span>
              <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="signup__input">
              <span className="login__icon"><LockIcon /></span>
              <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit" className="signup__button" onClick={(e) => submitUser(e)}>Register</button>
          </form>

          <div className="signup__login">
            <p>Already have an account?</p>
            <a href="/login">
              Log In
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
