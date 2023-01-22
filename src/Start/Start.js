import { div } from "react";
import styles from "./Start.module.css";

const Start = (props) => {
  return (
    <div className={styles.startWrapper}>
      <p className={styles.startP}>
        Dökümantasyon öğretmekten ziyade hatırlatma amacı taşımaktadır. Hatalı
        gördüğünüz ya da eklemek istediğiniz şeyler için githubdan destek
        atabilirsiniz :)
      </p>
      <button className={styles.startButton} onClick={props.onStart}>
        Hadi Başlayalım.
      </button>
    </div>
  );
};

export default Start;
