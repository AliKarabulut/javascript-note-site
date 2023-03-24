import styles from "./MethodBody.module.css";

const MethodBody = ({ data }) => {
  return (
    <div className={styles.bodd}>
      {
        <div className={styles.card}>
          <div className={styles.title}>{data.name}</div>
          {data.Paragraph?.map((item, number) => (
            <div className={styles.paragraph} key={number}>
              {item}
            </div>
          ))}
          <div className={styles.syntax}>
            <p>{"Syntax => {"}</p>
            <p className={styles.syntaxp}>
              {data.syntax?.map((el, number) => (
                <p key={number}>{el}</p>
              ))}
            </p>
            <p>{"}"}</p>
          </div>
          <div className={styles.valout}>
            {" "}
            <div className={styles.value}>{data.variable}</div>
            <div>
              {data.output?.map((item, number) => (
                <div className={styles.output} key={number}>
                  <div className={styles.childoutput} key={number}>
                    <p>{item.code}</p>
                    <p>Çıktı: {item.output}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default MethodBody;
