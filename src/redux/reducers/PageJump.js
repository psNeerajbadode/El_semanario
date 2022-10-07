import {JUMPPAGE} from "../actionTypes";

const initialState = {};

const PageJump = (state = initialState, {type, payload}) => {
  switch (type) {
    case JUMPPAGE:
      return {...state, ...payload};

    default: {
      return state;
      // return [];
    }
  }
};

export default PageJump;
