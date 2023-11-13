import React from "react";
import { Link } from "react-router-dom";

import { useSignUpPrepareHook } from "./helper";

import "./styles.scss";

const SignUpPage = (): JSX.Element => {
  const { register, handleSubmit, onSubmit, errors } = useSignUpPrepareHook();
  return (
    <div className="auth-container">
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="heading">
          <h1 className="title">Sign Up</h1>
          <p className="subtitle">Create your account to get full access</p>
        </div>
        <div className="input-boxes">
          <div className="single-input-fields">
            <label>Full Name</label>
            <input
              className="input"
              placeholder="Enter full name"
              {...register("fullname")}
            />
            <span className="input-error">{errors.fullname?.message}</span>
          </div>
          <div className="single-input-fields">
            <label>Email</label>
            <input
              className="input"
              placeholder="Enter email address"
              {...register("email")}
            />
            <span className="input-error">{errors.email?.message}</span>
          </div>
          <div className="single-input-fields">
            <label>Password</label>
            <input
              className="input"
              placeholder="Enter password"
              {...register("password")}
            />
            <span className="input-error">{errors.password?.message}</span>
          </div>
          <div className="single-input-fields">
            <label>Confirm password</label>
            <input
              className="input"
              placeholder="Confirm password"
              {...register("confirmation")}
            />
            <span className="input-error">{errors.confirmation?.message}</span>
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
