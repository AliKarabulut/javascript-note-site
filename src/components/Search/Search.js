import { useState, useRef, useEffect } from "react";
import UseAnimations from "react-useanimations";
import activity from "react-useanimations/lib/activity";

import styles from "./Search.module.css";
import SearchBar from "./Searchbar";

const Search = () => {
  const [inputVal, setInputVal] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!wrapperRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [wrapperRef]);

  const addToInputVal = (value) => {
    setIsFocused(false);
    setInputVal(value);
  };

  const inputChangeHandler = (e) => {
    setInputVal(e.target.value);
    setIsFocused(true);
  };

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div
        className={`${styles.inputwrapper} ${
          isFocused ? styles.borderHalf : styles.borderFull
        }`}
      >
        <input
          onChange={inputChangeHandler}
          onFocus={() => setIsFocused(true)}
          className={styles.search}
          value={inputVal}
          type="text"
          placeholder="Ara"
        />

        <UseAnimations animation={activity}></UseAnimations>
      </div>
      {isFocused && <SearchBar send={inputVal} onInputVal={addToInputVal} />}
    </div>
  );
};

export default Search;
