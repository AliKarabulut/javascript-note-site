import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { metotActions } from "../../store/store";
import { FaBars, FaTimes } from "react-icons/fa";
import Search from "../Search/Search";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const metot = useSelector((state) => state.store.metotHeader);
  const [position, setPosition] = useState("");
  const navRef = useRef();
  const ref = useRef();

  useEffect(() => {
    const handleResize = () => {
      const el = navRef.current.querySelector(`#${metot}`);

      const { top, width, height, bottom } = el.getBoundingClientRect();
      const left = el.offsetLeft;
      setPosition({
        left,
        top,
        width,
        height,
        bottom,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [metot]);

  const clickHandler = (e) => {
    dispatch(metotActions.addMetotHeader(e.target.id));
    navRef.current.classList.toggle(styles["responsive_nav"]);
  };

  const showNavBar = () => {
    navRef.current.classList.toggle(styles["responsive_nav"]);
  };

  return (
    <nav className={styles.navbar}>
      <Link to='' className={styles.name}>Javascript D.</Link>
      <Search />

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
        <div className={styles.metNames} ref={navRef}>
          <button
            id="string"
            onClick={clickHandler}
            className={styles.metButton}
          >
            String
          </button>
          <button
            id="number"
            onClick={clickHandler}
            className={styles.metButton}
          >
            Number
          </button>
          <button
            id="array"
            onClick={clickHandler}
            className={styles.metButton}
          >
            Array
          </button>
          <button
            className={styles["nav-btn"] + " " + styles["nav-close-btn"]}
            onClick={showNavBar}
          >
            {" "}
            <FaTimes />{" "}
          </button>
        </div>
        <button className={styles["nav-btn"]} onClick={showNavBar}>
          {" "}
          <FaBars />{" "}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
