import { createSlice } from "@reduxjs/toolkit";

const initialStoreState = {
  metotlar: {
    name: "StringMetot",
    id: "at",
    title: "at",
    syntax: ["at(index)", "at(index00)"],
    value: "const pangram = 'Pijamalı hasta yağız şoföre çabucak güvendi.'",
    paragraph: [
      "Bir tam sayı değeri alır ve stringte karşılık gelen değeri döndürür.",
      "Verilen değer bulunamazsa `undefinied` döndürür.",
    ],
    output: [
      ["pangram.at(5)", "//Çıktı: a"],
      ["pangram.at(-5)", "//Çıktı: e"],
    ],
  },
  metotHeader: "StringMetot",
};

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
