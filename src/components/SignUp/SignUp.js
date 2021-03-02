import React, { useState } from "react";
import "./sign-up.scss";

export default () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

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
    else if (name === 'confirm' && value !== confirm) {
      setConfirm(value)
    }
  }

  return (
    <div className="sign-up-form">
      <h1>Sign Up</h1>
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
          <div>
            <label htmlFor="confirm">confirm password:</label>
            <input
              type="password"
              name="confirm"
              value={confirm}
              onChange={(event) => changeHandler(event)}
            />
          </div>
          { password !== confirm &&
            <div className="no-match">password does not match</div>
          }
          <button className="sign-up-button">Sign Up</button>
        </form>
      </div>
    </div>
  )
}