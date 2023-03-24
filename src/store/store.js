import { createSlice } from "@reduxjs/toolkit";

const initialStoreState = {
  stringMetotlar: [],
  arrayMetotlar: [],
  numberMetotlar: [],
  metotHeader: "string",
};

const metotSlice = createSlice({
  name: "counter",
  initialState: initialStoreState,
  reducers: {
    addArray(state, action) {
      state.arrayMetotlar.push(action.payload);
    },
    addString(state, action) {
      state.stringMetotlar.push(action.payload);
    },
    addNumber(state, action) {
      state.numberMetotlar.push(action.payload);
    },
    addMetotHeader(state, action) {
      state.metotHeader = action.payload;
    },
  },
});

export const metotActions = metotSlice.actions;

export default metotSlice.reducer;
