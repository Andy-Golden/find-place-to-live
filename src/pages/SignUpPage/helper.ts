import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ISignUpRequest } from "@interfaces";

import { ToastStatus } from "@enums";
import { ToastContext } from "@providers";

import type { ISignUpPrepareHook } from "./interfaces";
import schema from "./validation";

const useSignUpPrepareHook = (): ISignUpPrepareHook => {
  const { t } = useTranslation();
  const toast = useContext(ToastContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpRequest>({ resolver: yupResolver(schema) });

  const onSubmit = (data: ISignUpRequest): void => {
    toast.open("", ToastStatus.SUCCESS);
  };

  return {
    t,
    errors,
    register,
    onSubmit,
    handleSubmit,
  };
};

export { useSignUpPrepareHook };
