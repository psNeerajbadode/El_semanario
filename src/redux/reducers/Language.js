import {SELECTEDLANGUAGE} from '../actionTypes';

const initialState = {};

const language = (state = initialState, {type, payload}) => {
  switch (type) {
    case SELECTEDLANGUAGE:
      return {...state, ...payload};

    default: {
      return state;
      // return [];
    }
  }
};

export default language;
