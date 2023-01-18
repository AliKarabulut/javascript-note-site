import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./Navbar/navbar";
import Start from "./Start/Start";
import StartStore from "./store/store";
import TitleCard from "./TitleCard/TitleCard";

function App() {
  const [isStart, setStart] = useState(false);

  const startHandler = () => {
    setStart(true);
  };

  return (
    <StartStore.Provider value={{ isStart: isStart }}>
      <Navbar></Navbar>
      <div className={styles.wrapper}>
        {!isStart && <Start onStart={startHandler} />}
        <div className={styles.bodd}></div>
        <TitleCard />
      </div>
    </StartStore.Provider>
  );
}

export default App;
