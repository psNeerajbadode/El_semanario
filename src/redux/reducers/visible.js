import {VISIBLE} from "../actionTypes";

const initialState = {};

const visible = (state = initialState, {type, payload}) => {
  switch (type) {
    case VISIBLE:
      return {...state, ...payload};

    default: {
      return state;
      return {};
    }
  }
};

export default visible;
