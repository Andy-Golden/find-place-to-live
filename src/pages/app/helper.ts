import { useContext, useEffect, useState } from "react";
import type { IUser } from "@interfaces";
import * as Sentry from "@sentry/react";
import type { FirebaseError } from "firebase/app";

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
      const err = error as FirebaseError;
      Sentry.captureException(error);
      toast.open(err.message, ToastStatus.ERROR);
    }
  };

  return { users };
};

export { useAppPrepareHook };
