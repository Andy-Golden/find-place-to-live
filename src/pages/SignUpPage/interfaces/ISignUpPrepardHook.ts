import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import type { ISignUpRequest } from "@interfaces";
import type { TFunction } from "i18next";

export interface ISignUpPrepareHook {
  t: TFunction<"Translation", undefined>;
  errors: FieldErrors<ISignUpRequest>;
  isLoading: boolean;
  onSubmit: (data: ISignUpRequest) => Promise<void>;
  register: UseFormRegister<ISignUpRequest>;
  handleSubmit: UseFormHandleSubmit<ISignUpRequest, undefined>;
}
