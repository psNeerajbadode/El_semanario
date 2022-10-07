import {combineReducers} from "redux";
import authReducer from "./auth";
import language from "./Language";
import languageSelected from "./LanguageSelected";
import PageJump from "./PageJump";
import Paid from "./Paid";
import visible from "./visible";

const rootReducer = combineReducers({
  auth: authReducer,
  language: language,
  languageSelected: languageSelected,
  visible: visible,
  PageJump: PageJump,
  paid: Paid,
});

// Exports
export default rootReducer;
