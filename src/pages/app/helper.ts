import { useEffect, useState } from "react";
import type { IUser } from "@interfaces";
import * as Sentry from "@sentry/react";
import type { FirebaseError } from "firebase/app";

import { getUsers } from "@apis";

import type { IAppPrepareHook } from "./interfaces";

const useAppPrepareHook = (): IAppPrepareHook => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    void getUserList();
  }, []);

  const getUserList = async (): Promise<void> => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      const err = error as FirebaseError;
      Sentry.captureException(err);
    }
  };

  return { users };
};

export { useAppPrepareHook };
