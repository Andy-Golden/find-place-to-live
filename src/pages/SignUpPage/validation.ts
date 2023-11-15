import * as Yup from "yup";

import { strongPassword } from "@constants";

const schema = Yup.object().shape({
  fullname: Yup.string().required("error.requiredFullname"),
  email: Yup.string()
    .email("error.notValidEmail")
    .required("error.requiredEmail"),
  password: Yup.string()
    .min(6, "error.passwordMustContain6Chars")
    .required("error.requiredPassword")
    .matches(strongPassword, "error.strongerPassword"),
  confirmation: Yup.string()
    .required("error.requiredConfirmation")
    .oneOf([Yup.ref("password")], "error.passwordsMustMatch"),
});

export default schema;
