import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
  islogin: false,
};

const loginSlice = createSlice({
  name: "Login",
  initialState: initialLoginState,
  reducers: {
    login(state) {
      state.islogin = true;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
