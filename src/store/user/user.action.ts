import { User } from "firebase/auth";

import { USER_ACTION_TYPES } from "./user.types";

import {
  UserData,
  AdditionalInformation,
} from "../../utils/firebase/firebase.utils";

export const signInSuccess = (user: UserData & { id: string }) => {
  return {
    type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailed = (error: Error) => {
  return {
    type: USER_ACTION_TYPES.SIGN_IN_FAILED,
    payload: error,
  };
};

export const signUpSuccess = (
  user: User,
  additionalDetails: AdditionalInformation
) => {
  return {
    type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    payload: { user, additionalDetails },
  };
};

export const googleSignInStart = () => {
  return {
    type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
  };
};

export const emailSignInStart = (emailAndPassword: {
  email: string;
  password: string;
}) => {
  return {
    type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};

export const signUpStart = (userCredentials: {
  name: string;
  email: string;
  password: string;
}) => {
  const { name, ...rest } = userCredentials; // Destructure name from userCredentials
  const payload = {
    ...rest,
    displayName: name, // Add displayName property with the value of name
  };
  return {
    type: USER_ACTION_TYPES.SIGN_UP_START,
    payload: payload,
  };
};
