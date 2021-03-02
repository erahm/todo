import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sign-in.scss";

export default () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const eventHandler = (event, email, password) => {
    event.preventDefault();
  }

  const changeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'email' && value !== email) {
      setEmail(value);
    }
    else if (name === 'password' && value !== password) {
      setPassword(value);
    }
  };

  return (
    <div className="sign-in-form">
      <h1>Sign In</h1>
      <div className="form-wrapper">
        <form>
          <div>
            <label htmlFor="email">email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => changeHandler(event)}
            />
          </div>
          <div>
            <label htmlFor="password">password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => changeHandler(event)}
            />
          </div>
          <button className="login-button">Sign In</button>
        </form>
        <p>
          Don't have an account?&nbsp;
          <Link to="/join">Sign up</Link>
        </p>
      </div>
    </div>
  )
}