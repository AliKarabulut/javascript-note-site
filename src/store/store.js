import React from "react";

const Start = React.createContext({

    setStart: false
})

export const StartcontextProvider = (props) =>{
    return <Start.Provider>{props.children}</Start.Provider>
}

export default Start