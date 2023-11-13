import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ISignUpRequest } from "@interfaces";

import type { ISignUpPrepareHook } from "./interfaces";
import schema from "./validation";

const useSignUpPrepareHook = (): ISignUpPrepareHook => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpRequest>({ resolver: yupResolver(schema) });

  const onSubmit = (data: ISignUpRequest): void => {};

  return {
    errors,
    register,
    onSubmit,
    handleSubmit,
  };
};

export { useSignUpPrepareHook };
