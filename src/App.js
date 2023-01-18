import { useState } from "react";
import styles from "./App.module.css";
import MethodBody from "./MethodBody/MethodBody";
import Navbar from "./Navbar/navbar";
import Start from "./Start/Start";
import StartStore from "./store/store";
import TitleCard from "./TitleCard/TitleCard";

function App() {
  const [isStart, setStart] = useState(false);
  const [item, setItem] = useState([]);
  const [header, setHeader] = useState("StringMetot");

  const startHandler = () => {
    setStart(true);
  };

  const addHeader = (props) => {
    setHeader(props);
  };
  const addMetot = (props) => {
    setItem(props);
  };

  return (
    <StartStore.Provider
      value={{ isStart: isStart, metotlar: item, metotHeader: header }}
    >
      <Navbar onHeader={addHeader}></Navbar>
      {!isStart && <Start onStart={startHandler} />}
      <div className={styles.wrapper}>
        {isStart && <MethodBody></MethodBody>}
        {isStart && <TitleCard onMetot={addMetot} />}
      </div>
    </StartStore.Provider>
  );
}

export default App;
