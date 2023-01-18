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

  const startHandler = () => {
    setStart(true);
  };

  const addMetot = props => {
    setItem(props)
    console.log(props)
  }
  
  return (
    <StartStore.Provider value={{ isStart: isStart, metotlar:item}}>
      <Navbar></Navbar>
      {!isStart && <Start onStart={startHandler} />}
      <div className={styles.wrapper}>
        {isStart && <MethodBody></MethodBody>}
        {isStart && <TitleCard onMetot={addMetot}/>}
      </div>
    </StartStore.Provider>
  );
}

export default App;
