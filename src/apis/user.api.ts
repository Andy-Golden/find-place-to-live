import type { IUser } from "@interfaces";
import type { FirebaseError } from "firebase/app";
import { collection, getDocs } from "firebase/firestore";

import { db } from "@server";

import { Collections } from "./collections";

const userCollectionRef = collection(db, Collections.USER);

const getUsers = async (): Promise<IUser[]> => {
  try {
    const data = await getDocs(userCollectionRef);

    const users: IUser[] = data.docs.map((doc) => {
      const user: IUser = {
        id: doc.id,
        fullname: doc.data().fullname,
        email: doc.data().email,
        role: doc.data().role,
        avatar: doc.data().avatar,
        status: doc.data().status,
      };

      return user;
    });

    return users;
  } catch (error) {
    const err = error as FirebaseError;
    throw new Error(err.message);
  }
};

export { getUsers };
