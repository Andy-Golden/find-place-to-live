import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import type { ISignInRequest } from "@interfaces";
import type { TFunction } from "i18next";

export interface ISignInPrepareHook {
  t: TFunction<"Translation", undefined>;
  errors: FieldErrors<ISignInRequest>;
  isLoading: boolean;
  onSubmit: (data: ISignInRequest) => Promise<void>;
  register: UseFormRegister<ISignInRequest>;
  handleSubmit: UseFormHandleSubmit<ISignInRequest, undefined>;
}
