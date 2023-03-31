import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./TitleCard.module.css";

const TitleCard = () => {
  const metot = useSelector((state) => state.store.metotHeader);
  const stringMetotlar = useSelector((state) => state.store.stringMetotlar);
  const arrayMetotlar = useSelector((state) => state.store.arrayMetotlar);
  const numberMetotlar = useSelector((state) => state.store.numberMetotlar);

  // console.log(metots)

  //teleefon uyumluluğu
  const [divRight, setDivRight] = useState(0);
  const [fPosition, setFPosition] = useState(0);
  const [oldPosition, setoldPosition] = useState(-220);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const navRef = useRef();

  const handleTouchStart = (e) => {
    setIsMouseDown(true);
    setFPosition(e.touches[0].clientX);
    navRef.current.classList.toggle(styles.animation);
    document.querySelector(`.${styles.swipeArrow}`).style.display = "none"; // swipeArrow elemanını gizle
  };

  const handleTouchMove = (e) => {
    if (!isMouseDown) {
      return;
    }
    setDivRight(fPosition - e.touches[0].clientX);
    // Sidebar açıkken sola doğru kaydıramamak için
    if (oldPosition === 0 && divRight > 0) {
      setIsMouseDown(false);
      setDivRight(0);
      setoldPosition(0);
    }

    //Sidebarı açarken tamamen açıldığında daha fazla sola kaymasını engellemek için
    if (divRight > 220) {
      setIsMouseDown(false);
      setDivRight(0);
      setoldPosition(0);
    }
  };

  const handleTouchEnd = (e) => {
    setIsMouseDown(false);
    setoldPosition(oldPosition + divRight);
    setDivRight(0);

    // ilk if bloğunun amacı animasyon classının buga girmesini engellemek
    if (divRight === 0) {
      setoldPosition(0);
      navRef.current.classList.toggle(styles.animation);
    } else if (divRight > 10) {
      setoldPosition(0);
      navRef.current.classList.toggle(styles.animation);
    } else {
      setoldPosition(-220);
      navRef.current.classList.toggle(styles.animation);
    }
  };

  const handleTouchClose = () => {
    setoldPosition(-220);
  };

  //burda bitti

  //pc de hover mobilde no

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    const handleHover = () => {
      navRef.current.addEventListener("mouseenter", () => {
        navRef.current.style.right = "0";
        document.querySelector(`.${styles.swipeArrow}`).style.display = "none"; // swipeArrow elemanını gizle
      });
      navRef.current.addEventListener("mouseleave", () => {
        navRef.current.style.right = "";
      });
      navRef.current.addEventListener("click", () => {
        navRef.current.style.right = "";
      });
    };
    if (query.matches) {
      handleHover();
    }
  }, []);

  return (
    <div>
      {" "}
      <div className={styles.swipeArrow}>
        <div className={styles.arrow}></div>
        <div className={styles.text}>Swipe</div>
      </div>
      <div
        className={styles.card + " " + styles.animation}
        ref={navRef}
        style={{ "--right": oldPosition + divRight + "px" }}
      >
        {" "}
        <div
          className={styles.mover}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {" "}
        </div>
        <div className={styles.innerCard} onClick={handleTouchClose}>
          {metot === "string" &&
            stringMetotlar.map((is, number) => (
              <Link to={metot + "/" + is} className={styles.cardP} key={is}>
                {" "}
                {number + 1 + ". " + is}
              </Link>
            ))}
          {metot === "number" &&
            numberMetotlar.map((is, number) => (
              <Link to={metot + "/" + is} className={styles.cardP} key={is}>
                {number + 1 + ". " + is}
              </Link>
            ))}
          {metot === "array" &&
            arrayMetotlar.map((is, number) => (
              <Link to={metot + "/" + is} className={styles.cardP} key={is}>
                {number + 1 + ". " + is}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
