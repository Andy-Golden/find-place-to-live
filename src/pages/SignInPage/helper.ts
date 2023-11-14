import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ISignInRequest } from "@interfaces";

import type { ISignInPrepareHook } from "./interfaces";
import schema from "./validation";

const useSignInPrepareHook = (): ISignInPrepareHook => {
  const { t } = useTranslation();

  // TODO: setIsLoading will be used when call api
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInRequest>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: ISignInRequest): Promise<void> => {};

  return {
    t,
    errors,
    isLoading,
    onSubmit,
    register,
    handleSubmit,
  };
};

export { useSignInPrepareHook };
