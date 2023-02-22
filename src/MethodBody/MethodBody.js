import { useContext } from "react";
import { useSelector } from "react-redux";
import StartStore from "../store/store";
import styles from "./MethodBody.module.css";

const MethodBody = (props) => {

  const metot = useSelector((state) => state.store.metotlar)
  console.log(metot)
  return (
    <div className={styles.bodd}>
      {Object.values(metot).length > 0 && (
        <div className={styles.card}>
          <div className={styles.title}>{metot.id}</div>
          {metot.paragraph?.map((item) => (
            <div className={styles.paragraph}>{item}</div>
          ))}

          <div className={styles.syntax}>
            <p>{"Syntax => {"}</p>
            <p>{metot.syntax?.map(el => (<p>{el}</p>))}</p>
            <p>{"}"}</p>
          </div>
          <div className={styles.valout}>
            {" "}
            <div className={styles.value}>{metot.value}</div>
            <div>
              {metot.output?.map((item) => (
                <div className={styles.output}>
                  {item.map((el) => (
                    <div className={styles.childoutput}>{el}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MethodBody;
