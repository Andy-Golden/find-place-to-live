import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ISignUpRequest } from "@interfaces";
import * as Sentry from "@sentry/react";

import { signUp } from "@apis";
import { ToastStatus } from "@enums";
import { ToastContext } from "@providers";

import type { ISignUpPrepareHook } from "./interfaces";
import schema from "./validation";

const useSignUpPrepareHook = (): ISignUpPrepareHook => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const toast = useContext(ToastContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpRequest>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: ISignUpRequest): Promise<void> => {
    try {
      setIsLoading(true);
      await signUp(data);

      toast.open(t(`message.successSignUp`), ToastStatus.SUCCESS);
      navigate("/");
    } catch (error) {
      const err = error as Error;
      toast.open(err.message, ToastStatus.ERROR);
      Sentry.captureException(err);
    }

    setIsLoading(false);
  };

  return {
    t,
    errors,
    isLoading,
    register,
    onSubmit,
    handleSubmit,
  };
};

export { useSignUpPrepareHook };
