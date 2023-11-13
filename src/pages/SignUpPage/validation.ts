import * as Yup from "yup";

import { strongPassword } from "@constants";

const schema = Yup.object().shape({
  fullname: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(6)
    .required()
    .matches(strongPassword, "create stronger password"),
  confirmation: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "passwords must match"),
});

export default schema;
