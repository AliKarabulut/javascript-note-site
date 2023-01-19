import { useContext, useEffect } from "react";
import StringMetot from "../Metotlar/StringMetot";
import NumberMetot from "../Metotlar/NumberMetot";
import ArrayMetot from "../Metotlar/ArrayMetot";
import StartStore from "../store/store";
import styles from "./TitleCard.module.css";


const TitleCard = (props) => {
  const ctx = useContext(StartStore);
  console.log(ctx.metotHeader)
  const addToMethod = (item) => {
    props.onMetot(item);

  };

  useEffect(() => {
    props.onMetot(StringMetot[0])
  
  }, [])
  
  return (
    <div className={styles.card}>
      {ctx.metotHeader === "StringMetot" && StringMetot.map((is) => (
        <div onClick={addToMethod.bind(null, is)}>{is.title}</div>
      ))}
            {ctx.metotHeader === "NumberMetot" && NumberMetot.map((is) => (
        <div onClick={addToMethod.bind(null, is)}>{is.title}</div>
      ))}
            {ctx.metotHeader === "ArrayMetot" && ArrayMetot.map((is) => (
        <div onClick={addToMethod.bind(null, is)}>{is.title}</div>
      ))}
    </div>
  );
};

export default TitleCard;
