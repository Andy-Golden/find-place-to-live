import React from "react";
import { Link } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";

import { SelectLanguage } from "@common";
import { Button, TextInput } from "@components";

import { useSignInPrepareHook } from "./helper";

import "./styles.scss";

const SignInPage = (): JSX.Element => {
  const { t, errors, register, handleSubmit, onSubmit } =
    useSignInPrepareHook();
  return (
    <div className="auth-container">
      <form
        autoComplete="off"
        className="login-form"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="lang-form-layout">
          <SelectLanguage />
        </div>
        <div className="login-form__heading">
          <h1 className="title">{t("signIn")}</h1>
          <p className="subtitle">{t("signInPage.subTitle")}</p>
        </div>
        <div className="login-form__input-boxes">
          <div className="single-input-fields">
            <label>{t("email")}</label>
            <TextInput
              type="text"
              placeholder={t("enterEmail")}
              register={register("email")}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <span className="input-error">{t(`${message}`)}</span>
              )}
            />
          </div>
          <div className="single-input-fields">
            <label>{t("password")}</label>
            <TextInput
              type="password"
              placeholder={t("enterPassword")}
              register={register("password")}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <span className="input-error">{t(`${message}`)}</span>
              )}
            />
          </div>
        </div>
        <div className="login-form__footer">
          <p>
            {t("signInPage.dontHaveAccount")}
            <Link to="/signUp">{t("signUp")}</Link> {t("signInPage.here")}
          </p>
          <Button type="submit">{t("signIn")}</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
