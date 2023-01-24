import { useContext, useEffect } from "react";
import StringMetot from "../Metotlar/StringMetot";
import NumberMetot from "../Metotlar/NumberMetot";
import ArrayMetot from "../Metotlar/ArrayMetot";
import StartStore from "../store/store";
import styles from "./TitleCard.module.css";

const TitleCard = (props) => {
  const ctx = useContext(StartStore);
  console.log(ctx.metotHeader);
  const addToMethod = (item) => {
    props.onMetot(item);
  };

  useEffect(() => {
    props.onMetot(StringMetot[0]);
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.innerCard}>
        <ol>
          {ctx.metotHeader === "StringMetot" &&
            StringMetot.map((is) => (
              <li className={styles.cardP} onClick={addToMethod.bind(null, is)}>
                {" "}
                {is.title}
              </li>
            ))}
          {ctx.metotHeader === "NumberMetot" &&
            NumberMetot.map((is) => (
              <li className={styles.cardP} onClick={addToMethod.bind(null, is)}>
                {is.title}
              </li>
            ))}
          {ctx.metotHeader === "ArrayMetot" &&
            ArrayMetot.map((is) => (
              <li className={styles.cardP} onClick={addToMethod.bind(null, is)}>
                {is.title}
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default TitleCard;
