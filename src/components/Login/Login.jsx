import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

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
    <div>
      <div className="login-wrapper">
        <h1>Please Log In</h1>

        <form>
          <label htmlFor="email">
            Email
            <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit" className="btn" onClick={(e) => signInButton(e)}>Login</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;
