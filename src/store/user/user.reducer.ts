import { UserData } from "../../utils/firebase/firebase.utils";
import { AnyAction } from "redux";
import { USER_ACTION_TYPES } from "./user.types";

type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
