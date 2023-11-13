import React from "react";
import { Link } from "react-router-dom";

import { SelectLanguage } from "@common";
import { Button, TextInput } from "@components";

import { useSignUpPrepareHook } from "./helper";

import "./styles.scss";

const SignUpPage = (): JSX.Element => {
  const { t, register, handleSubmit, onSubmit, errors } =
    useSignUpPrepareHook();
  return (
    <div className="auth-container">
      <form
        autoComplete="off"
        className="register-form"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="lang-layout">
          <SelectLanguage />
        </div>
        <div className="register-form__heading">
          <h1 className="title">{t("signUp")}</h1>
          <p className="subtitle">{t("signUpPage.subTitle")}</p>
        </div>
        <div className="register-form__input-boxes">
          <div className="single-input-fields">
            <label>{t("signUpPage.fullname")}</label>
            <TextInput
              type="text"
              placeholder={t("signUpPage.enterFullname")}
              register={register("fullname")}
            />
            <span className="input-error">{errors.fullname?.message}</span>
          </div>
          <div className="single-input-fields">
            <label>{t("email")}</label>
            <TextInput
              type="text"
              placeholder={t("enterEmail")}
              register={register("email")}
            />
            <span className="input-error">{errors.email?.message}</span>
          </div>
          <div className="single-input-fields">
            <label>{t("password")}</label>
            <TextInput
              type="text"
              placeholder={t("enterPassword")}
              register={register("password")}
            />
            <span className="input-error">{errors.password?.message}</span>
          </div>
          <div className="single-input-fields">
            <label>{t("signUpPage.confirmation")}</label>
            <TextInput
              type="text"
              placeholder={t("signUpPage.enterConfirmation")}
              register={register("confirmation")}
            />
            <span className="input-error">{errors.confirmation?.message}</span>
          </div>
        </div>
        <div className="register-form__footer">
          <p>
            {t("signUpPage.alreadyHaveAccount")}
            <Link to="/login">{t("signIn")}</Link> {t("signUpPage.here")}
          </p>
          <Button type="submit">{t("signUp")}</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
