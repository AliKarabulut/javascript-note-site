import { useContext } from "react";
import StartStore from "../store/store";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  const ctx = useContext(StartStore);
  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>Javascript D.</div>
      {ctx.isStart && (
        <div className={styles.inputwrapper}>
          <input className={styles.search} type="text" placeholder="Ara" />
          <i className={styles.icon}></i>
        </div>
      )}

      {ctx.isStart && (
        <div>
          <button>String</button>
          <button>Number</button>
          <button>Array</button>
          <div className={styles.bar}></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
