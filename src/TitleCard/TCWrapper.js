import React, { useRef, useState } from "react";
import styles from './TCWrapper.module.css'

const MyComponent = (props) => {
  const [divRight, setDivRight] = useState(0);
  const [fPosition, setFPosition] = useState(-225);
  const [oldPosition, setoldPosition] = useState(0);
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
  };

  const handleTouchEnd = (e) => {
    setIsMouseDown(false);
    setoldPosition(oldPosition + divRight);
    setDivRight(0);

    if (divRight > 10) {
      setoldPosition(200);
      navRef.current.classList.toggle(styles.animation);

      console.log(navRef);
    } else {
      setoldPosition(0);
      navRef.current.classList.toggle(styles.animation);
    }
  };

  return (
    <div
      ref={navRef}
      className={styles.animation}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{"--right": oldPosition + divRight + "px" }}
    >
      {props.children}
    </div>
  );
};

export default MyComponent;
