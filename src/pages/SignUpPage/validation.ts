import i18n from "i18next";
import * as Yup from "yup";

import { strongPassword } from "@constants";

const schema = Yup.object().shape({
  fullname: Yup.string().required(i18n.t`error.requiredFullname`),
  email: Yup.string()
    .email(i18n.t`error.notValidEmail`)
    .required(i18n.t`error.requiredEmail`),
  password: Yup.string()
    .min(6)
    .required(i18n.t`error.requiredPassword`)
    .matches(strongPassword, i18n.t`error.strongerPassword`),
  confirmation: Yup.string()
    .required(i18n.t`error.requiredConfirmation`)
    .oneOf([Yup.ref("password")], i18n.t`error.passwordsMustMatch`),
});

export default schema;
