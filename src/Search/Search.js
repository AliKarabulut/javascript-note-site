import { useState, useRef, useEffect } from "react";
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

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div
        className={`${styles.inputwrapper} ${
          isFocused ? styles.borderHalf : styles.borderFull
        }`}
      >
        <input
          onChange={(e) => setInputVal(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className={styles.search}
          value={inputVal}
          type="text"
          placeholder="Ara"
        />
        <i className={styles.icon}></i>
      </div>
      {isFocused && <SearchBar send={inputVal} onInputVal={addToInputVal} />}
    </div>
  );
};

export default Search;
