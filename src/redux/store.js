import {createStore} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "./reducers/root";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: [""],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);

export let persistor = persistStore(store);
export default store;
