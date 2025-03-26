// src/store/index.js
import { combineReducers } from "redux";
import app from "./app";
// @ts-ignore
import storage from "redux-persist/lib/storage";

import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["screen", "modal", "auth"],
};
const appReducer = combineReducers({
  app,
});
const reducer = (state: any, action: any) => {
  return appReducer(state, action);
};
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof appReducer>;
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
