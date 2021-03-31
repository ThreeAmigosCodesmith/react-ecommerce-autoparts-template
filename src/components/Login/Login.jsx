import React from 'react';
import './Login.css';

const Login = () => (
  <div>
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <p>Username</p>
        <input type="text" />
        <p>Password</p>
        <input type="password" />
        <div>
          <button type="submit"> Login </button>
        </div>
      </form>
    </div>
  </div>
);

export default Login;
