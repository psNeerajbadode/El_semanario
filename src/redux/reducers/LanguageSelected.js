import {LANGUAGESELECTED} from "../actionTypes";

const initialState = {select: false};

const languageSelected = (state = initialState, {type, payload}) => {
  switch (type) {
    case LANGUAGESELECTED:
      return {...state, ...payload};

    default: {
      return state;
      // return [];
    }
  }
};

export default languageSelected;
