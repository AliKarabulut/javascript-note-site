import React from "react";

const StartStore = React.createContext({

    isStart: false,
    metotlar: []
})

export const StartcontextProvider = (props) =>{
    return <StartStore.Provider>{props.children}</StartStore.Provider>
}

export default StartStore