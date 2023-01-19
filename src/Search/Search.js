import { useState } from "react";
import styles from "./Search.module.css";
import SearchBar from "./Searchbar";

const Search = (props) => {
  const [inputVal, setInputVal] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.inputwrapper} ${isFocused ? styles.borderHalf : styles.borderFull}`}>
        <input
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          className={styles.search}
          type="text"
          placeholder="Ara"
        />
        <i className={styles.icon}></i>
      </div>
      <SearchBar send={inputVal} />
    </div>
  );
};

export default Search;
