import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/navbar";
import Start from "./Start/Start";
import StartStore from "./store/store";

function App() {
  const [isStart, setStart] = useState(false);

  const startHandler = () => {
    setStart(true);
  };

  return (
    <StartStore.Provider value={{ isStart: isStart }}>
      <Navbar></Navbar>
      {!isStart && <Start onStart={startHandler} />}
    </StartStore.Provider>
  );
}

export default App;
