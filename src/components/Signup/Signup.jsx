import React, { useState } from 'react';
import './Signup.css';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

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
    }).then((res) => {
      if (res.status === 200) history.push('/dashboard');
    });
  };

  return (
    <div>
      <div className="signup-wrapper">
        <h1> Create a new account </h1>
        <form>
          <label htmlFor="name">
            <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            Name
          </label>
          <label htmlFor="email">
            <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            Email
          </label>
          <label htmlFor="password">
            <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            Password
          </label>
          <div>
            <button type="submit" className="btn" onClick={(e) => submitUser(e)}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
