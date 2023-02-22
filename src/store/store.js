import { createSlice } from "@reduxjs/toolkit";

const initialStoreState = { metotlar: {}, metotHeader: "StringMetot" };

const metotSlice = createSlice({
  name: "counter",
  initialState: initialStoreState,
  reducers: {
    addmetot(state, action) {
      state.metotlar = action.payload;
    },
    addMetotHeader(state, action) {
      state.metotHeader = action.payload;
    },
  },
});

export const metotActions = metotSlice.actions;

export default metotSlice.reducer;
