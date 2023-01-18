import StringMetot from "../StringMetot/StringMetot"
import styles from "./TitleCard.module.css";

const TitleCard = (props) => {
  return <div className={styles.card}>
    {StringMetot.map(is =>(<div>{is.id}</div>))}
  </div>;
};

export default TitleCard;
