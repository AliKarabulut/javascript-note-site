import { useContext } from "react";
import StartStore from "../store/store";
import styles from "./MethodBody.module.css";

const MethodBody = (props) => {
  const ctx = useContext(StartStore);
  return (
    <div className={styles.bodd}>
      <div>{ctx.metotlar.id}</div>
      <div>{ctx.metotlar.paragraph?.map((item) => (<div>{item}</div> ))}</div>
    </div>

  );
};

export default MethodBody;
