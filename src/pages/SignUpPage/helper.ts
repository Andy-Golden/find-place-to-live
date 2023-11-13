import { useForm } from "react-hook-form";
import type { ISignUpRequest } from "@interfaces";

import type { ISignUpPrepareHook } from "./interfaces";

const useSignUpPrepareHook = (): ISignUpPrepareHook => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpRequest>();

  const onSubmit = (data: ISignUpPrepareHook): void => {};

  return {
    errors,
    register,
    onSubmit,
    handleSubmit,
  };
};

export { useSignUpPrepareHook };
