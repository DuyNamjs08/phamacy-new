import counterReducer from "../feature/homeSlice";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["home"],
};
const rootReducer = combineReducers({
  home: counterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
export const persistor = persistStore(store);
