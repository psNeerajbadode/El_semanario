import {PAID} from "../actionTypes";

const initialState = {paid: false};

const Paid = (state = initialState, {type, payload}) => {
  switch (type) {
    case PAID:
      return {...state, ...payload};

    default: {
      return state;
      // return [];
    }
  }
};

export default Paid;
