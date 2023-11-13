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
  onSubmit: (data: ISignUpRequest) => void;
  register: UseFormRegister<ISignUpRequest>;
  handleSubmit: UseFormHandleSubmit<ISignUpRequest, undefined>;
}
