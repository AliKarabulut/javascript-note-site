import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login";
import storeReducer from "./store";

const store = configureStore({
  reducer: { login: loginReducer, store: storeReducer },
});

export default store;
