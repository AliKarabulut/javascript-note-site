import { useContext, useEffect, useRef, useState } from "react";
import StringMetot from "../Metotlar/StringMetot";
import NumberMetot from "../Metotlar/NumberMetot";
import ArrayMetot from "../Metotlar/ArrayMetot";
import StartStore from "../store/store";
import styles from "./TitleCard.module.css";

const TitleCard = (props) => {
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

  const ctx = useContext(StartStore);
  console.log(ctx.metotHeader);
  const addToMethod = (item) => {
    props.onMetot(item);
  };

  useEffect(() => {
    props.onMetot(StringMetot[0]);
  }, []);

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
        {ctx.metotHeader === "StringMetot" &&
          StringMetot.map((is, number) => (
            <div className={styles.cardP} onClick={addToMethod.bind(null, is)}>
              {" "}
              {number + 1 + ". " + is.title}
            </div>
          ))}
        {ctx.metotHeader === "NumberMetot" &&
          NumberMetot.map((is, number) => (
            <div className={styles.cardP} onClick={addToMethod.bind(null, is)}>
              {number + 1 + ". " + is.title}
            </div>
          ))}
        {ctx.metotHeader === "ArrayMetot" &&
          ArrayMetot.map((is, number) => (
            <div className={styles.cardP} onClick={addToMethod.bind(null, is)}>
              {number + 1 + ". " + is.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TitleCard;
