import { useEffect, useState } from "react";
import type { IUser } from "@interfaces";

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
      console.log("🚀 ~ file: helper.ts:21 ~ getUserList ~ error:", error);
    }
  };

  return { users };
};

export { useAppPrepareHook };
