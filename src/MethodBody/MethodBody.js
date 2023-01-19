import { useContext } from "react";
import StartStore from "../store/store";
import styles from "./MethodBody.module.css";

const MethodBody = (props) => {
  const ctx = useContext(StartStore);
  return (
    <div className={styles.bodd}>
      {Object.values(ctx.metotlar).length > 0 && (
        <div className={styles.card}>
          <div className={styles.title}>{ctx.metotlar.id}</div>
          {ctx.metotlar.paragraph?.map((item) => (
            <div className={styles.paragraph}>{item}</div>
          ))}

          <div className={styles.syntax}>
            <p>{"Syntax => {"}</p>
            <p>{ctx.metotlar.syntax?.map(el => (<p>{el}</p>))}</p>
            <p>{"}"}</p>
          </div>
          <div className={styles.valout}>
            {" "}
            <div className={styles.value}>{ctx.metotlar.value}</div>
            <div>
              {ctx.metotlar.output?.map((item) => (
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
