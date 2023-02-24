import { useSelector } from "react-redux";

import styles from "./MethodBody.module.css";

const MethodBody = (props) => {
  const metot = useSelector((state) => state.store.metotlar);
  console.log(metot);
  return (
    <div className={styles.bodd}>
      {metot !== undefined && (
        <div className={styles.card}>
          <div className={styles.title}>{metot.id}</div>
          {metot.paragraph?.map((item, number) => (
            <div className={styles.paragraph} key={number}>
              {item}
            </div>
          ))}
          <div className={styles.syntax}>
            <p>{"Syntax => {"}</p>
            <p>
              {metot.syntax?.map((el, number) => (
                <p key={number}>{el}</p>
              ))}
            </p>
            <p>{"}"}</p>
          </div>
          <div className={styles.valout}>
            {" "}
            <div className={styles.value}>{metot.value}</div>
            <div>
              {metot.output?.map((item, number) => (
                <div className={styles.output} key={number}>
                  {item.map((el, number) => (
                    <div className={styles.childoutput} key={number}>
                      {el}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {metot === undefined && (
        <div className={styles.card}>
          <div className={styles.title}>Aradığınız metot bulunamadı</div>
        </div>
      )}
    </div>
  );
};

export default MethodBody;
