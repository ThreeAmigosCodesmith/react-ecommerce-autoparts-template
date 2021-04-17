import React, { useState } from 'react';
import {
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from '@material-ui/core';
import './Signup.css';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../yardhop-logo.png';
import * as types from '../../redux/actions/actionTypes';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [zipcode, setZipcode] = useState();
  const [companyName, setCompanyName] = useState('');
  const userRole = useSelector((state) => state.auth.userRole);
  const history = useHistory();
  const dispatch = useDispatch();

  const submitUser = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('/api/users', {
        name,
        email,
        password,
        userRole,
        zipcode,
      });
      dispatch({
        type: types.AUTH_USER,
        payload: {
          name: res.data.name,
          id: res.data.id,
        },
      });
      if (userRole === 'CUSTOMER') history.push('/home');
      else history.push('/dashboard');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  const changeUserRole = (value) => {
    dispatch({ type: types.SET_USER_ROLE, payload: value });
  };

  return (
    <div className="signup__background">
      <div className="signup">
        <div className="login__image">
          <Link to="/">
            <img className="login__logo" src={Logo} alt="Company Logo" />
          </Link>
        </div>

        <div className="signup__container">
          <h1>Sign up</h1>
          <form>
            <FormControl component="fieldset">
              <FormLabel component="legend">User role: </FormLabel>
              <RadioGroup row value={userRole} onChange={(e, value) => changeUserRole(value)}>
                <FormControlLabel value="CUSTOMER" control={<Radio color="primary" />} label="Customer" />
                <FormControlLabel value="OWNER" control={<Radio color="primary" />} label="Owner" />
              </RadioGroup>
            </FormControl>

            {userRole === 'OWNER' ? (
              <div className="signup__input">
                <span className="login__icon"><BusinessIcon /></span>
                <input type="text" placeholder="Enter company name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
              </div>
            ) : null}

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

            <div className="signup__input">
              <span className="login__icon"><LocationOnIcon /></span>
              <input type="number" placeholder="Enter zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
            </div>

            <button type="submit" className="signup__button" onClick={(e) => submitUser(e)}>Register</button>
          </form>

          <div className="signup__login">
            <p>Already have an account?</p>
            <Link to="/login">
              Log In
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
