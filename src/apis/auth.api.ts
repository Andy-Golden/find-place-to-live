import type { ISignUpRequest, IUser } from "@interfaces";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import { UserRole, UserStatus } from "@enums";
import { auth, db } from "@server";

import { Collections } from "./collections";

const userCollectionRef = collection(db, Collections.USER);

const signUp = async (userSignUpRequest: ISignUpRequest): Promise<IUser> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userSignUpRequest.email,
      userSignUpRequest.password,
    );

    const user: Omit<IUser, "id"> = {
      fullname: userSignUpRequest.fullname,
      email: userCredential.user.email ?? "",
      role: UserRole.USER,
      avatar: "",
      status: UserStatus.ACTIVE,
    };

    const data = await addDoc(userCollectionRef, user);

    return {
      id: data.id,
      ...user,
    };
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export { signUp };
