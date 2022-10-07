import {LOGIN, SIGNOUT, SIGNUP, UPDATEPROFILE} from "../actionTypes";

const initialState = {};

const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN:
      return {...state, ...payload};
    case SIGNUP:
      return {...state, ...payload};
    case UPDATEPROFILE:
      return {...state, ...payload};

    case SIGNOUT:
      return initialState;
    default: {
      return state;
    }
  }
};

export default authReducer;
