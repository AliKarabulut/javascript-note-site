import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { metotActions } from "../store/store";
import StringMetot from "../Metotlar/StringMetot";
import NumberMetot from "../Metotlar/NumberMetot";
import ArrayMetot from "../Metotlar/ArrayMetot";
import styles from "./TitleCard.module.css";
import { Link } from "react-router-dom";

const TitleCard = (props) => {
  const dispatch = useDispatch();
  const metot = useSelector((state) => state.store.metotHeader);

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

  const addToMethod = (e) => {
    dispatch(metotActions.addmetot(e));
  };


  return (
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
        {metot === "StringMetot" &&
          StringMetot.map((is, number) => (
            <Link to={is.id} className={styles.cardP} onClick={addToMethod.bind(null, is)} key={is.id }>
              {" "}
              {number + 1 + ". " + is.title}
            </Link>
          ))}
        {metot === "NumberMetot" &&
          NumberMetot.map((is, number) => (
            <Link to={is.id} className={styles.cardP} onClick={addToMethod.bind(null, is)} key={is.id }>
              {number + 1 + ". " + is.title}
            </Link>
          ))}
        {metot === "ArrayMetot" &&
          ArrayMetot.map((is, number) => (
            <Link to={is.id} className={styles.cardP} onClick={addToMethod.bind(null, is)} key={is.id }>
              {number + 1 + ". " + is.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TitleCard;
