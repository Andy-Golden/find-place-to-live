import type { IUser } from "@interfaces";
import { collection, getDocs } from "firebase/firestore";

import { db } from "@server";

import { Collections } from "./collections";

const userCollectionRef = collection(db, Collections.USER);

const getUsers = async (): Promise<IUser[]> => {
  try {
    const data = await getDocs(userCollectionRef);

    const users: IUser[] = data.docs.map((doc) => {
      const { fullname, email, role, avatar, status } = doc.data();

      const user: IUser = {
        id: doc.id,
        fullname,
        email,
        role,
        avatar,
        status,
      };
      return user;
    });

    return users;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export { getUsers };
