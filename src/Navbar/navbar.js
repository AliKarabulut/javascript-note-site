import { useContext } from "react";
import StartStore from "../store/store";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  const ctx = useContext(StartStore);
  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>Javascript D.</div>
      {ctx.isStart && (
        <div>
          <input className={styles.search} type="text" placeholder="Ara" />
          <i></i>
          </div>
      )}

      {ctx.isStart && (
        <ul>
          <li>
            <a href="/">String</a>
          </li>
          <li>
            <a href="/">Number</a>
          </li>
          <li>
            <a href="/">Array</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
