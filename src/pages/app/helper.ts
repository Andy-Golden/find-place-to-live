import { useContext, useEffect, useState } from "react";
import type { IUser } from "@interfaces";
import * as Sentry from "@sentry/react";
import { ToastContext } from "contexts/toast-context";
import type { FirebaseError } from "firebase/app";

import { getUsers } from "@apis";

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
      toast.open(err.message);
    }
  };

  return { users };
};

export { useAppPrepareHook };
