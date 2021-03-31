import React from 'react';
import './Signup.css';

const Signup = () => (
  <div>
    <div className="signup-wrapper">
      <h1> Create a new account </h1>
      <form>
        <p>Email</p>
        <input type="email" />
        <p>Username</p>
        <input type="text" />
        <p>Password</p>
        <input type="password" />
        <p>Address</p>
        <input type="text" />
        <div>
          <button type="submit"> Create </button>
        </div>
      </form>
    </div>
  </div>
);

export default Signup;
