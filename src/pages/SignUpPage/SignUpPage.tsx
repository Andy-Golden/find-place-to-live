import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const SignUpPage = (): JSX.Element => {
  return (
    <div className="auth-container">
      <form className="form">
        <div className="heading">
          <h1 className="title">Sign Up</h1>
          <p className="subtitle">Create your account to get full access</p>
        </div>
        <div className="input-boxes">
          <div className="single-input-fields">
            <label>Full Name</label>
            <input className="input" placeholder="Enter full name" />
          </div>
          <div className="single-input-fields">
            <label>Email</label>
            <input className="input" placeholder="Enter email address" />
          </div>
          <div className="single-input-fields">
            <label>Password</label>
            <input className="input" placeholder="Enter password" />
          </div>
          <div className="single-input-fields">
            <label>Confirm password</label>
            <input className="input" placeholder="Confirm password" />
          </div>
        </div>
        <div className="footer">
          <p>
            Already have an account? <Link to="/login">login</Link> here
          </p>
          <button className="button" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
