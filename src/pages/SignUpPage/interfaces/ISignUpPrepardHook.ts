import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import type { ISignUpRequest } from "@interfaces";

export interface ISignUpPrepareHook {
  errors: FieldErrors<ISignUpRequest>;
  onSubmit: (data: ISignUpRequest) => void;
  register: UseFormRegister<ISignUpRequest>;
  handleSubmit: UseFormHandleSubmit<ISignUpRequest, undefined>;
}