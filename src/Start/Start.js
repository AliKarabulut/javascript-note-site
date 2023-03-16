import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginActions } from "../store/login";
import styles from "./Start.module.css";

const Start = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(loginActions.login());
  };

  return (
    <div className={styles.startWrapper}>
      <p className={styles.startP}>
        Dökümantasyon öğretmekten ziyade hatırlatma amacı taşımaktadır. Hatalı
        gördüğünüz ya da eklemek istediğiniz şeyler için githubdan destek
        atabilirsiniz :)
      </p>
      <Link to='/method' className={styles.btn + " " + styles.b13} onClick={loginHandler}>
        Hadi Başlayalım.
      </Link>
    </div>
  );
};

export default Start;
