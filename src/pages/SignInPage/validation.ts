import * as Yup from "yup";

import { strongPassword } from "@constants";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("error.notValidEmail")
    .required("error.requiredEmail"),
  password: Yup.string()
    .min(6, "error.passwordMustContain6Chars")
    .required("error.requiredPassword")
    .matches(strongPassword, "error.strongerPassword"),
});

export default schema;
