import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { metotActions } from "../store/store";
import { FaBars, FaTimes } from "react-icons/fa";

import Search from "../Search/Search";
import styles from "./navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.islogin)
  const [position, setPosition] = useState("");
  const clickHandler = (e) => {
    dispatch(metotActions.addMetotHeader(e.target.id));
    const { top, width, height, bottom } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    setPosition({
      left,
      top,
      width,
      height,
      bottom,
    });
    navRef.current.classList.toggle(styles["responsive_nav"]);
  };
  const ref = useRef();

  useEffect(() => {
    if (isLogin) {
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
  }, [isLogin]);

  // Pencere resize olduğunda barın pozisyonunu değiştirmek için kod parçası
  useEffect(() => {
    const handleResize = () => {
      if (isLogin) {
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
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isLogin]);

  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle(styles["responsive_nav"]);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>Javascript D.</div>
      {isLogin && <Search />}

      {isLogin && (
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
              id="StringMetot"
              onClick={clickHandler}
              className={styles.metButton + " " + styles.active}
            >
              String
            </button>
            <button
              id="NumberMetot"
              onClick={clickHandler}
              className={styles.metButton}
            >
              Number
            </button>
            <button
              id="ArrayMetot"
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
      )}
    </nav>
  );
};

export default Navbar;
