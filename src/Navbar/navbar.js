import { useContext, useEffect, useRef, useState } from "react";
import StartStore from "../store/store";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  const ctx = useContext(StartStore);
  const [position, setPosition] = useState("");
  const clickHandler = (e) => {
    const { top, width, height, bottom } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    setPosition({
      left,
      top,
      width,
      height,
      bottom,
    });
  };
  const ref = useRef();

  useEffect(() => {
    if (ctx.isStart) {
      const el = ref.current.querySelector(`.${styles.active}`);
      const { top, width, height, bottom } = el.getBoundingClientRect();
      const left = el.offsetLeft;
      setPosition({
        left,
        top,
        width,
        height,
        bottom,
      });
    }
  }, [ctx.isStart]);

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
        <div className={styles.blist} ref={ref}>
          {Object.values(position).length > 0 && (
            <div
              className={styles.bar}
              style={{
                "--left": position.left + "px",
                "--top": position.top + position.height + 2 + "px",
                "--width": position.width + "px",
                "--height": position.height + "px",
              }}
            ></div>
          )}
          <button onClick={clickHandler} className={styles.navButton + " " + styles.active}>
            Number
          </button>
          <button onClick={clickHandler} className={styles.navButton}>
            Array
          </button>
          <button onClick={clickHandler} className={styles.navButton}>
            String
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
