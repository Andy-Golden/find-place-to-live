import React from "react";
import { Link } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";

import { SelectLanguage } from "@common";
import { Button, Loading, TextInput } from "@components";

import { useSignUpPrepareHook } from "./helper";

import "./styles.scss";

const SignUpPage = (): JSX.Element => {
  const { t, isLoading, register, handleSubmit, onSubmit, errors } =
    useSignUpPrepareHook();

  return (
    <div className="auth-container">
      {isLoading && <Loading />}
      {!isLoading && (
        <form
          autoComplete="off"
          className="register-form"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="lang-form-layout">
            <SelectLanguage />
          </div>
          <div className="register-form__heading">
            <h1 className="title">{t("signUp")}</h1>
            <p>
              {t("signUpPage.alreadyHaveAccount")}
              <Link to="/signIn">{t("signIn")}</Link> {t("signUpPage.here")}
            </p>
          </div>
          <div className="register-form__input-boxes">
            <div className="single-input-fields">
              <label>{t("signUpPage.fullname")}</label>
              <TextInput
                type="text"
                placeholder={t("signUpPage.enterFullname")}
                register={register("fullname")}
              />
              <ErrorMessage
                errors={errors}
                name="fullname"
                render={({ message }) => (
                  <span className="input-error">{t(`${message}`)}</span>
                )}
              />
            </div>
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
            <div className="single-input-fields">
              <label>{t("signUpPage.confirmation")}</label>
              <TextInput
                type="password"
                placeholder={t("signUpPage.enterConfirmation")}
                register={register("confirmation")}
              />
              <ErrorMessage
                errors={errors}
                name="confirmation"
                render={({ message }) => (
                  <span className="input-error">{t(`${message}`)}</span>
                )}
              />
            </div>
          </div>
          <div className="register-form__footer">
            <Button type="submit">{t("signUp")}</Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignUpPage;
