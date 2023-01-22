import { useContext, useEffect, useRef, useState } from "react";
import Search from "../Search/Search";
import StartStore from "../store/store";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  const ctx = useContext(StartStore);
  const [position, setPosition] = useState("");
  const clickHandler = (e) => {
    props.onHeader(e.target.id);
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
    const handleResize = () => {
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
  }
  window.addEventListener('resize', handleResize);
  return () => {
      window.removeEventListener('resize', handleResize);
  }
  }, [ctx.isStart]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>Javascript D.</div>
      {ctx.isStart && (
          <Search/>
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
          <button
            id="StringMetot"
            onClick={clickHandler}
            className={styles.navButton + " " + styles.active}
          >
            String
          </button>
          <button
            id="NumberMetot"
            onClick={clickHandler}
            className={styles.navButton}
          >
            Number
          </button>
          <button
            id="ArrayMetot"
            onClick={clickHandler}
            className={styles.navButton}
          >
            Array
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
