import { createSlice } from "@reduxjs/toolkit";
// type User = {
//   name: string;
//   email: string;
//   phone: string;
//   userID: number;
// };

const initialState = {
  user: null,
  isLogin: false,
  refresh: true,
  numberCart: null,
  product: null,
};

const { reducer, actions } = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
    setLogin: (state) => {
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
    },
    refreshAPI: (state) => {
      state.refresh = !state.refresh;
    },
    setNumberCart: (state, action) => {
      state.numberCart = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});
export const {
  setUserInfo,
  setLogin,
  setLogout,
  refreshAPI,
  setNumberCart,
  setProduct,
} = actions;

export default reducer;
