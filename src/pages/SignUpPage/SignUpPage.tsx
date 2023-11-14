import React from "react";
import { Link } from "react-router-dom";

import { Button, TextInput } from "@components";

import { useSignUpPrepareHook } from "./helper";

import "./styles.scss";

const SignUpPage = (): JSX.Element => {
  const { register, handleSubmit, onSubmit, errors } = useSignUpPrepareHook();
  return (
    <div className="auth-container">
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="register-form__heading">
          <h1 className="title">Sign Up</h1>
          <p className="subtitle">Create your account to get full access</p>
        </div>
        <div className="register-form__input-boxes">
          <div className="single-input-fields">
            <label>Full Name</label>
            <TextInput
              type="text"
              placeholder="Enter full name"
              register={register("fullname")}
            />
            <span className="input-error">{errors.fullname?.message}</span>
          </div>
          <div className="single-input-fields">
            <label>Email</label>
            <TextInput
              type="text"
              placeholder="Enter email address"
              register={register("email")}
            />
            <span className="input-error">{errors.email?.message}</span>
          </div>
          <div className="single-input-fields">
            <label>Password</label>
            <TextInput
              type="password"
              placeholder="Enter password"
              register={register("password")}
            />
            <span className="input-error">{errors.password?.message}</span>
          </div>
          <div className="single-input-fields">
            <label>Confirm password</label>
            <TextInput
              type="password"
              placeholder="Confirm password"
              register={register("confirmation")}
            />
            <span className="input-error">{errors.confirmation?.message}</span>
          </div>
        </div>
        <div className="register-form__footer">
          <p>
            Already have an account? <Link to="/login">login</Link> here
          </p>
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
