import { useEffect, useState } from "react";
import type { IUser } from "@interfaces";
import * as Sentry from "@sentry/react";

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
      Sentry.captureException(error);
    }
  };

  return { users };
};

export { useAppPrepareHook };
