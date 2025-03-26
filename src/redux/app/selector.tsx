import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const appSelector = (state: RootState) => {
  return state.app;
};

export const selectAppSelector = createSelector(appSelector, (state) => state);
export const selectProduct = createSelector(
  appSelector,
  (state) => state.product
);
export const selectNumberCart = createSelector(
  appSelector,
  (appState) => appState.numberCart
);
