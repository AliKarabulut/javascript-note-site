import { useContext } from "react";
import StringMetot from "../Metotlar/StringMetot";
import StartStore from "../store/store";
import styles from "./TitleCard.module.css";

const TitleCard = (props) => {

  const addToMethod = (item) => {
    props.onMetot(item);

  };
  return (
    <div className={styles.card}>
      {StringMetot.map((is) => (
        <div onClick={addToMethod.bind(null, is)}>{is.title}</div>
      ))}
    </div>
  );
};

export default TitleCard;
