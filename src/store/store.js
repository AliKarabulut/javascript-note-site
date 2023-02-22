import { createSlice } from "@reduxjs/toolkit";


const initialStoreState = { metotlar: {}, metotHeader: "StringMetot" };

const metotSlice = createSlice({
    name: "counter",
    initialState: initialStoreState,
    reducers: {
      addmetot(state, action) {
        state.metotlar = action.payload
      },
      addMetotHeader(state,action) {
        state.metotHeader = action.payload
      },
    },
  });

export const metotActions = metotSlice.actions;

export default metotSlice.reducer;

// import React from "react";

// const StartStore = React.createContext({

//     isStart: false,
//     metotlar: [],
//     metotHeader: ""
// })

// export const StartcontextProvider = (props) =>{
//     return <StartStore.Provider>{props.children}</StartStore.Provider>
// }

// export default StartStore