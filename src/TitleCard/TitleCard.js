import { useContext } from "react";
import StringMetot from "../StringMetot/StringMetot";
import StartStore from "../store/store";
import styles from "./TitleCard.module.css";

const TitleCard = (props) => {

  const addToMethod = (item) => {
    props.onMetot(item);

  };
  return (
    <div className={styles.card}>
      {StringMetot.map((is) => (
        <div onClick={addToMethod.bind(null, is)}>{is.id}</div>
      ))}
    </div>
  );
};

export default TitleCard;
