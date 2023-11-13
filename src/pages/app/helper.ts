import { useContext, useEffect, useState } from "react";
import type { IUser } from "@interfaces";
import * as Sentry from "@sentry/react";

import { getUsers } from "@apis";
import { ToastStatus } from "@enums";
import { ToastContext } from "@providers";

import type { IAppPrepareHook } from "./interfaces";

const useAppPrepareHook = (): IAppPrepareHook => {
  const [users, setUsers] = useState<IUser[]>([]);
  const toast = useContext(ToastContext);

  useEffect(() => {
    void getUserList();
  }, []);

  const getUserList = async (): Promise<void> => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      const err = error as Error;
      toast.open(err.message, ToastStatus.ERROR);
      Sentry.captureException(error);
    }
  };

  return { users };
};

export { useAppPrepareHook };
