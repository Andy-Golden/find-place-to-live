import type { IUser } from "@interfaces";

export interface IAppPrepareHook {
  users: IUser[];
}
